import React from 'react';
import {
  AlertCircle, ArrowRight, CalendarPlus, CircleSlash, Heart, Image as ImageIcon, Layers,
  ListChecks, Loader2, MousePointer2, MousePointerClick, Phone as PhoneIcon, RotateCcw, Type,
} from 'lucide-react';
import { cn } from '../../lib/utils';

/* Rewake design-system section — colour ramps, type, spacing, radii, elevation,
   buttons, cards, inputs, badges, motion and patterns. All values transcribed
   from the approved design (they are the Rewake app's real theme tokens). */

const BASE = import.meta.env.BASE_URL;
const mono = { fontFamily: "'DM Mono', ui-monospace, monospace" };

function SubHeading({ children, note, right }: { children: React.ReactNode; note?: string; right?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h3 className="text-[19px] font-bold text-ink">{children}</h3>
        {note && <p className="text-ink-muted text-[14.5px] leading-relaxed mt-1.5 max-w-[680px]">{note}</p>}
      </div>
      {right}
    </div>
  );
}

function GroupLabel({ label, note }: { label: string; note: string }) {
  return (
    <p className="text-[15px] text-ink-muted">
      <span className="font-bold text-ink mr-2">{label}</span>{note}
    </p>
  );
}

/* ───────────── colour ───────────── */

type Swatch = { hex: string; token: string; use: string; border?: boolean };

const BRAND: Swatch[] = [
  { hex: '#ECF9FC', token: '--color-primary-50', use: 'Selected tiles, brand pills, summary strips', border: true },
  { hex: '#D0F1F8', token: '--color-primary-100', use: 'Pill borders, icon halos', border: true },
  { hex: '#6DD1E8', token: '--color-primary-300', use: 'Numbers and eyebrows on dark surfaces' },
  { hex: '#05A9CE', token: '--color-primary-500', use: 'Logo cyan — decorative only, never text' },
  { hex: '#048CAC', token: '--color-primary-600', use: 'Focus ring, flow connectors' },
  { hex: '#04708A', token: '--color-primary-700', use: 'Primary buttons, links, eyebrows' },
  { hex: '#06586C', token: '--color-primary-800', use: 'Hover state, pill text' },
];
const NEUTRALS: Swatch[] = [
  { hex: '#F7FAFB', token: '--color-paper', use: 'Page background', border: true },
  { hex: '#E3E7E9', token: '--color-ink-100', use: 'Card borders and dividers', border: true },
  { hex: '#627177', token: '--color-ink-400', use: 'Captions and hints' },
  { hex: '#4F5D64', token: '--color-ink-500', use: 'Secondary body copy' },
  { hex: '#2C353A', token: '--color-ink-700', use: 'Form labels, strong body' },
  { hex: '#0C1113', token: '--color-ink-900', use: 'Headings, footer, dark bands' },
];
const STATUS: Swatch[] = [
  { hex: '#047857', token: '--color-success-700', use: 'Completed bookings, active physios' },
  { hex: '#FBBF24', token: '--color-warning-400', use: 'Star ratings (paired with a text label)' },
  { hex: '#B45309', token: '--color-warning-700', use: 'Duplicate-booking badge text' },
  { hex: '#DC2626', token: '--color-danger-600', use: 'Error borders, retry button' },
  { hex: '#B91C1C', token: '--color-danger-700', use: 'Error messages, cancelled status' },
];
const TINTS: Swatch[] = [
  { hex: '#ECFDF5', token: '--color-success-50', use: 'Completed pill background', border: true },
  { hex: '#FFFBEB', token: '--color-warning-50', use: 'Duplicate badge background', border: true },
  { hex: '#FEF2F2', token: '--color-danger-50', use: 'Error alert and cancelled pill', border: true },
];

function SwatchGrid({ swatches }: { swatches: Swatch[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-4">
      {swatches.map((s) => (
        <div key={s.token} className="bg-white border border-line rounded-[14px] overflow-hidden">
          <div className={cn('h-20', s.border && 'border-b border-line/70')} style={{ background: s.hex }} />
          <div className="p-4">
            <p className="text-[15px] font-extrabold text-ink">{s.hex}</p>
            <p className="text-[11px] text-ink-muted mt-1" style={mono}>{s.token}</p>
            <p className="text-[12.5px] text-ink-muted leading-snug mt-2">{s.use}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Overlays() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <div className="relative aspect-[587/247] rounded-[16px] overflow-hidden">
        <img src={`${BASE}rewake/hero-clinic.jpg`} alt="Physio session at the Rewake clinic" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '50% 30%' }} />
        <div className="absolute inset-0 bg-linear-to-t from-[rgba(12,17,19,0.8)] via-[rgba(12,17,19,0.2)] to-transparent" />
        <div className="absolute left-6 bottom-4">
          <p className="text-white font-bold text-[17px]">Hero gradient</p>
          <p className="text-white/85 text-[12px] mt-1" style={mono}>from-ink-900/80 · via-ink-900/20 · to-transparent</p>
        </div>
      </div>
      {/* Aspect matches the crop 1:1 so the DOM panel covers the baked one exactly. */}
      <div className="relative aspect-[587/247] rounded-[16px] overflow-hidden">
        <img src={`${BASE}rewake/clinic-pediatric.jpg`} alt="Pediatric therapy zone at the clinic" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute left-[3.5%] right-[4.5%] top-[55%] bottom-[6%] rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 px-6 flex flex-col justify-center">
          <p className="text-white font-bold text-[16px]">Frosted glass</p>
          <p className="text-white/90 text-[12px] mt-1" style={mono}>bg-white/15 · backdrop-blur-md · border-white/30</p>
        </div>
      </div>
    </div>
  );
}

/* ───────────── typography ───────────── */

const TYPE_SCALE = [
  { role: 'Display', cls: 'text-6xl', spec: '3.75rem / 60px · 600 · 1.1 · 0', sample: 'Move better. Live pain-free.', sampleCls: 'font-display text-[60px] leading-[1.1] text-ink' },
  { role: 'Page title', cls: 'text-5xl', spec: '3rem / 48px · 600 · 1 · 0', sample: 'Book your session', sampleCls: 'font-display text-[48px] leading-none text-ink' },
  { role: 'Section title', cls: 'text-4xl', spec: '2.25rem / 36px · 600 · 1.11 · 0', sample: 'What our patients say', sampleCls: 'font-display text-[36px] leading-[1.11] text-ink' },
  { role: 'Card title', cls: 'text-lg', spec: '1.125rem / 18px · 800 · 1.56 · 0', sample: 'Post-Surgery Recovery', sampleCls: 'text-[18px] font-extrabold leading-[1.56] text-ink' },
  { role: 'Body', cls: 'text-base', spec: '1rem / 16px · 400 · 1.625 · 0', sample: 'Personalized physiotherapy in Pandikkad, Kerala.', sampleCls: 'text-[16px] leading-[1.625] text-ink' },
  { role: 'Caption', cls: 'text-sm', spec: '0.875rem / 14px · 400 · 1.43 · 0', sample: 'Showing availability for Thursday, October 1st', sampleCls: 'text-[14px] leading-[1.43] text-ink' },
  { role: 'Eyebrow', cls: 'text-xs', spec: '0.75rem / 12px · 700 · 1.33 · 0.1em', sample: 'Online booking', sampleCls: 'text-[12px] font-bold uppercase tracking-[0.1em] text-ink' },
  { role: 'Button', cls: 'text-sm', spec: '0.875rem / 14px · 700 · 1.43 · 0', sample: 'Confirm Booking', sampleCls: 'text-[14px] font-bold text-ink' },
];

function Typography() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white border border-line rounded-[16px] p-8">
          <p className="font-display text-[64px] leading-none text-ink">Aa</p>
          <p className="text-[17px] font-bold text-ink mt-8">Fraunces</p>
          <p className="text-[12px] text-ink-muted mt-1" style={mono}>--font-display</p>
          <p className="text-[14px] text-ink-muted leading-relaxed mt-3">A soft optical-size serif for headings — warm without feeling clinical.</p>
        </div>
        <div className="bg-white border border-line rounded-[16px] p-8">
          <p className="text-[64px] font-extrabold leading-none text-ink">Aa</p>
          <p className="text-[17px] font-bold text-ink mt-8">Plus Jakarta Sans</p>
          <p className="text-[12px] text-ink-muted mt-1" style={mono}>--font-sans</p>
          <p className="text-[14px] text-ink-muted leading-relaxed mt-3">A geometric sans with open counters that stays legible at 12px on low-DPI Android screens.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {([['Ag', 400, 'Regular · 400', 'Body copy'], ['Ag', 600, 'Semibold · 600', 'Display headings, nav links'], ['Ag', 700, 'Bold · 700', 'Buttons, labels, eyebrows'], ['Ag', 800, 'Extrabold · 800', 'Card titles, key values']] as const).map(([g, w, name, use]) => (
          <div key={name} className="bg-brand-tint border border-line/70 rounded-[14px] px-6 py-5">
            <p className="text-[26px] leading-none text-ink" style={{ fontWeight: w }}>{g}</p>
            <p className="text-[14px] font-bold text-ink mt-3">{name}</p>
            <p className="text-[12.5px] text-ink-muted mt-0.5">{use}</p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-line rounded-[14px] overflow-hidden mt-5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <thead>
              <tr className="bg-[#F4F6F7]">
                {['Role', 'Size · Weight · Line · Tracking', 'Sample'].map((h) => (
                  <th key={h} className="px-6 py-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TYPE_SCALE.map((r) => (
                <tr key={r.role} className="border-t border-line align-middle">
                  <td className="px-6 py-6 w-[18%]">
                    <p className="text-[14.5px] font-bold text-ink">{r.role}</p>
                    <p className="text-[11.5px] text-ink-muted mt-1" style={mono}>{r.cls}</p>
                  </td>
                  <td className="px-6 py-6 w-[26%] text-[12.5px] text-ink-muted">{r.spec}</td>
                  <td className="px-6 py-6"><span className={r.sampleCls}>{r.sample}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ───────────── spacing + radius + elevation ───────────── */

const SPACING: [string, number, string][] = [
  ['1', 4, 'Icon-to-text in badges'], ['2', 8, 'Icon gap inside buttons'], ['3', 12, 'Chip rows, list spacing'],
  ['4', 16, 'Input padding, page gutter on mobile'], ['5', 20, 'Compact card padding'], ['6', 24, 'Card grid gaps'],
  ['8', 32, 'Roomy card padding'], ['12', 48, 'Section header to content'], ['20', 80, 'Vertical section padding'],
];

function Spacing() {
  return (
    <div className="bg-white border border-line rounded-[16px] p-7 md:p-9 mt-6">
      <div className="space-y-4">
        {SPACING.map(([n, px, use]) => (
          <div key={n} className="grid grid-cols-[84px_1fr] sm:grid-cols-[84px_1fr_280px] items-center gap-4">
            <p className="text-[13.5px] text-ink-muted"><span className="font-bold text-ink">{n}</span> · {px}px</p>
            <div className="h-2.5 rounded-full bg-brand" style={{ width: Math.max(px, 5) }} />
            <p className="hidden sm:block text-[13px] text-ink-muted">{use}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const RADII: [string, string, string, string][] = [
  ['0.75rem / 12px', '--radius-xl', 'Inputs, icon badges, badges', 'rounded-xl'],
  ['1rem / 16px', '--radius-2xl', 'Cards, slot tiles, stat chips', 'rounded-2xl'],
  ['2rem / 32px', '--radius-4xl', 'Hero media, booking panel, CTA band', 'rounded-[32px]'],
  ['9999px', 'rounded-full', 'Buttons, pills, avatars', 'rounded-full'],
];

function Radii() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
      {RADII.map(([size, token, use, cls]) => (
        <div key={token} className="bg-white border border-line rounded-[16px] p-5">
          <div className={cn('h-20 bg-[#E8F7FB] border-[1.5px] border-[#2BA3C2]', cls)} />
          <p className="text-[15px] font-extrabold text-ink mt-4">{size}</p>
          <p className="text-[11.5px] text-ink-muted mt-1" style={mono}>{token}</p>
          <p className="text-[12.5px] text-ink-muted leading-snug mt-2">{use}</p>
        </div>
      ))}
    </div>
  );
}

const ELEVATION: [string, string, string, string, string][] = [
  ['0', 'Flat', 'border ink-100', 'Every resting card', 'border border-line'],
  ['1', 'Raised', '--shadow-sm', 'Step cards, active segment', 'border border-line/60 shadow-[0_1px_3px_rgba(12,17,19,0.08)]'],
  ['2', 'Pressable', '--shadow-lg', 'Primary buttons, card hover', 'shadow-[0_14px_28px_-8px_rgba(5,169,206,0.45)]'],
  ['3', 'Floating', '--shadow-xl', 'Stat chips, modals, booked screen', 'shadow-[0_18px_36px_-12px_rgba(12,17,19,0.28)]'],
  ['4', 'Hero', '--shadow-2xl', 'Hero photography, device frames', 'shadow-[0_30px_60px_-20px_rgba(12,17,19,0.38)]'],
];

function Elevation() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
      {ELEVATION.map(([n, name, token, use, cls]) => (
        <div key={n}>
          <div className={cn('h-[92px] bg-white rounded-[14px] grid place-items-center', cls)}>
            <span className="font-display text-[26px] text-ink">{n}</span>
          </div>
          <p className="text-[14.5px] font-bold text-ink mt-4">{name}</p>
          <p className="text-[11.5px] text-ink-muted mt-1" style={mono}>{token}</p>
          <p className="text-[12.5px] text-ink-muted leading-snug mt-1.5">{use}</p>
        </div>
      ))}
    </div>
  );
}

/* ───────────── buttons ───────────── */

type BtnVariant = 'primary' | 'secondary' | 'dark' | 'ghost' | 'inverse';
type BtnState = 'normal' | 'disabled' | 'loading';

const btnSizes = { sm: 'text-[12.5px] px-4 py-2 gap-1.5', md: 'text-[13px] px-5 py-2.5 gap-2', lg: 'text-[14px] px-6 py-3 gap-2' };

function btnClasses(variant: BtnVariant, state: BtnState) {
  if (state === 'normal') {
    return {
      primary: 'bg-brand text-white shadow-[0_10px_20px_-10px_rgba(4,112,138,0.7)]',
      secondary: 'bg-white border border-line text-ink',
      dark: 'bg-ink text-white',
      ghost: 'text-ink',
      inverse: 'bg-white text-ink',
    }[variant];
  }
  return {
    primary: 'bg-[#A9CDD7] text-white',
    secondary: 'bg-white border border-line/70 text-ink-muted/60',
    dark: 'bg-[#AFB5B8] text-white',
    ghost: 'text-ink-muted/60',
    inverse: 'bg-white/40 text-white/80',
  }[variant];
}

function DemoBtn({ variant, size = 'md', state = 'normal', arrow = false }: { variant: BtnVariant; size?: keyof typeof btnSizes; state?: BtnState; arrow?: boolean }) {
  return (
    <span className={cn('inline-flex items-center justify-center rounded-full font-bold leading-none whitespace-nowrap', btnSizes[size], btnClasses(variant, state))}>
      {state === 'loading' && <Loader2 size={13} className="animate-spin" />}
      {state === 'loading' ? 'Saving' : 'Book now'}
      {arrow && state === 'normal' && <ArrowRight size={14} />}
    </span>
  );
}

function Buttons() {
  const rows: BtnVariant[] = ['primary', 'secondary', 'dark', 'ghost', 'inverse'];
  const cols = ['Variant', 'Small', 'Medium', 'Large', 'Disabled', 'Loading'];
  return (
    <div className="bg-white border border-line rounded-[14px] overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] text-left">
          <thead>
            <tr className="bg-[#F4F6F7]">
              {cols.map((h) => <th key={h} className="px-6 py-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((v) => (
              <tr key={v} className={cn('border-t align-middle', v === 'inverse' ? 'bg-brand border-brand' : 'border-line')}>
                <td className={cn('px-6 py-6 text-[12.5px] w-[13%]', v === 'inverse' ? 'text-white/90' : 'text-ink-muted')} style={mono}>{v}</td>
                <td className="px-6 py-6"><DemoBtn variant={v} size="sm" /></td>
                <td className="px-6 py-6"><DemoBtn variant={v} size="md" /></td>
                <td className="px-6 py-6"><DemoBtn variant={v} size="lg" arrow /></td>
                <td className="px-6 py-6"><DemoBtn variant={v} size="md" state="disabled" /></td>
                <td className="px-6 py-6"><DemoBtn variant={v} size="md" state="loading" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ButtonStates() {
  const cards: [string, React.ReactNode][] = [
    ['Hover', <>Primary deepens from primary-700 to primary-800 over 150ms; secondary swaps its border to primary-400.</>],
    ['Focus', <>A 2px primary-600 outline with a 2px offset — 3.9:1 against white — on keyboard focus only.</>],
    ['Active', <>Every button scales to 0.98 while pressed, so taps register even before navigation.</>],
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr_1fr_1fr] gap-5 mt-5 items-stretch">
      {/* Aspect matches the crop 1:1; text and pill sit over their baked positions. */}
      <div className="relative aspect-[461/201] lg:aspect-auto lg:min-h-full rounded-[16px] overflow-hidden">
        <img src={`${BASE}rewake/clinic-pediatric-cta.jpg`} alt="Pediatric therapy session" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-[#06586C]/95 via-[#06586C]/35 to-transparent" />
        <div className="absolute left-6 bottom-5 right-5">
          <p className="text-white font-bold text-[16.5px]">Frosted variant</p>
          <p className="text-white/85 text-[13px] mt-1.5 leading-snug">Secondary action on photography or brand colour.</p>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/40 text-white text-[13px] font-semibold px-5 py-2.5 mt-4 leading-none">
            <PhoneIcon size={13} /> +91 90746 34870
          </span>
        </div>
      </div>
      {cards.map(([title, body]) => (
        <div key={title} className="bg-brand-tint border border-line/70 rounded-[16px] p-6">
          <p className="text-[15.5px] font-bold text-ink">{title}</p>
          <p className="text-[14px] text-ink-muted leading-relaxed mt-2">{body}</p>
        </div>
      ))}
    </div>
  );
}

/* ───────────── cards + inputs ───────────── */

function CardVariants() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
      <div className="bg-white border border-line rounded-[16px] p-6">
        <p className="text-[15.5px] font-bold text-ink">Surface</p>
        <p className="text-[14px] text-ink-muted leading-relaxed mt-2">White with a hairline border — the default for content.</p>
      </div>
      <div className="bg-brand-tint border border-line/70 rounded-[16px] p-6">
        <p className="text-[15.5px] font-bold text-ink">Soft</p>
        <p className="text-[14px] text-ink-muted leading-relaxed mt-2">Paper background — cards that sit on white sections.</p>
      </div>
      <div className="bg-brand-soft border border-[#D8EFF6] rounded-[16px] p-6">
        <p className="text-[15.5px] font-bold text-ink">Tint</p>
        <p className="text-[14px] text-ink-muted leading-relaxed mt-2">Brand tint — summaries, insights, selected context.</p>
      </div>
      <div className="bg-white border border-line rounded-[16px] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_36px_-16px_rgba(5,169,206,0.45)] cursor-pointer">
        <MousePointer2 size={17} className="text-brand" />
        <p className="text-[15.5px] font-bold text-ink mt-3">Interactive</p>
        <p className="text-[14px] text-ink-muted leading-relaxed mt-2">Lifts 4px with a tinted shadow on hover. Try it.</p>
      </div>
    </div>
  );
}

const inputCls = 'w-full rounded-xl border border-line bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-ink-muted/70 focus:outline-none focus:border-brand';

function Inputs() {
  const chips: [string, boolean][] = [['Mon', false], ['Tue', true], ['Wed', false], ['Thu', true], ['Fri', false], ['Sat', true]];
  return (
    <div className="bg-white border border-line rounded-[16px] p-7 md:p-9 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
        <div>
          <label className="block text-[14px] font-bold text-ink mb-2">Full Name</label>
          <input className={inputCls} placeholder="Your full name" readOnly />
        </div>
        <div>
          <label className="block text-[14px] font-bold text-ink mb-2">Phone Number</label>
          <div className="relative">
            <PhoneIcon size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input className={cn(inputCls, 'pl-10')} placeholder="+91 98765 43210" readOnly />
          </div>
          <p className="text-[12.5px] text-ink-muted mt-2">We'll send your confirmation on WhatsApp.</p>
        </div>
        <div>
          <label className="block text-[14px] font-bold text-ink mb-2">Phone Number (error)</label>
          <div className="relative">
            <PhoneIcon size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input className={cn(inputCls, 'pl-10 border-[#DC2626] focus:border-[#DC2626]')} defaultValue="98765" readOnly />
          </div>
          <p className="flex items-center gap-1.5 text-[13px] text-[#B91C1C] mt-2"><AlertCircle size={13} /> Enter a 10-digit mobile number, e.g. 98765 43210.</p>
        </div>
        <div>
          <label className="block text-[14px] font-bold text-ink mb-2">Additional Notes <span className="font-normal text-ink-muted">(optional)</span></label>
          <textarea className={cn(inputCls, 'resize-y min-h-[96px]')} placeholder="Any specific details you'd like to share..." readOnly />
        </div>
        <div>
          <p className="text-[14px] font-bold text-ink mb-3">Choice chips</p>
          <div className="flex flex-wrap gap-2">
            {chips.map(([d, on]) => (
              <span key={d} className={cn('inline-flex items-center rounded-full px-4 py-2 text-[13.5px] font-semibold leading-none', on ? 'bg-brand text-white' : 'bg-white border border-line text-ink')}>{d}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[14px] font-bold text-ink mb-3">Segmented control</p>
          <span className="inline-flex items-center rounded-full border border-line bg-[#F1F4F5] p-1">
            <span className="px-4 py-1.5 text-[13.5px] font-semibold text-ink-muted leading-none">Daily</span>
            <span className="px-4 py-1.5 text-[13.5px] font-bold text-brand bg-white rounded-full shadow-[0_2px_6px_rgba(12,17,19,0.12)] leading-none">Weekly</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ───────────── badges, pills, icons ───────────── */

function BadgesPillsIcons() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <div className="bg-white border border-line rounded-[16px] p-6">
        <p className="text-[15.5px] font-bold text-ink">Badge</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="inline-flex items-center rounded-full bg-brand text-white text-[12px] font-bold px-3 py-1.5 leading-none">Solid</span>
          <span className="inline-flex items-center rounded-full bg-brand-soft text-brand-dark text-[12px] font-bold px-3 py-1.5 leading-none">Soft</span>
          <span className="inline-flex items-center rounded-full bg-white border border-line text-ink text-[12px] font-bold px-3 py-1.5 leading-none">Outline</span>
          <span className="inline-flex items-center rounded-full bg-ink text-white text-[12px] font-bold px-3 py-1.5 leading-none">Dark</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFBEB] border border-[#F2E3B3] text-[#B45309] text-[12px] font-bold px-3 py-1.5 leading-none"><Heart size={11} /> Warning</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="inline-flex items-center rounded-full bg-brand-soft text-brand-dark text-[11px] font-bold px-2.5 py-1 leading-none">Small</span>
          <span className="inline-flex items-center rounded-full bg-brand-soft text-brand-dark text-[12.5px] font-bold px-3.5 py-2 leading-none">Medium</span>
        </div>
      </div>
      <div className="bg-white border border-line rounded-[16px] p-6">
        <p className="text-[15.5px] font-bold text-ink">Status pill</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="inline-flex items-center rounded-full bg-brand-soft text-brand-dark text-[11px] font-bold tracking-[0.06em] px-3 py-1.5 leading-none">CONFIRMED</span>
          <span className="inline-flex items-center rounded-full bg-[#ECFDF5] text-[#047857] text-[11px] font-bold tracking-[0.06em] px-3 py-1.5 leading-none">COMPLETED</span>
          <span className="inline-flex items-center rounded-full bg-[#FEF2F2] border border-[#F6CBCB] text-[#B91C1C] text-[11px] font-bold tracking-[0.06em] px-3 py-1.5 leading-none">CANCELLED</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] text-[#047857] text-[11px] font-bold tracking-[0.06em] px-3 py-1.5 leading-none"><span className="w-1.5 h-1.5 rounded-full bg-current" /> ACTIVE</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F3F4] text-ink-muted text-[11px] font-bold tracking-[0.06em] px-3 py-1.5 leading-none"><span className="w-1.5 h-1.5 rounded-full bg-current" /> INACTIVE</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft text-brand-dark text-[12px] font-semibold px-3 py-1.5 leading-none"><span className="w-1.5 h-1.5 rounded-full bg-brand" /> Now accepting new patients</span>
        </div>
      </div>
      <div className="bg-white border border-line rounded-[16px] p-6">
        <p className="text-[15.5px] font-bold text-ink">Icons · lucide-react</p>
        <div className="flex items-end gap-5 mt-4 text-brand">
          {[16, 20, 24, 32].map((s) => (
            <span key={s} className="flex flex-col items-center gap-1.5">
              <CalendarPlus size={s} />
              <span className="text-[11px] text-ink-muted">{s}</span>
            </span>
          ))}
        </div>
        <div className="flex items-end gap-3 mt-5">
          <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-brand-soft text-brand"><CalendarPlus size={16} /></span>
          <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand text-white"><CalendarPlus size={19} /></span>
          <span className="grid place-items-center w-12 h-12 rounded-[14px] bg-ink text-white"><CalendarPlus size={21} /></span>
        </div>
      </div>
    </div>
  );
}

/* ───────────── motion ───────────── */

function Motion() {
  const [k, setK] = React.useState(0);
  const cards: { demo: React.ReactNode; token: string; spec: string; use: string; source: string }[] = [
    {
      demo: <span className="inline-flex items-center rounded-full bg-white border border-line text-ink text-[13px] font-semibold px-4 py-2 leading-none transition-all duration-150 hover:border-brand hover:text-brand hover:-translate-y-0.5 cursor-pointer">Hover me</span>,
      token: '--default-transition-duration', spec: '150ms · cubic-bezier(0.4, 0, 0.2, 1)', use: 'Hover colour, border and lift on every interactive element', source: 'CSS',
    },
    {
      demo: <span key={`fade-${k}`} className="rw-fade-up inline-flex items-center rounded-full bg-brand text-white text-[13px] font-bold px-4 py-2 leading-none">Fade up</span>,
      token: 'motionTokens.enter', spec: '600ms · ease-out (0, 0, 0.2, 1)', use: 'Hero and About entrance: fade up 16px', source: 'src/lib/motion.ts',
    },
    {
      demo: (
        <span key={`stag-${k}`} className="flex gap-2">
          {[0, 1, 2, 3].map((i) => <span key={i} className="rw-fade-up w-9 h-9 rounded-[10px] bg-brand" style={{ animationDelay: `${i * 80}ms` }} />)}
        </span>
      ),
      token: 'motionTokens.stagger', spec: '80ms per item', use: 'Physio cards cascade in on the team page', source: 'src/lib/motion.ts',
    },
    {
      demo: <Loader2 size={28} className="animate-spin text-brand" />,
      token: '--animate-spin', spec: '1s linear infinite', use: 'Loading slots, saving a booking, signing in', source: 'CSS',
    },
  ];
  return (
    <>
      <SubHeading
        note="Four tokens. With prefers-reduced-motion set, every one of them collapses to an instant change."
        right={
          <button type="button" onClick={() => setK(k + 1)} className="inline-flex items-center gap-2 rounded-full bg-white border border-line text-ink text-[13.5px] font-semibold px-5 py-2.5 leading-none hover:border-brand hover:text-brand transition-colors">
            <RotateCcw size={13} /> Replay demos
          </button>
        }
      >
        Motion
      </SubHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {cards.map((c) => (
          <div key={c.token} className="bg-white border border-line rounded-[16px] p-5">
            <div className="h-[96px] rounded-[12px] bg-brand-tint border border-line/60 grid place-items-center">{c.demo}</div>
            <p className="text-[12px] text-ink mt-4" style={mono}>{c.token}</p>
            <p className="text-[12px] text-ink-muted mt-1" style={mono}>{c.spec}</p>
            <p className="text-[13px] text-ink-muted leading-relaxed mt-2.5">{c.use}</p>
            <p className="text-[12px] text-ink-muted/80 mt-2.5">Source: {c.source}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ───────────── patterns + breakpoints ───────────── */

const PATTERNS = [
  { icon: Type, title: 'Eyebrow + statement heading', body: 'A 12px uppercase eyebrow over a Fraunces headline opens every section, on every page.' },
  { icon: Layers, title: 'Icon card grid', body: 'Services, values and contact methods share one card: icon badge, extrabold title, one line.' },
  { icon: ImageIcon, title: 'Photo with floating chips', body: 'Real clinic photography carries white stat chips at its corners to add facts without clutter.' },
  { icon: MousePointerClick, title: 'Selection tile with check', body: 'Physio choices and time slots use a 2px border that turns brand on select, plus a check.' },
  { icon: ListChecks, title: 'Summary before commit', body: 'A tinted strip restates date, time and physio above the final form, with a Change link.' },
  { icon: CircleSlash, title: 'Empty state with a way back', body: 'When nothing is available, say so plainly and offer the next action and the phone number.' },
];

function Patterns() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {PATTERNS.map((p) => (
        <div key={p.title} className="flex items-start gap-4 bg-brand-tint border border-line/70 rounded-[16px] p-6">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-white border border-line text-brand shrink-0"><p.icon size={17} /></span>
          <span>
            <span className="block text-[15px] font-bold text-ink leading-snug">{p.title}</span>
            <span className="block text-[13.5px] text-ink-muted leading-relaxed mt-1.5">{p.body}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

const BREAKPOINTS: [string, string, string][] = [
  ['base', '0', 'Single column, bottom nav with a raised Book button, 16px gutters.'],
  ['sm', '640px', 'Service cards go two-up; hero buttons sit side by side.'],
  ['md', '768px', 'Steps, testimonials and footer go three- and four-up.'],
  ['lg', '1024px', 'Desktop nav replaces the bottom nav; hero splits into two columns.'],
  ['xl', '1280px', 'Content caps at max-w-7xl (80rem) and centres.'],
];

const STEPS = [
  { n: 1, title: 'Pick a date & physio', body: 'Choose a day that suits you and your preferred therapist — or let us assign one.' },
  { n: 2, title: 'Choose a time slot', body: 'See real-time availability and grab a slot that fits your schedule.' },
  { n: 3, title: 'Confirm your details', body: 'Just your name and phone number — no account or registration needed.' },
];

function Breakpoints() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 mt-6 items-start">
      <div className="bg-white border border-line rounded-[14px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="bg-[#F4F6F7]">
                {['Name', 'Min width', 'What changes'].map((h) => <th key={h} className="px-6 py-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {BREAKPOINTS.map(([name, min, what]) => (
                <tr key={name} className="border-t border-line align-top">
                  <td className="px-6 py-5 text-[13px] text-ink w-[16%]" style={mono}>{name}</td>
                  <td className="px-6 py-5 text-[14px] text-ink w-[20%]">{min}</td>
                  <td className="px-6 py-5 text-[14px] text-ink-muted leading-relaxed">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-brand-tint border border-line/70 rounded-[16px] p-7">
        <p className="text-[16px] font-bold text-ink">Process step · StepItem</p>
        <p className="text-[13.5px] text-ink-muted leading-relaxed mt-1.5">Card variant on the home page; inline variant wherever space is tight.</p>
        <div className="bg-white rounded-[14px] p-5 mt-5 shadow-[0_10px_24px_-16px_rgba(12,17,19,0.25)]">
          <div className="flex items-center gap-3.5">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-brand text-white text-[14px] font-bold shrink-0">1</span>
            <p className="text-[15.5px] font-bold text-ink">{STEPS[0].title}</p>
          </div>
          <p className="text-[13.5px] text-ink-muted leading-relaxed mt-3">{STEPS[0].body}</p>
        </div>
        {STEPS.slice(1).map((s) => (
          <div key={s.n} className="flex items-start gap-3.5 mt-5 px-1">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-brand text-white text-[14px] font-bold shrink-0">{s.n}</span>
            <span>
              <span className="block text-[15px] font-bold text-ink">{s.title}</span>
              <span className="block text-[13.5px] text-ink-muted leading-relaxed mt-1">{s.body}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────── section body ───────────── */

export default function DesignSystemContent() {
  return (
    <>
      <div className="mt-12">
        <SubHeading note="One brand hue, one neutral ramp, three status hues. Hex values below are read from the running stylesheet.">Colour</SubHeading>
      </div>
      <div className="mt-8"><GroupLabel label="Brand" note="One accent hue, anchored to the logo cyan #05A9CE. Text and buttons use 700 and up." /><SwatchGrid swatches={BRAND} /></div>
      <div className="mt-10"><GroupLabel label="Neutrals" note="One cool ramp anchored to the logo near-black #050708. ink-400 is the lightest text step." /><SwatchGrid swatches={NEUTRALS} /></div>
      <div className="mt-10"><GroupLabel label="Status" note="Three hues, each with one text-safe shade." /><SwatchGrid swatches={STATUS} /></div>
      <div className="mt-10"><GroupLabel label="Status tints" note="Backgrounds for status pills and alerts." /><SwatchGrid swatches={TINTS} /></div>
      <Overlays />

      <div className="mt-16">
        <SubHeading note="Two families, four weights, eight roles. Every sample below renders with the exact classes the product uses.">Typography</SubHeading>
      </div>
      <Typography />

      <div className="mt-16">
        <SubHeading note="Every gap is a multiple of --spacing (0.25rem). Nine steps cover the whole product.">Spacing</SubHeading>
      </div>
      <Spacing />

      <div className="mt-16">
        <SubHeading note="Three radii plus pill. Anything else was folded into these during the redesign.">Border radius</SubHeading>
      </div>
      <Radii />

      <div className="mt-16">
        <SubHeading note="Borders first, no shadow by default. A shadow means the element floats above the page or is the one thing to press.">Elevation</SubHeading>
      </div>
      <Elevation />

      <div className="mt-16">
        <SubHeading note="Six variants, three sizes, plus disabled and loading states — all the production Button component.">Buttons</SubHeading>
      </div>
      <Buttons />
      <ButtonStates />

      <div className="mt-16">
        <SubHeading note="Four variants of one component; radius and padding never change between them.">Cards</SubHeading>
      </div>
      <CardVariants />

      <div className="mt-16">
        <SubHeading note="The same TextField, TextArea, ChoiceChip and SegmentedControl used in booking, contact and admin.">Inputs</SubHeading>
      </div>
      <Inputs />

      <div className="mt-16">
        <SubHeading note="Badges label things; pills report status; icons come from one library at four sizes.">Badges, pills and icons</SubHeading>
      </div>
      <BadgesPillsIcons />

      <div className="mt-16"><Motion /></div>

      <div className="mt-16">
        <SubHeading note="Six layouts recur across every page; new screens are assembled from these, not invented.">Design patterns</SubHeading>
      </div>
      <Patterns />

      <div className="mt-16">
        <SubHeading note="Tailwind's default breakpoints, mobile-first. The booking flow is designed at base width and only ever gains columns.">Layout and breakpoints</SubHeading>
      </div>
      <Breakpoints />
    </>
  );
}
