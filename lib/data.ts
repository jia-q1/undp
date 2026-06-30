// Crisis Bureau 2025 Data
export const reportData = {
  hero: {
    eyebrow: "2025 Crisis Bureau Launch",
    headline: "When crisis hits, UNDP moves first.",
    intro: "In 2025 and 2026…",
    metricGroups: [
      {
        title: "Financial Impact",
        metrics: [
          { value: 340, label: "Mobilized by Crisis Bureau", prefix: "$", suffix: "M+", sub: "" },
          { value: 300, label: "In accelerated recovery through Special Measures", prefix: "$", suffix: "M+", sub: "" },
        ],
      },
      {
        title: "Country Office Support in 2025",
        metrics: [
          { value: 15, label: "RAPIDA Assessments", prefix: "", suffix: "", sub: "" },
          { value: 17, label: "COs provided SURGE, Early Recovery and Crisis Operations support", prefix: "", suffix: "", sub: "" },
          { value: 12, label: "COs provided Stabilization support", prefix: "", suffix: "", sub: "" },
          { value: 14, label: "COs provided recovery finance support", prefix: "", suffix: "", sub: "" },
        ],
      },
      {
        title: "Capacity & Reach",
        metrics: [
          { value: 2585, label: "Rapid deployments facilitated, via CB's AI deployment infrastructure", prefix: "", suffix: "", sub: "Incl. 370+ crisis deployments" },
          { value: 3500, label: "Crisis practitioners mapped in UNDP", prefix: "", suffix: "+", sub: "Capacity mapping, in collaboration with OHR" },
          { value: 500, label: "UNDP personnel trained on crisis tools and methodologies", prefix: "", suffix: "+", sub: "Through the Crisis and SURGE Academy" },
        ],
      },
    ],
  },

  globalImpact: {
    title: "Global Impact",
    regions: [
      { name: "Asia-Pacific", deployments: 605, color: "#00689D", description: "Largest regional share" },
      { name: "Africa", deployments: 498, color: "#1D9E75", description: "500+ deployments" },
      { name: "Latin America", deployments: 271, color: "#7F77DD", description: "Regional insights" },
      { name: "Arab States", deployments: 271, color: "#E05A2B", description: "Crisis hotspots appear" },
      { name: "Europe & CIS", deployments: 222, color: "#4A6174", description: "Expanded response" },
      { name: "HQ", deployments: 161, color: "#9BB0C0", description: "Headquarters-based support" },
    ],
    stats: {
      totalDeployments: 2585,
      totalRequests: 3300,
      countriesSupported: 143,
      officesSupported: 150,
      crisisResponses: 12,
      deploymentValue: "~$65M",
      responseTime: "2–5 days",
    },
    topProfiles: [
      { name: "M&E", rank: 1 },
      { name: "Communications", rank: 2 },
      { name: "Climate", rank: 3 },
      { name: "Sustainable Finance", rank: 4 },
      { name: "Governance", rank: 5 },
      { name: "Digital Transformation", rank: 6 },
    ],
    // Actual 2025 deployment counts by modality (distinct from the standing roster
    // sizes in talentNetwork.ecosystems, which describe total pool capacity)
    deploymentsByModality: [
      {
        id: "expres",
        name: "ExpRes (IC/RLA/IPSA)",
        deployments2025: 2513,
        description: "Pre-vetted consultants deployed to any UNDP country office. 4,645 experts were added to the roster in 2025, bringing the total to 15,000+, across 44+ profiles and 300+ sub-profiles. Experts are identified and shared within 2–5 days, with $575K in cost recovery from ExpRes assignments alone.",
      },
      {
        id: "surge",
        name: "SURGE Advisors",
        deployments2025: 31,
        description: "Trained UNDP staff ready for rapid internal deployment within days of a crisis declaration. 2025 deployments covered Myanmar, Jamaica, PAPP, DRC, Lebanon, Madagascar, and more, drawn from a roster of 370 active advisors (53 added in 2025).",
      },
      {
        id: "sbp",
        name: "Stand-by Partners",
        deployments2025: 38,
        description: "UNDP co-chairs the SBP Network Steering Committee (2024–2026). 38 deployments with an estimated in-kind value of ~$4.8M, from partners including MCF, ZIF, NRC, FBA, Swiss/SDC, RedR, and DSS, covering Ukraine, Gaza, Sudan, Myanmar, DRC, Georgia, Sri Lanka, and Venezuela.",
      },
      {
        id: "ta",
        name: "TA Crisis Direct Hire",
        deployments2025: 3,
        description: "Direct temporary appointment for crisis contexts where standard recruitment timelines aren't feasible. 3 deployments in 2025, all in high-risk settings requiring immediate senior-level crisis response capacity.",
      },
    ],
    sbpPartners: [
      { name: "MCF", count: 9 },
      { name: "ZIF", count: 7 },
      { name: "Swiss/SDC", count: 6 },
      { name: "NRC", count: 5 },
      { name: "FBA", count: 4 },
      { name: "RedR", count: 4 },
      { name: "DSS", count: 3 },
    ],
    sbpTotalValue: "$4.8M",
    sbpCountries: ["Ukraine", "Gaza", "Sudan", "Myanmar", "DRC", "Sri Lanka", "Georgia", "Venezuela"],
  },

  // Crisis Delivery (renamed from "Direct Funding Support" / "Crisis Financing"). Top-line figures
  // are from the leadership presentation and reflect total UNDP programmatic
  // delivery in crisis/fragility contexts — a much broader figure than TRAC 3
  // + SURGE specifically, which are two distinct funding *instruments* within
  // that wider picture (they don't sum to the topline figures above).
  // TRAC 3 and SURGE figures below are computed directly from the source
  // files (TRAC3_3xyears.xlsx, SURGE-4years.xlsx), aggregated 2023–2026.
  directFundingSupport: {
    title: "Crisis Funding",
    subtitle: "TRAC 3 and SURGE financing across the Crisis Bureau",
    description: "Crisis Bureau leverages TRAC 3 to support response and recovery.",
    multiplierEffect: {
      headline: "CB does not spend money. It multiplies it.",
      quote: {
        source: "IMF",
        text: "Every $1 invested in development and conflict prevention can save up to $103 in future crisis costs.",
        note: "CB is the mechanism through which that investment becomes deployable at the right moment.",
      },
      cases: [
        {
          tag: "Iraq",
          stat: "$1.6B pooled from 30+ donors",
          description: "CB built and managed the fiduciary and coordination backbone. 4.8 million displaced people returned home. Local firms executed the majority of works.",
          note: "The model is now being adapted in Syria, Lebanon, Sudan, Haiti and Somalia.",
        },
        {
          tag: "Ukraine",
          stat: "$1.4B in EIB financing unlocked",
          description: "CB operational presence and track record gave donors and financiers the confidence to commit at scale for socio-economic recovery.",
          note: "6.6 million people had energy services restored or maintained in 2025.",
        },
        {
          tag: "TRAC3: 2023 to 2026",
          stat: "~$33M invested across 6 crisis countries",
          description: "Sudan, Syria, Myanmar, Palestinian territories, DRC, Lebanon. In each context, this allocation is the anchor that brings in multiples from bilateral donors.",
          note: "[PLACEHOLDER: TRAC3 return-on-modelling, multiplier on downstream financing]",
        },
      ],
    },
    toplineIntro: "More than half of UNDP's work happens in crisis settings",
    topline: [
      { value: "$2.6B", label: "Delivered in crisis and fragility contexts", sub: "in 2025" },
      { value: "16", label: "Countries under formal crisis declaration", sub: "in 2025" },
      { value: "$1.1B", label: "Combined delivery across these 16 countries", sub: "" },
      { value: "8/10", label: "Of UNDP's largest offices sit in crisis settings", sub: "" },
    ],
    toplineOutro: "Crisis is not a subset of what UNDP does. It is where most of its consequential work takes place.",
    trac3: {
      title: "TRAC 3 — whole of Crisis Bureau",
      description: "Recovery and response expense provided to country offices, 2023–2026.",
      total: "$32.9M",
      recoveryTotal: "$26.3M",
      responseTotal: "$6.6M",
      countriesReached: 105,
      byYear: [
        { year: "2023", recovery: 6485667, response: 3267498 },
        { year: "2024", recovery: 7583061, response: 2703829 },
        { year: "2025", recovery: 8619907, response: 346252 },
        { year: "2026", recovery: 3590000, response: 330000 },
      ],
      byBureau: [
        { bureau: "RBAS", value: 10821427 },
        { bureau: "RBAP", value: 7626054 },
        { bureau: "RBA", value: 5811015 },
        { bureau: "RBLAC", value: 5151793 },
        { bureau: "RBEC", value: 3517154 },
      ],
      topCountries: [
        { country: "Sudan", value: 2710547 },
        { country: "Syria", value: 2279738 },
        { country: "Myanmar", value: 2212452 },
        { country: "PAPP", value: 1915548 },
        { country: "DRC", value: 1760323 },
        { country: "Panama (Regional Center)", value: 1627287 },
        { country: "Lebanon", value: 1612607 },
        { country: "Somalia", value: 1242167 },
        { country: "Turkiye", value: 1078624 },
        { country: "Bangladesh", value: 1045761 },
      ],
    },
    surge: {
      title: "SURGE — C3RT sub-team",
      description: "Money disbursed purely by the C3RT sub-team for immediate crisis response and early recovery, 2023–2026.",
      total: "$12.2M",
      byYear: [
        { year: "2023", value: 4720198 },
        { year: "2024", value: 4066570 },
        { year: "2025", value: 3051198 },
        { year: "2026", value: 395071 },
      ],
      // The source file's country-level signal is embedded in internal project/task
      // codes (47 of them, e.g. "RBASGAZA2023"), not a clean country field — those
      // aren't decoded here to avoid mislabeling a country in a leadership-facing
      // report. Flagged in the UI; can add once a code-to-country mapping is confirmed.
      countryBreakdownAvailable: false,
    },
    leverage: {
      title: "TRAC 3 Leverage — Resources Mobilized",
      totalTrac3: "$32.9M",
      totalMobilized: "$1.2B",
      ratio: "1:36",
      description: "For every $1 of TRAC 3 allocated, country offices mobilized $36 in additional resources, 2023–2025 (2026 excluded, data not yet available).",
      //comparisonNote: "This is significantly higher than the 1:10.2 ratio in BERA's TPS analysis. That's good news — it suggests TRAC 3 is more catalytic than previously estimated — but it also points to methodological inconsistencies between the two analyses.",
      //skewNote: "These figures are skewed by Ukraine, which alone raised over $600M in resources mobilized in 2024.",
      // Source analysis breakdown has no per-row labels — five unlabeled
      // observations summing to the totals above.
      breakdown: [
        { trac3: 3604247, mobilized: 18000000, ratio: 4.99 },
        { trac3: 9919984, mobilized: 399300000, ratio: 40.25 },
        { trac3: 6493348, mobilized: 60867839, ratio: 9.37 },
        { trac3: 2514311, mobilized: 614800000, ratio: 244.52 },
        { trac3: 4412696, mobilized: 113400000, ratio: 25.7 },
      ],
      breakdownTotal: { trac3: 32900000, mobilized: 1206367839, ratio: 36 },
    },
    // Resources mobilized by Crisis Bureau teams in 2025, by donor.
    // Donor-line amounts sum exactly to each team's total below.
    resourceMobilization2025: {
      total: 345000000,
      byTeam: [
        { team: "CB Crisis Readiness, Response and Recovery Team", total: 145000000 },
        { team: "CB Disaster RD & Recovery", total: 3678065 },
        { team: "CB Governance, Rule of Law and Peacebuilding Hub", total: 200000000 },
        { team: "CB Policy, Knowledge & Partnerships", total: 2974177 },
      ],
    },
    // Independent satellite nighttime-lights analysis (a well-established proxy
    // for economic activity), used to test whether UNDP early-recovery
    // investment is associated with regained economic activity post-crisis.
    satelliteEvidence: {
      title: "Satellite Evidence on Early Recovery Impact",
      approach: "Independent satellite nighttime-lights data measures how much of the post-crisis decline in activity has been regained, comparing levels before the crisis, at its lowest point, and today.",
      headline: [
        { value: "$20–40", label: "In additional local economic activity for every $1 invested in Myanmar's early-recovery portfolio" },
        { value: "≈$1", label: "In economic reactivation for every $1 invested in Gaza employment and cash-for-work programming" },
      ],
      robust: [
        {
          country: "Myanmar",
          investment: "$16.8M invested",
          finding: "Using a difference-in-differences design comparing nighttime lights before and after the 2025 earthquake, UNDP-supported areas recovered 30–55% more than comparable non-UNDP areas (p<0.001).",
          result: "Linked to an estimated $350–650M in additional local economic activity; $20–40 per $1 invested.",
          note: "National nighttime lights have returned to ~69% of pre-earthquake levels. The dollar return depends on the beneficiary assumption (~3.5M beneficiaries, $1,122 GDP per capita) and should be confirmed before external citation.",
        },
        {
          country: "Gaza",
          investment: "Employment & cash-for-work programming",
          finding: "A sector-level treated-vs-control analysis finds employment and cash-for-work is the only intervention type with a statistically significant positive effect: a +11.8% increase in nighttime lights.",
          result: "≈$0.17 per $1 invested per year on a conservative satellite-verified count of ~54,000 beneficiaries, rising toward ≈$1 per $1 once UNDP's full reported employment caseload is counted.",
        },
      ],
      correlational: [
        { country: "Syria", investment: "$98M", recovery: "~100%", note: "Full recovery signal" },
        { country: "Afghanistan", investment: "$97M", recovery: "~100%", note: "Full recovery in a difficult operating environment" },
        { country: "DR Congo", investment: "$251M", recovery: "~100%", note: "Strong portfolio-level recovery signal" },
        { country: "Ukraine", investment: "$971M", recovery: "~48%", note: "Partial recovery amid ongoing war — a resilience signal, not a completed recovery story" },
      ],
      caveat: "Myanmar is the strongest causal estimate (difference-in-differences); Gaza the strongest intervention-level signal. Syria, Afghanistan, DR Congo, and Ukraine show recovery alongside UNDP investment, but are correlational. Further causal testing is needed before presenting these as attributable UNDP impact.",
    },
  },

  // Source: leadership presentation slides on UNDP's crisis programming pillars
  // (Early Recovery, Stabilization, Forced Displacement, Disaster Resilience,
  // Peacebuilding & Conflict Prevention, Rule of Law/Security/Human Rights,
  // Local Governance, and the cross-cutting Gender Equality lens).
  crisisProgramming: {
    title: "Crisis Programming",
    intro: "UNDP's programmatic pillars for crisis and fragile contexts, spanning early recovery through to long-term institution-building.",
    pillars: [
      {
        id: "early-recovery",
        name: "Early Recovery",
        scope: "17 early recovery initiatives ongoing in 2025",
        stats: [
          { value: "210K tonnes", label: "Solid waste collected in Gaza, benefiting 624K people" },
          { value: "10M", label: "People provided with electricity in Ukraine through energy infrastructure repairs" },
          { value: "25M", label: "People in Afghanistan supported with essential services, small businesses, and livelihoods" },
        ],
      },
      {
        id: "stabilization",
        name: "Stabilization",
        scope: "12 countries",
        stats: [
          { value: "6M", label: "Returns since 2015" },
          { value: "16.8M", label: "People benefited from improved security, infrastructure rehabilitation, service delivery, and income support" },
          { value: "1.5M", label: "People in the Lake Chad Basin benefited from improved safety and security" },
        ],
        partners: ["Germany (Stabilization Response Mechanism)", "Japan", "UK", "Netherlands", "Sweden"],
      },
      {
        id: "forced-displacement",
        name: "Forced Displacement",
        scope: "59 countries",
        stats: [
          { value: "19.2M", label: "Forcibly displaced people reached since 2022" },
          { value: "$810M", label: "In programming since 2020" },
        ],
        partners: ["IOM", "DCO", "OCHA", "UNHCR", "Denmark", "Germany", "Japan", "Netherlands", "Norway", "Republic of Korea", "Switzerland", "UK"],
      },
      {
        id: "disaster-resilience",
        name: "Disaster Resilience",
        scope: "",
        stats: [
          { value: "$250M", label: "Somalia's 2023 flood recovery needs built into National Plan 2025–2029" },
          { value: "$72M", label: "Mozambique Recovery Facility supports housing, infrastructure, livelihoods, and women's empowerment" },
        ],
      },
      {
        id: "peacebuilding",
        name: "Peacebuilding & Conflict Prevention",
        scope: "",
        stats: [
          { value: "33%", label: "Largest implementer of the UN Peacebuilding Fund, delivering 33% of its portfolio in 2024" },
          { value: "58", label: "Peace and Development Advisors placed in RC offices via the joint UNDP-DPPA Programme on Building National Capacities for Conflict Prevention" },
        ],
        examples: [
          { country: "Ethiopia", note: "100,000 people took part in reconciliation talks" },
          { country: "Mauritania", note: "UNDP is helping design a national prevention strategy" },
          { country: "DR Congo", note: "Support to the UN mission transition to protect development gains and sustain peace" },
          { country: "Colombia", note: "AI-powered social listening to engage youth on peace" },
        ],
        note: "Supported UN Mission transitions in DRC, Liberia, Haiti, and Mali.",
      },
      {
        id: "rule-of-law",
        name: "Rule of Law, Security & Human Rights",
        scope: "110 countries",
        stats: [
          { value: "58.8M", label: "People accessed justice services; 32M women" },
          { value: "$100M+", label: "Invested annually in people-centered law enforcement" },
          { value: "4,000+", label: "Businesses trained globally on human rights" },
          { value: "170,000+", label: "Women accessed justice via the Gender Justice Platform" },
        ],
        countryHighlights: [
          { country: "Georgia", note: "350,000 people accessing environmental justice" },
          { country: "State of Palestine", note: "Digital court management system enabled remote proceedings for 160K users" },
        ],
        partners: ["EU", "Germany", "Iceland", "Japan", "Liechtenstein", "Netherlands", "Norway", "Republic of Korea", "Sweden", "Switzerland", "UK"],
      },
      {
        id: "local-governance",
        name: "Local Governance",
        scope: "115 countries, including 56 in fragile contexts",
        stats: [
          { value: "10M", label: "Burkina Faso — working with local government to improve services for over 10 million people" },
          { value: "2.9M", label: "Lebanon — working with municipalities to deliver services and livelihoods to 2.9 million people in refugee-hosting areas" },
          { value: "3.9M", label: "Iraq — working with local government to provide nearly 3.9 million returnees with services and jobs" },
        ],
        partners: ["Programme Countries", "European Union", "Germany", "Japan", "Switzerland", "Sweden"],
      },
    ],
    // Cross-cutting lens, not a programmatic pillar — kept separate from the
    // `pillars` array since it has a different shape (context stats describing
    // why this matters, plus impact-at-scale stats, rather than one stat set).
    crisisRiskAnticipation: {
      name: "Crisis Risk & Anticipation",
      tools: [
        {
          name: "Risk Anticipation Data Hub (RAD)",
          description: "An open, integrated data platform that aggregates and harmonizes risk data across sectors and geographies. It enables more accessible, interoperable, and decision-focused analysis, supporting risk-informed programming and anticipatory action by UNDP and partners.",
          screenshot: "/RAD.png",
          link: "https://dev-dc-web-service-201450022936.europe-west4.run.app/",
          linkLabel: "Access the RAD platform",
        },
        {
          name: "INFORM Warning",
          description: "A global early-warning system that monitors and interprets emerging, multi-dimensional risks over a 1–12 month horizon. It translates risk trends, forecasts and scenarios into forward-looking signals that support earlier decision-making for prevention, preparedness, and early action.",
          screenshot: "/inform.png",
          link: "https://drmkc.jrc.ec.europa.eu/inform-index/inform-warning-tool/",
          linkLabel: "Access the INFORM Warning tool",
        },
      ],
    },
    genderEquality: {
      name: "Gender Equality in Crisis Contexts",
      contextStats: [
        { value: "35%", label: "More likely that peace lasts 15+ years when women are involved" },
        { value: "75%", label: "Of displaced people are women and children" },
        { value: "70%", label: "Of women in crisis settings face gender-based violence" },
      ],
      impactStats: [
        { value: "111M", label: "Women supported to participate in political processes in 23 fragile countries" },
        { value: "1.3M", label: "Women with improved livelihoods in 42 fragile countries" },
        { value: "43K", label: "People (84% women) accessed justice via the Gender Justice Platform in 30 countries" },
      ],
      note: "France doubled its investment in 6 countries: Ukraine, Moldova, Mongolia, Chad, Burundi, and Palestine.",
    },
  },

  crisisResponse: {
    title: "Crisis Response",
    crisisTracker: {
      description: "An enhanced Crisis Tracker Dashboard provides real-time updates on crisis situations, support progress, funding allocations, and SURGE deployments. An Excel-based tracker feeds reliable monthly data into the dashboard.",
      features: ["Real-time crisis situation updates", "Funding allocation tracking", "SURGE deployment visibility", "Monthly Excel data feed"],
      link: "https://app.powerbi.com/links/MiDy0Sdi8k?ctid=b3e5db5e-2944-4837-99f5-7488ace54319&pbi_source=linkShare&bookmarkGuid=fb2355dc-5f0b-4eb1-8166-3c64b259d41c",
    },
    crises: [
      {
        id: "papp",
        name: "PAPP",
        coordinates: [35.3, 31.95] as [number, number],
        level: "L3",
        experts: 17,
        roles: ["Recovery Advisors", "Communications Advisor", "Stabilization Advisor", "Peacebuilding Specialist", "Cluster Coordinator", "Operations Access & Logistics Advisors", "Livelihood and Economic Recovery Advisors", "RDNA Coordinators", "Debris Management Advisors"],
        description: "17 advisors/experts deployed following the ceasefire, the highest-volume crisis response of 2025",
      },
      {
        id: "syria",
        name: "Syria",
        coordinates: [36.28, 33.51] as [number, number],
        level: "L3",
        experts: 1,
        roles: ["Durable Solutions Advisor"],
        description: "1 advisor deployed to support ongoing response and recovery planning",
      },
      {
        id: "myanmar",
        name: "Myanmar",
        coordinates: [95.96, 21.92] as [number, number],
        level: "L3",
        experts: 5,
        roles: ["Early Recovery Cluster Coordinators", "Debris Management", "Structural/Housing Engineering"],
        description: "5 advisors/experts deployed for earthquake and conflict response",
      },
      {
        id: "drc",
        name: "DRC",
        coordinates: [15.27, -4.44] as [number, number],
        level: "L3",
        experts: 3,
        roles: ["Crisis Communications", "Crisis Coordination", "Stress Counselling"],
        description: "3 advisors/experts deployed following conflict escalation",
      },
      {
        id: "lebanon",
        name: "Lebanon",
        coordinates: [35.5, 33.89] as [number, number],
        level: "L3",
        experts: 4,
        roles: ["Mine Action Experts", "Technical Assessment Specialist", "Crisis Communications"],
        description: "4 advisors deployed to support ongoing response and recovery planning",
      },
      {
        id: "afghanistan",
        name: "Afghanistan",
        coordinates: [69.21, 34.56] as [number, number],
        level: "L2",
        experts: 3,
        roles: ["Joint Rapid Needs Assessment Advisor", "Joint Rapid Needs Assessment Advisor", "Shelter Expert"],
        description: "3 advisors/experts deployed after the Eastern Afghanistan earthquake",
      },
      {
        id: "pakistan",
        name: "Pakistan",
        coordinates: [73.05, 33.68] as [number, number],
        level: "L2",
        experts: 1,
        roles: ["Early Recovery Coordination Advisor"],
        description: "1 advisor deployed to support Early Recovery coordination following widespread flooding",
      },
      {
        id: "jamaica",
        name: "Jamaica",
        coordinates: [-76.79, 17.97] as [number, number],
        level: "L1",
        experts: 5,
        roles: ["Information Management & Recovery Planning Support Officer", "Recovery Planning & Coordination Expert", "Early Recovery Advisor", "PDNA/DALA Coordination Specialist", "High-Level SURGE Coordination Team Leader"],
        description: "5 advisors deployed after the October hurricane",
      },
      {
        id: "srilanka",
        name: "Sri Lanka",
        coordinates: [79.85, 6.93] as [number, number],
        level: "L1",
        experts: 1,
        roles: ["Early Recovery Advisor"],
        description: "1 advisor deployed to support Early Recovery coordination following the March cyclone",
      },
      {
        id: "burundi",
        name: "Burundi",
        coordinates: [29.36, -3.38] as [number, number],
        level: "—",
        experts: 1,
        roles: ["Livelihoods/Resilience Advisor"],
        description: "No formal declaration. 1 advisor deployed for response and recovery planning",
      },
      {
        id: "madagascar",
        name: "Madagascar",
        coordinates: [47.51, -18.88] as [number, number],
        level: "—",
        experts: 4,
        roles: ["Partnerships & Resource Mobilization", "Peacebuilding", "Core Governance Functions", "Youth/Gender/Social Cohesion"],
        description: "No formal declaration. 4 advisors deployed in November following severe flooding",
      },
      {
        id: "burkinafaso",
        name: "Burkina Faso",
        coordinates: [-1.52, 12.37] as [number, number],
        level: "—",
        experts: 3,
        roles: ["Crisis Communications", "Crisis Coordination", "Stress Counselling"],
        description: "No formal declaration. 3 advisors/experts deployed following escalation of conflict",
      },
    ],
  },

  assessments: {
    title: "Assessments",
    intro: "A suite of specialized tools is available to rapidly evaluate crisis impacts across sectors, providing the evidence base for informed decision-making.",
    tools: [
      {
        name: "RAPIDA",
        fullName: "",
        description: "Rapid early recovery assessment and analysis.",
        statsByYear: [
          {
            year: "2025",
            total: 13,
            countries: [
              { name: "Afghanistan", count: 1 },
              { name: "Albania", count: 1 },
              { name: "Cabo Verde", count: 1 },
              { name: "Colombia", count: 1 },
              { name: "Cuba", count: 1 },
              { name: "Iran", count: 1 },
              { name: "Jamaica", count: 1 },
              { name: "Myanmar (Burma)", count: 2 },
              { name: "Pakistan", count: 1 },
              { name: "Sri Lanka", count: 1 },
              { name: "Sudan", count: 1 },
              { name: "Thailand", count: 1 },
            ],
          },
          {
            year: "2026",
            total: 6,
            countries: [
              { name: "Dominican Republic", count: 1 },
              { name: "Kosovo", count: 1 },
              { name: "Madagascar", count: 1 },
              { name: "Mozambique", count: 1 },
              { name: "Solomon Islands", count: 1 },
              { name: "Sri Lanka", count: 1 },
            ],
          },
        ],
      },
      {
        name: "HBDA",
        fullName: "Household and Building Damage Assessment",
        description: "Granular evaluation of household and infrastructure damage.",
        statsByYear: [
          {
            year: "2025",
            total: 4,
            countries: [
              { name: "Madagascar", count: 1 },
              { name: "Mozambique", count: 1 },
              { name: "Palestinian Territories", count: 1 },
              { name: "Vanuatu", count: 1 },
            ],
          },
        ],
      },
      {
        name: "SEIA",
        fullName: "Digital Socio-Economic Impact Assessment",
        description: "Comprehensive analysis of the socio-economic effects of crises on households and MSMEs.",
        statsByYear: [
          {
            year: "2025",
            total: 3,
            countries: [
              { name: "Haiti", count: 1 },
              { name: "Lebanon", count: 1 },
              { name: "Syria", count: 1 },
            ],
          },
          {
            year: "2026",
            total: 1,
            countries: [{ name: "Lebanon", count: 1 }],
          },
        ],
      },
      {
        name: "PDNA",
        fullName: "Post-Disaster Needs Assessment",
        description: "Joint government-led assessment of disaster impact and recovery needs.",
        statsByYear: [
          {
            year: "2025",
            total: 4,
            countries: [
              { name: "Gaza", count: 1 },
              { name: "Burundi", count: 1 },
              { name: "Cabo Verde", count: 1 },
              { name: "Afghanistan", count: 1 },
            ],
          },
          {
            year: "2026",
            total: 5,
            countries: [
              { name: "Sri Lanka", count: 1 },
              { name: "Madagascar", count: 1 },
              { name: "Moldova", count: 1 },
              { name: "Ukraine", count: 1 },
              { name: "Gaza", count: 1 },
            ],
          },
        ],
      },
    ],
    outro: "Designed and implemented in collaboration with Country Offices, governments, and partners, these assessments ensure that recovery efforts are targeted, inclusive, and grounded in local realities.",
    dashboardLink: "https://app.powerbi.com/groups/me/reports/dda9197c-ecd3-4af1-9256-7dbd7bdcaacc/b01ffe5c509aea25c0b1?ctid=b3e5db5e-2944-4837-99f5-7488ace54319&experience=power-bi",
  },

  talentNetwork: {
    title: "Talent Infrastructure",
    ecosystems: [
      {
        name: "ExpRes",
        count: "15,000+",
        subtitle: "Pre-vetted experts",
        icon: "🌐",
        description: "Pre-vetted consultants available for rapid deployment across 44+ profiles and 300+ sub-profiles. 2–5 day response time.",
      },
      {
        name: "SURGE",
        count: "370",
        subtitle: "Crisis-ready advisors",
        icon: "⚡",
        description: "Trained UNDP staff ready within days of crisis declaration. 53 added in 2025, expanded with new profiles.",
      },
      {
        name: "Stand By Partners",
        count: "13",
        subtitle: "Deployments",
        icon: "🤝",
        description: "SBP Network partners with estimated in-kind value of USD 4.8M. Covering Ukraine, Gaza, Sudan, Myanmar, DRC.",
      },
      {
        name: "Talent Marketplace",
        count: "10,000+",
        subtitle: "Profiles",
        icon: "✓",
        description: "Direct temporary appointments for crisis contexts where standard recruitment timelines are not feasible.",
      },
    ],
  },

  specialMeasures: {
    title: "Special Measures",
    totalValue: "$98.2M",
    totalCases: 641,
    officesActivated: 12,
    microHactsWaived: 57,
    regionLeader: { name: "RBAS", value: "$55M", cases: 415 },
    dashboardLink: "https://app.powerbi.com/links/PEfQYyrptI?ctid=b3e5db5e-2944-4837-99f5-7488ace54319&pbi_source=linkShare&bookmarkGuid=0cff72dd-0d4f-4658-b0aa-b84282237e54",
    pillars: [
      {
        name: "NGO/CSO Engagement",
        value: "$41.6M",
        cases: 166,
        description: "57 Micro-HACTs waived; 30 to 45 days saved per assessment.",
        details: "25 entities engaged 2–3 months faster. Covered protection, livelihoods, shelter, mine action.",
      },
      {
        name: "Procurement",
        value: "$24.9M",
        cases: 225,
        description: "96 micro-canvassing, 33 RFQs, 27 increased DPA, 69 CAP cases.",
        details: "Water stations, solar lights, medical supplies across Bangladesh, Sudan, Syria, Myanmar.",
      },
      {
        name: "Project Initiation",
        value: "$20.8M",
        cases: 16,
        description: "Average 3 months saved via QA/SES waiver for 12 months.",
        details: "11 projects with waiver. Examples: elections support (Bangladesh), famine prevention (Sudan).",
      },
      {
        name: "Human Resources",
        value: "$10.1M",
        cases: 133,
        description: "Fast-track recruitment across GS2–P4, TA, and NPSA grades.",
        details: "Up to 5 FTAs and 20 TAs per project. Active in PAPP, Syria, DRC, Sudan, Haiti, Iran.",
      },
      {
        name: "Finance",
        value: "$0.5M",
        cases: 91,
        description: "Increased petty cash and project cash advances.",
        details: "Emergency payments in remote areas with extended liquidation timelines.",
      },
      {
        name: "Private Sector",
        value: "$0.3M",
        cases: 10,
        description: "7 non-financial letters signed in Sudan.",
        details: "Irrigation access, post-harvest loss, last-mile energy solutions.",
      },
    ],
    coDelivery: [
      { co: "Syria", cases: 148, value: "$21.2M", detail: "Highest dollar value of any country office. NGO/CSO engagement dominated: mine action, rubble removal, women's empowerment, HLP legal clinics, and livelihoods. Procurement covered solar systems, solid waste removal, and rehabilitation of schools and bakeries.", categoryBreakdown: [], categoryNotes: [] },
      {
        co: "PAPP",
        cases: 144,
        value: "$18.7M",
        detail: "Procurement of mobile desalination units, jerrycans, and rehabilitation of hospital wards and solid waste removal. HR measures enabled recruitment across P and GS grades; finance measures covered urgent operational payments.",
        categoryBreakdown: [
          { name: "Procurement", cases: 100, value: "$13.95M", share: "74.6%" },
          { name: "Human Resources Management", cases: 39, value: "$4.42M", share: "23.6%" },
          { name: "NGOs/CSOs Engagement", cases: 5, value: "$0.34M", share: "1.8%" },
          { name: "Financial Resources Management", cases: 0, value: "$0", share: "0%" },
          { name: "Private Sector Engagement", cases: 0, value: "$0", share: "0%" },
          { name: "Project Initiation / PIP and Construction", cases: 0, value: "$0", share: "0%" },
        ],
        categoryNotes: [
          "Procurement was the strongest area of utilization: 100 cases valued at US$13.95M (~75% of total value). The most impactful measure was raising the CO CAP review requirement to US$300,000 — 51 cases alone, US$7.45M.",
          "Human Resources was the second-largest driver: 39 cases, US$4.42M. The strongest HR measure was direct recruitment of project staff under IPSA/NPSA arrangements — 19 cases, US$2.20M.",
          "Programmatic measures saw minimal use: 5 cases, US$337,036, all NGO/CSO engagement via LVG grants. Private sector engagement, project initiation/PIP, and financial resources management measures saw no utilization.",
        ],
      },
      { co: "Haiti", cases: 91, value: "$15.6M", detail: "Cases concentrated in NGO/CSO engagement and procurement, supporting ongoing humanitarian response and recovery programming.", categoryBreakdown: [], categoryNotes: [] },
      { co: "Sudan", cases: 123, value: "$15.1M", detail: "Procurement of water sub-stations, motorcycles, tractors, and solar streetlights for IDPs. Finance measures covered fuel and supplies. Private sector engagement delivered 7 non-financial letters for irrigation and last-mile energy.", categoryBreakdown: [], categoryNotes: [] },
      { co: "DRC", cases: 64, value: "$13.3M", detail: "NGO/CSO engagement facilitated social cohesion, GBV protection, shelter, and livelihoods programming. New pre-approved special measures activation requested in Q4 2025.", categoryBreakdown: [], categoryNotes: [] },
      { co: "Bangladesh", cases: 19, value: "$9.6M", detail: "Smallest case count but highest average value per case (~$505K). Included 175 laptops and 200 flatbed scanners, early landslide warning systems, climate-smart agriculture services, and an informal-apprenticeship NGO contract.", categoryBreakdown: [], categoryNotes: [] },
      { co: "Myanmar", cases: 30, value: "$3.9M", detail: "PPE for earthquake and solid-waste clean-up, climate-smart agriculture, construction supervision services, and 25 NGO entities engaged for labor-law awareness and legal counselling. REVIVE Project measures also activated.", categoryBreakdown: [], categoryNotes: [] },
      { co: "Iran", cases: 22, value: "$0.9M", detail: "Lower-value cases concentrated in finance (emergency food payments) and HR. Extension of pre-approved measures requested given sustained crisis conditions.", categoryBreakdown: [], categoryNotes: [] },
    ],
    q4Activations: ["Nepal", "Jamaica", "Sri Lanka"],
    reviveProject: ["Afghanistan", "Myanmar"],
    extensionsRequested: ["PAPP", "Syria", "Myanmar", "DRC", "Haiti", "Iran"],
  },

  readinessTraining: {
    title: "Readiness & Training",
    erh: {
      name: "Early Recovery Hub",
      reach: 1315,
      pageViews: "8,000+",
      uniqueVisitors: "1,000",
      sessionsDelivered: 26,
      bureausReached: 12,
      officesReached: 128,
      description: "Launched by the UNDP Administrator, the ERH is the central digital platform for crisis response and early recovery programming.",
      features: ["10 programmatic packages", "Dedicated Assessments page", "10-step guide for RRs", "Pre-approved measures", "AI chatbot"],
    },
    trainingCohorts: [
      {
        name: "Bangkok",
        date: "June 2025",
        participants: 40,
        beforeUnderstanding: 17,
        afterUnderstanding: 87,
        rating: "9.43/10",
        ratingLabel: "Recommend rating",
        description: "Crisis Readiness and SURGE Training. 23 of 40 joined SURGE roster.",
      },
      {
        name: "Addis Ababa",
        date: "November 2025",
        participants: 30,
        beforeUnderstanding: 21,
        afterUnderstanding: 93,
        rating: "93%",
        ratingLabel: "Post-training understanding",
        description: "Africa regional hubs personnel. Strongest cohort result of the year.",
      },
      {
        name: "Programme Criticality Webinar",
        date: "September 2025",
        participants: 76,
        beforeUnderstanding: 0,
        afterUnderstanding: 76,
        rating: "22 RRs + 30 DRRs",
        ratingLabel: "Senior leaders reached",
        description: "Programme Criticality and Acceptable Security Risk webinar series, strengthening shared decision-making on staff safety and programme delivery in crisis contexts.",
      },
      {
        name: "RBEC Online Module",
        date: "2025",
        participants: 16,
        beforeUnderstanding: 0,
        afterUnderstanding: 100,
        rating: "DRRs, ARRs, Ops Managers",
        ratingLabel: "Audience seniority",
        description: "Online Crisis Readiness Strengthening Training for RBEC country offices, building baseline crisis readiness before a crisis occurs.",
      },
    ],
    aarTracker: [
      { name: "Ethiopia", status: "done", note: "Delivered end-to-end: inception, field mission, and final report, with recommendations tracked and actioned by focal points." },
      { name: "Lebanon", status: "ongoing", note: "In progress" },
      { name: "Haiti", status: "ongoing", note: "In progress" },
      { name: "Niger", status: "ongoing", note: "In progress" },
      { name: "Bangladesh", status: "ongoing", note: "In progress" },
    ],
    aarDescription: "A new, lighter After-Action Review methodology was developed and applied across multiple country contexts, enabling faster turnaround.",
    aarDashboardLink: "https://app.powerbi.com/links/Ga6TqORI7o?ctid=b3e5db5e-2944-4837-99f5-7488ace54319&pbi_source=linkShare",
    sopUpdates: [
      "Crisis Response & Recovery SOPs revised: UNBOA recommendations incorporated",
      "French and Spanish translations completed: pending publication via SURGE Portal",
      "Lessons learned documented from Crisis Supplementary Protocols application",
      "Concept note on Crisis Readiness Protocols for Country Offices developed",
    ],
  },

  // Renamed from "Workforce Intelligence" — slimmed to a single dashboard
  // link rather than an explanation of the underlying scoring methodology.
  crisisSignals: {
    title: "Crisis Signals",
    tool: {
      name: "Crisis Demand Profile Dashboard",
      organization: "Crisis Bureau",
      description: "Scores crisis workforce demand across 4 evidence dimensions — embeddedness, indicator intensity, budget proximity, and EIU context — to guide ExpRes requests, SURGE profiling, and recruitment.",
      link: "https://crisis-demand-profile.vercel.app/dashboard/dashboard_clean.html",
    },
  },

  futureOutlook: {
    title: "Future Outlook",
    roadmap: [
      {
        year: "2026",
        initiatives: [
          "Expand Global Talent Pools",
          "Improve Crisis Forecasting",
          "Strengthen Regional Readiness",
          "Scale Workforce Intelligence",
        ],
      },
    ],
  },

  // Country-level dossier pages. Each entry compiles the facts already
  // present elsewhere in this file (crisisResponse, directFundingSupport,
  // specialMeasures, etc.) into one overview, rather than duplicating the
  // underlying numbers — the country page components look those up by id/name.
  countryProfiles: {
    papp: {
      name: "PAPP",
      fullName: "Programme of Assistance to the Palestinian People",
      overview: "UNDP's largest crisis response of 2025, activated following the ceasefire. Deployment spanned recovery advisory, stabilization, peacebuilding, and debris management, backed by Special Measures procurement and HR fast-tracking, and TRAC 3 financing.",
    },
  },

  colors: {
    navy: "#003F6B",
    blue: "#00689D",
    sky: "#009EDB",
    teal: "#00B5C8",
    gold: "#F0A500",
    coral: "#E05A2B",
    green: "#1D9E75",
    purple: "#7F77DD",
    ice: "#E8F4FA",
    paper: "#F5F8FB",
    rule: "#D0DFE8",
    mid: "#4A6174",
    slate: "#1C2B3A",
  },
};
