const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const cursorGlow = document.querySelector(".cursor-glow");
const kineticWord = document.querySelector(".kinetic-word");
const caseModal = document.querySelector("#case-modal");

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
    logo: "",
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
    logo: "assets/product-pulse-scout.png",
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
    logo: "assets/product-pulse-plan.png",
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
    logo: "assets/product-pulse-engage.png",
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
    logo: "assets/product-pulse-shift.png",
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

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function setStep(index) {
  const item = steps[index];
  const visual = document.querySelector("#pillar-visual");
  document.querySelector("#step-number").textContent = item.number;
  document.querySelector("#step-title").textContent = item.title;
  document.querySelector("#step-copy").textContent = item.copy;
  visual.className = `pillar-visual ${item.visual}`;
  visual.querySelectorAll(".visual-chip").forEach((chip, chipIndex) => {
    chip.textContent = item.chips[chipIndex];
  });
  document.querySelectorAll(".step").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
  });
}

function setProduct(index) {
  const item = products[index];
  const productLogo = document.querySelector("#product-logo");
  document.querySelector("#product-count").textContent = item.count;
  document.querySelector("#product-title").textContent = item.title;
  document.querySelector("#product-copy").textContent = item.copy;
  document.querySelector("#product-features").innerHTML = item.features.map((feature) => `<li>${feature}</li>`).join("");
  document.querySelector("#product-tags").innerHTML = item.tags.map((tag) => `<span>${tag}</span>`).join("");
  if (item.logo) {
    productLogo.src = item.logo;
    productLogo.alt = `${item.title.split(" - ")[0]} logo`;
  } else {
    productLogo.removeAttribute("src");
    productLogo.alt = "";
  }
  renderProductDashboard(item.dashboard);
  document.querySelectorAll(".product-tab").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
    button.setAttribute("aria-selected", String(buttonIndex === index));
  });
}

function renderProductDashboard(dashboard) {
  const dashboardNode = document.querySelector("#suite-dashboard");
  const barMarkup = dashboard.bars.map((bar, index) => (
    `<span class="suite-dash-bar" style="--bar:${bar}%" data-index="${index + 1}"></span>`
  )).join("");
  const cardMarkup = dashboard.cards.map((card) => `<span>${card}</span>`).join("");
  dashboardNode.className = `suite-dashboard dashboard-${dashboard.type}`;
  dashboardNode.innerHTML = `
    <div class="suite-dash-top">
      <span>${dashboard.title}</span>
      <b>Live</b>
    </div>
    <div class="suite-dash-hero">
      <strong>${dashboard.metric}</strong>
      <span>${dashboard.label}</span>
    </div>
    <div class="suite-dash-visual">
      <div class="suite-dash-chart">${barMarkup}</div>
      <div class="suite-dash-ring"><i></i><i></i><i></i></div>
    </div>
    <div class="suite-dash-cards">${cardMarkup}</div>
  `;
}

function showForm(name) {
  document.querySelectorAll(".form-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.form === name);
  });
  document.querySelectorAll(".contact-form").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.formPanel === name);
  });
}

function openCaseStudy(index) {
  const item = caseStudies[index];
  document.querySelector("#case-kicker").textContent = item.kicker;
  document.querySelector("#case-title").textContent = item.title;
  document.querySelector("#case-client").textContent = item.client;
  document.querySelector("#case-summary").textContent = item.summary;
  document.querySelector("#case-challenge").textContent = item.challenge;
  document.querySelector("#case-approach").textContent = item.approach;
  document.querySelector("#case-outcome").textContent = item.outcome;
  document.querySelector("#case-stats").innerHTML = item.stats.map(([value, label]) => (
    `<div class="case-stat"><strong>${value}</strong><span>${label}</span></div>`
  )).join("");
  document.querySelector("#case-insights").innerHTML = item.insights.map((insight) => `<li>${insight}</li>`).join("");
  document.querySelector("#case-actions").innerHTML = item.actions.map((action) => `<li>${action}</li>`).join("");
  caseModal.classList.add("is-open");
  caseModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
}

function closeCaseStudy() {
  caseModal.classList.remove("is-open");
  caseModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    mobileNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const words = kineticWord.dataset.words.split(",");
let wordIndex = 0;
setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  kineticWord.textContent = words[wordIndex];
  kineticWord.classList.remove("is-flipping");
  void kineticWord.offsetWidth;
  kineticWord.classList.add("is-flipping");
}, 2600);

document.querySelectorAll(".step").forEach((button) => {
  button.addEventListener("click", () => setStep(Number(button.dataset.step)));
});

document.querySelectorAll(".product-tab").forEach((button) => {
  button.addEventListener("click", () => setProduct(Number(button.dataset.product)));
});

document.querySelectorAll(".story-card").forEach((button) => {
  button.addEventListener("click", () => openCaseStudy(Number(button.dataset.case)));
});

document.querySelectorAll("[data-close-case]").forEach((button) => {
  button.addEventListener("click", closeCaseStudy);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && caseModal.classList.contains("is-open")) {
    closeCaseStudy();
  }
});

document.querySelectorAll(".form-tab").forEach((button) => {
  button.addEventListener("click", () => showForm(button.dataset.form));
});

document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    message.textContent = form.dataset.formPanel === "demo"
      ? "Demo request received. We will confirm your slot shortly."
      : "Enquiry received. Our team will get back to you shortly.";
    form.reset();
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

setProduct(0);
