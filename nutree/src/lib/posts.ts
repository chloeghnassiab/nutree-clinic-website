import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * Blog post loader. One markdown file per post lives in `content/blog/<slug>.md`.
 * Read with fs at build time (pages are statically generated).
 */

export type PostMeta = {
  slug: string
  /** Article title (H1) */
  title: string
  /** <title> tag, used verbatim (absolute) */
  seoTitle: string
  /** Meta description */
  description: string
  /** ISO date, YYYY-MM-DD */
  date: string
  /** Optional ISO date of the last meaningful update */
  updated?: string
  category: string
  readTime: string
  author: string
  excerpt: string
  coverImage: string
  coverAlt: string
  related: string[]
}

export type Post = PostMeta & { content: string }

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

let cache: Post[] | null = null

function str(v: unknown, fallback = ''): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10)
  return typeof v === 'string' ? v : fallback
}

function loadAll(): Post[] {
  if (cache) return cache
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'))
  const posts = files.map((file): Post => {
    const slug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    const title = str(data.title)
    return {
      slug,
      title,
      seoTitle: str(data.seoTitle, title),
      description: str(data.description),
      date: str(data.date),
      updated: data.updated ? str(data.updated) : undefined,
      category: str(data.category, 'Weight Loss'),
      readTime: str(data.readTime),
      author: str(data.author, 'Nutree Clinic'),
      excerpt: str(data.excerpt, str(data.description)),
      coverImage: str(data.coverImage),
      coverAlt: str(data.coverAlt, title),
      related: Array.isArray(data.related) ? data.related.map(String) : [],
      content,
    }
  })
  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)))
  cache = posts
  return posts
}

/** All posts (with body), newest first. */
export function getAllPosts(): Post[] {
  return loadAll()
}

/** All post metadata (no body), newest first — safe to pass to client components. */
export function getAllPostMeta(): PostMeta[] {
  return loadAll().map(({ content: _content, ...meta }) => meta)
}

export function getPostBySlug(slug: string): Post | undefined {
  return loadAll().find((p) => p.slug === slug)
}

/** Slugs plus dates, newest first — used by the sitemap. */
export function getAllPostSlugs(): { slug: string; date: string; updated?: string }[] {
  return loadAll().map((p) => ({ slug: p.slug, date: p.date, updated: p.updated }))
}

export function getRelatedPosts(slug: string): PostMeta[] {
  const post = getPostBySlug(slug)
  if (!post) return []
  const all = getAllPostMeta()
  return post.related
    .map((s) => all.find((p) => p.slug === s))
    .filter((p): p is PostMeta => p !== undefined)
}
