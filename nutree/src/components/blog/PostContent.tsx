import type { CSSProperties, ReactNode } from 'react'

/*
 * Renderer for the blog markdown dialect used in content/blog/*.md.
 *
 * Blocks:  ## / ### / #### headings, paragraphs (one per line), `- ` and `1. ` lists
 *          (nested by 2-space indent), `> ` blockquotes, `| a | b |` tables, `---` rules,
 *          `![alt](src)` images, `-> [label](url)` buttons, and containers:
 *          :::lead :::eyebrow :::callout :::cta :::refs :::disclaimer :::faq (items start with `??? Question`).
 * Inline:  **bold**, *italic*, [text](url), ![alt](src), <sup>, <sub>, <br>, backslash escapes.
 */

type Block =
  | { type: 'heading'; level: 2 | 3 | 4; text: string; id: string }
  | { type: 'para'; text: string }
  | { type: 'list'; ordered: boolean; start: number; items: ListItem[] }
  | { type: 'quote'; children: Block[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'hr' }
  | { type: 'image'; alt: string; src: string }
  | { type: 'buttons'; items: { label: string; href: string }[] }
  | { type: 'container'; name: string; children: Block[] }
  | { type: 'faq'; items: { q: string; children: Block[] }[] }

type ListItem = { text: string; children: Block[] }

// ── Inline ────────────────────────────────────────────────────────────────

const ESC_OPEN = '\u0001'
const ESC_CLOSE = '\u0002'

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function isExternal(href: string) {
  return /^https?:\/\//.test(href)
}

export function renderInline(src: string): string {
  // protect backslash escapes
  let s = src.replace(/\\([\\*[\]_()#>|-])/g, (_, c: string) => `${ESC_OPEN}${c.charCodeAt(0)}${ESC_CLOSE}`)
  s = escapeHtml(s)
  s = s.replace(/&lt;(\/?)(sup|sub)&gt;/g, '<$1$2>').replace(/&lt;br\s*\/?&gt;/g, '<br />')
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, alt: string, url: string) =>
    `<img src="${url}" alt="${alt}" loading="lazy" style="max-width:100%;height:auto;border-radius:12px" />`)
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text: string, url: string) =>
    isExternal(url)
      ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`
      : `<a href="${url}">${text}</a>`)
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  s = s.replace(/(^|[^*\w])\*(?!\s)([^*]+?)\*(?!\w)/g, '$1<em>$2</em>')
  s = s.replace(new RegExp(`${ESC_OPEN}(\\d+)${ESC_CLOSE}`, 'g'), (_, code: string) => escapeHtml(String.fromCharCode(Number(code))))
  return s
}

export function plainText(src: string): string {
  return src
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\\([\\*[\]_()#>|-])/g, '$1')
    .replace(/\*\*?/g, '')
    .trim()
}

export function slugify(text: string) {
  return plainText(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// ── Block parser ──────────────────────────────────────────────────────────

const LIST_RE = /^(\s*)([-*]|\d+\.)\s+(.*)$/

function parseList(lines: string[], start: number): [Block, number] {
  const baseIndent = (lines[start].match(/^\s*/) as RegExpMatchArray)[0].length
  const first = lines[start].match(LIST_RE) as RegExpMatchArray
  const ordered = /\d/.test(first[2])
  const items: ListItem[] = []
  let i = start
  while (i < lines.length) {
    const m = lines[i].match(LIST_RE)
    if (!m) break
    const indent = m[1].length
    if (indent < baseIndent) break
    if (indent > baseIndent) {
      // nested list belongs to the previous item
      const [sub, next] = parseList(lines, i)
      if (items.length) items[items.length - 1].children.push(sub)
      i = next
      continue
    }
    if (/\d/.test(m[2]) !== ordered) break
    items.push({ text: m[3], children: [] })
    i++
  }
  return [{ type: 'list', ordered, start: ordered ? parseInt(first[2], 10) || 1 : 1, items }, i]
}

function splitRow(line: string): string[] {
  const inner = line.trim().replace(/^\|/, '').replace(/\|$/, '')
  const cells: string[] = []
  let cur = ''
  for (let k = 0; k < inner.length; k++) {
    if (inner[k] === '\\' && inner[k + 1] === '|') { cur += '|'; k++; continue }
    if (inner[k] === '|') { cells.push(cur.trim()); cur = ''; continue }
    cur += inner[k]
  }
  cells.push(cur.trim())
  return cells
}

export function parseBlocks(text: string): Block[] {
  const lines = text.replace(/\r\n/g, '\n').split('\n')
  return parseLines(lines)
}

function parseLines(lines: string[]): Block[] {
  const blocks: Block[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()
    if (trimmed === '') { i++; continue }

    // container
    const open = trimmed.match(/^:::([a-z-]+)$/)
    if (open) {
      let depth = 1
      let j = i + 1
      for (; j < lines.length; j++) {
        const t = lines[j].trim()
        if (/^:::[a-z-]+$/.test(t)) depth++
        else if (t === ':::') { depth--; if (depth === 0) break }
      }
      const inner = lines.slice(i + 1, j)
      if (open[1] === 'faq') blocks.push(parseFaq(inner))
      else blocks.push({ type: 'container', name: open[1], children: parseLines(inner) })
      i = j + 1
      continue
    }

    const h = trimmed.match(/^(#{2,4})\s+(.*)$/)
    if (h) {
      const level = h[1].length as 2 | 3 | 4
      blocks.push({ type: 'heading', level, text: h[2], id: slugify(h[2]) })
      i++
      continue
    }

    if (/^(-{3,}|\*{3,})$/.test(trimmed)) { blocks.push({ type: 'hr' }); i++; continue }

    if (trimmed.startsWith('>')) {
      const inner: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        inner.push(lines[i].trim().replace(/^>\s?/, ''))
        i++
      }
      blocks.push({ type: 'quote', children: parseLines(inner) })
      continue
    }

    if (trimmed.startsWith('|')) {
      const rows: string[][] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const cells = splitRow(lines[i])
        if (!cells.every((c) => /^:?-{3,}:?$/.test(c))) rows.push(cells)
        i++
      }
      blocks.push({ type: 'table', head: rows[0] ?? [], rows: rows.slice(1) })
      continue
    }

    const img = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/)
    if (img) { blocks.push({ type: 'image', alt: img[1], src: img[2] }); i++; continue }

    if (trimmed.startsWith('-> ')) {
      const items: { label: string; href: string }[] = []
      while (i < lines.length && lines[i].trim().startsWith('-> ')) {
        const m = lines[i].trim().match(/^->\s+\[([^\]]+)\]\(([^)\s]+)\)$/)
        if (m) items.push({ label: m[1], href: m[2] })
        i++
      }
      blocks.push({ type: 'buttons', items })
      continue
    }

    if (LIST_RE.test(line)) {
      const [list, next] = parseList(lines, i)
      blocks.push(list)
      i = next
      continue
    }

    blocks.push({ type: 'para', text: trimmed })
    i++
  }
  return blocks
}

function parseFaq(lines: string[]): Block {
  const items: { q: string; children: Block[] }[] = []
  let cur: { q: string; body: string[] } | null = null
  for (const l of lines) {
    const m = l.trim().match(/^\?\?\?\s+(.*)$/)
    if (m) {
      if (cur) items.push({ q: cur.q, children: parseLines(cur.body) })
      cur = { q: m[1], body: [] }
    } else if (cur) {
      cur.body.push(l)
    }
  }
  if (cur) items.push({ q: cur.q, children: parseLines(cur.body) })
  return { type: 'faq', items }
}

/** Table of contents: all level-2 headings (ids de-duplicated the same way as the rendered output). */
export function extractToc(text: string): { title: string; id: string }[] {
  const out: { title: string; id: string }[] = []
  const seen = new Map<string, number>()
  const walk = (blocks: Block[]) => {
    for (const b of blocks) {
      if (b.type === 'heading') {
        const id = uniqueId(b.id, seen)
        if (b.level === 2) out.push({ title: plainText(b.text), id })
      } else if (b.type === 'container' || b.type === 'quote') walk(b.children)
    }
  }
  walk(parseBlocks(text))
  return out
}

function uniqueId(id: string, seen: Map<string, number>) {
  const n = seen.get(id) ?? 0
  seen.set(id, n + 1)
  return n === 0 ? id : `${id}-${n + 1}`
}

// ── Render ────────────────────────────────────────────────────────────────

const P: CSSProperties = { fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.85, margin: '0 0 1rem' }
const LI: CSSProperties = { fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '0.375rem' }
const REF_LI: CSSProperties = { fontSize: '0.8125rem', color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: '0.375rem' }

type Ctx = { variant?: 'refs' | 'small'; seen: Map<string, number> }

function Html({ as: Tag = 'p', html, style }: { as?: 'p' | 'span' | 'div' | 'li' | 'td' | 'th'; html: string; style?: CSSProperties }) {
  return <Tag style={style} dangerouslySetInnerHTML={{ __html: html }} />
}

function renderBlocks(blocks: Block[], ctx: Ctx, keyPrefix = 'b'): ReactNode[] {
  return blocks.map((b, idx) => renderBlock(b, ctx, `${keyPrefix}-${idx}`))
}

function renderList(b: Extract<Block, { type: 'list' }>, ctx: Ctx, key: string): ReactNode {
  const liStyle = ctx.variant === 'refs' || ctx.variant === 'small' ? REF_LI : LI
  const listStyle: CSSProperties = {
    paddingLeft: '1.5rem',
    margin: '0.5rem 0 1.25rem',
    listStyle: b.ordered ? 'decimal' : 'disc',
  }
  const items = b.items.map((it, k) => (
    <li key={k} style={liStyle}>
      <span dangerouslySetInnerHTML={{ __html: renderInline(it.text) }} />
      {it.children.length > 0 && renderBlocks(it.children, ctx, `${key}-${k}`)}
    </li>
  ))
  return b.ordered
    ? <ol key={key} start={b.start} style={listStyle}>{items}</ol>
    : <ul key={key} style={listStyle}>{items}</ul>
}

function renderBlock(b: Block, ctx: Ctx, key: string): ReactNode {
  const small = ctx.variant === 'refs' || ctx.variant === 'small'
  switch (b.type) {
    case 'heading': {
      const id = uniqueId(b.id, ctx.seen)
      const html = { __html: renderInline(b.text) }
      if (b.level === 2)
        return <h2 key={key} id={id} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink)', margin: '2.5rem 0 0.875rem', lineHeight: 1.25, scrollMarginTop: '80px' }} dangerouslySetInnerHTML={html} />
      if (b.level === 3)
        return <h3 key={key} id={id} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--ink)', margin: '1.75rem 0 0.5rem', lineHeight: 1.3, scrollMarginTop: '80px' }} dangerouslySetInnerHTML={html} />
      return <h4 key={key} id={id} style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', margin: '1.5rem 0 0.5rem', lineHeight: 1.35, scrollMarginTop: '80px' }} dangerouslySetInnerHTML={html} />
    }
    case 'para':
      return <Html key={key} html={renderInline(b.text)} style={small ? { ...REF_LI, margin: '0 0 0.5rem' } : P} />
    case 'list':
      return renderList(b, ctx, key)
    case 'quote':
      return (
        <blockquote key={key} style={{ margin: '1.5rem 0', padding: '0.25rem 0 0.25rem 1.25rem', borderLeft: '3px solid var(--teal)', fontStyle: 'italic' }}>
          {renderBlocks(b.children, ctx, key)}
        </blockquote>
      )
    case 'table':
      return (
        <div key={key} style={{ overflowX: 'auto', margin: '1.25rem 0 1.75rem', border: '0.5px solid var(--border)', borderRadius: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', color: 'var(--ink-2)' }}>
            <thead>
              <tr>
                {b.head.map((c, k) => (
                  <th key={k} style={{ textAlign: 'left', padding: '0.75rem 1rem', background: 'var(--base)', borderBottom: '0.5px solid var(--border)', fontWeight: 600, color: 'var(--ink)' }} dangerouslySetInnerHTML={{ __html: renderInline(c) }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, k) => (
                <tr key={k}>
                  {r.map((c, m) => (
                    <td key={m} style={{ padding: '0.75rem 1rem', borderBottom: k === b.rows.length - 1 ? 'none' : '0.5px solid var(--border)', verticalAlign: 'top' }} dangerouslySetInnerHTML={{ __html: renderInline(c) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'hr':
      return <hr key={key} style={{ border: 0, borderTop: '0.5px solid var(--border)', margin: '2rem 0' }} />
    case 'image':
      return (
        <figure key={key} style={{ margin: '1.75rem 0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.src} alt={b.alt} loading="lazy" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
        </figure>
      )
    case 'buttons':
      return (
        <div key={key} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1rem 0 1.25rem' }}>
          {b.items.map((it, k) => (
            <a
              key={k}
              href={it.href}
              className="post-btn"
              {...(isExternal(it.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 44, padding: '0 1.5rem',
                borderRadius: 999, fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none',
                background: k === 0 ? 'var(--teal)' : 'var(--white)', color: k === 0 ? '#fff' : 'var(--ink)',
                border: k === 0 ? '2px solid var(--teal)' : '2px solid var(--border)',
              }}
              dangerouslySetInnerHTML={{ __html: renderInline(it.label) }}
            />
          ))}
        </div>
      )
    case 'faq':
      return (
        <div key={key} style={{ margin: '0.5rem 0 2rem', borderTop: '0.5px solid var(--border)' }}>
          {b.items.map((it, k) => (
            <details key={k} className="post-faq" style={{ borderBottom: '0.5px solid var(--border)', padding: '1rem 0' }}>
              <summary style={{ cursor: 'pointer', fontSize: '1.0625rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4 }}>
                <span dangerouslySetInnerHTML={{ __html: renderInline(it.q) }} />
              </summary>
              <div style={{ paddingTop: '0.75rem' }}>{renderBlocks(it.children, ctx, `${key}-${k}`)}</div>
            </details>
          ))}
        </div>
      )
    case 'container':
      return renderContainer(b, ctx, key)
  }
}

function renderContainer(b: Extract<Block, { type: 'container' }>, ctx: Ctx, key: string): ReactNode {
  switch (b.name) {
    case 'lead':
      return (
        <div key={key} className="post-lead" style={{ fontSize: '1.1875rem' }}>
          {b.children.map((c, k) =>
            c.type === 'para'
              ? <Html key={k} html={renderInline(c.text)} style={{ fontSize: '1.1875rem', color: 'var(--ink)', lineHeight: 1.7, margin: '0 0 1.25rem' }} />
              : renderBlock(c, ctx, `${key}-${k}`))}
        </div>
      )
    case 'eyebrow':
      return (
        <div key={key} style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--teal)', margin: '0 0 0.75rem' }}>
          {b.children.map((c) => (c.type === 'para' ? plainText(c.text) : '')).join(' ')}
        </div>
      )
    case 'callout':
      return (
        <div key={key} role="note" style={{ background: 'var(--base)', borderRadius: 12, padding: '1.125rem 1.375rem 0.25rem', margin: '1.5rem 0', borderLeft: '3px solid var(--teal)' }}>
          {renderBlocks(b.children, ctx, key)}
        </div>
      )
    case 'cta':
      return (
        <div key={key} className="post-cta" style={{ background: 'var(--base)', border: '0.5px solid var(--border)', borderRadius: 'var(--radius-lg, 16px)', padding: '1.5rem 1.5rem 0.5rem', margin: '2rem 0' }}>
          {renderBlocks(b.children, ctx, key)}
        </div>
      )
    case 'refs':
      return <div key={key} className="post-refs">{renderBlocks(b.children, { ...ctx, variant: 'refs' }, key)}</div>
    case 'disclaimer':
      return (
        <div key={key} style={{ marginTop: '1.5rem' }}>
          {renderBlocks(b.children, { ...ctx, variant: 'small' }, key)}
        </div>
      )
    default:
      return <div key={key}>{renderBlocks(b.children, ctx, key)}</div>
  }
}

export function PostContent({ content }: { content: string }) {
  const ctx: Ctx = { seen: new Map() }
  return (
    <div className="post-body">
      {renderBlocks(parseBlocks(content), ctx)}
      <style>{`
        .post-body a:not(.post-btn) { color: var(--teal); text-decoration: underline; text-underline-offset: 2px; }
        .post-body a:not(.post-btn):hover { color: var(--ink); }
        .post-body .post-btn:hover { opacity: 0.88; }
        .post-body sup { font-size: 0.7em; line-height: 0; }
        .post-body .post-cta h3 { margin-top: 0 !important; }
        .post-body .post-faq summary::-webkit-details-marker { color: var(--teal); }
        .post-body li > ul, .post-body li > ol { margin: 0.375rem 0 0.5rem !important; }
      `}</style>
    </div>
  )
}
