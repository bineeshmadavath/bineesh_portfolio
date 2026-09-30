/**
 * Content and design-system data for the Case Study page.
 * Token values mirror src/index.css. If you change a token there, change it here too.
 */

export const meta = {
  title: 'Green Eye',
  tagline: 'Watch. Expose. Change.',
  summary:
    'A community-driven web app that lets citizens report littering in seconds, follow the cleanup, earn rewards and join local drives. This case study covers the research, the redesign and the design system that now powers every screen.',
  facts: [
    { label: 'Role', value: 'Product design & front-end' },
    { label: 'Platform', value: 'Responsive web · mobile-first' },
    { label: 'Stack', value: 'React 19 · Tailwind v4 · Firebase' },
    { label: 'Region', value: 'Kerala, India' },
  ],
};

export const overview =
  'Green Eye is a community-driven web application designed to empower citizens to report littering, track environmental activities, and access educational resources. The platform aims to foster civic engagement, reward positive actions, and support local environmental initiatives.';

export const research =
  'User research included interviews and surveys with local residents, environmental volunteers, and municipal staff. Key insights were gathered on motivations, barriers, and technology usage patterns.';

export const painPoints = [
  { title: 'No clear way to report', body: 'Lack of awareness about how to report littering, and where a report even goes.' },
  { title: 'Impact is invisible', body: 'Difficulty tracking personal environmental impact once a report is filed.' },
  { title: 'Few reasons to keep going', body: 'Limited incentives for community participation beyond goodwill.' },
  { title: 'Not built for everyone', body: 'Accessibility barriers for older adults and non-tech-savvy users.' },
];

export const persona = {
  name: 'Rahul',
  age: 14,
  occupation: 'School Student, Class 9',
  location: 'Ernakulam',
  goals: ['Keep the streets around his school and cricket ground clean', 'Get friends and classmates involved', 'Report a dump in seconds, from his phone, on the way to school'],
  frustrations: ['Adults tell him to report it but nobody says where', 'Never hears back after complaining', 'Apps that feel like paperwork and give nothing in return'],
  quote: 'There is a pile of plastic beside the ground where we play. I would report it if it took a minute and I could see someone actually pick it up.',
};

export const journey = [
  { stage: 'Awareness', action: 'Learns about the app', emotion: 'Curious', opportunity: 'Social media campaigns' },
  { stage: 'Onboarding', action: 'Signs up, explores', emotion: 'Hopeful', opportunity: 'Simple onboarding, tips' },
  { stage: 'Reporting', action: 'Submits litter report', emotion: 'Empowered', opportunity: 'Fast, photo-based reporting' },
  { stage: 'Tracking', action: 'Views activities', emotion: 'Motivated', opportunity: 'Gamified rewards' },
  { stage: 'Learning', action: 'Reads articles', emotion: 'Inspired', opportunity: 'Curated educational content' },
];

export const architecture = {
  eyebrow: 'Structure & prototype',
  title: 'Five things a citizen can do, two taps from the home screen.',
  description:
    'The information architecture keeps Report as the first, largest action. Everything else, activities, rewards, events and articles, supports the loop that starts there.',
  root: ['Welcome', 'Main menu'],
  branches: [
    { title: 'Report', primary: true, children: ['Take photo', 'Mark on map', 'Congrats'] },
    { title: 'Your activities', children: ['Activity list', 'Chat with group / officials'] },
    { title: 'Rewards', children: ['Rewards earned', 'Redeem rewards'] },
    { title: 'Events', children: ['Events in town', 'Your events'] },
    { title: 'Articles', children: ['Articles list', 'Your article'] },
  ],
};

export const storyboards = {
  intro:
    'Two hand-drawn storyboards framed the scenario before any screens were designed: an app to help users report garbage and plastic waste locations. The big picture follows Rahul from spotting a dump to seeing it cleared. The close-up follows his thumb through the app.',
  boards: [
    {
      title: 'Big picture',
      subtitle: 'From the roadside to the cleanup truck',
      src: `${import.meta.env.BASE_URL}case-study/storyboard-big-picture.jpg`,
      frames: [
        'Rahul sees garbage dumped beside the road.',
        'He remembers the app that can help report it to the authorities.',
        'He takes a photo of the garbage.',
        'He tags the photo with the location.',
        'Rahul walks away with a sense of accomplishment.',
        'The waste is disposed of by the government agency responsible for cleaning.',
      ],
    },
    {
      title: 'Close-up',
      subtitle: 'Six screens, one report',
      src: `${import.meta.env.BASE_URL}case-study/storyboard-close-up.jpg`,
      frames: [
        'Rahul opens the app.',
        'He selects Report from the main menu.',
        'He takes a photo of the garbage.',
        'He confirms the location on the map.',
        'Rahul earns 10 points, which he can redeem.',
        'Rahul can track his activities, chat with officials and check the progress.',
      ],
    },
  ],
};

export const usabilityFindings = [
  {
    finding: 'Users preferred a single-tap report submission',
    response: 'Report Litter is the only solid-green action on screen. It sits in the navbar, as the first card on mobile, and as the hero CTA.',
  },
  {
    finding: 'Visual feedback increased engagement',
    response: 'Every step of the report flow shows a checkmark when complete, the summary sheet confirms before upload, and a full-screen success state closes the loop.',
  },
  {
    finding: 'Some users struggled with map-based location selection',
    response: '"Get current location" is the primary path. The pin is draggable and a tap anywhere on the map moves it, with coordinates echoed back in plain text.',
  },
  {
    finding: 'Accessibility improvements needed for colour contrast and text size',
    response: 'Text colours were re-tuned to pass WCAG AA. Body copy starts at 15px, labels never drop below 11px, and every interactive element has a visible focus ring.',
  },
];

export const desktopScreen = {
  src: `${import.meta.env.BASE_URL}case-study/home-desktop.jpg`,
  title: 'Home · desktop',
  caption: 'Photo hero, feature grid, four-step process, then live sections for activities, rewards, events and articles.',
};

/* ───────────────────────── Design system ───────────────────────── */

export type Swatch = { name: string; token: string; hex: string; usage: string; onDark?: boolean };

export const colorGroups: { title: string; description: string; swatches: Swatch[] }[] = [
  {
    title: 'Brand',
    description: 'One green, used for every call to action and icon badge. The tints wash the page and card backgrounds.',
    swatches: [
      { name: 'Brand', token: 'brand', hex: '#2E9E4F', usage: 'Buttons, icon badges, active states', onDark: true },
      { name: 'Brand Dark', token: 'brand-dark', hex: '#237A3D', usage: 'Hover state, small brand text', onDark: true },
      { name: 'Brand Soft', token: 'brand-soft', hex: '#DDF2E3', usage: 'Badge circles, tinted feature cards' },
      { name: 'Brand Tint', token: 'brand-tint', hex: '#EEF7F0', usage: 'Page background, input fills' },
    ],
  },
  {
    title: 'Neutrals',
    description: 'Ink carries a faint green undertone so text never looks pure black against the mint page.',
    swatches: [
      { name: 'Surface', token: 'surface', hex: '#FFFFFF', usage: 'Cards, navbar, sheets' },
      { name: 'Ink', token: 'ink', hex: '#1F2A24', usage: 'Headlines, primary text', onDark: true },
      { name: 'Ink Muted', token: 'ink-muted', hex: '#5F6F66', usage: 'Body copy, captions, nav links', onDark: true },
      { name: 'Line', token: 'line', hex: '#E3EBE5', usage: 'Card borders, dividers' },
    ],
  },
  {
    title: 'Status',
    description: 'Kept deliberately muted so they never compete with the brand green.',
    swatches: [
      { name: 'Pending', token: 'status-pending', hex: '#8F5F00', usage: 'Open reports', onDark: true },
      { name: 'Resolved', token: 'status-resolved', hex: '#2E9E4F', usage: 'Closed reports', onDark: true },
      { name: 'Rejected', token: 'status-rejected', hex: '#A63B45', usage: 'Errors, destructive', onDark: true },
      { name: 'Info', token: 'status-info', hex: '#2B6399', usage: 'Assigned reports', onDark: true },
    ],
  },
  {
    title: 'Status tints',
    description: 'Each status has a soft pair used behind pills and inline messages.',
    swatches: [
      { name: 'Pending Soft', token: 'status-pending-soft', hex: '#FBF1DE', usage: 'Pending pill background' },
      { name: 'Resolved Soft', token: 'status-resolved-soft', hex: '#DDF2E3', usage: 'Resolved pill background' },
      { name: 'Rejected Soft', token: 'status-rejected-soft', hex: '#FBE6E8', usage: 'Error message background' },
      { name: 'Info Soft', token: 'status-info-soft', hex: '#E3EEF8', usage: 'Info pill background' },
    ],
  },
];

export const overlays = [
  { name: 'Hero overlay', css: 'linear-gradient(180deg, rgba(20,40,30,.15), rgba(20,40,30,.55))', usage: 'Darkens photography so white text stays legible' },
  { name: 'Frosted glass', css: 'rgba(255,255,255,.20) + backdrop-blur 12px + 1px rgba(255,255,255,.30)', usage: 'Chips and buttons placed on photos' },
];

export const typeScale = [
  { name: 'Display', sample: 'Green Future Today', size: '56px', weight: 600, lineHeight: 1.08, tracking: '-0.02em', className: 'text-[56px] leading-[1.08] font-semibold tracking-tight' },
  { name: 'H1', sample: 'Why Sustainability Matters', size: '38px', weight: 600, lineHeight: 1.15, tracking: '-0.02em', className: 'text-[38px] leading-[1.15] font-semibold tracking-tight' },
  { name: 'H2', sample: 'Your latest reports', size: '28px', weight: 600, lineHeight: 1.2, tracking: '-0.02em', className: 'text-[28px] leading-[1.2] font-semibold tracking-tight' },
  { name: 'H3', sample: 'Protecting Natural Ecosystems', size: '20px', weight: 600, lineHeight: 1.35, tracking: '-0.01em', className: 'text-[20px] leading-[1.35] font-semibold' },
  { name: 'H4', sample: 'Things to Bring', size: '16px', weight: 600, lineHeight: 1.4, tracking: '0', className: 'text-[16px] leading-[1.4] font-semibold' },
  { name: 'Body', sample: 'Every report puts litter on the map so it gets picked up faster.', size: '16px', weight: 400, lineHeight: 1.6, tracking: '0', className: 'text-[16px] leading-[1.6] text-ink-muted' },
  { name: 'Body small', sample: 'Snap a photo, pin the location, add a note or voice memo.', size: '14px', weight: 400, lineHeight: 1.55, tracking: '0', className: 'text-[14px] leading-[1.55] text-ink-muted' },
  { name: 'Caption', sample: '29-04-2025 · 02:30 PM', size: '12px', weight: 500, lineHeight: 1.4, tracking: '0', className: 'text-[12px] leading-[1.4] font-medium text-ink-muted' },
  { name: 'Label', sample: 'MY ACTIVITIES', size: '12px', weight: 600, lineHeight: 1.4, tracking: '0.18em', className: 'text-[12px] leading-[1.4] font-semibold uppercase tracking-[0.18em] text-brand' },
  { name: 'Button', sample: 'Report Litter', size: '15px', weight: 600, lineHeight: 1.4, tracking: '0', className: 'text-[15px] leading-[1.4] font-semibold' },
];

export const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 80];

export const radii = [
  { name: 'Inner', token: 'rounded-inner', px: 16, usage: 'Inputs, nested cards, thumbnails' },
  { name: 'Card', token: 'rounded-card', px: 24, usage: 'All cards, sheets, modals' },
  { name: 'Hero', token: 'rounded-hero', px: 32, usage: 'Hero photo, full-bleed media' },
  { name: 'Full', token: 'rounded-full', px: 9999, usage: 'Buttons, pills, icon badges, navbar' },
];

export const shadows = [
  { name: 'None (default)', css: 'border 1px var(--color-line)', usage: 'Cards rely on a hairline border instead of a shadow' },
  { name: 'Button glow', css: '0 6px 18px -6px rgba(46,158,79,.6)', usage: 'Primary button only' },
  { name: 'Hover lift', css: '0 12px 30px -18px rgba(31,42,36,.35) + translateY(-2px)', usage: 'Interactive cards on hover' },
  { name: 'Floating nav', css: '0 10px 30px -20px rgba(31,42,36,.35)', usage: 'Pill navbar on the home page' },
  { name: 'Stat chip', css: '0 10px 30px -16px rgba(31,42,36,.4)', usage: 'White chips placed over photos' },
];

export const motion = [
  { name: 'Fast', value: '200ms', usage: 'Colour, border and opacity changes on hover and focus' },
  { name: 'Normal', value: '300ms', usage: 'Sidebar slide, detail view slide-in, tab fades' },
  { name: 'Spring', value: 'damping 30 · stiffness 300', usage: 'Bottom sheets (Motion library), drag-to-dismiss' },
  { name: 'Lift', value: 'translateY(-2px)', usage: 'Interactive cards on hover, paired with the hover-lift shadow' },
];

export const breakpoints = [
  { name: 'Mobile', range: '0 to 767px', notes: 'Single column, 16px page padding, bottom sheets, 448px content max' },
  { name: 'Desktop', range: '768px and up', notes: 'Multi-column grids, 24px page padding, 1152px container, modals centred' },
];

export const patterns = [
  { title: 'Floating pill navbar', body: 'White, fully rounded, sits on the mint page with a hairline border. Logo left, links centre, one green action right.' },
  { title: 'Photo hero with frosted chips', body: 'Full-bleed image, 32px radius, dark gradient overlay. Copy is centred; supporting chips sit in the corners.' },
  { title: 'Icon-badge card', body: 'A 40px green circle with a white Lucide icon, then title and two lines of muted copy. The most repeated element in the product.' },
  { title: 'Numbered process', body: 'Four steps flank a circular photo. Each step has a 36px numbered badge, a short title and a one-line description.' },
  { title: 'Bottom sheet', body: 'Mobile modals slide up from the bottom with a drag handle, 32px top radius and a fixed action bar.' },
  { title: 'Empty and loading states', body: 'A soft icon badge, one sentence of copy and, where useful, a single primary action to get started.' },
];

export const accessibility = [
  'Sufficient colour contrast for text and buttons, verified live in the table below',
  'Alt text for all images and icons, with aria-labels on icon-only buttons',
  'Keyboard navigability for all interactive elements with a visible 2px brand focus ring',
  'Scalable text and responsive layouts that reflow from 320px up',
];

export const contrastPairs = [
  { fg: '#1F2A24', bg: '#FFFFFF', label: 'Ink on Surface', size: 'normal' as const },
  { fg: '#1F2A24', bg: '#EEF7F0', label: 'Ink on Brand Tint', size: 'normal' as const },
  { fg: '#5F6F66', bg: '#FFFFFF', label: 'Ink Muted on Surface', size: 'normal' as const },
  { fg: '#5F6F66', bg: '#EEF7F0', label: 'Ink Muted on Brand Tint', size: 'normal' as const },
  { fg: '#FFFFFF', bg: '#2E9E4F', label: 'White on Brand (buttons)', size: 'large' as const },
  { fg: '#237A3D', bg: '#FFFFFF', label: 'Brand Dark on Surface (text links)', size: 'normal' as const },
  { fg: '#2E9E4F', bg: '#FFFFFF', label: 'Brand on Surface (icons, large text)', size: 'large' as const },
  { fg: '#237A3D', bg: '#DDF2E3', label: 'Brand Dark on Brand Soft (pills)', size: 'normal' as const },
  { fg: '#8F5F00', bg: '#FBF1DE', label: 'Pending pill', size: 'normal' as const },
  { fg: '#2B6399', bg: '#E3EEF8', label: 'Assigned (info) pill', size: 'normal' as const },
  { fg: '#A63B45', bg: '#FBE6E8', label: 'Rejected pill', size: 'normal' as const },
];

export const takeaways = [
  'Community engagement is key to sustained usage',
  'Gamification and rewards drive participation',
  'A small token set beats a large one: one green and four neutrals were enough for every screen',
];

export const nextSteps = [
  'Launch a pilot in more neighbourhoods across Kerala',
  'Integrate with local government systems so assignments flow both ways',
  'Conduct further accessibility testing with older adults and screen-reader users',
  'Replace the mock activity data on the landing page with the signed-in user\'s live reports',
];
