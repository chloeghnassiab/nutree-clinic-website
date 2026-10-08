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

  // ── Restored from live Umso site (www.nutreeclinic.com) — homepage FAQ ──────
  {
    id: 'live-home-results-timing',
    question: 'How soon will I notice results?',
    answer:
      'Every body responds differently. Some patients notice early progress within a few weeks, while others see a more gradual change over time. At Nutree Clinic, we focus on steady, sustainable results — not quick fixes — adjusting your plan along the way for optimal success.',
    category: 'glp1',
    pages: ['/'],
    active: true,
    order: 100,
  },
  {
    id: 'live-home-good-candidate',
    question: 'Who is a good candidate for medical weight loss treatment?',
    answer:
      'These medications may be suitable for adults seeking a medically guided approach to weight management or improved metabolic health. During your video consultation, your Nutree Clinic provider will review your health history to determine the safest and most effective plan for you.',
    category: 'glp1',
    pages: ['/'],
    active: true,
    order: 101,
  },
  {
    id: 'live-home-what-are-glp1-gip',
    question: 'What are GLP-1 and GIP/GLP-1 medications, and how do they support weight loss?',
    answer:
      'GLP-1/GIP medications — AKA semaglutide and tirzepatide — mimic naturally occurring hormones that help regulate blood sugar, reduce appetite, and increase fullness. They work with your body’s own rhythm to support healthy, sustainable weight loss. At Nutree Clinic, your provider personalizes each plan to ensure it’s safe, effective, and aligned with your goals.',
    category: 'glp1',
    pages: ['/'],
    active: true,
    order: 102,
  },
  {
    id: 'live-home-approach-different',
    question: 'What makes Nutree Clinic’s approach different?',
    answer:
      'Unlike many online programs, every Nutree patient meets face-to-face with a licensed provider. Your medication, dosage, and follow-up are fully personalized — combining medical expertise with continuous, compassionate support.',
    category: 'general',
    pages: ['/'],
    active: true,
    order: 103,
  },
  {
    id: 'live-home-where-available',
    question: 'Where are Nutree Clinic’s telehealth services available?',
    answer:
      'Nutree Clinic provides telehealth services in accordance with state licensure and applicable regulations. At this time, our medical services are available to patients located in Florida, and are delivered by Florida-licensed clinicians. As we continue to grow, additional states may be added. Any updates to service availability will be reflected on our website.',
    category: 'general',
    pages: ['/'],
    active: true,
    order: 104,
  },
  {
    id: 'live-home-eligibility',
    question: 'How do you determine eligibility for telehealth services?',
    answer:
      'Eligibility for telehealth services is based on several factors, including clinical appropriateness, medical history, and the patient’s physical location at the time of the virtual visit. Currently, patients must be located in Florida during their consultation in order to receive care through Nutree Clinic. This ensures that all services are provided safely, ethically, and in compliance with telemedicine regulations.',
    category: 'general',
    pages: ['/'],
    active: true,
    order: 105,
  },
  {
    id: 'live-home-side-effects',
    question: 'What side effects can occur with weight loss medications?',
    answer:
      'Side effects vary from person to person and are often mild as the body adjusts to treatment. Common side effects are usually limited to nausea and other gastrointestinal symptoms. In some cases, side effects can be more severe and should be discussed with a medical provider immediately. Your Nutree Clinic provider tailors your dosing and follows up to ensure a safe, comfortable, and balanced experience throughout your journey.',
    category: 'glp1',
    pages: ['/'],
    active: true,
    order: 106,
  },
  {
    id: 'live-home-is-medication-safe',
    question: 'Is the medication safe?',
    answer:
      'Yes, when prescribed and monitored appropriately. GLP-1s have been extensively studied and are FDA-approved for weight management. Some patients may experience mild, temporary side effects such as nausea or changes in digestion. Your Nutree clinician will guide dosing carefully and support you through every stage of treatment.',
    category: 'glp1',
    pages: ['/'],
    active: true,
    order: 107,
  },
  {
    id: 'live-home-insurance-required',
    question: 'Is insurance required?',
    answer:
      'No, insurance isn’t required to begin care with Nutree Clinic. Some medications may be eligible for insurance reimbursement, and we’ll help you explore those options if applicable.',
    category: 'billing',
    pages: ['/'],
    active: true,
    order: 108,
  },

  // ── Restored from live Umso site — NAD+ page FAQ (/nad+) ────────────────────
  {
    id: 'live-nad-what-are-injections',
    question: 'What are NAD+ injections?',
    answer:
      'NAD+ injections are a treatment approach that delivers NAD+ (nicotinamide adenine dinucleotide), a coenzyme naturally found in every cell of the body. At Nutree Clinic, NAD+ therapy is designed to support cellular energy, mental clarity, recovery, and overall wellness through a personalized, clinician-guided protocol.',
    category: 'nad',
    pages: ['/nad', '/nad+'],
    active: true,
    order: 140,
  },
  {
    id: 'live-nad-why-important',
    question: 'Why is NAD+ important?',
    answer:
      'NAD+ plays an important role in cellular energy production, repair, and brain function. NAD+ levels can decline with age, stress, poor sleep, and other lifestyle factors. For some patients, provider-guided NAD+ support may be part of a broader plan to improve energy, focus, and resilience.',
    category: 'nad',
    pages: ['/nad', '/nad+'],
    active: true,
    order: 141,
  },
  {
    id: 'live-nad-help-support',
    question: 'What can NAD+ injections help support?',
    answer:
      'NAD+ injections are commonly used in wellness protocols to support energy, mental clarity, focus, recovery, and healthy aging. Every patient is different, so your provider will assess whether this approach makes sense for your goals, symptoms, and medical history.',
    category: 'nad',
    pages: ['/nad', '/nad+'],
    active: true,
    order: 142,
  },
  {
    id: 'live-nad-vs-oral',
    question: 'How are NAD+ injections different from oral supplements?',
    answer:
      'NAD+ injections deliver NAD+ directly through an injectable format rather than a pill or capsule. Many patients are interested in injections because they are often used as a more direct way to support NAD+ levels as part of a structured wellness plan supervised by a licensed provider.',
    category: 'nad',
    pages: ['/nad', '/nad+'],
    active: true,
    order: 143,
  },
  {
    id: 'live-nad-how-often',
    question: 'How often do I take it?',
    answer:
      'Your dosing schedule depends on your individualized plan. Some NAD+ protocols are used multiple times per week, and your Nutree Clinic provider will guide your dose, frequency, and any adjustments over time based on how your body responds.',
    category: 'nad',
    pages: ['/nad', '/nad+'],
    active: true,
    order: 144,
  },
  {
    id: 'live-nad-experience',
    question: 'What kind of experience can I expect?',
    answer:
      'Every patient responds differently. Many people exploring NAD+ are looking for support with low energy, brain fog, or recovery. Nutree’s approach is focused on thoughtful dosing, close follow-up, and a plan that feels realistic and sustainable in everyday life.',
    category: 'nad',
    pages: ['/nad', '/nad+'],
    active: true,
    order: 145,
  },

  // ── Restored from live Umso site — Sermorelin page FAQ ──────────────────────
  {
    id: 'live-ser-what-is',
    question: 'What is Sermorelin therapy?',
    answer:
      'Sermorelin is a peptide therapy designed to support the body’s natural growth hormone signaling. Instead of replacing growth hormone directly, Sermorelin helps encourage your body’s own natural release patterns. At Nutree Clinic, Sermorelin is prescribed only when clinically appropriate and is guided by a licensed provider.',
    category: 'sermorelin',
    pages: ['/sermorelin'],
    active: true,
    order: 150,
  },
  {
    id: 'live-ser-help-support',
    question: 'What can Sermorelin help support?',
    answer:
      'Sermorelin is often used in wellness protocols to support sleep quality, recovery, energy, lean muscle maintenance, body composition, and healthy aging. Every patient is different, so your provider will review your goals, health history, and eligibility before recommending a plan.',
    category: 'sermorelin',
    pages: ['/sermorelin'],
    active: true,
    order: 151,
  },
  {
    id: 'live-ser-how-works',
    question: 'How does Sermorelin work?',
    answer:
      'Sermorelin works by stimulating the pituitary gland to release more of the body’s own growth hormone. Growth hormone signaling plays a role in repair, recovery, metabolism, sleep, and body composition. Nutree Clinic uses a personalized approach so dosing and follow-up can be adjusted based on your response.',
    category: 'sermorelin',
    pages: ['/sermorelin'],
    active: true,
    order: 152,
  },
  {
    id: 'live-ser-same-as-gh',
    question: 'Is Sermorelin the same as growth hormone?',
    answer:
      'No. Sermorelin is not the same as taking growth hormone directly. It is a peptide that encourages your body to produce and release its own growth hormone more naturally. This is one reason it is often discussed as a more physiologic, clinician-guided option for patients who may be appropriate candidates.',
    category: 'sermorelin',
    pages: ['/sermorelin'],
    active: true,
    order: 153,
  },
  {
    id: 'live-ser-how-often',
    question: 'How often do I take Sermorelin?',
    answer:
      'Your dosing schedule depends on your personalized treatment plan. Sermorelin is commonly used as an injection taken several times per week, often in the evening, but your Nutree Clinic provider will guide your dose, timing, frequency, and any adjustments over time.',
    category: 'sermorelin',
    pages: ['/sermorelin'],
    active: true,
    order: 154,
  },
  {
    id: 'live-ser-experience',
    question: 'What kind of experience can I expect?',
    answer:
      'Response varies from person to person. Some patients explore Sermorelin because they want support with sleep, recovery, energy, strength, or body composition. Nutree’s approach focuses on thoughtful dosing, realistic expectations, and ongoing follow-up so your plan can evolve with your needs.',
    category: 'sermorelin',
    pages: ['/sermorelin'],
    active: true,
    order: 155,
  },

  // ── Restored from live Umso site — Oxytocin page FAQ ────────────────────────
  {
    id: 'live-oxy-what-is',
    question: 'What is oxytocin nasal spray?',
    answer:
      'Oxytocin is a hormone naturally produced by the body and involved in bonding, trust, emotional regulation, and the response to stress. Prescription oxytocin nasal spray delivers a measured dose through the nasal passages as part of a personalized treatment plan guided by a licensed clinician.',
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 170,
  },
  {
    id: 'live-oxy-help-support',
    question: 'What may oxytocin therapy help support?',
    answer:
      'Oxytocin therapy may be considered for adults seeking support with emotional balance, everyday stress, relaxation, social comfort, and a greater sense of closeness or connection. Individual responses vary, and treatment is not intended to replace mental health care or other medically necessary treatment.',
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 171,
  },
  {
    id: 'live-oxy-how-works',
    question: 'How does oxytocin nasal spray work?',
    answer:
      'The nasal spray delivers oxytocin through the nasal passages in a convenient, needle-free format. Oxytocin interacts with pathways involved in stress response, emotional processing, bonding, and social signaling. Your clinician will determine whether treatment is appropriate and provide instructions based on your individual plan.',
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 172,
  },
  {
    id: 'live-oxy-fda',
    question: 'Is oxytocin therapy FDA-approved?',
    answer:
      'Oxytocin is an FDA-approved medication for certain obstetric uses. However, prescribing oxytocin to support mood, stress response, connection, or general wellness is an off-label use. Off-label prescribing is permitted when a licensed clinician determines that it may be medically appropriate for an individual patient.',
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 173,
  },
  {
    id: 'live-oxy-who-may-consider',
    question: 'Who may consider oxytocin therapy?',
    answer:
      'Oxytocin therapy may be considered by adults looking for clinician-guided support for emotional well-being, stress recovery, relaxation, or social connection. It is not appropriate for everyone. Your clinician will review your medical history, medications, symptoms, and goals before determining whether you qualify.',
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 174,
  },
  {
    id: 'live-oxy-how-often',
    question: 'How often do I use oxytocin nasal spray?',
    answer:
      'Your dose and schedule will depend on your personalized treatment plan. Oxytocin may be prescribed for regular or situational use depending on your needs and clinical evaluation. Follow your prescription instructions carefully, and do not change the dose or frequency without speaking with your clinician.',
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 175,
  },
  {
    id: 'live-oxy-experience',
    question: 'What kind of experience can I expect?',
    answer:
      'Experiences differ from person to person. Some patients explore oxytocin therapy to support a greater sense of calm, emotional balance, or connection. Changes may be subtle, and results are not guaranteed. Nutree Clinic focuses on appropriate dosing, realistic expectations, and ongoing clinician support.',
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 176,
  },
  {
    id: 'live-oxy-side-effects',
    question: 'Are there possible side effects?',
    answer:
      'As with any prescription medication, side effects are possible. Depending on the individual, these may include nasal irritation, headache, nausea, dizziness, fatigue, or changes in mood. Your clinician will review potential risks, medication interactions, and precautions before prescribing treatment. Contact your provider if you experience concerning symptoms.',
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 177,
  },
  {
    id: 'live-oxy-camera',
    question: 'Do I have to go on camera for my consultation?',
    answer:
      'Not necessarily. We want your consultation to feel comfortable and personal. Depending on clinical and state requirements, your consultation may be completed by video or phone. Our team will let you know what is required before your appointment.',
    category: 'clinical',
    pages: ['/oxytocin'],
    active: true,
    order: 178,
  },
  {
    id: 'live-oxy-medication-quality',
    question: 'How do you ensure medication quality?',
    answer:
      'Every prescription is ordered by a licensed clinician and prepared by a carefully selected, state-licensed U.S. compounding pharmacy. Compounded medications are prepared according to applicable pharmacy standards and require an individual prescription. Compounded oxytocin formulations are not FDA-approved and may differ from commercially manufactured medications.',
    category: 'clinical',
    pages: ['/oxytocin'],
    active: true,
    order: 179,
  },
  {
    id: 'live-oxy-privacy',
    question: 'Is my information kept private?',
    answer:
      'Yes. Nutree Clinic uses secure systems designed to protect your personal and medical information. Your intake, consultation, treatment plan, and communication with your care team are handled in accordance with applicable privacy and healthcare requirements.',
    category: 'general',
    pages: ['/oxytocin'],
    active: true,
    order: 180,
  },

  // ── Restored from live Umso site — shared by NAD+ and Sermorelin pages ──────
  {
    id: 'live-camera-shy',
    question: 'Do I have to go on camera for my consultation?',
    answer:
      'Not at all. While we love connecting with our patients, we want you to feel comfortable. If you’re camera-shy, we can complete your medical consultation over the phone instead of video.',
    category: 'clinical',
    pages: ['/nad', '/nad+', '/sermorelin'],
    active: true,
    order: 190,
  },
  {
    id: 'live-medication-quality',
    question: 'How do you ensure medication quality?',
    answer:
      'We work with carefully selected Licensed 503(A) U.S. pharmacies that follow strict quality and safety standards. Every prescription is ordered by your licensed clinician and prepared according to regulated sterile compounding requirements.',
    category: 'clinical',
    pages: ['/nad', '/nad+', '/sermorelin'],
    active: true,
    order: 191,
  },
  {
    id: 'live-data-safe',
    question: 'Is my data safe?',
    answer:
      'Yes. Nutree Clinic is 100% HIPAA-compliant, and your medical journey is kept private and secure.',
    category: 'general',
    pages: ['/nad', '/nad+', '/sermorelin'],
    active: true,
    order: 192,
  },
]
