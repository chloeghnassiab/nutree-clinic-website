import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Stethoscope, Flag, ChartLineDown, Warning, CheckCircle, XCircle } from '@phosphor-icons/react/dist/ssr'
import { FAQ_ITEMS } from '@/lib/faq.config'
import {
  TrustStrip, ScienceGrid, AlsoFromNutree, PageLegal, ConsultBand, Section, SectionHeader,
} from '@/components/ui/PageComponents'
import { FaqList } from '@/components/microdosing/FaqList'
import { BmiCalculator } from '@/components/microdosing/BmiCalculator'
import { JsonLd, faqPageSchema, SITE_URL } from '@/components/microdosing/schema'

const PAGE = '/glp-1'
const TITLE = 'GLP-1 Weight Loss Explained | Semaglutide & Tirzepatide'
const DESCRIPTION =
  'How compounded semaglutide & tirzepatide—same active ingredients as Ozempic® & Mounjaro®—support medical weight loss, guided by licensed clinicians.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE,
    type: 'article',
    images: [{ url: '/images/microdosing/semaglutide-tirzepatide-weight-loss-hero.png', width: 653, height: 900, alt: 'Smiling woman — semaglutide and tirzepatide for weight loss with Nutree Clinic' }],
  },
}

const p: React.CSSProperties = { fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.75, maxWidth: 680, marginBottom: '0.875rem' }
const pill: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.5rem', borderRadius: 999, fontSize: '1rem', fontWeight: 700, textDecoration: 'none' }
const card: React.CSSProperties = { background: 'var(--white)', border: '0.5px solid var(--border)', borderRadius: 16, padding: '1.25rem' }
const h3: React.CSSProperties = { fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', margin: '0 0 0.5rem', fontFamily: 'var(--font-sans)' }

export default function Glp1ExplainerPage() {
  const faqs = FAQ_ITEMS
    .filter(f => f.active && f.pages.includes(PAGE))
    .sort((a, b) => a.order - b.order)
    .map(f => ({ q: f.question, a: f.answer }))

  return (
    <>
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          name: TITLE,
          description: DESCRIPTION,
          url: `${SITE_URL}${PAGE}`,
          about: [
            { '@type': 'Drug', name: 'Semaglutide', drugClass: 'GLP-1 receptor agonist' },
            { '@type': 'Drug', name: 'Tirzepatide', drugClass: 'GIP and GLP-1 receptor agonist' },
          ],
          audience: { '@type': 'PeopleAudience', geographicArea: { '@type': 'State', name: 'Florida' } },
          publisher: { '@type': 'MedicalOrganization', name: 'Nutree Clinic', url: SITE_URL },
        },
        faqPageSchema(faqs),
      ]} />

      {/* ── HERO ── */}
      <div className="hero-split">
        <div className="hero-photo gradient-glp" style={{ minHeight: 360 }}>
          <Image
            src="/images/microdosing/semaglutide-tirzepatide-weight-loss-hero.png"
            alt="Smiling woman in front of a teal background — semaglutide and tirzepatide weight loss with Nutree Clinic"
            fill priority
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        <div className="hero-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--glp-dark)', marginBottom: '0.5rem' }}>What are GLP-1s?</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Semaglutide and Tirzepatide for Weight-Loss
          </h1>
          <p style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.625rem' }}>
            Reset your metabolism and achieve lasting results
          </p>
          <p style={{ ...p, fontSize: '0.9375rem' }}>
            GLP-1 and GIP/GLP-1 medications work by mimicking a natural hormone that helps regulate appetite, fullness, and blood sugar. By supporting how your body manages hunger and metabolism, these treatments can make it easier to lose weight safely and sustainably — with a licensed clinician guiding every step.
          </p>
          <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
            <Link href="/consult" style={{ ...pill, background: 'var(--ink)', color: '#fff' }}>Check eligibility <ArrowRight size={16} weight="bold" /></Link>
            <Link href="/weight-loss" style={{ ...pill, background: 'var(--white)', color: 'var(--ink)', border: '1px solid var(--border)' }}>See weight-loss plans</Link>
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--ink-3)', marginTop: '0.75rem' }}>FSA/HSA eligible · Florida residents · 100% online</div>
        </div>
      </div>

      <div style={{ height: '1rem' }} />
      <TrustStrip />

      {/* ── WHAT IS A GLP-1 ── */}
      <Section bg="var(--white)">
        <SectionHeader eyebrow="The basics" title="What is a GLP-1?" />
        <p style={p}>
          GLP-1 (glucagon-like peptide-1) is a hormone your gut naturally releases after you eat. It tells your brain you are full, slows how quickly food leaves your stomach, and helps your pancreas release insulin when blood sugar rises. The natural hormone only lasts a few minutes in the body.
        </p>
        <p style={p}>
          GLP-1 medications — also called GLP-1 receptor agonists — are designed to act like this hormone for much longer, which is why they are taken as a once-weekly injection. Over time, steadier appetite signals and fewer cravings (often described as less &ldquo;food noise&rdquo;) can make it easier to eat less and lose weight. Semaglutide and tirzepatide are the two most widely used GLP-1 medications for weight management.
        </p>
      </Section>

      {/* ── SEMAGLUTIDE vs TIRZEPATIDE ── */}
      <Section bg="var(--base)">
        <SectionHeader
          eyebrow="Two medications, one goal"
          title="How semaglutide and tirzepatide work"
          body="Both are once-weekly injections that support appetite regulation and metabolic health. The difference is in which hormone receptors they act on."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={card}>
            <span style={{ background: 'var(--glp)', color: 'var(--glp-dark)', padding: '3px 10px', borderRadius: 999, fontSize: '0.8125rem', fontWeight: 700 }}>Single agonist</span>
            <h3 style={{ ...h3, marginTop: '0.75rem', fontSize: '1.25rem' }}>Semaglutide</h3>
            <p style={{ ...p, fontSize: '0.9375rem', marginBottom: 0 }}>
              Semaglutide activates the GLP-1 receptor. It is the active ingredient in Ozempic® (FDA-approved for type 2 diabetes) and Wegovy® (FDA-approved for chronic weight management). It has been studied extensively and is often a first GLP-1 for patients new to treatment.
            </p>
          </div>
          <div style={card}>
            <span style={{ background: 'var(--ser)', color: 'var(--ser-dark)', padding: '3px 10px', borderRadius: 999, fontSize: '0.8125rem', fontWeight: 700 }}>Dual agonist</span>
            <h3 style={{ ...h3, marginTop: '0.75rem', fontSize: '1.25rem' }}>Tirzepatide</h3>
            <p style={{ ...p, fontSize: '0.9375rem', marginBottom: 0 }}>
              Tirzepatide activates both the GLP-1 receptor and the GIP (glucose-dependent insulinotropic polypeptide) receptor, a second gut hormone involved in insulin release and energy balance. It is the active ingredient in Mounjaro® (type 2 diabetes) and Zepbound® (chronic weight management).
            </p>
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem', background: 'var(--white)', borderRadius: 12 }}>
            <thead>
              <tr>
                <th scope="col" style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid var(--border)', width: '32%', fontSize: '0.875rem' }}>&nbsp;</th>
                <th scope="col" style={{ padding: '10px 8px', textAlign: 'center', borderBottom: '2px solid var(--border)', fontSize: '0.875rem', color: 'var(--glp-dark)' }}>Semaglutide</th>
                <th scope="col" style={{ padding: '10px 8px', textAlign: 'center', borderBottom: '2px solid var(--border)', fontSize: '0.875rem', color: 'var(--ser-dark)' }}>Tirzepatide</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Receptors targeted', 'GLP-1', 'GLP-1 + GIP'],
                ['How it is taken', 'Once-weekly injection', 'Once-weekly injection'],
                ['Brand-name reference', 'Ozempic® · Wegovy®', 'Mounjaro® · Zepbound®'],
                ['Average weight loss in trials*', '~15% over 68 weeks', '~21% over 72 weeks (highest dose)'],
                ['Dosing', 'Started low, increased gradually', 'Started low, increased gradually'],
              ].map(([k, a, b], i) => (
                <tr key={k} style={{ background: i % 2 ? 'rgba(184,228,240,0.12)' : 'var(--white)' }}>
                  <th scope="row" style={{ padding: '9px 8px', textAlign: 'left', fontWeight: 700, color: 'var(--ink)', borderBottom: '0.5px solid var(--border)', fontSize: '0.875rem' }}>{k}</th>
                  <td style={{ padding: '9px 8px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)' }}>{a}</td>
                  <td style={{ padding: '9px 8px', textAlign: 'center', color: 'var(--ink-2)', borderBottom: '0.5px solid var(--border)' }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6, marginTop: 8 }}>
          *STEP-1 (semaglutide 2.4 mg) and SURMOUNT-1 (tirzepatide 15 mg) trials of the FDA-approved brand-name medications, combined with diet and exercise. Compounded preparations are not those products. Individual results vary.
        </p>
      </Section>

      {/* ── HOW THEY SUPPORT WEIGHT LOSS ── */}
      <ScienceGrid
        eyebrow="Mechanism"
        title="How GLP-1s support weight loss"
        iconGradient="linear-gradient(135deg, var(--glp-mid), var(--glp))"
        items={[
          { icon: 'Brain', title: 'Appetite regulation in the brain', desc: 'GLP-1 medications act on appetite centres in the brain to reduce hunger signals and quiet persistent cravings.' },
          { icon: 'Timer', title: 'Longer-lasting fullness', desc: 'Slower gastric emptying means food stays in the stomach longer, so you feel satisfied with smaller portions.' },
          { icon: 'Drop', title: 'Blood sugar support', desc: 'They help the pancreas release insulin when it is needed and reduce glucagon, supporting steadier blood sugar.' },
          { icon: 'Barbell', title: 'Protecting lean tissue', desc: 'Paired with adequate protein and strength training, treatment can focus weight loss on fat while helping preserve muscle.' },
        ]}
      />

      {/* ── MEDICAL CARE (live section) ── */}
      <Section bg="var(--white)">
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 340px' }}>
            <SectionHeader
              eyebrow="Personalized GLP-1 therapy guided by real clinicians"
              title="Medical care for lasting, healthy weight loss"
              body="Designed to help your body, hormones, and habits find balance again."
            />
            {[
              { Icon: Stethoscope, t: 'Clinician-led care', d: 'Your treatment is prescribed and supervised by licensed medical providers who focus on weight and metabolic health.' },
              { Icon: Flag, t: 'Compounded in the U.S.', d: 'Prescriptions are prepared by state-licensed 503A compounding pharmacies in the United States and shipped directly to you, safely and discreetly.' },
              { Icon: ChartLineDown, t: 'Expected benefits', d: 'Many patients report better appetite control, steadier energy, improved blood sugar balance, and gradual, sustainable weight loss. Your progress is reviewed regularly and your plan adjusted as needed. Results vary.' },
            ].map(({ Icon, t, d }) => (
              <div key={t} style={{ display: 'flex', gap: '0.875rem', marginBottom: '1rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, var(--glp-mid), var(--glp))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={20} color="var(--glp-dark)" />
                </div>
                <div>
                  <h3 style={{ ...h3, fontSize: '1rem', marginBottom: 4 }}>{t}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--ink-3)', lineHeight: 1.6, margin: 0 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ flex: '1 1 320px' }}>
            <Image
              src="/images/microdosing/clinician-led-glp-1-care.png"
              alt="Patient on a telehealth video call with a Nutree Clinic clinician on their phone"
              width={1200} height={633}
              sizes="(max-width: 640px) 100vw, 45vw"
              style={{ width: '100%', height: 'auto', borderRadius: 16 }}
            />
          </div>
        </div>
      </Section>

      {/* ── COMPOUNDED vs BRAND ── */}
      <Section bg="var(--base)">
        <SectionHeader eyebrow="Know what you're taking" title="Compounded vs. brand-name GLP-1s" />
        <p style={p}>
          Compounded semaglutide and compounded tirzepatide contain the same active ingredients as Ozempic®/Wegovy® and Mounjaro®/Zepbound®. They are prepared by a state-licensed 503A compounding pharmacy for an individual patient, based on a prescription from a licensed clinician — which allows dosing to be tailored, including lower microdosing protocols.
        </p>
        <p style={p}>
          Compounded medications are not FDA-approved and have not been evaluated by the FDA for safety, efficacy, or quality. The clinical-trial results quoted on this page come from the brand-name products. Your clinician can discuss both compounded and brand-name options with you.
        </p>
      </Section>

      {/* ── SAFETY ── */}
      <Section bg="var(--white)">
        <SectionHeader
          eyebrow="Safety first"
          title="Side effects and safety"
          body="Like all medications, semaglutide and tirzepatide can cause side effects. Knowing what to expect — and having a clinician to message — makes treatment safer."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
          <div style={card}>
            <h3 style={h3}>Common side effects</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
              Nausea, vomiting, diarrhea, constipation, reduced appetite, indigestion and abdominal discomfort. These are most common when starting treatment or increasing the dose, and often ease as your body adjusts. Starting low and increasing slowly helps.
            </p>
          </div>
          <div style={{ ...card, borderColor: 'var(--con)' }}>
            <h3 style={{ ...h3, display: 'flex', alignItems: 'center', gap: 8 }}><Warning size={20} color="var(--con-dark)" /> Less common but serious</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
              Pancreatitis, gallbladder problems, low blood sugar (especially with insulin or sulfonylureas), dehydration-related kidney problems, and allergic reactions. Brand-name labeling carries a boxed warning about thyroid C-cell tumors seen in rodents. Contact your clinician — or emergency services — if you have severe abdominal pain or other serious symptoms.
            </p>
          </div>
          <div style={card}>
            <h3 style={h3}>A lower-dose option</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
              Some patients prefer a gentler start. <Link href="/glp-1microdosing" style={{ color: 'var(--glp-dark)', fontWeight: 700 }}>GLP-1 microdosing</Link> uses a low weekly dose, which may mean fewer side effects for some patients — though side effects can still occur and your clinician will monitor how you respond.
            </p>
          </div>
        </div>
      </Section>

      {/* ── WHO QUALIFIES ── */}
      <Section bg="var(--base)">
        <SectionHeader eyebrow="Eligibility" title="Who qualifies for GLP-1 treatment?" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
          <div style={card}>
            <h3 style={h3}>Treatment may be considered if you</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'Are an adult (18+) living in Florida',
                'Have a BMI of 30 or higher, or',
                'Have a BMI of 27 or higher with a weight-related condition such as high blood pressure, prediabetes, type 2 diabetes or high cholesterol',
                'Are ready to pair medication with nutrition, activity and follow-up',
              ].map(t => (
                <li key={t} style={{ display: 'flex', gap: 8, fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.55 }}>
                  <CheckCircle size={18} weight="fill" color="var(--glp-dark)" style={{ flexShrink: 0, marginTop: 2 }} /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div style={card}>
            <h3 style={h3}>Treatment may not be appropriate if you</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'Have a personal or family history of medullary thyroid carcinoma or MEN2',
                'Are pregnant, planning a pregnancy, or breastfeeding',
                'Have had pancreatitis or a serious reaction to a GLP-1 medication',
                'Have type 1 diabetes or certain other conditions your clinician will screen for',
              ].map(t => (
                <li key={t} style={{ display: 'flex', gap: 8, fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.55 }}>
                  <XCircle size={18} weight="fill" color="var(--con-dark)" style={{ flexShrink: 0, marginTop: 2 }} /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6, marginTop: '0.75rem' }}>
          Eligibility is always decided by a licensed clinician after reviewing your full health history. A prescription is never guaranteed.
        </p>
      </Section>

      {/* ── BMI (live section) ── */}
      <Section bg="var(--white)">
        <SectionHeader
          eyebrow="Check where you stand"
          title="Calculate your BMI"
          body="Your BMI can help you and your clinician better understand your body composition and health goals. Enter your height and weight to estimate your BMI and see where it lands on the chart."
        />
        <BmiCalculator />
      </Section>

      {/* ── NEXT STEP ── */}
      <AlsoFromNutree
        eyebrow="Choose your path"
        title="Ready to explore GLP-1 treatment?"
        items={[
          { name: 'GLP-1 weight-loss plans', sub: 'Compounded semaglutide & tirzepatide — standard dosing', href: '/weight-loss', arrowColor: 'var(--glp-dark)', img: '/images/glp1-semaglutide-weight-loss-nutreeclinic-nav.png' },
          { name: 'GLP-1 microdosing', sub: 'A lower-dose, gentler start · 5 or 10 weeks', href: '/glp-1microdosing', arrowColor: 'var(--glp-dark)', img: '/images/microdosing/glp-1-microdosing-vial-nutree-clinic.png' },
          { name: 'BMI calculator', sub: 'See where you stand before you start', href: '/bmi', arrowColor: 'var(--glp-dark)' },
          { name: 'GLP-1 microdosing in Florida', sub: 'Find care in your city — 100% online', href: '/glp-1microdosing/florida', arrowColor: 'var(--glp-dark)' },
        ]}
      />

      <FaqList items={faqs} />

      <PageLegal text="The content on this page is for informational purposes only and does not create a doctor–patient relationship. Clinical services are provided by Nutree Clinic’s network of U.S.-licensed clinicians, who determine eligibility for GLP-1 and other treatments based on your medical history and clinical evaluation, and retain full discretion to prescribe or decline compounded or branded medications. Compounded medications are prepared by state-licensed 503A compounding pharmacies, are not FDA-approved, and have not been evaluated by the FDA for safety, efficacy, or quality. Zepbound® and Wegovy® are FDA-approved for chronic weight management; Ozempic® and Mounjaro® are FDA-approved for type 2 diabetes and may be prescribed off-label for weight management when clinically appropriate. All trademarks are the property of their respective owners. Results vary. Nutree Clinic LLC · Florida · LegitScript certified." />

      <ConsultBand />
    </>
  )
}
