import type { Metadata } from 'next'
import Image from 'next/image'
import { ConsultBand } from '@/components/ui/PageComponents'
import { JsonLd } from '@/components/treatment/SeoBlocks'

// Bio facts are limited to what public sources confirm: NPPES NPI registry
// (NPI 1144426248, credential D.O., MPH), Doximity / WebMD / doctor.com
// directory listings (DO, Touro University California COM, 2007; preventive
// medicine residency, Stony Brook; board certification in Public Health &
// General Preventive Medicine) and PubMed (PMID 21453034). Do not add claims
// that are not verifiable.
const MEDICAL_DIRECTOR_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Teri Bilhartz, DO, MPH',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'DO, MPH',
  jobTitle: 'Medical Director',
  medicalSpecialty: 'PublicHealth',
  image: 'https://www.nutreeclinic.com/images/dr-teri-bilhartz.jpg',
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Touro University California College of Osteopathic Medicine' },
    { '@type': 'CollegeOrUniversity', name: 'Columbia University' },
  ],
  memberOf: { '@type': 'MedicalOrganization', name: 'Nutree Clinic', url: 'https://www.nutreeclinic.com/' },
  sameAs: ['https://www.linkedin.com/in/teri-bilhartz-do-mph-a5250611/'],
}

const TITLE = 'About Nutree Clinic | Our Mission & Medical Team'
const DESCRIPTION = 'Meet the licensed medical professionals behind Nutree Clinic. Florida-based care focused on safe, personalized medical weight loss and healthy aging.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={MEDICAL_DIRECTOR_JSON_LD} />
      {/* FOUNDER STORY */}
      <section style={{ padding: '3rem 1.5rem 2rem', background: 'var(--base)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem' }}>Our story</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--ink)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
          Science-based care<br />should be accessible<br />to everyone.
        </h1>
        <p style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1rem', maxWidth: 600 }}>
          Nutree Clinic was founded by Atara Marko, MMS, PA-C — a practicing clinician who saw firsthand how difficult it was for patients to access evidence-based metabolic and longevity treatments. The barrier wasn&apos;t efficacy. It was access, cost, and the lack of a trusted clinical relationship.
        </p>
        <p style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1rem', maxWidth: 600 }}>
          Nutree was built to close that gap — combining the clinical rigor of a licensed medical practice with the accessibility of telehealth, delivered by providers who take the time to understand each patient individually.
        </p>
        <p style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.75, maxWidth: 600 }}>
          We are based in Florida and serve patients located in Florida. Every plan starts with review by a licensed provider; a video or phone visit may be required depending on your treatment and Florida rules.
        </p>
      </section>

      {/* TEAM */}
      <section style={{ padding: '2.5rem 1.5rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>Real clinicians leading your care</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: 'var(--ink)', marginBottom: '0.5rem' }}>Our Team</h2>
        <p style={{ fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: '1.5rem' }}>Medical experts guiding weight loss, longevity, and long-term well-being.</p>

        {/* Atara */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
          <div style={{ width: 88, height: 88, borderRadius: 14, overflow: 'hidden', flexShrink: 0 }}>
            <Image
              src="/images/atara-marko-pa-c-founder-nutreeclinic.jpg"
              alt="Atara Marko, MMS, PA-C — Founder of Nutree Clinic"
              width={88} height={88}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-serif)', marginBottom: 6 }}>Atara Marko, MMS, PA-C</div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--teal)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Founder · Managing Member</div>
            <p style={{ fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.7, maxWidth: 520 }}>
              Atara is a certified physician assistant with a Master of Medical Science who built her expertise through years of diverse clinical experience. Her commitment to evidence-based medicine and holistic care designs the standards of Nutree Clinic, ensuring every patient receives clear, trustworthy, and medically grounded support.
            </p>
          </div>
        </div>

        {/* Dr. Bilhartz */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
          <div style={{ width: 88, height: 88, borderRadius: 14, overflow: 'hidden', flexShrink: 0 }}>
            <Image
              src="/images/dr-teri-bilhartz.jpg"
              alt="Dr. Teri Bilhartz, DO, MPH — Medical Director, Nutree Clinic"
              width={88} height={88}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--font-serif)', marginBottom: 6 }}>Dr. Teri Bilhartz, DO, MPH</div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--teal)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Medical Director</div>
            <p style={{ fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.7, maxWidth: 520 }}>
              Dr. Bilhartz is a Doctor of Osteopathic Medicine (DO) and is board-certified in Public Health and General Preventive
              Medicine. She earned her DO from Touro University California College of Osteopathic Medicine in 2007 and her Master
              of Public Health from Columbia University, and completed residency training in preventive medicine at Stony Brook.
              Since 2007 she has cared for patients in primary care, women&apos;s health, and preventive and lifestyle medicine, and
              she co-authored a 2011 <em>Journal of Women&apos;s Health</em> paper on pregnancy as an early indicator of
              cardiovascular risk.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.7, maxWidth: 520, marginTop: '0.75rem' }}>
              As Medical Director, Dr. Bilhartz provides physician oversight of Nutree Clinic&apos;s clinical protocols — GLP-1
              weight loss (including microdosing), NAD+, sermorelin, oxytocin, B12, and glutathione — including the eligibility
              and screening criteria, safety monitoring, and prescribing standards our clinicians follow when deciding whether a
              treatment is appropriate for each patient.
            </p>
            <a href="https://www.linkedin.com/in/teri-bilhartz-do-mph-a5250611/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 8, fontSize: '0.875rem', fontWeight: 600, color: 'var(--teal-dark)' }}>
              Dr. Bilhartz on LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '2.5rem 1.5rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem' }}>What we believe</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: 'var(--ink)', marginBottom: '1.5rem' }}>Our principles.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { title: 'Clinical honesty above all', body: 'Your clinician\'s role is to determine what is medically appropriate for you — not to recommend a specific plan. If a treatment is not right for you, we will tell you.' },
            { title: 'Access is a clinical issue', body: 'Evidence-based metabolic treatments should not be limited to patients who can afford concierge medicine. Nutree exists to close that gap.' },
            { title: 'The relationship matters', body: 'Telehealth at its best is not faster medicine — it is more accessible medicine. Our providers take the time that traditional practice often cannot.' },
            { title: 'Transparency in everything', body: 'No hidden fees and no pressure to commit. Your plan price is shown before you start, and we tell you before any change.' },
          ].map((v, i) => (
            <div key={i} style={{ background: 'var(--white)', borderRadius: 12, padding: '1.25rem', border: '0.5px solid var(--border)' }}>
              <div style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{v.title}</div>
              <div style={{ fontSize: '1rem', color: 'var(--ink-3)', lineHeight: 1.7 }}>{v.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ padding: '2rem 1.5rem', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1rem' }}>Credentials & compliance</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['🏥 Licensed Florida telehealth practice', '✅ LegitScript certified', '🔒 HIPAA compliant', '🇺🇸 State-licensed 503A pharmacy partners', '💳 FSA / HSA eligible'].map(c => (
            <div key={c} className="trust-pill">{c}</div>
          ))}
        </div>
      </section>

      <ConsultBand />
    </>
  )
}
