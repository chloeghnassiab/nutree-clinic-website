import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Nutree Clinic',
  description: 'Evidence-based articles on GLP-1 therapy, NAD+, peptides, longevity, and metabolic health from the Nutree Clinic team.',
}

// Static blog index — replace with MDX file reads in production
// import { getAllPosts } from '@/lib/blog'
const POSTS = [
  { slug: 'what-is-nad', title: 'What is NAD+?', excerpt: 'NAD+ is a coenzyme present in every living cell. Here\'s what it does, why it declines with age, and what that means for your health.', date: '2024-11-12', category: 'Longevity', readTime: '5 min' },
  { slug: 'deep-sleep-cortisol-and-fat-loss', title: 'Deep Sleep, Cortisol, and Fat Loss', excerpt: 'The relationship between sleep quality, cortisol regulation, and body composition is more direct than most people realise.', date: '2024-10-28', category: 'Weight Loss', readTime: '6 min' },
  { slug: 'protecting-your-muscle-while-you-lose-weight', title: 'Protecting Your Muscle While You Lose Weight', excerpt: 'GLP-1 medications are powerful tools for weight loss — but without the right approach, you risk losing muscle alongside fat.', date: '2024-10-14', category: 'Weight Loss', readTime: '7 min' },
  { slug: 'why-weight-loss-can-feel-impossible', title: 'Why Weight Loss Can Feel Impossible', excerpt: 'The science of why dieting often fails — and what we now know about the metabolic adaptations that work against sustained weight loss.', date: '2024-09-30', category: 'Weight Loss', readTime: '8 min' },
  { slug: 'peptides-and-mental-health', title: 'Peptides and Mental Health', excerpt: 'Emerging research on the role of peptide therapies — including oxytocin — in mood regulation, stress response, and emotional resilience.', date: '2024-09-16', category: 'Well-being', readTime: '6 min' },
  { slug: 'retatrutide-vs-tirzepatide-what-the-research-really-says-about-the-new-triple-agonist-approach', title: 'Retatrutide vs. Tirzepatide: What the Research Really Says', excerpt: 'A clear-eyed look at the clinical trial data comparing the emerging triple agonist retatrutide with the established dual agonist tirzepatide.', date: '2024-09-02', category: 'Weight Loss', readTime: '9 min' },
  { slug: 'struggling-with-fertility-the-cellular-factor-most-people-overlook', title: 'Struggling with Fertility? The Cellular Factor Most People Overlook', excerpt: 'NAD+ levels, mitochondrial function, and their often-overlooked relationship with reproductive health and fertility outcomes.', date: '2024-08-19', category: 'Longevity', readTime: '7 min' },
]

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  'Weight Loss': { bg: 'var(--glp)',  color: 'var(--glp-dark)' },
  'Longevity':  { bg: 'var(--nad)',  color: 'var(--nad-dark)' },
  'Well-being':  { bg: 'var(--oxy)',  color: 'var(--oxy-dark)' },
  'Energy':      { bg: 'var(--b12)',  color: 'var(--b12-dark)' },
}

export default function BlogPage() {
  return (
    <>
      <section style={{ padding: '2.5rem 1rem 1.5rem', background: 'var(--base)' }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem' }}>Clinical insights</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
          The Nutree Blog
        </h1>
        <p style={{ fontSize: "1rem", color: 'var(--ink-3)', lineHeight: 1.65 }}>
          Evidence-based articles on metabolic health, longevity, and the science behind our treatments.
        </p>
      </section>

      <section style={{ padding: '0 1rem 2rem', background: 'var(--base)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {POSTS.map((post, i) => {
            const cat = CATEGORY_COLORS[post.category] || { bg: 'var(--teal)', color: '#fff' }
            return (
              <Link key={i} href={`/blog/${post.slug}`} style={{
                display: 'block', textDecoration: 'none',
                background: 'var(--white)', borderRadius: 'var(--radius-lg)',
                border: '0.5px solid var(--border)', padding: '1rem',
                transition: 'box-shadow 0.15s, border-color 0.15s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: "1rem", fontWeight: 700, padding: '2px 8px', borderRadius: 'var(--radius-pill)', background: cat.bg, color: cat.color }}>{post.category}</span>
                  <span style={{ fontSize: "1rem", color: 'var(--ink-3)' }}>{post.readTime} read</span>
                  <span style={{ fontSize: "1rem", color: 'var(--ink-3)', marginLeft: 'auto' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.375rem' }}>{post.title}</h2>
                <p style={{ fontSize: "0.9375rem", color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: 0 }}>{post.excerpt}</p>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
