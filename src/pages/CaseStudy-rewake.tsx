import React from 'react';
import {
  Activity, ArrowRight, Baby, CalendarCheck2, CalendarPlus, Check, CheckCircle2, Dumbbell,
  HeartPulse, Home as HomeIcon, Info, LayoutGrid, Lightbulb, MessageCircle, Phone as PhoneIcon,
  Search, Sparkles, Stethoscope, Users, X,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { accessibility, architecture, designSystem, findings, meta, overview, research, screens, storyboards, takeaways, TOC } from '../data/caseStudy-rewake';
import { ComponentSpecimens, DesktopCapture, MobileJourney } from '../components/rewake/Screens';
import DesignSystemContent from '../components/rewake/DesignSystem';
import AccessibilityContent from '../components/rewake/Accessibility';
import BackLink from '../components/layout/BackLink';
import NextCaseStudy from '../components/case/NextCaseStudy';

/* Rewake Physio & Rehab — bespoke case study page (same pattern as Green Eye).
   Tokens live in src/styles/rewake.css, scoped under .rw; utilities are
   generated via the @source list in greeneye.css. Sections are built
   one-by-one from the design screenshots. */

/* ───────────────────────── shared section pieces ───────────────────────── */

/* Full-bleed band; the design alternates white and tint (#F7FAFB) sections. */
function Band({
  id, tone = 'tint', className, children,
}: { id?: string; tone?: 'white' | 'tint'; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn('scroll-mt-36', tone === 'white' ? 'bg-white' : 'bg-brand-tint', className)}>
      <div className="max-w-[var(--maxw)] mx-auto px-[var(--gutter)] py-14 md:py-20">{children}</div>
    </section>
  );
}

function SectionHead({
  eyebrow, title, subtitle,
}: { eyebrow: string; title: React.ReactNode; subtitle?: React.ReactNode }) {
  return (
    <div>
      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand">{eyebrow}</p>
      <h2 className="font-display text-[30px] md:text-[36px] leading-[1.15] text-ink mt-3">{title}</h2>
      {subtitle && <p className="text-ink-muted text-base leading-relaxed mt-4 max-w-[640px]">{subtitle}</p>}
    </div>
  );
}

function SubHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn('text-[19px] font-bold text-ink', className)}>{children}</h3>;
}

const emotionTones: Record<string, string> = {
  anxious: 'bg-status-pending-soft text-status-pending',
  unsure: 'bg-[#EEF1F3] text-ink/80',
  focused: 'bg-brand-soft text-brand-dark',
  relieved: 'bg-status-resolved-soft text-status-resolved',
};

function EmotionPill({ tone, children }: { tone: string; children: React.ReactNode }) {
  return (
    <span className={cn('inline-flex items-center rounded-full border border-black/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] leading-none whitespace-nowrap', emotionTones[tone])}>
      {children}
    </span>
  );
}

/* ───────────────────────── hero pieces ───────────────────────── */

function HeroChip({ icon: Icon, value, label, className }: { icon: typeof CalendarCheck2; value: string; label: string; className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-3 bg-white rounded-2xl pl-5 pr-5 py-2.5 shadow-[0_16px_38px_-18px_rgba(12,17,19,0.45)]', className)}>
      <span className="grid place-items-center w-10 h-10 rounded-full bg-brand-soft text-brand shrink-0"><Icon size={18} /></span>
      <span>
        <span className="block text-[15px] font-bold text-ink leading-tight">{value}</span>
        <span className="block text-[12.5px] text-ink-muted leading-tight mt-0.5">{label}</span>
      </span>
    </div>
  );
}

/* Phone mockup showing the Rewake app home screen, rebuilt in DOM so it stays crisp. */
function RewakePhone({ className }: { className?: string }) {
  const treats = [
    { icon: Dumbbell, label: 'Sports Injury' },
    { icon: Stethoscope, label: 'Post-Surgery' },
    { icon: Activity, label: 'Chronic Pain' },
    { icon: Baby, label: 'Pediatric' },
  ];
  const nav = [
    { icon: HomeIcon, label: 'Home' },
    { icon: Info, label: 'About' },
    { icon: Users, label: 'Physios' },
    { icon: PhoneIcon, label: 'Contact' },
  ];
  return (
    <div className={cn('relative w-full aspect-[9/19.4] rounded-[30px] border-[5px] border-[#0C1113] bg-white overflow-hidden flex flex-col shadow-[0_34px_64px_-26px_rgba(12,17,19,0.6)]', className)}>
      {/* Status bar */}
      <div className="relative h-6 shrink-0 flex items-end justify-between px-3.5 pb-0.5 text-[7px] font-semibold text-ink">
        <span>9:41</span>
        <span className="absolute left-1/2 -translate-x-1/2 top-1 w-12 h-3 rounded-full bg-[#0C1113]" />
        <span className="flex items-center gap-0.5">
          <span className="w-0.5 h-1 rounded-[1px] bg-current" /><span className="w-0.5 h-1.5 rounded-[1px] bg-current" /><span className="w-0.5 h-2 rounded-[1px] bg-current" />
          <span className="ml-0.5 w-3.5 h-1.5 rounded-[2px] border border-current" />
        </span>
      </div>
      {/* App header */}
      <div className="shrink-0 flex items-center justify-between px-3 pt-1.5">
        <span className="flex items-center gap-1">
          <span className="grid place-items-center w-4 h-4 rounded-full bg-brand text-white"><HeartPulse size={9} /></span>
          <span className="text-[8px] font-extrabold tracking-[0.06em] text-ink">REWAKE</span>
        </span>
        <span className="flex items-center gap-0.5 rounded-full bg-brand-dark text-white text-[6.5px] font-semibold px-2 py-1 leading-none">
          <CalendarPlus size={6.5} /> Book Now
        </span>
      </div>
      {/* Home screen body */}
      <div className="flex-1 min-h-0 flex flex-col px-3 pt-2.5">
        <p className="text-[5.5px] font-bold uppercase tracking-[0.16em] text-brand">Now accepting new patients</p>
        <h3 className="font-display text-[15px] leading-[1.12] text-ink mt-1">
          Move better.<br />Live <em className="italic text-brand">pain-free.</em>
        </h3>
        <p className="text-[6.3px] text-ink-muted leading-snug mt-1">Book a session with our certified physios in under a minute.</p>
        <span className="flex items-center justify-center gap-1 rounded-full bg-brand text-white text-[7.5px] font-semibold py-1.5 mt-2 leading-none">
          Book an Appointment <ArrowRight size={7} />
        </span>
        <div className="relative rounded-[9px] overflow-hidden mt-2 h-[64px] shrink-0">
          <img src={meta.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '62% 30%' }} />
          <span className="absolute left-1 bottom-1 inline-flex items-center gap-0.5 rounded-full bg-white px-1.5 py-[2.5px] text-[5.5px] font-semibold text-ink leading-none">
            <CalendarCheck2 size={5.5} className="text-brand" /> Same-week slots
          </span>
        </div>
        <p className="text-[5.5px] font-bold uppercase tracking-[0.16em] text-brand mt-2.5">What we treat</p>
        <div className="grid grid-cols-2 gap-1 mt-1">
          {treats.map((t) => (
            <span key={t.label} className="flex items-center gap-1 bg-white border border-line rounded-[7px] px-1.5 py-1.5 text-[5.8px] font-semibold text-ink leading-none">
              <t.icon size={6.5} className="text-brand shrink-0" /> {t.label}
            </span>
          ))}
        </div>
        {/* Bottom nav — Book raised in the centre */}
        <div className="mt-auto -mx-3 bg-white border-t border-line px-3.5 pt-1 pb-1.5 flex items-end justify-between">
          {nav.slice(0, 2).map((n) => (
            <span key={n.label} className="flex flex-col items-center gap-0.5 text-ink-muted"><n.icon size={8} /><span className="text-[4.8px] font-medium">{n.label}</span></span>
          ))}
          <span className="flex flex-col items-center gap-0.5 -mt-3">
            <span className="grid place-items-center w-6 h-6 rounded-full bg-brand text-white shadow-[0_4px_10px_-2px_rgba(4,112,138,0.5)]"><CalendarPlus size={10} /></span>
            <span className="text-[4.8px] font-semibold text-brand">Book</span>
          </span>
          {nav.slice(2).map((n) => (
            <span key={n.label} className="flex flex-col items-center gap-0.5 text-ink-muted"><n.icon size={8} /><span className="text-[4.8px] font-medium">{n.label}</span></span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── page ───────────────────────── */

export default function RewakeCaseStudy() {
  const [active, setActive] = React.useState(TOC[0].id);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    TOC.forEach((t) => { const el = document.getElementById(t.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rw">
      {/* ── Hero ── */}
      <header className="w-full max-w-[var(--maxw)] mx-auto px-[var(--gutter)] pt-[clamp(40px,5vw,72px)]">
        <BackLink className="mb-[clamp(32px,4vw,56px)]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-stretch">
          {/* Left — copy */}
          <div className="flex flex-col justify-center">
            <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-brand-soft text-brand-dark text-[11px] font-bold uppercase tracking-[0.14em] px-3.5 py-2 leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />{meta.eyebrow}
            </span>
            <h1 className="font-display text-[42px] md:text-[54px] leading-[1.06] text-ink mt-6 max-w-[520px]">{meta.title}</h1>
            <p className="text-brand font-bold text-[19px] md:text-[21px] leading-snug mt-6">{meta.tagline}</p>
            <p className="text-ink-muted text-[15.5px] md:text-[17px] leading-[1.65] mt-4 max-w-[560px]">{meta.summary}</p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-9">
              {meta.facts.map((f) => (
                <div key={f.label} className="bg-white border border-line rounded-[14px] px-5 py-4">
                  <dt className="text-[10.5px] uppercase tracking-[0.16em] font-semibold text-ink-muted">{f.label}</dt>
                  <dd className="text-[15px] font-semibold text-ink leading-snug mt-1.5">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3.5 mt-9">
              <a href={meta.liveUrl} className="inline-flex items-center gap-2.5 rounded-full bg-brand text-white font-semibold text-[15px] px-7 py-3.5 hover:bg-brand-dark transition-colors shadow-[0_10px_26px_-10px_rgba(4,112,138,0.55)]">
                Open the live app <ArrowRight size={17} />
              </a>
              <a href="#design-system" className="inline-flex items-center rounded-full bg-white border border-line text-ink font-semibold text-[15px] px-7 py-3.5 hover:border-brand hover:text-brand transition-colors">
                See the design system
              </a>
            </div>
          </div>

          {/* Right — clinic photo with overlapping chips + phone.
              aspect matches the photo exactly so the image maps 1:1 and the
              overlay percentages (measured from the design) line up. */}
          <div className="relative self-center w-full aspect-[597/713] mb-12 lg:mb-0">
            <div className="absolute inset-0 rounded-hero overflow-hidden shadow-[0_30px_60px_-34px_rgba(12,17,19,0.45)]">
              <img src={meta.heroImage} alt={meta.heroImageLabel} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '62% 50%' }} />
              <div className="absolute inset-x-0 bottom-0 h-[42%] bg-linear-to-t from-[rgba(12,17,19,0.62)] to-transparent" />
              <p className="absolute left-7 bottom-6 text-white font-bold text-[14px] leading-[1.42] whitespace-pre-line">{meta.heroCaption}</p>
            </div>
            {/* Stat chips — fixed stagger and gap so they stay aligned at every width */}
            <div className="absolute top-[22px] -left-3.5 flex flex-col items-start gap-[18px]">
              <HeroChip icon={CalendarCheck2} value={meta.statChips[0].value} label={meta.statChips[0].label} className="ml-[26px]" />
              <HeroChip icon={Sparkles} value={meta.statChips[1].value} label={meta.statChips[1].label} className="ml-[26px]"/>
            </div>
            <div className="absolute w-[32.4%] min-w-[140px] right-[5.8%] -bottom-6">
              <RewakePhone />
            </div>
          </div>
        </div>
      </header>

      {/* ── Sticky TOC ── */}
      <nav className="sticky top-[84px] z-10 bg-brand-tint/90 backdrop-blur border-b border-line/70 mt-14">
        <div className="max-w-[var(--maxw)] mx-auto px-[var(--gutter)] flex gap-2.5 overflow-x-auto py-3 scrollbar-hide">
          {TOC.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              aria-current={active === t.id ? 'location' : undefined}
              onClick={(event) => {
                event.preventDefault();
                setActive(t.id);
                document.getElementById(t.id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
              }}
              className={cn(
                'shrink-0 px-4 py-2 rounded-full text-[13.5px] font-semibold leading-none transition-colors',
                active === t.id
                  ? 'bg-brand text-white shadow-[0_6px_16px_-8px_rgba(4,112,138,0.7)]'
                  : 'bg-white border border-line text-ink hover:text-brand hover:border-brand',
              )}
            >
              {t.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Overview ── */}
      <Band id="overview" tone="white">
        <SectionHead eyebrow={overview.eyebrow} title={overview.title} subtitle={overview.subtitle} />
        <p className="text-ink/80 text-[16.5px] md:text-[17.5px] leading-[1.75] mt-14 max-w-[820px]">{overview.body}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-14">
          {overview.cards.map((c) => {
            const Icon = { discover: Search, choose: Users, book: CalendarCheck2, confirm: MessageCircle, manage: LayoutGrid }[c.icon];
            return (
              <div key={c.title} className="bg-brand-tint border border-line/70 rounded-[14px] p-5">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-soft text-brand">{Icon && <Icon size={20} />}</span>
                <h3 className="text-[16px] font-bold text-ink mt-6">{c.title}</h3>
                <p className="text-[13.5px] text-ink-muted leading-[1.6] mt-2">{c.body}</p>
              </div>
            );
          })}
        </div>
      </Band>

      {/* ── Research ── */}
      <Band id="research">
        <SectionHead eyebrow={research.eyebrow} title={research.title} subtitle={research.subtitle} />

        {/* Methodology note */}
        <div className="flex items-start gap-6 bg-brand-soft rounded-[14px] p-7 md:p-8 mt-10 max-w-[900px]">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-brand text-white shrink-0"><Search size={15} /></span>
          <p className="text-ink/85 text-[16px] leading-[1.7]">{research.method}</p>
        </div>

        {/* Pain points */}
        <SubHeading className="mt-14">{research.painTitle}</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {research.painPoints.map((p, i) => (
            <div key={p.title} className={cn('rounded-[14px] border p-5 pb-6', i % 2 === 0 ? 'bg-brand-soft border-line/60' : 'bg-white border-line')}>
              <p className="font-display text-[22px] text-brand">{String(i + 1).padStart(2, '0')}</p>
              <h4 className="text-[16.5px] font-bold text-ink leading-snug mt-4">{p.title}</h4>
              <p className="text-[13.5px] text-ink-muted leading-[1.6] mt-2">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Persona */}
        <SubHeading className="mt-16">{research.personaTitle}</SubHeading>
        <div className="bg-white border border-line rounded-[20px] p-7 md:p-10 mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10">
            <div>
              <div className="grid place-items-center w-20 h-20 rounded-full bg-brand text-white font-display text-[26px]">{research.persona.initials}</div>
              <h4 className="text-[20px] font-bold text-ink mt-5">{research.persona.name}</h4>
              {research.persona.meta.map((m) => <p key={m} className="text-[14px] text-ink-muted mt-0.5 first-of-type:mt-1.5">{m}</p>)}
              <p className="text-[12px] text-ink-muted/80 leading-relaxed mt-6 max-w-[230px]">{research.persona.note}</p>
            </div>
            <div>
              <blockquote className="border-l-[3px] border-accent-bright pl-5 font-display italic font-semibold text-[20px] md:text-[21.5px] leading-[1.45] text-ink">
                {research.persona.quote}
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-9">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-status-resolved">Goals</p>
                  <ul className="mt-4 space-y-4">
                    {research.persona.goals.map((g) => (
                      <li key={g} className="flex items-start gap-3">
                        <span className="grid place-items-center w-5 h-5 rounded-full bg-status-resolved-soft text-status-resolved shrink-0 mt-0.5"><Check size={11} strokeWidth={3} /></span>
                        <span className="text-[14.5px] text-ink/85 leading-snug">{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-status-rejected">Frustrations</p>
                  <ul className="mt-4 space-y-4">
                    {research.persona.frustrations.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="grid place-items-center w-5 h-5 rounded-full bg-status-rejected-soft text-status-rejected shrink-0 mt-0.5"><X size={11} strokeWidth={3} /></span>
                        <span className="text-[14.5px] text-ink/85 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey table */}
        <SubHeading className="mt-16">{research.journeyTitle}</SubHeading>
        <p className="text-ink-muted text-[14.5px] leading-relaxed mt-2 max-w-[640px]">{research.journeyNote}</p>
        <div className="bg-white border border-line rounded-[14px] overflow-hidden mt-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="bg-[#F4F6F7]">
                  {['Stage', 'Action', 'Emotion', 'Opportunity'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {research.journey.map((row) => (
                  <tr key={row.stage} className="border-t border-line align-top">
                    <td className="px-6 py-6 text-[15px] font-bold text-ink w-[11%]">{row.stage}</td>
                    <td className="px-6 py-6 text-[14.5px] text-ink/80 leading-relaxed w-[40%]">{row.action}</td>
                    <td className="px-6 py-6 w-[14%]"><EmotionPill tone={row.tone}>{row.emotion}</EmotionPill></td>
                    <td className="px-6 py-6 text-[14.5px] text-ink/85 leading-relaxed">{row.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Band>

      {/* ── Information architecture ── */}
      <Band id="architecture" tone="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          <SectionHead eyebrow={architecture.eyebrow} title={<span className="block max-w-[560px]">{architecture.title}</span>} subtitle={architecture.subtitle} />
          <p className="text-ink-muted text-[16px] leading-[1.65] lg:pt-10">{architecture.aside}</p>
        </div>

        {/* Sitemap tree */}
        <div className="bg-brand-tint border border-line/60 rounded-[16px] p-6 md:p-8 mt-10">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-[980px] pt-2">
              <div className="flex justify-center">
                <span className="inline-flex items-center rounded-full bg-white border-[1.5px] border-ink px-6 py-2.5 text-[14px] font-bold text-ink">{architecture.root}</span>
              </div>
              <div className="w-px h-9 bg-[#C3CBCF] mx-auto" />
              <div className="h-px bg-[#C3CBCF] mx-[8.333%]" />
              <div className="grid grid-cols-6 gap-3">
                {architecture.branches.map((b) => (
                  <div key={b.label} className="flex flex-col items-center">
                    <div className="w-px h-6 bg-[#C3CBCF]" />
                    <span
                      className={cn(
                        'inline-flex items-center rounded-full px-6 py-2.5 text-[14.5px] font-bold text-white',
                        b.kind === 'primary' && 'bg-brand ring-4 ring-[#D0F1F8]',
                        b.kind === 'supporting' && 'bg-brand-deep',
                        b.kind === 'staff' && 'bg-ink',
                      )}
                    >
                      {b.label}
                    </span>
                    <div className="flex flex-col items-center gap-2 mt-5">
                      {b.children.map((c) => (
                        <span key={c} className="inline-flex items-center rounded-full bg-white border border-line px-4 py-1.5 text-[13px] font-medium text-ink/80 whitespace-nowrap">{c}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2 mt-10">
            {architecture.legend.map((l) => (
              <span key={l.label} className="inline-flex items-center gap-2 text-[13px] text-ink-muted">
                <span className={cn('w-2.5 h-2.5 rounded-full', l.kind === 'primary' ? 'bg-brand' : l.kind === 'supporting' ? 'bg-brand-deep' : 'bg-ink')} />
                {l.label}
              </span>
            ))}
          </div>
        </div>

        {/* Callout */}
        <div className="flex items-center gap-5 bg-brand-soft rounded-[14px] px-6 py-5 mt-6">
          <span className="grid place-items-center w-10 h-10 rounded-[10px] bg-brand text-white shrink-0"><Lightbulb size={17} /></span>
          <p className="text-ink text-[16.5px] font-medium leading-relaxed">{architecture.callout}</p>
        </div>
      </Band>

      {/* ── Storyboards ── */}
      <Band id="storyboards">
        <SectionHead eyebrow={storyboards.eyebrow} title={storyboards.title} subtitle={storyboards.subtitle} />
        {storyboards.boards.map((b, i) => (
          <div key={b.label} className={cn('grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start', i === 0 ? 'mt-12' : 'mt-16')}>
            {/* Sketch card — hand-drawn storyboard drops in via b.image */}
            <div className="bg-[#FBFAF6] border border-line/70 rounded-[16px] p-6 md:p-7">
              <p className="text-[19px] text-ink/85" style={{ fontFamily: "'Caveat', cursive" }}>{b.sketchTitle}</p>
              {b.image ? (
                <img src={b.image} alt={b.imageLabel} className="w-full mt-4 rounded-[10px]" />
              ) : (
                <div className="mt-4 aspect-[705/395] rounded-[10px] border-2 border-dashed border-[#DDD9CC] grid place-items-center">
                  <p className="text-ink-muted text-sm text-center leading-relaxed px-8">
                    Hand-drawn storyboard goes here.<br />
                    Drop the sketch in <span className="font-semibold">public/rewake/</span> and set its path in caseStudy-rewake.ts.
                  </p>
                </div>
              )}
            </div>
            {/* Numbered steps */}
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand">Storyboard</p>
              <h3 className="font-display text-[26px] md:text-[30px] text-ink mt-2">{b.label}</h3>
              <ol className="mt-6 space-y-5">
                {b.steps.map((s, n) => (
                  <li key={s} className="flex items-start gap-4">
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-brand-soft text-brand text-[13px] font-bold shrink-0">{n + 1}</span>
                    <span className="text-[15px] text-ink/85 leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </Band>

      {/* ── Usability findings ── */}
      <Band id="findings" tone="white">
        <SectionHead eyebrow={findings.eyebrow} title={findings.title} subtitle={findings.subtitle} />
        <div className="space-y-5 mt-10">
          {findings.items.map((f, i) => (
            <div key={f.finding} className="bg-white border border-line rounded-[16px] p-6 md:p-7">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
                <div className="flex items-start gap-5">
                  <span className="grid place-items-center w-9 h-9 rounded-[8px] bg-ink text-white font-display text-[16px] shrink-0">{i + 1}</span>
                  <div>
                    <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Finding</p>
                    <p className="text-[15.5px] text-ink/85 leading-[1.65] mt-2">{f.finding}</p>
                  </div>
                </div>
                <div className="bg-brand-soft border border-[#D8EFF6] rounded-[12px] p-6">
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">Design response</p>
                  <p className="text-[15.5px] text-ink font-medium leading-[1.65] mt-2.5">{f.response}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Band>

      {/* ── Screens ── */}
      <Band id="screens">
        <SectionHead eyebrow={screens.eyebrow} title={screens.title} subtitle={screens.subtitle} />

        <SubHeading className="mt-12">{screens.desktopTitle}</SubHeading>
        <DesktopCapture caption={screens.desktopCaption} liveUrl={meta.liveUrl} />

        <SubHeading className="mt-16">{screens.mobileTitle}</SubHeading>
        <p className="text-ink-muted text-[14.5px] leading-relaxed mt-2 max-w-[640px]">{screens.mobileNote}</p>
        <MobileJourney />

        <SubHeading className="mt-16">{screens.specimensTitle}</SubHeading>
        <p className="text-ink-muted text-[14.5px] leading-relaxed mt-2 max-w-[640px]">{screens.specimensNote}</p>
        <ComponentSpecimens />
        <p className="text-[13px] text-ink-muted mt-6">{screens.specimensFootnote}</p>
      </Band>

      {/* ── Design system ── */}
      <Band id="design-system" tone="white">
        <SectionHead eyebrow={designSystem.eyebrow} title={designSystem.title} subtitle={designSystem.subtitle} />
        <DesignSystemContent />
      </Band>

      {/* ── Accessibility ── */}
      <Band id="accessibility">
        <SectionHead eyebrow={accessibility.eyebrow} title={accessibility.title} subtitle={accessibility.subtitle} />
        <AccessibilityContent />
      </Band>

      {/* ── Takeaways ── */}
      <Band id="takeaways" tone="white">
        <SectionHead eyebrow={takeaways.eyebrow} title={takeaways.title} subtitle={takeaways.subtitle} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 items-start">
          <div className="bg-brand-tint border border-line/70 rounded-[20px] p-8">
            <h3 className="text-[19px] font-bold text-ink">{takeaways.lessonsTitle}</h3>
            <ul className="mt-6 space-y-5">
              {takeaways.lessons.map((l) => (
                <li key={l} className="flex items-start gap-3.5">
                  <CheckCircle2 size={18} className="text-status-resolved shrink-0 mt-0.5" />
                  <span className="text-[15px] text-ink/85 leading-relaxed">{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-line rounded-[20px] p-8">
            <h3 className="text-[19px] font-bold text-ink">{takeaways.nextTitle}</h3>
            <ol className="mt-6 space-y-5">
              {takeaways.next.map((n, i) => (
                <li key={n} className="flex items-start gap-3.5">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-brand text-white text-[12px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-[15px] text-ink/85 leading-relaxed">{n}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="relative rounded-[24px] overflow-hidden mt-10 px-6 py-16 md:py-20 text-center">
          <img src={`${import.meta.env.BASE_URL}rewake/clinic-pediatric-cta.jpg`} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '50% 12%' }} />
          <div className="absolute inset-0 bg-linear-to-b from-[#1D6C80]/[0.96] to-[#0D4F60]/[0.98]" />
          <div className="relative">
            <h3 className="font-display text-white text-[26px] md:text-[30px] leading-tight">{takeaways.cta.title}</h3>
            <p className="text-white/85 text-[15px] mt-3">{takeaways.cta.text}</p>
            <div className="flex flex-wrap justify-center gap-3.5 mt-8">
              <a href={meta.liveUrl} className="inline-flex items-center rounded-full bg-white text-ink font-semibold text-[15px] px-7 py-3.5 leading-none hover:bg-brand-soft transition-colors">{takeaways.cta.primary}</a>
              <a href={meta.liveUrl} className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/40 text-white font-semibold text-[15px] px-7 py-3.5 leading-none hover:bg-white/20 transition-colors">
                {takeaways.cta.secondary} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </Band>
      <NextCaseStudy currentSlug="rewake" />
    </div>
  );
}
