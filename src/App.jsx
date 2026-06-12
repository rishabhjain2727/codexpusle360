import { useEffect, useMemo, useState } from "react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const words = ["connected growth", "brand control", "live optimisation", "smarter planning"];

const steps = [
  {
    number: "01",
    title: "Discover",
    copy: "Track market movement, competitor activity, and audience signals.",
    visual: "visual-discover",
    chips: ["Market signals", "Competitor moves", "Audience shifts"]
  },
  {
    number: "02",
    title: "Govern",
    copy: "Apply brand rules, messaging principles, and compliance guardrails.",
    visual: "visual-govern",
    chips: ["Brand rules", "Risk checks", "Approval guardrails"]
  },
  {
    number: "03",
    title: "Plan",
    copy: "Turn briefs into media plans, budget scenarios, and channel choices.",
    visual: "visual-plan",
    chips: ["Brief inputs", "Budget scenarios", "Channel mix"]
  },
  {
    number: "04",
    title: "Engage",
    copy: "Activate audiences through controlled, measurable engagement channels.",
    visual: "visual-engage",
    chips: ["Segments", "Templates", "Delivery tracking"]
  },
  {
    number: "05",
    title: "Measure",
    copy: "Track exposure, response, brand lift, and live performance.",
    visual: "visual-measure",
    chips: ["Reach", "Response", "Brand lift"]
  },
  {
    number: "06",
    title: "Optimise",
    copy: "Feed learning back into the next brief, plan, and campaign.",
    visual: "visual-optimise",
    chips: ["Learn", "Adjust", "Improve"]
  }
];

const products = [
  {
    count: "Product 01",
    logo: asset("brand-book.png"),
    short: "Brand Book",
    title: "Brand Book - Govern brand consistency at scale.",
    copy: "Brand Book codifies positioning, tone, messaging rules, communication principles, and risk thresholds so every campaign stays consistent, controlled, and compliant.",
    features: [
      "Brand positioning and narrative framework",
      "Tone of voice and messaging principles",
      "Content and communication guardrails",
      "Brand risk and compliance thresholds",
      "Cross-channel consistency rules"
    ],
    tags: ["Brand Strategy", "Messaging Rules", "Compliance Guardrails"],
    dashboard: {
      type: "brand",
      title: "Brand Governance Console",
      metric: "100%",
      label: "Compliant assets",
      bars: [82, 94, 68],
      cards: ["Tone check", "Risk threshold", "Channel rules"]
    }
  },
  {
    count: "Product 02",
    logo: asset("product-pulse-scout.png"),
    short: "Pulse Scout",
    title: "Pulse Scout - See competitor moves before they become market shifts.",
    copy: "Pulse Scout tracks competitor activity, creative patterns, visibility trends, share of voice, and market movement across search engines and digital publishers.",
    features: [
      "Competitive ad tracking",
      "Creative and messaging visibility",
      "Share of voice analysis",
      "Market activity monitoring",
      "Trend and change detection"
    ],
    tags: ["Competitor Tracking", "Creative Visibility", "Market Trends"],
    dashboard: {
      type: "scout",
      title: "Competitor Signal Radar",
      metric: "+38",
      label: "New market signals",
      bars: [52, 76, 91, 63],
      cards: ["Creative spikes", "Share of voice", "Publisher activity"]
    }
  },
  {
    count: "Product 03",
    logo: asset("product-pulse-plan.png"),
    short: "Pulse Plan",
    title: "Pulse Plan - Turn briefs into confident media decisions.",
    copy: "Pulse Plan transforms campaign briefs into structured, intelligence-led media plans using market context, historical performance, budget logic, and scenario planning.",
    features: [
      "Brief-to-plan workflows",
      "Scenario-based budget modelling",
      "Media mix planning",
      "Channel allocation logic",
      "Investment planning by objective"
    ],
    tags: ["Media Mix", "Budget Scenarios", "Plan Approvals"],
    dashboard: {
      type: "plan",
      title: "Media Planning Workspace",
      metric: "4",
      label: "Active budget scenarios",
      bars: [44, 70, 58, 86],
      cards: ["TV 28%", "Digital 42%", "OOH 18%"]
    }
  },
  {
    count: "Product 04",
    logo: asset("product-pulse-engage.png"),
    short: "Pulse Engage",
    title: "Pulse Engage - Make WhatsApp a measurable engagement channel.",
    copy: "Pulse Engage helps brands create, schedule, approve, target, and measure WhatsApp Business API campaigns from one controlled system.",
    features: [
      "Campaign creation and scheduling",
      "Template and approval management",
      "Audience uploads and segmentation",
      "Opt-in and compliance controls",
      "Message delivery tracking"
    ],
    tags: ["WhatsApp Campaigns", "Audience Segments", "Delivery Tracking"],
    dashboard: {
      type: "engage",
      title: "WhatsApp Campaign Control",
      metric: "91%",
      label: "Delivery rate",
      bars: [76, 88, 64],
      cards: ["Approved template", "Segment A", "Opt-in ready"]
    }
  },
  {
    count: "Product 05",
    logo: asset("product-pulse-shift.png"),
    short: "Pulse Shift",
    title: "Pulse Shift - Measure what is working while campaigns are live.",
    copy: "Pulse Shift gives real-time visibility into campaign exposure, audience response, brand lift, and optimisation opportunities while campaigns are still active.",
    features: [
      "Real-time performance dashboards",
      "Exposure and reach tracking",
      "Audience response signals",
      "Brand lift measurement",
      "Live optimisation indicators"
    ],
    tags: ["Brand Lift", "Live Dashboards", "Optimisation Signals"],
    dashboard: {
      type: "shift",
      title: "Live Measurement Dashboard",
      metric: "+18%",
      label: "Brand lift signal",
      bars: [48, 62, 79, 94],
      cards: ["Reach live", "Response heat", "Optimise now"]
    }
  }
];

const caseStudies = [
  {
    kicker: "Case Study 01",
    title: "From a Tactical Need to a Full-Funnel Martech Transformation",
    client: "Leading Indian Commercial Vehicle Manufacturer",
    summary: "The engagement started with a focused requirement to digitise offline campaign execution and track campaign efficacy. Over time, it expanded into a full-funnel martech transformation covering campaign governance, lead management, call centre enablement, real-time reporting, and digital campaign execution.",
    stats: [
      ["1 platform", "offline campaign execution"],
      ["Full-funnel", "digital marketing expansion"],
      ["Real-time", "reporting war room"],
      ["Unified", "planning and governance"],
      ["Automated", "lead qualification"],
      ["Hyperlocal", "campaign management"]
    ],
    challenge: "The initial requirement was tactical in nature. Offline campaign execution was fragmented, and visibility into campaign performance, lead flow, and field-level activity was limited. The brand needed a structured platform to digitise offline campaign operations and track campaign efficacy more reliably.",
    approach: "Pulse 360 started by solving the core campaign digitisation requirement and gradually expanded the solution into an integrated martech ecosystem. The platform enabled better planning, campaign execution, lead management, call centre coordination, real-time reporting, and automated lead qualification.",
    outcome: "The engagement transformed from a single-point campaign technology solution into an end-to-end pre-sales transformation. The brand gained better governance, improved execution visibility, stronger lead management, and a scalable foundation for full-funnel digital marketing.",
    insights: [
      "Offline campaign execution required stronger digitisation and central visibility.",
      "Campaign performance tracking needed to move from manual updates to structured reporting.",
      "Lead capture, lead qualification, and call centre follow-up needed to work as one connected flow.",
      "Hyperlocal campaigns became important for targeted lead generation.",
      "A single campaign tool evolved into a broader martech ecosystem."
    ],
    actions: [
      "Developed a platform to digitise offline campaign execution.",
      "Built an offline campaign management system for structured activity tracking.",
      "Enabled a unified planning tool for campaign governance.",
      "Created a custom call centre application for lead handling and follow-up.",
      "Set up real-time reporting visibility through a war room dashboard.",
      "Integrated automated lead qualification.",
      "Expanded the engagement to include full-funnel digital marketing and hyperlocal campaign management."
    ]
  },
  {
    kicker: "Case Study 02",
    title: "Expanding from Operational Efficiency to Customer-Centric Innovation",
    client: "Leading Indian Commercial Vehicle Manufacturer",
    summary: "The engagement started with an internal-facing service module application to streamline operations and improve efficiency across teams. Over time, it evolved into strategic consulting for the brand's future customer-facing technology ecosystem and go-to-market roadmap.",
    stats: [
      ["4 personas", "role-based workflows"],
      ["Service", "module application"],
      ["Telematics", "and vehicle data roadmap"],
      ["Loyalty", "and rewards planning"],
      ["Hyperlocal", "service and sales strategy"],
      ["Strategic", "technical consulting"]
    ],
    challenge: "The initial challenge was operational and internal-facing. Multiple internal teams needed a structured service module application that could simplify workflows, improve process visibility, and support role-specific actions across service, workshop, security, and technical functions.",
    approach: "Pulse 360 developed a comprehensive service module application tailored for key internal personas. As the engagement matured, the role expanded beyond development into strategic consulting for future customer-facing platforms, customer engagement journeys, telematics integration, loyalty programs, and hyperlocal campaign strategy.",
    outcome: "The engagement evolved from an internal operational efficiency solution into a customer-centric innovation roadmap. Pulse 360 became a strategic partner supporting technology architecture and go-to-market planning for service, sales, customer engagement, and future digital transformation.",
    insights: [
      "The initial brief focused on improving internal operational efficiency.",
      "Internal teams required role-based workflows within one structured application.",
      "Service, workshop, security, and technical functions needed better process visibility.",
      "The future roadmap required integration between vehicle data, customer data, engagement features, and loyalty programs.",
      "Hyperlocal campaigns emerged as a key growth lever for both service and sales."
    ],
    actions: [
      "Developed a comprehensive service module application for internal teams.",
      "Built workflows for security advisor, service advisor, workshop manager, and technical advisor personas.",
      "Supported strategic consulting for the customer-facing application roadmap.",
      "Advised on integration across telematics, vehicle data, customer engagement, loyalty, and rewards.",
      "Participated in hyperlocal campaign planning to support service and sales growth.",
      "Expanded the engagement toward a broader pre-sales and customer engagement transformation."
    ]
  }
];

function useRevealObserver(dependency) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [dependency]);
}

function useHashRoute() {
  const getRoute = () => {
    const hash = window.location.hash.replace(/^#\/?/, "");
    return hash.split("?")[0] || "home";
  };
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const nav = (
    <>
      <a href="#/" onClick={() => setIsOpen(false)}>Home</a>
      <a href="#why" onClick={() => setIsOpen(false)}>Why Pulse 360</a>
      <a href="#suite" onClick={() => setIsOpen(false)}>Pulse 360 Suite</a>
      <a href="#/case-studies" onClick={() => setIsOpen(false)}>Case Studies</a>
      <a className="nav-cta" href="#enquire" onClick={() => setIsOpen(false)}>Enquire Now</a>
    </>
  );

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`} data-header>
      <a className="brand" href="#/" aria-label="Pulse 360 home">
        <img className="brand-logo" src={asset("product-pulse-360.png")} alt="Pulse 360 logo" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">{nav}</nav>
      <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-nav" onClick={() => setIsOpen((value) => !value)}>
        <span></span><span></span><span></span>
      </button>
      <nav className={`mobile-nav ${isOpen ? "is-open" : ""}`} id="mobile-nav" aria-label="Mobile navigation">{nav}</nav>
    </header>
  );
}

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((index) => (index + 1) % words.length);
      setFlipping(false);
      requestAnimationFrame(() => setFlipping(true));
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero section-shell">
      <div className="hero-copy reveal">
        <div className="badge-row"><span>Enterprise-Ready</span><span>Real-time Attribution</span></div>
        <p className="eyebrow">Marketing Intelligence Suite</p>
        <h1>
          <span className="headline-line">Marketing intelligence</span>
          <span className="headline-line">built for <span className="accent-line"><span className={`kinetic-word ${flipping ? "is-flipping" : ""}`}>{words[wordIndex]}</span></span></span>
        </h1>
        <p className="hero-lede">Pulse 360 connects market intelligence, brand governance, media planning, audience engagement, and live measurement into one operating system.</p>
        <p className="supporting-line">Built for brand, media, and marketing teams that need speed, control, visibility, and measurable growth.</p>
        <div className="hero-actions"><a className="button primary" href="#enquire">Enquire Now</a><a className="button secondary" href="#suite">Explore Suite</a></div>
      </div>
      <div className="hero-stage reveal delay-1" aria-label="Pulse 360 dashboard preview">
        <div className="orbital-ring ring-one"></div><div className="orbital-ring ring-two"></div>
        <div className="dashboard-card main-dashboard">
          <div className="dashboard-top"><span>Live Growth Loop</span><strong>+24.8%</strong></div>
          <div className="signal-map">
            {["Scout", "Plan", "Engage", "Shift"].map((node, index) => (
              <FragmentWithLine key={node} showLine={index < 3}><span className={`node ${index === 0 ? "active" : ""}`}>{node}</span></FragmentWithLine>
            ))}
          </div>
          <div className="chart-grid">
            {[72, 48, 88, 58, 96, 64].map((height, index) => <div key={index} className={`bar ${[2, 4].includes(index) ? "hot" : ""}`} style={{ "--h": `${height}%` }}></div>)}
          </div>
        </div>
        <div className="float-card float-one"><span>Brand compliance</span><strong>100%</strong></div>
        <div className="float-card float-two"><span>Planning cycle</span><strong>2x faster</strong></div>
      </div>
    </section>
  );
}

function FragmentWithLine({ children, showLine }) {
  return <>{children}{showLine && <span className="line"></span>}</>;
}

function BrandSection() {
  const logos = [
    [asset("eicher-motors-trimmed.png"), "Eicher logo"],
    [asset("maruti-suzuki-trimmed.png"), "Maruti Suzuki logo"],
    [asset("ashok-leyland.png"), "Ashok Leyland logo"],
    [asset("lpu-trimmed.png"), "LPU logo"],
    [asset("muthoot-finance-trimmed.png"), "Muthoot Finance logo"],
    [asset("radico-khaitan-trimmed.png"), "Radico Khaitan logo"],
    [asset("tvs-motor.png"), "TVS logo"]
  ];
  return (
    <section className="brand-section" aria-label="Trusted brand ecosystem">
      <div className="brand-section-inner"><div className="brand-heading"><p className="eyebrow">Trusted Brand Ecosystem</p><h2>Built for teams behind high-growth brands.</h2></div></div>
      <div className="logo-marquee" aria-label="Brand logos">
        <div className="ticker-track">
          {[...logos, ...logos].map(([src, alt], index) => <span className="logo-card" key={`${alt}-${index}`}><img src={src} alt={alt} /></span>)}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const audiences = [
    ["Brand Leaders", "Get a live view of brand health, marketing efficiency, and campaign impact."],
    ["Marketing Heads", "Align strategy, agencies, planning, execution, and measurement."],
    ["Media Teams", "Build structured plans, compare scenarios, and track delivery."],
    ["Performance Teams", "Use live optimisation signals across campaigns and audiences."],
    ["Consumer Insight Teams", "Measure recall, exposure, response, and campaign learning."],
    ["Agencies & Partners", "Collaborate through briefs, faster approvals, and shared accountability."]
  ];
  return (
    <section className="section-shell audience" id="teams">
      <div className="section-intro reveal"><h2>Built for teams shaping brand growth.</h2></div>
      <div className="audience-grid">
        {audiences.map(([title, copy], index) => <article className="audience-card reveal" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  );
}

function Lifecycle() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <section className="section-shell lifecycle" id="how">
      <div className="section-intro narrow reveal"><p className="eyebrow">How It Works</p><h2>From signal to strategy to measurable impact.</h2><p>Pulse 360 connects every stage of the marketing lifecycle so teams can act from the same intelligence and learn from every campaign.</p></div>
      <div className="lifecycle-board reveal">
        <div className="steps" role="list" aria-label="The 6-step marketing lifecycle">
          {steps.map((item, index) => <button className={`step ${active === index ? "is-active" : ""}`} type="button" key={item.title} onClick={() => setActive(index)}><span>{item.number}</span>{item.title}</button>)}
        </div>
        <div className="step-detail">
          <div className="step-copy-block"><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></div>
          <div className={`pillar-visual ${step.visual}`} aria-hidden="true">
            <div className="visual-orbit"><i></i><i></i><i></i></div>
            <div className="visual-screen"><b></b><b></b><b></b></div>
            {step.chips.map((chip) => <div className="visual-chip" key={chip}>{chip}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="why section-shell" id="why">
      <div className="why-copy reveal"><p className="eyebrow">Why Pulse 360</p><h2>Marketing has more tools than ever. What it needs is one connected system.</h2><p>Most marketing teams operate across disconnected planning sheets, agency workflows, campaign tools, reporting dashboards, and research systems. Pulse 360 connects the decisions, actions, guardrails, and learning loops that shape marketing performance.</p></div>
      <div className="problem-stack reveal delay-1">
        {[
          ["Fragmented workflows", "Planning, execution, and measurement happen across too many disconnected tools."],
          ["Delayed learning", "Insights often arrive after campaigns are over instead of guiding action mid-flight."],
          ["Inconsistent execution", "Brand rules, messaging, and compliance can get lost across teams and channels."]
        ].map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  );
}

function Suite() {
  const [active, setActive] = useState(0);
  const product = products[active];
  return (
    <section className="suite section-shell" id="suite">
      <div className="section-intro reveal"><p className="eyebrow">The Pulse 360 Suite</p><h2>Five connected products. One intelligence loop.</h2><p>Each product solves a specific marketing challenge. Together, they create a system where market signals inform planning, brand rules guide execution, engagement captures response, and measurement improves the next decision.</p></div>
      <div className="product-tabs reveal">
        <div className="product-list" role="tablist" aria-label="Pulse 360 products">
          {products.map((item, index) => <button className={`product-tab ${active === index ? "is-active" : ""}`} type="button" role="tab" aria-selected={active === index} key={item.title} onClick={() => setActive(index)}>{item.logo ? <img src={item.logo} alt={`${item.short} logo`} /> : <span>{item.short}</span>}</button>)}
        </div>
        <article className="product-panel">
          <div className="product-content">
            <h3>{product.title}</h3>
            <p>{product.copy}</p>
            <ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <div className="tag-row">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            {product.short === "Pulse Scout" ? (
              <a className="product-cta" href="#enquire">Explore Now</a>
            ) : (
              <span className="product-cta is-disabled" aria-disabled="true">Coming Soon</span>
            )}
          </div>
          <ProductDashboard dashboard={product.dashboard} />
        </article>
      </div>
    </section>
  );
}

function ProductDashboard({ dashboard }) {
  return (
    <div className={`suite-dashboard dashboard-${dashboard.type}`} aria-label="Product dashboard preview">
      <div className="suite-dash-top"><span>{dashboard.title}</span><b>Live</b></div>
      <div className="suite-dash-hero"><strong>{dashboard.metric}</strong><span>{dashboard.label}</span></div>
      <div className="suite-dash-visual">
        <div className="suite-dash-chart">{dashboard.bars.map((bar, index) => <span className="suite-dash-bar" style={{ "--bar": `${bar}%` }} data-index={index + 1} key={index}></span>)}</div>
        <div className="suite-dash-ring"><i></i><i></i><i></i></div>
      </div>
      <div className="suite-dash-cards">{dashboard.cards.map((card) => <span key={card}>{card}</span>)}</div>
    </div>
  );
}

function Impact() {
  const metrics = [
    ["15-25%", "Potential reduction in wasted media spend", "Through better allocation, targeting, and optimisation loops."],
    ["40-60%", "Faster planning cycles", "By replacing spreadsheet-led planning with structured workflows."],
    ["30-50%", "Faster campaign launches", "Through centralised approvals and execution readiness."],
    ["20-30%", "Better targeting accuracy", "Using competitor signals, audience intelligence, and segmentation logic."],
    ["10-20%", "Improvement in brand recall", "Through consistent messaging, measurement, and learning."],
    ["2x", "Faster decision-making", "With one view of planning, performance, and market movement."]
  ];
  return (
    <section className="impact section-shell" id="impact">
      <div className="section-intro reveal"><p className="eyebrow">Business Impact</p><h2>Designed to improve the economics of marketing.</h2><p>Pulse 360 helps brands reduce wasted effort, accelerate planning, improve targeting, strengthen consistency, and make faster decisions with connected intelligence.</p></div>
      <div className="metric-grid">{metrics.map(([value, label, copy]) => <article className="metric-card reveal" key={label}><strong>{value}</strong><span>{label}</span><p>{copy}</p></article>)}</div>
    </section>
  );
}

function Stories({ onOpenCase }) {
  const cards = [
    ["Full-Funnel Martech Transformation", "From offline campaign digitisation to planning, lead management, call centre enablement, and real-time reporting."],
    ["Customer-Centric Innovation Roadmap", "From internal service workflows to customer-facing technology strategy, telematics, loyalty, and hyperlocal campaigns."]
  ];
  return (
    <section className="stories section-shell" id="stories">
      <div className="section-intro reveal"><p className="eyebrow">Success Stories</p><h2>Real impact. Measurable growth.</h2><p>See how leading marketing teams connect their planning, execution, and analytics with Pulse 360.</p></div>
      <div className="story-grid">{cards.map(([title, copy], index) => <button className="story-card reveal" type="button" key={title} onClick={() => onOpenCase(index)}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p><strong>View study -&gt;</strong></button>)}</div>
    </section>
  );
}

function CaseStudiesPage({ onOpenCase }) {
  return (
    <main id="top" className="page-main">
      <section className="page-hero section-shell">
        <p className="eyebrow">Case Studies</p>
        <h1>Proof in practice.</h1>
        <p>Two real transformation stories showing how Pulse 360 supports connected planning, execution, engagement, and measurable growth.</p>
      </section>
      <Stories onOpenCase={onOpenCase} />
    </main>
  );
}

function PolicyPage({ type }) {
  const isRefund = type === "refund";
  const title = isRefund ? "Refund Policy" : "Privacy Policy";
  const intro = isRefund
    ? "This Refund Policy outlines the terms under which refunds are processed for payments made through the Pulse 360 Tool, owned and operated by Adglobal360. By making a payment for any Pulse 360 campaign or subscription, you agree to the terms described below."
    : "This Privacy Policy explains how Adglobal360 India Pvt. Ltd. collects, processes, and protects your personal information when you access or use the Pulse 360 Tool, our website, or related services. By using Pulse 360, you agree to the terms of this Privacy Policy.";
  const sections = isRefund ? [
    {
      heading: "1. General Policy",
      bullets: [
        "All payments made on the Pulse 360 platform are processed via our authorized payment gateway, PayU.",
        "Adglobal360 does not receive payments directly and therefore does not issue manual refunds.",
        "Refunds, where applicable, are processed exclusively by PayU back to the original payment source, such as bank account, credit card, or UPI."
      ]
    },
    {
      heading: "2. Campaign Payment Scenarios",
      copy: "Refunds and payment handling will depend on the campaign payment outcome.",
      bullets: [
        "Successful Payment: once payment is confirmed as successful, the campaign will be activated and scheduled. No refund will be issued unless the campaign cannot be executed due to a verified technical error on the Pulse 360 platform.",
        "Failed or Cancelled Payment: if a payment attempt fails or is cancelled, no deduction will occur from the user's account. If an amount is deducted but marked as Failed or Cancelled, PayU will automatically refund the full amount to the user's original payment method within 5-7 business days, subject to bank timelines.",
        "Pending Payment: in rare cases, a transaction may show as pending. If the status updates to Success within a few minutes, the campaign will proceed. If the status does not update and remains unresolved, the amount will be refunded by PayU and users must re-initiate the campaign after a refund."
      ]
    },
    {
      heading: "3. Refund Timeline",
      bullets: [
        "Refunds are processed by PayU directly and typically credited within 5-7 business days.",
        "Adglobal360 does not control bank timelines, and delays from banks or payment providers are outside our responsibility."
      ]
    },
    {
      heading: "4. Non-Refundable Cases",
      copy: "Refunds will not be applicable in the following cases:",
      bullets: [
        "The campaign has already started running after a successful payment.",
        "Incorrect campaign configuration by the user, such as wrong keywords, locations, or dates."
      ]
    },
    {
      heading: "5. Technical Errors",
      bullets: [
        "If a campaign cannot be executed due to a verified technical issue on the Pulse 360 platform, confirmed by Adglobal360 Support, users may be eligible for a refund.",
        "Such refunds, if approved, will still be processed via PayU back to the original payment source."
      ]
    },
    {
      heading: "6. Disclaimer",
      bullets: [
        "Adglobal360 is not responsible for delays, failures, or reversals caused by banks, card issuers, UPI providers, or PayU.",
        "Users are required to check their campaign status on the Pulse 360 dashboard after making a payment.",
        "All refund-related queries must be directed to PayU with the transaction ID. Our support team may assist but cannot override PayU's process."
      ]
    }
  ] : [
    {
      heading: "1. Who We Are",
      copy: "Pulse 360 is a SaaS-based marketing intelligence platform developed and owned by Adglobal360 India Pvt. Ltd., a digital marketing and technology company.",
      bullets: [
        "Company Name: Adglobal360 India Pvt. Ltd.",
        "Registered Office: Plot No 686, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122016",
        "Contact Email: info@adglobal360.com",
        "Our Data Protection Team can be reached at the above email for any privacy-related concerns."
      ]
    },
    {
      heading: "2. Applicability of This Policy",
      copy: "This policy applies to:",
      bullets: [
        "Users who register for or use Pulse 360's services.",
        "Visitors to Pulse 360's website and dashboard.",
        "Customers who make payments for campaigns or subscriptions.",
        "Third-party partners providing services to Pulse 360."
      ]
    },
    {
      heading: "3. Data We Collect",
      copy: "We may collect the following information when you use Pulse 360:",
      bullets: [
        "Personal Information: name, email, phone number, company name, login credentials, billing and payment details.",
        "Campaign Information: keywords, competitor URLs, ad creatives, campaign parameters, frequency, duration, and location data selected by the user.",
        "Transactional Information: payment status, transaction IDs, invoices, and refunds through PayU or other gateways.",
        "Technical and Usage Data: IP address, browser type, operating system, device details, user activity logs, campaign reports, errors, and crashes.",
        "Cookies and Tracking: session cookies for login, analytics cookies for performance tracking, and marketing cookies used only with consent.",
        "We do not knowingly collect data from children under 18."
      ]
    },
    {
      heading: "4. How We Use Your Information",
      copy: "We use collected information to:",
      bullets: [
        "Deliver campaign tracking, ad monitoring, and reporting.",
        "Verify legitimate platform usage.",
        "Process payments and generate invoices.",
        "Send campaign notifications and system updates.",
        "Provide customer support.",
        "Improve platform performance and user experience.",
        "Send marketing communication with consent."
      ]
    },
    {
      heading: "5. Legal Basis for Processing",
      bullets: [
        "Contractual Necessity: to provide Pulse 360 services you subscribe to.",
        "Legal Obligation: to maintain compliance and financial records.",
        "Legitimate Interest: to improve services and ensure platform security.",
        "Consent: for optional marketing or cookies."
      ]
    },
    {
      heading: "6. Data Storage and Security",
      bullets: [
        "Data is securely stored in servers located in India, the EU, or the US, as applicable.",
        "Access is strictly restricted to authorized Adglobal360 personnel.",
        "Encryption, secure protocols such as SSL/HTTPS, and monitoring are used."
      ]
    },
    {
      heading: "7. Data Sharing",
      copy: "We do not sell your data. Limited sharing occurs with:",
      bullets: [
        "Payment gateways such as PayU for transactions.",
        "Cloud hosting providers for infrastructure.",
        "Analytics providers for performance tracking.",
        "Regulatory authorities if legally required."
      ]
    },
    {
      heading: "8. International Data Transfers",
      copy: "Where data is transferred outside India, we ensure compliance with global standards, including GDPR SCCs where applicable."
    },
    {
      heading: "9. Marketing Communication",
      copy: "We may send product updates and promotional content only if you opt in. You may unsubscribe anytime through email preferences or by writing to info@adglobal360.com."
    },
    {
      heading: "10. Data Retention",
      bullets: [
        "Account data is retained as long as your subscription is active.",
        "Payment and compliance data may be retained longer to meet legal or tax obligations.",
        "Once your subscription expires or is terminated, all campaign-related data, reports, keywords, and analytics collected during the subscription period will be permanently deleted from our servers within 30 days, unless retention is required by law.",
        "Users may request early deletion of data at any time by emailing info@adglobal360.com."
      ]
    },
    {
      heading: "11. Your Rights",
      bullets: [
        "Right to access your data.",
        "Right to correct inaccuracies.",
        "Right to request deletion, subject to legal limits.",
        "Right to opt out of marketing.",
        "Right to data portability.",
        "Requests can be sent to info@adglobal360.com."
      ]
    },
    {
      heading: "12. Cookies and Similar Technologies",
      copy: "Pulse 360 uses cookies and similar technologies to operate and improve the platform.",
      bullets: [
        "Session Cookies: login sessions.",
        "Persistent Cookies: preferences.",
        "Analytics Cookies: usage tracking.",
        "Marketing Cookies: used with consent.",
        "You may disable cookies in your browser, but some features may not work."
      ]
    },
    {
      heading: "13. Payments and Refunds",
      bullets: [
        "Payments are securely processed through PayU.",
        "We do not store full card or payment details.",
        "Refunds follow Pulse 360's No Refund Policy.",
        "Payment outcomes include Success, Failure, or Canceled. No pending state is stored."
      ]
    },
    {
      heading: "14. Disclaimers",
      bullets: [
        "Pulse 360 reports rely on crawled data; the accuracy of external sites cannot be guaranteed.",
        "Adglobal360 is not responsible for third-party site changes, downtime, or API failures.",
        "External websites linked from Pulse 360 reports are outside our control."
      ]
    },
    {
      heading: "15. Policy Updates",
      copy: "We may update this Privacy Policy from time to time. The latest version will always be available on our website."
    },
    {
      heading: "16. Contact Us",
      bullets: [
        "Adglobal360 India Pvt. Ltd.",
        "Plot No. 686, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122016",
        "Email: info@adglobal360.com",
        "Phone: +91 9289224104"
      ]
    }
  ];

  return (
    <main id="top" className="page-main">
      <section className="page-hero section-shell">
        <p className="eyebrow">Pulse 360</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <section className="policy-section section-shell">
        {sections.map((section) => (
          <article className="policy-card reveal" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.copy && <p>{section.copy}</p>}
            {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
          </article>
        ))}
      </section>
    </main>
  );
}

function HomePage({ onOpenCase }) {
  return (
    <main id="top">
      <Hero />
      <BrandSection />
      <Audience />
      <Lifecycle />
      <Why />
      <Suite />
      <Impact />
      <Stories onOpenCase={onOpenCase} />
      <CTA />
    </main>
  );
}

function CTA() {
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Enquiry received. Our team will get back to you shortly.");
    event.currentTarget.reset();
  };
  return (
    <section className="cta section-shell" id="enquire">
      <div className="cta-copy reveal"><p className="eyebrow">Enquire Now</p><h2>Ready to make every campaign smarter?</h2><p>Tell us where you want to start and our team will help you map the right Pulse 360 product for your marketing workflow.</p></div>
      <div className="form-wrap reveal delay-1">
        <div className="form-header"><span>Pulse 360 Enquiry</span><strong>Response within 1 business day</strong></div>
        <form className="contact-form is-active" onSubmit={handleSubmit}>
          <p>Share your details and campaign goals. We will help you identify the right product, workflow, and next step.</p>
          <div className="form-grid">
            <label>Name <input required type="text" name="name" placeholder="First & Last Name" /></label>
            <label>Work Email <input required type="email" name="email" placeholder="name@company.com" /></label>
            <label>Company Name <input required type="text" name="company" placeholder="Company" /></label>
            <label>Phone Number <input required type="tel" name="phone" placeholder="+91 00000 00000" /></label>
            <label className="full-field">Product Interest <select required name="interest"><option value="">Select a product</option><option>Full Pulse 360 Suite</option><option>Brand Book</option><option>Pulse Scout</option><option>Pulse Plan</option><option>Pulse Engage</option><option>Pulse Shift</option></select></label>
            <label className="full-field">Message <textarea required name="message" placeholder="Tell us about your marketing challenge, campaign goal, or product interest."></textarea></label>
          </div>
          <button className="button primary full" type="submit">Enquire Now</button><span className="form-message" role="status">{message}</span>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div><a className="brand" href="#/" aria-label="Pulse 360 home"><img className="brand-logo" src={asset("product-pulse-360.png")} alt="Pulse 360 logo" /></a><p>The next-fit marketing operating system built for precision and growth.</p></div>
      <div><h3>Product</h3>{["Brand Book", "Pulse Scout", "Pulse Plan", "Pulse Engage", "Pulse Shift"].map((item) => <a href="#suite" key={item}>{item}</a>)}</div>
      <div><h3>Contact</h3><a href="#enquire">Enquire Now</a></div>
      <div><h3>Social Media</h3><a href="#">LinkedIn</a><a href="#">X</a><a href="#">YouTube</a></div>
      <div><h3>Legal</h3><a href="#/case-studies">Case Studies</a><a href="#/privacy-policy">Privacy Policy</a><a href="#/refund-policy">Refund Policy</a></div>
      <p className="copyright">&copy; 2026 Pulse 360 by Adglobal360 India Pvt. Ltd.</p>
    </footer>
  );
}

function CaseModal({ caseStudy, onClose }) {
  useEffect(() => {
    if (!caseStudy) return undefined;
    document.body.classList.add("menu-open");
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="case-modal is-open" aria-hidden="false">
      <div className="case-modal-backdrop" onClick={onClose}></div>
      <article className="case-modal-panel" role="dialog" aria-modal="true" aria-labelledby="case-title">
        <button className="case-close" type="button" aria-label="Close case study" onClick={onClose}>Close</button>
        <span className="case-kicker">{caseStudy.kicker}</span><h2 id="case-title">{caseStudy.title}</h2><p className="case-client">{caseStudy.client}</p><p>{caseStudy.summary}</p>
        <div className="case-stats">{caseStudy.stats.map(([value, label]) => <div className="case-stat" key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></div>)}</div>
        <div className="case-detail-grid"><div><h3>Challenge</h3><p>{caseStudy.challenge}</p></div><div><h3>Pulse 360 Approach</h3><p>{caseStudy.approach}</p></div><div><h3>Outcome</h3><p>{caseStudy.outcome}</p></div></div>
        <div className="case-list-grid"><div><h3>Key Insights</h3><ul>{caseStudy.insights.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Actions Taken</h3><ul>{caseStudy.actions.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
      </article>
    </div>
  );
}

export default function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [activeCase, setActiveCase] = useState(null);
  const route = useHashRoute();
  const currentCase = useMemo(() => activeCase === null ? null : caseStudies[activeCase], [activeCase]);

  useRevealObserver(route);

  useEffect(() => {
    const onPointerMove = (event) => setCursor({ x: event.clientX, y: event.clientY });
    document.addEventListener("pointermove", onPointerMove);
    return () => document.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" style={{ left: cursor.x, top: cursor.y }}></div>
      <div className="noise" aria-hidden="true"></div>
      <Header />
      {route === "case-studies" ? <CaseStudiesPage onOpenCase={setActiveCase} /> : route === "privacy-policy" ? <PolicyPage type="privacy" /> : route === "refund-policy" ? <PolicyPage type="refund" /> : <HomePage onOpenCase={setActiveCase} />}
      <Footer />
      <CaseModal caseStudy={currentCase} onClose={() => setActiveCase(null)} />
    </>
  );
}
