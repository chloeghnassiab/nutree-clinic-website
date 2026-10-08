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
      'A licensed Nutree clinician reviews your intake and health history. Depending on your treatment and Florida rules, a video or phone visit may be required before anything is prescribed. A prescription is issued only if your clinician determines treatment is appropriate. You can also message your care team 7 days a week through your patient portal.',
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
    pages: ['/weight-loss', '/glp-1', '/faq', '/glp-1microdosing'],
    active: true,
    order: 3,
  },

  // ── General ────────────────────────────────────────────────────────────────
  {
    id: 'how-it-works',
    question: 'How does Nutree Clinic work?',
    answer:
      'Complete a short health questionnaire. A licensed Nutree clinician reviews your intake; a video or phone visit may be required depending on your treatment and Florida rules. If your clinician determines treatment is appropriate and prescribes it, your medication is shipped free to your door from a state-licensed 503A pharmacy. You can message your care team 7 days a week throughout your plan. Nutree Clinic is not for emergencies — call 911.',
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
      'Nutree treatment plans are self-pay and are generally eligible for FSA and HSA reimbursement, but eligibility is decided by your plan administrator. Use your card at checkout or request a receipt for reimbursement.',
    category: 'billing',
    pages: ['/', '/faq', '/pricing', '/weight-loss', '/glp-1', '/nad', '/sermorelin', '/glutathione', '/oxytocin', '/b12', '/glp-1microdosing'],
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
      'No. Your plan price includes your medication, provider consultation, and free shipping, and it is shown before you start. If your dose or medication changes in a way that affects your price, your care team will tell you before you are charged.',
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
      'All Nutree GLP-1 plans include your medication, provider consultation, dosing supplies, and free shipping. No hidden fees — if a dose change affects your plan price, your care team will tell you before you are charged.',
    category: 'glp1',
    pages: ['/weight-loss', '/faq'],
    active: true,
    order: 30,
  },
  {
    id: 'glp1-sema-vs-tirz',
    question: 'What is the difference between Compounded Semaglutide and Compounded Tirzepatide?',
    answer:
      'Semaglutide is a GLP-1 receptor agonist. Tirzepatide activates both GLP-1 and GIP receptors. In separate clinical trials of the FDA-approved brand-name medications, average weight loss was about 21% with tirzepatide (Zepbound®, SURMOUNT-1) and about 15% with semaglutide (Wegovy®, STEP-1); compounded preparations were not studied in those trials, and individual results vary. Your Nutree clinician will advise which, if either, is appropriate for your health profile.',
    category: 'glp1',
    pages: ['/weight-loss', '/faq', '/glp-1'],
    active: true,
    order: 31,
  },
  {
    id: 'glp1-side-effects',
    question: 'What side effects should I be aware of?',
    answer:
      'Common side effects include nausea, vomiting, diarrhea, constipation, and stomach discomfort, especially when starting or increasing a dose; they often ease as dosing is increased gradually. Serious but less common risks include pancreatitis, gallbladder problems, low blood sugar, kidney problems from dehydration, serious allergic reactions, and a boxed warning about thyroid C-cell tumors. Read the full Important Safety Information on our GLP-1 treatment pages and contact your provider about any concerning symptoms — call 911 in an emergency.',
    category: 'glp1',
    pages: ['/weight-loss', '/faq', '/glp-1'],
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
      'Lower doses generally produce more gradual results, and microdosing has not been studied in the large clinical trials of semaglutide or tirzepatide. For some patients with less weight to lose or who are sensitive to side effects, a clinician may consider it more appropriate. Your Nutree provider will advise which approach, if any, is right for you.',
    category: 'glp1',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida'],
    active: true,
    order: 34,
  },
  {
    id: 'microdose-switch',
    question: 'Can I switch to a standard plan after microdosing?',
    answer:
      'Yes. Many patients complete a microdosing programme and then transition to a monthly plan. Your clinician will guide this transition based on your response and goals.',
    category: 'glp1',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida'],
    active: true,
    order: 35,
  },
  {
    id: 'microdose-renewal',
    question: 'Is there an auto-renewal?',
    answer:
      'No. Microdosing programmes are fixed-term — 5 or 10 weeks, billed upfront. There is no automatic renewal. You can choose to continue or not at the end of the programme.',
    category: 'billing',
    pages: ['/glp-1microdosing'],
    active: true,
    order: 36,
  },

  // ── GLP-1 microdosing (from live /glp-1microdosing + Florida pages) ────────
  // '/glp-1microdosing/florida/*' = every Florida city page.
  {
    id: 'micro-available-florida',
    question: 'Is GLP-1 microdosing available in Florida?',
    answer:
      'Yes. We\'re a 100% telehealth practice serving all of Florida through U.S.-licensed clinicians authorized to treat patients in the state.',
    category: 'glp1',
    pages: ['/glp-1microdosing/florida'],
    active: true,
    order: 0.05,
  },
  {
    id: 'micro-what-is',
    question: 'What is GLP-1 microdosing?',
    answer:
      'GLP-1 microdosing is a low-dose treatment approach that uses semaglutide or tirzepatide in smaller, carefully guided amounts. At Nutree Clinic, this protocol is designed to support appetite regulation, metabolic balance, and a more manageable treatment experience.',
    category: 'glp1',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida', '/glp-1microdosing/florida/*'],
    active: true,
    order: 0.1,
  },
  {
    id: 'micro-same-as-brand',
    question: 'Is this the same as Ozempic® or Mounjaro®?',
    answer:
      'No. It uses the same active ingredient as Ozempic® (semaglutide) or Mounjaro® (tirzepatide), but it is a different product: it is prepared by a state-licensed 503A compounding pharmacy for an individual prescription, at doses your provider selects. Compounded medications are not FDA-approved, the FDA does not review them for safety, effectiveness, or quality, and they are not generic versions of brand-name drugs. Ozempic® is a registered trademark of Novo Nordisk A/S; Mounjaro® is a registered trademark of Eli Lilly and Company. Nutree Clinic is not affiliated with either company.',
    category: 'glp1',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida', '/glp-1microdosing/florida/*'],
    active: true,
    order: 0.2,
  },
  {
    id: 'micro-appetite',
    question: 'How does it help me control my appetite?',
    answer:
      'Semaglutide and tirzepatide work by mimicking naturally occurring hormones involved in appetite and fullness. For many patients this helps reduce "food noise," improve satiety, and make eating patterns easier to manage.',
    category: 'glp1',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida', '/glp-1microdosing/florida/*'],
    active: true,
    order: 0.3,
  },
  {
    id: 'micro-vs-standard',
    question: 'How is microdosing different from standard GLP-1 treatment?',
    answer:
      'Standard GLP-1 treatment follows higher-dose protocols. Microdosing uses lower doses. The goal is to create a gentler experience while still supporting metabolic health and appetite regulation.',
    category: 'glp1',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida', '/glp-1microdosing/florida/*'],
    active: true,
    order: 0.4,
  },
  {
    id: 'micro-frequency',
    question: 'How often do I take it?',
    answer:
      'Microdosing is typically taken once weekly. Your Nutree Clinic provider will guide your dose and timing and may adjust your plan over time depending on how your body responds.',
    category: 'glp1',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida', '/glp-1microdosing/florida/*'],
    active: true,
    order: 0.5,
  },
  {
    id: 'micro-shipping-speed',
    question: 'How fast can I get my medication?',
    answer:
      'After your consultation, once your clinician approves your plan, many patients receive their medication as early as the day after their consultation, shipped discreetly to your home.',
    category: 'glp1',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida'],
    active: true,
    order: 0.55,
  },
  {
    id: 'micro-experience',
    question: 'What kind of experience can I expect?',
    answer:
      'Every patient responds differently, but many people are looking for a steadier and more manageable approach than traditional higher-dose protocols. Nutree\'s focus is thoughtful dosing, close follow-up, and care that feels sustainable in real life. Side effects can still occur at lower doses.',
    category: 'glp1',
    pages: ['/glp-1microdosing'],
    active: true,
    order: 0.6,
  },
  {
    id: 'micro-camera',
    question: 'Do I have to go on camera for my consultation?',
    answer:
      'Not necessarily. A licensed provider reviews your intake, and a video or phone visit may be required depending on your treatment and Florida rules. If a visit is needed and you would rather not be on camera, ask our team whether a phone visit is an option for you.',
    category: 'clinical',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida', '/glp-1microdosing/florida/*'],
    active: true,
    order: 0.7,
  },
  {
    id: 'micro-quality',
    question: 'How do you ensure medication quality?',
    answer:
      'We work with carefully selected state-licensed 503A U.S. compounding pharmacies. Every prescription is ordered by your licensed clinician and prepared according to applicable sterile compounding requirements. Compounded medications are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality.',
    category: 'clinical',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida', '/glp-1microdosing/florida/*'],
    active: true,
    order: 0.8,
  },
  {
    id: 'micro-data-safe',
    question: 'Is my data safe?',
    answer:
      'Yes. Nutree Clinic follows HIPAA requirements and uses secure systems to keep your health information private.',
    category: 'general',
    pages: ['/glp-1microdosing', '/glp-1microdosing/florida', '/glp-1microdosing/florida/*'],
    active: true,
    order: 0.9,
  },

  // ── GLP-1 explainer (/glp-1) ───────────────────────────────────────────────
  {
    id: 'glp1-what-is',
    question: 'What is a GLP-1?',
    answer:
      'GLP-1 (glucagon-like peptide-1) is a hormone your gut releases after you eat. It signals fullness to the brain, slows how quickly the stomach empties, and helps the pancreas release insulin when blood sugar rises. GLP-1 medications such as semaglutide mimic this hormone but last much longer in the body, which is why they are taken once a week.',
    category: 'glp1',
    pages: ['/glp-1'],
    active: true,
    order: 0.1,
  },
  {
    id: 'glp1-compounded-vs-brand',
    question: 'Are compounded semaglutide and tirzepatide the same as Ozempic® and Mounjaro®?',
    answer:
      'No. They use the same active ingredients — semaglutide (the ingredient in Ozempic® and Wegovy®) and tirzepatide (the ingredient in Mounjaro® and Zepbound®) — but they are different products, prepared by state-licensed 503A compounding pharmacies for an individual prescription. Compounded medications are not FDA-approved, the FDA does not review them for safety, effectiveness, or quality, and they are not generic versions of these brands. Nutree Clinic is not affiliated with Novo Nordisk or Eli Lilly.',
    category: 'glp1',
    pages: ['/glp-1'],
    active: true,
    order: 0.2,
  },
  {
    id: 'glp1-who-qualifies',
    question: 'Who qualifies for GLP-1 weight-loss treatment?',
    answer:
      'GLP-1 medications are generally considered for adults with a BMI of 30 or higher, or 27 or higher with a weight-related condition such as high blood pressure, prediabetes, or high cholesterol. Nutree currently treats adults who live in Florida. Your clinician reviews your full health history before deciding whether treatment is appropriate — eligibility is never guaranteed.',
    category: 'glp1',
    pages: ['/glp-1'],
    active: true,
    order: 0.3,
  },
  {
    id: 'glp1-not-for',
    question: 'Who should not take semaglutide or tirzepatide?',
    answer:
      'These medications are not appropriate if you or a family member have had medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2 (MEN2), if you are pregnant, planning a pregnancy or breastfeeding, or if you have had a serious allergic reaction to either medication. A history of pancreatitis, gallbladder disease, kidney problems or diabetic eye disease needs careful review. Your clinician screens for all of this during your intake.',
    category: 'glp1',
    pages: ['/glp-1'],
    active: true,
    order: 0.4,
  },
  {
    id: 'glp1-how-long',
    question: 'How long does it take to see results?',
    answer:
      'Doses are increased gradually, so changes in appetite are often noticed in the first few weeks while weight change tends to build over several months. In clinical trials of the brand-name medications, average weight loss was measured over 68–72 weeks. Individual results vary and depend on dose, nutrition, activity and other factors.',
    category: 'glp1',
    pages: ['/glp-1'],
    active: true,
    order: 0.5,
  },
  {
    id: 'glp1-microdosing-option',
    question: 'Is there a lower-dose option?',
    answer:
      'Yes. GLP-1 microdosing uses a low weekly dose of semaglutide or tirzepatide with a gentler start. Some patients find it easier to tolerate, although side effects can still occur. Your clinician will help you decide between microdosing and a standard weight-loss plan.',
    category: 'glp1',
    pages: ['/glp-1'],
    active: true,
    order: 0.6,
  },

  // ── NAD+ ───────────────────────────────────────────────────────────────────
  {
    id: 'nad-delivery-form',
    question: 'Which NAD+ delivery form is right for me?',
    answer:
      'Injections deliver NAD+ without relying on digestion, nasal spray is needle-free, and patches with GHK-Cu deliver slowly through the skin. Evidence comparing these forms head-to-head is limited. Your clinician recommends the most appropriate form based on your goals and health profile.',
    category: 'nad',
    pages: ['/nad', '/faq'],
    active: true,
    order: 40,
  },
  {
    id: 'nad-ghk-cu',
    question: 'What is GHK-Cu?',
    answer:
      'GHK-Cu (copper tripeptide-1) is a naturally occurring peptide that declines with age, studied mainly in laboratory and skin-care research for its role in collagen synthesis and tissue repair. GHK-Cu is not FDA-approved, and its benefits when combined with NAD+ have not been established in clinical trials.',
    category: 'nad',
    pages: ['/nad'],
    active: true,
    order: 41,
  },
  {
    id: 'nad-results-timeline',
    question: 'How long before I notice results from NAD+?',
    answer:
      'There is no reliable timeline. Responses to NAD+ vary widely, and some patients notice no change at all. Human research on NAD+ therapy is still limited, and longevity benefits have not been demonstrated in people. Your clinician will check in on how you are doing and help you decide whether to continue.',
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
      "Synthetic HGH replaces your growth hormone directly, bypassing your body's natural regulation. Sermorelin instead signals the gland in your brain that controls growth hormone production to release more of your own — keeping your body's natural feedback loops intact. Sermorelin is not interchangeable with growth hormone, and its effects in adults are generally milder and less well studied.",
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
      'No. A sermorelin product was previously FDA-approved, but it is no longer marketed in the U.S. Sermorelin prescribed today is compounded by state-licensed 503A pharmacies; compounded medications are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality. Use for sleep, recovery, body composition, or healthy aging is off-label. All prescriptions are issued at the sole clinical discretion of your licensed Nutree provider.',
    category: 'sermorelin',
    pages: ['/sermorelin', '/faq'],
    active: true,
    order: 52,
  },
  {
    id: 'ser-duration',
    question: 'How long should I take Sermorelin?',
    answer:
      'There is no fixed duration. Your clinician typically reviews your response over several months and decides with you whether to continue, adjust, or stop. The 10-week starter plan is a structured way to begin with a defined end date.',
    category: 'sermorelin',
    pages: ['/sermorelin'],
    active: true,
    order: 53,
  },
  {
    id: 'ser-results',
    question: 'How long before I see results from Sermorelin?',
    answer:
      'There is no guaranteed timeline, and some patients notice little change. Some report changes in sleep first; any changes in energy, recovery, or body composition tend to be gradual and depend on training, nutrition, and sleep habits. Your clinician will review your progress and help you decide whether to continue.',
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
    question: 'Can I use glutathione with GLP-1 therapy?',
    answer:
      'Some patients use glutathione alongside other treatments, but there is no clinical evidence that glutathione improves the results of GLP-1 medications. Your clinician will review all of your medications and advise whether glutathione is appropriate for you.',
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
      'It is the same molecule, at a very different dose and delivery method. FDA-approved obstetric use is by injection to cause or strengthen uterine contractions. Compounded nasal spray uses much smaller doses through the nose, and its use for stress or well-being is off-label with limited evidence. Because oxytocin can cause uterine contractions, it is not used during pregnancy.',
    category: 'oxytocin',
    pages: ['/oxytocin'],
    active: true,
    order: 70,
  },
  {
    id: 'oxy-anxiety',
    question: 'Is this a treatment for anxiety or depression?',
    answer:
      "No. Oxytocin at Nutree is prescribed off-label for stress and emotional well-being goals. It is not a treatment for anxiety, depression, or any psychiatric condition, and it is not a substitute for therapy or psychiatric medication. If you are experiencing a mental-health condition, your provider will advise accordingly. If you are in crisis, call or text 988; in an emergency, call 911.",
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
      'B12 (cobalamin) is involved in red blood cell formation, energy metabolism, and neurological function. B6 (pyridoxine) plays a key role in neurotransmitter synthesis and immune function. Because both are involved in energy metabolism and nerve function, they are often prescribed together.',
    category: 'b12',
    pages: ['/b12'],
    active: true,
    order: 80,
  },
  {
    id: 'b12-results',
    question: 'How quickly will I notice results from B12?',
    answer:
      'It depends on whether you are low in B12. In people with a deficiency, injections raise B12 levels quickly and symptoms may improve over the following weeks; oral forms usually work more gradually. People with normal B12 levels may notice little difference. Your clinician may recommend labs to check your levels.',
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
      'Every body responds differently. Some patients notice early progress within a few weeks, while others see a more gradual change over time. At Nutree Clinic, we focus on steady progress — not quick fixes — and adjust your plan along the way. Individual results vary and are not guaranteed.',
    category: 'glp1',
    pages: ['/'],
    active: true,
    order: 100,
  },
  {
    id: 'live-home-good-candidate',
    question: 'Who is a good candidate for medical weight loss treatment?',
    answer:
      'These medications may be suitable for adults seeking a medically guided approach to weight management or improved metabolic health. During your review, your Nutree Clinic provider will look at your health history to determine whether treatment is appropriate and which plan fits you. A video or phone visit may be required depending on your treatment and Florida rules.',
    category: 'glp1',
    pages: ['/'],
    active: true,
    order: 101,
  },
  {
    id: 'live-home-what-are-glp1-gip',
    question: 'What are GLP-1 and GIP/GLP-1 medications, and how do they support weight loss?',
    answer:
      'GLP-1/GIP medications — AKA semaglutide and tirzepatide — mimic naturally occurring hormones that help regulate blood sugar, reduce appetite, and increase fullness. Combined with nutrition and activity changes, they may support weight loss. At Nutree Clinic, your provider personalizes each plan, monitors for side effects, and prescribes only if treatment is appropriate.',
    category: 'glp1',
    pages: ['/'],
    active: true,
    order: 102,
  },
  {
    id: 'live-home-approach-different',
    question: 'What makes Nutree Clinic’s approach different?',
    answer:
      'Your care is led by licensed providers. A provider reviews every intake — a video or phone visit may be required depending on your treatment and Florida rules — and your medication, dosage, and follow-up are personalized, with ongoing support from your care team.',
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
      'Side effects vary from person to person. The most common are nausea, vomiting, diarrhea, constipation, and other stomach symptoms, especially when starting or increasing a dose. Less common but serious risks include pancreatitis, gallbladder problems, low blood sugar, kidney problems, serious allergic reactions, and a boxed warning about thyroid C-cell tumors. Contact your provider right away about severe or concerning symptoms, and call 911 in an emergency. Your Nutree Clinic provider tailors your dosing and follows up throughout treatment.',
    category: 'glp1',
    pages: ['/'],
    active: true,
    order: 106,
  },
  {
    id: 'live-home-is-medication-safe',
    question: 'Is the medication safe?',
    answer:
      'GLP-1 medications have been studied extensively, and certain brand-name products (Wegovy® and Zepbound®) are FDA-approved for chronic weight management. Compounded semaglutide and tirzepatide are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality. All GLP-1 medications carry risks — including a boxed warning about thyroid C-cell tumors — so your clinician screens your health history before prescribing and monitors you during treatment. See our Important Safety Information for details.',
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
      'NAD+ plays an important role in cellular energy production, repair, and brain function. NAD+ levels can decline with age, stress, poor sleep, and other lifestyle factors. For some patients, provider-guided NAD+ therapy may be part of a broader plan aimed at energy, focus, and resilience goals, although human evidence is still limited.',
    category: 'nad',
    pages: ['/nad', '/nad+'],
    active: true,
    order: 141,
  },
  {
    id: 'live-nad-help-support',
    question: 'What can NAD+ injections help support?',
    answer:
      'NAD+ injections are used off-label in wellness protocols for goals such as energy, mental clarity, focus, recovery, and healthy aging; evidence for these uses is limited. Every patient is different, so your provider will assess whether this approach makes sense for your goals, symptoms, and medical history.',
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
      'Sermorelin is used off-label in wellness protocols for goals such as sleep quality, recovery, energy, lean muscle maintenance, body composition, and healthy aging; evidence for these uses in adults is limited. Every patient is different, so your provider will review your goals, health history, and eligibility before recommending a plan.',
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
      'Not necessarily. A licensed provider reviews your intake, and a video or phone visit may be required depending on your treatment and Florida rules. If a visit is needed and you would rather not be on camera, ask our team whether a phone visit is an option for you.',
    category: 'clinical',
    pages: ['/nad', '/nad+', '/sermorelin'],
    active: true,
    order: 190,
  },
  {
    id: 'live-medication-quality',
    question: 'How do you ensure medication quality?',
    answer:
      'We work with carefully selected state-licensed 503A U.S. compounding pharmacies. Every prescription is ordered by your licensed clinician and prepared according to applicable sterile compounding requirements. Compounded medications are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality.',
    category: 'clinical',
    pages: ['/nad', '/nad+', '/sermorelin'],
    active: true,
    order: 191,
  },
  {
    id: 'live-data-safe',
    question: 'Is my data safe?',
    answer:
      'Yes. Nutree Clinic follows HIPAA requirements and uses secure systems to keep your health information private.',
    category: 'general',
    pages: ['/nad', '/nad+', '/sermorelin'],
    active: true,
    order: 192,
  },
]
