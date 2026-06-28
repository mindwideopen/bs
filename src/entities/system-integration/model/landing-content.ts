export const brand = {
  name: "Axis Integrator",
  initials: "AI",
  navItems: [
    { href: "#services", label: "Services" },
    { href: "#cases", label: "Cases" },
    { href: "#contact", label: "Contact" },
  ],
};

export const hero = {
  kicker: "01 / Quiet systems integration",
  title: "We assemble IT environments built for business growth",
  description:
    "We design, deploy, and operate infrastructure, cloud, security, and enterprise services as one coherent architecture.",
  image: {
    src: "/hero-integration.png",
    alt: "Enterprise systems integration infrastructure",
  },
  actions: [
    { href: "#contact", label: "Discuss a project", variant: "primary" },
    { href: "#approach", label: "How we work", variant: "secondary" },
  ],
};

export const trustSignals = [
  "SLA-backed operations",
  "Vendor-certified engineers",
  "Security-first delivery",
];

export const metrics = [
  {
    value: "12+",
    label: "years of infrastructure delivery",
    detail: "from audit to managed operations",
  },
  {
    value: "99.9%",
    label: "target SLA for critical services",
    detail: "with incident ownership and reporting",
  },
  {
    value: "24/7",
    label: "monitoring, response, and support",
    detail: "for hybrid infrastructure and security events",
  },
];

export const services = [
  {
    title: "Infrastructure",
    summary: "Compute, storage, virtualization, backup, and resilient core services.",
  },
  {
    title: "Cloud migration",
    summary: "Landing zones, hybrid connectivity, workload migration, and cost control.",
  },
  {
    title: "Cybersecurity",
    summary: "Zero Trust, segmentation, endpoint controls, SIEM, and secure access.",
  },
  {
    title: "Networks",
    summary: "Campus, WAN, SD-WAN, wireless, observability, and traffic policy.",
  },
  {
    title: "Data and BI",
    summary: "Data platforms, reporting layers, integration pipelines, and governance.",
  },
  {
    title: "Managed support",
    summary: "SLA, monitoring, change management, documentation, and service desk.",
  },
];

export const architectureSteps = [
  "Assess the current environment and risks.",
  "Design the target architecture and budget.",
  "Deploy in stages without stopping the business.",
  "Hand over to support with clear SLA terms.",
];

export const stack = [
  "DC",
  "SD-WAN",
  "Zero Trust",
  "Kubernetes",
  "Backup",
  "SIEM",
  "VDI",
  "M365",
];

export const cases = [
  {
    title: "Finance",
    text: "A resilient payment services platform with an RTO target under 15 minutes.",
    result: "RTO < 15 min",
  },
  {
    title: "Retail",
    text: "One managed network for stores, warehouses, and contact center operations.",
    result: "120 sites unified",
  },
  {
    title: "Industry",
    text: "Segmented production network with secure remote contractor access.",
    result: "zero shared admin access",
  },
];

export const securityItems = [
  "threat model and segmentation",
  "backup and disaster recovery",
  "privilege control and audit",
];

export const timeline = [
  { term: "1 week", text: "express audit and solution hypothesis" },
  { term: "2-4 weeks", text: "design, pilot, and migration plan" },
  { term: "from 1 month", text: "deployment, training, and managed support" },
];

export const contact = {
  email: "hello@axis-integrator.example",
  phone: "+7 000 000-00-00",
  phoneHref: "tel:+70000000000",
};
