// ─────────────────────────────────────────────────────────────────────────────
// Florida GLP-1 microdosing city pages
//
// Drives /glp-1microdosing/florida (hub) and /glp-1microdosing/florida/[city].
// Titles, H1 cities, local sections and neighborhood lists were captured from
// the live Umso pages (www.nutreeclinic.com) so URLs and keyword targeting are
// preserved when the domain moves. The sitemap imports FLORIDA_CITIES /
// FLORIDA_CITY_PATHS from here — add a city here and it gets a page + sitemap
// entry automatically.
//
// Nutree is telehealth-only: copy must never imply an in-person office in a
// city. Every city page says so explicitly.
// ─────────────────────────────────────────────────────────────────────────────

export const FLORIDA_HUB_PATH = '/glp-1microdosing/florida'

export type FloridaRegion = 'metro' | 'south' | 'southwest'

export const FLORIDA_REGIONS: { id: FloridaRegion; label: string }[] = [
  { id: 'metro',     label: 'Major metros' },
  { id: 'south',     label: 'Greater Miami & South Florida' },
  { id: 'southwest', label: 'Southwest / Gulf Coast' },
]

export type CityFAQ = { q: string; a: string }

export type FloridaCity = {
  /** URL segment — must match the live URL exactly */
  slug: string
  /** Short display name used in copy ("Miami", "Bal Harbour & Surfside") */
  name: string
  /** Name used in the H1 / hero eyebrow ("Bal Harbour and Surfside") */
  h1Name: string
  /** Label used on the hub's city directory (live: "Surfside & Bal Harbour") */
  directoryLabel: string
  county: string
  region: FloridaRegion
  /** Exact live <title> */
  title: string
  /** Meta description (city-specific; see note in final report) */
  description: string
  /** Eyebrow above the local section, e.g. "Miami-Dade, FL" */
  localEyebrow: string
  /** Live H2 city name: "A more clinical way to do GLP-1 in {sectionCity}" */
  sectionCity: string
  /** Opening paragraph of the local section (live) */
  localIntro: string
  /** Lead-in for the coverage sentence (live) */
  coverageLead: string
  /** Neighborhoods / nearby communities mentioned on the live page */
  areas: string[]
  /** Trailing phrase after the area list (live) */
  areasTail: string
  /** "Local care model" label (live) */
  careModelLabel: string
  /** Extra local copy — Search Console demand, written naturally */
  localNote: string
  /** City-specific FAQs added on top of the shared microdosing FAQs */
  extraFaqs: CityFAQ[]
  /** Slugs of nearby cities to cross-link */
  nearby: string[]
  /** Approximate city-centre coordinates for schema areaServed */
  geo: { lat: number; lng: number }
}

const DESC = (place: string) =>
  `Clinician-guided GLP-1 microdosing for ${place} residents. Low weekly dose semaglutide or tirzepatide, 100% online, shipped free statewide.`

const TITLE = (place: string) => `GLP-1 Microdosing in ${place} | Semaglutide & Tirzepatide`

export const FLORIDA_CITIES: FloridaCity[] = [
  // ── Major metros ───────────────────────────────────────────────────────────
  {
    slug: 'miami',
    name: 'Miami',
    h1Name: 'Miami',
    directoryLabel: 'Miami',
    county: 'Miami-Dade',
    region: 'metro',
    title: TITLE('Miami'),
    description: DESC('Miami, FL'),
    localEyebrow: 'Miami-Dade, FL',
    sectionCity: 'Miami',
    localIntro:
      'GLP-1 is everywhere in Miami right now — from med spas and aesthetic clinics to billboards, social media, and word of mouth. What is harder to find is a measured, transparent approach built around medical guidance, dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing across Miami-Dade, including',
    areas: ['Brickell', 'Coral Gables', 'Doral', 'Kendall', 'Aventura', 'Miami Beach'],
    areasTail: 'and surrounding areas',
    careModelLabel: 'Fully online across Miami-Dade',
    localNote:
      'If you have been searching for a weight loss clinic in Miami, it helps to know how Nutree is different: we are a telehealth practice, not a storefront. There is no office visit and no waiting room — your intake, clinician review and follow-ups all happen online, and your medication ships to your home. For tirzepatide weight loss in Miami, your clinician may recommend a low weekly microdose of compounded tirzepatide (a dual GIP/GLP-1 agonist) or semaglutide, depending on your history and goals.',
    extraFaqs: [
      {
        q: 'Is Nutree a weight loss clinic in Miami I can visit in person?',
        a: 'No. Nutree Clinic is a telehealth-only practice serving Miami and the rest of Florida. There are no in-person visits — your intake, clinician review and follow-up messaging all happen online, and medication is shipped free to your home if prescribed.',
      },
      {
        q: 'Can I get tirzepatide for weight loss in Miami through Nutree?',
        a: 'Compounded tirzepatide is one of the options our Florida-licensed clinicians may prescribe for Miami residents, either as a low-dose microdosing plan or a standard weight-loss plan. Whether it is appropriate is decided by your clinician after reviewing your health history.',
      },
    ],
    nearby: ['miami-beach', 'miami-shores', 'aventura', 'north-miami-beach'],
    geo: { lat: 25.7617, lng: -80.1918 },
  },
  {
    slug: 'tampa',
    name: 'Tampa',
    h1Name: 'Tampa',
    directoryLabel: 'Tampa',
    county: 'Hillsborough',
    region: 'metro',
    title: TITLE('Tampa'),
    description: DESC('Tampa, FL'),
    localEyebrow: 'Tampa Bay, FL',
    sectionCity: 'Tampa',
    localIntro:
      'GLP-1 weight loss treatment is becoming easier to find across Tampa — from med spas and wellness clinics to social media ads and aesthetic offices. What is harder to find is a measured, transparent approach built around medical guidance, dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing across the Tampa Bay area, including',
    areas: ['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Riverview', 'Carrollwood', 'Wesley Chapel'],
    areasTail: 'and surrounding Florida communities',
    careModelLabel: 'Fully online across Tampa Bay',
    localNote:
      'Many Tampa patients first look for semaglutide or tirzepatide in Tampa through local clinics. Nutree works differently: it is 100% telehealth, so there is no office to drive to in Tampa. A Florida-licensed clinician reviews your intake online, and if semaglutide or tirzepatide is appropriate, your low-dose plan ships free to your door anywhere in the Tampa Bay area.',
    extraFaqs: [
      {
        q: 'Can I get semaglutide or tirzepatide in Tampa without an office visit?',
        a: 'Yes. Nutree is a telehealth-only practice, so Tampa Bay residents complete everything online — there are no in-person visits. If your Florida-licensed clinician prescribes compounded semaglutide or tirzepatide, it is shipped free and discreetly to your home.',
      },
    ],
    nearby: ['orlando', 'fort-myers', 'naples'],
    geo: { lat: 27.9506, lng: -82.4572 },
  },
  {
    slug: 'orlando',
    name: 'Orlando',
    h1Name: 'Orlando',
    directoryLabel: 'Orlando',
    county: 'Orange',
    region: 'metro',
    title: TITLE('Orlando'),
    description: DESC('Orlando, FL'),
    localEyebrow: 'Orlando, FL',
    sectionCity: 'Orlando',
    localIntro:
      'GLP-1 treatment is becoming easier to find across Orlando — from wellness clinics and med spas to aesthetic offices, social media ads, and local word of mouth. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Orlando and nearby Central Florida communities, including',
    areas: ['Winter Park', 'Lake Nona', 'Windermere', 'Dr. Phillips', 'Maitland', 'Altamonte Springs', 'Kissimmee'],
    areasTail: 'and surrounding Orange County areas',
    careModelLabel: 'Fully online in Orlando and nearby areas',
    localNote:
      'Looking for semaglutide in Orlando or compounded tirzepatide in Orlando? Nutree is a telehealth practice, so there is no Orlando office to visit — everything from intake to follow-up happens online with a Florida-licensed clinician. If tirzepatide or semaglutide is right for you, your medication is prepared by a state-licensed 503A compounding pharmacy and shipped free to your home in Central Florida.',
    extraFaqs: [
      {
        q: 'Do you offer compounded tirzepatide in Orlando?',
        a: 'Yes — Orlando-area residents can be evaluated online for compounded tirzepatide or semaglutide, at microdosing or standard doses. Nutree is telehealth-only (no in-person visits), and any prescription is at the discretion of your Florida-licensed clinician.',
      },
    ],
    nearby: ['tampa', 'jacksonville', 'palm-beach'],
    geo: { lat: 28.5383, lng: -81.3792 },
  },
  {
    slug: 'jacksonville',
    name: 'Jacksonville',
    h1Name: 'Jacksonville',
    directoryLabel: 'Jacksonville',
    county: 'Duval',
    region: 'metro',
    title: TITLE('Jacksonville'),
    description: DESC('Jacksonville, FL'),
    localEyebrow: 'Jacksonville, FL',
    sectionCity: 'Jacksonville',
    localIntro:
      'GLP-1 treatment is becoming easier to find across Jacksonville — from wellness clinics and med spas to aesthetic offices, social media ads, and local referrals. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Jacksonville and nearby Northeast Florida communities, including',
    areas: ['Riverside', 'San Marco', 'Southside', 'Mandarin', 'Arlington', 'Jacksonville Beach', 'Ponte Vedra Beach', 'Orange Park'],
    areasTail: 'and surrounding Duval County areas',
    careModelLabel: 'Fully online in Jacksonville and nearby areas',
    localNote:
      'Nutree is a telehealth practice, so Jacksonville patients never need to drive across town for an appointment — there are no in-person visits. Your Florida-licensed clinician reviews your intake online, recommends low-dose semaglutide or tirzepatide if appropriate, and stays available by message as your plan progresses.',
    extraFaqs: [],
    nearby: ['orlando', 'tampa'],
    geo: { lat: 30.3322, lng: -81.6557 },
  },

  // ── Greater Miami & South Florida ──────────────────────────────────────────
  {
    slug: 'miami-beach',
    name: 'Miami Beach',
    h1Name: 'Miami Beach',
    directoryLabel: 'Miami Beach',
    county: 'Miami-Dade',
    region: 'south',
    title: TITLE('Miami Beach'),
    description: DESC('Miami Beach, FL'),
    localEyebrow: 'Miami Beach, FL',
    sectionCity: 'Miami Beach',
    localIntro:
      'GLP-1 treatment is highly visible across Miami Beach — from med spas and aesthetic clinics to wellness lounges, social media ads, and word of mouth. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Miami Beach and nearby coastal Miami-Dade communities, including',
    areas: ['South Beach', 'Mid-Beach', 'North Beach', 'Surfside', 'Bal Harbour', 'Bay Harbor Islands', 'Sunny Isles Beach'],
    areasTail: 'and surrounding areas',
    careModelLabel: 'Fully online in Miami Beach and nearby areas',
    localNote:
      'If you are comparing a weight loss clinic in Miami Beach with an online option, here is what to know: Nutree is telehealth-only, so there is no clinic to walk into on Collins Avenue — and no waiting room either. Your intake and follow-ups happen online with a Florida-licensed clinician. For semaglutide weight loss or tirzepatide weight loss in Miami Beach, your clinician can start you on a low weekly microdose and adjust it over time based on how you respond.',
    extraFaqs: [
      {
        q: 'Is Nutree a weight loss clinic in Miami Beach?',
        a: 'Nutree Clinic is a Florida telehealth practice that serves Miami Beach residents online. There are no in-person appointments — you complete your intake online, a Florida-licensed clinician reviews it, and if prescribed your medication ships free to your home.',
      },
      {
        q: 'Can I start semaglutide or tirzepatide weight loss in Miami Beach at a low dose?',
        a: 'Yes. Microdosing uses a low weekly dose of compounded semaglutide or tirzepatide. Your clinician decides whether it is appropriate and may adjust the dose over time depending on how your body responds.',
      },
    ],
    nearby: ['bal-harbour-surfside', 'miami', 'sunny-isles-beach', 'miami-shores'],
    geo: { lat: 25.7907, lng: -80.1300 },
  },
  {
    slug: 'aventura',
    name: 'Aventura',
    h1Name: 'Aventura',
    directoryLabel: 'Aventura',
    county: 'Miami-Dade',
    region: 'south',
    title: TITLE('Aventura'),
    description: DESC('Aventura, FL'),
    localEyebrow: 'Aventura, FL',
    sectionCity: 'Aventura',
    localIntro:
      'GLP-1 treatment is easy to come across in South Florida — from med spas and aesthetic clinics to social media ads and local word of mouth. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Aventura and nearby communities, including',
    areas: ['Sunny Isles Beach', 'Hallandale Beach', 'North Miami Beach', 'Bal Harbour', 'Surfside'],
    areasTail: 'and surrounding North Miami-Dade and South Broward areas',
    careModelLabel: 'Fully online in Aventura and nearby areas',
    localNote:
      'Nutree is a telehealth practice, so Aventura patients do not visit an office — your consultation, plan and follow-up all happen online with a Florida-licensed clinician, and your medication is shipped free to your home.',
    extraFaqs: [],
    nearby: ['sunny-isles-beach', 'north-miami-beach', 'bal-harbour-surfside', 'miami'],
    geo: { lat: 25.9565, lng: -80.1392 },
  },
  {
    slug: 'north-miami-beach',
    name: 'North Miami Beach',
    h1Name: 'North Miami Beach',
    directoryLabel: 'North Miami Beach',
    county: 'Miami-Dade',
    region: 'south',
    title: TITLE('North Miami Beach'),
    description: DESC('North Miami Beach, FL'),
    localEyebrow: 'North Miami Beach, FL',
    sectionCity: 'North Miami Beach',
    localIntro:
      'GLP-1 treatment is easy to come across in South Florida — from med spas and aesthetic clinics to social media ads and local word of mouth. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in North Miami Beach (NMB) and nearby communities, including',
    areas: ['Sunny Isles Beach', 'Hallandale Beach', 'Bal Harbour', 'Surfside'],
    areasTail: 'and surrounding North Miami-Dade and South Broward areas',
    careModelLabel: 'Fully online in NMB and nearby areas',
    localNote:
      'Nutree is a telehealth practice, so North Miami Beach patients do not visit an office — your consultation, plan and follow-up all happen online with a Florida-licensed clinician, and your medication is shipped free to your home.',
    extraFaqs: [],
    nearby: ['aventura', 'sunny-isles-beach', 'miami-shores', 'miami'],
    geo: { lat: 25.9331, lng: -80.1625 },
  },
  {
    slug: 'sunny-isles-beach',
    name: 'Sunny Isles Beach',
    h1Name: 'Sunny Isles Beach',
    directoryLabel: 'Sunny Isles Beach',
    county: 'Miami-Dade',
    region: 'south',
    title: TITLE('Sunny Isles Beach'),
    description: DESC('Sunny Isles Beach, FL'),
    localEyebrow: 'Sunny Isles Beach, FL',
    sectionCity: 'Sunny Isles Beach',
    localIntro:
      'GLP-1 treatment is highly visible across Sunny Isles Beach and coastal North Miami-Dade — from med spas and aesthetic clinics to wellness lounges, social media ads, and word of mouth. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Sunny Isles Beach and nearby communities, including',
    areas: ['Aventura', 'Bal Harbour', 'Surfside', 'Bay Harbor Islands', 'North Miami Beach', 'Hallandale Beach', 'Golden Beach'],
    areasTail: 'and surrounding coastal Miami-Dade areas',
    careModelLabel: 'Fully online in Sunny Isles Beach and nearby areas',
    localNote:
      'Nutree is a telehealth practice, so Sunny Isles Beach patients do not visit an office — your consultation, plan and follow-up all happen online with a Florida-licensed clinician, and your medication is shipped free to your home.',
    extraFaqs: [],
    nearby: ['aventura', 'bal-harbour-surfside', 'north-miami-beach', 'miami-beach'],
    geo: { lat: 25.9429, lng: -80.1234 },
  },
  {
    slug: 'miami-shores',
    name: 'Miami Shores',
    h1Name: 'Miami Shores',
    directoryLabel: 'Miami Shores',
    county: 'Miami-Dade',
    region: 'south',
    title: TITLE('Miami Shores'),
    description: DESC('Miami Shores, FL'),
    localEyebrow: 'Miami Shores, FL',
    sectionCity: 'Miami Shores',
    localIntro:
      'GLP-1 treatment is becoming easier to find across North Miami-Dade — from med spas and aesthetic clinics to wellness offices, social media ads, and local referrals. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Miami Shores and nearby communities, including',
    areas: ['North Miami', 'Biscayne Park', 'El Portal', 'Bay Harbor Islands', 'Surfside', 'Miami Beach', 'Aventura'],
    areasTail: 'and surrounding North Miami-Dade areas',
    careModelLabel: 'Fully online in Miami Shores and nearby areas',
    localNote:
      'Nutree is a telehealth practice, so Miami Shores patients do not visit an office — your consultation, plan and follow-up all happen online with a Florida-licensed clinician, and your medication is shipped free to your home.',
    extraFaqs: [],
    nearby: ['miami', 'north-miami-beach', 'bal-harbour-surfside', 'miami-beach'],
    geo: { lat: 25.8631, lng: -80.1928 },
  },
  {
    slug: 'bal-harbour-surfside',
    name: 'Bal Harbour & Surfside',
    h1Name: 'Bal Harbour and Surfside',
    directoryLabel: 'Surfside & Bal Harbour',
    county: 'Miami-Dade',
    region: 'south',
    title: TITLE('Bal Harbour & Surfside'),
    description: DESC('Bal Harbour and Surfside, FL'),
    localEyebrow: 'Bal Harbour, FL',
    sectionCity: 'Bal Harbour',
    localIntro:
      'GLP-1 treatment is highly visible across Bal Harbour and coastal North Miami-Dade — from luxury wellness offerings and aesthetic clinics to med spas, social media ads, and private word of mouth. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Bal Harbour and nearby coastal communities, including',
    areas: ['Surfside', 'Bay Harbor Islands', 'Sunny Isles Beach', 'Aventura', 'North Miami Beach', 'Miami Beach'],
    areasTail: 'and surrounding North Miami-Dade areas',
    careModelLabel: 'Fully online in Bal Harbour and nearby areas',
    localNote:
      'Nutree is a telehealth practice, so Bal Harbour and Surfside patients do not visit an office — your consultation, plan and follow-up all happen online with a Florida-licensed clinician, and your medication is shipped free and discreetly to your home.',
    extraFaqs: [],
    nearby: ['miami-beach', 'sunny-isles-beach', 'aventura', 'miami-shores'],
    geo: { lat: 25.8915, lng: -80.1270 },
  },
  {
    slug: 'palm-beach',
    name: 'Palm Beach',
    h1Name: 'Palm Beach',
    directoryLabel: 'Palm Beach',
    county: 'Palm Beach',
    region: 'south',
    title: TITLE('Palm Beach'),
    description: DESC('Palm Beach, FL'),
    localEyebrow: 'Palm Beach, FL',
    sectionCity: 'Palm Beach',
    localIntro:
      'GLP-1 treatment is becoming more visible across Palm Beach — from wellness clinics and med spas to aesthetic practices, private referrals, and social media ads. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Palm Beach and nearby Palm Beach County communities, including',
    areas: ['West Palm Beach', 'Palm Beach Gardens', 'Lake Worth Beach', 'Boca Raton', 'Delray Beach', 'Wellington', 'Jupiter'],
    areasTail: 'and surrounding areas',
    careModelLabel: 'Fully online in Palm Beach and nearby areas',
    localNote:
      'GLP-1 microdosing in Palm Beach with Nutree is fully online: there is no office visit, and your Florida-licensed clinician reviews your intake, sets a low weekly dose of semaglutide or tirzepatide if appropriate, and follows up by message. Medication ships free anywhere in Palm Beach County.',
    extraFaqs: [
      {
        q: 'How does GLP-1 microdosing in Palm Beach work if there is no office?',
        a: 'Nutree is a telehealth-only practice. Palm Beach County residents complete a secure online intake, a Florida-licensed clinician reviews it (by video or phone when needed), and if microdosing is appropriate your medication is shipped free to your home. Follow-up happens by direct message.',
      },
    ],
    nearby: ['aventura', 'sunny-isles-beach', 'miami', 'orlando'],
    geo: { lat: 26.7056, lng: -80.0364 },
  },

  // ── Southwest / Gulf Coast ─────────────────────────────────────────────────
  {
    slug: 'naples',
    name: 'Naples',
    h1Name: 'Naples',
    directoryLabel: 'Naples',
    county: 'Collier',
    region: 'southwest',
    title: TITLE('Naples'),
    description: DESC('Naples, FL'),
    localEyebrow: 'Naples, FL',
    sectionCity: 'Naples',
    localIntro:
      'GLP-1 treatment is becoming more visible across Naples — from wellness clinics and med spas to aesthetic practices, private referrals, and social media ads. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Naples and nearby Southwest Florida communities, including',
    areas: ['North Naples', 'Park Shore', 'Pelican Bay', 'Golden Gate', 'Marco Island', 'Bonita Springs', 'Estero'],
    areasTail: 'and surrounding Collier County areas',
    careModelLabel: 'Fully online in Naples and nearby areas',
    localNote:
      'Nutree is a telehealth practice, so Naples patients do not visit an office — your consultation, plan and follow-up all happen online with a Florida-licensed clinician, and your medication is shipped free to your home.',
    extraFaqs: [],
    nearby: ['bonita-springs', 'fort-myers', 'tampa'],
    geo: { lat: 26.1420, lng: -81.7948 },
  },
  {
    slug: 'fort-myers',
    name: 'Fort Myers',
    h1Name: 'Fort Myers',
    directoryLabel: 'Fort Myers',
    county: 'Lee',
    region: 'southwest',
    title: TITLE('Fort Myers'),
    description: DESC('Fort Myers, FL'),
    localEyebrow: 'Fort Myers, FL',
    sectionCity: 'Fort Myers',
    localIntro:
      'GLP-1 treatment is becoming more visible across Fort Myers and Southwest Florida — from wellness clinics and med spas to aesthetic practices, local referrals, and social media ads. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Fort Myers and nearby Southwest Florida communities, including',
    areas: ['Cape Coral', 'Estero', 'Bonita Springs', 'Sanibel', 'Fort Myers Beach', 'Lehigh Acres', 'Gateway'],
    areasTail: 'and surrounding Lee County areas',
    careModelLabel: 'Fully online in Fort Myers and nearby areas',
    localNote:
      'If you are looking for tirzepatide in Fort Myers, Nutree offers an online route: there is no office visit, a Florida-licensed clinician reviews your intake, and if compounded tirzepatide (or semaglutide) is appropriate, a low weekly dose is shipped free to your home anywhere in Lee County.',
    extraFaqs: [
      {
        q: 'Can I get tirzepatide in Fort Myers through Nutree?',
        a: 'Fort Myers residents can be evaluated online for compounded tirzepatide or semaglutide. Nutree is telehealth-only, so there are no in-person visits; if your Florida-licensed clinician prescribes treatment, it ships free to your door.',
      },
    ],
    nearby: ['bonita-springs', 'naples', 'tampa'],
    geo: { lat: 26.6406, lng: -81.8723 },
  },
  {
    slug: 'bonita-springs',
    name: 'Bonita Springs',
    h1Name: 'Bonita Springs',
    directoryLabel: 'Bonita Springs',
    county: 'Lee',
    region: 'southwest',
    title: TITLE('Bonita Springs'),
    description: DESC('Bonita Springs, FL'),
    localEyebrow: 'Bonita Springs, FL',
    sectionCity: 'Bonita Springs',
    localIntro:
      'GLP-1 treatment is becoming more visible across Bonita Springs and Southwest Florida — from wellness clinics and med spas to aesthetic practices, local referrals, and social media ads. What is harder to find is a measured, transparent approach built around medical guidance, careful dose adjustment, and long-term metabolic health.',
    coverageLead: 'Nutree Clinic offers GLP-1 microdosing in Bonita Springs and nearby Southwest Florida communities, including',
    areas: ['Estero', 'Naples', 'North Naples', 'Fort Myers', 'Coconut Point', 'Pelican Landing', 'Bonita Bay'],
    areasTail: 'and surrounding Lee County and Collier County areas',
    careModelLabel: 'Fully online in Bonita Springs and nearby areas',
    localNote:
      'Nutree is a telehealth practice, so Bonita Springs patients do not visit an office — your consultation, plan and follow-up all happen online with a Florida-licensed clinician, and your medication is shipped free to your home.',
    extraFaqs: [],
    nearby: ['naples', 'fort-myers', 'tampa'],
    geo: { lat: 26.3398, lng: -81.7787 },
  },
]

export const FLORIDA_CITY_SLUGS: string[] = FLORIDA_CITIES.map(c => c.slug)

/** Absolute paths for every city page — for the sitemap */
export const FLORIDA_CITY_PATHS: string[] = FLORIDA_CITIES.map(c => `${FLORIDA_HUB_PATH}/${c.slug}`)

export function getFloridaCity(slug: string): FloridaCity | undefined {
  return FLORIDA_CITIES.find(c => c.slug === slug)
}

export function cityPath(slug: string): string {
  return `${FLORIDA_HUB_PATH}/${slug}`
}
