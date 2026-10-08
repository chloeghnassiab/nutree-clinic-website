import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ConsultBand } from '@/components/ui/PageComponents'
import { PostContent, extractToc } from '@/components/blog/PostContent'
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/posts'

const SITE_URL = 'https://nutreeclinic.com'

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  'Weight Loss': { bg: 'var(--glp)',  color: 'var(--glp-dark)' },
  'Longevity':   { bg: 'var(--nad)',  color: 'var(--nad-dark)' },
  'Well-being':  { bg: 'var(--oxy)',  color: 'var(--oxy-dark)' },
  'Energy':      { bg: 'var(--b12)',  color: 'var(--b12-dark)' },
}

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllPostSlugs().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post not found' }
  const url = `/blog/${slug}`
  return {
    // absolute: the live <title> is reproduced exactly, without the layout's "| Nutree Clinic" template
    title: { absolute: post.seoTitle },
    description: post.description,
    alternates: { canonical: url },
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      type: 'article',
      url,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      section: post.category,
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.description,
      images: [post.coverImage],
    },
  }
}

function initials(name: string) {
  return name.split(',')[0].split(/\s+/).filter(Boolean).map((w) => w[0]).join('').slice(0, 2).toUpperCase()
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const cat = CATEGORY_COLORS[post.category] || { bg: 'var(--teal)', color: '#fff' }
  const related = getRelatedPosts(slug)
  const toc = extractToc(post.content)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: [`${SITE_URL}${post.coverImage}`],
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { '@type': 'Organization', name: 'Nutree Clinic', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Nutree Clinic',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/NutreeClinic-logo-stacked.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      {/* Back nav */}
      <div style={{ padding: '0.875rem 1.5rem', borderBottom: '0.5px solid var(--border)', background: 'var(--white)' }}>
        <Link href="/blog" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
          fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink-3)',
          textDecoration: 'none',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          All articles
        </Link>
      </div>

      {/* Main layout */}
      <div style={{ background: 'var(--white)' }}>
        <div className="blog-layout" style={{ maxWidth: 1080, margin: '0 auto', padding: '2.5rem 1.5rem 4rem', display: 'flex', gap: '5rem', alignItems: 'flex-start' }}>

          {/* ── LEFT: Article ─────────────────────────────────────── */}
          <article style={{ flex: 1, minWidth: 0 }}>

            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', background: cat.bg, color: cat.color }}>
                {post.category}
              </span>
              <span style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>{post.readTime} read</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>·</span>
              <time dateTime={post.date} style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>
                {new Date(`${post.date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}
              </time>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 4vw, 2.625rem)', color: 'var(--ink)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              {post.title}
            </h1>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.75rem' }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--nad)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', fontWeight: 700, color: 'var(--nad-dark)', flexShrink: 0, letterSpacing: '0.03em' }}>{initials(post.author)}</div>
              <span style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', fontWeight: 500 }}>{post.author}</span>
            </div>

            {/* Key takeaways box */}
            <div style={{ background: 'var(--base)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '2rem', borderLeft: '3px solid var(--teal)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--teal)', marginBottom: '0.75rem' }}>
                Key takeaways
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.75 }}>{post.excerpt}</p>
            </div>

            {/* Cover image */}
            <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: '2rem', aspectRatio: '16 / 9' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.coverImage} alt={post.coverAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Article body */}
            <PostContent content={post.content} />

            {/* Legal */}
            <div style={{ marginTop: '2.5rem', paddingTop: '1.25rem', borderTop: '0.5px solid var(--border)', fontSize: '0.75rem', color: 'var(--ink-3)', lineHeight: 1.65 }}>
              This article is for informational purposes only and does not constitute medical advice. Always consult with a licensed healthcare provider before starting any treatment.
            </div>
          </article>

          {/* ── RIGHT: Sticky TOC ──────────────────────────────────── */}
          {toc.length > 0 && (
            <aside style={{ width: 220, flexShrink: 0, position: 'sticky', top: 80, display: 'none' }} className="blog-toc">
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-3)', marginBottom: '0.875rem' }}>
                Contents
              </div>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                {toc.map(item => (
                  <a key={item.id} href={`#${item.id}`} className="toc-link">
                    {item.title}
                  </a>
                ))}
              </nav>
            </aside>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) { .blog-toc { display: flex !important; flex-direction: column; max-height: calc(100vh - 100px); overflow-y: auto; } }
        .toc-link { font-size: 0.875rem; color: var(--ink-3); text-decoration: none; padding: 0.3rem 0.625rem; border-radius: 6px; line-height: 1.45; transition: color 0.15s, background 0.15s; }
        .toc-link:hover { color: var(--ink); background: var(--base); }
      `}</style>

      {/* Related reading */}
      {related.length > 0 && (
        <section style={{ padding: '2.5rem 1.5rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-3)', marginBottom: '1.25rem' }}>
              Related reading
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {related.map(r => {
                const rc = CATEGORY_COLORS[r.category] || { bg: 'var(--teal)', color: '#fff' }
                return (
                  <Link key={r.slug} href={`/blog/${r.slug}`} style={{ display: 'flex', flexDirection: 'column', flex: '1 1 220px', minWidth: 220, textDecoration: 'none', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '0.5px solid var(--border)', overflow: 'hidden' }}>
                    <div style={{ width: '100%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={r.coverImage} alt={r.coverAlt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div style={{ padding: '0.875rem 1rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.375rem', flex: 1 }}>
                      <span style={{ fontSize: '0.6875rem', fontWeight: 700, padding: '1px 6px', borderRadius: '999px', background: rc.bg, color: rc.color, alignSelf: 'flex-start' }}>
                        {r.category}
                      </span>
                      <div style={{ fontSize: '0.9375rem', fontFamily: 'var(--font-serif)', color: 'var(--ink)', lineHeight: 1.35, fontWeight: 600 }}>{r.title}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', marginTop: 'auto', paddingTop: '0.25rem' }}>{r.readTime} read</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <ConsultBand />
    </>
  )
}
