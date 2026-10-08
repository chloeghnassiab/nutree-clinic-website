import { UtilityHeader, UtilityBody } from './UtilityHeader'

/**
 * Renders a legal document whose body is verbatim HTML copied from the live site
 * (see legalContent.ts). Styles are scoped to `.nutree-legal`.
 */
export function LegalDoc({ eyebrow = 'Legal', title, subtitle, html }: {
  eyebrow?: string; title: string; subtitle?: string; html: string
}) {
  return (
    <>
      <UtilityHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <UtilityBody>
        <style>{`
          .nutree-legal { font-size: 0.9375rem; color: var(--ink-2); line-height: 1.75; overflow-wrap: anywhere; }
          .nutree-legal h2 { font-family: var(--font-serif); font-size: 1.375rem; color: var(--ink); line-height: 1.25; margin: 2rem 0 0.625rem; }
          .nutree-legal h3 { font-family: var(--font-serif); font-size: 1.1875rem; color: var(--ink); line-height: 1.3; margin: 1.5rem 0 0.5rem; }
          .nutree-legal h4 { font-size: 1rem; font-weight: 700; color: var(--ink); margin: 1.25rem 0 0.375rem; }
          .nutree-legal p { margin: 0 0 0.875rem; }
          .nutree-legal ul, .nutree-legal ol { margin: 0 0 1rem; padding-left: 1.375rem; }
          .nutree-legal ul { list-style: disc; }
          .nutree-legal ol { list-style: decimal; }
          .nutree-legal li { margin-bottom: 0.375rem; }
          .nutree-legal strong, .nutree-legal b { color: var(--ink); font-weight: 700; }
          .nutree-legal a { color: var(--teal-dark); text-decoration: underline; }
          .nutree-legal hr { border: none; border-top: 1px solid var(--border); margin: 1.75rem 0; }
          .nutree-legal > :first-child { margin-top: 0; }
        `}</style>
        <div className="nutree-legal" dangerouslySetInnerHTML={{ __html: html }} />
      </UtilityBody>
    </>
  )
}
