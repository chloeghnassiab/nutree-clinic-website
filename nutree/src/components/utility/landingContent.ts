// Copy for the ad/partner landing pages, taken from the live Umso pages
// (/landing-microdosing, /landing-nad, /promotion, /mbjcc-jperks).

import { CONSULT_NEUTRAL } from '@/components/compliance/copy'

export type ImageRef = { src: string; alt: string; width: number; height: number }

export const IMG = {
  glpVial: { src: '/images/utility/glp1-microdosing-vial.jpg', alt: 'Nutree Clinic GLP-1 vial on a teal pedestal', width: 800, height: 800 },
  glpVialProduct: { src: '/images/utility/glp1-vial-product.png', alt: 'Nutree Clinic GLP-1 prescription vial', width: 1024, height: 1024 },
  glpIntake: { src: '/images/utility/glp1-vial-online-intake.jpg', alt: 'Nutree Clinic GLP-1 vial beside a phone showing the online intake form', width: 800, height: 800 },
  nadVial: { src: '/images/utility/nad-plus-therapy-vial.jpg', alt: 'Nutree Clinic NAD+ vial on a teal pedestal', width: 800, height: 800 },
  metabolicLifestyle: { src: '/images/utility/metabolic-wellness-lifestyle.jpg', alt: 'Smiling woman sitting on a wooden stool against a soft teal background', width: 1400, height: 932 },
  nadLifestyle: { src: '/images/utility/nad-longevity-wellness-lifestyle.jpg', alt: 'Smiling woman with long dark hair framing her face with her hands', width: 1400, height: 933 },
  courtney: { src: '/images/utility/courtney-glp1-microdosing-patient.jpg', alt: 'Courtney, a Nutree Clinic GLP-1 microdosing patient', width: 768, height: 1024 },
  mbjccLogo: { src: '/images/utility/miami-beach-jcc-logo.png', alt: 'Miami Beach JCC logo', width: 554, height: 554 },
} satisfies Record<string, ImageRef>

export const BENEFITS_DISCLAIMER =
  'This information is educational only and is not a promise of results. Eligibility, response, side effects, and outcomes vary. Your clinician will determine whether treatment is appropriate for you based on your medical history and goals.'

export const MICRODOSING_CHECKLIST = [
  'Licensed 503A pharmacy medications',
  'No membership, no hidden fees',
  'Consultation and shipping included',
  'No commitment, cancel anytime',
]

export const MICRODOSING = {
  benefits: {
    eyebrow: 'Personalized care, built around you',
    title: 'Why some patients choose a lower-dose GLP-1 approach',
    body: 'A lower-dose GLP-1 approach is often chosen by patients seeking a more gradual, personalized path to metabolic balance and appetite regulation.',
    items: [
      { title: 'Metabolic and hormonal support', body: 'May support blood sugar regulation and insulin sensitivity as part of a clinician-guided metabolic plan.' },
      { title: 'Gradual progress', body: 'A lower-dose approach for patients who prefer slower, steadier changes over time. Results are typically more gradual than with standard dosing.' },
      { title: 'Appetite and craving support', body: 'Treatment may help reduce “food noise” and support more balanced eating routines.' },
      { title: 'Clinician-guided dosing', body: 'Your clinician sets and adjusts your dose based on your history and how you respond, and monitors for side effects.' },
    ],
    image: IMG.glpVialProduct,
  },
  how: {
    title: 'How does GLP-1 microdosing work?',
    image: IMG.metabolicLifestyle,
    body: 'Nutree Clinic uses small weekly doses of semaglutide or tirzepatide to support appetite and metabolic balance, with a gentle start to help your body adjust.',
    who: ['Support for appetite and cravings', 'A gradual, low-dose GLP-1 approach', 'Improving metabolic balance', 'Clinician-guided, personalized care'],
  },
  steps: [
    { title: 'Digital Intake', desc: 'Tell us about your health history, lifestyle, and goals through our secure online portal.' },
    { title: 'Provider Review', desc: `${CONSULT_NEUTRAL} Your clinician determines whether a lower-dose GLP-1 approach is appropriate for you.` },
    { title: 'Doorstep Delivery', desc: 'If appropriate, your personalized medication kit is shipped directly to your door with everything you need to begin.' },
    { title: 'Ongoing Support', desc: 'Your care doesn’t stop after delivery. Your clinician remains available to monitor your progress and adjust your treatment when needed.' },
  ],
  faq: [
    { q: 'What is GLP-1 microdosing?', a: 'GLP-1 microdosing is a low-dose treatment approach that uses semaglutide or tirzepatide in smaller, carefully guided amounts. At Nutree Clinic, this protocol is designed to support appetite regulation, metabolic balance, and a more manageable treatment experience.' },
    { q: 'Is this the same as Ozempic® or Mounjaro®?', a: 'No. It uses the same active ingredient as Ozempic® (semaglutide) or Mounjaro® (tirzepatide), but it is a different product: it is prepared by a state-licensed 503A compounding pharmacy for an individual prescription, at doses your provider selects. Compounded medications are not FDA-approved, the FDA does not review them for safety, effectiveness, or quality, and they are not generic versions of brand-name drugs. Ozempic® is a registered trademark of Novo Nordisk A/S; Mounjaro® is a registered trademark of Eli Lilly and Company. Nutree Clinic is not affiliated with either company.' },
    { q: 'How does it help me control my appetite?', a: 'Semaglutide and tirzepatide work by mimicking naturally occurring hormones involved in appetite and fullness. For many patients this helps reduce “food noise”, improve satiety, and make eating patterns easier to manage.' },
    { q: 'How is microdosing different from standard GLP-1 treatment?', a: 'Standard GLP-1 treatment follows higher-dose protocols. Microdosing uses lower doses. The goal is to create a gentler experience while still supporting metabolic health and appetite regulation.' },
    { q: 'How often do I take it?', a: 'Microdosing is typically taken once weekly. Your Nutree Clinic provider will guide your dose and timing and may adjust your plan over time depending on how your body responds.' },
    { q: 'What kind of experience can I expect?', a: 'Every patient responds differently, but many people are looking for a steadier and more manageable approach than traditional higher-dose protocols. Nutree’s focus is thoughtful dosing, close follow-up, and care that feels sustainable in real life. Side effects can still occur at lower doses.' },
    { q: 'Do I have to go on camera for my consultation?', a: 'Not necessarily. A licensed provider reviews your intake, and a video or phone visit may be required depending on your treatment and Florida rules. If a visit is needed and you would rather not be on camera, ask our team whether a phone visit is an option for you.' },
    { q: 'How do you ensure medication quality?', a: 'We work with carefully selected state-licensed 503A U.S. compounding pharmacies. Every prescription is ordered by your licensed clinician and prepared according to applicable sterile compounding requirements. Compounded medications are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality.' },
    { q: 'Is my data safe?', a: 'Yes. Nutree Clinic follows HIPAA requirements and uses secure systems to keep your health information private.' },
  ],
}

export const NAD = {
  benefits: {
    eyebrow: 'Personalized care, built around you',
    title: 'Discover how NAD+ can support energy & vitality',
    body: 'NAD+ therapy is often chosen by patients seeking a more personalized approach to energy, mental clarity, recovery, and healthy aging support.',
    items: [
      { title: 'Cellular energy support', body: 'NAD+ plays a key role in how your cells produce energy, which is why some patients with low-energy or fatigue concerns explore it. Evidence that NAD+ therapy reduces fatigue is limited.' },
      { title: 'Mental clarity and focus', body: 'Many patients explore NAD+ as part of a wellness plan aimed at supporting clearer thinking, sharper focus, and better day-to-day cognitive function.' },
      { title: 'Recovery and resilience', body: 'NAD+ is often used in protocols designed to support recovery from physical and mental stress while promoting a greater sense of overall resilience.' },
      { title: 'Healthy aging support', body: 'Because NAD+ levels naturally decline with age, some patients choose this therapy as part of a clinician-guided plan focused on long-term wellness.' },
    ],
    image: IMG.metabolicLifestyle,
  },
  how: {
    title: 'How do NAD+ injections work?',
    image: IMG.nadLifestyle,
    body: 'Nutree Clinic prescribes personalized NAD+ protocols off-label for patients whose goals include energy, mental clarity, recovery, and healthy aging, with clinician-guided dosing. Human research on these uses is still limited.',
    who: ['Support for energy and reduced fatigue', 'Mental clarity, focus, and cognitive support', 'Recovery and healthy aging support', 'Clinician-guided, personalized care'],
  },
  steps: [
    { title: 'Digital Intake', desc: 'Tell us about your health history, lifestyle, and goals through our secure online portal.' },
    { title: 'Provider Review', desc: `${CONSULT_NEUTRAL} Your clinician determines whether NAD+ therapy is appropriate for you.` },
    { title: 'Doorstep Delivery', desc: 'If appropriate, your personalized medication kit is shipped directly to your door with everything you need to begin.' },
    { title: 'Ongoing Support', desc: 'Your care doesn’t stop after delivery. Your clinician remains available to monitor your progress and adjust your treatment when needed.' },
  ],
  faq: [
    { q: 'What are NAD+ injections?', a: 'NAD+ injections are a treatment approach that delivers NAD+ (nicotinamide adenine dinucleotide), a coenzyme naturally found in every cell of the body. At Nutree Clinic, NAD+ is prescribed off-label for energy, mental-clarity, recovery, and wellness goals through a personalized, clinician-guided protocol. It is not FDA-approved to treat any condition.' },
    { q: 'Why is NAD+ important?', a: 'NAD+ plays an important role in cellular energy production, repair, and brain function. NAD+ levels can decline with age, stress, poor sleep, and other lifestyle factors. For some patients, provider-guided NAD+ therapy may be part of a broader plan aimed at energy, focus, and resilience goals, although human evidence is still limited.' },
    { q: 'What can NAD+ injections help support?', a: 'NAD+ injections are used off-label in wellness protocols for goals such as energy, mental clarity, focus, recovery, and healthy aging; evidence for these uses is limited. Every patient is different, so your provider will assess whether this approach makes sense for your goals, symptoms, and medical history.' },
    { q: 'How are NAD+ injections different from oral supplements?', a: 'NAD+ injections deliver NAD+ directly through an injectable format rather than a pill or capsule. Many patients are interested in injections because they are often used as a more direct way to support NAD+ levels as part of a structured wellness plan supervised by a licensed provider.' },
    { q: 'How often do I take it?', a: 'Your dosing schedule depends on your individualized plan. Some NAD+ protocols are used multiple times per week, and your Nutree Clinic provider will guide your dose, frequency, and any adjustments over time based on how your body responds.' },
    { q: 'What kind of experience can I expect?', a: 'Every patient responds differently. Many people exploring NAD+ are looking for support with low energy, brain fog, or recovery. Nutree’s approach is focused on thoughtful dosing, close follow-up, and a plan that feels realistic and sustainable in everyday life.' },
    { q: 'Do I have to go on camera for my consultation?', a: 'Not necessarily. A licensed provider reviews your intake, and a video or phone visit may be required depending on your treatment and Florida rules. If a visit is needed and you would rather not be on camera, ask our team whether a phone visit is an option for you.' },
    { q: 'How do you ensure medication quality?', a: 'We work with carefully selected state-licensed 503A U.S. compounding pharmacies. Every prescription is ordered by your licensed clinician and prepared according to applicable sterile compounding requirements. Compounded medications are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality.' },
    { q: 'Is my data safe?', a: 'Yes. Nutree Clinic follows HIPAA requirements and uses secure systems to keep your health information private.' },
  ],
}
