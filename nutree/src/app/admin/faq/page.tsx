import type { Metadata } from 'next'
import { FAQ_ITEMS } from '@/lib/faq.config'

export const metadata: Metadata = {
  title: 'FAQ Admin — Nutree Clinic',
}

export default function AdminFAQPage() {
  const sorted = [...FAQ_ITEMS].sort((a, b) => a.order - b.order || a.category.localeCompare(b.category))
  return (
    <div style={{ padding: '2rem 1.25rem', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', background: '#FFF4B0', borderRadius: 8, fontSize: '0.875rem', color: '#7A6200' }}>
        <strong>Read-only.</strong> To modify FAQs edit <code>src/lib/faq.config.ts</code>
      </div>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.25rem' }}>FAQ Items</h1>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ background: 'var(--base)', borderBottom: '2px solid var(--border)' }}>
              {['#', 'ID', 'Category', 'Question', 'Pages', 'Active'].map(h => (
                <th key={h} style={{ padding: '0.625rem 0.75rem', textAlign: 'left', fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((item, i) => (
              <tr key={item.id} style={{ borderBottom: '0.5px solid var(--border)', background: i % 2 === 0 ? 'var(--white)' : 'var(--base)' }}>
                <td style={{ padding: '0.625rem 0.75rem', color: 'var(--ink-3)' }}>{item.order}</td>
                <td style={{ padding: '0.625rem 0.75rem', fontFamily: 'monospace', color: 'var(--ink-3)', fontSize: '0.8125rem' }}>{item.id}</td>
                <td style={{ padding: '0.625rem 0.75rem' }}>
                  <span style={{ padding: '2px 8px', borderRadius: 999, background: 'var(--teal)', color: '#fff', fontSize: '0.75rem', fontWeight: 700 }}>{item.category}</span>
                </td>
                <td style={{ padding: '0.625rem 0.75rem', color: 'var(--ink)', maxWidth: 320 }}>{item.question}</td>
                <td style={{ padding: '0.625rem 0.75rem', color: 'var(--ink-3)', fontSize: '0.8125rem' }}>{item.pages.join(', ')}</td>
                <td style={{ padding: '0.625rem 0.75rem' }}>
                  <span style={{ color: item.active ? 'var(--green-badge)' : 'var(--ink-3)', fontWeight: 700 }}>
                    {item.active ? '✓ Yes' : '— No'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
