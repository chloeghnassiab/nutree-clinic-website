// Reusable one-paragraph disclosures. Server-safe (no hooks).
import {
  COMPOUNDED_GENERAL, COMPOUNDED_GLP1, TRADEMARKS, RESULTS_VARY, TRIAL_DATA_NOTE, TESTIMONIAL_NOTE,
} from './copy'

const base: React.CSSProperties = { fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6, maxWidth: 760 }

/** "Not FDA-approved / not reviewed by FDA" disclosure. Use `glp1` wherever semaglutide or tirzepatide is named. */
export function CompoundedDisclosure({ variant = 'general', withTrademarks, style }: {
  variant?: 'general' | 'glp1'; withTrademarks?: boolean; style?: React.CSSProperties
}) {
  const showTm = withTrademarks ?? variant === 'glp1'
  return (
    <p style={{ ...base, ...style }}>
      {variant === 'glp1' ? COMPOUNDED_GLP1 : COMPOUNDED_GENERAL}
      {showTm && <> {TRADEMARKS}</>}
    </p>
  )
}

/** Results-vary note. Pass `trialData` under any figure taken from brand-name clinical trials. */
export function ResultsDisclaimer({ trialData, style }: { trialData?: boolean; style?: React.CSSProperties }) {
  return (
    <p style={{ ...base, ...style }}>
      {trialData && <>{TRIAL_DATA_NOTE} </>}
      {RESULTS_VARY}
    </p>
  )
}

/** Disclosure shown under every block of patient reviews or testimonials. */
export function TestimonialDisclaimer({ extra, style }: { extra?: string; style?: React.CSSProperties }) {
  return (
    <p style={{ ...base, textAlign: 'center', margin: '0 auto', ...style }}>
      {TESTIMONIAL_NOTE}
      {extra && <> {extra}</>}
    </p>
  )
}
