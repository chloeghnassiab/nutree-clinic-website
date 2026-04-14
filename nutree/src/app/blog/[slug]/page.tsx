import type { Metadata } from 'next'
import Link from 'next/link'
import { ConsultBand } from '@/components/ui/PageComponents'
import { notFound } from 'next/navigation'

// Static blog posts — add new posts here
// Later these can be moved to MDX files
const POSTS: Record<string, {
  title: string
  date: string
  category: string
  readTime: string
  author: string
  excerpt: string
  content: string
}> = {
  'what-is-nad': {
    title: 'What is NAD+?',
    date: '2024-11-12',
    category: 'Longevity',
    readTime: '5 min',
    author: 'Nutree Clinic',
    excerpt: 'NAD+ is a coenzyme present in every living cell. Here\'s what it does, why it declines with age, and what that means for your health.',
    content: `
NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every living cell in your body. It plays a central role in hundreds of metabolic processes — most importantly, the conversion of nutrients into cellular energy.

## Why NAD+ matters

Without NAD+, your mitochondria cannot produce ATP — the molecule your cells use as fuel. Every time you feel fatigued, mentally foggy, or slow to recover from exercise, declining NAD+ levels may be a contributing factor.

Beyond energy, NAD+ activates a class of proteins called sirtuins, which are involved in DNA repair, inflammation regulation, and cellular longevity. This is why NAD+ has attracted significant attention in the longevity research community.

## Why it declines

NAD+ levels in the body decline naturally with age — research suggests levels can drop by as much as 50% between your 20s and 60s. This decline is associated with reduced mitochondrial function, increased fatigue, slower recovery, and the general metabolic changes we associate with aging.

## What NAD+ therapy does

NAD+ therapy — delivered as an injection, nasal spray, or transdermal patch — replenishes cellular NAD+ levels directly, bypassing the digestive system. Many patients report noticeable improvements in energy, mental clarity, and recovery within the first few weeks of consistent use.

The therapy does not replace the body's natural NAD+ production. Rather, it supplements declining levels to support the metabolic and longevity pathways that depend on it.

## Is it right for you?

NAD+ therapy is most appropriate for adults experiencing fatigue, cognitive decline, or age-related changes in energy and body composition. Your Nutree clinician will review your health history and recommend the most appropriate delivery form and dosing schedule.
    `,
  },
  'protecting-your-muscle-while-you-lose-weight': {
    title: 'Protecting Your Muscle While You Lose Weight',
    date: '2024-10-14',
    category: 'Weight Loss',
    readTime: '7 min',
    author: 'Nutree Clinic',
    excerpt: 'GLP-1 medications are powerful tools for weight loss — but without the right approach, you risk losing muscle alongside fat.',
    content: `
GLP-1 medications like semaglutide and tirzepatide work primarily by reducing appetite and slowing gastric emptying. The result — for most patients — is a significant reduction in caloric intake. This is effective, but it comes with an important consideration: when you consume fewer calories, your body doesn't always distinguish between fat and muscle as the source of energy.

## The muscle loss risk

Clinical studies of GLP-1 medications have shown that a meaningful proportion of weight lost can come from lean muscle mass, particularly in patients who are not prioritizing resistance training and adequate protein intake. In older patients, this is especially significant — muscle loss accelerates naturally with age, and a period of caloric restriction can compound this.

## What protects your muscle

Three things consistently emerge from the research:

**Protein.** Adequate protein intake is the single most important nutritional intervention for preserving lean mass during weight loss. Most clinicians recommend at least 1.2g of protein per kilogram of bodyweight per day during a GLP-1 protocol — and often more.

**Resistance training.** Resistance exercise signals your body to maintain muscle tissue even in a caloric deficit. You do not need to lift heavy weights — even bodyweight resistance training two to three times per week provides meaningful protection.

**Gradual weight loss.** Rapid weight loss is more likely to include lean mass than gradual, sustained loss. GLP-1 microdosing — which produces more gradual results — may offer some advantage here for patients who are concerned about muscle preservation.

## Sermorelin as a complement

Some Nutree patients combine GLP-1 therapy with Sermorelin — a peptide that supports the body's own growth hormone release. Growth hormone plays a key role in maintaining lean muscle mass and supporting body composition during weight loss. Your clinician can advise whether this combination is appropriate for your health profile.

The goal of GLP-1 therapy is not just weight loss — it is improved metabolic health and quality of life. Preserving muscle is central to achieving that goal.
    `,
  },
}

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  'Weight Loss': { bg: 'var(--glp)',  color: 'var(--glp-dark)' },
  'Longevity':  { bg: 'var(--nad)',  color: 'var(--nad-dark)' },
  'Well-being':  { bg: 'var(--oxy)',  color: 'var(--oxy-dark)' },
  'Energy':      { bg: 'var(--b12)',  color: 'var(--b12-dark)' },
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return { title: 'Post not found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) notFound()

  const cat = CATEGORY_COLORS[post.category] || { bg: 'var(--teal)', color: '#fff' }

  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--ink)', margin: '1.5rem 0 0.5rem', lineHeight: 1.3 }}>{line.replace('## ', '')}</h2>
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '0.375rem' }}>{line.replace(/\*\*/g, '')}</p>
      }
      if (line.trim() === '') return <div key={i} style={{ height: '0.75rem' }} />
      return <p key={i} style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '0.5rem' }}>{line}</p>
    })
  }

  return (
    <>
      {/* Back */}
      <div style={{ padding: '0.875rem 1rem 0', background: 'var(--base)' }}>
        <Link href="/blog" style={{ fontSize: '1rem', color: 'var(--ink-3)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          ← Back to blog
        </Link>
      </div>

      {/* Header */}
      <section style={{ padding: '1.25rem 1rem 2rem', background: 'var(--base)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 700, padding: '3px 9px', borderRadius: '999px', background: cat.bg, color: cat.color }}>{post.category}</span>
          <span style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>{post.readTime} read</span>
          <span style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>·</span>
          <span style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: 'var(--ink)', lineHeight: 1.15, marginBottom: '0.75rem' }}>
          {post.title}
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.6, maxWidth: 560 }}>
          {post.excerpt}
        </p>
        <div style={{ marginTop: '0.875rem', fontSize: '0.875rem', color: 'var(--ink-3)' }}>
          By {post.author}
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '1.5rem 1rem 2.5rem', background: 'var(--white)', borderTop: '1px solid var(--border)', maxWidth: 680, margin: '0 auto', width: '100%' }}>
        {renderContent(post.content)}
      </section>

      {/* Legal */}
      <div style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6, background: 'var(--base)', borderTop: '0.5px solid var(--border)' }}>
        This article is for informational purposes only and does not constitute medical advice. Always consult with a licensed healthcare provider before starting any treatment.
      </div>

      <ConsultBand
        heading="Have questions about your options?"
        sub="Speak directly with a licensed Nutree clinician · $50"
      />
    </>
  )
}
