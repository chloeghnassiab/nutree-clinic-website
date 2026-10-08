// Important Safety Information block. Renders one ISI per drug class and
// carries the page anchor that every "Important Safety Information" link
// (see SafetyInfoLink / CTAArea) points to. Server-safe (no hooks), so it can
// be used from server and client pages alike.
import { ISI, type IsiDrug } from './isi'
import { ISI_ANCHOR, NOT_FOR_EMERGENCIES, PRESCRIPTION_ONLY } from './copy'

const h3: React.CSSProperties = { fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', margin: '1.25rem 0 0.5rem', fontFamily: 'var(--font-sans)' }
const h4: React.CSSProperties = { fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', margin: '0.875rem 0 0.25rem' }
const p: React.CSSProperties = { fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.65, margin: '0 0 0.5rem' }
const ul: React.CSSProperties = { margin: '0 0 0.5rem', paddingLeft: '1.25rem', fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.65 }

export function ImportantSafetyInfo({ drugs }: { drugs: IsiDrug[] }) {
  return (
    <section
      id={ISI_ANCHOR}
      aria-labelledby={`${ISI_ANCHOR}-heading`}
      style={{ padding: '2rem 1.5rem', background: 'var(--white)', borderTop: '1px solid var(--border)', scrollMarginTop: 80 }}
    >
      <div style={{ maxWidth: 820 }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-3)', marginBottom: '0.5rem' }}>
          Safety
        </div>
        <h2 id={`${ISI_ANCHOR}-heading`} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', color: 'var(--ink)', lineHeight: 1.2, margin: '0 0 0.75rem' }}>
          Important Safety Information
        </h2>
        <p style={p}>{PRESCRIPTION_ONLY}</p>

        {drugs.map(d => {
          const c = ISI[d]
          return (
            <div key={d}>
              <h3 style={h3}>{c.title}</h3>
              {c.status.map((s, i) => <p key={i} style={p}>{s}</p>)}

              {c.boxed && (
                <div style={{ border: '2px solid var(--ink)', borderRadius: 8, padding: '0.875rem 1rem', margin: '0.75rem 0' }}>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--ink)', marginBottom: 4 }}>{c.boxed.heading}</div>
                  <p style={{ ...p, margin: 0 }}>{c.boxed.body}</p>
                </div>
              )}

              <h4 style={h4}>Do not use if</h4>
              <ul style={ul}>{c.doNotUse.map(t => <li key={t}>{t}</li>)}</ul>

              <h4 style={h4}>Serious warnings and precautions</h4>
              <ul style={ul}>{c.warnings.map(t => <li key={t}>{t}</li>)}</ul>

              <h4 style={h4}>Common side effects</h4>
              <p style={p}>{c.common}</p>

              {c.interactions && (
                <>
                  <h4 style={h4}>Drug interactions</h4>
                  <ul style={ul}>{c.interactions.map(t => <li key={t}>{t}</li>)}</ul>
                </>
              )}

              {c.pregnancy && (
                <>
                  <h4 style={h4}>Pregnancy and breastfeeding</h4>
                  <p style={p}>{c.pregnancy}</p>
                </>
              )}
            </div>
          )
        })}

        <p style={{ ...p, marginTop: '1.25rem' }}>
          This is not a complete list of possible side effects or risks. Talk with your provider about the benefits and risks of
          any treatment, and tell them about all of your medical conditions and the medicines and supplements you take.
        </p>
        <p style={p}>{NOT_FOR_EMERGENCIES}</p>
        <p style={{ ...p, color: 'var(--ink-3)' }}>
          You are encouraged to report negative side effects of prescription drugs to the FDA. Visit www.fda.gov/medwatch or call
          1-800-FDA-1088.
        </p>
      </div>
    </section>
  )
}
