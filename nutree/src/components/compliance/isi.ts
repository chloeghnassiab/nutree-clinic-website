// ─── IMPORTANT SAFETY INFORMATION — CONTENT ──────────────────────────────────
// One entry per drug class. Structure mirrors industry ISI pages (Eden, Ro):
// regulatory status → boxed warning → who should not use → serious warnings →
// common side effects → interactions → pregnancy. GLP-1 content follows the
// FDA-approved labeling for semaglutide (Wegovy®/Ozempic®) and tirzepatide
// (Zepbound®/Mounjaro®). Have the Medical Director re-review this file whenever
// a label changes or a new treatment is added.

export type IsiDrug = 'glp1' | 'sermorelin' | 'nad' | 'oxytocin' | 'b12' | 'glutathione'

export type IsiContent = {
  title: string
  status: string[]
  boxed?: { heading: string; body: string }
  doNotUse: string[]
  warnings: string[]
  common: string
  interactions?: string[]
  pregnancy?: string
}

export const ISI: Record<IsiDrug, IsiContent> = {
  glp1: {
    title: 'Compounded semaglutide and compounded tirzepatide (including microdosing)',
    status: [
      'Compounded semaglutide and compounded tirzepatide are not FDA-approved. The FDA does not review compounded drugs for safety, effectiveness, or quality. They are not the same as, and are not generic versions of, Ozempic®, Wegovy®, Mounjaro®, or Zepbound®.',
      'The safety information below is based on the FDA-approved labeling for semaglutide and tirzepatide products and applies at every dose, including lower “microdosing” doses.',
    ],
    boxed: {
      heading: 'WARNING: Risk of thyroid C-cell tumors',
      body: 'In studies in rodents, semaglutide and tirzepatide caused thyroid C-cell tumors, including medullary thyroid carcinoma (MTC). It is not known whether they cause these tumors in people. Do not use these medications if you or any family member has ever had MTC, or if you have Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Tell your provider right away if you notice a lump or swelling in your neck, hoarseness, trouble swallowing, or shortness of breath.',
    },
    doNotUse: [
      'You or a family member have had medullary thyroid carcinoma (MTC), or you have MEN 2',
      'You have had a serious allergic reaction to semaglutide, tirzepatide, or any ingredient in the medication',
      'You are pregnant or planning to become pregnant',
    ],
    warnings: [
      'Inflammation of the pancreas (pancreatitis): stop the medication and get medical help right away for severe stomach pain that will not go away, with or without vomiting; the pain may spread to your back.',
      'Gallbladder problems, including gallstones: symptoms can include pain in the upper stomach, fever, yellowing of the skin or eyes, or clay-colored stools.',
      'Low blood sugar (hypoglycemia), especially if you also take insulin or a sulfonylurea. Signs include dizziness, shakiness, sweating, confusion, fast heartbeat, and hunger.',
      'Kidney problems: vomiting and diarrhea can cause dehydration that may worsen kidney function. Drink enough fluids.',
      'Serious allergic reactions: get emergency help for swelling of the face, lips, tongue, or throat, trouble breathing or swallowing, severe rash, fainting, or a very rapid heartbeat.',
      'Changes in vision in people with type 2 diabetes (diabetic retinopathy complications).',
      'Increased heart rate at rest.',
      'Depression or thoughts of suicide: watch for new or worsening mood changes and tell your provider right away.',
      'Severe stomach problems: not recommended if you have severe gastrointestinal disease, including severe gastroparesis.',
      'Food or liquid getting into the lungs during surgery or procedures that use anesthesia or deep sedation: tell every provider who treats you that you take a GLP-1 medication before any procedure.',
      'Dosing errors: compounded injections are drawn from a vial with a syringe. Follow your dosing instructions exactly, ask before changing a dose, and do not use medication that arrives warm, looks cloudy, or is past the discard date your pharmacy gives you.',
    ],
    common:
      'Nausea, vomiting, diarrhea, constipation, stomach pain, indigestion, heartburn, burping, decreased appetite, headache, tiredness, dizziness, and injection-site reactions. Gastrointestinal side effects are most common when starting or increasing a dose.',
    interactions: [
      'These medications slow stomach emptying and may change how other oral medicines are absorbed.',
      'Tirzepatide may make birth control pills less effective. Use a non-oral method, or add a barrier method, for 4 weeks after starting tirzepatide and for 4 weeks after each dose increase.',
      'Tell your provider about all prescription and over-the-counter medicines and supplements you take, especially insulin or sulfonylureas.',
    ],
    pregnancy:
      'Do not use during pregnancy. If you plan to become pregnant, talk with your provider; semaglutide labeling advises stopping at least 2 months before a planned pregnancy. Tell your provider if you are breastfeeding.',
  },

  sermorelin: {
    title: 'Compounded sermorelin',
    status: [
      'Sermorelin is a synthetic version of part of growth hormone–releasing hormone. A sermorelin product was previously FDA-approved, but it is no longer marketed in the U.S. Sermorelin prescribed through Nutree Clinic is compounded and is used off-label (for example, for sleep, recovery, or body-composition goals).',
      'Compounded medications are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality. Evidence for anti-aging, sleep, recovery, and body-composition benefits in adults is limited.',
    ],
    doNotUse: [
      'You are pregnant or breastfeeding',
      'You are allergic to sermorelin or any ingredient in the formulation (such as mannitol)',
      'You have active cancer or cancer that is not in remission',
    ],
    warnings: [
      'Tell your provider if you have a history of cancer, a pituitary tumor or other pituitary condition, diabetes or prediabetes, or a thyroid condition. Untreated hypothyroidism can reduce your response, and thyroid function may need to be checked first.',
      'Allergic reactions are possible. Get emergency help for swelling of the face or throat, trouble breathing, hives, or chest tightness.',
      'Stop the medication and contact your provider if you develop persistent headaches, vision changes, or other new symptoms.',
    ],
    common:
      'Injection-site pain, redness, swelling, or itching; headache; flushing; dizziness; nausea; and changes in sleep (drowsiness or trouble sleeping).',
    interactions: [
      'Glucocorticoids (steroids), thyroid medications, and some other medicines can affect your response to sermorelin. Tell your provider about everything you take.',
    ],
    pregnancy: 'Do not use if you are pregnant, may be pregnant, or are breastfeeding.',
  },

  nad: {
    title: 'Compounded NAD+ (injection, nasal spray, and patches with GHK-Cu)',
    status: [
      'NAD+ is not FDA-approved to diagnose, treat, cure, or prevent any disease. NAD+ formulations prescribed through Nutree Clinic are compounded and used off-label. GHK-Cu is not FDA-approved.',
      'Compounded medications are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality. Human clinical evidence for energy, cognitive, and healthy-aging benefits of NAD+ is limited and still emerging.',
    ],
    doNotUse: [
      'You are allergic to NAD+ or any ingredient in the formulation (including copper peptides, for patches with GHK-Cu)',
      'You are pregnant or breastfeeding (safety has not been established)',
    ],
    warnings: [
      'Tell your provider if you have active cancer or are receiving cancer treatment, an active infection, or an uncontrolled chronic medical condition.',
      'Injecting too quickly can increase flushing, chest tightness, nausea, or lightheadedness. Follow your administration instructions.',
      'Allergic reactions are possible. Get emergency help for swelling of the face or throat, trouble breathing, or hives.',
    ],
    common:
      'Injection: pain, redness, or soreness at the injection site, flushing, nausea, lightheadedness, headache, tiredness, and stomach cramping. Nasal spray: nasal dryness or irritation, sneezing, and headache. Patches: skin redness or irritation where the patch is applied.',
    pregnancy: 'Not recommended during pregnancy or breastfeeding because safety has not been established.',
  },

  oxytocin: {
    title: 'Compounded oxytocin nasal spray',
    status: [
      'Oxytocin is FDA-approved only as an injection for specific obstetric uses. There is no FDA-approved oxytocin nasal spray in the U.S. Compounded oxytocin nasal spray is prescribed off-label for goals such as stress, mood, or social connection, where research is limited and results have been mixed.',
      'Compounded medications are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality. Oxytocin nasal spray is not a treatment for anxiety, depression, or any other psychiatric condition and is not a substitute for mental-health care.',
    ],
    doNotUse: [
      'You are pregnant or could be pregnant — oxytocin can cause uterine contractions',
      'You are allergic to oxytocin or any ingredient in the spray',
    ],
    warnings: [
      'Water retention and low sodium (hyponatremia), especially with higher or more frequent doses. Get medical help for severe headache, confusion, nausea or vomiting, unusual drowsiness, or seizures.',
      'Tell your provider if you have heart disease, an irregular heartbeat, high or low blood pressure, kidney problems, or a seizure disorder.',
      'Use exactly as prescribed. Do not increase the dose or frequency on your own.',
    ],
    common: 'Nasal irritation or runny nose, headache, nausea, drowsiness, and dizziness.',
    interactions: [
      'Tell your provider about all medicines you take, especially medicines that affect sodium levels (such as some diuretics or antidepressants), heart rhythm, or blood pressure, and decongestants or other vasoconstrictors.',
    ],
    pregnancy: 'Do not use if you are pregnant or could be pregnant. Tell your provider if you are breastfeeding.',
  },

  b12: {
    title: 'Vitamin B12 and compounded B6/B12 injections',
    status: [
      'Cyanocobalamin (vitamin B12) injection is FDA-approved to treat vitamin B12 deficiency. Use for energy or general wellness in people without a deficiency is off-label, and evidence for that use is limited. Combination products (such as B6/B12 or MIC + B12) are compounded and are not FDA-approved; the FDA does not review compounded drugs for safety, effectiveness, or quality.',
    ],
    doNotUse: [
      'You are allergic to vitamin B12, cobalt, or any ingredient in the injection',
      'You have early Leber’s hereditary optic neuropathy (Leber’s disease) — B12 has been associated with rapid optic nerve damage in this condition',
    ],
    warnings: [
      'Rare but serious allergic reactions, including anaphylaxis, have been reported. Get emergency help for swelling, trouble breathing, or a severe rash.',
      'Low potassium can occur in the first days of treating severe B12-deficiency anemia; your provider may check your levels.',
      'B12 can hide the signs of folate deficiency, and may unmask a condition called polycythemia vera.',
      'Long-term use of high doses of vitamin B6 can cause nerve damage (numbness or tingling). Do not take extra B6 supplements without telling your provider.',
    ],
    common: 'Pain or redness at the injection site, mild diarrhea, itching, rash, and a feeling of swelling.',
    pregnancy: 'Tell your provider if you are pregnant or breastfeeding before starting injections.',
  },

  glutathione: {
    title: 'Compounded glutathione injections',
    status: [
      'Glutathione injection is not FDA-approved for antioxidant, “detox,” wellness, or skin-lightening uses. Glutathione prescribed through Nutree Clinic is compounded and used off-label, and human evidence for these uses is limited. The FDA has warned consumers about injectable products marketed for skin lightening.',
      'Compounded medications are not FDA-approved, and the FDA does not review them for safety, effectiveness, or quality.',
    ],
    doNotUse: [
      'You are allergic to glutathione or any ingredient in the formulation',
      'You are pregnant or breastfeeding (safety has not been established)',
    ],
    warnings: [
      'Rare allergic and anaphylactic reactions have been reported with injected glutathione. Get emergency help for swelling, trouble breathing, wheezing, or hives.',
      'People with asthma have had breathing problems (bronchospasm) with inhaled glutathione; tell your provider if you have asthma.',
      'Tell your provider if you have cancer or are receiving chemotherapy or radiation, because antioxidants may interact with cancer treatment.',
    ],
    common: 'Injection-site redness, pain, or swelling; headache; flushing; dizziness; and stomach upset.',
    pregnancy: 'Not recommended during pregnancy or breastfeeding because safety has not been established.',
  },
}
