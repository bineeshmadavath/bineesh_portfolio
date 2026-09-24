// Everything about the person. Swap for an API/CMS response later — same shape.
export const profile = {
  name: 'Bineesh Madavath',
  role: 'Product Design Lead',
  company: 'UST',
  location: 'India',
  timezone: 'IST (UTC+5:30)',
  email: 'bineesh.m@gmail.com',
  phone: '+91 94967 50372',
  phoneHref: 'tel:+919496750372',
  socials: [
    { label: 'LinkedIn', handle: '/in/bineeshmadavath', href: 'https://linkedin.com' },
    { label: 'GitHub', handle: '@bineeshmadavath', href: 'https://github.com/bineeshmadavath' },
    { label: 'X', handle: '@bineeshmadavath', href: 'https://x.com' },
  ],
  headline: { lead: 'The designer', mid: 'who also ships', em: 'the code.' },
  heroMeta: [
    { label: 'What I do', text: [
      "I'm a Strategic Product Design Lead with 15+ years of IT experience, including 8+ years specializing in UX/UI design for complex, enterprise-scale digital products and transformation initiatives.",
      'I bring a unique hybrid expertise across Product Design, UI Development, and Design Systems, enabling me to bridge the gap between user needs, creative vision, business goals, and engineering execution. My work focuses on human-centered design, accessibility (WCAG), and AI-augmented design workflows.',
      'I specialize in simplifying complex workflows and translating business challenges into intuitive, scalable, and technically sound digital products. My cross-domain experience spans Intelligent Document Processing (IDP), Healthcare, Enterprise Applications, Hospitality, Marketplace Platforms, and other digital transformation initiatives.',
    ] },
  ],
  stats: [
    { value: '15+', label: 'Years, design & front-end', tone: 'neutral' },
    { value: '−25%', label: 'Human-in-the-loop review time', tone: 'down' },
    { value: '−40%', label: 'Design-to-dev handoff time', tone: 'down' },
    { value: '+15%', label: 'Task completion, WCAG 2.1 AA', tone: 'up' },
  ],
  process: [
    { title: 'Discover', text: 'Stakeholder interviews, usability testing, workflow mapping' },
    { title: 'Define', text: 'Information architecture, personas, success metrics' },
    { title: 'Design', text: 'Wireframes to hi-fi in Figma, on a shared component library' },
    { title: 'Build', text: 'HTML/CSS, Angular and React with the engineering team' },
    { title: 'Validate', text: 'WCAG 2.1 AA audits, iterative testing, measured outcomes' },
  ],
  competencies: [
    { title: 'UX strategy', text: 'User research, information architecture, usability testing and rapid prototyping — mapped to measurable business outcomes.' },
    { title: 'Technical integration', text: 'Front-end delivery in HTML5, CSS3, React, Angular and Tailwind, with WCAG compliance built in rather than bolted on.' },
    { title: 'AI-assisted design', text: 'AI-augmented prototyping, LLM-assisted coding and human-in-the-loop workflow design across Gemini, Figma Make and MCP.' },
  ],
  openTo: [
    'Product design leadership roles',
    'Consulting on enterprise UX and design systems',
    'Design-to-front-end collaboration (Angular, React)',
    'AI-augmented workflow and HITL product design',
  ],
};
