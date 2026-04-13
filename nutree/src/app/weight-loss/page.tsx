import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PRICES } from '@/lib/prices.config'
import {
  PromoBanner, PlanRow, ProductBlockHeader, CTAArea,
  BenefitsList, TrustStrip, FeatureBand, HowItWorks,
  ScienceGrid, Testimonials, AlsoFromNutree, FAQSection,
  PageLegal, ConsultBand, Section, SectionHeader, InStockBadge,
} from '@/components/ui/PageComponents'

export const metadata: Metadata = {
  title: 'GLP-1 Weight Loss — Compounded Semaglutide & Tirzepatide',
  description:
    'Physician-guided compounded semaglutide and tirzepatide. Same price at every dose. Free shipping. FSA/HSA eligible. Florida telehealth.',
  openGraph: {
    title: 'GLP-1 Weight Loss | Nutree Clinic',
    description: 'Personalized GLP-1 treatments — compounded semaglutide and tirzepatide, physician-guided, delivered to your door.',
  },
}

const P = PRICES

export default function WeightLossPage() {
  return (
    <>
      {/* ── HERO SPLIT ─────────────────────────────────────────────── */}
      <div className="hero-split">
        {/* LEFT — product photo on pastel gradient */}
        <div className="hero-photo gradient-glp">
          {/* decorative blobs */}
          <div style={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.28)', top: -25, left: -25 }} />
          <div style={{ position: 'absolute', width: 70, height: 70, borderRadius: '50%', background: 'rgba(26,107,133,0.14)', bottom: -10, right: -10 }} />
          <div style={{ position: 'absolute', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', bottom: 28, left: 16 }} />
          <InStockBadge />
          <Image
            src="https://umsousercontent.com/lib_lJwKNLihmSPYJEfY/zl96r149zkpcxvwv.png"
            alt="GLP-1 weight loss medications — compounded semaglutide and tirzepatide"
            width={140} height={180}
            style={{ width: '72%', maxWidth: 140, height: 'auto', position: 'relative', zIndex: 2, objectFit: 'contain' }}
            priority
          />
        </div>

        {/* RIGHT — pricing */}
        <div className="hero-right">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', color: 'var(--ink)', lineHeight: 1.2, marginBottom: 3, letterSpacing: '-0.01em' }}>
            Personalized GLP-1 Treatments
          </h1>
          <p style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.625rem' }}>
            A personalized weight loss plan built around you
          </p>

          <PromoBanner />

          {/* SEMAGLUTIDE */}
          <div style={{ marginBottom: '0.75rem' }}>
            <ProductBlockHeader>Compounded Semaglutide</ProductBlockHeader>
            <PlanRow
              name="3-month plan" sub="Medication · consultation · shipping"
              price={P.semaglutide.threeMonth.label}
              afterPrice={P.semaglutide.threeMonth.afterLabel}
              best color="var(--glp-dark)"
            />
            <PlanRow
              name="Monthly plan" sub="Cancel anytime"
              price={P.semaglutide.monthly.label}
              color="var(--glp-dark)"
            />
          </div>

          {/* TIRZEPATIDE */}
          <div style={{ marginBottom: '0.75rem' }}>
            <ProductBlockHeader>Compounded Tirzepatide</ProductBlockHeader>
            <PlanRow
              name="3-month plan" sub="Medication · consultation · shipping"
              price={P.tirzepatide.threeMonth.label}
              afterPrice={P.tirzepatide.threeMonth.afterLabel}
              best color="var(--glp-dark)"
            />
            <PlanRow
              name="Monthly plan"
              price={P.tirzepatide.monthly.label}
              color="var(--glp-dark)"
            />
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CTAArea />

      {/* ── BENEFITS ──────────────────────────────────────────────── */}
      <BenefitsList color="var(--glp)" items={[
        'Your price stays the same at every dose level — no surprises',
        'Free expedited shipping on every order',
        'Provider consultation included — ',
        'Personalised dosing adjusted to your response and goals',
        '503A licensed pharmacy on every prescription',
      ]} />
      <TrustStrip />

      {/* ── FEATURE BAND ──────────────────────────────────────────── */}
      <FeatureBand
        gradient="linear-gradient(145deg, var(--glp-mid) 0%, var(--glp) 55%, #DDF4FF 100%)"
        eyebrow="What every plan includes"
        title="Your price. Your dose. Your plan."
        body="Every Nutree GLP-1 plan is built around you — medication, consultation, and shipping all included. Your price remains consistent throughout your treatment, at every dose level."
        cards={[
          { icon: '💊', title: 'Medication included', desc: 'Compounded by a licensed 503A pharmacy to your prescription' },
          { icon: '🩺', title: 'Provider care', desc: 'Consultation, follow-ups, and dose adjustments throughout' },
          { icon: '📦', title: 'Free shipping', desc: 'Expedited, discreet delivery on every order' },
        ]}
      />

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <HowItWorks
        gradient="linear-gradient(135deg, var(--glp-mid), var(--glp))"
        steps={[
          { title: 'Complete a brief health questionnaire', desc: 'Takes 3 minutes. We ask about your health history, current medications, and goals — so your clinician arrives prepared.' },
          { title: 'Consult with a licensed Nutree clinician', desc: 'Your provider reviews your intake and meets with you —  — to determine the most appropriate plan for your health profile.' },
          { title: 'Receive your medication at home', desc: 'If prescribed, your medication is prepared by our licensed 503A pharmacy partner and shipped free, directly to your door.' },
          { title: 'Ongoing care and check-ins', desc: 'Your provider monitors your progress, adjusts your dose as needed, and stays available between visits for the full duration of your plan.' },
        ]}
      />

      {/* ── CLINICAL RESULTS ──────────────────────────────────────── */}
      <Section bg="var(--base)">
        <SectionHeader eyebrow="Clinical outcomes" title="What the research shows." />
        {/* Stat cards */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.875rem' }}>
          {[
            { val: '~15%', unit: 'body weight', label: 'Average loss in the 68-week semaglutide clinical trial*' },
            { val: '~21%', unit: 'body weight', label: 'Average loss in the 72-week tirzepatide clinical trial*' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, background: 'linear-gradient(150deg, var(--glp-mid), var(--glp))',
              borderRadius: 'var(--radius-md)', padding: '0.875rem', textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', fontWeight: 700, color: 'var(--glp-dark)', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: "0.875rem", color: 'var(--glp-dark)', marginTop: 2 }}>{s.unit}</div>
              <div style={{ fontSize: "0.8125rem", color: 'var(--ink-2)', marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
        {/* Rainbow gradient bar chart */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '0.875rem', border: '0.5px solid var(--border)' }}>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Average weight loss progression</div>
          <div style={{ fontSize: "0.875rem", color: 'var(--ink-3)', marginBottom: '0.875rem' }}>GLP-1 therapy combined with diet and exercise · months 1–6</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.3rem', height: 72 }}>
            {[
              { val: '~3%', h: '20%', bg: 'linear-gradient(180deg,var(--b12),#F0D040)' },
              { val: '~6%', h: '36%', bg: 'linear-gradient(180deg,var(--ser),var(--b12))' },
              { val: '~9%', h: '52%', bg: 'linear-gradient(180deg,var(--con),var(--ser))' },
              { val: '~12%',h: '68%', bg: 'linear-gradient(180deg,var(--oxy),var(--con))' },
              { val: '~15%',h: '84%', bg: 'linear-gradient(180deg,var(--nad),var(--oxy))' },
              { val: '~18%',h: '100%',bg: 'linear-gradient(180deg,var(--glp-mid),var(--nad))' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flex: 1 }}>
                <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: 'var(--ink-2)' }}>{b.val}</div>
                <div style={{ borderRadius: '4px 4px 0 0', width: '100%', height: b.h, background: b.bg }} />
                <div style={{ fontSize: '0.4375rem', color: 'var(--ink-3)' }}>Mo {i + 1}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '0.4375rem', color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.5 }}>
            *Data from clinical trials of FDA-approved reference medications. Compounded preparations are not those FDA-approved products. Individual results vary.
          </div>
        </div>
      </Section>

      {/* ── SEMA VS TIRZ COMPARISON ──────────────────────────────── */}
      <Section bg="var(--white)">
        <SectionHeader
          eyebrow="Understanding your options"
          title="Compounded Semaglutide vs. Compounded Tirzepatide"
          body="Your clinician will recommend the most appropriate option based on your health profile and clinical history."
        />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: "0.9375rem" }}>
            <thead>
              <tr>
                <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink)', borderBottom: '2px solid var(--border)', width: '36%' }} />
                <th style={{ padding: '8px 6px', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>
                  <span style={{ background: 'var(--glp)', color: 'var(--glp-dark)', padding: '3px 7px', borderRadius: 5, fontSize: "0.875rem", fontWeight: 700, display: 'inline-block' }}>
                    Compounded<br />Semaglutide
                  </span>
                </th>
                <th style={{ padding: '8px 6px', textAlign: 'center', borderBottom: '2px solid var(--border)' }}>
                  <span style={{ background: 'var(--ser)', color: 'var(--ser-dark)', padding: '3px 7px', borderRadius: 5, fontSize: "0.875rem", fontWeight: 700, display: 'inline-block' }}>
                    Compounded<br />Tirzepatide
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Mechanism',      'GLP-1 receptor agonist',        'GLP-1 + GIP dual agonist'],
                ['Avg weight loss*','~15% body weight',             '~21% body weight ✓'],
                ['Administration', 'Once-weekly injection',         'Once-weekly injection'],
                ['Starting price', `${P.semaglutide.threeMonth.label} ✓`, P.tirzepatide.threeMonth.label],
                ['Well suited for','First GLP-1 · extensively studied','Stronger metabolic response needed'],
              ].map(([label, a, b], i) => (
                <tr key={i} style={{ background: i % 2 === 1 ? 'rgba(184,228,240,0.12)' : 'transparent' }}>
                  <td style={{ padding: '7px 6px', fontWeight: 700, color: 'var(--ink)', borderBottom: '0.5px solid var(--border)' }}>{label}</td>
                  <td style={{ padding: '7px 6px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)' }}>{a}</td>
                  <td style={{ padding: '7px 6px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)' }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.4375rem', color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.5 }}>
          *Clinical trial data for FDA-approved reference medications (Wegovy®, Zepbound®). Compounded preparations are not those products. Your clinician determines suitability based on your individual health profile.
        </p>
      </Section>

      {/* ── SCIENCE ───────────────────────────────────────────────── */}
      <ScienceGrid
        eyebrow="How GLP-1 therapy works"
        title="The science behind the results."
        iconGradient="linear-gradient(135deg, var(--glp-mid), var(--glp))"
        items={[
          { icon: '🧠', title: 'Appetite regulation at the brain level', desc: 'GLP-1 agonists act on hypothalamic receptors to reduce hunger signals — making it physiologically easier to maintain a healthy intake.' },
          { icon: '⏱', title: 'Extended feeling of fullness', desc: 'Gastric emptying slows, so food moves more gradually — extending satiety after meals.' },
          { icon: '🩸', title: 'Metabolic and blood sugar support', desc: 'GLP-1 medications support insulin secretion and suppress glucagon, improving metabolic markers beyond weight alone.' },
          { icon: '💪', title: 'Weight loss that preserves lean tissue', desc: 'Combined with adequate protein and movement, GLP-1 therapy supports fat loss while helping to maintain lean muscle.' },
        ]}
      />

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <Testimonials
        tagColor="var(--glp)" tagDarkColor="var(--glp-dark)"
        items={[
          { quote: 'After 9 weeks on a microdosed GLP-1, I lost 9 pounds. I already feel lighter, confident, in control. With a team that supports me!', author: 'Courtney, 32 · Nutree Clinic patient', tag: 'GLP-1 Microdosing' },
          { quote: 'The consultation was thorough and the provider took time to understand my full situation. My plan was adjusted when I needed it. That level of care made all the difference.', author: 'Maria R. · Nutree Clinic patient', tag: 'Compounded Semaglutide' },
        ]}
      />

      {/* ── CAROUSEL ──────────────────────────────────────────────── */}
      <Section bg="var(--white)">
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>Medication made accessible</div>
          <div style={{ fontSize: "0.9375rem", color: 'var(--ink-3)' }}>All options, without the need for insurance</div>
        </div>
        <div className="carousel-track">
          {[
            { name: 'Compounded Semaglutide', price: P.semaglutide.threeMonth.label, bg: 'linear-gradient(150deg,var(--glp-mid),var(--glp))', color: 'var(--glp-dark)', href: '/weight-loss', active: true },
            { name: 'Compounded Tirzepatide', price: P.tirzepatide.threeMonth.label, bg: 'linear-gradient(150deg,var(--ser-mid),var(--ser))', color: 'var(--ser-dark)', href: '/weight-loss' },
            { name: 'GLP-1 Microdosing',       price: P.microdosingSema.perWeek.label, bg: 'linear-gradient(150deg,var(--nad-mid),var(--nad))', color: 'var(--nad-dark)', href: '/glp-1' },
            { name: 'Wegovy®',                  price: P.wegovy.monthly.label,          bg: 'linear-gradient(150deg,#D0E4F4,#B8CCE8)', color: '#3A5A8A', href: '/weight-loss' },
            { name: 'Mounjaro®',                price: P.mounjaro.monthly.label,         bg: 'linear-gradient(150deg,#E4E4E0,#D0D0C8)', color: 'var(--ink-3)', href: '/weight-loss' },
          ].map((c, i) => (
            <Link key={i} href={c.href}
              className={`carousel-card${c.active ? ' active' : ''}`}
              style={{ borderColor: c.active ? 'var(--glp-dark)' : 'var(--border)', textDecoration: 'none' }}>
              <div style={{ height: 78, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                💉
              </div>
              <div style={{ padding: '0.5rem' }}>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 2 }}>{c.name}</div>
                <div style={{ fontSize: "0.8125rem", color: 'var(--ink-3)' }}>{c.price}</div>
                <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: c.color, marginTop: 3 }}>See if you qualify →</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── ALSO FROM NUTREE ──────────────────────────────────────── */}
      <AlsoFromNutree
        eyebrow="Complete your protocol"
        title="GLP-1 pairs well with these treatments."
        items={[
          { name: 'NAD+ Therapy',  sub: 'Cellular energy · anti-aging', href: '/nad', arrowColor: 'var(--nad-dark)' },
          { name: 'B6 / B12',      sub: 'Energy support — natural complement to GLP-1', href: '/b12', arrowColor: 'var(--b12-dark)' },
          { name: 'Sermorelin',    sub: 'Preserving muscle during weight loss', href: '/sermorelin', arrowColor: 'var(--ser-dark)' },
        ]}
      />

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <FAQSection
        iconBg="var(--glp)" iconColor="var(--glp-dark)"
        items={[
          { q: 'What is included in my plan?', a: 'All Nutree GLP-1 plans include your medication, provider consultation (), dosing supplies, and free shipping. Your price is the same at every dose level — no additional fees as your treatment progresses.' },
          { q: 'What is the difference between Compounded Semaglutide and Compounded Tirzepatide?', a: 'Semaglutide is a GLP-1 receptor agonist. Tirzepatide activates both GLP-1 and GIP receptors, producing a broader metabolic effect — clinical trials show greater average weight loss (~21% vs ~15%). Your Nutree clinician will advise which is most appropriate for your health profile.' },
          { q: 'Will I receive a prescription at my consultation?', a: 'All prescriptions are issued at the sole clinical discretion of your licensed provider, based on your health profile and clinical evaluation. Your clinician\'s role is to determine what is medically appropriate for you.' },
          { q: 'What side effects should I be aware of?', a: 'Common side effects include nausea and mild digestive discomfort, especially in the early weeks of treatment. These typically ease as dosing is titrated gradually. Your provider is available to adjust your plan throughout.' },
          { q: 'How do I cancel or adjust my plan?', a: 'You can cancel or adjust your plan anytime before your next renewal date through your patient portal. There are no cancellation fees.' },
          { q: 'Is insurance required?', a: 'No insurance is required. All Nutree GLP-1 plans are self-pay and FSA/HSA eligible. For Wegovy® and Mounjaro®, we can help you explore manufacturer savings programmes where applicable.' },
        ]}
      />

      <PageLegal text="Compounded semaglutide and tirzepatide are prepared by state-licensed 503A compounding pharmacies and are not FDA-approved. They have not been evaluated by the FDA for safety, efficacy, or quality. *Clinical outcome data refers to FDA-approved reference medications (Wegovy®, Zepbound®). Compounded preparations are not those products. Wegovy® is a registered trademark of Novo Nordisk A/S. Mounjaro®/Zepbound® are registered trademarks of Eli Lilly and Company. Individual results vary. Prescriptions issued at provider discretion only. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand
        heading="Not sure which option is right for you?"
        sub="A licensed clinician will advise · $50"
      />
    </>
  )
}
