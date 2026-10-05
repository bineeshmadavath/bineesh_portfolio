import { IMAGES } from '../lib/images';

// Case studies are section-driven: each `sections` entry has a `type` that maps to a block component.
// Image slots are `null` until real screenshots exist; the Frame component renders a labelled placeholder.
export const caseStudies = [
  {
    slug: 'smartops',
    // Confidential client work: cards open a "locked" notice and the route shows it instead of the content.
    locked: true,
    number: '01',
    title: 'Intelligent Document Processing Platform',
    category: 'Intelligent document processing',
    categoryShort: 'Intelligent document processing',
    summary: 'Re-architected the extraction and validation interface, cutting human-in-the-loop review time by a quarter.',
    featured: true,
    muted: true,
    featuredMetrics: [
      { value: '−25%', label: 'Review time', tone: 'down' },
      { value: '−40%', label: 'Handoff time', tone: 'down' },
      { value: '+15%', label: 'Task completion', tone: 'up' },
    ],
    featuredSummary: 'Re-architected the extraction and validation interface for an enterprise IDP platform — cutting human-in-the-loop review time by 25% and design-to-dev handoff by 40%, on a component library built for WCAG 2.1 AA.',
    tags: ['UX transformation', 'Design systems', 'Angular'],
    hero: {
      eyebrow: 'Case study 01 · Intelligent Document Processing Platform',
      title: 'Business meaning, one click from the source — ',
      titleEm: 'without mixing facts and inferences.',
      lede: 'An AI inference layer for the document review screen that surfaces contextual business insights beside the extracted data reviewers already trust — clearly separated, explainable, and switchable off.',
      image: `${import.meta.env.BASE_URL}images/heroimage-smartvision.png`,
      imageLabel: 'Hero screenshot — DR screen, FOIs tab with inline inference open',
      meta: [
        { label: 'Role', value: 'UX / Product Designer', sub: 'Research, UX, UI, front-end support' },
        { label: 'Tools', value: 'Figma, React', sub: 'SmartVision design system' },
        { label: 'Timeline', value: '1 week', sub: 'Discovery to hi-fi handoff' },
        { label: 'Type', value: 'AI / ML integration', sub: 'Enterprise IDP platform' },
      ],
    },
    glance: {
      problem: 'Reviewers could see extracted values but not what they meant for the business.',
      solution: 'Admin-configured inferences shown inline, per field, row and clause — extraction stays primary.',
      impact: "Interpretation moved out of downstream automation and into the reviewer's line of sight.",
    },
    sections: [
      { type: 'narrative-list', eyebrow: '01 — The problem', title: "Extraction was solved. Interpretation wasn't.",
        text: 'Document reviewers could see every extracted value, but the business meaning — does this clause pass policy, is this total within tolerance — only surfaced later, in downstream automation. Every reviewer was interpreting by hand, and every rule change needed a developer.',
        items: ['Only extracted data is visible; business interpretation is missing', 'Deterministic, rule-based systems fail on semantic scenarios', 'No clear separation between facts and inferences', 'Reviewer trust drops when interpretation is mixed with extraction', 'Extra manual effort to validate what a document actually means'] },
      { type: 'group', alt: true, blocks: [
        { type: 'cards', eyebrow: '02 — Goals', title: "Three goals, one constraint: don't break trust.", cols: 3, cards: [
          { label: 'Business goal', title: 'Faster, more confident decisions by bringing interpretation closer to the source data.' },
          { label: 'User goal', title: 'AI inferences clearly separated from extraction, linked to the field they explain.' },
          { label: 'Design goal', title: 'Explainability and reviewer trust, with minimal disruption to the existing workflow.' } ] },
        { type: 'quotes', eyebrow: "03 — Who it's for", title: 'Two audiences with opposite needs.',
          text: 'Reviewers want meaning without noise. Admins want to change the rules without a developer. The design has to serve both from the same screens.',
          tags: ['Document reviewers', 'Compliance analysts', 'Legal review teams', 'Business admins'],
          groups: [
            { label: 'Reviewers said', quotes: ['I can see the extracted value, but I still need to work out what it means.', 'I validate policy conditions by hand, every time.', "I'm not sure an issue exists until a downstream flag tells me."] },
            { label: 'Admins said', quotes: ['Hard-coded automation logic is difficult to maintain.', 'Every business-logic change needs technical intervention.', 'We need a configuration system that scales.'] } ] } ] },
      { type: 'split-images', eyebrow: '04 — The solution', title: 'Configure once. Read everywhere.',
        text: 'Admins define inferences at the Definition Template Design level, where the field, table and clause structures already live. Reviewers then see those inferences inline on the Document Review screen — beside the evidence, never in place of it.',
        parts: [
          { label: 'Part 1 · Admin', title: 'DTD screen configuration', text: 'A new Inference definition sits alongside each FOI, table and clause definition. Admins write the rule in plain language, pick the evidence source, and choose whether the result is a pass/fail or a summary — no code, no redeploy.',
            points: ['FOI definition: inference explicit, on or off per field', 'Table definition: row-level rules and column context', 'Clause definition: clause-level inference in the legal flow'], image: `${import.meta.env.BASE_URL}images/Config-FOI.png`, imageLabel: 'Screenshot — DTD: FOI definition with Inference panel', imageSide: 'right' },
          { label: 'Part 2 · Reviewer', title: 'DR screen display', text: 'Inference is rendered as a secondary layer: a one-line summary under the field, expanded on demand, with the evidence highlighted in the document when opened. Extracted data keeps its position, weight and colour.',
            points: ['Progressive disclosure — summary first, detail on expand', 'Contextual placement — inference sits under its evidence', 'Visual hierarchy — extraction first, inference second'], image: `${import.meta.env.BASE_URL}images/inf-01.png`, imageLabel: 'Screenshot — DR screen: inference collapsed vs expanded', imageSide: 'right' } ] },
      { type: 'tabs', eyebrow: '05 — Detailed UX', title: 'Three tabs, one inference pattern.', tabs: [
          { id: 'tables', label: 'Tables tab', title: 'Row-level inference', points: ['Anomaly detection per row', 'Exception-based review — only flagged rows expand', 'Column context carried into the inference'], image: `${import.meta.env.BASE_URL}images/inf-02.png`, imageLabel: 'Screenshot — Tables tab' },
          { id: 'fois', label: 'FOIs tab', title: 'Field-level inline inference', points: ['Rule pass / fail indicator, at-a-glance', 'One-line preview, expandable detail', 'Evidence highlighting in the document'], image: `${import.meta.env.BASE_URL}images/inf-01.png`, imageLabel: 'Screenshot — FOIs tab' },
          { id: 'clauses', label: 'Clauses tab', title: 'Clause-level inline inference', points: ['Inference directly beneath each clause header', 'Legal reading flow preserved', 'Interpretation vs. text, visually distinct'], image: `${import.meta.env.BASE_URL}images/inf-03.png`, imageLabel: 'Screenshot — Clauses tab' } ],
        callout: { label: 'Edge', title: 'Empty state: "No inference available"', text: 'When the backend returns nothing, the system says so explicitly — never silently. Extraction stays untouched, and reviewers keep their confidence that an absent inference means "not configured", not "nothing wrong".' } },
      { type: 'numbered', alt: true, eyebrow: '06 — Design principles', title: 'Five rules the interface never breaks.', items: [
          ['Progressive disclosure', 'Summary first; detail on demand, to reduce cognitive load'], ['Contextual placement', 'Inference lives beside its evidence, never in a separate panel'], ['Visual hierarchy', 'Extraction first; inference second, with clear separation'], ['Explainable AI', 'Every inference shows the evidence it was drawn from'], ['Non-intrusive enhancement', 'Nothing about the existing review path changes if inference is off'] ] },
      { type: 'metrics', hidden: true, eyebrow: '07 — What we measure', title: "Success, in the reviewer's numbers and the business's.",
        text: 'Baseline and post-release figures to be filled from the SmartVision analytics once the feature has been live for a full review cycle.',
        metrics: [ { value: '[−XX%]', label: 'Manual interpretation time', tone: 'down' }, { value: '[−XX%]', label: 'Downstream validation effort', tone: 'down' }, { value: '[+XX%]', label: 'Inference adoption rate', tone: 'up' }, { value: '[+XX]', label: 'Trust score in AI outputs', tone: 'up' } ],
        also: [ { label: 'Also tracked · business', text: 'Faster document review turnaround · Higher reviewer productivity · Reduced compliance misses' }, { label: 'Also tracked · UX', text: 'Reduced reviewer confusion · Fewer support queries about flagged items · Time-to-first-inference-open' } ] },
    ],
    takeaway: { hidden: true, text: 'The hard part of "AI in the workflow" wasn\'t the AI. It was making sure reviewers could always tell a fact from a ', em: 'guess.', cta: 'Talk to me about AI review workflows' },
    next: 'greeneye',
  },
  {
    slug: 'greeneye',
    number: '02',
    title: 'Green Eye',
    category: 'Civic tech & sustainability',
    categoryShort: 'Civic tech',
    summary: 'A community-driven web app that lets citizens report littering in seconds, follow the cleanup, earn rewards and join local drives.',
    href: '/work/green-eye',
    prominent: true,
    // Home-grid thumbnail mirrors the case study hero: landscape photo + phone mockup.
    thumb: {
      background: IMAGES.hero,
      device: `${import.meta.env.BASE_URL}case-study/home-mobile.jpg`,
      label: 'Green Eye home screen on mobile over a misty green landscape',
    },
    featuredMetrics: [
      { value: '8', label: 'Screens redesigned', tone: 'neutral' },
      { value: '22', label: 'Design tokens', tone: 'neutral' },
    ],
    tags: ['Civic tech', 'Accessibility', 'React'],
    hero: {
      eyebrow: 'Case study · 2025',
      title: 'Green Eye',
      titleEm: 'Watch. Expose. Change.',
      lede: 'A community-driven web app that lets citizens report littering in seconds, follow the cleanup, earn rewards and join local drives. This case study covers the research, the redesign and the design system that now powers every screen.',
      image: `${import.meta.env.BASE_URL}images/Thumbnail-Greeneye.png`, imageLabel: 'Hero screenshot — Green Eye app interface',
      meta: [ { label: 'Role', value: 'Product design & front-end', sub: 'Research, IA, wireframes, hi-fi, design system' }, { label: 'Platform', value: 'Responsive web · mobile-first', sub: 'Progressive web app' }, { label: 'Stack', value: 'React 19 · Tailwind v4 · Firebase', sub: 'Real-time database & hosting' }, { label: 'Region', value: 'Kerala, India', sub: 'Pilot launch region' } ],
    },
    glance: { problem: 'Citizens lacked an easy way to report littering and see the impact of their actions.', solution: 'A one-tap report flow, real-time tracking, rewards, and community engagement — on an accessible, mobile-first app.', impact: 'Redesigned 8 screens and created 22 design tokens, enabling faster development and consistent UX.' },
    sections: [
      { type: 'group', blocks: [
        { type: 'cards', eyebrow: 'PROJECT OVERVIEW', title: 'A faster way to get litter off the street', cols: 4, cards: [
          { title: 'Report', text: 'Photo, pin, note or voice memo. Under a minute.' },
          { title: 'Track', text: 'Follow every report from pending to resolved.' },
          { title: 'Earn', text: 'Points for verified reports, redeemable at partner stores.' },
          { title: 'Join', text: 'Community cleanup drives listed by local bodies.' } ] },
        { type: 'narrative-list', text: 'Green Eye is a community-driven web application designed to empower citizens to report littering, track environmental activities, and access educational resources. The platform aims to foster civic engagement, reward positive actions, and support local environmental initiatives.', items: [] }
      ] },
      { type: 'group', blocks: [
        { type: 'narrative-list', eyebrow: 'USER RESEARCH', title: 'Who we designed for', text: 'User research included interviews and surveys with local residents, environmental volunteers, and municipal staff. Key insights were gathered on motivations, barriers, and technology usage patterns.', items: [] },
        { type: 'cards', title: 'Pain points', cols: 2, cards: [
          { title: 'No clear way to report', text: 'Lack of awareness about how to report littering, and where a report even goes.' },
          { title: 'Impact is invisible', text: 'Difficulty tracking personal environmental impact once a report is filed.' },
          { title: 'Few reasons to keep going', text: 'Limited incentives for community participation beyond goodwill.' },
          { title: 'Not built for everyone', text: 'Accessibility barriers for older adults and non-tech-savvy users.' } ] }
      ] },
      { type: 'persona', alt: true, title: 'Persona',
        persona: { name: 'Rahul', role: '14 · School Student, Class 9', location: 'Ernakulam', quote: 'There is a pile of plastic beside the ground where we play. I would report it if it took a minute and I could see someone actually pick it up.' },
        goals: ['Keep the streets around his school and cricket ground clean', 'Get friends and classmates involved', 'Report a dump in seconds, from his phone, on the way to school'],
        frustrations: ['Adults tell him to report it but nobody says where', 'Never hears back after complaining', 'Apps that feel like paperwork and give nothing in return'] },
      { type: 'journey', title: 'User journey map',
        rows: [ ['01 · Awareness', 'Learns about the app', 'Curious', 'Social media campaigns'], ['02 · Onboarding', 'Signs up, explores', 'Hopeful', 'Simple onboarding, tips'], ['03 · Reporting', 'Submits litter report', 'Empowered', 'Fast, photo-based reporting'], ['04 · Tracking', 'Views activities', 'Motivated', 'Gamified rewards'], ['05 · Learning', 'Reads articles', 'Inspired', 'Curated educational content'] ] },
      { type: 'structure', eyebrow: 'STRUCTURE & PROTOTYPE', title: 'Five things a citizen can do, two taps from the home screen.',
        text: 'The information architecture keeps Report as the first, largest action. Everything else, activities, rewards, events and articles, supports the loop that starts there.',
        tree: { roots: ['Welcome', 'Main menu'], branches: [ { node: 'Report', leaves: ['Take photo', 'Mark on map', 'Congrats'] }, { node: 'Your activities', leaves: ['Activity list', 'Chat with group / officials'] }, { node: 'Rewards', leaves: ['Rewards earned', 'Redeem rewards'] }, { node: 'Events', leaves: ['Events in town', 'Your events'] }, { node: 'Articles', leaves: ['Articles list', 'Your article'] } ] },
        gallery: [],
        footer: 'Report is the only branch with a terminal confirmation step. Every other branch is a list and a detail view, which keeps the mental model identical across the app.' },
      { type: 'group', blocks: [
        { type: 'narrative-list', eyebrow: 'UX STORYBOARDS', title: "Rahul's day, in twelve frames", text: 'Two hand-drawn storyboards framed the scenario before any screens were designed: an app to help users report garbage and plastic waste locations. The big picture follows Rahul from spotting a dump to seeing it cleared. The close-up follows his thumb through the app.', items: [] },
        { type: 'split-images', parts: [
          { label: 'Big picture', title: 'From the roadside to the cleanup truck', points: ['Rahul sees garbage dumped beside the road.', 'He remembers the app that can help report it to the authorities.', 'He takes a photo of the garbage.', 'He tags the photo with the location.', 'Rahul walks away with a sense of accomplishment.', 'The waste is disposed of by the government agency responsible for cleaning.'], image: `${import.meta.env.BASE_URL}images/storyboard-bigpicture.jpg`, imageLabel: 'Storyboard — big picture showing Rahul\'s journey from spotting litter to cleanup', imageSide: 'right' },
          { label: 'Close-up', title: 'Six screens, one report', points: ['Rahul opens the app.', 'He selects Report from the main menu.', 'He takes a photo of the garbage.', 'He confirms the location on the map.', 'Rahul learns 10 points, which he can redeem.', 'Rahul can track his activities, chat with officials and check the progress.'], image: `${import.meta.env.BASE_URL}images/storyboard-closeup.jpg`, imageLabel: 'Storyboard — close-up showing Rahul\'s interaction with the app', imageSide: 'right' }
        ] }
      ] },
      { type: 'narrative-list', text: 'The big picture frames the emotional arc, from frustration to accomplishment. The close-up became the spine of the Report Litter flow: photo, location, confirmation, points, then tracking under My Activities.', items: [] },
      { type: 'findings', eyebrow: 'USABILITY FINDINGS', title: 'What testing told us, and what changed', text: 'Each finding from usability sessions maps to a concrete decision in the shipped interface.', findings: [
        { number: '01', finding: 'Users preferred a single-tap report submission', response: 'Report Litter is the only solid-green action on screen. It sits in the navbar, as the first card on mobile, and as the hero CTA.' },
        { number: '02', finding: 'Visual feedback increased engagement', response: 'Every step of the report flow shows a checkmark when complete, the summary sheet confirms before upload, and a full-screen success state closes the loop.' },
        { number: '03', finding: 'Some users struggled with map-based location selection', response: '"Get current location" is the primary path. The pin is draggable and a tap anywhere on the map moves it, with coordinates echoed back in plain text.' },
        { number: '04', finding: 'Accessibility improvements needed for colour contrast and text size', response: 'Text colours were re-tuned to pass WCAG AA. Body copy starts at 15px, labels never drop below 11px, and every interactive element has a visible focus ring.' }
      ] },
      { type: 'narrative-list', eyebrow: 'HIGH-FIDELITY SCREENS', title: 'The shipped interface', text: 'One desktop capture, then the mobile journey as eleven device mockups rendered with the production components and sample data. The dotted line traces the order a citizen moves through them.', items: [] },
      { type: 'journey-screens', title: 'Mobile journey', screens: [
        { number: '01', name: 'Home', description: 'Hero, one primary action, four tiles.' },
        { number: '02', name: 'Report Litter', description: 'Four steps, two required. Type and quantity as chips.' },
        { number: '03', name: 'Take Photos', description: 'Rear camera, thumbnails. Capture and Done.' },
        { number: '04', name: 'Locate', description: 'Draggable pin with the address echoed back.' },
        { number: '05', name: 'Speak up', description: 'Live transcript while the mic listens.' },
        { number: '06', name: 'Comment', description: 'Free text with quick-add tags.' },
        { number: '07', name: 'Summary', description: 'Everything in one sheet before upload.' },
        { number: '08', name: 'My Activities', description: 'Status per report and a monthly chart.' },
        { number: '09', name: 'Rewards', description: 'Balance, redeem, and the point bank.' },
        { number: '10', name: 'Events', description: 'Upcoming drives with save and join.' },
        { number: '11', name: 'Articles', description: 'Tagged reads with an estimated time.' }
      ], footer: 'Screens 01 to 07 are the Report Litter flow end to end. Screens 08 to 11 are where the report pays off: tracking, points, drives and reading. Every mockup uses the same tokens, radii and icon badges as the live app.' },
      { type: 'narrative-list', title: 'Component specimens', text: 'Rendered live from src/components/ui', items: [] },
      { type: 'narrative-list', title: 'Buttons', text: 'src/components/ui/Button.tsx', items: [
        'Primary: Brand fill, white text, soft green glow. Trailing circle icon optional.',
        'Ghost: White with hairline border. Turns brand on hover.',
        'Soft: Brand-soft fill for secondary emphasis.',
        'Frosted: Used only on photography.',
        'Sizes: sm 14px · md 15px · lg 16px',
        'Hover: Primary darkens to brand-dark; ghost gets brand text and border. 200ms.',
        'Focus: 2px brand ring with 2px offset, visible on keyboard focus only.',
        'Active: No transform. Colour holds, the trailing icon stays put.',
        'Disabled: 50% opacity, pointer events off.'
      ] },
      { type: 'narrative-list', title: 'Cards', text: 'src/components/ui/Card.tsx', items: [
        'Surface: White, 1px line border, 24px radius, 20 to 24px padding. The default.',
        'Soft: Brand-soft fill. Used once per row to break rhythm.',
        'Tint: Mint fill for cards nested inside white cards, like the redeem steps.',
        'Interactive: Hover me. Border turns brand, card lifts 2px and gains the hover-lift shadow. 200ms.'
      ] },
      { type: 'narrative-list', title: 'Inputs', text: 'Native elements styled with tokens', items: [
        'Text input: Mint fill, line border, 16px radius. Focus adds a 2px brand ring.',
        'With leading icon: Icon placed inside input.',
        'Error state: Rejected soft fill background with error message below.',
        'Textarea: Multi-line input with same styling as text input.',
        'Choice chips: Selected: brand border and soft fill. Used for type and quantity.',
        'Segmented control: Group of related options. Selected gets brand fill.'
      ] },
      { type: 'narrative-list', title: 'Badges, pills and icons', text: 'Lucide icons · 2px stroke', items: [
        'Icon badge variants: Solid, Soft, Outline, White. Sizes: sm, md, lg, xl.',
        'Sizes: 32 / 40 / 48 / 56px with icons at 15 / 18 / 22 / 26px.',
        'Status pills: Pending, Assigned, Resolved, Rejected, Featured.',
        'Fully rounded, 11 to 12px semibold, soft background with matching status text colour.',
        'Dot variant used in tables and lists.',
        'Icon sizes: 16, 18, 22, 26, 32px. Never below 15px inside a badge.'
      ] },
      { type: 'narrative-list', title: 'Motion', text: 'CSS transitions + Motion for sheets', items: [
        'Fast (200ms): Colour, border and opacity changes on hover and focus.',
        'Normal (300ms): Sidebar slide, detail view slide-in, tab fades.',
        'Spring (damping 30 · stiffness 300): Bottom sheets (Motion library), drag-to-dismiss.',
        'Lift (translateY(-2px)): Interactive cards on hover, paired with hover-lift shadow.'
      ] },
      { type: 'cards', title: 'Design patterns', cols: 3, cards: [
        { title: 'Floating pill navbar', text: 'White, fully rounded, sits on mint page with hairline border. Logo left, links centre, one green action right.' },
        { title: 'Photo hero with frosted chips', text: 'Full-bleed image, 32px radius, dark gradient overlay. Copy centered, supporting chips in corners.' },
        { title: 'Icon-badge card', text: '40px green circle with white Lucide icon, title and two lines of muted copy. Most repeated element.' },
        { title: 'Numbered process', text: 'Four steps flank circular photo. Each step has 36px numbered badge, short title, one-line description.' },
        { title: 'Bottom sheet', text: 'Mobile modals slide up from bottom with drag handle. 32px top radius, fixed action bar.' },
        { title: 'Empty and loading states', text: 'Soft icon badge, one sentence copy, single primary action to get started.' }
      ] },
      { type: 'two-lists', alt: true, left: { title: 'Numbered process step', items: [['01 Spot the Litter', 'Notice a dumping spot on your route.'], ['02 Snap and Report', 'Capture a photo and drop a pin.']] },
        right: { title: 'Layout & breakpoints', items: [['Mobile', '0 to 767px – Single column, 16px page padding, bottom sheets, 448px content max'], ['Desktop', '768px and up – Multi-column grids, 24px page padding, 1152px container, modals centred'], ['Mobile-first', 'One breakpoint keeps the codebase small; grids collapse to a single column below it.']] } },
      { type: 'design-system', eyebrow: 'DESIGN SYSTEM', title: 'One green, four neutrals, three radii', text: 'Every value below is a Tailwind v4 theme token in index.css and is used verbatim across the app. Nothing on this page is a mock-up; the swatches, type and controls are the real components.', spacing: [
        { value: '4px', usage: 'Icon gaps' },
        { value: '8px', usage: 'Chip gaps' },
        { value: '12px', usage: 'Grid gaps (mobile)' },
        { value: '16px', usage: 'Page padding (mobile)' },
        { value: '24px', usage: 'Card padding, page padding (desktop)' },
        { value: '32px', usage: 'Large card padding' },
        { value: '48px', usage: 'Section header gap' },
        { value: '64px', usage: 'Section gap' },
        { value: '88px', usage: 'Section padding' }
      ], borderRadius: [
        { name: 'Inner', value: '16px', variable: '--rounded-inner', usage: 'Inputs, nested cards, thumbnails' },
        { name: 'Card', value: '24px', variable: '--rounded-card', usage: 'All cards, sheets, modals' },
        { name: 'Hero', value: '32px', variable: '--rounded-hero', usage: 'Hero photo, full-bleed media' },
        { name: 'Full', value: 'full', variable: '--rounded-full', usage: 'Buttons, pills, icon badges, navbar' }
      ], elevation: [
        { name: 'None (default)', value: 'border 1px var(--color-line)', usage: 'Cards rely on a hairline border instead of a shadow' },
        { name: 'Button glow', value: '0 6px 18px -6px rgba(46,158,79,.6)', usage: 'Primary button only' },
        { name: 'Hover lift', value: '0 12px 16px -18px rgba(31,42,36,.35) + translateY(-2px)', usage: 'Interactive cards on hover' },
        { name: 'Floating nav', value: '0 18px 34px -20px rgba(31,42,36,.35)', usage: 'Pill navbar on the home page' },
        { name: 'Stat chip', value: '0 16px 32px -16px rgba(31,42,36,.4)', usage: 'White chips placed over photos' }
      ], typography: {
        family: 'Plus Jakarta Sans',
        weights: [400, 500, 600, 700],
        description: 'Geometric, slightly wide, with a friendly lowercase. Headlines use 600 with tight tracking; body copy stays at 400.',
        scales: [
          { name: 'Display', size: '56px', weight: 600, lineHeight: 1.08, tracking: '-0.02em' },
          { name: 'H1', size: '38px', weight: 600, lineHeight: 1.15, tracking: '-0.02em' },
          { name: 'H2', size: '28px', weight: 600, lineHeight: 1.12, tracking: '-0.02em' },
          { name: 'H3', size: '20px', weight: 600, lineHeight: 1.35, tracking: '-0.01em' },
          { name: 'H4', size: '16px', weight: 600, lineHeight: 1.4, tracking: '0' },
          { name: 'Body', size: '16px', weight: 400, lineHeight: 1.6, tracking: '0' },
          { name: 'Body small', size: '14px', weight: 400, lineHeight: 1.55, tracking: '0' },
          { name: 'Caption', size: '12px', weight: 500, lineHeight: 1.4, tracking: '0' },
          { name: 'Label', size: '12px', weight: 600, lineHeight: 1.4, tracking: '0.18em' },
          { name: 'Button', size: '15px', weight: 600, lineHeight: 1.4, tracking: '0' }
        ]
      }, colors: {
        brand: [
          { name: 'Brand', value: '#2E9E4F', variable: '--color-brand', usage: 'Buttons, icon badges, active states' },
          { name: 'Brand Dark', value: '#257A3D', variable: '--color-brand-dark', usage: 'Hover state, small brand text' },
          { name: 'Brand Soft', value: '#DDF2E3', variable: '--color-brand-soft', usage: 'Badge circles, tinted feature cards' },
          { name: 'Brand Tint', value: '#EEF7F0', variable: '--color-brand-tint', usage: 'Page background, input fills' }
        ],
        neutrals: [
          { name: 'Surface', value: '#FFFFFF', variable: '--color-surface', usage: 'Cards, navbar, sheets' },
          { name: 'Ink', value: '#1F2A24', variable: '--color-ink', usage: 'Headlines, primary text' },
          { name: 'Ink Muted', value: '#5F6F66', variable: '--color-ink-muted', usage: 'Body copy, captions, nav links' },
          { name: 'Line', value: '#E3EBE5', variable: '--color-line', usage: 'Card borders, dividers' }
        ],
        status: [
          { name: 'Pending', value: '#BF5F00', variable: '--color-status-pending', usage: 'Open reports' },
          { name: 'Resolved', value: '#2E9E4F', variable: '--color-status-resolved', usage: 'Closed reports' },
          { name: 'Rejected', value: '#A63B45', variable: '--color-status-rejected', usage: 'Errors, destructive' },
          { name: 'Info', value: '#2B6399', variable: '--color-status-info', usage: 'Assigned reports' }
        ],
        statusTints: [
          { name: 'Pending Soft', value: '#FBF1DE', variable: '--color-status-pending-soft', usage: 'Pending pill background' },
          { name: 'Resolved Soft', value: '#DDF2E3', variable: '--color-status-resolved-soft', usage: 'Resolved pill background' },
          { name: 'Rejected Soft', value: '#FBE6E8', variable: '--color-status-rejected-soft', usage: 'Error message background' },
          { name: 'Info Soft', value: '#E3EEF8', variable: '--color-status-info-soft', usage: 'Info pill background' }
        ]
      }, effects: [
        { name: 'Hero overlay', description: 'linear-gradient(180deg, rgba(20,48,30,.15), rgba(20,48,30,.55))', usage: 'Darkens photography so white text stays legible' },
        { name: 'Frosted glass', description: 'rgba(255,255,255,.20) + backdrop-blur 12px + 1px', usage: 'Chips and buttons placed on photos' }
      ] },
      { type: 'narrative-list', eyebrow: 'ACCESSIBILITY', title: 'Built to pass, not just to look right', text: 'Contrast ratios below are computed at render time from the live hex values, so this table can\'t drift from the tokens.', items: [
        'Sufficient colour contrast for text and buttons, verified live in the table below',
        'Alt text for all images and icons, with aria-labels on icon-only buttons',
        'Keyboard navigability for all interactive elements with a visible 2px brand focus ring',
        'Scalable text and responsive layouts that reflow from 320px up',
        'WCAG 2.1 AA compliant: 4.5:1 for normal text, 3:1 for large text (18px+ bold or 24px+) and UI components'
      ] },
      { type: 'two-lists', alt: true, left: { eyebrow: '05 — What testing showed', title: 'Four findings, two of them fixes.', items: ['Users preferred a single-tap report submission', 'Visual feedback (progress bars, confirmation screens) increased engagement', 'Some users struggled with map-based location selection', 'Colour contrast and text size needed work for older users'] },
        right: { eyebrow: '06 — Accessibility', title: 'The neighbour test.', items: [ ['Contrast', 'Sufficient colour contrast for all text and buttons'], ['Alt text', 'Every image and icon described'], ['Keyboard', 'All interactive elements reachable without a pointer'], ['Scalable', 'Text and layouts that hold at larger sizes'] ] } },
      { type: 'cards', eyebrow: '07 — Takeaways & next', cols: 3, cards: [ { label: 'Takeaway 01', title: 'Community engagement is what sustains usage — not features' }, { label: 'Takeaway 02', title: 'Gamification and rewards drive participation, but only when tied to real clean-ups' }, { label: 'Next', title: 'Pilot in more neighbourhoods, integrate with local government systems, keep testing accessibility' } ] },
      { type: 'two-lists', alt: false, left: { eyebrow: 'TAKEAWAYS & NEXT STEPS', title: 'What we learned, and where this goes', items: [['Community engagement', 'Community engagement is key to sustained usage'], ['Gamification works', 'Gamification and rewards drive participation'], ['Small token set', 'A small token set beats a large one: one green and four neutrals were enough for every screen']] },
        right: { title: 'Next steps', items: [['01', 'Launch a pilot in more neighbourhoods across Kerala'], ['02', 'Integrate with local government systems so assignments flow both ways'], ['03', 'Conduct further accessibility testing with older adults and screen-reader users'], ['04', 'Replace the mock activity data on the landing page with the signed-in user\'s live reports']] } },
    ],
    takeaway: { text: 'The report button was never the hard part. Closing the loop — showing someone their report turned into a cleaner street — is what made people come ', em: 'back.', cta: 'Talk to me about civic products' },
    next: 'rewake',
  },
  // Rewake renders a bespoke page (src/pages/CaseStudy-rewake.tsx) with its own
  // tokens (src/styles/rewake.css); this entry only feeds the home grid and links.
  {
    slug: 'rewake',
    number: '03',
    title: 'Rewake Physio & Rehab',
    category: 'Healthcare booking experience',
    categoryShort: 'Healthcare',
    summary: 'A mobile-first booking flow that helps patients book a physio session without an account, a callback, or confusion.',
    href: '/work/rewake',
    prominent: true,
    thumb: {
      background: `${import.meta.env.BASE_URL}rewake/hero-clinic.jpg`,
      device: null,
      label: 'Rewake physiotherapy clinic session photo',
    },
    tags: ['Healthcare UX', 'Booking flow', 'Responsive web'],
    next: 'smartops',
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
