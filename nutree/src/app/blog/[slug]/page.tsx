import type { Metadata } from 'next'
import Link from 'next/link'
import { ConsultBand } from '@/components/ui/PageComponents'
import { notFound } from 'next/navigation'

type Post = {
  title: string
  date: string
  category: string
  readTime: string
  author: string
  excerpt: string
  coverImage: string
  content: string
}

const POSTS: Record<string, Post> = {
  'peptides-and-mental-health': {
    title: 'What Are the Best Peptides for Mental Health?',
    date: '2026-04-10',
    category: 'Well-being',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    excerpt: 'Peptide-based care is changing how clinicians approach mental health — not by replacing traditional therapies, but by addressing cravings, anxiety, cognitive fatigue, and sleep quality.',
    coverImage: '/images/blog/peptides-mental-health-nutreeclinic.jpg',
    content: `Peptide-based care is changing how clinicians approach mental health — not by replacing traditional therapies or medications, but by offering additional ways to address specific challenges like cravings, anxiety, addictions, cognitive fatigue, stress reactivity, and sleep quality.

Several of these therapies are already being used in clinical practice, each with a distinct role depending on the symptom being addressed.

## GLP-1 Peptides: Control Over Cravings and Addictions

GLP-1 peptides have shifted the conversation beyond weight loss. One of the most consistent patient-reported effects is a reduction in **food noise** — the constant mental pull toward food, cravings, and anticipatory thinking.

This reflects GLP-1's action on **reward and motivation pathways**, particularly in how the brain processes cues, pleasure, and reinforcement. Patients often describe not just eating less, but **thinking about food less** — a meaningful behavioral shift.

Emerging research is extending this model beyond eating, exploring GLP-1's role in **addictive and impulse-driven behaviors**. Clinically, this opens a broader discussion around control, not restriction.

## Oxytocin: Precision Support for Situational Anxiety

Oxytocin is particularly relevant for patients who experience **predictable spikes in anxiety** — before social events, meetings, or high-stress interactions.

Rather than acting as a sedative, oxytocin supports **nervous system regulation and social processing**, helping patients feel more grounded and less reactive in the moment.

This makes it a targeted option for patients who do not need daily intervention, but benefit from **situational support aligned with real-life triggers**.

## NAD+: Restoring Cognitive Energy

Cognitive function is energy-dependent. NAD+ plays a central role in **mitochondrial activity and cellular energy production**, making it highly relevant in patients experiencing brain fog or mental fatigue.

Recent research suggests meaningful potential for cognitive performance and fatigue, and clinically, patients often report improved clarity, sustained focus, and reduced mental drag.

This is particularly valuable in patients whose symptoms are more **functional — low drive, poor concentration, and reduced mental endurance**.

## Sermorelin: Recovery as a Mental Health Lever

Sleep quality directly shapes mood, cognition, and resilience. Sermorelin supports **natural growth hormone signaling**, which is closely linked to deep sleep phases.

Improved sleep architecture can translate into **better emotional stability, sharper thinking, and stronger daily recovery**.

For many patients, this is not about sedation, but about restoring the body's ability to **recover effectively overnight**.

## How We Approach This at Nutree Clinic

At Nutree Clinic, these therapies are integrated into **personalized, evolving protocols**.

We combine clinical assessment, patient feedback, and ongoing adjustments to ensure treatments translate into **real, measurable improvements** in daily life.

Whether the goal is reducing cravings, improving focus, or stabilizing stress response, care is continuously refined to match the individual.

## References

1. Müller TD et al. Glucagon-like peptide 1 (GLP-1). Molecular Metabolism. 2019;30:72-130.
2. Klausen MK et al. Exenatide once weekly for alcohol use disorder. JCI Insight. 2022;7(3):e154863.
3. Meyer-Lindenberg A et al. Oxytocin and vasopressin in human social behaviour and psychopathology. Nature Reviews Neuroscience. 2011;12:524-538.
4. Berk M et al. NAD+ supplementation as a potential therapeutic approach to mental health. Psychopharmacology. 2023.
5. Alba-Ferrara LM, de Erausquin GA. What does anisotropy measure? Insights from increased and decreased anisotropy in selective fiber tracts. Frontiers in Integrative Neuroscience. 2013.`,
  },

  'struggling-with-fertility-the-cellular-factor-most-people-overlook': {
    title: 'Struggling with Fertility? The Cellular Factor Most People Overlook',
    date: '2026-03-30',
    category: 'Longevity',
    readTime: '6 min',
    author: 'Tara Marko, PA-C',
    excerpt: 'Emerging research suggests NAD+ may play a role in cellular energy and reproductive health. Here\'s what the science shows — and why mitochondrial health is getting attention in fertility conversations.',
    coverImage: '/images/blog/fertility-nad-cellular-health-nutreeclinic.jpg',
    content: `**Emerging research suggests NAD+ may play a role in cellular energy and reproductive health.** Here's what the science shows so far — and why mitochondrial health is getting so much attention in fertility conversations.

When people think about fertility, they usually think about hormones, cycles, ovulation timing, and age.

But one of the most important factors may sit even deeper: **cellular energy**.

At Nutree Clinic, we often remind patients that reproductive health is not only about one lab value or one symptom. It is also about how well the body's cells are functioning — especially in systems that demand large amounts of energy.

## Fertility Depends on More Than Hormones

Hormones absolutely matter. But fertility is also influenced by the health of the cells involved in ovulation, fertilization, and early embryo development.

That is especially relevant because reproductive cells are highly energy-dependent. Their function relies heavily on healthy **mitochondria**, the structures inside cells that help generate usable energy.

As women age, mitochondrial function tends to become less efficient. This is one reason scientists have been studying whether changes in cellular metabolism may help explain part of age-related fertility decline.

## Why NAD+ Is Getting So Much Attention

NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every cell of the body. It plays a central role in:

- **cellular energy production**
- **mitochondrial function**
- **DNA repair**
- **cellular resilience and healthy aging**

NAD+ levels tend to decline with age. That matters because when NAD+ availability falls, cells may become less efficient at producing energy and maintaining normal function.

In reproductive medicine, that has raised an important question: if NAD+ helps support mitochondrial health and cellular repair, could it also help support aspects of fertility?

## What the Research Suggests So Far

Several important **animal studies** have found that restoring NAD+ levels — often through precursors such as nicotinamide mononucleotide (NMN) — improved markers associated with reproductive aging. In aged mice, researchers reported improvements in mitochondrial function, meiotic competency, fertilization capacity, embryo development, and live birth outcomes.

At the same time, it is important to stay honest: **this is not the same thing as proving that NAD+ is an established fertility treatment in humans.**

The current fertility discussion around NAD+ is promising, but still emerging. Most of the strongest evidence comes from preclinical and animal research, not from large human fertility trials.

## Why Mitochondria Matter in Reproductive Health

Recent reproductive biology research continues to reinforce how central mitochondrial function is to oocyte competence, fertilization, and early embryo development.

That matters because NAD+ and mitochondrial health are tightly connected. If mitochondria are part of the fertility story, then it makes sense that researchers are looking closely at interventions that may help support mitochondrial performance.

## Where NAD+ Fits in a Clinical Wellness Plan

At Nutree Clinic, NAD+ is not positioned as a miracle fertility solution. It is better understood as part of a broader strategy focused on **cellular health, energy, recovery, and healthy aging**.

Depending on the individual patient, clinician assessment, and treatment goals, Nutree may consider NAD+ support through injectable NAD+, NAD+ nasal spray, or iontophoresis patches. These options are selected thoughtfully and individually, and are not presented as a substitute for a fertility evaluation or fertility treatment when that is needed.

## A More Hopeful — and More Honest — Way to Talk About Fertility

Fertility is influenced by hormones, age, metabolic health, inflammation, mitochondrial function, lifestyle factors, and overall physiology. That is exactly why the NAD+ conversation is so compelling: it brings attention back to the deeper biological systems that help cells function well.

If you are thinking about fertility, it may be worth asking not only, "What are my hormone levels?" but also, **"How well are my cells being supported?"**

That question may not replace conventional fertility care. But it can add an important layer to the discussion — especially for women interested in a more comprehensive, clinician-guided approach to reproductive wellness and healthy aging.

## References

1. Bertoldo MJ et al. NAD+ Repletion Rescues Female Fertility during Reproductive Aging. Cell Reports. 2020;30(6):1670-1681.
2. Miao Y et al. Nicotinamide mononucleotide supplementation reverses defective oocyte bioenergetics and improves in vivo fertility in a mouse model of aging. Cell Reports. 2020;32(5):107987.
3. Canto C et al. NAD+ Metabolism and Its Roles in Cellular Processes during Ageing. Nature Reviews Molecular Cell Biology. 2015;16:397-408.
4. May-Panloup P et al. Mitochondrial aspects of oocyte quality and reproductive aging. Biomedicines. 2021;9(4):352.`,
  },

  'what-is-nad': {
    title: 'What Is NAD+? The Science Behind Cellular Energy & Healthy Aging',
    date: '2026-03-25',
    category: 'Longevity',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    excerpt: 'If you\'ve been exploring ways to improve energy, recovery, or long-term vitality, you\'ve likely come across NAD+. Here\'s what it is, what research supports, and how Nutree approaches NAD+ care.',
    coverImage: '/images/blog/what-is-nad-plus-cellular-energy-nutreeclinic.jpg',
    content: `If you've been exploring ways to improve energy, recovery, or long-term vitality, you've likely come across NAD+. Here's what it is, what research supports, and how Nutree Clinic approaches NAD+ care with clarity and medical oversight.

## What Does NAD+ Do in the Body?

NAD+ (short for Nicotinamide Adenine Dinucleotide) is a coenzyme found in every living cell. Its most established role is supporting cellular energy production. Inside the mitochondria, NAD+ helps convert nutrients into ATP, the body's usable energy currency. Without adequate NAD+ availability, cells cannot efficiently produce energy.

NAD+ also acts as a required substrate for enzymes involved in DNA repair, mitochondrial regulation, cellular stress responses, and metabolic signaling. Two major enzyme families — sirtuins and PARPs — depend directly on NAD+ to function.

**Why it matters:** NAD+ isn't a stimulant. It supports the underlying energy systems of your cells — which is why it's increasingly discussed in performance and healthy aging care.

## Does NAD+ Decline With Age?

Research shows that NAD+ metabolism changes with aging. In animal models, NAD+ levels decline across multiple tissues, including muscle, liver, and brain.

In humans, the picture is more nuanced — but there is credible evidence of age-related changes in:

- Skeletal muscle
- Skin
- Blood (circulating NAD-related metabolites)
- Liver (limited biopsy data)
- Brain (primarily indirect evidence)

Studies examining skeletal muscle biopsies suggest that older individuals may have lower NAD-related metabolite levels compared to younger individuals. In short: NAD+ biology appears to shift with age, particularly in muscle and systemic circulation — but human data remain tissue-specific and evolving.

## Why NAD+ Matters for Energy & Metabolic Health

Because NAD+ is central to mitochondrial function, reductions in availability may influence cellular energy efficiency, muscle metabolic performance, recovery capacity, and stress resilience. Clinical interest in NAD+ focuses on whether restoring NAD+ availability can support metabolic health — especially when paired with lifestyle and medical guidance.

## What Human Studies Show

The strongest clinical research to date involves NAD+ precursors, such as nicotinamide riboside (NR) and nicotinamide mononucleotide (NMN), which are converted into NAD+ inside cells.

Randomized, placebo-controlled trials suggest these precursors can increase NAD-related metabolites in blood, influence certain metabolic markers in specific populations, and are generally well tolerated at studied doses.

For example, a double-blind clinical trial demonstrated improved skeletal muscle insulin sensitivity in prediabetic women taking NMN, alongside measurable increases in NAD-related metabolites.

Long-term outcome data are still developing, and effects vary depending on baseline metabolic health. There is currently no high-quality human evidence proving lifespan extension from NAD supplementation — but research into metabolic and cellular health continues to expand.

## NAD+ Therapy in Clinical Practice

While oral NAD+ precursors are widely available as supplements, meaningful increases in NAD+ levels typically require prescription-based protocols delivered under medical supervision.

At Nutree Clinic, we offer two carefully structured options:

- **Low-volume subcutaneous injections** using a small, fine needle — designed for comfort and steady absorption.
- **Transdermal iontophoresis patches**, which use gentle electrical current to enhance NAD+ delivery across the skin without needles.

These methods allow for clinically meaningful dosing while prioritizing patient comfort and practicality.

NAD+ is integrated into a broader metabolic strategy that may include comprehensive health evaluation, lifestyle optimization, and complementary therapies. Because supporting vitality isn't about one molecule — it's about precision, structure, and medical guidance.

## Is NAD+ Right for You?

If you're experiencing persistent low energy, slower recovery, increased stress load, or early signs of metabolic decline, it may be worth exploring whether NAD+ support fits into your overall plan. The right starting point is not an injection — it's a conversation.

## References

1. Ying W. NAD+/NADH and NADP+/NADPH in Cellular Functions and Cell Death: Regulation and Biological Consequences. Antioxidants & Redox Signaling. 2008;10(2):179-206.
2. Imai S, Guarente L. NAD+ and sirtuins in aging and disease. Trends in Cell Biology. 2014;24(8):464-471.
3. Bai P. Biology of Poly(ADP-Ribose) Polymerases: The Factotums of Cell Maintenance. Molecular Cell. 2015;58(6):947-958.
4. Elhassan YS et al. The NAD+ metabolome in aging and disease. Nature Reviews Endocrinology. 2025.
5. Yoshino M et al. Nicotinamide mononucleotide increases muscle insulin sensitivity in prediabetic women. Science. 2021;372(6547):1224-1229.`,
  },

  'deep-sleep-cortisol-and-fat-loss': {
    title: 'Deep Sleep, Cortisol, and Fat Loss — Why Your Best "Fat Burner" Might Be Sleep',
    date: '2026-03-12',
    category: 'Weight Loss',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    excerpt: 'Most people think fat loss starts with restriction or stimulants. But one of the most powerful metabolic foundations is often much simpler: deep, restorative sleep.',
    coverImage: '/images/blog/deep-sleep-cortisol-fat-loss-nutreeclinic.jpg',
    content: `Most people think fat loss starts with restriction or stimulants. But one of the most powerful metabolic foundations is often much simpler: **deep, restorative sleep**.

When people think about fat loss, they usually picture workouts, calorie tracking, or supplements promising faster results.

But in clinical practice, one of the most important metabolic regulators is something far less dramatic: sleep quality.

At Nutree Clinic, we often remind patients that sustainable progress rarely begins with extremes. It begins with restoring the body's natural rhythms — including sleep, stress response, and hormonal signaling.

## Sleep Is a Metabolic Process — Not Just Rest

Sleep is not simply "downtime." It is an active biological process that helps regulate hormones involved in:

- **metabolism**
- **stress balance**
- **tissue repair**
- **energy regulation**
- **fat metabolism**

One of the most important hormonal events during sleep is the release of **growth hormone**. Research has long shown that growth hormone secretion is closely tied to **slow-wave sleep**, the deepest and most restorative stage.

That matters because growth hormone supports lipolysis, recovery, and normal metabolic function. When sleep is shallow, fragmented, or consistently too short, those rhythms can become less efficient.

## Why Cortisol Matters So Much

Cortisol is often called the "stress hormone," but it is not inherently bad. It plays an essential role in energy balance, circadian rhythm, and survival.

The issue is not cortisol itself. The issue is **dysregulated cortisol** — especially when stress and poor sleep keep the body from settling into a healthy nighttime pattern.

Recent sleep research shows that cortisol tends to be **lowest during deep sleep** and rises more during awakenings and sleep disruption. That helps explain why fragmented sleep can leave people feeling wired, unrested, and metabolically out of sync.

Over time, poor sleep and chronic stress can make it easier for the body to hold on to visceral fat — the deeper abdominal fat linked to cardiometabolic risk.

## The Link Between Poor Sleep and Visceral Fat

Visceral fat is not just a cosmetic concern. It is metabolically active tissue associated with inflammation, insulin resistance, and higher long-term health risk.

Newer research continues to support the connection between sleep disruption and fat accumulation. Investigators have reported that sleep deprivation promotes fat accumulation in visceral white adipose tissue while impairing normal lipolysis signaling pathways.

That does not mean one bad night causes weight gain. But it does reinforce a more honest clinical message: **sleep quality meaningfully affects how the body stores and mobilizes energy.**

## Where Sermorelin Fits In

This is one reason I often talk to patients about **Sermorelin**.

Sermorelin is a peptide that encourages the pituitary gland to release its own growth hormone. Unlike therapies that replace hormones directly, it works by supporting the body's natural signaling pathway.

Because growth hormone release is closely tied to deep sleep, this pathway is especially relevant in patients whose goals include recovery, body composition support, and better sleep quality.

Sermorelin is not a stimulant, and it is not a replacement for foundational care. When used, it should fit into a personalized plan that also addresses sleep habits, stress, nutrition, and overall metabolic health.

## Sleep First. Then Smarter Metabolic Support.

For some patients, improving sleep hygiene, meal timing, light exposure, and stress regulation can make a real difference on its own.

For others, additional medical support may be appropriate. That may include peptide-based strategies in selected cases, or evidence-based weight-loss treatment with medications that help regulate appetite and fullness.

At Nutree Clinic, our approach to weight care is grounded in biology, not blame. When clinically appropriate, **GLP-1 and GIP/GLP-1 medications such as semaglutide and tirzepatide** can help patients better regulate hunger, fullness, and metabolic momentum as part of a structured plan.

## A More Human Way to Think About Fat Loss

Fat loss is often framed as discipline alone. But biology matters.

When deep sleep improves, the body is often better positioned to regulate cortisol, support recovery, and maintain healthier metabolic signaling. That does not replace the importance of nutrition, movement, and consistency. It makes them easier to sustain.

**Sleep is the foundation. Don't skip it.**

## References

1. Van Cauter E et al. Age-related changes in slow wave sleep and REM sleep and relationship with growth hormone and cortisol levels in healthy men. JAMA. 2000;284(7):861-868.
2. Hirotsu C, Tufik S, Andersen ML. Interactions between sleep, stress, and metabolism: from physiological to pathological conditions. Sleep Science. 2015;8(3):143-152.
3. Ness KM et al. Four nights of sleep restriction suppress the postprandial lipemic response and decrease satiety. Journal of Lipid Research. 2019;60(11):1935-1945.
4. Kim TW et al. The Impact of Sleep and Circadian Disturbance on Hormones and Metabolism. International Journal of Endocrinology. 2015.`,
  },

  'protecting-your-muscle-while-you-lose-weight': {
    title: 'Protecting Your Muscle While You Lose Weight',
    date: '2026-02-04',
    category: 'Weight Loss',
    readTime: '8 min',
    author: 'Tara Marko, PA-C',
    excerpt: 'GLP-1 medications are powerful tools for weight loss — but without the right approach, you risk losing muscle alongside fat. Here\'s how to protect your lean mass.',
    coverImage: '/images/blog/protecting-muscle-weight-loss-glp1-nutreeclinic.jpg',
    content: `If you've ever lost weight and ended up feeling softer, weaker, or unusually tired, you're not imagining it. It's possible for the scale to drop while your body also loses some **lean mass** — which can include **skeletal muscle**, the tissue that supports strength, mobility, and metabolic health.

This question comes up even more now that **GLP-1 weight loss** medications are widely used. Treatments like **semaglutide** and **tirzepatide** can reduce appetite significantly — but if calories and protein intake drop too far, muscle protection needs to be part of the plan.

## What "Weight" Really Means: Fat Mass vs. Lean Mass

Your total body weight is made up of multiple compartments:

- **Fat mass**: stored body fat, including visceral fat around organs
- **Lean mass**: everything that isn't fat — muscle, organs, bone, body water, and connective tissue
- **Skeletal muscle**: the lean tissue that generates movement and supports joints and posture

In a calorie deficit, the body uses stored energy — mostly from fat — yet it can also draw from lean tissue. The **amount** and **impact** can vary widely based on nutrition, training, sleep, and the speed of weight loss.

## Why Muscle Matters for Metabolic Health

Protecting skeletal muscle isn't about chasing a certain look. It's about protecting your capacity to live well — now and decades from now.

- **Glucose and insulin health:** Skeletal muscle is a major site of glucose uptake and helps support insulin sensitivity.
- **Strength and independence:** Muscle supports balance, joint stability, and day-to-day function.
- **Resting energy expenditure:** More lean mass is associated with higher baseline energy needs.
- **Weight regain resistance:** Keeping strength and activity up can make weight maintenance more realistic after weight loss.

## Do You Lose Muscle on GLP-1 Medications?

Across many weight-loss approaches, research commonly finds that a portion of weight loss comes from fat-free mass. Two patterns are especially consistent:

- **Faster loss** increases the risk of losing more lean mass.
- **Higher protein intake + resistance training** reduces lean mass losses and improves strength outcomes.

GLP-1 medications are linked to substantial weight loss — semaglutide resulted in an average loss of about **14.9% of baseline body weight** at 68 weeks (STEP 1 trial), while tirzepatide averaged up to **20.9% weight loss** at 72 weeks (SURMOUNT-1). Both involve a decline in both fat mass and lean mass.

**Practical takeaway:** GLP-1 medications can support meaningful fat loss, but they do not automatically protect muscle. If appetite suppression leads to chronically low protein intake and low resistance training, muscle loss becomes more likely.

## How to Prevent Muscle Loss: A Clinician-Guided Plan

### 1. Prioritize Protein

Protein intake is one of the strongest nutritional levers for supporting lean mass during weight loss. Many experts recommend around **1.2–1.6 g/kg/day** for active individuals or those aiming to preserve lean mass.

Simple ways to hit protein goals on semaglutide or tirzepatide:

- **Protein first:** Start meals with your protein source before higher-fiber sides if you fill up quickly.
- **Use small "protein anchors":** Greek yogurt, cottage cheese, eggs, tofu, edamame, tuna/salmon packets.
- **Spread protein across meals** rather than relying on one large serving.
- **Plan for nausea days:** Soft, bland protein options like yogurt, smoothies, and soups with shredded chicken.

### 2. Do Resistance Training 2–3 Days Per Week

Resistance training sends a clear "keep this muscle" signal during a calorie deficit. A simple starting template:

- **Frequency:** 2–3 sessions/week
- **Focus:** legs, glutes, back, chest, shoulders, arms, core
- **Effort:** last few reps feel challenging but controlled

Beginner-friendly moves (no gym required): chair squats, glute bridges, wall push-ups, resistance-band rows, step-ups, and planks.

### 3. Protect Sleep and Recovery

Sleep is not optional when your goal is fat loss with strength intact. Most adults benefit from **7–9 hours** of sleep per night. Poor sleep can increase fatigue, reduce training quality, and make appetite regulation harder — even on medication.

### 4. Monitor More Than the Scale

The scale alone can't tell you whether you're losing mostly fat, losing too much lean mass, or under-fueling. Track waist circumference, how clothes fit, strength markers over time, and daily energy and stamina.

## The Bottom Line

**Muscle supports metabolic health and function.** Some lean mass loss is common with significant weight loss, including with GLP-1 medications. But **protein + resistance training** are the most consistent, evidence-based muscle-preserving tools available — and they're within reach for most patients.

If you want a plan that prioritizes fat loss without sacrificing strength, a clinician-guided approach makes all the difference.

## References

1. CDC. Adult Obesity Facts. Updated 2024.
2. Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). New England Journal of Medicine. 2021;384:989-1002.
3. Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). New England Journal of Medicine. 2022;387:205-216.
4. Heymsfield SB et al. Weight loss composition is one-fourth fat-free mass: a critical review and critique of this widely cited rule. Obesity Reviews. 2014;15(4):310-321.
5. Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. Journal of the International Society of Sports Nutrition. 2017;14:20.
6. American College of Sports Medicine. Resistance Training for Health and Fitness. Position Stand.
7. U.S. Department of Health and Human Services. Physical Activity Guidelines for Americans, 2nd edition. 2018.
8. American Academy of Sleep Medicine & Sleep Research Society. Recommended Amount of Sleep for a Healthy Adult. Sleep. 2015;38(6):843-844.
9. DeFronzo RA, Tripathy D. Skeletal muscle insulin resistance is the primary defect in type 2 diabetes. Diabetes Care. 2009;32(Suppl 2):S157-S163.`,
  },

  'why-weight-loss-can-feel-impossible': {
    title: 'Why Weight Loss Can Feel Impossible — And Why It\'s Not a Discipline Problem',
    date: '2026-01-27',
    category: 'Weight Loss',
    readTime: '4 min',
    author: 'Tara Marko, PA-C',
    excerpt: 'A calorie deficit is part of weight loss. But for many people living with obesity, biology can make getting into that deficit — and staying there — extremely difficult.',
    coverImage: '/images/blog/why-weight-loss-feels-impossible-nutreeclinic.jpg',
    content: `A calorie deficit is part of weight loss. But for many people living with obesity, biology can make getting into that deficit — and staying there — extremely difficult.

For years, the loudest message around weight has been some version of: "Just eat less and move more." If it were that simple, obesity wouldn't be so common — and people wouldn't spend decades trapped in cycles of dieting, regaining, and blaming themselves.

A more compassionate, science-based view has reached the mainstream: **obesity is a chronic disease** — shaped by genetics, hormones, brain signaling, environment, and behavior. When you approach it through that lens, the struggle finally makes sense. If weight loss has felt harder for you than it "should," that isn't a character flaw. It's often biology.

## Losing Weight Can Be Hard — Not Just Keeping It Off

Many people never even reach their goal weight because the first phase — **creating a consistent calorie deficit** — can become a daily battle against intense hunger, cravings, and relentless mental focus on food.

For some individuals, that experience isn't occasional. It's persistent: you can plan the day perfectly, eat "healthy," and still feel pulled toward food in a way that feels bigger than choice. That experience is real — and it has a biological basis.

## What Biology Does When You Try to Eat Less

The human body is designed to prevent starvation. When calories drop and weight begins to decrease, many bodies respond with compensatory changes:

- **Hunger signals intensify** (your drive to eat increases)
- **Fullness cues can weaken** (you may not feel satisfied when you "should")
- **Energy expenditure can drop** (your body may conserve energy)
- **Food becomes more attention-grabbing** (cravings and "food noise" can rise)

This is one reason "just stay in a calorie deficit" can feel unrealistic for people with obesity. Many aren't choosing between salad and pizza. They're managing a nervous system and hormone environment that keeps pushing them toward eating.

## Obesity Is Chronic — and That Changes the Standard of Care

In medicine, chronic conditions are not treated with shame. They're treated with a plan. Obesity is increasingly recognized as a **chronic, relapsing disease** — meaning it often requires long-term strategy and follow-up rather than short-term, high-pressure dieting.

This doesn't remove personal responsibility — it removes unnecessary self-blame. When we acknowledge biology, we can treat the real problem and build a plan that's sustainable.

## Where Lifestyle Still Fits

Nutrition, movement, sleep, and stress management still matter — deeply. They improve metabolic health, preserve lean muscle, support energy, and reduce cardiometabolic risk.

But for many people with chronic obesity, lifestyle strategies may need additional support to be realistic over time — especially when hunger and cravings are intense. In those cases, medically guided care can help align biology with behavior.

## GLP-1 Medications: Supporting Appetite Regulation

GLP-1 and GIP/GLP-1 medications (such as **semaglutide** and **tirzepatide**) work by mimicking naturally occurring hormones involved in satiety and appetite regulation. When clinically appropriate, they can help reduce hunger, improve fullness, and support adherence to a structured plan.

These medications are not "shortcuts." They are tools used in obesity medicine to address biology — similar to how other chronic conditions are treated with evidence-based therapy.

## A More Honest, More Human Model of Long-Term Weight Care

At Nutree Clinic, we don't treat obesity like a motivation contest. We treat it like medicine — with personalized evaluation, ongoing follow-up, and adjustments that match your real life.

Some patients use lifestyle support alone. Some benefit from medical therapy for a defined period. Others may need longer-term support for chronic risk management. The "right" plan is the one that is safe, effective, and sustainable for you.

## References

1. Bray GA et al. Obesity: a chronic relapsing progressive disease process. A position statement of the World Obesity Federation. Obesity Reviews. 2017;18(7):715-723.
2. Sumithran P et al. Long-Term Persistence of Hormonal Adaptations to Weight Loss. New England Journal of Medicine. 2011;365:1597-1604.
3. Garvey WT et al. American Association of Clinical Endocrinologists and American College of Endocrinology Comprehensive Clinical Practice Guidelines for Medical Care of Patients with Obesity. Endocrine Practice. 2016;22(Suppl 3):1-203.
4. Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). New England Journal of Medicine. 2021;384:989-1002.`,
  },

  'retatrutide-vs-tirzepatide-what-the-research-really-says-about-the-new-triple-agonist-approach': {
    title: 'Retatrutide vs. Tirzepatide: What the Research Really Says About the New Triple-Agonist Approach',
    date: '2026-01-23',
    category: 'Weight Loss',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    excerpt: 'Tirzepatide and retatrutide represent two of the most advanced approaches to metabolic medicine. A clear-eyed look at the clinical trial data comparing the dual and triple agonist approaches.',
    coverImage: '/images/blog/retatrutide-vs-tirzepatide-research-nutreeclinic.jpg',
    content: `Tirzepatide and retatrutide represent two of the most advanced approaches to metabolic medicine available today. Here's a clear-eyed look at what the research actually shows — and what it doesn't.

## Understanding the Basics: Dual vs. Triple Agonists

### Tirzepatide: A Dual Agonist (GLP-1 + GIP)

Tirzepatide — sold under the brand names **Mounjaro** (for type 2 diabetes) and **Zepbound** (for weight management) — is currently **FDA-approved**. It works by activating two hormone receptors:

- **GLP-1 (glucagon-like peptide-1):** Reduces appetite and slows gastric emptying.
- **GIP (glucose-dependent insulinotropic polypeptide):** Complements GLP-1 to enhance insulin response and metabolic control.

This dual mechanism has proven highly effective: in the SURMOUNT-1 trial, participants on tirzepatide achieved a mean weight loss of **around 21–22% over 72 weeks** at the higher dose.

### Retatrutide: A Triple Agonist (GLP-1 + GIP + Glucagon)

**Retatrutide** is an investigational medication in **Phase 3 clinical trials** (not FDA-approved yet). It expands on tirzepatide's mechanism by also activating the **glucagon receptor**, in addition to GLP-1 and GIP.

Why is that important? **Glucagon receptor activation** theoretically increases **energy expenditure** and **lipolysis** (fat breakdown), helping mobilize stored fat — particularly from metabolically active tissues — in addition to decreasing appetite.

## What the Clinical Research Shows

### Weight Loss Efficacy

Early clinical data on retatrutide is impressive:

- In a Phase 2 obesity study, participants achieved an average **24.2% weight loss after 48 weeks** at higher doses.
- Some Phase 3 data reported even higher weight loss (up to ~28% at 68 weeks) on the highest doses, although full peer-reviewed publications are still pending.

By contrast, tirzepatide's most robust data shows average weight losses of ~20–22% over 72 weeks at approved doses.

**Important:** These figures are promising but not directly comparable in a head-to-head clinical trial yet, and retatrutide is not approved or prescribed outside research settings at this time.

## Mechanism Matters: Beyond Appetite Suppression

The additional glucagon receptor activity in retatrutide may promote greater energy use and mobilization of stored fat — and some early studies suggest this could translate into higher weight loss compared with dual agonists.

However, we don't yet have full peer-reviewed Phase 3 results published in major journals, long-term safety and side-effect profiles beyond early trials are not fully established, and head-to-head comparisons between tirzepatide and retatrutide do not yet exist in the medical literature.

Common side effects for both classes are primarily **gastrointestinal** (nausea, diarrhea, constipation). Early signals suggest higher heart rate changes with some triple-agonists, but this requires more study.

## Putting It in Perspective

At Nutree Clinic, our approach is rooted in **evidence and safety**. While medications like retatrutide represent an exciting future direction in metabolic care, they remain investigational and are not yet part of safe, FDA-approved clinical practice.

Today, the most **proven pharmacologic tools** for safe, supervised weight management include:

- **Semaglutide** — well-studied for appetite regulation and metabolic benefits
- **Tirzepatide** — dual agonist with robust, long-term weight loss data

These options are integrated into personalized programs with dietary support, lifestyle coaching, and clinical monitoring. As the science evolves, we will continue to follow the evidence and bring proven options to our patients.

## References

1. Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). New England Journal of Medicine. 2022;387:205-216.
2. Jastreboff AM et al. Triple–Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial. New England Journal of Medicine. 2023;389:514-526.
3. FDA. Zepbound® (tirzepatide) injection Prescribing Information. 2023.
4. Lincoff AM et al. Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes (SELECT trial). New England Journal of Medicine. 2023;389:2221-2232.`,
  },

  'glp-1-more-than-appetite-suppressants-a-whole-body-medicine': {
    title: 'GLP-1 Medications: More Than Appetite Suppressants — A Whole-Body Medicine',
    date: '2026-01-11',
    category: 'Weight Loss',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    excerpt: 'GLP-1 medications like semaglutide and tirzepatide have gained prominence for weight loss, but their therapeutic scope extends far beyond appetite suppression.',
    coverImage: '/images/blog/glp1-whole-body-medicine-semaglutide-nutreeclinic.jpg',
    content: `GLP-1 (glucagon-like peptide-1) medications like semaglutide and tirzepatide have gained prominence for weight loss effects, but their therapeutic scope extends far beyond appetite suppression. These drugs represent a shift in metabolic medicine with benefits spanning multiple organ systems.

## What Are GLP-1 Medications?

GLP-1 is a naturally occurring gut hormone released after eating. It stimulates insulin release when glucose rises, suppresses glucagon to reduce glucose production, and promotes satiety. However, the body breaks down natural GLP-1 within approximately 90 seconds via the DPP-4 enzyme.

Pharmaceutical GLP-1 receptor agonists are engineered to resist this breakdown, achieving a half-life measured in days rather than seconds. This sustained action allows prolonged engagement with GLP-1 receptors throughout the body.

## They Do Lower Appetite — But That's Not All

GLP-1 medications reduce appetite by slowing gastric emptying, keeping food in the stomach longer and promoting fullness. Rather than simple hunger suppression, this mechanism activates gut-brain pathways involving vagal signaling that influence both stomach movement and satiety signals.

## They Improve Blood Sugar Regulation

These medications have been used in diabetes management for years because they increase insulin secretion when glucose is elevated and suppress glucagon release. This glucose-dependent mechanism reduces hypoglycemia risk compared with older diabetes drugs.

## Cardiovascular Benefits

Recent clinical trials demonstrate significant heart-protective effects. GLP-1 medications lower the risk of major adverse cardiovascular events, improve cholesterol and blood pressure profiles, and enhance blood vessel function. Some formulations now carry FDA approval specifically for cardiovascular risk reduction in patients with heart disease.

## Kidney Protection

GLP-1 medications show promise in slowing chronic kidney disease progression. In 2025, the FDA approved Ozempic (semaglutide) specifically for reducing kidney failure risk and major cardiovascular events in type 2 diabetes patients with CKD. Protective mechanisms likely include improved blood pressure control, reduced inflammation, and enhanced metabolic regulation.

## Liver Health: Beyond Fat Loss

Non-alcoholic fatty liver disease and metabolic dysfunction-associated steatohepatitis connect closely with obesity and insulin resistance. GLP-1 medications, particularly Wegovy, have demonstrated significant improvements in liver inflammation and fibrosis. Regulatory bodies have begun approving these drugs as MASH treatments, suggesting beneficial effects on hepatic fat content, inflammation, and metabolic stress.

## Possible Benefits for Sleep Apnea

Obstructive sleep apnea correlates strongly with obesity. GLP-1 medications improve sleep apnea symptoms through weight and metabolic improvements. Newer GLP-1-based drugs have earned FDA approval for moderate-to-severe OSA in obese adults.

## Anti-Inflammatory and Systemic Effects

Emerging research indicates GLP-1 drugs may possess anti-inflammatory and immune-modulating properties. These effects could explain benefits extending beyond weight loss and glycemic control to conditions like arthritis and systemic metabolic dysfunction. These medications are also being explored for neurodegenerative diseases and addictive behaviors.

## A Paradigm Shift in Medicine

GLP-1 medications function as systemic, biologically grounded treatments that improve glycemic control, enhance satiety, reduce cardiovascular risk, protect kidney function, support liver health, and modulate inflammation. They represent transformative therapy not only for obesity and diabetes but for broader chronic disease management.

At Nutree Clinic, these medications are prescribed at the clinician's discretion following comprehensive individual evaluation — as part of a personalized plan, not a one-size-fits-all protocol.

## References

1. Marso SP et al. Liraglutide and Cardiovascular Outcomes in Type 2 Diabetes (LEADER). New England Journal of Medicine. 2016;375:311-322.
2. Neal B et al. Canagliflozin and Cardiovascular and Renal Events in Type 2 Diabetes. New England Journal of Medicine. 2017;377:644-657.
3. Perkovic V et al. Semaglutide and Kidney Outcomes in T2D with CKD (FLOW trial). New England Journal of Medicine. 2024.
4. Newsome PN et al. A Placebo-Controlled Trial of Subcutaneous Semaglutide in Nonalcoholic Steatohepatitis (NASH). New England Journal of Medicine. 2021;384:1113-1124.
5. Malhotra A et al. Tirzepatide for the Treatment of Obstructive Sleep Apnea and Obesity (SURMOUNT-OSA). New England Journal of Medicine. 2024.`,
  },

  'a-new-era-in-obesity-care-the-first-oral-semaglutide-pill-is-here': {
    title: 'A New Era in Obesity Care: The First Oral Semaglutide Pill Is Here',
    date: '2026-01-06',
    category: 'Weight Loss',
    readTime: '4 min',
    author: 'Tara Marko, PA-C',
    excerpt: 'Obesity medicine is evolving rapidly. In late 2025, the FDA approved the first oral GLP-1 pill for weight management — here\'s what the clinical evidence shows.',
    coverImage: '/images/blog/oral-semaglutide-pill-obesity-care-nutreeclinic.jpg',
    content: `Obesity medicine is evolving — rapidly.

Advances in metabolic science over the past decade have transformed our understanding of how the body regulates hunger, weight, and energy balance. Treatments that work **with** human biology — rather than against it — have reshaped care and expanded what's possible for long-term, sustainable weight loss.

## A First-Ever FDA Approval

In late December 2025, the FDA approved **a daily oral semaglutide pill (branded Wegovy)** specifically for chronic weight management — the first GLP-1 receptor agonist in pill form for this indication. Expected availability: January 2026.

This represents a distinct approval for weight management at doses up to **25 mg once daily**, exceeding diabetes-approved oral semaglutide doses (7 mg and 14 mg).

## Why This Matters

Injectable GLP-1 medications have transformed obesity care, yet many patients resist injections due to access barriers or convenience concerns. Now, people with obesity have **a daily oral alternative with robust clinical support**, addressing previous hesitations about needle-based treatment.

## Clinical Evidence: What the Science Shows

The approval relied on **Phase III OASIS 4 clinical trial** data — a 64-week study examining once-daily oral semaglutide 25 mg versus placebo in adults with obesity or overweight and weight-related comorbidities.

Key findings include:

- Participants achieved a **mean weight loss of ~16.6%** when treatment was fully adhered to
- One-third lost **≥20% of their body weight** — comparable to injectable Wegovy results
- Improvements appeared in cardiometabolic risk factors including blood pressure, lipid profiles, and inflammation markers
- Safety profile aligned with existing GLP-1 understanding in obesity treatment

## A Balanced View

**The Good:**

- No needles, more options — oral administration appeals to patients avoiding injections
- Comparable effects to injection — weight loss averages match weekly injectable semaglutide when taken consistently
- Early price signals suggest a starting list price of approximately $149 monthly for the lowest dose

**The Considerations:**

- **Bioavailability challenges remain** — oral semaglutide has very low absorption in the gut (~1–2%), requiring specific conditions: empty stomach, limited water, and 30+ minutes before food or other medications
- **Adherence matters** — a pill's convenience still demands timing discipline for meaningful benefit
- **Cost at higher doses is still unclear** — pricing for the 25 mg dose and insurance coverage remain evolving

## What This Means for Patients

Nutree Clinic integrates evidence-based pharmacotherapy with lifestyle, metabolic support, and long-term behavior interventions. This new oral option expands treatment possibilities but doesn't replace comprehensive care planning.

Some patients may prefer injectable therapy; others may benefit from daily oral administration. Personalized assessment determines the optimal approach for each individual.

Higher degrees of weight loss correlate with meaningful metabolic health improvements — diabetes risk reduction, improved blood pressure, and greater physical function. These medications perform optimally when paired with personalized lifestyle intervention and consistent follow-up — not as a shortcut, but as part of a complete plan.

## References

1. Knop FK et al. Oral Semaglutide 50 mg Taken Once per Day in Adults with Overweight or Obesity (OASIS 1). Lancet. 2023;402:705-719.
2. FDA. New Drug Approval — Oral Semaglutide (Wegovy) for Chronic Weight Management. December 2025.
3. Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1). New England Journal of Medicine. 2021;384:989-1002.
4. Ryan DH et al. Weight loss and improvement in comorbidity: differences at 5%, 10%, 15%, and over. Current Obesity Reports. 2017;6(2):187-194.`,
  },

  'the-emotional-side-of-glp-1-weight-loss-2': {
    title: 'The Emotional Side of GLP-1 Weight Loss (Part II)',
    date: '2025-12-31',
    category: 'Well-being',
    readTime: '5 min',
    author: 'Tara Marko, PA-C',
    excerpt: 'When appetite quiets, life doesn\'t reorganize itself on its own. The medication may lower the volume — but you still build the system. This is about rebuilding daily life when food is no longer the anchor.',
    coverImage: '/images/blog/emotional-side-glp1-weight-loss-nutreeclinic.jpg',
    content: `When appetite quiets, life doesn't reorganize itself on its own. The medication may lower the volume — but you still build the system.

This phase is about learning how to live without the constant pull that once shaped your days.

## Relearning Hunger, Fullness, and Nutrition

When food noise quiets, familiar cues may feel different. You might get full faster. You might forget to eat until you feel unwell. You might eat out of habit and realize halfway through that you're already comfortable.

This isn't failure. It's recalibration.

Many people benefit from approaching eating more intentionally: serving smaller portions, pausing mid-meal to check in with hunger and comfort, and letting "enough" be enough without pressure to finish.

Adequate nutrition still matters. Prioritizing **protein, hydration, and nutrient-dense foods** supports energy, muscle preservation, and metabolic health during weight loss. If appetite feels too suppressed — or not suppressed enough — that's a clinical conversation, not a moral one.

## When Food Is No Longer Your Stress Relief

If food used to help you downshift after a long day, its absence can leave a noticeable gap.

GLP-1 medications may reduce the urge, but they don't replace the function food served. Stress still needs an outlet. Comfort still matters.

You don't need a perfect replacement — just something that serves the same purpose. A short walk. A shower. Stretching. Music. Writing things down. Going to bed earlier as an act of recovery.

The goal isn't self-improvement. It's regulation.

If emotional eating was closely tied to anxiety, trauma, or binge patterns, working with a qualified mental health professional alongside medical care can be an important part of this transition.

## Navigating Social Life Without Oversharing

Food is culture, family, dating, and celebration. Even when your appetite changes, you don't need to opt out of your life.

You may want less. You may feel full sooner. You may feel self-conscious eating differently than others. It can help to have a simple response that protects your privacy:

- "I'm working with my clinician and listening to my body."
- "I'm focusing on how I feel, not just the scale."

You don't owe anyone an explanation.

## Side Effects, Emotions, and Listening to Your Body

Physical side effects — such as nausea, constipation, or fatigue — can shape your emotional experience more than you expect. These effects are most common during dose increases and often improve with gradual titration and supportive strategies.

You don't need to push through persistent discomfort to prove commitment. Adjustments matter. **Weight loss is not a test of endurance. It's a medical process.**

## GLP-1 Weight Loss Maintenance and Long-Term Planning

At some point, the question of "what happens next" arises.

Clinical data show that stopping GLP-1 therapy often leads to some degree of weight regain. This doesn't mean you failed. It reflects a biological reality: the physiology that made weight loss difficult in the first place doesn't disappear.

That doesn't mean everyone needs to stay on medication forever. It means **long-term planning matters**.

For some, ongoing medication is part of managing a chronic condition. For others, medication is used for a period while habits, routines, and metabolic health stabilize. These decisions are medical — not moral.

## Why Support Matters

GLP-1 medications can change how much you eat. They can also change how you cope, socialize, and relate to your body. That combination deserves more than a prescription and a shipment notification.

Ongoing care means:

- Adjustments as your body responds
- Space to talk about emotional shifts, not just side effects
- Realistic conversations about maintenance
- A plan that evolves with your life

## References

1. Wilding JPH et al. Weight Regain and Cardiometabolic Effects after Withdrawal of Semaglutide (STEP 1 Extension). Diabetes, Obesity and Metabolism. 2022;24(8):1553-1564.
2. Rubino DM et al. Effect of Weekly Subcutaneous Semaglutide vs Daily Liraglutide on Body Weight in Adults with Overweight or Obesity Without Diabetes (STEP 8). JAMA. 2022;327(2):138-150.
3. Garvey WT et al. Two-year sustained weight loss and metabolic benefits with controlled-release phentermine/topiramate in obese and overweight adults. American Journal of Clinical Nutrition. 2012.
4. Linardon J, Mitchell S. Rigid dietary control, flexible dietary control, and intuitive eating: evidence for their differential relationship to disordered eating and body image concerns. Eating Behaviors. 2017;26:16-22.`,
  },
}

const POSTS_LIST = Object.entries(POSTS).map(([slug, post]) => ({ slug, ...post }))

// Curated by content — cross-category where thematically relevant
const RELATED: Record<string, string[]> = {
  'peptides-and-mental-health': [
    'what-is-nad',                                          // NAD+ for cognitive energy discussed in both
    'deep-sleep-cortisol-and-fat-loss',                     // Sermorelin + sleep quality covered in both
    'glp-1-more-than-appetite-suppressants-a-whole-body-medicine', // GLP-1 food noise / reward pathways
  ],
  'struggling-with-fertility-the-cellular-factor-most-people-overlook': [
    'what-is-nad',                                          // Core NAD+ science behind the fertility angle
    'peptides-and-mental-health',                           // NAD+ cognitive / cellular energy overlap
    'deep-sleep-cortisol-and-fat-loss',                     // Recovery, cellular health, and hormonal balance
  ],
  'what-is-nad': [
    'struggling-with-fertility-the-cellular-factor-most-people-overlook', // NAD+ + reproduction
    'peptides-and-mental-health',                           // NAD+ for brain fog / cognitive energy
    'deep-sleep-cortisol-and-fat-loss',                     // Growth hormone, energy, recovery overlap
  ],
  'deep-sleep-cortisol-and-fat-loss': [
    'protecting-your-muscle-while-you-lose-weight',         // Sermorelin discussed in both
    'why-weight-loss-can-feel-impossible',                  // Same patients, biology of fat storage
    'peptides-and-mental-health',                           // Sermorelin for sleep / recovery
  ],
  'protecting-your-muscle-while-you-lose-weight': [
    'why-weight-loss-can-feel-impossible',                  // Same patient journey, biology of weight loss
    'deep-sleep-cortisol-and-fat-loss',                     // Sermorelin + recovery angle
    'glp-1-more-than-appetite-suppressants-a-whole-body-medicine', // Same medications, broader context
  ],
  'why-weight-loss-can-feel-impossible': [
    'glp-1-more-than-appetite-suppressants-a-whole-body-medicine', // Explains the mechanism behind the solution
    'protecting-your-muscle-while-you-lose-weight',         // Practical next step for the same patient
    'the-emotional-side-of-glp-1-weight-loss-2',            // Same journey, emotional layer
  ],
  'retatrutide-vs-tirzepatide-what-the-research-really-says-about-the-new-triple-agonist-approach': [
    'glp-1-more-than-appetite-suppressants-a-whole-body-medicine', // Mechanism context for both drugs
    'a-new-era-in-obesity-care-the-first-oral-semaglutide-pill-is-here', // New delivery/options angle
    'protecting-your-muscle-while-you-lose-weight',         // What to do once on these medications
  ],
  'glp-1-more-than-appetite-suppressants-a-whole-body-medicine': [
    'a-new-era-in-obesity-care-the-first-oral-semaglutide-pill-is-here', // New oral delivery of same drug
    'retatrutide-vs-tirzepatide-what-the-research-really-says-about-the-new-triple-agonist-approach', // What's next after GLP-1
    'why-weight-loss-can-feel-impossible',                  // Why these drugs address a biological problem
  ],
  'a-new-era-in-obesity-care-the-first-oral-semaglutide-pill-is-here': [
    'glp-1-more-than-appetite-suppressants-a-whole-body-medicine', // What the drug actually does beyond weight
    'retatrutide-vs-tirzepatide-what-the-research-really-says-about-the-new-triple-agonist-approach', // What's coming next
    'the-emotional-side-of-glp-1-weight-loss-2',            // What to expect once starting treatment
  ],
  'the-emotional-side-of-glp-1-weight-loss-2': [
    'why-weight-loss-can-feel-impossible',                  // Biology behind the struggle they've been living
    'protecting-your-muscle-while-you-lose-weight',         // Practical nutrition and training during treatment
    'a-new-era-in-obesity-care-the-first-oral-semaglutide-pill-is-here', // Treatment options context
  ],
}

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  'Weight Loss': { bg: 'var(--glp)',  color: 'var(--glp-dark)' },
  'Longevity':   { bg: 'var(--nad)',  color: 'var(--nad-dark)' },
  'Well-being':  { bg: 'var(--oxy)',  color: 'var(--oxy-dark)' },
  'Energy':      { bg: 'var(--b12)',  color: 'var(--b12-dark)' },
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} — Nutree Clinic`,
    description: post.excerpt,
  }
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function extractTOC(text: string) {
  return text.split('\n')
    .filter(l => l.startsWith('## '))
    .map(l => ({ title: l.slice(3), id: slugify(l.slice(3)) }))
}

function renderContent(text: string) {
  const lines = text.split('\n')
  const elements: React.ReactNode[] = []
  let listBuffer: React.ReactNode[] = []

  const flushList = (key: string) => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={key} style={{ paddingLeft: '1.5rem', margin: '0.75rem 0 1.25rem', listStyle: 'disc' }}>
          {listBuffer}
        </ul>
      )
      listBuffer = []
    }
  }

  lines.forEach((line, i) => {
    if (line.startsWith('## ')) {
      flushList(`ul-${i}`)
      const title = line.slice(3)
      elements.push(
        <h2 key={i} id={slugify(title)} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ink)', margin: '2.5rem 0 0.875rem', lineHeight: 1.25, scrollMarginTop: '80px' }}>
          {title}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      flushList(`ul-${i}`)
      elements.push(
        <h3 key={i} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--ink)', margin: '1.75rem 0 0.5rem', lineHeight: 1.3 }}>
          {line.slice(4)}
        </h3>
      )
    } else if (/^[-*] /.test(line)) {
      const content = line.replace(/^[-*] /, '')
      listBuffer.push(
        <li key={i}
          style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '0.375rem' }}
          dangerouslySetInnerHTML={{ __html: content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
        />
      )
    } else if (/^\d+\.\s/.test(line)) {
      flushList(`ul-${i}`)
      elements.push(
        <p key={i}
          style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: '0.375rem' }}
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
        />
      )
    } else if (line.trim() === '') {
      flushList(`ul-${i}`)
      elements.push(<div key={i} style={{ height: '0.375rem' }} />)
    } else {
      flushList(`ul-${i}`)
      elements.push(
        <p key={i}
          style={{ fontSize: '1.0625rem', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '0.625rem' }}
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
        />
      )
    }
  })
  flushList('ul-end')
  return elements
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) notFound()

  const cat = CATEGORY_COLORS[post.category] || { bg: 'var(--teal)', color: '#fff' }
  const relatedSlugs = RELATED[slug] ?? []
  const related = relatedSlugs
    .map(s => POSTS_LIST.find(p => p.slug === s))
    .filter((p): p is typeof POSTS_LIST[number] => p !== undefined)
  const toc = extractTOC(post.content)

  return (
    <>
      {/* Back nav */}
      <div style={{ padding: '0.875rem 1.5rem', borderBottom: '0.5px solid var(--border)', background: 'var(--white)' }}>
        <Link href="/blog" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
          fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink-3)',
          textDecoration: 'none',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          All articles
        </Link>
      </div>

      {/* Main layout */}
      <div style={{ background: 'var(--white)' }}>
        <div className="blog-layout" style={{ maxWidth: 1080, margin: '0 auto', padding: '2.5rem 1.5rem 4rem', display: 'flex', gap: '5rem', alignItems: 'flex-start' }}>

          {/* ── LEFT: Article ─────────────────────────────────────── */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', background: cat.bg, color: cat.color }}>
                {post.category}
              </span>
              <span style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>{post.readTime} read</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>·</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--ink-3)' }}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 4vw, 2.625rem)', color: 'var(--ink)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              {post.title}
            </h1>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.75rem' }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--nad)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', fontWeight: 700, color: 'var(--nad-dark)', flexShrink: 0, letterSpacing: '0.03em' }}>TM</div>
              <span style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', fontWeight: 500 }}>{post.author}</span>
            </div>

            {/* Key takeaways box */}
            <div style={{ background: 'var(--base)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '2rem', borderLeft: '3px solid var(--teal)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--teal)', marginBottom: '0.75rem' }}>
                Key takeaways
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.75 }}>{post.excerpt}</p>
            </div>

            {/* Cover image */}
            <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: '2rem', aspectRatio: '16 / 9' }}>
              <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Article body */}
            {renderContent(post.content)}

            {/* Legal */}
            <div style={{ marginTop: '2.5rem', paddingTop: '1.25rem', borderTop: '0.5px solid var(--border)', fontSize: '0.75rem', color: 'var(--ink-3)', lineHeight: 1.65 }}>
              This article is for informational purposes only and does not constitute medical advice. Always consult with a licensed healthcare provider before starting any treatment.
            </div>
          </div>

          {/* ── RIGHT: Sticky TOC ──────────────────────────────────── */}
          {toc.length > 0 && (
            <aside style={{ width: 220, flexShrink: 0, position: 'sticky', top: 80, display: 'none' }} className="blog-toc">
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-3)', marginBottom: '0.875rem' }}>
                Contents
              </div>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                {toc.map(item => (
                  <a key={item.id} href={`#${item.id}`} className="toc-link">
                    {item.title}
                  </a>
                ))}
              </nav>
            </aside>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) { .blog-toc { display: flex !important; flex-direction: column; } }
        .toc-link { font-size: 0.875rem; color: var(--ink-3); text-decoration: none; padding: 0.3rem 0.625rem; border-radius: 6px; line-height: 1.45; transition: color 0.15s, background 0.15s; }
        .toc-link:hover { color: var(--ink); background: var(--base); }
      `}</style>

      {/* Related reading */}
      {related.length > 0 && (
        <section style={{ padding: '2.5rem 1.5rem', background: 'var(--base)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-3)', marginBottom: '1.25rem' }}>
              Related reading
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {related.map(r => {
                const rc = CATEGORY_COLORS[r.category] || { bg: 'var(--teal)', color: '#fff' }
                return (
                  <Link key={r.slug} href={`/blog/${r.slug}`} style={{ display: 'flex', flexDirection: 'column', flex: '1 1 220px', minWidth: 220, textDecoration: 'none', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '0.5px solid var(--border)', overflow: 'hidden' }}>
                    <div style={{ width: '100%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
                      <img src={r.coverImage} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div style={{ padding: '0.875rem 1rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.375rem', flex: 1 }}>
                      <span style={{ fontSize: '0.6875rem', fontWeight: 700, padding: '1px 6px', borderRadius: '999px', background: rc.bg, color: rc.color, alignSelf: 'flex-start' }}>
                        {r.category}
                      </span>
                      <div style={{ fontSize: '0.9375rem', fontFamily: 'var(--font-serif)', color: 'var(--ink)', lineHeight: 1.35, fontWeight: 600 }}>{r.title}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--ink-3)', marginTop: 'auto', paddingTop: '0.25rem' }}>{r.readTime} read</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <ConsultBand />
    </>
  )
}
