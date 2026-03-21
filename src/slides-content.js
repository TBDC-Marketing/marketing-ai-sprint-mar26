// slides-content.js
// All 26 slides for "Marketing Leverage in 2026" — TBDC Sprint Week Lunch & Learn
// Import this file and map each slide to the appropriate scene template component.

export const SECTIONS = [
  { id: 'opening', label: 'Opening', range: [1, 3] },
  { id: 'positioning', label: 'Positioning', range: [4, 9] },
  { id: 'infrastructure', label: 'Infrastructure', range: [10, 10] },
  { id: 'execution', label: 'Execution', range: [11, 12] },
  { id: 'optimization', label: 'Optimization', range: [13, 14] },
  { id: 'ai-leverage', label: 'AI Leverage', range: [15, 22] },
  { id: 'action-plan', label: 'Action Plan', range: [23, 26] },
];

export const SLIDES = [
  // ═══════════════════════════════════════════════════════════
  // OPENING
  // ═══════════════════════════════════════════════════════════
  {
    id: 1,
    section: 'opening',
    title: 'Title',
    layout: 'hero',
    surface: 'dark',
    cognitiveJob: 'attract',
    headline: 'Marketing Leverage\nin 2026',
    subtitle: 'How AI Compresses Growth Cycles',
    byline: 'Dharti Chatterjee & Dan Flatt — TBDC',
    emphasis: null,
    presenterNotes: 'Quick intro. "We\'re Dharti and Dan from TBDC\'s marketing team. Over the next 45 minutes we\'re going to share the framework we use with every cohort company — and the specific AI-powered tactics that are changing how small teams compete against incumbents in 2026. This isn\'t theory. Every example ties back to companies like yours." Keep it to 30 seconds.',
  },

  {
    id: 2,
    section: 'opening',
    title: 'The Problem',
    layout: 'thesis',
    surface: 'light',
    cognitiveJob: 'orient',
    headline: 'Active Marketing.\nFlat Pipeline.',
    body: [
      'Most teams are active in marketing.',
      'Few have a consistent pipeline.',
      'The gap is not effort.',
    ],
    emphasis: 'It is positioning + system clarity.',
    presenterNotes: '"By a show of hands — how many of you are doing some form of marketing right now? LinkedIn posts, website, maybe some outbound emails?" (Most will raise hands.) "Now — how many of you could tell me exactly which of those activities generated your last three qualified meetings?" (Few or none.) "That\'s the gap. You\'re not lazy. You\'re active. But activity without positioning and systems is just motion. Today we\'re going to fix that." Dharti leads this slide.',
  },

  {
    id: 3,
    section: 'opening',
    title: 'The Framework',
    layout: 'process',
    surface: 'light',
    cognitiveJob: 'orient',
    headline: 'The Four Layers That Make Marketing Work',
    processSteps: [
      { number: '1', label: 'Positioning', description: 'Who, what, why you' },
      { number: '2', label: 'Infrastructure', description: 'CRM, flows, tracking' },
      { number: '3', label: 'Execution', description: 'Content, outbound, channels' },
      { number: '4', label: 'Optimization', description: 'Measure what converts' },
    ],
    emphasis: 'Most founders start at Execution. That\'s the mistake.',
    presenterNotes: '"This is the framework. Four layers, in order. Positioning is your foundation. Infrastructure is your conversion backbone. Execution is content, outbound, campaigns. Optimization is measuring what converts." "Here\'s the key: most founders jump straight to Layer 3. They start posting, running ads, sending cold emails. Nothing sticks because Layers 1 and 2 aren\'t built yet." This is the slide founders will photograph.',
  },

  // ═══════════════════════════════════════════════════════════
  // LAYER 1 — POSITIONING
  // ═══════════════════════════════════════════════════════════
  {
    id: 4,
    section: 'positioning',
    title: 'Layer 1 — Positioning',
    layout: 'section-divider',
    surface: 'dark',
    cognitiveJob: 'dramatize',
    sectionLabel: 'Layer 1',
    headline: '80% of marketing problems\nare positioning problems.',
    body: ['If the market can\'t explain what you do and why you\'re different, no amount of content or ads will fix that.'],
    emphasis: null,
    presenterNotes: '"This is the single most important slide in this deck. If you remember one thing from today, it\'s this." "When founders come to us and say \'our marketing isn\'t working,\' the first thing we check is their positioning. Not their ads. Not their content. And 80% of the time, that\'s where the problem is." For Pivot companies: "You have revenue and PMF in your home market. But NA buyers don\'t know that yet. Your positioning has to build trust before you ever get in the room." For Horizon companies: "You\'re validating whether there\'s NA demand at all. Your positioning has to be razor-sharp to get meetings with the right people in a week." Dharti leads this section.',
  },

  {
    id: 5,
    section: 'positioning',
    title: 'Three Questions',
    layout: 'thesis',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'Positioning Is Not\nYour Tagline',
    body: [
      'Who is it for?',
      'What problem do you solve?',
      'Why you over alternatives?',
    ],
    emphasis: 'Get this wrong, everything downstream breaks.',
    presenterNotes: '"These aren\'t abstract questions. Can a buyer who visits your website for 10 seconds answer all three? Can someone who met you at dinner last night explain to their colleague what you do?" "Right now, think about your own company. Could a North American buyer who has never heard of you answer these three questions after 30 seconds on your website?" Pause for 5 seconds. Let them sit with it.',
  },

  {
    id: 6,
    section: 'positioning',
    title: 'The Real Competitor',
    layout: 'thesis-with-example',
    surface: 'light',
    cognitiveJob: 'prove',
    headline: 'Your Real Competitor\nMight Surprise You',
    body: [
      'Your real competitor is often:',
      'A spreadsheet. An intern. Doing nothing.',
    ],
    emphasis: 'Same product. Different positioning. $2M → $80M in 18 months.',
    example: {
      title: 'April Dunford\'s CRM Case',
      body: 'A CRM startup stopped competing with Siebel. Repositioned to "CRM for Investment Banks." They didn\'t win by building more features. They won by choosing a context where they were the obvious choice. Siebel acquired them for $1.3B.',
    },
    cohortTieIn: 'VEMOCO\'s real edge is workflow automation. Their competitor isn\'t Geotab — it\'s the 18-click manual process fleet managers do in spreadsheets. Fermi Dev\'s competitor isn\'t ServiceNow — it\'s the $400K, 8-month consulting engagement manufacturers currently buy.',
    presenterNotes: '"This is April Dunford\'s famous case. A CRM company was competing against Siebel — and losing. Same features, smaller brand, no chance. Then they repositioned as \'CRM for Investment Banks.\' Suddenly Siebel was irrelevant." Cohort tie-in: "Think about VEMOCO. Fleet telematics is a crowded market. But VEMOCO\'s real edge is workflow automation. Their competitor isn\'t Geotab — it\'s the 18-click manual process. That\'s the positioning shift." "For Fermi Dev — your competitor isn\'t ServiceNow. It\'s the $400K, 8-month consulting engagement. That\'s your positioning."',
  },

  {
    id: 7,
    section: 'positioning',
    title: 'Outcome > Features',
    layout: 'thesis-with-example',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'Say What You Do.\nSay Why It Matters.',
    body: ['Clear message = faster trust.'],
    emphasis: 'Outcome > Features',
    example: {
      title: 'How the best companies say it',
      body: 'Gong: "We show you why deals are won or lost." Rippling: "Run HR, IT, and finance in one place." No jargon. Just value.',
    },
    cohortTieIn: 'Quanscient — don\'t say "cloud-native multiphysics platform combining AI and quantum algorithms." Say: "Simulate in milliseconds what takes your competitors weeks." Widmo — don\'t say "spectral radar and advanced analytics." Say: "See what\'s underground before you dig. Faster, safer, cheaper."',
    presenterNotes: '"Every company in this room has impressive technology. But buyers don\'t buy technology. They buy outcomes." Cohort tie-in: "Quanscient — \'cloud-native multiphysics platform combining AI and quantum algorithms\' is a feature description. The outcome is: \'Simulate in milliseconds what takes your competitors weeks.\' That\'s what a VP of Engineering cares about." "Widmo — the outcome is: \'See what\'s underground before you dig.\'" "This week in your 1:1 sessions with me, we\'re going to rewrite your positioning around outcomes."',
  },

  {
    id: 8,
    section: 'positioning',
    title: 'Clear Beats Clever',
    layout: 'thesis-with-example',
    surface: 'light',
    cognitiveJob: 'dramatize',
    headline: 'The Bigger You Get,\nthe Vaguer You Sound',
    body: [],
    emphasis: 'Clear always beats clever.',
    example: {
      title: 'DocuSign\'s Drift',
      body: 'Owned "e-signature." Then: "Agreement Cloud" → "Intelligent Agreement Management" → Confusion → Backlash → Reversal. As you enter North America and start talking to bigger buyers, resist the pressure to sound more "enterprise." The clearer your message, the faster you build trust.',
    },
    presenterNotes: '"As companies scale, they drift into abstraction. DocuSign owned one of the clearest positions in tech: e-signature. Then they rebranded to \'Agreement Cloud,\' then \'Intelligent Agreement Management.\' Buyers were confused. They had to reverse course." "The lesson for you: as you enter North America, you\'ll feel pressure to sound more \'enterprise.\' Resist that. You don\'t have brand recognition to be vague." Dharti leads this.',
  },

  {
    id: 9,
    section: 'positioning',
    title: 'GTM Sequencing',
    layout: 'thesis',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'One Market. One Use Case.\nOne ICP. Lock It.',
    body: [
      'Trying to scale before you\'ve locked one repeatable win creates complexity, not growth.',
    ],
    emphasis: 'Buyers aren\'t rejecting your product. They\'re reacting to perceived risk.',
    cohortTieIn: 'With Aibo — the temptation is multi-province insurance partnerships early. But until one use case is fully locked and repeatable, scale creates complexity. Across all of you — Widmo, VEMOCO, Aibo, Fermi — buyers aren\'t rejecting the product. They\'re reacting to perceived risk.',
    presenterNotes: '"This is one of the most common patterns we see. You see the size of the North American market and want to go broad immediately." Cohort tie-in: "With Aibo — the temptation is to think about multi-province scale early. But until one use case is fully locked and repeatable with one partner type, scale just creates complexity." "The companies that win their first North American contracts this year will be the ones who go narrow first." Dan leads this. Bridge into infrastructure.',
  },

  // ═══════════════════════════════════════════════════════════
  // LAYER 2 — INFRASTRUCTURE
  // ═══════════════════════════════════════════════════════════
  {
    id: 10,
    section: 'infrastructure',
    title: 'Layer 2 — Infrastructure',
    layout: 'section-divider',
    surface: 'dark',
    cognitiveJob: 'explain',
    sectionLabel: 'Layer 2',
    headline: 'The Boring Stuff That\nMakes Everything Work',
    body: [
      'CRM → Email sequences → Booking flows → Tracking + attribution',
      'If this breaks, nothing scales.',
      'Systems run. Founders shouldn\'t have to.',
    ],
    emphasis: null,
    presenterNotes: '"If a potential customer visits your website right now and fills out a contact form, what happens? Does it go into a CRM? Does it trigger an email? Does someone get notified?" "For most early-stage companies, the answer is: it goes to an inbox and someone eventually sees it. That\'s not a system. That\'s hope." "You need three things working: a CRM that captures leads, an email sequence that nurtures them, and a booking flow that converts them to meetings. That\'s it." Quick section — 2 minutes max.',
  },

  // ═══════════════════════════════════════════════════════════
  // LAYER 3 — EXECUTION
  // ═══════════════════════════════════════════════════════════
  {
    id: 11,
    section: 'execution',
    title: 'Execution Done Right',
    layout: 'thesis-with-example',
    surface: 'light',
    cognitiveJob: 'explain',
    sectionLabel: 'Layer 3 — Execution',
    headline: 'Execution Without Positioning\nIs Just Noise',
    body: [
      'Execution = translating positioning into market presence.',
      'Two principles that separate what works:',
    ],
    emphasis: 'Trust first, capture later. Go where attention already exists.',
    example: {
      title: 'Two Companies That Got It Right',
      body: 'Cognism ungated everything — playbooks, templates, tools. No forms, no gates. Built trust before asking for anything. Became one of Europe\'s fastest-growing B2B companies. Lavender used TikTok for B2B. Their buyers (SDRs in their 20s-30s) were already there. The channel nobody expects is often the one nobody is fighting for.',
    },
    presenterNotes: '"Now Layer 3 — the part most founders want to start with. But notice: we\'ve built positioning first, infrastructure second." "Two principles. Cognism ungated everything — all free, no forms. They built trust before asking for anything, and marketing became their primary growth engine." "Lavender chose TikTok for B2B. Sounds crazy, but their buyers were already there." "For you: you don\'t need to be on every channel. One channel, consistently, with a clear message."',
  },

  {
    id: 12,
    section: 'execution',
    title: 'Founder Voice',
    layout: 'thesis-with-example',
    surface: 'light',
    cognitiveJob: 'prove',
    headline: 'Your Voice Is Your\nStrongest Brand Asset',
    body: [
      'Founder-led content compounds faster than anything else.',
      'For international founders entering North America: your perspective IS the content.',
      'Your view of the market from the outside is unique. Use it.',
    ],
    emphasis: null,
    example: {
      title: 'Loom',
      body: '25M users. $975M acquisition by Atlassian. No traditional marketing. Product + founder presence = distribution.',
      metric: '$975M',
    },
    presenterNotes: '"Every founder in this room has a perspective that North American buyers don\'t have. That perspective is incredibly valuable." "Loom grew to 25M users without significant marketing spend. The founders showed up in communities, on Product Hunt, in direct conversations." "For you, founder-led content on LinkedIn is the highest-leverage marketing activity you can do in the next 90 days. One thoughtful post per week about what you\'re learning entering the NA market will build more trust than any ad campaign." Dharti leads this.',
  },

  // ═══════════════════════════════════════════════════════════
  // LAYER 4 — OPTIMIZATION
  // ═══════════════════════════════════════════════════════════
  {
    id: 13,
    section: 'optimization',
    title: 'Layer 4 — Optimization',
    layout: 'section-divider',
    surface: 'dark',
    cognitiveJob: 'prove',
    sectionLabel: 'Layer 4',
    headline: 'Stop Measuring\nWhat Doesn\'t Convert',
    body: [
      'Coefficient stopped tracking impressions. Shifted to pipeline and conversions.',
    ],
    emphasis: 'Back-to-back $1M+ ARR quarters. They didn\'t spend more. They stopped wasting spend.',
    presenterNotes: '"Most startups measure the wrong things. Website visits. Social impressions. Email open rates. None are buying signals." "Coefficient rebuilt measurement around qualified leads, pipeline progression, and down-funnel conversions. Killed campaigns generating traffic but not pipeline. Doubled down on the few channels producing meetings. Result: back-to-back record quarters." "For your stage, the only metrics that matter: how many qualified meetings did we generate, and how many converted to pilots or deals."',
  },

  {
    id: 14,
    section: 'optimization',
    title: 'The Sequence',
    layout: 'process',
    surface: 'light',
    cognitiveJob: 'summarize',
    headline: 'Order Beats Effort.\nEvery Time.',
    processSteps: [
      { number: '1', label: 'Fix Positioning', description: 'Clear in 5 seconds' },
      { number: '2', label: 'Set Up Infrastructure', description: 'Capture + nurture' },
      { number: '3', label: 'Pick One Channel', description: 'Consistency > spread' },
      { number: '4', label: 'Measure Pipeline', description: 'Not activity' },
    ],
    emphasis: 'Most founders do this backwards.',
    presenterNotes: '"Quick recap before AI. Four layers, in order. If you\'ve been doing marketing and it hasn\'t been working, odds are you jumped to Layer 3 or 4 without building 1 and 2." "Now — let\'s talk about how AI changes the speed at which you build all four layers." Transition slide — 30 seconds max.',
  },

  // ═══════════════════════════════════════════════════════════
  // AI LEVERAGE LAYER
  // ═══════════════════════════════════════════════════════════
  {
    id: 15,
    section: 'ai-leverage',
    title: 'AI Leverage Layer',
    layout: 'section-divider',
    surface: 'dark',
    cognitiveJob: 'orient',
    sectionLabel: 'AI as Leverage',
    headline: 'Where AI Actually\nEarns Its Keep',
    body: [
      'Research — Weeks → hours',
      'Personalization — 50 relevant messages beat 5,000 generic ones',
      'Content multiplication — One insight → eight assets',
      'Pattern recognition — What\'s working, what\'s not',
    ],
    emphasis: 'AI is a leverage layer, not a strategy layer.',
    presenterNotes: '"Here\'s where it gets practical. AI in 2026 is not about chatbots or generic blog posts. It\'s about compressing work that took weeks into hours." Run through the four areas quickly. "But — AI amplifies whatever you feed it. If positioning is vague, AI produces vague content faster. Strategy is still yours. AI is the execution layer." Dan leads the AI section.',
  },

  {
    id: 16,
    section: 'ai-leverage',
    title: 'The Guardrail',
    layout: 'thesis',
    surface: 'light',
    cognitiveJob: 'dramatize',
    headline: 'AI Makes Bad Thinking\nLouder',
    body: [
      'If your positioning is vague and your brand voice is safe, AI just amplifies the problem.',
      'AI is a tool.',
    ],
    emphasis: 'Not a strategy.',
    presenterNotes: '"This is the guardrail slide. AI can 10X your marketing — IF your positioning is sharp and your ICP is clear." "If you skip positioning and go straight to \'use AI for outbound,\' you\'ll produce polished mediocrity at scale. Emails will sound great and convert at zero because they\'re saying the wrong things to the wrong people." Pause after this. Let the room sit with the point.',
  },

  {
    id: 17,
    section: 'ai-leverage',
    title: 'Buyer Research',
    layout: 'thesis-with-metric',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'Know What Your Buyers Say\nBefore They Say It',
    body: [
      'AI compresses market intelligence.',
      'What are competitors claiming? How do buyers describe their own problems? Where is new demand showing up?',
      'By the time buyers reach you, 70–80% have already decided.',
      'If your answers aren\'t in AI search results, you don\'t exist.',
      'Own your pricing page. Own comparisons. Answer honestly before anyone talks to sales.',
    ],
    metric: { value: 94, suffix: '%', label: 'of B2B buyers use AI during purchase research' },
    emphasis: 'If your answers aren\'t in AI search results, you don\'t exist.',
    presenterNotes: '"94% of B2B buyers in 2025 used AI — ChatGPT, Perplexity, Gemini — during purchase research. By the time they reach out, they\'ve made 70-80% of their decision." "This is Answer Engine Optimization. The 2026 version of SEO. For companies entering a new market without brand recognition, this is how buyers will discover you." "Practical step: search for your own company in ChatGPT and Perplexity. What comes up? If nothing or something inaccurate — that\'s your first content project."',
  },

  {
    id: 18,
    section: 'ai-leverage',
    title: 'Content Multiplication',
    layout: 'thesis-with-example',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'One Insight.\nMany Assets.',
    body: [
      'They don\'t create more content.',
      'They multiply one idea.',
      'Your version: take one proprietary data point and let AI turn it into 8 assets in one session.',
    ],
    emphasis: null,
    example: {
      title: 'Gong',
      body: 'Mines millions of sales calls for unique insights. One data finding → blog, LinkedIn, webinar, podcast, email, PR. They own the data. AI multiplies it.',
    },
    cohortTieIn: 'You all have proprietary data. Widmo has subsurface imaging data. Quanscient has simulation benchmarks. VEMOCO has fleet metrics. Aibo has insurance journey friction data. Take your strongest proof point and use AI to turn it into a month of content.',
    presenterNotes: '"Gong mines sales calls for insights nobody else can produce. One data finding gets multiplied across every channel." Cohort tie-in: "You all have proprietary data. Widmo has subsurface imaging data no one else has. Quanscient has simulation benchmarks. VEMOCO has fleet efficiency metrics. Aibo has insurance journey friction data. Take your single strongest proof point and use AI to turn it into a blog, 5 LinkedIn posts, an email sequence, a one-page case study, and a conference talk abstract. That\'s a month of content from one insight, in one session."',
  },

  {
    id: 19,
    section: 'ai-leverage',
    title: 'Cohort at a Glance',
    layout: 'table',
    surface: 'light',
    cognitiveJob: 'orient',
    headline: 'What This Looks Like\nfor You',
    tableData: [
      { company: 'Voltie', target: 'EV charging for condos, MURBs, hospitality', program: 'horizon' },
      { company: 'SaMMY', target: 'Smart marina & maritime IoT', program: 'horizon' },
      { company: 'Quanscient', target: 'Multiphysics simulation for aerospace/auto', program: 'horizon' },
      { company: 'VEMOCO', target: 'Fleet telematics & workflow automation', program: 'horizon' },
      { company: 'WIDMO', target: 'Deep subsurface imaging for mining & infra', program: 'horizon' },
      { company: 'xTiles', target: 'AI visual workspace for teams & creatives', program: 'horizon' },
      { company: 'Fermi Dev', target: 'AI operational brain for manufacturing', program: 'pivot' },
      { company: 'Aibo', target: 'Bilingual insurance & finance marketplace', program: 'pivot' },
      { company: 'Omniful', target: 'Unified supply chain for retail/3PL', program: 'pivot' },
      { company: 'MonkTrader', target: 'AI investment platform for retail investors', program: 'pivot' },
      { company: 'TryNdBuy', target: 'Virtual try-on & 3D product visualization', program: 'pivot' },
    ],
    presenterNotes: '"Let\'s make this personal. Here\'s every company in the room and the market you\'re targeting. Next, I\'m going to show you one specific AI-powered play per company — a concrete thing you could start building next week." Quick orientation — move to next slide fast.',
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
      { company: 'Voltie', play: 'EV-Retrofit Opportunity Finder', description: 'AI scans condo/hotel portfolios + local incentive programs to rank top 50 buildings by upgrade potential. Feed directly into outbound.', program: 'horizon' },
      { company: 'SaMMY', play: 'Waterfront Prospect Map', description: 'AI maps marinas, ports, ESG initiatives across Ontario/BC. Score for pilot suitability. Auto-generate impact narratives per port.', program: 'horizon' },
      { company: 'Quanscient', play: 'Simulation-Ready Account Briefs', description: 'AI pulls R&D projects from annual reports and patents. Drafts 1-page pilot hypotheses for VPs of Engineering.', program: 'horizon' },
      { company: 'VEMOCO', play: 'Workflow Impact Simulator', description: 'Calculator showing theft prevention + efficiency ROI by fleet size and sector. Lead with "18 clicks → 3," not GPS.', program: 'horizon' },
      { company: 'WIDMO', play: 'Site-Specific Pilot Proposals', description: 'AI compiles public geology and incident data per mine. Drafts survey plans and risk-reduction narratives.', program: 'horizon' },
      { company: 'xTiles', play: 'Competitive Positioning Scanner', description: 'AI ingests Notion/Miro/Trello positioning. Finds gaps. Identifies underserved verticals for NA entry.', program: 'horizon' },
    ],
    presenterNotes: 'Walk through each company quickly — 30 seconds each. "Voltie — your biggest opportunity is finding buildings already mandated to install chargers. AI can scan REIT portfolios, cross-reference incentive programs, and rank buildings." "SaMMY — the Canadian waterfront market is fragmented. AI can map every marina and port, check for ESG requirements and modernization RFPs." "Quanscient — mine their annual reports and patent filings to find where simulation speed is a bottleneck. Your first email is a well-researched pilot hypothesis, not a cold pitch." "VEMOCO — stop leading with GPS. Lead with workflow automation. An AI-built calculator that shows exactly how many manual steps disappear." "WIDMO — every mine has public geological data. AI compiles it into a site-specific survey proposal." "xTiles — AI can systematically analyze how Notion, Miro, Trello position themselves and find the white space." Dan delivers with energy. This is where founders start taking notes.',
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
      { company: 'Fermi Dev', play: 'Factory Process-Chaos Scanner', description: 'AI crawls job listings and annual reports for "manual reporting," "Excel-driven planning," "legacy MES." Auto-scores accounts by pain intensity.', program: 'pivot' },
      { company: 'Aibo', play: 'Insurance Journey-Gap Teardown', description: 'AI maps current quote-to-claim flows from carrier websites. Generates "future state" blueprints showing where Aibo slots in.', program: 'pivot' },
      { company: 'Omniful', play: 'Stack Audit & Migration Playbook', description: 'AI-built questionnaire + auto-generated architecture report showing the path from current stack to Omniful.', program: 'pivot' },
      { company: 'MonkTrader', play: 'Broker AI-Readiness Scoring', description: 'AI scores brokers on digital maturity and appetite for AI decision layers. Generates tailored partnership pitches.', program: 'pivot' },
      { company: 'TryNdBuy', play: 'Catalog Automation ROI Calculator', description: 'AI estimates retailer\'s current manual content cost by SKU count. Generates retailer-specific ROI briefs with benchmarks.', program: 'pivot' },
    ],
    presenterNotes: '"For Pivot companies — you have revenue and traction. The challenge is trust. North American buyers respond to perceived risk more than features." "Fermi Dev — your targets are publicly advertising their pain through job listings and annual reports. AI finds those signals at scale." "Aibo — what moves conservative carriers is showing exactly where their current customer journey breaks. AI can map that from public websites." "Omniful — enterprise buyers need to understand the migration path. An AI-generated architecture assessment gets forwarded to CFOs." "MonkTrader — not every broker is ready. AI can score which ones are worth pitching." "TryNdBuy — you have Amazon and Flipkart as references. AI estimates what Canadian retailers spend on manual catalog production and shows the savings."',
  },

  {
    id: 22,
    section: 'ai-leverage',
    title: 'The Boundary',
    layout: 'comparison',
    surface: 'light',
    cognitiveJob: 'compare',
    headline: 'Humans Own Strategy.\nAI Owns Grind.',
    columns: [
      {
        header: 'What Humans Own',
        items: [
          'ICP choice, positioning, offers, pricing',
          'Channel selection, brand voice, what NOT to say',
          'Deciding what "good" looks like',
          'Approving every outbound message',
        ],
      },
      {
        header: 'What AI Owns',
        items: [
          'Research (competitors, accounts, buyer language)',
          'Drafting (emails, posts, one-pagers, proposals)',
          'Building (CRM schemas, calculators, landing pages)',
          'Analyzing (weekly pipeline reviews, campaign performance)',
        ],
      },
    ],
    emphasis: 'AI drafts. Humans approve. Always.',
    presenterNotes: '"Before we close — the boundary. AI is not your strategist. AI is your extremely hardworking, extremely fast research and drafting team." "You still own every strategic decision. AI does the research, writing, building, and analysis. Nothing goes out without your judgment." "This is also a trust-building mechanism. When you show NA enterprise buyers you have disciplined AI governance, that builds credibility. Especially in regulated industries like insurance, healthcare, mining safety, fleet operations."',
  },

  // ═══════════════════════════════════════════════════════════
  // ACTION PLAN
  // ═══════════════════════════════════════════════════════════
  {
    id: 23,
    section: 'action-plan',
    title: 'Action Plan',
    layout: 'action-summary',
    surface: 'dark',
    cognitiveJob: 'decide',
    headline: 'What To Do Before\nYou Leave Friday',
    actions: [
      {
        number: '1',
        title: 'Your North American positioning statement',
        description: 'In outcome language, not feature language. Can a buyer understand what you do and why you\'re different in 5 seconds?',
      },
      {
        number: '2',
        title: 'Your #1 ICP, defined with specifics',
        description: 'Industry, company size, buyer title, pain point. Plus 10 named target accounts.',
      },
      {
        number: '3',
        title: 'One AI workflow you\'ll run in Week 1 back home',
        description: 'Pick your flagship play from the Company Labs slides. Start with one.',
      },
    ],
    cta: 'Book a 1:1 session with Dan this week to get these done.',
    presenterNotes: '"We have one day left. Here\'s what every company in this room should leave with on Friday." Run through each action item. "I have slots available for 1:1 marketing sessions through Friday. Grab me after this session or find me in the office. We\'ll work through all three together."',
  },

  {
    id: 24,
    section: 'action-plan',
    title: 'Three Roles',
    layout: 'thesis',
    surface: 'light',
    cognitiveJob: 'explain',
    headline: 'You Don\'t Need a\n10-Person Team',
    body: [
      'Positioning owner → Founder (until Series B)',
      'System builder → Fractional ops, agency, or AI-built infrastructure',
      'Execution engine → AI + one strong content person who knows your voice',
    ],
    emphasis: 'You need the right three.',
    presenterNotes: '"One of the biggest mistakes international founders make is thinking they need to hire a big marketing team. You don\'t. Not yet." "The founder owns positioning. A fractional resource or AI builds infrastructure. One content person plus AI handles execution." "This is also where TBDC\'s Surge program comes in. After Sprint Week, you\'ll have access to fractional executives who can fill these roles. Don\'t try to do this alone."',
  },

  {
    id: 25,
    section: 'action-plan',
    title: 'Takeaways',
    layout: 'thesis',
    surface: 'light',
    cognitiveJob: 'summarize',
    headline: 'Three Things\nto Take Home',
    body: [
      'Speed is your edge now. AI compresses growth cycles. Small teams move faster than incumbents if they have clear positioning.',
      'Distribution of a clear message beats producing more content.',
      'AI is a tool, not a strategy. Start with your positioning this week. AI makes it fly.',
    ],
    emphasis: 'Start with your positioning this week.',
    presenterNotes: '"Three takeaways. One: speed is your edge. You\'re small, but small means fast. Two: don\'t produce more content — produce clearer content. Three: AI is a tool, not a strategy. The founders who win in 2026 will have the clearest positioning AND use AI to execute at speed." Dharti delivers the close.',
  },

  {
    id: 26,
    section: 'action-plan',
    title: 'Close',
    layout: 'hero',
    surface: 'dark',
    cognitiveJob: 'decide',
    headline: 'Let\'s Talk',
    body: [
      'Dharti → Brand, positioning, strategy',
      'Dan → Infrastructure, execution, AI workflows',
    ],
    emphasis: null,
    cta: 'Book a 1:1 session before Friday.',
    presenterNotes: '"We\'ve got 15 minutes for questions. Anything on positioning, AI tools, specific challenges — raise your hand." "And a reminder: 1:1 sessions are available through Friday. Don\'t leave Toronto without booking one." Dharti and Dan alternate on Q&A.',
  },
];
