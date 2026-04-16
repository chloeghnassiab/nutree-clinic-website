export type BlogPost = {
  title: string
  date: string
  category: string
  readTime: string
  author: string
  excerpt: string
  content: string
}

export const POSTS: Record<string, BlogPost> = {
  'what-is-nad': {
    title: 'What is NAD+?',
    date: '2024-11-12',
    category: 'Longevity',
    readTime: '5 min',
    author: 'Nutree Clinic',
    excerpt: 'NAD+ is a coenzyme present in every living cell. Here\'s what it does, why it declines with age, and what that means for your health.',
    content: `
NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every living cell in your body. It plays a central role in hundreds of metabolic processes — most importantly, the conversion of nutrients into cellular energy.

## Why NAD+ matters

Without NAD+, your mitochondria cannot produce ATP — the molecule your cells use as fuel. Every time you feel fatigued, mentally foggy, or slow to recover from exercise, declining NAD+ levels may be a contributing factor.

Beyond energy, NAD+ activates a class of proteins called sirtuins, which are involved in DNA repair, inflammation regulation, and cellular longevity. This is why NAD+ has attracted significant attention in the longevity research community.

## Why it declines

NAD+ levels in the body decline naturally with age — research suggests levels can drop by as much as 50% between your 20s and 60s. This decline is associated with reduced mitochondrial function, increased fatigue, slower recovery, and the general metabolic changes we associate with aging.

## What NAD+ therapy does

NAD+ therapy — delivered as an injection, nasal spray, or transdermal patch — replenishes cellular NAD+ levels directly, bypassing the digestive system. Many patients report noticeable improvements in energy, mental clarity, and recovery within the first few weeks of consistent use.

The therapy does not replace the body's natural NAD+ production. Rather, it supplements declining levels to support the metabolic and longevity pathways that depend on it.

## Is it right for you?

NAD+ therapy is most appropriate for adults experiencing fatigue, cognitive decline, or age-related changes in energy and body composition. Your Nutree clinician will review your health history and recommend the most appropriate delivery form and dosing schedule.
    `,
  },
  'protecting-your-muscle-while-you-lose-weight': {
    title: 'Protecting Your Muscle While You Lose Weight',
    date: '2024-10-14',
    category: 'Weight Loss',
    readTime: '7 min',
    author: 'Nutree Clinic',
    excerpt: 'GLP-1 medications are powerful tools for weight loss — but without the right approach, you risk losing muscle alongside fat.',
    content: `
GLP-1 medications like semaglutide and tirzepatide work primarily by reducing appetite and slowing gastric emptying. The result — for most patients — is a significant reduction in caloric intake. This is effective, but it comes with an important consideration: when you consume fewer calories, your body doesn't always distinguish between fat and muscle as the source of energy.

## The muscle loss risk

Clinical studies of GLP-1 medications have shown that a meaningful proportion of weight lost can come from lean muscle mass, particularly in patients who are not prioritizing resistance training and adequate protein intake. In older patients, this is especially significant — muscle loss accelerates naturally with age, and a period of caloric restriction can compound this.

## What protects your muscle

Three things consistently emerge from the research:

**Protein.** Adequate protein intake is the single most important nutritional intervention for preserving lean mass during weight loss. Most clinicians recommend at least 1.2g of protein per kilogram of bodyweight per day during a GLP-1 protocol — and often more.

**Resistance training.** Resistance exercise signals your body to maintain muscle tissue even in a caloric deficit. You do not need to lift heavy weights — even bodyweight resistance training two to three times per week provides meaningful protection.

**Gradual weight loss.** Rapid weight loss is more likely to include lean mass than gradual, sustained loss. GLP-1 microdosing — which produces more gradual results — may offer some advantage here for patients who are concerned about muscle preservation.

## Sermorelin as a complement

Some Nutree patients combine GLP-1 therapy with Sermorelin — a peptide that supports the body's own growth hormone release. Growth hormone plays a key role in maintaining lean muscle mass and supporting body composition during weight loss. Your clinician can advise whether this combination is appropriate for your health profile.

The goal of GLP-1 therapy is not just weight loss — it is improved metabolic health and quality of life. Preserving muscle is central to achieving that goal.
    `,
  },
}
