import type { Metadata } from 'next'
import Image from 'next/image'
import { PRICES } from '@/lib/prices.config'
import {
  PromoBanner, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand, HowItWorks,
  ScienceGrid, Testimonials, AlsoFromNutree, FAQSection,
  PageLegal, ConsultBand, Section, SectionHeader, InStockBadge,
} from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'NAD+ Therapy — Injectable, Nasal Spray & Patches',
  description: 'Physician-prescribed NAD+ therapy — injectable, nasal spray, and patches with GHK-Cu. Cellular energy, DNA repair, and healthy aging. Florida telehealth.',
}

const P = PRICES

export default function NADPage() {
  return (
    <>
      {/* ── HERO SPLIT ─────────────────────────────────────────────── */}
      <div className="hero-split">
        <div className="hero-photo gradient-nad">
          <div style={{ position: 'absolute', width: 110, height: 110, borderRadius: '50%', background: 'rgba(255,255,255,0.28)', top: -22, left: -22 }} />
          <div style={{ position: 'absolute', width: 65, height: 65, borderRadius: '50%', background: 'rgba(30,102,80,0.14)', bottom: -8, right: -8 }} />
          <div style={{ position: 'absolute', width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', bottom: 25, left: 14 }} />
          <InStockBadge />
          <Image
            src="https://umsousercontent.com/lib_lJwKNLihmSPYJEfY/xuvy0l9thl40cn42.png"
            alt="NAD+ therapy vials"
            width={130} height={170}
            style={{ width: '72%', maxWidth: 130, height: 'auto', position: 'relative', zIndex: 2, objectFit: 'contain' }}
            priority
          />
        </div>

        <div className="hero-right">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 8 }}>
            NAD+ Therapy
          </h1>
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            Cellular energy, DNA repair, and healthy aging — from within
          </p>
          <PromoBanner />

          {/* Injectable */}
          <div style={{ marginBottom: '0.625rem' }}>
            <ProductBlockHeader>Injectable · Highest bioavailability</ProductBlockHeader>
            <PlanRow name="6-month plan" sub="Medication · consultation · shipping" price={P.nadInjectable.sixMonth.label} afterPrice={P.nadInjectable.sixMonth.afterLabel} best color="var(--nad-dark)" />
            <PlanRow name="Monthly plan" sub="Cancel anytime" price={P.nadInjectable.monthly.label} color="var(--nad-dark)" />
          </div>

          {/* Nasal Spray */}
          <div style={{ marginBottom: '0.625rem' }}>
            <ProductBlockHeader>Nasal Spray · Needle-free</ProductBlockHeader>
            <PlanRow name="6-month plan" sub="Medication · consultation · shipping" price={P.nadNasalSpray.sixMonth.label} afterPrice={P.nadNasalSpray.sixMonth.afterLabel} best color="var(--nad-dark)" />
            <PlanRow name="Monthly plan" price={P.nadNasalSpray.monthly.label} color="var(--nad-dark)" />
          </div>

          {/* Patches */}
          <div>
            <ProductBlockHeader>Patches + GHK-Cu</ProductBlockHeader>
            <PlanRow name="6-month plan" price={P.nadPatches.sixMonth.label} afterPrice={P.nadPatches.sixMonth.afterLabel} best color="var(--nad-dark)" />
            <PlanRow name="Monthly plan" price={P.nadPatches.monthly.label} color="var(--nad-dark)" />
          </div>
        </div>
      </div>

      <CTAArea />

      <BenefitsList color="var(--nad)" items={[
        'Three delivery forms — your clinician selects the most appropriate',
        'Your price remains consistent at every dose level',
        'Provider consultation included — ',
        'Free expedited shipping on every order',
        '503A licensed pharmacy on every prescription',
      ]} />
      <TrustStrip />

      <FeatureBand
        gradient="linear-gradient(145deg, var(--nad-mid) 0%, var(--nad) 55%, #D8F4EC 100%)"
        eyebrow="Three delivery forms"
        title="Three forms. One physician-guided plan."
        body="Your provider selects the delivery form best suited to your goals — injectable, nasal spray, or patches with GHK-Cu peptide. All plans include medication, consultation, and free shipping."
        cards={[
          { icon: 'Syringe', title: 'Injectable', desc: 'Highest bioavailability — direct tissue delivery' },
          { icon: 'SprayBottle', title: 'Nasal Spray', desc: 'Rapid CNS absorption — no needles' },
          { icon: '🩹', title: 'Patches + GHK-Cu', desc: 'Slow-release plus cellular repair peptide' },
        ]}
      />

      {/* NAD+ DECLINE CHART */}
      <HowItWorks
        gradient="linear-gradient(135deg, var(--nad-mid), var(--nad))"
        steps={[
          { title: 'Complete a brief health questionnaire', desc: 'Tell us about your energy levels, health history, and goals — so your clinician arrives prepared.' },
          { title: 'Consult with a licensed clinician', desc: 'Your provider recommends the most appropriate delivery form and dosing schedule, and prescribes if clinically appropriate.' },
          { title: 'Receive your medication at home', desc: 'Prepared by our licensed 503A pharmacy partner and shipped free, directly to your door.' },
          { title: 'Ongoing monitoring and adjustments', desc: 'Your provider tracks your progress and stays available throughout. Check-ins and dose adjustments are included.' },
        ]}
      />

      {/* NAD+ DECLINE VISUALISATION */}
      <Section bg="var(--base)">
        <SectionHeader eyebrow="The science" title="NAD+ declines significantly with age." />
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '0.875rem', border: '0.5px solid var(--border)', marginBottom: '0.875rem' }}>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Relative cellular NAD+ levels by decade</div>
          <div style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.75rem' }}>Based on published research (Rajman et al., Cell Metabolism 2018)</div>
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
          { icon: 'Lightning', title: 'Cellular energy production', desc: 'NAD+ drives the mitochondrial processes that produce ATP — your body\'s primary energy currency. Declining levels contribute directly to fatigue.' },
          { icon: 'Dna', title: 'DNA repair and longevity', desc: 'NAD+ activates sirtuin proteins and PARP enzymes involved in DNA repair — key mechanisms in healthy cellular aging.' },
          { icon: 'Brain', title: 'Brain clarity and focus', desc: 'The brain has the highest energy demands of any organ. NAD+ supports neuronal function and the enzymatic activity associated with cognitive efficiency.' },
        ]}
      />

      <Testimonials
        tagColor="var(--nad)" tagDarkColor="var(--nad-dark)"
        items={[
          { quote: 'Within three weeks I noticed something shift — not dramatic, just a steadier energy. The brain fog I\'d been living with simply lifted.', author: 'James L., 47 · Nutree Clinic patient', tag: 'NAD+ Injectable' },
          { quote: 'I chose the nasal spray because I was hesitant about injections. My clinician explained the differences clearly and let me decide. The support throughout has been exceptional.', author: 'Patricia M., 52 · Nutree Clinic patient', tag: 'NAD+ Nasal Spray' },
        ]}
      />

      <AlsoFromNutree
        eyebrow="Complete your protocol"
        title="NAD+ pairs well with these treatments."
        items={[
          { name: 'Sermorelin',  sub: 'Growth hormone · body strength & recovery',   href: '/sermorelin', arrowColor: 'var(--ser-dark)' },
          { name: 'B6 / B12',   sub: 'Energy & neurological support',                href: '/b12',        arrowColor: 'var(--b12-dark)' },
          { name: 'Oxytocin',   sub: 'Stress relief · emotional well-being',         href: '/oxytocin',   arrowColor: 'var(--oxy-dark)' },
        ]}
      />

      <FAQSection
        iconBg="var(--nad)" iconColor="var(--nad-dark)"
        items={[
          { q: 'Which delivery form is most effective?', a: 'Injectables provide the highest bioavailability. Nasal spray offers rapid CNS absorption without needles. Patches with GHK-Cu provide continuous slow-release delivery alongside regenerative peptide benefits. Your clinician recommends the most appropriate form based on your goals and health profile.' },
          { q: 'What is GHK-Cu?', a: 'GHK-Cu (copper tripeptide-1) is a naturally occurring peptide that declines with age, studied for its role in collagen synthesis, tissue repair, and anti-inflammatory activity. Combined with transdermal NAD+, it offers complementary cellular support.' },
          { q: 'How long before I notice results?', a: 'Most patients notice initial changes in energy and mental clarity within 2–4 weeks. Deeper cellular and anti-aging benefits build over 8–12 weeks of consistent use.' },
          { q: 'Is insurance required?', a: 'No. All Nutree NAD+ plans are self-pay and FSA/HSA eligible.' },
        ]}
      />

      <PageLegal text="Compounded NAD+ preparations are prepared by state-licensed 503A compounding pharmacies and are not FDA-approved. GHK-Cu is not FDA-approved. Prescriptions issued at provider discretion only. Individual results vary. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand
        heading="Want a complete longevity protocol?"
        sub="30 min · licensed clinician"
      />
    </>
  )
}
