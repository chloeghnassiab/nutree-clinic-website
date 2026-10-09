import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  FLORIDA_CITIES, FLORIDA_HUB_PATH, getFloridaCity, cityPath, type FloridaCity,
} from '@/lib/florida-cities.config'
import { CTAArea, BenefitsList, TrustStrip, PageLegal, ConsultBand, Section } from '@/components/ui/PageComponents'
import {
  MicrodosingHero, PlanFinePrint, MicrodosingComparison, MicrodosingBenefits,
  HowMicrodosingWorks, MicrodosingAtAGlance, StatewideCare, MICRODOSING_LEGAL,
} from '@/components/microdosing/MicrodosingSections'
import { FaqList } from '@/components/microdosing/FaqList'
import { JsonLd, faqPageSchema, medicalBusinessSchema, breadcrumbSchema, FLORIDA_STATE } from '@/components/microdosing/schema'
import { ImportantSafetyInfo } from '@/components/compliance'

export const dynamicParams = false

export function generateStaticParams() {
  return FLORIDA_CITIES.map(c => ({ city: c.slug }))
}

type Props = { params: Promise<{ city: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const city = getFloridaCity(slug)
  if (!city) return {}
  const path = cityPath(city.slug)
  return {
    title: { absolute: city.title },
    description: city.description,
    alternates: { canonical: path },
    openGraph: {
      title: city.title,
      description: city.description,
      url: path,
      images: [{ url: '/images/microdosing/glp-1-microdosing-og.png', width: 1024, height: 538, alt: 'Nutree Clinic GLP-1 microdosing vial' }],
    },
  }
}

function cityFaqs(city: FloridaCity) {
  const shared = FAQ_ITEMS
    .filter(f => f.active && f.pages.includes('/glp-1microdosing/florida/*'))
    .sort((a, b) => a.order - b.order)
    .map(f => ({ q: f.question, a: f.answer }))
  const place = `${city.h1Name}, FL`
  const available = {
    q: `Is GLP-1 microdosing available in ${place}?`,
    a: `Yes. We're a 100% telehealth practice serving ${city.h1Name} and all of Florida through U.S.-licensed clinicians authorized to treat patients in the state. There is no in-person office visit — everything happens online.`,
  }
  const shipping = {
    q: `How fast can I get my medication shipped to ${city.h1Name}?`,
    a: 'After your consultation, once your clinician approves your plan, many patients receive their medication as early as the day after their consultation, shipped discreetly to your home.',
  }
  // Order mirrors live: availability first, shipping after "How often", then the rest.
  const idx = shared.findIndex(f => f.q.startsWith('How often'))
  const merged = [available, ...shared]
  merged.splice(idx + 2, 0, shipping)
  return [...merged, ...city.extraFaqs]
}

export default async function CityMicrodosingPage({ params }: Props) {
  const { city: slug } = await params
  const city = getFloridaCity(slug)
  if (!city) notFound()

  const path = cityPath(city.slug)
  const place = `${city.h1Name}, FL`
  const faqs = cityFaqs(city)
  const nearby = city.nearby.map(s => getFloridaCity(s)).filter((c): c is FloridaCity => !!c)

  return (
    <>
      <JsonLd data={[
        medicalBusinessSchema({
          path,
          description: `Clinician-guided GLP-1 microdosing for ${place} residents. Low weekly dose semaglutide or tirzepatide to support appetite regulation and metabolic balance, delivered 100% online.`,
          areaServed: {
            '@type': 'City',
            name: city.h1Name,
            containedInPlace: FLORIDA_STATE,
            geo: { '@type': 'GeoCoordinates', latitude: city.geo.lat, longitude: city.geo.lng },
          },
        }),
        faqPageSchema(faqs),
        breadcrumbSchema([
          { name: 'GLP-1 Microdosing', path: '/glp-1microdosing' },
          { name: 'Florida', path: FLORIDA_HUB_PATH },
          { name: city.name, path },
        ]),
      ]} />

      <MicrodosingHero
        eyebrow={`Clinician-guided metabolic support · ${place}`}
        h1={`GLP-1 Microdosing in ${place}`}
        subtitle={`Clinician-guided GLP-1 microdosing for ${city.h1Name} and Florida residents — 100% online telehealth. A licensed provider reviews your intake; a video or phone visit may be required depending on your treatment and Florida rules.`}
      />

      <CTAArea />
      <PlanFinePrint />

      <BenefitsList color="var(--glp)" items={[
        'Filled by state-licensed 503A pharmacies',
        'No membership, no hidden fees',
        `Consultation and shipping included — free delivery to ${city.h1Name}`,
        'No commitment — fixed program, no auto-renewal',
        'Telehealth only — no office visits, no waiting rooms',
      ]} />
      <TrustStrip />

      <MicrodosingComparison />

      <MicrodosingBenefits heading={`Why some ${city.h1Name} patients choose a lower-dose GLP-1 approach`} />

      <HowMicrodosingWorks />

      {/* ── LOCAL SECTION (unique per city, from live) ── */}
      <Section bg="var(--base)">
        <div style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--glp-dark)', marginBottom: '0.5rem' }}>
          {city.localEyebrow}
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '0.75rem', fontWeight: 400 }}>
          A more clinical way to do GLP-1 in {city.sectionCity}
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 380px', fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '0.875rem' }}>{city.localIntro}</p>
            <p style={{ marginBottom: '0.875rem' }}>
              {city.coverageLead} {city.areas.join(', ')}, {city.areasTail}. Your plan is reviewed by a Florida-licensed clinician, personalized to your goals, and adjusted over time — not handled like a one-time injection or a generic weight loss package.
            </p>
            <p style={{ marginBottom: '0.875rem' }}>{city.localNote}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }} aria-label={`Areas served near ${city.name}`}>
              {city.areas.map(a => (
                <span key={a} style={{ padding: '4px 12px', borderRadius: 999, background: 'var(--white)', border: '0.5px solid var(--border)', fontSize: '0.8125rem', color: 'var(--ink-2)' }}>{a}</span>
              ))}
            </div>
          </div>
          <div style={{ flex: '1 1 280px', background: 'var(--white)', border: '0.5px solid var(--border)', borderRadius: 16, padding: '1.25rem' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-3)' }}>Local care model</div>
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', margin: '4px 0 0.75rem', fontFamily: 'var(--font-sans)' }}>{city.careModelLabel}</h3>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Low weekly-dose GLP-1 options, including semaglutide or tirzepatide if clinically appropriate.',
                'Florida-licensed clinician review with guidance before and after treatment begins.',
                'Transparent pricing with no insurance requirement and no membership commitment.',
                'Free, discreet delivery to your door when prescribed.',
              ].map((t, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.55 }}>
                  <span style={{ fontWeight: 700, color: 'var(--glp-dark)', flexShrink: 0 }}>0{i + 1}</span>{t}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <MicrodosingAtAGlance />

      <StatewideCare />

      {/* ── NEARBY + HUB ── */}
      <Section bg="var(--white)">
        <div style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-3)', marginBottom: '0.5rem' }}>Nearby</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.375rem, 3vw, 1.875rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1rem', fontWeight: 400 }}>
          GLP-1 microdosing near {city.name}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem', marginBottom: '1rem' }}>
          {nearby.map(c => (
            <Link key={c.slug} href={cityPath(c.slug)} className="also-item" style={{ padding: '0.75rem 1rem' }}>
              <span>
                <span style={{ display: 'block', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)' }}>{c.directoryLabel}</span>
                <span style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--ink-3)' }}>{c.county} County</span>
              </span>
              <span aria-hidden="true" style={{ color: 'var(--glp-dark)', fontWeight: 700 }}>→</span>
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.9375rem', fontWeight: 700 }}>
          <Link href={FLORIDA_HUB_PATH} style={{ color: 'var(--glp-dark)' }}>All Florida cities →</Link>
          <Link href="/glp-1microdosing" style={{ color: 'var(--glp-dark)' }}>About GLP-1 microdosing →</Link>
          <Link href="/glp-1" style={{ color: 'var(--ink-2)' }}>What are GLP-1s? →</Link>
        </div>
      </Section>

      <FaqList items={faqs} />

      <ImportantSafetyInfo drugs={['glp1']} />

      <PageLegal text={MICRODOSING_LEGAL} />

      <ConsultBand />
    </>
  )
}
