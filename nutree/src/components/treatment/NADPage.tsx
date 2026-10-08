// ─── NAD+ PAGE ───────────────────────────────────────────────────────────────
// Rendered by both /nad+ (canonical — the live Umso URL) and /nad.
import type { Metadata } from 'next'
import Image from 'next/image'
import { PRICES } from '@/lib/prices.config'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  PromoList, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand,
  ScienceGrid, AlsoFromNutree,
  PageLegal, ConsultBand, Section, SectionHeader, InStockBadge,
} from '@/components/ui/PageComponents'
import { ExplainerSection, BenefitGrid, NumberedSteps, SeoFAQ, faqsForPages } from '@/components/treatment/SeoBlocks'
import { ImportantSafetyInfo, CONSULT_NEUTRAL } from '@/components/compliance'

export const NAD_CANONICAL = '/nad+'
const NAD_TITLE = 'NAD+ Therapy Online | Boost Energy & Longevity | Nutree Clinic'
const NAD_DESCRIPTION = 'Clinician-guided compounded NAD+ therapy (off-label) for patients with energy, focus, and healthy-aging goals. Prescribed only if appropriate, with ongoing medical support.'

export const nadMetadata: Metadata = {
  title: { absolute: NAD_TITLE },
  description: NAD_DESCRIPTION,
  alternates: { canonical: NAD_CANONICAL },
  openGraph: {
    title: NAD_TITLE,
    description: NAD_DESCRIPTION,
    url: NAD_CANONICAL,
    images: [{ url: '/images/nad-plus-injectable-therapy-nutreeclinic.png', alt: 'NAD+ injectable therapy vials from Nutree Clinic' }],
  },
}

const P = PRICES

export function NADPage() {
  // FAQ items tagged for either URL of this page.
  const faqs = faqsForPages(FAQ_ITEMS, ['/nad', '/nad+'])

  return (
    <>
      {/* ── HERO SPLIT ─────────────────────────────────────────────── */}
      <div className="hero-split">
        <div className="hero-photo gradient-nad">
          <InStockBadge />
          <Image
            src="/images/nad-plus-injectable-therapy-nutreeclinic.png"
            alt="NAD+ injectable therapy vials from Nutree Clinic"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="hero-right">
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--nad-dark)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>
            Clinician-guided cellular wellness
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8 }}>
            NAD+ Therapy
          </h1>
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            Personalized NAD+ care, guided by licensed clinicians — for patients with energy, mental clarity, and healthy-aging goals (off-label use)
          </p>
          <PromoList />

          {/* Injectable */}
          <div style={{ marginBottom: '0.625rem' }}>
            <ProductBlockHeader>Injectable · Highest bioavailability</ProductBlockHeader>
            <PlanRow name="6-month plan" sub={`${P.nadInjectable.sixMonth.totalLabel} · medication · consultation · shipping`} price={P.nadInjectable.sixMonth.monthlyLabel} afterPrice={P.nadInjectable.sixMonth.savingsLabel} best color="var(--nad-dark)" />
            <PlanRow name="Monthly plan" sub="Cancel anytime" price={P.nadInjectable.monthly.monthlyLabel} afterPrice={P.nadInjectable.monthly.perWeekLabel} color="var(--nad-dark)" />
          </div>

          {/* Nasal Spray */}
          <div style={{ marginBottom: '0.625rem' }}>
            <ProductBlockHeader>Nasal Spray · Needle-free</ProductBlockHeader>
            <PlanRow name="6-month plan" sub={`${P.nadNasalSpray.sixMonth.totalLabel} · medication · consultation · shipping`} price={P.nadNasalSpray.sixMonth.monthlyLabel} afterPrice={P.nadNasalSpray.sixMonth.savingsLabel} best color="var(--nad-dark)" />
            <PlanRow name="Monthly plan" price={P.nadNasalSpray.monthly.monthlyLabel} afterPrice={P.nadNasalSpray.monthly.perWeekLabel} color="var(--nad-dark)" />
          </div>

          {/* Patches */}
          <div>
            <ProductBlockHeader>Patches + GHK-Cu</ProductBlockHeader>
            <PlanRow name="6-month plan" sub={P.nadPatches.sixMonth.totalLabel} price={P.nadPatches.sixMonth.monthlyLabel} afterPrice={P.nadPatches.sixMonth.savingsLabel} best color="var(--nad-dark)" />
            <PlanRow name="Monthly plan" price={P.nadPatches.monthly.monthlyLabel} afterPrice={P.nadPatches.monthly.perWeekLabel} color="var(--nad-dark)" />
          </div>
        </div>
      </div>

      <CTAArea />

      <BenefitsList color="var(--nad)" items={[
        'Three delivery forms — your clinician selects the most appropriate',
        'Clear plan pricing before you start — no hidden fees',
        'Provider consultation and dose adjustments included',
        'Free expedited shipping on every order',
        '503A licensed pharmacy on every prescription',
        '7/7 direct messaging with your assigned clinician — no waiting rooms',
      ]} />
      <p style={{ padding: '0 1.25rem 1rem', background: 'var(--white)', fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
        Includes a personalized consultation, treatment, and home delivery. No membership. No hidden fees. No commitment.
        Subject to clinical approval — if not approved, your payment will be refunded. Treatment format is selected based on
        your preferences and the clinician&apos;s medical assessment.
      </p>
      <TrustStrip />

      {/* ── HOW DO NAD+ INJECTIONS WORK? (restored from live) ─────── */}
      <ExplainerSection
        eyebrow="Longevity & wellness support"
        title="How do NAD+ injections work?"
        body={[
          'NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every cell of the body. Nutree Clinic prescribes personalized NAD+ protocols off-label for patients whose goals include energy, mental clarity, recovery, and healthy aging, with clinician-guided dosing. Human research on these uses is still limited.',
          'Prefer to avoid needles? A needle-free NAD+ nasal spray option is also available — your clinician will help you choose the format that fits your goals and medical assessment.',
        ]}
        image="/images/nad-plus-injections-energy-wellness-nutreeclinic.jpg"
        imageAlt="Smiling woman with healthy, radiant skin — NAD+ therapy for energy and healthy aging with Nutree Clinic"
        listTitle="Who is this for?"
        list={[
          'Support for energy and reduced fatigue',
          'Mental clarity, focus, and cognitive support',
          'Recovery and healthy aging support',
          'Clinician-guided, personalized care',
        ]}
        note="Every treatment plan is prescribed only if appropriate and is monitored by a licensed provider, with personalized dosing and follow-up."
        accent="var(--nad)"
      />

      <FeatureBand
        gradient="linear-gradient(145deg, var(--nad-mid) 0%, var(--nad) 55%, #D8F4EC 100%)"
        eyebrow="Three delivery forms"
        title="Three forms. One clinician-guided plan."
        body="Your provider selects the delivery form best suited to your goals — injectable, nasal spray, or patches with GHK-Cu peptide. All plans include medication, consultation, and free shipping."
        cards={[
          { icon: 'Syringe', title: 'Injectable', desc: 'Delivered under the skin, bypassing digestion' },
          { icon: 'SprayBottle', title: 'Nasal Spray', desc: 'Absorbed through the nasal lining — no needles' },
          { icon: 'Bandaids', title: 'Patches + GHK-Cu', desc: 'Slow transdermal delivery plus a copper peptide (not FDA-approved)' },
        ]}
      />

      {/* ── DISCOVER HOW NAD+ CAN SUPPORT (restored from live) ────── */}
      <BenefitGrid
        eyebrow="Personalized care, built around you"
        title="Discover how NAD+ can support energy & vitality"
        intro="NAD+ therapy is often chosen by patients seeking a more personalized approach to energy, mental clarity, recovery, and healthy aging support."
        items={[
          { title: 'Cellular energy support', desc: 'NAD+ plays a key role in how your cells produce energy, which is why some patients with low-energy or fatigue concerns explore it. Evidence that NAD+ therapy reduces fatigue is limited.' },
          { title: 'Mental clarity and focus', desc: 'Many patients explore NAD+ as part of a wellness plan aimed at supporting clearer thinking, sharper focus, and better day-to-day cognitive function.' },
          { title: 'Recovery and resilience', desc: 'NAD+ is often used in protocols designed to support recovery from physical and mental stress while promoting a greater sense of overall resilience.' },
          { title: 'Healthy aging support', desc: 'Because NAD+ levels naturally decline with age, some patients choose this therapy as part of a clinician-guided plan focused on long-term wellness.' },
        ]}
        disclaimer="This information is educational only and is not a promise of results. Eligibility, response, side effects, and outcomes vary. Your clinician will determine whether treatment is appropriate for you based on your medical history and goals."
        accent="var(--nad)"
      />

      {/* NAD+ DECLINE VISUALISATION */}
      <Section bg="var(--base)">
        <SectionHeader eyebrow="The science" title="NAD+ levels tend to decline with age." />
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '0.875rem', border: '0.5px solid var(--border)', marginBottom: '0.875rem' }}>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Relative cellular NAD+ levels by decade</div>
          <div style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.75rem' }}>Illustrative trend only. Studies report age-related NAD+ decline in some tissues (reviewed in Rajman et al., Cell Metabolism 2018); exact levels vary by tissue and person.</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[
              { age: 'Age 20', pct: '100%', w: '100%' },
              { age: 'Age 30', pct: '~82%', w: '82%' },
              { age: 'Age 40', pct: '~64%', w: '64%' },
              { age: 'Age 50', pct: '~50%', w: '50%' },
              { age: 'Age 60+', pct: '~38%', w: '38%' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: 'var(--ink)', width: 44, flexShrink: 0 }}>{r.age}</div>
                <div style={{ flex: 1, height: 9, borderRadius: 5, background: 'var(--border)' }}>
                  <div style={{ width: r.w, height: '100%', borderRadius: 5, background: 'linear-gradient(90deg, var(--nad-mid), var(--nad-dark))' }} />
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--nad-dark)', width: 34, textAlign: 'right', flexShrink: 0 }}>{r.pct}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ScienceGrid
        eyebrow="Why NAD+ levels matter"
        title="What NAD+ does in the body."
        iconGradient="linear-gradient(135deg, var(--nad-mid), var(--nad))"
        items={[
          { icon: 'Lightning', title: 'Cellular energy production', desc: 'NAD+ is essential to the mitochondrial processes that produce ATP — your body\'s primary energy currency.' },
          { icon: 'Dna', title: 'DNA repair and longevity', desc: 'NAD+ is used by sirtuin proteins and PARP enzymes involved in DNA repair — mechanisms studied in cellular aging, mostly in laboratory and animal research.' },
          { icon: 'Brain', title: 'Brain clarity and focus', desc: 'The brain has the highest energy demands of any organ. NAD+ is involved in neuronal energy metabolism; whether NAD+ therapy improves focus or cognition in people has not been established.' },
        ]}
      />

      {/* ── NEXT STEPS (restored from live) ──────────────────────── */}
      <NumberedSteps
        eyebrow="Simple, guided care"
        title="Next steps"
        accent="linear-gradient(135deg, var(--nad-mid), var(--nad))"
        steps={[
          { title: 'Digital Intake', desc: 'Tell us about your health history, lifestyle, and goals through our secure online portal.' },
          { title: 'Provider Review', desc: `${CONSULT_NEUTRAL} Your clinician determines whether NAD+ therapy is appropriate for you.` },
          { title: 'Doorstep Delivery', desc: 'If appropriate, your personalized medication kit is shipped directly to your door with everything you need to begin.' },
          { title: 'Ongoing Support', desc: 'Your care doesn’t stop after delivery. Your clinician remains available to monitor your progress and adjust your treatment when needed.' },
        ]}
      />

      <AlsoFromNutree
        eyebrow="Complete your protocol"
        title="NAD+ pairs well with these treatments."
        items={[
          { name: 'Sermorelin',  sub: 'Growth hormone · body strength & recovery',   href: '/sermorelin', arrowColor: 'var(--ser-dark)', img: '/images/sermorelin-growth-hormone-therapy-nutreeclinic-nav.png' },
          { name: 'B6 / B12',   sub: 'Energy & neurological support',                href: '/b12',        arrowColor: 'var(--b12-dark)' },
          { name: 'Oxytocin',   sub: 'Stress relief · emotional well-being',         href: '/oxytocin',   arrowColor: 'var(--oxy-dark)', img: '/images/oxytocin-nasal-spray-nutreeclinic-nav.png' },
        ]}
      />

      <SeoFAQ items={faqs} accent="var(--nad)" accentDark="var(--nad-dark)" />

      <ImportantSafetyInfo drugs={['nad']} />

      <PageLegal text="Compounded NAD+ preparations are prepared by state-licensed 503A compounding pharmacies. They are not FDA-approved, the FDA does not review compounded drugs for safety, effectiveness, or quality, and NAD+ is not approved to diagnose, treat, cure, or prevent any disease. GHK-Cu is not FDA-approved. NAD+ is prescribed off-label, and human evidence for energy, cognitive, and healthy-aging benefits is limited. Prescriptions are issued only if a licensed provider determines treatment is appropriate. Individual results vary. Care is available to patients located in Florida. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand />
    </>
  )
}
