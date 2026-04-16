'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const POSTS = [
  {
    slug: 'peptides-and-mental-health',
    title: 'What Are the Best Peptides for Mental Health?',
    excerpt: 'Peptide-based care is changing how clinicians approach mental health — addressing cravings, anxiety, cognitive fatigue, and sleep quality without replacing traditional therapies.',
    date: '2026-04-10',
    category: 'Well-being',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    coverImage: '/images/blog/peptides-mental-health-nutreeclinic.jpg',
  },
  {
    slug: 'struggling-with-fertility-the-cellular-factor-most-people-overlook',
    title: 'Struggling with Fertility? The Cellular Factor Most People Overlook',
    excerpt: 'Emerging research suggests NAD+ may play a role in cellular energy and reproductive health. Here\'s what the science shows — and why mitochondrial health matters.',
    date: '2026-03-30',
    category: 'Longevity',
    readTime: '6 min',
    author: 'Tara Marko, PA-C',
    coverImage: '/images/blog/fertility-nad-cellular-health-nutreeclinic.jpg',
  },
  {
    slug: 'what-is-nad',
    title: 'What Is NAD+? The Science Behind Cellular Energy & Healthy Aging',
    excerpt: 'If you\'ve been exploring ways to improve energy, recovery, or long-term vitality, you\'ve likely come across NAD+. Here\'s what it is and what the research supports.',
    date: '2026-03-25',
    category: 'Longevity',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    coverImage: '/images/blog/what-is-nad-plus-cellular-energy-nutreeclinic.jpg',
  },
  {
    slug: 'deep-sleep-cortisol-and-fat-loss',
    title: 'Deep Sleep, Cortisol, and Fat Loss — Why Your Best "Fat Burner" Might Be Sleep',
    excerpt: 'Most people think fat loss starts with restriction or stimulants. But one of the most powerful metabolic foundations is often much simpler: deep, restorative sleep.',
    date: '2026-03-12',
    category: 'Weight Loss',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    coverImage: '/images/blog/deep-sleep-cortisol-fat-loss-nutreeclinic.jpg',
  },
  {
    slug: 'protecting-your-muscle-while-you-lose-weight',
    title: 'Protecting Your Muscle While You Lose Weight',
    excerpt: 'GLP-1 medications are powerful tools for weight loss — but without the right approach, you risk losing muscle alongside fat. Here\'s how to protect your lean mass.',
    date: '2026-02-04',
    category: 'Weight Loss',
    readTime: '8 min',
    author: 'Tara Marko, PA-C',
    coverImage: '/images/blog/protecting-muscle-weight-loss-glp1-nutreeclinic.jpg',
  },
  {
    slug: 'why-weight-loss-can-feel-impossible',
    title: 'Why Weight Loss Can Feel Impossible — And Why It\'s Not a Discipline Problem',
    excerpt: 'A calorie deficit is part of weight loss. But for many people living with obesity, biology can make getting into that deficit — and staying there — extremely difficult.',
    date: '2026-01-27',
    category: 'Weight Loss',
    readTime: '4 min',
    author: 'Tara Marko, PA-C',
    coverImage: '/images/blog/why-weight-loss-feels-impossible-nutreeclinic.jpg',
  },
  {
    slug: 'retatrutide-vs-tirzepatide-what-the-research-really-says-about-the-new-triple-agonist-approach',
    title: 'Retatrutide vs. Tirzepatide: What the Research Really Says',
    excerpt: 'A clear-eyed look at the clinical trial data comparing the emerging triple agonist retatrutide with the established dual agonist tirzepatide.',
    date: '2026-01-23',
    category: 'Weight Loss',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    coverImage: '/images/blog/retatrutide-vs-tirzepatide-research-nutreeclinic.jpg',
  },
  {
    slug: 'glp-1-more-than-appetite-suppressants-a-whole-body-medicine',
    title: 'GLP-1 Medications: More Than Appetite Suppressants — A Whole-Body Medicine',
    excerpt: 'GLP-1 medications like semaglutide and tirzepatide have gained prominence for weight loss, but their therapeutic scope extends far beyond appetite suppression.',
    date: '2026-01-11',
    category: 'Weight Loss',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    coverImage: '/images/blog/glp1-whole-body-medicine-semaglutide-nutreeclinic.jpg',
  },
  {
    slug: 'a-new-era-in-obesity-care-the-first-oral-semaglutide-pill-is-here',
    title: 'A New Era in Obesity Care: The First Oral Semaglutide Pill Is Here',
    excerpt: 'Obesity medicine is evolving rapidly. In late 2025, the FDA approved the first oral GLP-1 pill for weight management — here\'s what the clinical evidence shows.',
    date: '2026-01-06',
    category: 'Weight Loss',
    readTime: '4 min',
    author: 'Tara Marko, PA-C',
    coverImage: '/images/blog/oral-semaglutide-pill-obesity-care-nutreeclinic.jpg',
  },
  {
    slug: 'the-emotional-side-of-glp-1-weight-loss-2',
    title: 'The Emotional Side of GLP-1 Weight Loss (Part II)',
    excerpt: 'When appetite quiets, life doesn\'t reorganize itself on its own. The medication may lower the volume — but you still build the system. Rebuilding daily life when food is no longer the anchor.',
    date: '2025-12-31',
    category: 'Well-being',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    coverImage: '/images/blog/emotional-side-glp1-weight-loss-nutreeclinic.jpg',
  },
]

const CATEGORIES = ['All', 'Weight Loss', 'Longevity', 'Well-being']

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  'Weight Loss': { bg: 'var(--glp)', color: 'var(--glp-dark)' },
  'Longevity':   { bg: 'var(--nad)', color: 'var(--nad-dark)' },
  'Well-being':  { bg: 'var(--oxy)', color: 'var(--oxy-dark)' },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })
}

function CategoryBadge({ category, small }: { category: string; small?: boolean }) {
  const c = CATEGORY_COLORS[category] || { bg: 'var(--teal)', color: '#fff' }
  return (
    <span style={{
      fontSize: small ? '0.6875rem' : '0.75rem',
      fontWeight: 700,
      padding: small ? '1px 6px' : '2px 9px',
      borderRadius: '999px',
      background: c.bg, color: c.color,
      flexShrink: 0,
    }}>{category}</span>
  )
}

type Post = typeof POSTS[number]

// ─── Hero card (latest post) ───────────────────────────────────────────────
function HeroCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <div className="blog-hero-inner" style={{
        display: 'flex',
        gap: 0,
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        border: '0.5px solid var(--border)',
        overflow: 'hidden',
        minHeight: 260,
      }}>
        <img
          className="blog-hero-img"
          src={post.coverImage}
          alt={post.title}
          style={{
            width: '45%',
            minWidth: 180,
            objectFit: 'cover',
            display: 'block',
            flexShrink: 0,
          }}
        />
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem' }}>
          <div><CategoryBadge category={post.category} /></div>
          <h2 className="blog-hero-title" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
            color: 'var(--ink)', lineHeight: 1.15, margin: 0,
          }}>{post.title}</h2>
          <p className="blog-hero-excerpt" style={{
            fontSize: '1.25rem', color: 'var(--ink-3)',
            lineHeight: 1.65, margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}>{post.excerpt}</p>
          <div style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginTop: 'auto' }}>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ─── Secondary card (2nd and 3rd posts) ───────────────────────────────────
function SecondaryCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-secondary-link" style={{ textDecoration: 'none', flex: '1 1 280px' }}>
      <div style={{
        display: 'flex',
        gap: 0,
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        border: '0.5px solid var(--border)',
        overflow: 'hidden',
        height: '100%',
        minHeight: 200,
      }}>
        <img
          className="blog-secondary-img"
          src={post.coverImage}
          alt={post.title}
          style={{
            width: 180,
            minWidth: 180,
            objectFit: 'cover',
            display: 'block',
            flexShrink: 0,
          }}
        />
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center' }}>
          <div><CategoryBadge category={post.category} /></div>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem', fontWeight: 600,
            color: 'var(--ink)', lineHeight: 1.3, margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}>{post.title}</h3>
          <p className="blog-secondary-excerpt" style={{
            fontSize: '0.9375rem', color: 'var(--ink-3)',
            lineHeight: 1.6, margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}>{post.excerpt}</p>
          <div style={{ fontSize: '0.75rem', color: 'var(--ink-3)', marginTop: '0.25rem', display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ─── Regular list card ─────────────────────────────────────────────────────
function ListCard({ post, last }: { post: Post; last: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{
      display: 'flex', gap: '1rem', textDecoration: 'none',
      padding: '1.125rem 0',
      borderBottom: last ? 'none' : '0.5px solid var(--border)',
      alignItems: 'flex-start',
    }}>
      <img
        className="blog-list-img"
        src={post.coverImage}
        alt={post.title}
        style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ marginBottom: '0.4rem' }}>
          <CategoryBadge category={post.category} />
        </div>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.0625rem', fontWeight: 600,
          color: 'var(--ink)', lineHeight: 1.35, marginBottom: '0.375rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden',
        }}>{post.title}</h3>
        <p style={{
          fontSize: '0.875rem', color: 'var(--ink-3)',
          lineHeight: 1.55, marginBottom: '0.5rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical' as const,
          overflow: 'hidden',
        }}>{post.excerpt}</p>
        <div style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
          <span>·</span>
          <span>{post.author}</span>
        </div>
      </div>
    </Link>
  )
}

// ─── Main exported component ───────────────────────────────────────────────
export default function BlogList() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return POSTS.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory
      const matchesQuery = !q
        || p.title.toLowerCase().includes(q)
        || p.excerpt.toLowerCase().includes(q)
        || p.category.toLowerCase().includes(q)
        || p.author.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  const isFiltered = query.trim() !== '' || activeCategory !== 'All'

  const hero = filtered[0]
  const secondary = filtered.slice(1, 3)
  const rest = isFiltered ? filtered.slice(3) : filtered.slice(3)

  return (
    <>
      <style>{`
        /* ── Mobile (≤ 600px) ───────────────────────────────────────────── */
        @media (max-width: 600px) {

          /* Hero: stack image above text */
          .blog-hero-inner {
            flex-direction: column !important;
            min-height: unset !important;
          }
          .blog-hero-img {
            width: 100% !important;
            min-width: unset !important;
            height: 220px !important;
          }
          .blog-hero-title {
            font-size: 1.625rem !important;
          }
          .blog-hero-excerpt {
            font-size: 1rem !important;
            -webkit-line-clamp: 3 !important;
          }

          /* Secondary: smaller image, hide excerpt */
          .blog-secondary-link {
            flex: 1 1 100% !important;
          }
          .blog-secondary-img {
            width: 110px !important;
            min-width: 110px !important;
          }
          .blog-secondary-excerpt {
            display: none !important;
          }

          /* List: smaller thumbnail */
          .blog-list-img {
            width: 88px !important;
            height: 88px !important;
          }
        }

        /* ── Tablet (601px – 860px) ─────────────────────────────────────── */
        @media (min-width: 601px) and (max-width: 860px) {

          /* Hero: narrower image */
          .blog-hero-img {
            width: 38% !important;
          }
          .blog-hero-title {
            font-size: 1.75rem !important;
          }
          .blog-hero-excerpt {
            font-size: 1.0625rem !important;
          }

          /* Secondary: slightly smaller image */
          .blog-secondary-img {
            width: 140px !important;
            min-width: 140px !important;
          }
        }
      `}</style>

      {/* Page header */}
      <section style={{ padding: '2.5rem 1.5rem 1.25rem', background: 'var(--base)' }}>
        <div style={{
          fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)',
          textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem',
        }}>Clinical insights</div>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
          color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.5rem',
        }}>The Nutree Blog</h1>
        <p style={{ fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
          Evidence-based articles on metabolic health, longevity, and the science behind our treatments.
        </p>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <span style={{
            position: 'absolute', left: '0.875rem', top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--ink-3)', pointerEvents: 'none', fontSize: '1rem',
          }}>
            {/* search icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search articles…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6875rem 1rem 0.6875rem 2.5rem',
              fontSize: '0.9375rem',
              border: '0.5px solid var(--border)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--white)',
              color: 'var(--ink)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                position: 'absolute', right: '0.875rem', top: '50%',
                transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--ink-3)', fontSize: '1rem', padding: 0,
                lineHeight: 1,
              }}
            >✕</button>
          )}
        </div>

        {/* Category filters */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => {
            const active = cat === activeCategory
            const c = CATEGORY_COLORS[cat]
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.375rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.8125rem',
                  fontWeight: active ? 700 : 500,
                  cursor: 'pointer',
                  border: active ? 'none' : '0.5px solid var(--border)',
                  background: active ? (c ? c.bg : 'var(--ink)') : 'var(--white)',
                  color: active ? (c ? c.color : '#fff') : 'var(--ink-3)',
                  transition: 'background 0.12s, color 0.12s',
                }}
              >{cat}</button>
            )
          })}
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: '0 1.5rem 2.5rem', background: 'var(--base)' }}>
        {filtered.length === 0 ? (
          <div style={{ padding: '3rem 0', textAlign: 'center', color: 'var(--ink-3)', fontSize: '0.9375rem' }}>
            No articles match your search.
          </div>
        ) : isFiltered ? (
          /* Flat list when filtering */
          <div>
            {filtered.map((post, i) => (
              <ListCard key={post.slug} post={post} last={i === filtered.length - 1} />
            ))}
          </div>
        ) : (
          /* Default layout: hero → 2 secondary → rest */
          <>
            {/* Hero */}
            <div style={{ marginBottom: '0.875rem' }}>
              <HeroCard post={hero} />
            </div>

            {/* Secondary pair */}
            {secondary.length > 0 && (
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '0.875rem' }}>
                {secondary.map(p => <SecondaryCard key={p.slug} post={p} />)}
              </div>
            )}

            {/* Divider */}
            {rest.length > 0 && (
              <div style={{ height: '0.5px', background: 'var(--border)', margin: '0.5rem 0' }} />
            )}

            {/* Rest */}
            <div>
              {rest.map((post, i) => (
                <ListCard key={post.slug} post={post} last={i === rest.length - 1} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  )
}
