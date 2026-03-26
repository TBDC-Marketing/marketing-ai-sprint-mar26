// slides-content.js
// FINAL VERSION — 23 slides for "Marketing Leverage in 2026"
// Sprint Week Lunch & Learn | Thursday, March 26, 2026
// Dan Flatt, Senior Director of Marketing | TBDC
//
// REPLACES the previous 26-slide version entirely.
// Copy this file to src/slides-content.js in the project.

export const SECTIONS = [
  { id: 'opening', label: 'Opening', range: [1, 3] },
  { id: 'pmf', label: 'PMF', range: [4, 8] },
  { id: 'canada', label: 'Canada', range: [9, 14] },
  { id: 'partnerships', label: 'Partnerships', range: [15, 16] },
  { id: 'ai-leverage', label: 'AI Leverage', range: [17, 21] },
  { id: 'action-plan', label: 'Action Plan', range: [22, 23] },
];

export const SLIDES = [

  // ═══════════════════════════════════════════════════════════
  // OPENING (Slides 1–3)
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
    title: 'Cohort Data',
    layout: 'thesis-with-metric',
    surface: 'light',
    cognitiveJob: 'orient',
    headline: 'Biggest gaps\nacross the cohort',
    body: [
      'We used AI Deep Research to audit all 11 companies across 8 dimensions -- website positioning, trust signals, Canadian readiness, AI visibility, conversion infrastructure, LinkedIn presence, content authority, and competitive differentiation. Each scored 1-5.',
      'Canadian market readiness: 1.9/5 -- 10 of 11 scored 2 or below.',
      'AI search visibility: 2.0/5 -- 9 of 11 scored 2 or below.',
      'Conversion infrastructure: 2.5/5 -- no company scored above 3.',
      'This is not a product problem. You\'re being slowed down because your external story doesn\'t yet say: we are relevant here, trusted here, and easy to buy from here.',
    ],
    metric: { value: 1.9, suffix: '/5', label: 'Average Canadian market readiness score' },
    emphasis: null,
    presenterNotes: 'Lead: Dan\n\n"We audited all 11 of your companies this week. These are your averages. Canadian readiness: 1.9 out of 5. AI search visibility: 2.0. Conversion infrastructure: 2.5."\n\nCohort tie-in: VEMOCO is the outlier on Canada readiness — they have a Toronto footprint, Canadian contact details, and procurement visibility. xTiles shows strong differentiation and content but weak Canada readiness. TryNdBuy and Omniful have real proof that isn\'t yet translated for Canadian buyers.\n\nTransition: "The reason this happens is that you assume what worked at home works here. Let\'s go one level deeper."\nTiming: ~2.5 min',
  },

  // ═══════════════════════════════════════════════════════════
  // PMF AS FOUNDATION (Slides 4–8)
  // ═══════════════════════════════════════════════════════════

  {
    id: 4,
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
    id: 5,
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
    emphasis: '40%+ "very disappointed" = strong PMF signal',
    presenterNotes: 'Lead: Dan\n\n"This is Rahul Vora\'s framework from Superhuman. PMF isn\'t a gut feeling. It\'s measurable. You survey active users and ask: How would you feel if you could no longer use our product? If less than 40% say \'very disappointed,\' you don\'t have PMF yet."\n\n"For this cohort: run this test with your first North American pilot customers. Don\'t ask \'do you like it?\' Ask \'would you be very disappointed if we took it away?\'"\n\nCohort tie-ins: xTiles should test the Canadian team-buyer hypothesis, not just existing prosumer users. Quanscient and WIDMO should test Canadian enterprise stakeholders. Omniful and TryNdBuy should isolate North American buyer segments.\n\nTransition: "The power of this framework is not just the score. It\'s what you do with the answers."\nTiming: ~3 min',
  },

  {
    id: 6,
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
    id: 7,
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

  {
    id: 8,
    section: 'pmf',
    title: 'Enterprise Translation Gap',
    layout: 'thesis-with-example',
    surface: 'light',
    cognitiveJob: 'dramatize',
    headline: 'Strong Product \u2260\nEnterprise Trust',
    body: [
      'If your homepage talks to end users, enterprise buyers, partners, and investors all at once -- it lands with none of them.',
    ],
    emphasis: 'A real pattern from this cohort\'s audits: companies scoring 4/5 on content & differentiation scored 2/5 on enterprise buyer clarity.',
    example: {
      title: 'The Enterprise Translation Gap',
      body: 'A homepage that speaks beautifully to individual users -- designers, productivity enthusiasts, technical practitioners -- but when a Canadian VP of Product or Head of Operations lands on that same page, they don\'t see an enterprise solution. They see a personal tool. The product might be incredible for teams, but the story being told is an individual story. In a new market with zero brand recognition, that dilution is fatal.',
    },
    presenterNotes: 'New slide -- see printed speaker notes for full talking track.',
  },

  // ═══════════════════════════════════════════════════════════
  // WHAT CHANGES IN CANADA (Slides 9–14)
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
    title: 'Home vs. North America',
    layout: 'table',
    surface: 'light',
    cognitiveJob: 'compare',
    headline: 'What Changes\nWhen You Cross the Border',
    tableData: [
      { company: 'Narrative', target: 'Home: Product-first --> NA: Vision & ROI-first', program: 'horizon' },
      { company: 'Sales Motion', target: 'Home: Relationship-driven --> NA: Digital-first, speed-to-value', program: 'horizon' },
      { company: 'Trust', target: 'Home: Home-country traction --> NA: Local proof & partners', program: 'pivot' },
      { company: 'Compliance', target: 'Home: Back-office detail --> NA: Front-of-site marketing asset', program: 'pivot' },
    ],
    tableHeaders: ['Dimension', 'What Changes'],
    presenterNotes: 'New slide -- see printed speaker notes for full talking track.',
  },

  {
    id: 11,
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
    id: 12,
    section: 'canada',
    title: 'Cohort Reality Check',
    layout: 'table',
    surface: 'light',
    cognitiveJob: 'prove',
    headline: 'The Cohort\'s\nCredibility Gap',
    tableData: [
      { company: 'Visibility (AI search)', target: '2.0 / 5 — 9 of 11 scored 2 or below', program: 'horizon' },
      { company: 'Trust (social proof)', target: '2.6 / 5 — 10 of 11 scored 3 or below', program: 'horizon' },
      { company: 'Conversion', target: '2.5 / 5 — No company scored above 3', program: 'pivot' },
      { company: 'Canada readiness', target: '1.9 / 5 — 10 of 11 scored 2 or below', program: 'pivot' },
    ],
    tableHeaders: ['Credibility Layer', 'Cohort Score'],
    presenterNotes: 'Lead: Dan\n\n"Visibility: average AI search score is 2.0. Nine of eleven companies can only be found if the buyer already knows your brand name."\n\n"Trust: 2.6. Several of you have real proof that simply isn\'t visible on your public-facing assets."\n\n"Conversion: 2.5. After a strong meeting this week, the next step should never be \'email us and wait.\' It should be \'book the Canada discovery call now.\'"\n\n"Canada readiness: 1.9. Universal gap. Good news: fixable — some fixes can happen this week."\n\nTransition: "North American buyer behavior explains exactly why these gaps matter."\nTiming: ~2.5 min',
  },

  {
    id: 13,
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
    id: 14,
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
  // PARTNERSHIPS (Slides 15–16)
  // ═══════════════════════════════════════════════════════════

  {
    id: 15,
    section: 'partnerships',
    title: 'Trust Transfer',
    layout: 'section-divider',
    surface: 'dark',
    cognitiveJob: 'orient',
    sectionLabel: 'Partnerships',
    headline: 'Partnerships do\ntrust transfer.',
    body: [
      'In a new market, that is marketing.',
    ],
    emphasis: null,
    presenterNotes: 'Lead: Dan\n\n"Partnerships are a primary reason you chose TBDC. In a new market, a recognized local partner can make a cautious buyer take your call faster than another month of content."\n\nCohort tie-ins: Voltie — electrical contractors. Aibo — insurers/brokers. WIDMO — engineering consultancies. Omniful — retail/logistics partners. xTiles — design/agency/innovation partners.\n\nTransition: "Here\'s the sequencing we\'d recommend."\nTiming: ~2 min',
  },

  {
    id: 16,
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
  // AI AS LEVERAGE (Slides 17–21)
  // ═══════════════════════════════════════════════════════════

  {
    id: 17,
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
    id: 18,
    section: 'ai-leverage',
    title: 'Where AI Helps',
    layout: 'card-grid',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'Where AI\nEarns Its Keep',
    cards: [
      { company: 'Research', play: 'Weeks -> Hours', description: 'Competitor scans, account intelligence, local buyer language, partner mapping.', program: 'horizon' },
      { company: 'Personalization', play: '50 Deep > 5,000 Generic', description: 'Deep-context messages that reference prospect challenges, tech stack, and competitive position.', program: 'horizon' },
      { company: 'Content Multiplication', play: '1 Insight -> 8 Assets', description: 'Blog, LinkedIn post, email sequence, pitch slide, landing page, comparison page, one-pager, use-case page.', program: 'pivot' },
      { company: 'Pattern Recognition', play: 'Weekly Pipeline Readouts', description: 'What messages get opened? What segments respond? What objections keep appearing?', program: 'pivot' },
    ],
    presenterNotes: 'New slide -- see printed speaker notes for full talking track.',
  },

  {
    id: 19,
    section: 'ai-leverage',
    title: 'AI Search',
    layout: 'thesis-with-metric',
    surface: 'light',
    cognitiveJob: 'dramatize',
    headline: 'If you\'re not in\nthe AI answer,\nyou don\'t exist.',
    body: [
      'Buyers use LLMs and AI overviews before they ever talk to sales.',
      'This cohort averages 2.0/5 on AI search visibility.',
      'If buyers must know your brand name to find you, you are still invisible.',
      'Fastest win: publish pages AI can cite — use-case pages, comparison pages, Canadian landing pages.',
    ],
    metric: { value: 94, suffix: '%', label: 'of B2B buyers use LLMs in purchase research' },
    emphasis: null,
    presenterNotes: 'Lead: Dan\n\n"94% of B2B buyers use AI during research. 72% encounter AI Overviews. Vendor ranked first wins 80%. Only 14% still consult analyst reports — down 60% since 2022."\n\nCohort tie-ins: VEMOCO and TryNdBuy strongest at 3/5, still a gap. xTiles shows split between strong product identity and weak problem-space discovery.\n\nTransition: "Here\'s what AI is genuinely good for in your marketing motion."\nTiming: ~3 min',
  },

  {
    id: 20,
    section: 'ai-leverage',
    title: 'AI Plays — Horizon',
    layout: 'card-grid',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'Your Flagship AI Play',
    subtitle: 'Horizon Companies',
    cards: [
      { company: 'Voltie', play: 'EV-Retrofit Opportunity Finder', description: 'Scan condo portfolios + local incentive programs to rank top 50 buildings by upgrade potential.', program: 'horizon' },
      { company: 'SaMMY', play: 'Waterfront Prospect Map', description: 'Map marinas, ports, ESG initiatives across Ontario/BC. Score for pilot suitability.', program: 'horizon' },
      { company: 'Quanscient', play: 'Simulation-Ready Account Briefs', description: 'Mine R&D projects from annual reports and patents. Draft pilot hypotheses for VPs of Engineering.', program: 'horizon' },
      { company: 'VEMOCO', play: 'Workflow Impact Simulator', description: 'ROI calculator by fleet size and sector. Lead with "18 clicks → 3," not GPS.', program: 'horizon' },
      { company: 'WIDMO', play: 'Site-Specific Pilot Proposals', description: 'Compile public geology and incident data per mine. Draft survey plans and risk-reduction narratives.', program: 'horizon' },
      { company: 'xTiles', play: 'Competitive Positioning Scanner', description: 'Analyze Notion/Miro/Trello positioning. Find gaps for your Canadian enterprise wedge.', program: 'horizon' },
    ],
    presenterNotes: 'Lead: Dan\n\nWalk through each — 20–30 seconds per company.\n\n"Voltie — scan REIT portfolios and incentive programs. Find buildings mandated to install chargers. That\'s your target list."\n"SaMMY — map every marina and port, check ESG requirements, score for pilot readiness."\n"Quanscient — mine annual reports and patents. First email should be a pilot hypothesis, not a cold pitch."\n"VEMOCO — stop leading with GPS. Lead with workflow. Calculator > demo."\n"WIDMO — public geology data → site-specific survey proposal. Look like you\'ve done the homework."\n"xTiles — find the white space in Notion/Miro/Trello positioning."\n\nTransition: "And for the Pivot companies..."\nTiming: ~3 min',
  },

  {
    id: 21,
    section: 'ai-leverage',
    title: 'AI Plays — Pivot',
    layout: 'card-grid',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'Your Flagship AI Play',
    subtitle: 'Pivot Companies',
    cards: [
      { company: 'Fermi Dev', play: 'Factory Process-Chaos Scanner', description: 'Crawl job listings for "manual reporting," "legacy MES." Auto-score accounts by pain intensity.', program: 'pivot' },
      { company: 'Aibo', play: 'Insurance Journey-Gap Teardown', description: 'Map quote-to-claim flows from carrier websites. Generate "future state" blueprints.', program: 'pivot' },
      { company: 'Omniful', play: 'Stack Audit & Migration Playbook', description: 'Auto-generate architecture reports. The kind of artifact that gets forwarded to CFOs.', program: 'pivot' },
      { company: 'MonkTrader', play: 'Broker AI-Readiness Scoring', description: 'Score brokers on digital maturity. Generate tailored partnership pitches per broker.', program: 'pivot' },
      { company: 'TryNdBuy', play: 'Catalog Automation ROI Calculator', description: 'Estimate manual content cost by SKU count. Generate retailer-specific ROI briefs.', program: 'pivot' },
    ],
    presenterNotes: 'Lead: Dan\n\n"For Pivot companies — the challenge is trust. North American buyers respond to perceived risk more than features."\n\n"Fermi Dev — manufacturers advertise their pain in job listings. AI finds those signals at scale."\n"Aibo — map where carrier customer journeys break. Generate future-state blueprints."\n"Omniful — architecture assessments get forwarded to CFOs."\n"MonkTrader — score which brokers are worth pitching."\n"TryNdBuy — Amazon and Flipkart as references. Show Canadian retailers their manual catalog costs."\n\n"These are GTM accelerants. Pick one."\n\nTransition: "Let\'s translate this into what you leave with."\nTiming: ~3 min',
  },

  // ═══════════════════════════════════════════════════════════
  // ACTION PLAN & CLOSE (Slides 22–23)
  // ═══════════════════════════════════════════════════════════

  {
    id: 22,
    section: 'action-plan',
    title: 'Action Plan',
    layout: 'action-summary',
    surface: 'dark',
    cognitiveJob: 'decide',
    headline: 'What To Leave\nToronto With',
    actions: [
      {
        number: '1',
        title: 'Canada PMF validation plan',
        description: 'How will you test the "very disappointed" threshold here? Use Sprint Week meetings as your first data points.',
      },
      {
        number: '2',
        title: 'Credibility gap assessment',
        description: 'Score yourself: Visibility, Trust Signals, Conversion Readiness. The gap you find is your first marketing project.',
      },
      {
        number: '3',
        title: 'One AI workflow for Week 1',
        description: 'Pick your flagship play. Map inputs, outputs, first target list. Run it in your first week back. Not ten. One.',
      },
    ],
    cta: 'Book a 1:1 with Dan before Friday.',
    presenterNotes: 'Lead: Dan\n\n"You have one day left of Sprint Week. Here are your three deliverables."\n\n"First: a PMF validation plan for Canada. Who exactly are you testing with, and what evidence would tell you the pull is real here? Use the meetings you\'ve already had this week as your first data points."\n\n"Second: a credibility gap assessment using the three-layer framework. Score yourself on visibility, trust signals, and conversion readiness. The gap you find is your first marketing project when you get home."\n\n"Third: one AI workflow. Not ten. One. Pick the flagship play from the slide with your name on it. Map out the inputs, outputs, and first target list. Run it in your first week back."\n\n"Book time with me before Friday — whether it\'s PMF, conversion, partnerships, or AI workflows."\n\n"After Sprint Week, you move into Surge. You\'ll have fractional executives and 90-day roadmaps to actually execute all of this. You\'re not doing it alone."\n\nTiming: ~3 min',
  },

  {
    id: 23,
    section: 'action-plan',
    title: 'Close',
    layout: 'hero',
    surface: 'dark',
    cognitiveJob: 'decide',
    headline: 'Questions?',
    body: [
      'Dan — PMF, positioning, partnerships, AI workflows',
      'Book a 1:1 before Friday.',
    ],
    emphasis: null,
    cta: null,
    presenterNotes: 'Lead: Dan\n\n"I\'d love to use the rest of this time for your questions — especially where you feel tension between product strength and market-entry friction."\n\n"And please book time with me before Friday. That\'s where we get specific about your company, not just the cohort patterns."\n\nClose: "What got you into this room is traction. The next step is making that traction legible and credible to the next Canadian buyer."\n\nTiming: ~1 min close, then 15 min Q&A',
  },
];
