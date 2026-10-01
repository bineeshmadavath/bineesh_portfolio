import React from 'react';
import {
  Activity, ArrowRight, Baby, Calendar, CalendarCheck2, CalendarPlus, Check, ChevronLeft, Clock,
  Dumbbell, ExternalLink, HeartPulse, Home as HomeIcon, Info, Phone as PhoneIcon, Printer, Quote,
  Star, Stethoscope, User, Users,
} from 'lucide-react';
import { cn } from '../../lib/utils';

/* Rewake "Screens" section pieces — desktop capture frame, the six-phone mobile
   journey (rebuilt in DOM so it stays crisp) and the component specimens.
   Utilities for this folder are generated via @source in greeneye.css. */

const BASE = import.meta.env.BASE_URL;
const HERO_IMG = `${BASE}rewake/hero-clinic.jpg`;
const ARROW = '#048CAC'; // dashed journey connectors

/* ───────────── phone chrome (gallery size: 230px wide) ───────────── */

function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('relative w-[230px] shrink-0 aspect-[9/19.6] rounded-[34px] border-[7px] border-[#0C1113] bg-white overflow-hidden flex flex-col shadow-[0_30px_60px_-28px_rgba(12,17,19,0.5)]', className)}>
      {children}
    </div>
  );
}

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={cn('relative h-8 shrink-0 flex items-end justify-between px-4 pb-1 text-[9px] font-semibold', dark ? 'bg-[#0C1113] text-white' : 'text-ink')}>
      <span>9:41</span>
      <span className={cn('absolute left-1/2 -translate-x-1/2 top-1.5 w-16 h-4 rounded-full', dark ? 'bg-black border border-white/15' : 'bg-[#0C1113]')} />
      <span className="flex items-center gap-0.5">
        <span className="w-[3px] h-1.5 rounded-[1px] bg-current" /><span className="w-[3px] h-2 rounded-[1px] bg-current" /><span className="w-[3px] h-2.5 rounded-[1px] bg-current" />
        <span className="ml-0.5 w-4 h-2 rounded-[2px] border border-current" />
      </span>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="shrink-0 flex items-center justify-between px-3.5 pt-1.5">
      <span className="flex items-center gap-1.5">
        <span className="grid place-items-center w-5 h-5 rounded-full bg-brand text-white"><HeartPulse size={11} /></span>
        <span className="text-[9.5px] font-extrabold tracking-[0.06em] text-ink">REWAKE</span>
      </span>
      <span className="flex items-center gap-1 rounded-full bg-brand-dark text-white text-[7.5px] font-semibold px-2.5 py-1.5 leading-none">
        <CalendarPlus size={7.5} /> Book Now
      </span>
    </div>
  );
}

function BottomNav() {
  const side = [
    { icon: HomeIcon, label: 'Home' },
    { icon: Info, label: 'About' },
  ];
  const side2 = [
    { icon: Users, label: 'Physios' },
    { icon: PhoneIcon, label: 'Contact' },
  ];
  return (
    <div className="mt-auto shrink-0 bg-white border-t border-line px-4 pt-1.5 pb-2 flex items-end justify-between">
      {side.map((n) => (
        <span key={n.label} className="flex flex-col items-center gap-0.5 text-ink-muted"><n.icon size={10} /><span className="text-[5.5px] font-medium">{n.label}</span></span>
      ))}
      <span className="flex flex-col items-center gap-0.5 -mt-4">
        <span className="grid place-items-center w-7 h-7 rounded-full bg-brand text-white shadow-[0_4px_10px_-2px_rgba(4,112,138,0.5)]"><CalendarPlus size={12} /></span>
        <span className="text-[5.5px] font-semibold text-brand">Book</span>
      </span>
      {side2.map((n) => (
        <span key={n.label} className="flex flex-col items-center gap-0.5 text-ink-muted"><n.icon size={10} /><span className="text-[5.5px] font-medium">{n.label}</span></span>
      ))}
    </div>
  );
}

function Stepper({ step }: { step: number }) {
  const items: [string, number][] = [['Date & Physio', 1], ['Time Slot', 2], ['Your Details', 3]];
  return (
    <div className="shrink-0 flex items-start justify-center mt-3">
      {items.map(([label, n], idx) => (
        <React.Fragment key={label}>
          {idx > 0 && <span className="w-5 h-px bg-line mt-[9px]" />}
          <span className="flex flex-col items-center gap-1 w-[54px]">
            <span
              className={cn(
                'grid place-items-center w-[18px] h-[18px] rounded-full text-[8px] font-bold',
                n < step && 'bg-brand text-white',
                n === step && 'border-[1.5px] border-brand text-brand bg-white',
                n > step && 'border border-line text-ink-muted bg-white',
              )}
            >
              {n < step ? <Check size={9} strokeWidth={3.5} /> : n}
            </span>
            <span className={cn('text-[5.8px] leading-none', n <= step ? 'font-semibold text-ink' : 'text-ink-muted')}>{label}</span>
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

const ScreenTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-display text-[14.5px] leading-tight text-ink text-center mt-2.5">{children}</h4>
);

/* ───────────── the six journey screens ───────────── */

function HomeScreen() {
  const treats = [
    { icon: Dumbbell, label: 'Sports Injury' },
    { icon: Stethoscope, label: 'Post-Surgery' },
    { icon: Activity, label: 'Chronic Pain' },
    { icon: Baby, label: 'Pediatric' },
  ];
  return (
    <Frame>
      <StatusBar />
      <AppHeader />
      <div className="flex-1 min-h-0 flex flex-col px-3.5 pt-3 text-center">
        <p className="text-[6.2px] font-bold uppercase tracking-[0.16em] text-brand">Now accepting new patients</p>
        <h4 className="font-display text-[17px] leading-[1.12] text-ink mt-1">
          Move better.<br />Live <em className="italic text-brand">pain-free.</em>
        </h4>
        <p className="text-[7px] text-ink-muted leading-snug mt-1 px-3">Book a session with our certified physios in under a minute.</p>
        <span className="flex items-center justify-center gap-1 rounded-full bg-brand text-white text-[8.5px] font-semibold py-2 mt-2.5 leading-none">
          Book an Appointment <ArrowRight size={8} />
        </span>
        <div className="relative rounded-[10px] overflow-hidden mt-2.5 h-[78px] shrink-0">
          <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '62% 30%' }} />
          <span className="absolute left-1.5 bottom-1.5 inline-flex items-center gap-0.5 rounded-full bg-white px-2 py-[3px] text-[6px] font-semibold text-ink leading-none">
            <CalendarCheck2 size={6} className="text-brand" /> Same-week slots
          </span>
        </div>
        <p className="text-[6.2px] font-bold uppercase tracking-[0.16em] text-brand mt-3">What we treat</p>
        <div className="grid grid-cols-2 gap-1.5 mt-1.5">
          {treats.map((t) => (
            <span key={t.label} className="flex items-center gap-1 bg-white border border-line rounded-[8px] px-2 py-2 text-[6.5px] font-semibold text-ink leading-none">
              <t.icon size={7.5} className="text-brand shrink-0" /> {t.label}
            </span>
          ))}
        </div>
      </div>
      <BottomNav />
    </Frame>
  );
}

function DatePhysioScreen() {
  const dates: [string, string, string, boolean][] = [
    ['WED', '30', 'Today', false], ['THU', '1', 'Oct', true], ['FRI', '2', 'Oct', false], ['SAT', '3', 'Oct', false],
    ['MON', '5', 'Oct', false], ['TUE', '6', 'Oct', false], ['WED', '7', 'Oct', false],
  ];
  const physios = [
    { initials: 'SJ', name: 'Dr. Sarah Johnson', sub: 'Sports Injury Specialist' },
    { initials: 'MC', name: 'Dr. Michael Chen', sub: 'Neurological Rehabilitation' },
  ];
  return (
    <Frame>
      <StatusBar />
      <AppHeader />
      <Stepper step={1} />
      <div className="flex-1 min-h-0 flex flex-col px-3.5">
        <ScreenTitle>When would you like to come in?</ScreenTitle>
        <p className="text-[6.5px] font-semibold text-ink-muted text-center mt-2">Choose a date</p>
        <div className="grid grid-cols-4 gap-1 mt-1">
          {dates.map(([d, n, sub, sel]) => (
            <span key={d + n} className={cn('flex flex-col items-center rounded-[8px] border py-1.5 leading-none', sel ? 'bg-brand border-brand text-white' : 'bg-white border-line')}>
              <span className={cn('text-[5px] font-bold tracking-[0.08em]', sel ? 'text-white/80' : 'text-ink-muted')}>{d}</span>
              <span className="text-[10px] font-bold mt-0.5">{n}</span>
              <span className={cn('text-[5px] mt-0.5', sel ? 'text-white/80' : 'text-ink-muted')}>{sub}</span>
            </span>
          ))}
        </div>
        <p className="text-[6.5px] font-semibold text-ink-muted text-center mt-2.5">Choose a physio</p>
        <div className="flex items-center gap-1.5 rounded-[9px] border-[1.5px] border-brand bg-white px-2 py-1.5 mt-1">
          <span className="grid place-items-center w-4 h-4 rounded-full bg-brand-soft text-brand shrink-0"><Users size={8} /></span>
          <span className="flex-1 text-left leading-tight">
            <span className="block text-[7px] font-bold text-ink">Any available physio</span>
            <span className="block text-[5.5px] text-ink-muted">We'll match you with the best fit</span>
          </span>
          <Check size={9} className="text-brand" strokeWidth={3} />
        </div>
        {physios.map((p) => (
          <div key={p.initials} className="flex items-center gap-1.5 rounded-[9px] border border-line bg-white px-2 py-1.5 mt-1">
            <span className="grid place-items-center w-4 h-4 rounded-full bg-brand-deep text-white text-[5px] font-bold shrink-0">{p.initials}</span>
            <span className="flex-1 text-left leading-tight">
              <span className="block text-[7px] font-bold text-ink">{p.name}</span>
              <span className="block text-[5.5px] text-ink-muted">{p.sub}</span>
            </span>
          </div>
        ))}
        <span className="self-end inline-flex items-center gap-1 rounded-full bg-brand text-white text-[7.5px] font-semibold px-3 py-1.5 mt-2.5 leading-none">
          Choose a Time <ArrowRight size={7} />
        </span>
      </div>
      <BottomNav />
    </Frame>
  );
}

function TimeSlotScreen() {
  const slots: [string, string, string, 'open' | 'full' | 'selected'][] = [
    ['09:00', 'until 10:30', '3 LEFT', 'open'],
    ['10:30', 'until 12:00', 'FULLY BOOKED', 'full'],
    ['12:00', 'until 13:30', '2 LEFT', 'open'],
    ['13:30', 'until 15:00', '3 LEFT', 'open'],
    ['15:00', 'until 16:30', '1 LEFT', 'selected'],
  ];
  return (
    <Frame>
      <StatusBar />
      <AppHeader />
      <Stepper step={2} />
      <div className="flex-1 min-h-0 flex flex-col px-3.5">
        <ScreenTitle>Pick a time slot</ScreenTitle>
        <p className="text-[6.3px] text-ink-muted text-center mt-1.5">Showing availability for Thursday, October 1st</p>
        <div className="grid grid-cols-2 gap-1.5 mt-2">
          {slots.map(([t, until, badge, state]) => (
            <span
              key={t}
              className={cn(
                'flex flex-col items-center rounded-[10px] border px-1 py-2.5 leading-none',
                state === 'open' && 'bg-white border-line',
                state === 'full' && 'bg-[#F4F6F7] border-line/60',
                state === 'selected' && 'bg-brand border-brand text-white py-3.5',
              )}
            >
              <span className={cn('text-[11px] font-bold', state === 'full' && 'text-ink-muted/70')}>{t}</span>
              <span className={cn('text-[5.5px] mt-1', state === 'selected' ? 'text-white/75' : 'text-ink-muted/80')}>{until}</span>
              <span
                className={cn(
                  'rounded-full px-1.5 py-[2.5px] text-[5px] font-bold tracking-[0.06em] mt-1.5',
                  state === 'open' && 'bg-brand-soft text-brand',
                  state === 'full' && 'bg-[#E7EAEC] text-ink-muted',
                  state === 'selected' && 'bg-white/20 text-white',
                )}
              >
                {badge}
              </span>
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="inline-flex items-center gap-0.5 text-[7px] font-semibold text-ink-muted"><ChevronLeft size={7} /> Back</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand text-white text-[7.5px] font-semibold px-3 py-1.5 leading-none">
            Your Details <ArrowRight size={7} />
          </span>
        </div>
      </div>
      <BottomNav />
    </Frame>
  );
}

function DetailsScreen() {
  return (
    <Frame>
      <StatusBar />
      <AppHeader />
      <Stepper step={3} />
      <div className="flex-1 min-h-0 flex flex-col px-3.5">
        <ScreenTitle>Almost done — your details</ScreenTitle>
        <div className="rounded-[9px] bg-brand-soft px-2.5 py-2 mt-2 leading-tight">
          <span className="flex items-center gap-1 text-[6.5px] font-semibold text-ink">
            <Calendar size={6.5} className="text-brand" /> Thu, Oct 1st&nbsp;&nbsp;<Clock size={6.5} className="text-brand" /> 15:00 – 16:30
          </span>
          <span className="flex items-center gap-1 text-[6.5px] font-semibold text-ink mt-1">
            <User size={6.5} className="text-brand" /> Any available physio
          </span>
        </div>
        <p className="text-[6.3px] font-bold text-ink text-center mt-2.5">Full Name</p>
        <span className="flex items-center gap-1.5 rounded-[8px] border border-line bg-white px-2 py-1.5 mt-1 text-[7px] text-ink">
          <User size={7} className="text-ink-muted" /> Shameera K.
        </span>
        <p className="text-[6.3px] font-bold text-ink text-center mt-2">Phone Number</p>
        <span className="flex items-center gap-1.5 rounded-[8px] border border-line bg-white px-2 py-1.5 mt-1 text-[7px] text-ink">
          <PhoneIcon size={7} className="text-ink-muted" /> 98765 43210
        </span>
        <p className="text-[5.5px] text-ink-muted text-center mt-1">We'll send your confirmation on WhatsApp.</p>
        <p className="text-[6.3px] font-bold text-ink text-center mt-2">Ailment / Condition</p>
        <span className="flex items-center rounded-[8px] border border-line bg-white px-2 py-1.5 mt-1 text-[7px] text-ink">Knee pain after a fall</span>
        <div className="flex items-center justify-between mt-3">
          <span className="inline-flex items-center gap-0.5 text-[7px] font-semibold text-ink-muted"><ChevronLeft size={7} /> Back</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-dark text-white text-[7.5px] font-semibold px-3 py-1.5 leading-none">
            <Check size={7} strokeWidth={3} /> Confirm Booking
          </span>
        </div>
      </div>
      <BottomNav />
    </Frame>
  );
}

function BookedScreen() {
  const rows = [
    ['Patient', 'Shameera K.'],
    ['Date', 'Thursday, October 1st, 2026'],
    ['Time', '15:00 – 16:30'],
    ['Physiotherapist', 'Any Available Physio'],
    ['Condition', 'Knee pain after a fall'],
  ];
  return (
    <Frame>
      <StatusBar />
      <AppHeader />
      <div className="flex-1 min-h-0 flex flex-col px-3.5 pt-5">
        <span className="self-center grid place-items-center w-9 h-9 rounded-full bg-brand-soft text-brand"><Check size={16} strokeWidth={3} /></span>
        <h4 className="font-display text-[16px] text-ink text-center mt-2.5">You're booked!</h4>
        <p className="text-[6.5px] text-ink-muted text-center mt-1">See you soon.</p>
        <div className="rounded-[10px] border border-line bg-[#F7FAFB] px-3 py-2.5 mt-3 text-left">
          <p className="text-[5.8px] font-bold uppercase tracking-[0.14em] text-ink-muted">Appointment details</p>
          {rows.map(([k, v]) => (
            <div key={k} className="mt-1.5 leading-tight">
              <p className="text-[5.2px] font-semibold uppercase tracking-[0.12em] text-ink-muted">{k}</p>
              <p className="text-[7px] font-semibold text-ink mt-[1px]">{v}</p>
            </div>
          ))}
        </div>
        <span className="flex items-center justify-center gap-1 rounded-full bg-white border border-line text-ink text-[7.5px] font-semibold py-2 mt-3 leading-none">
          <Printer size={7} /> Print Details
        </span>
        <span className="flex items-center justify-center rounded-full bg-brand text-white text-[7.5px] font-semibold py-2 mt-1.5 leading-none">Return Home</span>
      </div>
    </Frame>
  );
}

function WhatsAppScreen() {
  return (
    <Frame>
      <StatusBar dark />
      <div className="shrink-0 bg-[#0C1113] flex items-center gap-1.5 px-3 pb-2 pt-0.5">
        <ChevronLeft size={9} className="text-white/80" />
        <span className="grid place-items-center w-5 h-5 rounded-full bg-brand text-white"><HeartPulse size={11} /></span>
        <span className="leading-tight">
          <span className="block text-[7.5px] font-bold text-white">Rewake Physio &amp; Rehab</span>
          <span className="block text-[5.5px] text-white/60">+91 90746 34870</span>
        </span>
      </div>
      <div className="flex-1 min-h-0 bg-[#F0F2F3] px-3 pt-3 flex flex-col">
        <span className="self-center rounded-[5px] bg-white px-2 py-1 text-[5.5px] font-semibold tracking-[0.08em] text-ink-muted leading-none">TODAY</span>
        <div className="self-start bg-white rounded-[9px] rounded-tl-[3px] px-2.5 py-2 mt-3 max-w-[82%] shadow-[0_1px_2px_rgba(12,17,19,0.08)]">
          <p className="text-[6.5px] text-ink/90 leading-[1.6]">
            Hello Shameera K.,<br /><br />
            Your physiotherapy appointment is confirmed.<br /><br />
            Date: 2026 · 10 · 01<br />
            Time: 15:00<br />
            Physio: Any Available Physio<br /><br />
            Please reply if any change is needed.
          </p>
          <p className="text-[5px] text-ink-muted text-right mt-1">18:04</p>
        </div>
        <div className="self-end bg-brand-soft rounded-[9px] rounded-tr-[3px] px-2.5 py-2 mt-3 max-w-[75%]">
          <p className="text-[6.5px] text-ink/90 leading-[1.6]">Thank you! See you Thursday 🙏</p>
          <p className="text-[5px] text-ink-muted text-right mt-0.5">18:06 <span className="text-brand">✓✓</span></p>
        </div>
      </div>
    </Frame>
  );
}

/* ───────────── journey layout with dashed connectors ───────────── */

function JourneyArrow() {
  return (
    <div className="hidden lg:flex flex-1 items-center h-[488px] px-2.5">
      <div className="relative w-full border-t-2 border-dashed" style={{ borderColor: ARROW }}>
        <span className="absolute -right-1 -top-[5px] w-0 h-0 border-y-[4.5px] border-y-transparent border-l-[8px]" style={{ borderLeftColor: ARROW }} />
      </div>
    </div>
  );
}

function RowWrapConnector() {
  return (
    <div className="hidden lg:block relative h-12 mx-[112px] mt-1 mb-1">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-dashed" style={{ borderColor: ARROW }} />
      <div className="absolute top-0 bottom-2 left-0 border-l-2 border-dashed" style={{ borderColor: ARROW }} />
      <span className="absolute -left-[5px] bottom-0 w-0 h-0 border-x-[4.5px] border-x-transparent border-t-[8px]" style={{ borderTopColor: ARROW }} />
    </div>
  );
}

function Caption({ title, text }: { title: string; text: string }) {
  return (
    <div className="text-center mt-6 max-w-[260px]">
      <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand">{title}</p>
      <p className="text-[14px] text-ink-muted leading-relaxed mt-2">{text}</p>
    </div>
  );
}

const ROW1 = [
  { screen: HomeScreen, title: 'Home', text: 'Services and a single primary call to action, above the fold.' },
  { screen: DatePhysioScreen, title: '1 · Date & Physio', text: 'Seven bookable days, Sundays skipped; “Any available” is the default.' },
  { screen: TimeSlotScreen, title: '2 · Time slot', text: 'Remaining capacity on every slot; full slots stay visible but disabled.' },
];
const ROW2 = [
  { screen: DetailsScreen, title: '3 · Your details', text: 'A summary strip restates the choice before the only form in the flow.' },
  { screen: BookedScreen, title: 'Booked', text: 'Everything the patient needs to remember, with a print option.' },
  { screen: WhatsAppScreen, title: 'WhatsApp confirmation', text: 'The clinic’s prefilled template, sent from the admin dashboard.' },
];

function JourneyRow({ items }: { items: typeof ROW1 }) {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10 lg:gap-0">
      {items.map((it, i) => (
        <React.Fragment key={it.title}>
          {i > 0 && <JourneyArrow />}
          <div className="flex flex-col items-center shrink-0">
            <it.screen />
            <Caption title={it.title} text={it.text} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export function MobileJourney() {
  return (
    <div className="mt-8">
      <JourneyRow items={ROW1} />
      <RowWrapConnector />
      <div className="mt-10 lg:mt-0">
        <JourneyRow items={ROW2} />
      </div>
    </div>
  );
}

/* ───────────── desktop capture in a browser frame ───────────── */

export function DesktopCapture({ caption, liveUrl }: { caption: string; liveUrl: string }) {
  return (
    <div className="bg-white border border-line rounded-[14px] overflow-hidden mt-5 shadow-[0_24px_50px_-36px_rgba(12,17,19,0.4)]">
      <div className="relative flex items-center bg-[#F4F6F7] border-b border-line px-5 py-3">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#047857]" />
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 bg-white border border-line rounded-full px-16 py-1 text-[12px] text-ink-muted leading-none">rewake.app</span>
      </div>
      <div className="relative">
        <img src={`${BASE}rewake/desktop-home.jpg`} alt="Rewake home page at 1440px — hero with Move better. Live pain-free headline, booking buttons and clinic photo" className="w-full block" />
        <p className="absolute left-4 bottom-3 text-[13px] text-ink-muted">{caption}</p>
        <a href={liveUrl} className="absolute right-2 bottom-2 inline-flex items-center gap-1.5 rounded-full bg-white border border-line px-6 py-3 text-[13.5px] font-semibold text-ink hover:border-brand hover:text-brand transition-colors shadow-[0_6px_16px_-8px_rgba(12,17,19,0.3)]">
          Open live <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}

/* ───────────── component specimens ───────────── */

const mono = { fontFamily: "'DM Mono', ui-monospace, monospace" };

export function ComponentSpecimens() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-6">
      {/* ServiceCard */}
      <div>
        <div className="bg-brand-tint border border-line rounded-[16px] p-6">
          <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-soft text-brand"><Dumbbell size={19} /></span>
          <h4 className="text-[17px] font-bold text-ink mt-5">Post-Surgery Recovery</h4>
          <p className="text-[14px] text-ink-muted leading-relaxed mt-2">Structured rehabilitation to rebuild strength and mobility safely.</p>
        </div>
        <p className="text-[12px] text-ink-muted mt-3" style={mono}>src/components/ServiceCard.tsx</p>
      </div>
      {/* PhysioCard */}
      <div>
        <div className="bg-white border border-line rounded-[16px] p-6">
          <div className="flex items-center gap-4">
            <span className="grid place-items-center w-14 h-14 rounded-xl bg-brand text-white font-display text-[18px]">ED</span>
            <span>
              <span className="block text-[17px] font-bold text-ink">Dr. Emily Davis</span>
              <span className="block text-[13.5px] font-semibold text-brand mt-0.5">Pediatric Physiotherapy</span>
            </span>
          </div>
          <p className="flex items-center gap-2.5 text-[14px] text-ink/85 mt-5"><Calendar size={14} className="text-ink-muted" /> Tuesday, Thursday, Saturday</p>
          <p className="flex items-center gap-2.5 text-[14px] text-ink/85 mt-2.5"><Clock size={14} className="text-ink-muted" /> 09:00 – 15:00</p>
          <span className="flex items-center justify-center gap-2 rounded-full border border-line bg-white text-[14px] font-semibold text-ink py-2.5 mt-6">
            Book a session <ArrowRight size={14} />
          </span>
        </div>
        <p className="text-[12px] text-ink-muted mt-3" style={mono}>src/components/PhysioCard.tsx</p>
      </div>
      {/* TestimonialCard */}
      <div>
        <div className="bg-brand-tint border border-line rounded-[16px] p-6">
          <Quote size={30} className="text-[#BFE4EF] fill-[#BFE4EF] -scale-x-100" />
          <p className="text-[15px] text-ink/90 leading-[1.65] mt-4">"Very professional physios who take time to explain everything. The exercises they gave me made a real difference after my knee surgery."</p>
          <div className="flex items-center gap-3 border-t border-line pt-4 mt-5">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-brand text-white text-[13px] font-bold">FR</span>
            <span className="flex-1 leading-tight">
              <span className="block text-[14px] font-bold text-ink">Fathima R.</span>
              <span className="block text-[12.5px] text-ink-muted mt-0.5">Post-surgery recovery</span>
            </span>
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-[#FBBF24] fill-[#FBBF24]" />)}
            </span>
          </div>
        </div>
        <p className="text-[12px] text-ink-muted mt-3" style={mono}>src/components/TestimonialCard.tsx</p>
      </div>
    </div>
  );
}
