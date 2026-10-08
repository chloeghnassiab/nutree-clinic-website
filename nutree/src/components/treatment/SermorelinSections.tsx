// Sermorelin buying-intent sections restored from the live Umso page:
// "Best Sermorelin online: what to compare before you choose" and
// "Online Sermorelin care, with more personal medical support."
import Image from 'next/image'
import { CTAButton } from '@/components/treatment/SeoBlocks'

const section = (bg: string): React.CSSProperties => ({ padding: '2.5rem 1.5rem', background: bg, borderTop: '1px solid var(--border)' })
const inner: React.CSSProperties = { maxWidth: 1080, margin: '0 auto' }
const eyebrow: React.CSSProperties = { fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ser-dark)', marginBottom: '0.5rem' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3.5vw, 2.125rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '0.75rem' }
const h3: React.CSSProperties = { fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 6, lineHeight: 1.35 }
const body: React.CSSProperties = { fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }
const muted: React.CSSProperties = { ...body, fontSize: '0.9375rem', color: 'var(--ink-3)' }
const card: React.CSSProperties = { background: 'var(--white)', border: '0.5px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1.125rem' }

export function SermorelinCompare() {
  const points = [
    { title: 'Compare the care, not just the medication', desc: 'Many online platforms can help eligible patients access Sermorelin. What matters is whether you also receive thoughtful medical review, clear pharmacy-based fulfillment, and follow-up once your medication arrives.' },
    { title: 'Ask how dosing is personalized', desc: 'Sermorelin is not a one-size-fits-all protocol. Your provider should consider your goals, sleep, recovery, symptoms, health history, tolerance, and whether labs may be helpful.' },
    { title: 'Look for support after treatment starts', desc: 'The questions often come later: How do I time my dose? Should anything change? Do I need bloodwork? How do sleep, nutrition, supplements, or training affect results? A stronger program gives you a way to stay connected.' },
  ]
  return (
    <section id="best-sermorelin-online" style={section('var(--base)')}>
      <div style={inner}>
        <div style={eyebrow}>Comparing Sermorelin online?</div>
        <h2 style={h2}>Best Sermorelin online: what to compare before you choose</h2>
        <p style={{ ...body, maxWidth: 760, marginBottom: '0.875rem' }}>
          Patients often compare Nutree Clinic, Eden, AgelessRx, and other online Sermorelin options when looking for recovery,
          sleep, strength, metabolism, or healthy aging support. But the best program is not always the one that is easiest to
          start. It is the one that gives you the right medical review, clear dosing guidance, transparent pricing,
          pharmacy-based fulfillment, and real support after treatment begins.
        </p>
        <p style={{ ...body, maxWidth: 760, marginBottom: '1.25rem', fontWeight: 600, color: 'var(--ink)' }}>
          The best Sermorelin online program is not just the one that ships medication — it is the one that combines medical
          review, personalized dose guidance, transparent pricing, pharmacy-based fulfillment, and follow-up after treatment begins.
        </p>
        <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '0.75rem' }}>
          {points.map((p, i) => (
            <li key={p.title} style={card}>
              <div aria-hidden="true" style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, var(--ser-mid), var(--ser))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, marginBottom: '0.625rem' }}>{i + 1}</div>
              <h3 style={h3}>{p.title}</h3>
              <p style={muted}>{p.desc}</p>
            </li>
          ))}
        </ol>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem', alignItems: 'center' }}>
          <div>
            <p style={{ ...body, marginBottom: '1rem' }}>
              At Nutree Clinic, Sermorelin care is built for patients who want more than access to a prescription: video or phone
              consultation with a medical provider, individualized dose guidance, labs (recommended, not mandatory), and ongoing
              medical chat support with your care team.
            </p>
            <div style={{ ...card, marginBottom: '1.25rem' }}>
              <div style={{ ...eyebrow, marginBottom: 4 }}>A more personal model</div>
              <h3 style={h3}>Online care, with real clinical guidance.</h3>
              <p style={muted}>
                With Nutree Clinic, Sermorelin is not only prescribed and shipped. Your provider guides your dose, recommends labs
                as part of responsible care, answers questions, and helps shape the wellness plan around your goals.
              </p>
            </div>
            <CTAButton>Start Sermorelin now →</CTAButton>
          </div>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'linear-gradient(145deg, var(--ser-mid), var(--ser))' }}>
            <Image src="/images/sermorelin-growth-hormone-therapy-nutreeclinic.png" alt="Sermorelin treatment kit from Nutree Clinic" fill sizes="(max-width: 760px) 100vw, 520px" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function SermorelinDifference() {
  const items = [
    { title: 'Video or phone consultation', desc: 'Start with a real medical consultation in the format that feels most comfortable for you. Your provider reviews your history, goals, and whether Sermorelin therapy is appropriate.' },
    { title: 'Dose guidance that adapts', desc: 'Your Sermorelin plan can be adjusted based on your goals, tolerance, response, and clinical profile — so care can evolve instead of staying fixed.' },
    { title: 'Labs recommended for better care', desc: 'Labs are recommended to help your provider understand your baseline, personalize your plan, and guide safer, more informed treatment decisions.' },
    { title: 'Ongoing medical chat support', desc: 'Questions often come after treatment begins. Nutree gives you access to medical support so you can ask, clarify, and stay guided between visits.' },
    { title: 'Wellness guidance beyond the prescription', desc: 'Sermorelin works best as part of a broader wellness plan. We can help guide sleep, nutrition, supplements, recovery, training, and daily habits that support your long-term goals.' },
  ]
  return (
    <section id="online-sermorelin-care" style={section('var(--white)')}>
      <div style={inner}>
        <div style={eyebrow}>The Nutree difference</div>
        <h2 style={h2}>Online Sermorelin care, with more personal medical support.</h2>
        <p style={{ ...body, maxWidth: 760, marginBottom: '1.5rem' }}>
          Many online Sermorelin programs offer a monthly plan, prescription access if eligible, and home delivery. Nutree Clinic
          goes further by pairing convenient online care with provider guidance, recommended labs, personalized dose support,
          and ongoing medical chat.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.5rem', alignItems: 'start' }}>
          <div style={{ ...card, background: 'linear-gradient(145deg, rgba(242,196,160,0.45), rgba(255,255,255,0.8))' }}>
            <div style={{ ...eyebrow, marginBottom: 4 }}>Clinician-guided Sermorelin care</div>
            <h3 style={{ ...h3, fontFamily: 'var(--font-serif)', fontSize: '1.375rem', fontWeight: 600 }}>A care plan built around your goals, your labs, and your response.</h3>
            <p style={{ ...muted, marginBottom: '0.75rem' }}>
              Nutree Clinic is designed for patients who want to start Sermorelin online with real medical guidance — not just a
              prescription and a shipment.
            </p>
            <p style={muted}>
              Your provider reviews your health history, wellness goals, symptoms, labs, and response to treatment. From there,
              your plan can include dose adjustments, supplement guidance, nutrition support, and continued access to medical
              chat as your questions evolve.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {items.map(i => (
              <div key={i.title} style={{ display: 'flex', gap: '0.75rem' }}>
                <span aria-hidden="true" style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--ser)', flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, marginTop: 2 }}>✓</span>
                <div>
                  <h3 style={h3}>{i.title}</h3>
                  <p style={muted}>{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ ...card, marginTop: '1.75rem', background: 'var(--base)' }}>
          <h3 style={{ ...h3, fontFamily: 'var(--font-serif)', fontSize: '1.375rem', fontWeight: 600 }}>Ready to start Sermorelin with more guidance?</h3>
          <p style={{ ...muted, marginBottom: '1rem' }}>
            Choose Nutree Clinic for online Sermorelin care with transparent pricing, recommended labs, provider guidance, and
            ongoing support designed around real life.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <CTAButton>Start Sermorelin now →</CTAButton>
            <CTAButton variant="outline">Book a consultation</CTAButton>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
            This information is educational only and is not a promise of results. Sermorelin therapy requires clinical review and
            is available only if appropriate. Eligibility, dosing, labs, response, side effects, and outcomes vary. Your clinician
            will determine whether treatment is right for you based on your medical history, labs, and goals.
          </p>
        </div>
      </div>
    </section>
  )
}

