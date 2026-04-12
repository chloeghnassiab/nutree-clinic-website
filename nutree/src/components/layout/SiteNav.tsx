'use client'
import Link from 'next/link'
import { useState } from 'react'

const NAV_ITEMS = [
  {
    label: 'Weight Loss',
    href: '/weight-loss',
    children: [
      { label: 'GLP-1 Treatments', href: '/weight-loss' },
      { label: 'GLP-1 Microdosing', href: '/glp-1' },
    ],
  },
  {
    label: 'Anti-Aging',
    href: '/nad',
    children: [
      { label: 'NAD+ Therapy', href: '/nad' },
      { label: 'Sermorelin', href: '/sermorelin' },
    ],
  },
  {
    label: 'Energy',
    href: '/b12',
    children: [
      { label: 'B6 / B12 Injections', href: '/b12' },
    ],
  },
  {
    label: 'Well-being',
    href: '/oxytocin',
    children: [
      { label: 'Oxytocin Nasal Spray', href: '/oxytocin' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About',   href: '/about'   },
]

export function SiteNav() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'var(--white)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Main nav row */}
      <div style={{
        display: 'flex', alignItems: 'center',
        padding: '0 1.25rem', height: '52px', gap: '0.5rem',
        maxWidth: '1200px', margin: '0 auto',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'var(--font-serif)', fontSize: '1rem',
          color: 'var(--ink)', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0,
        }}>
          <span style={{
            width: 26, height: 26, borderRadius: '50%',
            background: 'var(--ink)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 10.5C6.5 10.5 3 8 3 5.8C3 4.4 4.2 3.3 5.5 3.3C6.1 3.3 6.5 3.6 6.7 3.9L6.5 4.5L6.3 3.9C6.5 3.6 6.9 3.3 7.5 3.3C8.8 3.3 10 4.4 10 5.8C10 8 6.5 10.5 6.5 10.5Z"
                fill="rgba(255,255,255,0.95)"/>
              <line x1="6.5" y1="4.5" x2="6.5" y2="10.5" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7"/>
            </svg>
          </span>
          nutree clinic
        </Link>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', gap: '0.125rem', marginLeft: '0.75rem', flex: 1 }}
          className="hidden-mobile">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} style={{ position: 'relative' }}
              onMouseEnter={() => item.children && setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}>
              <Link href={item.href} style={{
                fontSize: '0.6875rem', fontWeight: 500,
                color: 'var(--ink-3)', padding: '0.3rem 0.625rem',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none', display: 'block',
                transition: 'color 0.15s, background 0.15s',
              }}
                onMouseEnter={e => {
                  ;(e.target as HTMLElement).style.color = 'var(--ink)'
                  ;(e.target as HTMLElement).style.background = 'var(--base)'
                }}
                onMouseLeave={e => {
                  ;(e.target as HTMLElement).style.color = 'var(--ink-3)'
                  ;(e.target as HTMLElement).style.background = 'transparent'
                }}>
                {item.label}
              </Link>
              {/* Dropdown */}
              {item.children && open === item.label && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0,
                  background: 'var(--white)',
                  border: '0.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.375rem',
                  minWidth: '180px',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 10,
                }}>
                  {item.children.map(child => (
                    <Link key={child.href} href={child.href} style={{
                      display: 'block', padding: '0.5rem 0.75rem',
                      fontSize: '0.75rem', fontWeight: 500,
                      color: 'var(--ink-2)', textDecoration: 'none',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'background 0.1s',
                    }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--base)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right CTAs */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: 'auto' }}>
          <Link href="/consult" className="btn-teal" style={{ fontSize: '0.6875rem' }}>
            Consult · $50
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: '0.25rem',
          }}
          className="show-mobile"
          aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d={mobileOpen
              ? "M4 4L16 16M4 16L16 4"
              : "M3 5h14M3 10h14M3 15h14"}
              stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          borderTop: '1px solid var(--border)',
          background: 'var(--white)',
          padding: '0.75rem 1.25rem 1.25rem',
        }}>
          {NAV_ITEMS.map(item => (
            <div key={item.label}>
              <Link href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', padding: '0.625rem 0',
                  fontSize: '0.875rem', fontWeight: 600,
                  color: 'var(--ink)', textDecoration: 'none',
                  borderBottom: '0.5px solid var(--border)',
                }}>
                {item.label}
              </Link>
              {item.children?.map(child => (
                <Link key={child.href} href={child.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block', padding: '0.5rem 0 0.5rem 1rem',
                    fontSize: '0.8125rem', fontWeight: 400,
                    color: 'var(--ink-3)', textDecoration: 'none',
                    borderBottom: '0.5px solid var(--border)',
                  }}>
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/consult" className="btn-consult"
            onClick={() => setMobileOpen(false)}
            style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}>
            Book a consultation · $50
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
