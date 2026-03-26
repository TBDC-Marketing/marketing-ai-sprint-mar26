// slides-content.js
// FINAL VERSION — 21 slides for "Marketing Leverage in 2026"
// Sprint Week Lunch & Learn | Thursday, March 26, 2026
// Dan Flatt, Senior Director of Marketing | TBDC
//
// REPLACES the previous version entirely.
// Copy this file to src/slides-content.js in the project.

export const SECTIONS = [
  { id: 'opening', label: 'Opening', range: [1, 4] },
  { id: 'pmf', label: 'PMF', range: [5, 8] },
  { id: 'canada', label: 'Canada', range: [9, 13] },
  { id: 'partnerships', label: 'Partnerships', range: [14, 15] },
  { id: 'ai-leverage', label: 'AI Leverage', range: [16, 19] },
  { id: 'action-plan', label: 'Action Plan', range: [20, 21] },
];

export const SLIDES = [

  // ═══════════════════════════════════════════════════════════
  // OPENING (Slides 1–4)
  // ═══════════════════════════════════════════════════════════

  {
    id: 1,
    section: 'opening',
    title: 'Title',
    layout: 'hero',
    surface: 'dark',
    cognitiveJob: 'attract',
    headline: 'Marketing Leverage\nin 2026',
    subtitle: 'For founders entering North America',
    byline: 'Dan Flatt — TBDC',
    emphasis: null,
    presenterNotes: 'Lead: Dan\n\n"You\'ve spent three days in meetings, hearing buyer reactions, investor questions, and procurement friction. This session is designed to help you interpret what that means for your go-to-market."\n\n"I\'m not going to give you a generic marketing playbook. I\'m going to show you what changes in Canada, what your public surface is currently signaling to buyers, and where AI can actually help."\n\nFrame the room: Horizon founders are earlier-stage and technically strong; Pivot founders are more commercially mature. Both groups need translation into local trust, proof, and buying paths.\n\nTransition: "Before strategy, let\'s reset the room from business mode into buyer mode."\nTiming: ~1.5 min',
  },

  {
    id: 2,
    section: 'opening',
    title: 'Credibility Test',
    layout: 'thesis',
    surface: 'light',
    cognitiveJob: 'orient',
    headline: 'Open your website\non your phone.',
    body: [
      'Could a Canadian buyer tell:',
      'Who this is for?',
      'Why trust you here?',
      'What to do next?',
    ],
    emphasis: null,
    presenterNotes: 'Lead: Dan\n\n"Take out your phones. Open your homepage. Look at it like a Canadian enterprise buyer who has never heard of you. Answer these three questions honestly." Pause for 20–30 seconds. Let the room sit with it.\n\n"This is the lens Canadian buyers use. Not your pitch deck. Not your roadmap. Your public surface."\n\nTransition: "Now let me show you what the cohort data says when buyers do exactly that test."\nTiming: ~2 min',
  },

  {
    id: 3,
    section: 'opening',
    title: 'Audit Rubric',
    layout: 'card-grid',
    surface: 'light',
    cognitiveJob: 'orient',
    headline: 'The 8 Factors\nCanadian Buyers Evaluate',
    cards: [
      { company: '1', play: 'Website Positioning Clarity', description: 'Can a Canadian buyer understand who you serve and why you\'re different within 10 seconds?', program: 'horizon' },
      { company: '2', play: 'Trust & Social Proof', description: 'Named case studies, customer logos, third-party reviews, partner ecosystem visibility.', program: 'horizon' },
      { company: '3', play: 'Canadian Market Readiness', description: 'Canada-specific content, local entity, CAD pricing, Canadian references, compliance signals.', program: 'pivot' },
      { company: '4', play: 'Founder & LinkedIn Presence', description: 'Would a buyer who checks LinkedIn after an intro feel confident taking the meeting?', program: 'pivot' },
      { company: '5', play: 'Content & Thought Leadership', description: 'Do you produce content that positions you as an authority findable by NA buyers?', program: 'horizon' },
      { company: '6', play: 'AI Search Visibility', description: 'When buyers search your problem space in ChatGPT or Perplexity, do you appear?', program: 'horizon' },
      { company: '7', play: 'Conversion Infrastructure', description: 'Demo booking, pricing clarity, calendar integration — can an interested buyer take the next step?', program: 'pivot' },
      { company: '8', play: 'Competitive Differentiation', description: 'Does your public messaging clearly differentiate you from the alternatives a Canadian buyer would also evaluate?', program: 'pivot' },
    ],
    emphasis: 'This week, ask your meeting partners: which of these factors would make you hesitate?',
    presenterNotes: 'Lead: Dan\n\n"Before we get into frameworks and strategy, I want to give you the buyer\'s checklist. These are the 8 factors that Canadian enterprise buyers — consciously or unconsciously — evaluate when they encounter a new international vendor."\n\n"We\'re not scoring you today. What I want you to do is keep these 8 factors in mind during every meeting you have for the rest of Sprint Week. After each meeting, ask yourself: would that buyer have concerns about any of these?"\n\n"Better yet — ask them directly. You\'ll be surprised how candid Canadian buyers are when you invite honest feedback."\n\nWalk through the 8 cards briefly — 10-15 seconds each. Frame each as a question the buyer is silently asking, not a score.\n\nTransition: "Now let me show you how to use this framework actively during Sprint Week — and what you\'ll receive from us after."\nTiming: ~3 min',
  },

  {
    id: 4,
    section: 'opening',
    title: 'Using This Framework',
    layout: 'thesis-with-example',
    surface: 'light',
    cognitiveJob: 'orient',
    headline: 'How to Pressure-Test\nYour Own Readiness',
    body: [
      'Use these 8 factors as a self-assessment lens during your Sprint Week meetings.',
      'After each meeting, score yourself honestly: where would that buyer have hesitated?',
      'The most valuable feedback comes from the people you\'re meeting this week — mentors, potential partners, and prospective buyers who know the Canadian market.',
    ],
    emphasis: 'You will each receive your individual readiness report early next week, along with an invitation to book a 1:1 with Dan to review your results and build your action plan together.',
    example: {
      title: 'Your Sprint Week homework',
      body: 'After each meeting this week, note which of the 8 factors felt like a gap. By Friday, you\'ll have real market feedback — not just an audit, but buyer-validated insight. Bring those notes to your 1:1.',
    },
    presenterNotes: 'Lead: Dan\n\n"I don\'t want you to take my word for where your gaps are. I want you to discover them through the meetings our team has set up for you this week."\n\n"After each meeting, take 2 minutes and ask yourself: which of those 8 factors would have given that buyer pause? Write it down. By Friday you\'ll have real, market-validated data."\n\n"And here\'s what\'s coming from our side: early next week, you\'ll each receive an individual readiness report. It\'s a detailed assessment across all 8 categories, specific to your company. Along with that, you\'ll get a link to book a 1:1 session with me where we\'ll review the results together and build your specific action plan."\n\n"The reason I\'m sharing those reports after Sprint Week rather than today is that I want you to form your own impressions first. Your meetings this week are the most valuable data source — more valuable than any audit."\n\nTransition: "Now, before we talk about the Canadian market specifically, let\'s go one level deeper into the foundation everything else rests on."\nTiming: ~2.5 min',
  },

  // ═══════════════════════════════════════════════════════════
  // PMF AS FOUNDATION (Slides 5–8)
  // ═══════════════════════════════════════════════════════════

  {
    id: 5,
    section: 'pmf',
    title: 'PMF First',
    layout: 'section-divider',
    surface: 'dark',
    cognitiveJob: 'dramatize',
    sectionLabel: 'Foundation',
    headline: 'PMF first.',
    body: [
      'Your positioning changes by market.',
      'Your product-market fit must be re-validated here.',
    ],
    emphasis: null,
    presenterNotes: 'Lead: Dan\n\n"The original version of this deck started with positioning. This version starts one level deeper. Why? Because most of you already have positioning that works in your home market. The real question is whether the underlying pull transfers to Canada."\n\n"Your positioning will change by market. Your PMF is the stable foundation — but only if it holds when the buyer, procurement environment, proof expectations, and trust dynamics change."\n\nFor Pivot founders: "You may have clear PMF at home, but the North American buying norms are different — you need to test transferability." For Horizon founders: "You may still be discovering whether the Canadian buyer has the same urgency profile as your European buyers."\n\nTransition: "So how do we test that quickly and rigorously?"\nTiming: ~2 min',
  },

  {
    id: 6,
    section: 'pmf',
    title: 'The PMF Test',
    layout: 'process',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'The "Very Disappointed" Test',
    processSteps: [
      { number: '?', label: 'Very disappointed', description: 'Strong PMF signal' },
      { number: '?', label: 'Somewhat disappointed', description: 'Room to improve' },
      { number: '?', label: 'Not disappointed', description: 'PMF not yet proven' },
    ],
    emphasis: '40%+ "very disappointed" = strong PMF signal. Start adapting these questions for your industry and testing them in your meetings this week.',
    presenterNotes: 'Lead: Dan\n\n"This is Rahul Vora\'s framework from Superhuman. PMF isn\'t a gut feeling. It\'s measurable. You survey active users and ask: How would you feel if you could no longer use our product? If less than 40% say \'very disappointed,\' you don\'t have PMF yet."\n\n"For this cohort: run this test with your first North American pilot customers. Don\'t ask \'do you like it?\' Ask \'would you be very disappointed if we took it away?\'"\n\nCohort tie-ins: xTiles should test the Canadian team-buyer hypothesis, not just existing prosumer users. Quanscient and WIDMO should test Canadian enterprise stakeholders. Omniful and TryNdBuy should isolate North American buyer segments.\n\nTransition: "The power of this framework is not just the score. It\'s what you do with the answers."\nTiming: ~3 min',
  },

  {
    id: 7,
    section: 'pmf',
    title: 'Four PMF Questions',
    layout: 'card-grid',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'The Four PMF Questions\nThat Matter Now',
    cards: [
      { company: '1', play: 'How disappointed would they be?', description: 'The PMF signal — the "very disappointed" threshold tells you if the pull is real.', program: 'horizon' },
      { company: '2', play: 'Who benefits most?', description: 'Finds your highest-expectation customer in this market. That\'s your Canadian ICP.', program: 'horizon' },
      { company: '3', play: 'What do they love most?', description: 'Tells you what to amplify in messaging — the value that resonates.', program: 'pivot' },
      { company: '4', play: 'What almost stops them?', description: 'Tells you what\'s blocking transfer into Canada. Often proof, compliance, or buying friction — not the product.', program: 'pivot' },
    ],
    presenterNotes: 'Lead: Dan\n\nWalk through the four-question logic:\n- "Question 1 is the PMF signal."\n- "Question 2 finds your highest-expectation customer in this market. That\'s your Canadian ICP."\n- "Question 3 tells you what to amplify in your messaging."\n- "Question 4 tells you what\'s blocking transfer into Canada. Sometimes it\'s product. More often it\'s proof, compliance, buying friction, or integration fit."\n\nExplain Vora\'s 50/50 roadmap: double down on what fans love, and remove barriers for the almost-convinced.\n\nCohort tie-ins: For Voltie, the blocker may be buyer confusion across residential vs. commercial. For Aibo, the blocker is regulatory trust, not product utility. For xTiles, the gap between individual-user storytelling and team adoption value.\n\nTransition: "And getting to that 40% is harder now than two years ago."\nTiming: ~3 min',
  },

  {
    id: 8,
    section: 'pmf',
    title: 'SaaS Apocalypse',
    layout: 'thesis-with-example',
    surface: 'light',
    cognitiveJob: 'dramatize',
    headline: 'If your product is easy\nto recreate, AI makes\nthat obvious.',
    body: [],
    emphasis: 'Defensible products own: workflow · data · trust · outcomes',
    example: {
      title: 'The Competitive Threat',
      body: 'Your competitors aren\'t just other startups. Your competitors are your own customers. Non-technical operators can now prototype internal tools using AI agents. If what you sell is mostly a nice interface on commodity workflows, the market will pressure you fast. The question: if your best customer tried to rebuild what you do with AI in a week, what would still be hard? That hard part is your moat.',
    },
    presenterNotes: 'Lead: Dan\n\n"We are entering what some call the \'SaaS Apocalypse.\' The real threat isn\'t that SaaS is dead — it\'s that shallow, easy-to-replicate products are increasingly vulnerable."\n\nCohort tie-ins: "Fermi Dev — your moat isn\'t the dashboard, it\'s encoding complex manufacturing workflows that an intern with ChatGPT can\'t safely replicate. Quanscient — your moat is simulation depth, not \'AI.\' WIDMO — hard-to-reproduce subsurface insight and deployment credibility. xTiles needs to articulate team workflow and business outcomes more clearly."\n\nTransition: "So you need defensible PMF. But even with a great product, how you package it for Canada changes everything."\nTiming: ~3 min',
  },

  // ═══════════════════════════════════════════════════════════
  // WHAT CHANGES IN CANADA (Slides 9–13)
  // ═══════════════════════════════════════════════════════════

  {
    id: 9,
    section: 'canada',
    title: 'What Changes',
    layout: 'section-divider',
    surface: 'dark',
    cognitiveJob: 'orient',
    sectionLabel: 'Canada',
    headline: 'Same product.\nDifferent trust math.',
    body: [
      'Canada is not a smaller version of the U.S. It\'s more concentrated, more reference-driven, and more procurement-sensitive.',
    ],
    emphasis: null,
    presenterNotes: 'Lead: Dan\n\n"Foreign founders often assume they need new messaging. Sometimes they do. But more often, they need new trust signals."\n\n"Buyers here are surprisingly defensive — 43% admit they make \'defensive\' purchase decisions over 70% of the time. They prioritize safety over upside."\n\nTransition: "Here\'s the credibility framework we want you to leave with."\nTiming: ~1.5 min',
  },

  {
    id: 10,
    section: 'canada',
    title: 'Credibility Framework',
    layout: 'process',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'The 3-Layer\nCredibility Framework',
    processSteps: [
      { number: '1', label: 'Visibility', description: 'Can buyers find you? (AI search, website, LinkedIn, associations)' },
      { number: '2', label: 'Trust Signals', description: 'Do buyers believe you? (Local references, partner logos, compliance, founder alignment)' },
      { number: '3', label: 'Conversion Readiness', description: 'Can buyers act now? (Demo booking, CAD pricing, timezone-friendly calendar, pilot docs)' },
    ],
    emphasis: 'You can\'t skip from visibility to purchase. And you can\'t solve conversion if trust is missing.',
    presenterNotes: 'Lead: Dan\n\nLayer 1 — Visibility: "If they search your problem space in ChatGPT, do you show up? Canadian-localized site? LinkedIn showing Canadian activity?"\n\nLayer 2 — Trust Signals: "Canadian reference? Local partner logo? Compliance front-and-center? For EU founders: signaling CETA eligibility?"\n\nLayer 3 — Conversion Readiness: "Clear enterprise buying path? Demo booking in EST/PST? CAD pricing? Or generic contact form going to a European phone number?"\n\nCohort tie-in: "VEMOCO scores well — Toronto address, local contact, procurement visibility. For many of you, your founder LinkedIn is more credible than your homepage — a strength and a gap."\n\nTransition: "Let\'s ground each layer in the data."\nTiming: ~3 min',
  },

  {
    id: 11,
    section: 'canada',
    title: 'Credibility Self-Assessment',
    layout: 'process',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'Score Yourself —\nThen Ask Your Mentors',
    processSteps: [
      { number: '1', label: 'Visibility', description: 'Can a Canadian buyer find you without already knowing your name? Search your problem space in ChatGPT — do you appear?' },
      { number: '2', label: 'Trust Signals', description: 'Does your public surface show proof that works in Canada? Named references, local partners, compliance signals, Canadian-relevant case studies?' },
      { number: '3', label: 'Conversion Readiness', description: 'Can an interested Canadian buyer take the next step right now? Clear booking path, CAD pricing, EST/PST availability, enterprise-grade onboarding?' },
    ],
    emphasis: 'Be honest with yourself. Then ask your Sprint Week mentors: "If you were evaluating us as a vendor, which layer would give you pause?"',
    presenterNotes: 'Lead: Dan\n\n"This is the credibility framework in action. I want you to score yourself right now — not for me, for you."\n\n"Layer 1: Visibility. Go to ChatGPT or Perplexity and search your problem space in Canada. Do you show up? If a buyer has to already know your brand name to find you, you\'re invisible."\n\n"Layer 2: Trust. Look at your website, your LinkedIn, your public surface. If a Canadian procurement team pulled it up after a great meeting, would they see proof that works here? Or would they see proof from another market and have to guess whether it translates?"\n\n"Layer 3: Conversion. After a strong Sprint Week meeting, can that person book a follow-up call right now? Or do they hit a generic contact form that goes to a European timezone?"\n\n"Now here\'s the ask: in your next meeting, ask your mentor or potential partner directly — which of these three layers would give you pause about working with us? That honest answer is worth more than any score I could give you."\n\nTransition: "Let me show you what North American buyer research actually looks like — because it explains why these layers matter in this order."\nTiming: ~3 min',
  },

  {
    id: 12,
    section: 'canada',
    title: 'Buyer Behavior',
    layout: 'comparison',
    surface: 'light',
    cognitiveJob: 'compare',
    headline: 'How North American\nBuyers De-Risk You',
    columns: [
      {
        header: 'What buyers want',
        items: [
          'Local proof & references',
          'ROI language & time-to-value',
          'Fast, clear next steps',
          'Compliance front-and-center',
        ],
      },
      {
        header: 'What founders often lead with',
        items: [
          'Features & technical depth',
          'Global traction numbers',
          'Home-market case studies',
          'Generic contact forms',
        ],
      },
    ],
    emphasis: '94% of buyers use AI in research. The vendor ranked first on the preliminary shortlist wins 80% of the time.',
    presenterNotes: 'Lead: Dan\n\n"94% now use AI during research. 90% conduct research before ever speaking to you. The vendor ranked first on a shortlist wins 80% of the time."\n\n"Compliance isn\'t a back-office detail — it\'s a marketing asset. PIPEDA, data residency, SOC2 need to be front-and-center."\n\n"51% of buyers conduct \'backchannel research\' through personal networks. They\'re asking: \'Has anyone worked with this European company?\' If the answer is silence, that\'s a credibility gap. TBDC\'s introductions fill exactly that silence."\n\nTransition: "There\'s also a major regulatory shift you need to know about."\nTiming: ~3 min',
  },

  {
    id: 13,
    section: 'canada',
    title: 'Buy Canadian',
    layout: 'comparison',
    surface: 'light',
    cognitiveJob: 'compare',
    headline: 'Buy Canadian Changes\nthe Path, Not the Need',
    columns: [
      {
        header: 'Horizon (EU)',
        items: [
          'CETA provides reciprocal access -- signal this clearly on your site',
          'Can bid on federal, provincial, and municipal tenders',
          'A structural advantage over non-treaty competitors',
          'Signal this on your website and in proposals',
          'Buy Canadian Policy (Dec 2025): 10% evaluation advantage for Canadian suppliers. Threshold drops to $5M by June.',
        ],
      },
      {
        header: 'Pivot (India/ME)',
        items: [
          'No comprehensive trade agreement with Canada',
          'Government procurement pathway is more restricted',
          'Focus on private-sector credibility and partnerships',
          'Local entity + Canadian references = your path',
        ],
      },
    ],
    emphasis: 'For both: regardless of procurement policy, local proof + partner path still matter.',
    presenterNotes: 'Lead: Dan\n\n"Canada implemented Buy Canadian Policy effective Dec 2025. Federal procurement now gives 10% evaluation advantage to Canadian suppliers. Threshold drops from $25M to $5M by June 2026. Covers ICT, infrastructure, defence, health."\n\n"For Horizon founders: CETA gives you reciprocal access at federal, provincial, and municipal levels. A real structural advantage."\n\n"For Pivot founders: India doesn\'t have treaty cover. Focus on private-sector credibility and partnering with established Canadian entities."\n\n"For both groups: can a Canadian buyer see a clear local route to pilot, compliance review, or purchase?"\n\nCohort tie-ins: WIDMO, Voltie, Quanscient may benefit from public-sector framing. Omniful, Aibo, MonkTrader need private-sector proof first.\n\nTransition: "If you don\'t have local trust yet, how do you get it? You borrow it."\nTiming: ~3 min',
  },

  // ═══════════════════════════════════════════════════════════
  // PARTNERSHIPS (Slides 14–15)
  // ═══════════════════════════════════════════════════════════

  {
    id: 14,
    section: 'partnerships',
    title: 'Trust Transfer',
    layout: 'section-divider',
    surface: 'dark',
    cognitiveJob: 'orient',
    sectionLabel: 'Partnerships',
    headline: 'Partnerships\nTransfer Trust',
    body: [
      'In a new market, that is marketing.',
    ],
    emphasis: null,
    presenterNotes: 'Lead: Dan\n\n"Partnerships are a primary reason you chose TBDC. In a new market, a recognized local partner can make a cautious buyer take your call faster than another month of content."\n\nCohort tie-ins: Voltie — electrical contractors. Aibo — insurers/brokers. WIDMO — engineering consultancies. Omniful — retail/logistics partners. xTiles — design/agency/innovation partners.\n\nTransition: "Here\'s the sequencing we\'d recommend."\nTiming: ~2 min',
  },

  {
    id: 15,
    section: 'partnerships',
    title: 'Partnership Sequence',
    layout: 'process',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'Sequence the\nTrust Transfer',
    processSteps: [
      { number: '1', label: 'Pilot Partner', description: 'Get proof, not scale' },
      { number: '2', label: 'Reference Customer', description: 'A name you can use' },
      { number: '3', label: 'Channel Partner', description: 'Proof opens doors' },
      { number: '4', label: 'Co-Marketing', description: 'When the story is real' },
    ],
    emphasis: 'The first partner has one job: make you referenceable in Canada. Example: You find one Canadian pilot customer -> get results and permission to use their name -> approach a local integrator with proof -> co-publish the case study. That\'s the full sequence.',
    presenterNotes: 'Lead: Dan\n\n"Start with a partner who helps you get proof, not scale. Convert into a named reference. Use proof to open channel partnerships. Co-market when the story is real."\n\n"Sprint Week creates meetings. Surge is where relationships become market infrastructure. Your fractional executives can help negotiate and execute."\n\nCohort tie-ins: VEMOCO is ahead on Canada trust — can tighten conversion. Product-led platforms (Omniful, TryNdBuy, xTiles) especially need enterprise-translation partners.\n\nTransition: "Once PMF and credibility are clearer, AI becomes much more powerful."\nTiming: ~2.5 min',
  },

  // ═══════════════════════════════════════════════════════════
  // AI AS LEVERAGE (Slides 16–19)
  // ═══════════════════════════════════════════════════════════

  {
    id: 16,
    section: 'ai-leverage',
    title: 'AI as Leverage',
    layout: 'section-divider',
    surface: 'dark',
    cognitiveJob: 'orient',
    sectionLabel: 'AI Leverage',
    headline: 'Clear PMF first.\nThen AI makes it fly.',
    body: [
      'If your PMF is vague, AI produces vague content faster.',
      'If your ICP is fuzzy, AI helps you waste time faster.',
      'But if your PMF, ICP, and credibility gaps are clear — AI compresses everything.',
    ],
    emphasis: null,
    presenterNotes: 'Lead: Dan\n\n"AI is not a strategy layer. It is a leverage layer. Humans own strategy, pricing, positioning, offers, risk calls, and every approval. AI owns the grind."\n\nTransition: "And AI visibility now shapes whether buyers discover you at all."\nTiming: ~2 min',
  },

  {
    id: 17,
    section: 'ai-leverage',
    title: 'AI Search',
    layout: 'thesis',
    surface: 'light',
    cognitiveJob: 'dramatize',
    headline: 'If you\'re not in\nthe AI answer,\nyou don\'t exist.',
    body: [
      'Buyers use LLMs and AI overviews before they ever talk to sales.',
      'Most international companies entering a new market are invisible to AI search in that market. The fix is faster than you think.',
      'If buyers must know your brand name to find you, you are still invisible.',
      'Fastest win: publish pages AI can cite — use-case pages, comparison pages, Canadian landing pages.',
    ],
    emphasis: 'Try it now — search your problem space plus "Canada" in ChatGPT or Perplexity. See where you show up.',
    presenterNotes: 'Lead: Dan\n\n"94% of B2B buyers now use AI during their purchase research. 72% encounter AI Overviews in their search results. The vendor ranked first on an AI-generated shortlist wins 80% of the time. Only 14% still consult analyst reports — down 60% since 2022."\n\n"Here\'s the challenge for international companies entering a new market: AI search engines synthesize from existing web content. If you don\'t have Canadian-relevant content published — Canadian case studies, Canadian landing pages, Canadian pricing — AI literally cannot recommend you for Canadian searches."\n\n"The good news: this is one of the fastest gaps to close. A well-structured Canadian use-case page can start appearing in AI results within weeks, not months."\n\n"Try it right now — search your problem space plus \'Canada\' in ChatGPT or Perplexity. See where you show up, and more importantly, who shows up instead."\n\nTransition: "This is exactly the kind of gap where AI can help you close it — which brings us to how to use AI strategically across your entire credibility framework."\nTiming: ~3 min',
  },

  {
    id: 18,
    section: 'ai-leverage',
    title: 'AI for Credibility',
    layout: 'process',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'Using AI to Close\nYour Credibility Gaps',
    processSteps: [
      { number: '1', label: 'Visibility Layer', description: 'AI-optimized content for search discoverability. Canadian landing pages, comparison pages, problem-space articles that AI engines can cite.' },
      { number: '2', label: 'Trust Layer', description: 'AI-assisted case study localization, social proof amplification, and Canadian-relevant proof point generation from your existing customer data.' },
      { number: '3', label: 'Conversion Layer', description: 'AI-powered outbound personalization, automated follow-up sequences, and booking optimization tuned for Canadian enterprise buying cycles.' },
    ],
    emphasis: 'AI is the leverage layer, not the strategy layer. Identify your weakest credibility layer first — then point AI at it.',
    presenterNotes: 'Lead: Dan\n\n"Remember the three-layer credibility framework? Visibility, Trust, Conversion. AI maps directly to each layer — but only after you know which layer is your bottleneck."\n\n"Visibility layer: AI can help you generate Canadian-specific content at speed. Use-case pages, comparison content, problem-space articles — the kind of pages that AI search engines cite when a Canadian buyer asks about your category. One founder I worked with went from invisible to top-3 in Perplexity results in 6 weeks by publishing 12 targeted pages."\n\n"Trust layer: You already have proof — customers, case studies, results. AI can help you translate and localize that proof for the Canadian context. Take a European case study and use AI to reframe it for Canadian procurement language, compliance requirements, and buyer expectations."\n\n"Conversion layer: AI-powered personalization means every outbound message can reference the prospect\'s specific context. AI can also optimize your booking flow, follow-up cadence, and proposal generation for Canadian enterprise norms."\n\n"The key insight: AI amplifies whatever you point it at. If you point it at the wrong layer, you\'ll move fast in the wrong direction. Identify your weakest layer first."\n\nTransition: "So here\'s your challenge for the rest of Sprint Week."\nTiming: ~3 min',
  },

  {
    id: 19,
    section: 'ai-leverage',
    title: 'Sprint Week AI Challenge',
    layout: 'card-grid',
    surface: 'light',
    cognitiveJob: 'decide',
    headline: 'Build Your First\nAI Workflow This Week',
    subtitle: 'The Sprint Week AI Challenge',
    cards: [
      { company: 'Step 1', play: 'Pick Your Weakest Layer', description: 'From the credibility self-assessment: is your biggest gap in Visibility, Trust, or Conversion? That\'s your target.', program: 'horizon' },
      { company: 'Step 2', play: 'Define the Input', description: 'What data or content do you already have? Existing case studies, customer quotes, product specs, competitor analysis?', program: 'horizon' },
      { company: 'Step 3', play: 'Define the Output', description: 'What does the Canadian buyer need to see? A localized landing page? A Canadian-framed case study? A personalized outreach sequence?', program: 'pivot' },
      { company: 'Step 4', play: 'Test It Before Friday', description: 'Build one AI workflow. Run it. Bring the output to your 1:1 next week — we\'ll review it together and design your full playbook.', program: 'pivot' },
    ],
    emphasis: 'One workflow. One credibility layer. One real output. That\'s the challenge.',
    presenterNotes: 'Lead: Dan\n\n"Here\'s what I want you to do before you leave Toronto. Pick your weakest credibility layer — the one that came up most in your Sprint Week meetings. Then build one AI workflow that targets it."\n\n"Step 1: Be honest about which layer is your bottleneck. If you\'re not sure, ask your next mentor: \'If you were evaluating us as a vendor, where would you hesitate?\'"\n\n"Step 2: Look at what you already have. You\'re not starting from zero — you have customers, case studies, product data, and competitive intelligence from your home market."\n\n"Step 3: Define what a Canadian buyer needs to see. Not what you want to say — what they need to see to move forward."\n\n"Step 4: Build it. Use ChatGPT, Claude, Perplexity, whatever tool you\'re comfortable with. Create one real asset — a draft landing page, a localized case study, a personalized outreach email for a specific Canadian prospect you met this week."\n\n"Bring that output to your 1:1 with me next week. That\'s where we get specific — we\'ll review what you built, identify what\'s working, and design your full AI-powered go-to-market playbook together."\n\nTransition: "Let me leave you with three clear deliverables."\nTiming: ~3 min',
  },

  // ═══════════════════════════════════════════════════════════
  // ACTION PLAN (Slides 20–21)
  // ═══════════════════════════════════════════════════════════

  {
    id: 20,
    section: 'action-plan',
    title: 'Action Plan',
    layout: 'action-summary',
    surface: 'dark',
    cognitiveJob: 'decide',
    headline: 'What To Leave\nToronto With',
    actions: [
      {
        number: '1',
        title: 'Collect Sprint Week feedback',
        description: 'After every remaining meeting, ask: "Which of the 8 credibility factors would give you pause about us?" Write down the answers.',
      },
      {
        number: '2',
        title: 'Complete the AI Challenge',
        description: 'Pick your weakest credibility layer. Build one AI workflow that targets it. Create one real Canadian-market asset before Friday.',
      },
      {
        number: '3',
        title: 'Book your 1:1',
        description: 'Individual audit reports go out early next week. Book your 1:1 with Dan to review your results, your Sprint Week feedback, and your AI workflow output.',
      },
    ],
    cta: 'Individual reports + 1:1 booking links go out Monday. Come prepared.',
    presenterNotes: 'Lead: Dan\n\n"You have one day left of Sprint Week. Here are your three deliverables."\n\n"First: collect real feedback. In every remaining meeting, ask the person across the table which of the 8 credibility factors would give them pause. Write it down. This is the most valuable market research you can do — and it\'s free."\n\n"Second: take the AI challenge. You now know the credibility framework. You know what AI is good at. Pick your weakest layer and build one workflow that creates one real asset for the Canadian market. Not ten things. One thing, done well."\n\n"Third: book your 1:1. Early next week, you\'ll each receive your individual readiness report — a detailed assessment across all 8 factors, specific to your company. Along with it, you\'ll get a link to book time with me. Bring your Sprint Week feedback notes and your AI challenge output. That\'s where we get specific."\n\n"After Sprint Week, you move into Surge — 90-day execution with fractional executives and TBDC\'s advisory network. But the insight-gathering starts now."\n\nTiming: ~2.5 min',
  },

  {
    id: 21,
    section: 'action-plan',
    title: 'Close',
    layout: 'hero',
    surface: 'dark',
    cognitiveJob: 'decide',
    headline: 'Questions?',
    body: [
      'Dan — credibility framework, AI workflows, go-to-market planning',
      'Individual reports + 1:1 booking links go out Monday.',
    ],
    emphasis: null,
    cta: null,
    presenterNotes: 'Lead: Dan\n\n"We\'ve got about 15 minutes for questions. I\'d especially love to hear from anyone who discovered something surprising in the credibility self-assessment — or who\'s already thinking about which layer to target for the AI challenge."\n\n"And if your question is company-specific and you\'d rather not ask it in front of the room, that\'s exactly what the 1:1 sessions are for. Those invitations go out Monday along with your individual reports."\n\n"One closing thought: what got you into this room is real traction — real products, real customers, real technical depth. The work ahead isn\'t building something new. It\'s making what you\'ve already built legible and credible to the Canadian buyer who\'s looking for exactly what you do but doesn\'t know you exist yet. That\'s a closeable gap. And now you have the framework, the feedback channels, and the AI leverage to close it."\n\nTiming: ~1 min close, then 15 min Q&A',
  },
];
