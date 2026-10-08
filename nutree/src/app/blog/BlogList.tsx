'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

const CATEGORIES = ['All', 'Weight Loss', 'Longevity', 'Well-being', 'Energy']

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  'Weight Loss': { bg: 'var(--glp)', color: 'var(--glp-dark)' },
  'Longevity':   { bg: 'var(--nad)', color: 'var(--nad-dark)' },
  'Well-being':  { bg: 'var(--oxy)', color: 'var(--oxy-dark)' },
  'Energy':      { bg: 'var(--b12)', color: 'var(--b12-dark)' },
}

function formatDate(dateStr: string) {
  return new Date(`${dateStr}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
}

function CategoryBadge({ category, small }: { category: string; small?: boolean }) {
  const c = CATEGORY_COLORS[category] || { bg: 'var(--teal)', color: '#fff' }
  return (
    <span style={{
      fontSize: small ? '0.6875rem' : '0.75rem',
      fontWeight: 700,
      padding: small ? '1px 6px' : '2px 9px',
      borderRadius: '999px',
      background: c.bg, color: c.color,
      flexShrink: 0,
    }}>{category}</span>
  )
}

type Post = PostMeta

// ─── Hero card (latest post) ───────────────────────────────────────────────
function HeroCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <div className="blog-hero-inner" style={{
        display: 'flex',
        gap: 0,
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        border: '0.5px solid var(--border)',
        overflow: 'hidden',
        minHeight: 260,
      }}>
        <img
          className="blog-hero-img"
          src={post.coverImage}
          alt={post.coverAlt}
          style={{
            width: '45%',
            minWidth: 180,
            objectFit: 'cover',
            display: 'block',
            flexShrink: 0,
          }}
        />
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem' }}>
          <div><CategoryBadge category={post.category} /></div>
          <h2 className="blog-hero-title" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
            color: 'var(--ink)', lineHeight: 1.15, margin: 0,
          }}>{post.title}</h2>
          <p className="blog-hero-excerpt" style={{
            fontSize: '1.25rem', color: 'var(--ink-3)',
            lineHeight: 1.65, margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}>{post.excerpt}</p>
          <div style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginTop: 'auto' }}>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ─── Secondary card (2nd and 3rd posts) ───────────────────────────────────
function SecondaryCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-secondary-link" style={{ textDecoration: 'none', flex: '1 1 280px' }}>
      <div style={{
        display: 'flex',
        gap: 0,
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        border: '0.5px solid var(--border)',
        overflow: 'hidden',
        height: '100%',
        minHeight: 200,
      }}>
        <img
          className="blog-secondary-img"
          src={post.coverImage}
          alt={post.coverAlt}
          style={{
            width: 180,
            minWidth: 180,
            objectFit: 'cover',
            display: 'block',
            flexShrink: 0,
          }}
        />
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center' }}>
          <div><CategoryBadge category={post.category} /></div>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem', fontWeight: 600,
            color: 'var(--ink)', lineHeight: 1.3, margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}>{post.title}</h3>
          <p className="blog-secondary-excerpt" style={{
            fontSize: '0.9375rem', color: 'var(--ink-3)',
            lineHeight: 1.6, margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}>{post.excerpt}</p>
          <div style={{ fontSize: '0.75rem', color: 'var(--ink-3)', marginTop: '0.25rem', display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ─── Regular list card ─────────────────────────────────────────────────────
function ListCard({ post, last }: { post: Post; last: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{
      display: 'flex', gap: '1rem', textDecoration: 'none',
      padding: '1.125rem 0',
      borderBottom: last ? 'none' : '0.5px solid var(--border)',
      alignItems: 'flex-start',
    }}>
      <img
        className="blog-list-img"
        src={post.coverImage}
        alt={post.coverAlt}
        style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ marginBottom: '0.4rem' }}>
          <CategoryBadge category={post.category} />
        </div>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.0625rem', fontWeight: 600,
          color: 'var(--ink)', lineHeight: 1.35, marginBottom: '0.375rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden',
        }}>{post.title}</h3>
        <p style={{
          fontSize: '0.875rem', color: 'var(--ink-3)',
          lineHeight: 1.55, marginBottom: '0.5rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden',
        }}>{post.excerpt}</p>
        <div style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
          <span>·</span>
          <span>{post.author}</span>
        </div>
      </div>
    </Link>
  )
}

// ─── Main exported component ───────────────────────────────────────────────
export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return posts.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory
      const matchesQuery = !q
        || p.title.toLowerCase().includes(q)
        || p.excerpt.toLowerCase().includes(q)
        || p.category.toLowerCase().includes(q)
        || p.author.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [posts, query, activeCategory])

  const isFiltered = query.trim() !== '' || activeCategory !== 'All'

  const hero = filtered[0]
  const secondary = filtered.slice(1, 3)
  const rest = isFiltered ? filtered.slice(3) : filtered.slice(3)

  return (
    <>
      <style>{`
        /* ── Mobile (≤ 600px) ───────────────────────────────────────────── */
        @media (max-width: 600px) {

          /* Hero: stack image above text */
          .blog-hero-inner {
            flex-direction: column !important;
            min-height: unset !important;
          }
          .blog-hero-img {
            width: 100% !important;
            min-width: unset !important;
            height: 220px !important;
          }
          .blog-hero-title {
            font-size: 1.625rem !important;
          }
          .blog-hero-excerpt {
            font-size: 1rem !important;
            -webkit-line-clamp: 3 !important;
          }

          /* Secondary: smaller image, hide excerpt */
          .blog-secondary-link {
            flex: 1 1 100% !important;
          }
          .blog-secondary-img {
            width: 110px !important;
            min-width: 110px !important;
          }
          .blog-secondary-excerpt {
            display: none !important;
          }

          /* List: smaller thumbnail */
          .blog-list-img {
            width: 88px !important;
            height: 88px !important;
          }
        }

        /* ── Tablet (601px – 860px) ─────────────────────────────────────── */
        @media (min-width: 601px) and (max-width: 860px) {

          /* Hero: narrower image */
          .blog-hero-img {
            width: 38% !important;
          }
          .blog-hero-title {
            font-size: 1.75rem !important;
          }
          .blog-hero-excerpt {
            font-size: 1.0625rem !important;
          }

          /* Secondary: slightly smaller image */
          .blog-secondary-img {
            width: 140px !important;
            min-width: 140px !important;
          }
        }
      `}</style>

      {/* Page header */}
      <section style={{ padding: '2.5rem 1.5rem 1.25rem', background: 'var(--base)' }}>
        <div style={{
          fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)',
          textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem',
        }}>Clinical insights</div>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
          color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.5rem',
        }}>The Nutree Blog</h1>
        <p style={{ fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
          Evidence-based articles on metabolic health, longevity, and the science behind our treatments.
        </p>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <span style={{
            position: 'absolute', left: '0.875rem', top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--ink-3)', pointerEvents: 'none', fontSize: '1rem',
          }}>
            {/* search icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search articles…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6875rem 1rem 0.6875rem 2.5rem',
              fontSize: '0.9375rem',
              border: '0.5px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--white)',
              color: 'var(--ink)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                position: 'absolute', right: '0.875rem', top: '50%',
                transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--ink-3)', fontSize: '1rem', padding: 0,
                lineHeight: 1,
              }}
            >✕</button>
          )}
        </div>

        {/* Category filters */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => {
            const active = cat === activeCategory
            const c = CATEGORY_COLORS[cat]
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.375rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.8125rem',
                  fontWeight: active ? 700 : 500,
                  cursor: 'pointer',
                  border: active ? 'none' : '0.5px solid var(--border)',
                  background: active ? (c ? c.bg : 'var(--ink)') : 'var(--white)',
                  color: active ? (c ? c.color : '#fff') : 'var(--ink-3)',
                  transition: 'background 0.12s, color 0.12s',
                }}
              >{cat}</button>
            )
          })}
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: '0 1.5rem 2.5rem', background: 'var(--base)' }}>
        {filtered.length === 0 ? (
          <div style={{ padding: '3rem 0', textAlign: 'center', color: 'var(--ink-3)', fontSize: '0.9375rem' }}>
            No articles match your search.
          </div>
        ) : isFiltered ? (
          /* Flat list when filtering */
          <div>
            {filtered.map((post, i) => (
              <ListCard key={post.slug} post={post} last={i === filtered.length - 1} />
            ))}
          </div>
        ) : (
          /* Default layout: hero → 2 secondary → rest */
          <>
            {/* Hero */}
            <div style={{ marginBottom: '0.875rem' }}>
              <HeroCard post={hero} />
            </div>

            {/* Secondary pair */}
            {secondary.length > 0 && (
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '0.875rem' }}>
                {secondary.map(p => <SecondaryCard key={p.slug} post={p} />)}
              </div>
            )}

            {/* Divider */}
            {rest.length > 0 && (
              <div style={{ height: '0.5px', background: 'var(--border)', margin: '0.5rem 0' }} />
            )}

            {/* Rest */}
            <div>
              {rest.map((post, i) => (
                <ListCard key={post.slug} post={post} last={i === rest.length - 1} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  )
}
