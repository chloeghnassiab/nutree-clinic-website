// Server-rendered FAQ accordion (native <details>), so every answer is in the
// HTML for search engines and matches the FAQPage JSON-LD on the page.
// Visual style mirrors FAQSection in PageComponents.

export function FaqList({ items, title = 'Frequently asked questions', iconBg = 'var(--glp)', iconColor = 'var(--glp-dark)' }: {
  items: { q: string; a: string }[]
  title?: string
  iconBg?: string
  iconColor?: string
}) {
  if (items.length === 0) return null
  return (
    <section id="faq" style={{ borderTop: '1px solid var(--border)', background: 'var(--white)', padding: '1.5rem 2rem 0.5rem' }}>
      <style>{`
        .nfaq summary { list-style: none; cursor: pointer; }
        .nfaq summary::-webkit-details-marker { display: none; }
        .nfaq .nfaq-icon { transition: transform 0.25s; }
        .nfaq[open] .nfaq-icon { transform: rotate(45deg); }
      `}</style>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', color: 'var(--ink)', marginBottom: '0.5rem', fontWeight: 400 }}>
        {title}
      </h2>
      <div>
        {items.map((item, i) => (
          <details key={i} className="nfaq" style={{ borderBottom: '0.5px solid var(--border)' }}>
            <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1rem 0' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4, margin: 0, fontFamily: 'var(--font-sans)' }}>{item.q}</h3>
              <span className="nfaq-icon" aria-hidden="true" style={{ width: 24, height: 24, borderRadius: '50%', background: iconBg, color: iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700, fontSize: '1rem', lineHeight: 1 }}>+</span>
            </summary>
            <p style={{ padding: '0 0 1rem', fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0, maxWidth: 720 }}>
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
