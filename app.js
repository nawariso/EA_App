const views = {
  business: {
    title: "Business Architecture",
    description: "เชื่อม Business Capability กับ Strategy และ Owner",
    focus: [
      "Customer Experience & Channel Strategy",
      "Product Lifecycle Management",
      "Claims Excellence & Fraud Control",
      "Regulatory & Risk Management",
      "Partnership Ecosystem",
    ],
    cards: [
      {
        title: "Customer Acquisition",
        owner: "Chief Marketing",
        maturity: "Evolving",
        type: "diff",
        summary: "กำหนดกลยุทธ์ช่องทางดิจิทัล + Agent เพื่อเพิ่มยอดขาย",
      },
      {
        title: "Policy Administration",
        owner: "COO",
        maturity: "Core",
        type: "core",
        summary: "ควบคุมวงจรกรมธรรม์ทุกประเภทให้เป็นมาตรฐานเดียว",
      },
      {
        title: "Claims Management",
        owner: "Chief Claims",
        maturity: "Core",
        type: "core",
        summary: "เพิ่มอัตรา Straight-through Processing และลด Fraud",
      },
      {
        title: "Partner Management",
        owner: "Head of Alliance",
        maturity: "Evolving",
        type: "diff",
        summary: "บริหารพันธมิตร Bancassurance และ Insurtech",
      },
      {
        title: "Regulatory Compliance",
        owner: "Risk Office",
        maturity: "Stable",
        type: "support",
        summary: "รองรับ OIC reporting และกฎหมายใหม่แบบ near-real-time",
      },
    ],
  },
  application: {
    title: "Application Architecture",
    description: "มองภาพรวมระบบที่กระจัดกระจายและทำให้เชื่อมโยงกัน",
    focus: [
      "Core Insurance Platform",
      "CRM & Agent Portal",
      "Claims Automation",
      "Partner APIs",
      "Enterprise Integration Hub",
      "Application Portfolio & Lifecycle",
    ],
    cards: [
      {
        title: "Unified Policy Platform",
        owner: "Enterprise IT",
        maturity: "Target",
        type: "core",
        summary: "รวมระบบ Legacy เป็นแพลตฟอร์มเดียว ลดการซ้ำซ้อน",
      },
      {
        title: "Digital Front Office",
        owner: "Digital Channel",
        maturity: "In-flight",
        type: "diff",
        summary: "Web/Mobile Portal สำหรับลูกค้า ตัวแทน และ Bancassurance",
      },
      {
        title: "Claims Workflow Engine",
        owner: "Claims IT",
        maturity: "In-flight",
        type: "core",
        summary: "Automate approval + OCR document intake",
      },
      {
        title: "Integration & API Gateway",
        owner: "Platform Team",
        maturity: "Core",
        type: "support",
        summary: "ลดการเชื่อมต่อแบบ point-to-point",
      },
      {
        title: "Application Portfolio Management",
        owner: "EA Office",
        maturity: "Target",
        type: "support",
        summary: "จัดลำดับความสำคัญของระบบด้วย heatmap และ lifecycle",
      },
      {
        title: "Data & Analytics Hub",
        owner: "Data Office",
        maturity: "Target",
        type: "diff",
        summary: "ขับเคลื่อน decisioning และ personalization",
      },
    ],
  },
  data: {
    title: "Data Architecture",
    description: "ออกแบบ Data Domains และ Data Governance ให้ตรงกัน",
    focus: [
      "Customer 360",
      "Policy & Coverage",
      "Claims & Loss",
      "Risk & Underwriting",
      "Regulatory Reporting",
      "Data Lineage & Governance",
    ],
    cards: [
      {
        title: "Master Data Management",
        owner: "Data Governance",
        maturity: "Target",
        type: "core",
        summary: "สร้าง single source of truth ให้ลูกค้าและกรมธรรม์",
      },
      {
        title: "Lakehouse Platform",
        owner: "Data Engineering",
        maturity: "In-flight",
        type: "diff",
        summary: "รองรับ streaming claims + partner data",
      },
      {
        title: "Data Quality Controls",
        owner: "Risk & Compliance",
        maturity: "Core",
        type: "support",
        summary: "ตรวจสอบข้อมูลสำคัญก่อนส่งรายงาน OIC",
      },
      {
        title: "Metadata Catalog",
        owner: "Data Office",
        maturity: "Evolving",
        type: "support",
        summary: "ทำให้ทุกทีมค้นหาและเข้าใจข้อมูลได้ง่ายขึ้น",
      },
      {
        title: "Data Lineage Tracking",
        owner: "Data Governance",
        maturity: "In-flight",
        type: "diff",
        summary: "เห็นการไหลของข้อมูลเพื่อ audit และ impact analysis",
      },
    ],
  },
  infra: {
    title: "Infrastructure Architecture",
    description: "กำหนดมาตรฐาน Infra ให้รองรับการเติบโตและความปลอดภัย",
    focus: [
      "Hybrid Cloud Strategy",
      "Zero Trust Security",
      "Resilient DR",
      "Observability & Monitoring",
      "Automation & DevSecOps",
      "Technology Standards",
    ],
    cards: [
      {
        title: "Hybrid Cloud Foundation",
        owner: "Infra Platform",
        maturity: "Target",
        type: "core",
        summary: "แบ่ง workload ตาม regulatory และ performance",
      },
      {
        title: "Security Operations Center",
        owner: "CISO Office",
        maturity: "In-flight",
        type: "core",
        summary: "ตรวจจับภัยคุกคามแบบ 24/7 และ response automation",
      },
      {
        title: "Automation Toolkit",
        owner: "DevSecOps",
        maturity: "Evolving",
        type: "diff",
        summary: "Infrastructure as Code + policy guardrails",
      },
      {
        title: "Business Continuity",
        owner: "Risk Office",
        maturity: "Core",
        type: "support",
        summary: "DR site พร้อม RPO/RTO ตาม SLA",
      },
      {
        title: "Technology Standards Library",
        owner: "EA Office",
        maturity: "Evolving",
        type: "support",
        summary: "มาตรฐาน tech stack เพื่อควบคุม risk และ cost",
      },
    ],
  },
};

const platformCapabilities = [
  "Capability map + heatmap",
  "Application portfolio & lifecycle",
  "Business process catalog",
  "Data lineage & domains",
  "Integration/API inventory",
  "Technology standards & roadmaps",
  "Risk, compliance & controls",
  "Scenario planning & what-if",
];

const journeyData = [
  {
    title: "Acquire & Onboard",
    items: ["Digital Lead Capture", "e-KYC", "Quote to Issue", "Agent Enablement"],
  },
  {
    title: "Serve & Retain",
    items: ["Policy Servicing", "Customer 360", "Omni-channel Care", "Renewal Analytics"],
  },
  {
    title: "Claims & Risk",
    items: ["Claims Intake", "Fraud Scoring", "Partner Workshops", "Regulatory Reporting"],
  },
  {
    title: "Operate",
    items: ["Finance & Ledger", "Enterprise Integration", "Security Monitoring", "Talent Upskill"],
  },
];

const viewTitle = document.getElementById("viewTitle");
const viewDescription = document.getElementById("viewDescription");
const cards = document.getElementById("cards");
const focusList = document.getElementById("focusList");
const viewTabs = document.getElementById("viewTabs");
const capabilityList = document.getElementById("capabilityList");
const journey = document.getElementById("journey");

function renderView(key) {
  const view = views[key];
  viewTitle.textContent = view.title;
  viewDescription.textContent = view.description;
  focusList.innerHTML = view.focus.map((item) => `<li>• ${item}</li>`).join("");
  cards.innerHTML = view.cards
    .map(
      (card) => `
      <article class="card">
        <span class="badge ${card.type}">${labelType(card.type)}</span>
        <h4>${card.title}</h4>
        <p>${card.summary}</p>
        <div class="meta">
          <span>${card.owner}</span>
          <span>${card.maturity}</span>
        </div>
      </article>
    `
    )
    .join("");
}

function labelType(type) {
  switch (type) {
    case "core":
      return "Core";
    case "diff":
      return "Differentiator";
    default:
      return "Supporting";
  }
}

function renderJourney() {
  journey.innerHTML = journeyData
    .map(
      (block) => `
      <div class="journey-card">
        <h4>${block.title}</h4>
        <ul>
          ${block.items.map((item) => `<li>• ${item}</li>`).join("")}
        </ul>
      </div>
    `
    )
    .join("");
}

function renderCapabilities() {
  capabilityList.innerHTML = platformCapabilities
    .map((item) => `<li>• ${item}</li>`)
    .join("");
}

viewTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
  button.classList.add("active");
  renderView(button.dataset.view);
});

renderCapabilities();
renderJourney();
renderView("business");
