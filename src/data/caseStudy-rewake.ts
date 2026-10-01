/* Rewake Physio & Rehab case study content.
   Section data is filled in one-by-one as the design screenshots arrive —
   keep all copy here so the page component stays purely presentational. */

const BASE = import.meta.env.BASE_URL;

export const meta = {
  eyebrow: 'Case study · 2026',
  title: 'Rewake Physio & Rehab',
  tagline: 'A clinic booking flow that feels as calm as the clinic.',
  summary:
    'Rewake is a single-clinic physiotherapy practice in Pandikkad, Kerala, whose patients book on phones between work and family. This redesign turned a generic template into a three-step, sign-up-free booking flow on a deliberately small design system.',
  liveUrl: '#', // TODO: replace with the live Rewake app URL
  facts: [
    { label: 'Role', value: 'Product design & front-end build' },
    { label: 'Platform', value: 'Responsive web — mobile-first patients, desktop admin' },
    { label: 'Stack', value: 'React 19 · Tailwind CSS v4 · Firebase' },
    { label: 'Market', value: 'Pandikkad, Malappuram — Kerala, India' },
  ],
  /* Cropped from the design screenshot for now — swap for the original clinic
     photo (no baked-in overlays) when available. */
  heroImage: `${BASE}rewake/hero-clinic.jpg`,
  heroImageLabel: 'Physiotherapist guiding a patient through a balance exercise at the Rewake clinic',
  // \n keeps the same line breaks as the design mock (rendered whitespace-pre-line)
  heroCaption: 'Real clinic, real patients —\nphotography replaced stock\nimagery across the site.',
  statChips: [
    { value: '3 steps', label: 'from home screen to confirmed' },
    { value: '0 sign-ups', label: 'patients never create an account' },
  ],
};

export const overview = {
  eyebrow: 'Overview',
  title: 'One clinic, one job: get people into a session',
  subtitle: 'Every screen either answers a patient question or moves them one step closer to a booked slot.',
  body:
    'Rewake Physio & Rehab treats sports injuries, post-surgery recovery, chronic pain, children and older adults from a single clinic on Melattur Road. Before this work, booking meant a phone call during clinic hours or a generic template site whose booking link sat among five equal menu items. The goal was simple to state: a patient on a mid-range Android phone should get from "my knee hurts" to "I have a slot on Thursday" without an account, a password or a callback — and the clinic should see that booking the moment it lands.',
  cards: [
    { icon: 'discover', title: 'Discover', body: 'The home page answers "can they treat this?" with six service cards before asking for anything.' },
    { icon: 'choose', title: 'Choose', body: 'Patients pick a date and a physio — or "Any available physio" when they just want the soonest slot.' },
    { icon: 'book', title: 'Book', body: 'Live slot availability and a summary strip mean nobody submits a time they did not intend.' },
    { icon: 'confirm', title: 'Confirm', body: 'Staff send a prefilled WhatsApp confirmation, the channel patients already check most.' },
    { icon: 'manage', title: 'Manage', body: 'The admin dashboard streams bookings in real time with status, search, and Excel export.' },
  ],
};

export const research = {
  eyebrow: 'Research',
  title: 'Who we designed for, and what got in their way',
  subtitle: 'A requirements review, a heuristic audit and a small-screen walkthrough shaped every decision below.',
  method:
    'No formal interviews were run for this release, and this page does not pretend otherwise. Research combined a review of the clinic’s Business Requirements Document (v1.0, April 2026), a heuristic audit of the existing build against Nielsen’s ten heuristics, and a complete booking walkthrough on a 360px-wide Android viewport.',
  painTitle: 'Four pain points in the original build',
  painPoints: [
    { title: 'The header asked the wrong question', body: 'A "User / Admin" role switcher sat where patients look for the main action, while Book was one of five equal text links.' },
    { title: 'Progress without names', body: 'The booking stepper showed only 1–2–3, so on step two nothing said personal details came next.' },
    { title: 'An empty time-slot step', body: 'With no physios seeded the slot grid rendered blank, and after one stored booking every other time on that date vanished.' },
    { title: 'Contact details you could not tap', body: 'The clinic phone number and email were plain text, so mobile users had to copy them by hand.' },
  ],
  personaTitle: 'The person on the other side of the phone',
  persona: {
    initials: 'SK',
    name: 'Shameera K.',
    meta: ['41 · Primary-school teacher', 'Pandikkad, Malappuram'],
    note: 'Proto-persona — assembled from the BRD and the clinic context; to be validated in interviews.',
    quote: '“I just want to see which afternoon is free and get a WhatsApp saying it’s fixed — not wait on hold between classes.”',
    goals: [
      'Book around school hours from her phone, in one sitting',
      'Know which physio she will see and what they specialise in',
      'Receive a confirmation she can forward to family',
    ],
    frustrations: [
      'Calling during the day when the line is busy or she is teaching',
      'Sites that demand an account and password for a single visit',
      'Not knowing whether a booking actually went through',
    ],
  },
  journeyTitle: 'Shameera’s journey, stage by stage',
  journeyNote: 'Emotions are hypotheses from the proto-persona; opportunities are what the redesign did about each one.',
  journey: [
    { stage: 'Trigger', action: 'Knee pain after a fall on the school stairs; asks family, searches for a physio nearby.', emotion: 'Anxious', tone: 'anxious', opportunity: 'Lead with services and reassurance, with a call button one tap away.' },
    { stage: 'Explore', action: 'Scans services and physio profiles to check the clinic treats knees.', emotion: 'Unsure', tone: 'unsure', opportunity: 'Show specialisation, working days and hours on every physio card.' },
    { stage: 'Book', action: 'Picks Thursday, "Any available physio" and the 15:00 slot.', emotion: 'Focused', tone: 'focused', opportunity: 'Labelled steps, remaining-capacity badges and hidden past times.' },
    { stage: 'Confirm', action: 'Enters name and phone, taps Confirm, sees the booked screen.', emotion: 'Relieved', tone: 'relieved', opportunity: 'Summary before commit, phone validation, and a printable confirmation.' },
    { stage: 'Attend', action: 'Receives the clinic’s WhatsApp confirmation and arrives for the session.', emotion: 'Confident', tone: 'relieved', opportunity: 'Automated day-before reminders — the top item in next steps.' },
  ],
};

export const architecture = {
  eyebrow: 'Information architecture',
  title: 'Six branches, and every one leads back to Book',
  subtitle: 'The site is shallow on purpose: no screen is more than one tap from the booking flow.',
  aside:
    'Six top-level branches mirror the routes in the router. Book is the only branch styled in brand cyan because it is the only branch every other branch points to — hero buttons, physio cards, the header, the footer and the raised centre button in the mobile bottom nav.',
  root: 'Rewake app',
  branches: [
    { label: 'Home', kind: 'supporting', children: ['Hero & call', 'Services', 'How it works', 'Testimonials'] },
    { label: 'About', kind: 'supporting', children: ['Clinic story', 'Values', 'Stats'] },
    { label: 'Physios', kind: 'supporting', children: ['Physio cards', '→ Book a session'] },
    { label: 'Book', kind: 'primary', children: ['1 · Date & physio', '2 · Time slot', '3 · Your details', 'Confirmed'] },
    { label: 'Contact', kind: 'supporting', children: ['Call', 'Email', 'Visit', 'Message form'] },
    { label: 'Admin', kind: 'staff', children: ['Google sign-in', 'Bookings', 'Physios', 'Slots'] },
  ],
  legend: [
    { kind: 'primary', label: 'Primary action' },
    { kind: 'supporting', label: 'Supporting section' },
    { kind: 'staff', label: 'Staff only' },
  ],
  callout:
    'Because every branch ends in the same three-step flow, a patient learns the booking pattern once and meets it identically from any entry point.',
};

export const storyboards = {
  eyebrow: 'Storyboards',
  title: 'From a sore knee to a confirmed Thursday slot',
  subtitle: 'Two sketches — the real-world journey and the thumb journey — kept the flow grounded in context.',
  boards: [
    {
      label: 'Big picture',
      sketchTitle: 'Storyboard · Big picture — Shameera books her first session',
      // Hand-drawn sketch goes here: drop the file and set e.g. `${BASE}rewake/storyboard-big-picture.png`
      image: null as string | null,
      imageLabel: 'Six-panel storyboard: Shameera books her first session',
      steps: [
        'Shameera twists her knee on the school stairs during a break.',
        'That evening at home, she searches for a physio near Pandikkad on her phone.',
        'The home page lists knee and post-injury care, with same-week slots.',
        'She books Thursday 15:00 with any available physio — no account needed.',
        'Clinic staff send a WhatsApp confirmation she forwards to her husband.',
        'On Thursday a physio guides her through her first strengthening session.',
      ],
    },
    {
      label: 'Close-up',
      sketchTitle: 'Storyboard · Close-up — one thumb, five screens, one booking',
      image: null as string | null,
      imageLabel: 'Six-panel storyboard: the thumb journey through the booking flow',
      steps: [
        'Her thumb taps the raised Book button in the centre of the bottom nav.',
        'She taps "Thu 1" in the date row; today is marked so she can orient.',
        'She keeps "Any available physio" selected — the soonest slot matters most.',
        'She taps 15:00, which shows "1 left"; earlier times today are hidden.',
        'She types her name and number; the summary strip shows what she picked.',
        '"You\'re booked!" confirms the date, time and physio, with a print option.',
      ],
    },
  ],
};

export const findings = {
  eyebrow: 'Usability findings',
  title: 'Four problems the walkthrough surfaced, four specific fixes',
  subtitle: 'Each finding names the evidence; each response names the exact UI change that shipped.',
  items: [
    {
      finding: 'In the original header a "User / Admin" dropdown occupied the primary-action position, and Book was one of five equal-weight text links with nothing to set it apart.',
      response: 'Replaced the switcher with a filled "Book Now" button, moved admin to a 20px shield icon, and raised Book as the centre action in the mobile bottom nav.',
    },
    {
      finding: 'The stepper showed bare numbers (1–2–3); on the time-slot step there was no cue that personal details were next, or how far away confirmation was.',
      response: 'Labelled every step — "Date & Physio", "Time Slot", "Your Details" — with check marks on completed steps and a summary strip on step three.',
    },
    {
      finding: 'The slot step rendered empty when the physio roster was empty, and once a date had one stored booking every other time disappeared from the grid.',
      response: 'Always generate the 09:00–17:00 grid of 90-minute slots, overlay stored slots by start time, hide past times today, and show an empty state with a way back.',
    },
    {
      finding: 'The phone field accepted any text, so a mistyped number silently meant the WhatsApp confirmation could never reach the patient.',
      response: 'Validate a 10-digit mobile on blur, show the error in danger-700 with an icon, and link it to the input through aria-describedby.',
    },
  ],
};

export const screens = {
  eyebrow: 'Screens',
  title: 'The flow, end to end, on the devices patients actually use',
  subtitle: 'A real desktop capture, the mobile journey in order, and three production cards rendered live.',
  desktopTitle: 'Desktop',
  desktopCaption: 'Home page at 1440px — a real capture of the production build, not a mockup.',
  mobileTitle: 'Mobile journey',
  mobileNote: 'The primary flow in journey order, followed by the two screens where the booking pays off.',
  specimensTitle: 'Component specimens',
  specimensNote: 'Three production cards imported from src/components and rendered live with sample data.',
  specimensFootnote: 'The testimonial specimen uses sample copy; production reviews are pending verification from the clinic’s Google profile.',
};

export const designSystem = {
  eyebrow: 'Design system',
  title: 'A deliberately small system: one accent, one neutral ramp, three radii',
  subtitle: 'Every value on this page is a real theme token read from the running app — nothing is mocked.',
};

export const accessibility = {
  eyebrow: 'Accessibility',
  title: 'Contrast is computed, not claimed',
  subtitle: 'The ratios below are calculated in your browser from the live token values each time this page renders.',
  commitmentsTitle: 'Four commitments the build enforces',
  commitments: [
    { icon: 'contrast', text: 'Every text pair meets 4.5:1. The audit darkened ink-400 from #6C7B83 (4.2:1 on paper) to #627177 (4.8:1).' },
    { icon: 'keyboard', text: 'A visible 2px primary-600 focus ring on every control; the audit moved it off primary-500, which was 2.8:1.' },
    { icon: 'labels', text: 'Every input has a programmatic label, and errors are tied to their field with aria-describedby and aria-invalid.' },
    { icon: 'motion', text: 'Motion respects prefers-reduced-motion in both CSS transitions and motion/react entrances.' },
  ],
  wcagNote: 'WCAG 2.2 AA: 4.5:1 for normal text, 3:1 for large text (24px, or 18.66px bold) and for UI components such as focus indicators.',
  tableNote: '"Stats on dark" is only used for 36px+ display numerals, so it is held to the large-text threshold — it clears normal text too. Brand cyan primary-500 (2.8:1 on white) is excluded because it is never used for text.',
};

export const takeaways = {
  eyebrow: 'Takeaways',
  title: 'What held up, and what comes next',
  subtitle: 'The redesign shipped; these are the lessons and the next five pieces of work.',
  lessonsTitle: 'Takeaways',
  lessons: [
    'A small token set turned the rebrand to the logo colours into a find-and-replace, not a rewrite.',
    'The worst usability problem was a data bug, not a layout choice — the slot grid needed fixing before it needed styling.',
    'Contrast audits should change tokens, not components: one hex edit fixed every caption in the app.',
    'Building the case study from production components exposed drift that screenshots would have hidden.',
  ],
  nextTitle: 'Next steps',
  next: [
    'Validate the proto-persona with five patient interviews at the clinic front desk.',
    'Send automated WhatsApp reminders the day before each session.',
    'Wrap booking creation and the capacity decrement in a single Firestore transaction.',
    'Give patients a reschedule-or-cancel link in their confirmation message.',
    'Replace placeholder testimonials with verified Google reviews.',
  ],
  cta: {
    title: 'See it working, then book a real slot',
    text: 'Everything on this page is running in the app you are using right now.',
    primary: 'Open the app',
    secondary: 'Start booking',
  },
};

export const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'research', label: 'Research' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'storyboards', label: 'Storyboards' },
  { id: 'findings', label: 'Findings' },
  { id: 'screens', label: 'Screens' },
  { id: 'design-system', label: 'Design system' },
  { id: 'accessibility', label: 'Accessibility' },
  { id: 'takeaways', label: 'Takeaways' },
];
