'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const TREATMENTS = [
  {
    name: 'GLP-1 Weight Loss',
    tagline: 'Semaglutide & Tirzepatide',
    price: 'from $249/mo',
    href: '/weight-loss',
    img: '/images/nav-glp1.png',
    bg: '#B8E4F0',
    dark: '#1A6B85',
  },
  {
    name: 'NAD+ Therapy',
    tagline: 'Energy · anti-aging · longevity',
    price: 'from $TBD/mo',
    href: '/nad',
    img: '/images/nav-nad.png',
    bg: '#A8D8C8',
    dark: '#1E6650',
  },
  {
    name: 'Sermorelin',
    tagline: 'Strength · recovery · sleep',
    price: 'from $125 first',
    href: '/sermorelin',
    img: '/images/nav-sermorelin.png',
    bg: '#F2C4A0',
    dark: '#8B4A20',
  },
  {
    name: 'Oxytocin',
    tagline: 'Stress relief · well-being',
    price: 'from $TBD/mo',
    href: '/oxytocin',
    img: '/images/nav-oxytocin.png',
    bg: '#D4B8E8',
    dark: '#5A3080',
  },
  {
    name: 'B6 / B12',
    tagline: 'Energy & vitality',
    price: 'from $TBD/mo',
    href: '/b12',
    img: '/images/nav-b12.png',
    bg: '#F9E07A',
    dark: '#7A6200',
  },
]

export function SiteNav() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .nav-link { font-size: 0.75rem; font-weight: 500; color: var(--ink-3); padding: 0.3rem 0.75rem; border-radius: 999px; text-decoration: none; transition: color 0.15s, background 0.15s; white-space: nowrap; }
        .nav-link:hover, .nav-link.active { color: var(--ink); background: var(--base); }
        .mega-card { display: flex; flex-direction: column; text-decoration: none; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); background: var(--white); transition: box-shadow 0.15s, transform 0.15s; flex: 1; min-width: 120px; }
        .mega-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }
        .mega-img { height: 80px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .mega-img img { width: 100%; height: 100%; object-fit: cover; }
        .mobile-link { display: block; padding: 0.75rem 0; font-size: 0.9375rem; font-weight: 600; color: var(--ink); text-decoration: none; border-bottom: 0.5px solid var(--border); }
        .mobile-sub { display: block; padding: 0.5rem 0 0.5rem 1rem; font-size: 0.8125rem; color: var(--ink-3); text-decoration: none; border-bottom: 0.5px solid var(--border); }
        @media (max-width: 860px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: flex !important; } }
        @media (min-width: 861px) { .nav-mobile-btn { display: none !important; } }
      `}</style>

      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'var(--white)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 1.5rem', height: '60px', gap: '0.25rem', maxWidth: '1200px', margin: '0 auto' }}>

          {/* Logo */}
          <Link href="/" onClick={() => { setMegaOpen(false); setMobileOpen(false) }}
            style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0, marginRight: '0.5rem' }}>
            <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 11.5C7 11.5 3.5 9 3.5 6.5C3.5 5 4.8 3.8 6.2 3.8C6.8 3.8 7.2 4.1 7.4 4.4L7 5L6.6 4.4C6.8 4.1 7.2 3.8 7.8 3.8C9.2 3.8 10.5 5 10.5 6.5C10.5 9 7 11.5 7 11.5Z" fill="rgba(255,255,255,0.95)"/>
                <line x1="7" y1="5" x2="7" y2="11.5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
              </svg>
            </span>
            nutree clinic
          </Link>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0', flex: 1 }}>
            {/* Treatments mega trigger */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}>
              <button style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500,
                color: megaOpen ? 'var(--ink)' : 'var(--ink-3)',
                background: megaOpen ? 'var(--base)' : 'transparent',
                border: 'none', cursor: 'pointer',
                padding: '0.3rem 0.75rem', borderRadius: '999px',
                display: 'flex', alignItems: 'center', gap: '0.25rem',
                transition: 'color 0.15s, background 0.15s',
              }}>
                Treatments
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: 'transform 0.15s', transform: megaOpen ? 'rotate(180deg)' : 'none' }}>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Mega dropdown */}
              {megaOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
                  transform: 'translateX(-50%)',
                  width: '680px', background: 'var(--white)',
                  border: '1px solid var(--border)', borderRadius: '16px',
                  padding: '1.25rem',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                  zIndex: 200,
                }}>
                  {/* Arrow */}
                  <div style={{ position: 'absolute', top: -7, left: '50%', transform: 'translateX(-50%)', width: 14, height: 14, background: 'var(--white)', border: '1px solid var(--border)', borderBottom: 'none', borderRight: 'none', rotate: '45deg' }} />

                  <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.875rem' }}>
                    All treatments
                  </div>

                  {/* Treatment cards */}
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                    {TREATMENTS.map((t) => (
                      <Link key={t.href} href={t.href} className="mega-card" onClick={() => setMegaOpen(false)}>
                        <div className="mega-img" style={{ background: `linear-gradient(145deg, ${t.bg}, ${t.bg}cc)` }}>
                          <img src={t.img} alt={t.name}
                            onError={(e) => {
                              const el = e.currentTarget.parentElement!
                              el.innerHTML = `<div style="font-size:1.5rem;opacity:0.5">💊</div>`
                            }}
                          />
                        </div>
                        <div style={{ padding: '0.5rem 0.625rem 0.625rem' }}>
                          <div style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 2 }}>{t.name}</div>
                          <div style={{ fontSize: '0.5rem', color: 'var(--ink-3)', marginBottom: 4, lineHeight: 1.4 }}>{t.tagline}</div>
                          <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: t.dark }}>{t.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.875rem', borderTop: '0.5px solid var(--border)' }}>
                    <Link href="/pricing" onClick={() => setMegaOpen(false)}
                      style={{ fontSize: '0.6875rem', color: 'var(--ink-3)', textDecoration: 'none', fontWeight: 500 }}>
                      View all pricing →
                    </Link>
                    <Link href="/consult" onClick={() => setMegaOpen(false)}
                      style={{ padding: '8px 16px', borderRadius: '999px', background: 'var(--con)', color: 'var(--ink)', fontSize: '0.6875rem', fontWeight: 700, textDecoration: 'none' }}>
                      Book a consultation · $50
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="nav-link">Pricing</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/faq" className="nav-link">FAQ</Link>
          </div>

          {/* Right CTAs — always visible */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: 'auto' }}>
            <Link href="/consult" style={{
              padding: '8px 18px', borderRadius: '999px',
              background: 'var(--ink)', color: '#fff',
              fontSize: '0.75rem', fontWeight: 700, textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}>
              Consult · $50
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', marginLeft: '0.5rem' }}
            aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d={mobileOpen ? "M5 5L17 17M5 17L17 5" : "M4 7h14M4 11h14M4 15h14"}
                stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile menu — full screen */}
        {mobileOpen && (
          <div style={{
            position: 'fixed', top: 60, left: 0, right: 0, bottom: 0,
            background: 'var(--white)', overflowY: 'auto', zIndex: 99,
            padding: '1rem 1.5rem 2rem',
          }}>
            {/* Treatment cards mobile */}
            <div style={{ fontSize: '0.5625rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem', marginTop: '0.5rem' }}>
              Treatments
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {TREATMENTS.map((t) => (
                <Link key={t.href} href={t.href} onClick={() => setMobileOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.625rem', borderRadius: '10px', background: `${t.bg}40`, textDecoration: 'none', border: `1px solid ${t.bg}` }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                    <img src={t.img} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.currentTarget.style.display = 'none' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2 }}>{t.name}</div>
                    <div style={{ fontSize: '0.5rem', color: t.dark, fontWeight: 600 }}>{t.price}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Other links */}
            <Link href="/pricing" className="mobile-link" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/blog" className="mobile-link" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/about" className="mobile-link" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/faq" className="mobile-link" onClick={() => setMobileOpen(false)}>FAQ</Link>

            {/* Mobile CTA */}
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/consult" onClick={() => setMobileOpen(false)}
                style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: '999px', background: 'var(--con)', color: 'var(--ink)', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none', marginBottom: '0.75rem' }}>
                Book a consultation · $50
              </Link>
              <Link href="/weight-loss" onClick={() => setMobileOpen(false)}
                style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: '999px', background: 'var(--ink)', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none' }}>
                Check my eligibility →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
