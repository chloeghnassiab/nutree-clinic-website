export type FAQItem = {
  id: string
  question: string
  answer: string
  category: 'general' | 'glp1' | 'nad' | 'sermorelin' | 'glutathione' | 'oxytocin' | 'b12' | 'billing' | 'clinical'
  pages: string[]
  active: boolean
  order: number
}

export const FAQ_ITEMS: FAQItem[] = [
  // ── Clinical / process ─────────────────────────────────────────────────────
  {
    id: 'no-call-required',
    question: 'Do I need to speak with a clinician to get treatment?',
    answer:
      'No call is required. After submitting your intake, a licensed Nutree clinician reviews your health history and issues your prescription directly — unless a brief discussion is clinically necessary. You can also message your clinician 7 days a week through your patient portal.',
    category: 'clinical',
    pages: ['/', '/faq', '/consult', '/weight-loss', '/glp-1', '/nad', '/sermorelin', '/glutathione', '/oxytocin', '/b12'],
    active: true,
    order: 1,
  },
  {
    id: 'clinician-messaging',
    question: 'Can I message my clinician directly?',
    answer:
      'Yes. Every Nutree patient has direct messaging access to their assigned clinician, 7 days a week. No waiting rooms, no phone trees — just direct access to the person managing your care.',
    category: 'clinical',
    pages: ['/', '/faq', '/consult'],
    active: true,
    order: 2,
  },
  {
    id: 'prescription-at-consult',
    question: 'Will I definitely receive a prescription?',
    answer:
      'All prescriptions are issued at the sole clinical discretion of your licensed provider, based on your health profile and clinical evaluation. Your clinician\'s role is to determine what is medically appropriate for you.',
    category: 'clinical',
    pages: ['/weight-loss', '/glp-1', '/faq'],
    active: true,
    order: 3,
  },

  // ── General ────────────────────────────────────────────────────────────────
  {
    id: 'how-it-works',
    question: 'How does Nutree Clinic work?',
    answer:
      'Complete a short health questionnaire, and a licensed Nutree clinician reviews your intake and issues your prescription — no call required unless clinically necessary. If prescribed, your medication is shipped free to your door from a licensed 503A pharmacy. Your clinician is available 7 days a week via direct message throughout your plan.',
    category: 'general',
    pages: ['/', '/faq'],
    active: true,
    order: 10,
  },
  {
    id: 'florida-licensed',
    question: 'Is Nutree licensed in Florida?',
    answer:
      'Yes. Nutree Clinic LLC is a licensed Florida telehealth practice. All prescriptions are issued by Florida-licensed providers. We are LegitScript certified.',
    category: 'general',
    pages: ['/faq'],
    active: true,
    order: 11,
  },

  // ── Billing ────────────────────────────────────────────────────────────────
  {
    id: 'hsa-fsa',
    question: 'Are Nutree Clinic treatments FSA/HSA eligible?',
    answer:
      'Yes. All Nutree treatment plans are self-pay and eligible for FSA and HSA reimbursement. Use your card at checkout or request a receipt for reimbursement from your plan administrator.',
    category: 'billing',
    pages: ['/', '/faq', '/pricing', '/weight-loss', '/glp-1', '/nad', '/sermorelin', '/glutathione', '/oxytocin', '/b12'],
    active: true,
    order: 3,
  },
  {
    id: 'insurance-general',
    question: 'Do I need insurance?',
    answer:
      'No. All Nutree treatments are self-pay. All plans are FSA and HSA eligible. For Wegovy® and Mounjaro®, we can help you explore manufacturer savings programmes where applicable.',
    category: 'billing',
    pages: ['/', '/faq', '/pricing'],
    active: true,
    order: 20,
  },
  {
    id: 'cancel-plan',
    question: 'How do I cancel or adjust my plan?',
    answer:
      'You can cancel or adjust your plan anytime before your next renewal date through your patient portal. There are no cancellation fees.',
    category: 'billing',
    pages: ['/weight-loss', '/faq'],
    active: true,
    order: 21,
  },
  {
    id: 'no-hidden-fees',
    question: 'Are there any hidden fees?',
    answer:
      'No. The price you see includes your medication, provider consultation, and free shipping. Your price remains the same throughout your treatment, at every dose level.',
    category: 'billing',
    pages: ['/faq', '/pricing'],
    active: true,
    order: 22,
  },

  // ── GLP-1 ──────────────────────────────────────────────────────────────────
  {
    id: 'glp1-included',
    question: 'What is included in my GLP-1 plan?',
    answer:
      'All Nutree GLP-1 plans include your medication, provider consultation, dosing supplies, and free shipping. Your price is the same at every dose level — no additional fees as your treatment progresses.',
    category: 'glp1',
    pages: ['/weight-loss', '/faq'],
    active: true,
    order: 30,
  },
  {
    id: 'glp1-sema-vs-tirz',
    question: 'What is the difference between Compounded Semaglutide and Compounded Tirzepatide?',
    answer:
      'Semaglutide is a GLP-1 receptor agonist. Tirzepatide activates both GLP-1 and GIP receptors, producing a broader metabolic effect — clinical trials show greater average weight loss (~21% vs ~15%). Your Nutree clinician will advise which is most appropriate for your health profile.',
    category: 'glp1',
    pages: ['/weight-loss', '/faq'],
    active: true,
    order: 31,
  },
  {
    id: 'glp1-side-effects',
    question: 'What side effects should I be aware of?',
    answer:
      'Common side effects include nausea and mild digestive discomfort, especially in the early weeks of treatment. These typically ease as dosing is titrated gradually. Your provider is available to adjust your plan throughout.',
    category: 'glp1',
    pages: ['/weight-loss', '/faq'],
    active: true,
    order: 32,
  },
  {
    id: 'brand-name-options',
    question: 'Can I get Wegovy® or Mounjaro® through Nutree?',
    answer:
      'Yes. Nutree facilitates access to Wegovy® and Mounjaro® for eligible patients. Your clinician will advise which option is most appropriate for you based on your health profile.',
    category: 'glp1',
    pages: ['/weight-loss', '/faq'],
    active: true,
    order: 33,
  },
  {
    id: 'microdose-effectiveness',
    question: 'Is microdosing less effective than standard dosing?',
    answer:
      'Microdosing produces more gradual results. For patients with less weight to lose or who are sensitive to side effects, it is often the more appropriate clinical choice. Your Nutree provider will advise which approach is right for your health profile.',
    category: 'glp1',
    pages: ['/glp-1'],
    active: true,
    order: 34,
  },
  {
    id: 'microdose-switch',
    question: 'Can I switch to a standard plan after microdosing?',
    answer:
      'Yes. Many patients complete a microdosing programme and then transition to a monthly plan. Your clinician will guide this transition based on your response and goals.',
    category: 'glp1',
    pages: ['/glp-1'],
    active: true,
    order: 35,
  },
  {
    id: 'microdose-renewal',
    question: 'Is there an auto-renewal?',
    answer:
      'No. Microdosing programmes are fixed-term — 5 or 10 weeks, billed upfront. There is no automatic renewal. You can choose to continue or not at the end of the programme.',
    category: 'billing',
    pages: ['/glp-1'],
    active: true,
    order: 36,
  },

  // ── NAD+ ───────────────────────────────────────────────────────────────────
  {
    id: 'nad-delivery-form',
    question: 'Which NAD+ delivery form is most effective?',
    answer:
      'Injectables provide the highest bioavailability. Nasal spray offers rapid CNS absorption without needles. Patches with GHK-Cu provide continuous slow-release delivery alongside regenerative peptide benefits. Your clinician recommends the most appropriate form based on your goals and health profile.',
    category: 'nad',
    pages: ['/nad', '/faq'],
    active: true,
    order: 40,
  },
  {
    id: 'nad-ghk-cu',
    question: 'What is GHK-Cu?',
    answer:
      'GHK-Cu (copper tripeptide-1) is a naturally occurring peptide that declines with age, studied for its role in collagen synthesis, tissue repair, and anti-inflammatory activity. Combined with transdermal NAD+, it offers complementary cellular support.',
    category: 'nad',
    pages: ['/nad'],
    active: true,
    order: 41,
  },
  {
    id: 'nad-results-timeline',
    question: 'How long before I notice results from NAD+?',
    answer:
      'Most patients notice initial changes in energy and mental clarity within 2–4 weeks. Deeper cellular and longevity benefits build over 8–12 weeks of consistent use.',
    category: 'nad',
    pages: ['/nad'],
    active: true,
    order: 42,
  },

  // ── Sermorelin ─────────────────────────────────────────────────────────────
  {
    id: 'ser-vs-hgh',
    question: 'How does Sermorelin differ from synthetic growth hormone?',
    answer:
      "Synthetic HGH replaces your growth hormone directly, bypassing your body's natural regulation. Sermorelin instead signals the gland in your brain that controls growth hormone production to release more of your own — keeping your body's natural feedback loops intact. This is why many providers prefer it as a more physiologic approach to growth hormone support.",
    category: 'sermorelin',
    pages: ['/sermorelin', '/faq'],
    active: true,
    order: 50,
  },
  {
    id: 'ser-administration',
    question: 'How is Sermorelin administered?',
    answer:
      'A small subcutaneous injection self-administered at home — typically into the abdomen, on an empty stomach before bedtime, five nights per week. Your provider guides you through the technique at your first review.',
    category: 'sermorelin',
    pages: ['/sermorelin'],
    active: true,
    order: 51,
  },
  {
    id: 'ser-fda',
    question: 'Is Sermorelin FDA-approved?',
    answer:
      'Sermorelin was previously FDA-approved but the manufacturer discontinued it in 2006 for commercial reasons, not safety concerns. It remains available as a compounded medication from licensed 503A pharmacies. All prescriptions are issued at the sole clinical discretion of your licensed Nutree provider.',
    category: 'sermorelin',
    pages: ['/sermorelin', '/faq'],
    active: true,
    order: 52,
  },
  {
    id: 'ser-duration',
    question: 'How long should I take Sermorelin?',
    answer:
      'Most providers recommend 3–6 months for full results. The 10-week starter plan is a structured way to experience the initial effects. Your clinician will guide your plan based on your response and goals.',
    category: 'sermorelin',
    pages: ['/sermorelin'],
    active: true,
    order: 53,
  },
  {
    id: 'ser-results',
    question: 'How long before I see results from Sermorelin?',
    answer:
      'Most patients notice improved sleep within the first 2 weeks. Energy and recovery improvements typically follow in weeks 3–6. Visible body composition changes develop over months 2–3 of consistent use. Individual results vary.',
    category: 'sermorelin',
    pages: ['/sermorelin', '/faq'],
    active: true,
    order: 54,
  },

  // ── Glutathione ────────────────────────────────────────────────────────────
  {
    id: 'glut-fda',
    question: 'Is glutathione FDA-approved?',
    answer:
      'Compounded glutathione is not FDA-approved. It is prepared by licensed 503A compounding pharmacies and prescribed off-label. All prescriptions are issued at the sole clinical discretion of your licensed Nutree provider.',
    category: 'glutathione',
    pages: ['/glutathione', '/faq'],
    active: true,
    order: 60,
  },
  {
    id: 'glut-administration',
    question: 'How is glutathione administered?',
    answer:
      'As a subcutaneous injection self-administered at home. Your clinician determines the appropriate frequency based on your goals and health profile.',
    category: 'glutathione',
    pages: ['/glutathione'],
    active: true,
    order: 61,
  },
  {
    id: 'glut-glp1-synergy',
    question: 'How does glutathione complement GLP-1 therapy?',
    answer:
      'Patients with high oxidative stress sometimes experience a blunted response to GLP-1 medications. Glutathione helps restore the cellular environment that allows metabolic treatments to work more effectively.',
    category: 'glutathione',
    pages: ['/glutathione'],
    active: true,
    order: 62,
  },

  // ── Oxytocin ───────────────────────────────────────────────────────────────
  {
    id: 'oxy-vs-obstetric',
    question: 'Is this the same oxytocin used in obstetrics?',
    answer:
      'The same molecule, at a very different dose and delivery method. Obstetric use involves intravenous administration at high doses for uterine effects. Nasal spray therapy uses much smaller doses targeting CNS receptors for mood and stress regulation. The applications are entirely different.',
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 70,
  },
  {
    id: 'oxy-anxiety',
    question: 'Is this a treatment for anxiety or depression?',
    answer:
      "Oxytocin therapy at Nutree is a wellness treatment for stress relief and emotional well-being. It is not a psychiatric treatment and is not a substitute for therapy or psychiatric medication. If you are experiencing a clinical condition, your provider will advise accordingly.",
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 71,
  },

  // ── B12 ────────────────────────────────────────────────────────────────────
  {
    id: 'b12-difference',
    question: 'What is the difference between B6 and B12?',
    answer:
      'B12 (cobalamin) is involved in red blood cell formation, energy metabolism, and neurological function. B6 (pyridoxine) plays a key role in neurotransmitter synthesis and immune function. They work synergistically — particularly in mood regulation and metabolic health — which is why they are often prescribed together.',
    category: 'b12',
    pages: ['/b12'],
    active: true,
    order: 80,
  },
  {
    id: 'b12-results',
    question: 'How quickly will I notice results from B12?',
    answer:
      'Injectable B12 often produces noticeable energy improvements within days. Oral supplementation typically takes 2–4 weeks. Full restoration of depleted levels generally takes 4–8 weeks of consistent use.',
    category: 'b12',
    pages: ['/b12'],
    active: true,
    order: 81,
  },
  {
    id: 'b12-injectable-appropriate',
    question: 'Is the injectable form appropriate for me?',
    answer:
      'Your Nutree clinician will recommend the most appropriate form based on your health history, goals, and any factors that may affect absorption.',
    category: 'b12',
    pages: ['/b12'],
    active: true,
    order: 82,
  },
]
