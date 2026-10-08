import type { Metadata } from 'next'
import Link from 'next/link'
import { UtilityHeader, UtilityBody } from '@/components/utility/UtilityHeader'

export const metadata: Metadata = {
  title: { absolute: 'Cookie Notice | Nutree Clinic' },
  description: 'How Nutree Clinic uses cookies and similar technologies on its website, and how you can manage your preferences.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/cookies' },
}

// Category wording copied from the live site's cookie-settings panel; the definition
// and browser-settings guidance come from the Privacy Policy.
const CATEGORIES = [
  { name: 'Essential (required)', desc: 'These cookies enable strictly necessary cookies for security, language support and verification of identity. These cookies can’t be disabled.' },
  { name: 'Functionality', desc: 'These cookies collect data to remember choices users make to improve and give a better user experience. Disabling can cause some parts of the site to not work properly.' },
  { name: 'Performance & Analytics', desc: 'These cookies help us to understand how visitors interact with our website, help us measure and analyze traffic to improve our service.' },
  { name: 'Targeting & Advertising', desc: 'These cookies help us to better deliver marketing content and customized ads.' },
]

const p: React.CSSProperties = { marginBottom: '0.875rem' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-serif)', fontSize: '1.375rem', color: 'var(--ink)', lineHeight: 1.25, margin: '2rem 0 0.625rem' }

export default function CookiesPage() {
  return (
    <>
      <UtilityHeader eyebrow="Legal" title="Cookie Notice" subtitle="Nutree Clinic LLC" />
      <UtilityBody>
        <div style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.75 }}>
          <p style={p}>
            We use cookies to improve user experience. Cookies are small pieces of data stored on your device
            (computer or mobile device). We may also use Local Storage Objects (LSOs) such as HTML5 to store
            content information and preferences.
          </p>

          <h2 style={h2}>Cookie categories</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {CATEGORIES.map(c => (
              <li key={c.name} style={{ background: 'var(--base)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '0.875rem 1rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '0.25rem' }}>{c.name}</div>
                <div>{c.desc}</div>
              </li>
            ))}
          </ul>

          <h2 style={h2}>Managing cookies</h2>
          <p style={p}>
            You can manage or delete Cookies in your browser settings. Disabling some cookies may cause parts of
            the site to not work properly.
          </p>

          <h2 style={h2}>More information</h2>
          <p style={p}>
            For full details on how we collect and use your Personal Data, see our{' '}
            <Link href="/privacy" style={{ color: 'var(--teal-dark)', textDecoration: 'underline' }}>Privacy Policy</Link>.
            Questions? Email{' '}
            <a href="mailto:privacy@nutreeclinic.com" style={{ color: 'var(--teal-dark)', textDecoration: 'underline' }}>privacy@nutreeclinic.com</a>.
          </p>
        </div>
      </UtilityBody>
    </>
  )
}
