'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

// ─── NAV STRUCTURE — Eden-style per-category dropdowns ───────────────────────
const NAV_CATEGORIES = [
  {
    label: 'Weight Loss',
    treatments: [
      { label: 'GLP-1 Treatments', sub: 'Semaglutide & Tirzepatide', href: '/weight-loss' },
      { label: 'GLP-1 Microdosing', sub: 'Gentler start · fewer side effects', href: '/glp-1' },
      { label: 'Wegovy®', sub: 'Brand-name semaglutide', href: '/weight-loss' },
      { label: 'Mounjaro®', sub: 'Brand-name tirzepatide', href: '/weight-loss' },
    ],
    featured: {
      img: '/images/nav-glp1.png',
      bg: 'linear-gradient(145deg,#8ED4EA,#B8E4F0)',
      title: 'Personalized GLP-1\nTreatments',
      price: 'From $229/mo',
      href: '/weight-loss',
    },
  },
  {
    label: 'Anti-Aging',
    treatments: [
      { label: 'NAD+ Injectable', sub: 'Highest bioavailability', href: '/nad' },
      { label: 'NAD+ Nasal Spray', sub: 'Needle-free · rapid absorption', href: '/nad' },
      { label: 'NAD+ Patches + GHK-Cu', sub: 'Slow-release + peptide', href: '/nad' },
      { label: 'Sermorelin', sub: 'Growth hormone support', href: '/sermorelin' },
    ],
    featured: {
      img: '/images/nav-nad.png',
      bg: 'linear-gradient(145deg,#78C8A8,#A8D8C8)',
      title: 'NAD+\nTherapy',
      price: 'From $TBD/mo',
      href: '/nad',
    },
  },
  {
    label: 'Strength',
    treatments: [
      { label: 'Sermorelin', sub: 'Recovery · energy · lean muscle', href: '/sermorelin' },
    ],
    featured: {
      img: '/images/nav-sermorelin.png',
      bg: 'linear-gradient(145deg,#E0A070,#F2C4A0)',
      title: 'Sermorelin\nTherapy',
      price: 'From $125 first',
      href: '/sermorelin',
    },
  },
  {
    label: 'Well-being',
    treatments: [
      { label: 'Oxytocin Nasal Spray', sub: 'Stress relief · emotional balance', href: '/oxytocin' },
      { label: 'B6 / B12 Injections', sub: 'Energy · mood · neurological', href: '/b12' },
    ],
    featured: {
      img: '/images/nav-oxytocin.png',
      bg: 'linear-gradient(145deg,#B898D8,#D4B8E8)',
      title: 'Oxytocin\nNasal Spray',
      price: 'From $TBD/mo',
      href: '/oxytocin',
    },
  },
]

export function SiteNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileCategory, setMobileCategory] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(label)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const active = NAV_CATEGORIES.find(c => c.label === activeMenu)

  return (
    <>
      <style>{`
        .nl { font-size: 0.9375rem; font-weight: 500; color: #555; padding: 0.25rem 0.875rem; border-radius: 999px; text-decoration: none; transition: color 0.15s, background 0.15s; white-space: nowrap; border: none; background: transparent; cursor: pointer; font-family: var(--font-sans); display: flex; align-items: center; gap: 4px; }
        .nl:hover, .nl.open { color: var(--ink); background: var(--base); }
        .nl-plain { font-size: 0.9375rem; font-weight: 500; color: #555; padding: 0.25rem 0.875rem; border-radius: 999px; text-decoration: none; transition: color 0.15s, background 0.15s; white-space: nowrap; }
        .nl-plain:hover { color: var(--ink); background: var(--base); }
        .tx { font-size: 0.875rem; font-weight: 500; color: var(--ink); text-decoration: none; display: block; padding: 0.5rem 0.75rem; border-radius: 8px; transition: background 0.12s; line-height: 1.3; }
        .tx:hover { background: var(--base); }
        .mob-cat { display: flex; align-items: center; justify-content: space-between; padding: 1rem 0; font-size: 1.0625rem; font-weight: 600; color: var(--ink); border-bottom: 0.5px solid var(--border); cursor: pointer; }
        .mob-tx { display: block; padding: 0.625rem 0 0.625rem 1rem; font-size: 0.9375rem; color: var(--ink-2); text-decoration: none; border-bottom: 0.5px solid var(--border); }
        @media (max-width: 900px) { .nav-d { display: none !important; } .nav-mob { display: flex !important; } }
        @media (min-width: 901px) { .nav-mob { display: none !important; } }
      `}</style>

      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'var(--white)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
        transition: 'box-shadow 0.2s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 1.5rem', height: '64px', maxWidth: '1280px', margin: '0 auto', gap: '0.125rem' }}>

          {/* Logo */}
          <Link href="/" onClick={() => { setActiveMenu(null); setMobileOpen(false) }}
            style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0, marginRight: '1rem' }}>
            <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 12C7.5 12 3.5 9.2 3.5 6.5C3.5 4.8 5 3.5 6.5 3.5C7.1 3.5 7.5 3.8 7.7 4.2L7.5 5L7.3 4.2C7.5 3.8 7.9 3.5 8.5 3.5C10 3.5 11.5 4.8 11.5 6.5C11.5 9.2 7.5 12 7.5 12Z" fill="rgba(255,255,255,0.95)"/>
                <line x1="7.5" y1="5" x2="7.5" y2="12" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
              </svg>
            </span>
            nutree clinic
          </Link>

          {/* Desktop nav items */}
          <div className="nav-d" style={{ display: 'flex', alignItems: 'center', gap: 0, flex: 1 }}>
            {NAV_CATEGORIES.map(cat => (
              <button key={cat.label}
                className={`nl${activeMenu === cat.label ? ' open' : ''}`}
                onMouseEnter={() => openMenu(cat.label)}
                onMouseLeave={scheduleClose}>
                {cat.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.5, transition: 'transform 0.15s', transform: activeMenu === cat.label ? 'rotate(180deg)' : 'none' }}>
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            ))}
            <Link href="/pricing" className="nl-plain">Pricing</Link>
            <Link href="/blog" className="nl-plain">Blog</Link>
            <Link href="/about" className="nl-plain">About</Link>
          </div>

          {/* Right CTA */}
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
            <Link href="/consult"
              style={{ padding: '10px 22px', borderRadius: '999px', background: 'var(--ink)', color: '#fff', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Get started
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="nav-mob"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', marginLeft: '0.75rem' }} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d={mobileOpen ? "M5 5L19 19M5 19L19 5" : "M4 7h16M4 12h16M4 17h16"}
                stroke="var(--ink)" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* ── MEGA DROPDOWN — Eden style: left = treatment list, right = featured card ── */}
        {active && (
          <div
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'var(--white)',
              borderTop: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.1)',
              zIndex: 200,
            }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '1.75rem 1.5rem', display: 'flex', gap: '3rem' }}>

              {/* Left — category label + treatments */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem' }}>
                  {active.label}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                  {active.treatments.map(t => (
                    <Link key={t.href + t.label} href={t.href} className="tx" onClick={() => setActiveMenu(null)}>
                      <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <span>{t.label}</span>
                        <span style={{ fontSize: '1rem', fontWeight: 700, padding: '1px 5px', borderRadius: 3, background: 'rgba(0,0,0,0.06)', color: 'var(--ink-3)', letterSpacing: '0.04em' }}>Rˣ</span>
                      </span>
                      <span style={{ fontSize: '1rem', color: 'var(--ink-3)', fontWeight: 400, display: 'block', marginTop: 1 }}>{t.sub}</span>
                    </Link>
                  ))}
                </div>
                {/* Bottom links */}
                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '0.5px solid var(--border)', display: 'flex', gap: '1.5rem' }}>
                  <Link href="/pricing" onClick={() => setActiveMenu(null)}
                    style={{ fontSize: '0.875rem', color: 'var(--ink-3)', textDecoration: 'none', fontWeight: 500 }}>
                    View all pricing →
                  </Link>
                  <Link href="/faq" onClick={() => setActiveMenu(null)}
                    style={{ fontSize: '0.875rem', color: 'var(--ink-3)', textDecoration: 'none', fontWeight: 500 }}>
                    FAQ
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: '0.5px', background: 'var(--border)', flexShrink: 0 }} />

              {/* Right — featured card (Eden style) */}
              <div style={{ width: 260, flexShrink: 0 }}>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem' }}>
                  Get started
                </div>
                <Link href={active.featured.href} onClick={() => setActiveMenu(null)}
                  style={{
                    display: 'block', borderRadius: 16, overflow: 'hidden',
                    background: active.featured.bg, textDecoration: 'none',
                    position: 'relative', minHeight: 180,
                  }}>
                  <img
                    src={active.featured.img}
                    alt={active.featured.title}
                    style={{ position: 'absolute', bottom: 0, right: 0, height: '80%', width: 'auto', objectFit: 'contain' }}

                  />
                  <div style={{ position: 'relative', zIndex: 2, padding: '1.125rem' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--ink)', lineHeight: 1.25, marginBottom: '0.875rem', whiteSpace: 'pre-line' }}>
                      {active.featured.title}
                    </div>
                    <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', borderRadius: '999px', padding: '6px 14px', fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)' }}>
                      {active.featured.price}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ── MOBILE MENU ── */}
        {mobileOpen && (
          <div style={{ position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, background: 'var(--white)', overflowY: 'auto', zIndex: 99, padding: '0 1.25rem 3rem' }}>
            {NAV_CATEGORIES.map(cat => (
              <div key={cat.label}>
                <div className="mob-cat" onClick={() => setMobileCategory(mobileCategory === cat.label ? null : cat.label)}>
                  <span>{cat.label}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transition: 'transform 0.15s', transform: mobileCategory === cat.label ? 'rotate(180deg)' : 'none', opacity: 0.4 }}>
                    <path d="M4 6L8 10L12 6" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                {mobileCategory === cat.label && (
                  <div style={{ paddingBottom: '0.5rem' }}>
                    {cat.treatments.map(t => (
                      <Link key={t.label} href={t.href} className="mob-tx" onClick={() => setMobileOpen(false)}>
                        {t.label}
                        <span style={{ display: 'block', fontSize: '1rem', color: 'var(--ink-3)', marginTop: 1 }}>{t.sub}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/pricing" className="mob-cat" style={{ textDecoration: 'none', justifyContent: 'flex-start' }} onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/blog" className="mob-cat" style={{ textDecoration: 'none', justifyContent: 'flex-start' }} onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/about" className="mob-cat" style={{ textDecoration: 'none', justifyContent: 'flex-start' }} onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/faq" className="mob-cat" style={{ textDecoration: 'none', justifyContent: 'flex-start' }} onClick={() => setMobileOpen(false)}>FAQ</Link>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <Link href="/consult" onClick={() => setMobileOpen(false)}
                style={{ display: 'block', textAlign: 'center', padding: '16px', borderRadius: '999px', background: 'var(--con)', color: 'var(--ink)', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                Book a consultation · $50
              </Link>
              <Link href="/weight-loss" onClick={() => setMobileOpen(false)}
                style={{ display: 'block', textAlign: 'center', padding: '16px', borderRadius: '999px', background: 'var(--ink)', color: '#fff', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                Check eligibility →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
