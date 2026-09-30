import React from 'react';
import { Link } from 'react-router-dom';
import {
  Camera, MapPin, Calendar, Trophy, Newspaper, Leaf, Users, Recycle, Heart, ArrowRight, Check, X,
  Search, Send, Sparkles, Quote, Target, Frown, Eye, Smartphone, Layers, Accessibility as A11yIcon,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { IMAGES } from '../lib/images';
import { Button, Card, IconBadge, Pill, SectionHeader, StatChip, StepItem } from '../components/ui';
import ScreenFlow from '../components/phone/ScreenFlow';
import { mobileFlow } from '../components/phone/PhoneScreens';
import {
  meta, overview, research, painPoints, persona, journey, architecture, storyboards, usabilityFindings, desktopScreen,
  colorGroups, overlays, typeScale, spacing, radii, shadows, motion, breakpoints, patterns,
  accessibility, contrastPairs, takeaways, nextSteps,
} from '../data/caseStudy';

/* ───────────────────────── helpers ───────────────────────── */

function luminance(hex: string) {
  const c = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4]
    .map((i) => parseInt(c.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const TOC = [
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

function Section({
  id, eyebrow, title, subtitle, children, className,
}: { id: string; eyebrow?: string; title: React.ReactNode; subtitle?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={cn('scroll-mt-44 py-14 md:py-20', className)}>
      <SectionHeader align="left" size="md" eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-8 md:mt-10">{children}</div>
    </section>
  );
}

function SubHeading({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 mb-5 mt-12 first:mt-0">
      <h3 className="text-xl font-semibold text-ink">{children}</h3>
      {hint && <span className="text-xs text-ink-muted">{hint}</span>}
    </div>
  );
}

/* ───────────────────────── live specimens ───────────────────────── */

function ActivitySpecimen() {
  return (
    <Card padding="none" className="overflow-hidden">
      <div className="p-5 flex items-start gap-4">
        <IconBadge icon={Recycle} variant="soft" size="lg" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h4 className="text-[15px] font-semibold text-ink leading-snug">Vasco da Gama Square, Fort Kochi</h4>
            <Pill tone="pending" dot>Pending</Pill>
          </div>
          <p className="text-xs text-ink-muted mt-1">18 Apr 2025 · 09:10 AM</p>
          <div className="flex flex-wrap gap-1.5 mt-3"><Pill tone="neutral">recyclable</Pill><Pill tone="neutral">organic</Pill></div>
        </div>
      </div>
      <div className="px-5 py-3 bg-brand-tint text-[13px] text-ink-muted border-t border-line">“Overflowing bins after the weekend market.”</div>
    </Card>
  );
}

function EventSpecimen() {
  return (
    <Card padding="sm" interactive>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          <IconBadge icon={Calendar} size="lg" />
          <div className="min-w-0">
            <h4 className="text-[15px] font-semibold text-ink leading-snug">Cleaning Gov. High School Kakkanad</h4>
            <p className="text-xs text-brand font-semibold mt-1">05-01-2025 · 10:00 AM to 12:00 PM</p>
            <p className="text-sm text-ink-muted mt-1 flex items-center gap-1.5"><MapPin size={13} /> Kakkanad, Ernakulam</p>
          </div>
        </div>
        <Heart size={20} className="fill-brand text-brand shrink-0" />
      </div>
    </Card>
  );
}

function ArticleSpecimen() {
  return (
    <Card interactive className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="w-16 h-16 shrink-0 rounded-inner bg-brand-soft flex items-center justify-center text-3xl">🌍</div>
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <Pill tone="brand" className="self-start mb-2">Awareness</Pill>
          <h4 className="text-[15px] font-semibold text-ink leading-snug">World Environment Day</h4>
          <p className="text-xs text-ink-muted mt-0.5">1 April 2025</p>
        </div>
      </div>
      <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">Celebrated every year on June 5th to raise awareness and encourage action for the protection of our environment.</p>
      <div className="flex justify-between items-center pt-2 border-t border-line">
        <span className="text-xs text-ink-muted">3 min read</span>
        <span className="text-sm font-semibold text-brand inline-flex items-center gap-1.5">Read article <ArrowRight size={14} /></span>
      </div>
    </Card>
  );
}

/* ───────────────────────── page ───────────────────────── */

export default function CaseStudy() {
  return (
    <div className="ge pb-20">
      {/* ── Hero ── */}
      <header className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-6 md:pt-10">
        <Card padding="none" className="overflow-hidden grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
          <div className="p-7 md:p-12 flex flex-col justify-center">
            <Pill tone="brand" className="self-start mb-5">Case study · 2025</Pill>
            <h1 className="text-[40px] md:text-[56px] leading-[1.05] font-semibold tracking-tight text-ink">
              {meta.title}
              <span className="block text-brand text-2xl md:text-3xl mt-2 font-semibold tracking-tight">{meta.tagline}</span>
            </h1>
            <p className="text-ink-muted text-[15px] md:text-base leading-relaxed mt-6 max-w-[520px]">{meta.summary}</p>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 mt-8">
              {meta.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[11px] uppercase tracking-[0.16em] font-semibold text-ink-muted">{f.label}</dt>
                  <dd className="text-[15px] font-medium text-ink mt-1">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3 mt-10">
              <Button to="/" trailingIcon>Open the live app</Button>
              <a href="#design-system"><Button variant="ghost">Jump to design system</Button></a>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-full bg-brand-tint overflow-hidden">
            <img src={IMAGES.hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 hero-overlay" />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[230px] md:w-[260px] h-[74%] rounded-[28px] border-[6px] border-white overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,.5)] bg-brand-tint">
              <img src={`${import.meta.env.BASE_URL}case-study/home-mobile.jpg`} alt="Green Eye home screen on mobile" className="w-full h-full object-cover object-top" />
            </div>
            <StatChip className="absolute left-6 top-6 hidden lg:inline-flex" label="Screens redesigned" value="8" />
            <StatChip className="absolute right-6 top-6 hidden lg:inline-flex" label="Design tokens" value="22" />
          </div>
        </Card>
      </header>

      {/* ── Sticky TOC ── */}
      <nav className="sticky top-[84px] z-10 bg-brand-tint/90 backdrop-blur border-b border-line mt-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {TOC.map((t) => (
            <a key={t.id} href={`#${t.id}`} className="shrink-0 px-3.5 py-1.5 rounded-full bg-white border border-line text-[13px] font-medium text-ink-muted hover:text-brand hover:border-brand transition-colors">
              {t.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* ── Overview ── */}
        <Section id="overview" eyebrow="Project overview" title="A faster way to get litter off the street" subtitle={overview}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: Camera, title: 'Report', body: 'Photo, pin, note or voice memo. Under a minute.' },
              { icon: Eye, title: 'Track', body: 'Follow every report from pending to resolved.' },
              { icon: Trophy, title: 'Earn', body: 'Points for verified reports, redeemable at partner stores.' },
              { icon: Users, title: 'Join', body: 'Community cleanup drives listed by local bodies.' },
            ].map((f) => (
              <Card key={f.title} className="flex flex-col gap-4">
                <IconBadge icon={f.icon} />
                <div>
                  <h3 className="font-semibold text-ink">{f.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mt-1">{f.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* ── Research ── */}
        <Section id="research" eyebrow="User research" title="Who we designed for" subtitle={research}>
          <SubHeading>Pain points</SubHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((p, i) => (
              <Card key={p.title} tone={i % 3 === 1 ? 'soft' : 'surface'} className="flex gap-4">
                <IconBadge icon={Frown} variant={i % 3 === 1 ? 'white' : 'soft'} />
                <div>
                  <h4 className="font-semibold text-ink">{p.title}</h4>
                  <p className="text-sm text-ink-muted leading-relaxed mt-1">{p.body}</p>
                </div>
              </Card>
            ))}
          </div>

          <SubHeading>Persona</SubHeading>
          <Card padding="lg" className="flex flex-col gap-8">
            {/* Identity + quote */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8 text-center md:text-left">
              <div className="w-24 h-24 rounded-full bg-brand-soft grid place-items-center text-brand text-3xl font-semibold border-4 border-white shrink-0">
                {persona.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-2xl font-semibold text-ink">{persona.name}</h4>
                <p className="text-sm text-ink-muted mt-0.5">{persona.age} · {persona.occupation}</p>
                <p className="text-xs text-ink-muted mt-0.5 inline-flex items-center gap-1"><MapPin size={11} /> {persona.location}</p>
                <blockquote className="mt-4 flex items-start gap-3 justify-center md:justify-start">
                  <Quote size={16} className="text-brand shrink-0 mt-0.5" />
                  <p className="text-[15px] italic text-ink-muted leading-relaxed max-w-[620px]">{persona.quote}</p>
                </blockquote>
              </div>
            </div>

            {/* Goals + frustrations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-line">
              <div>
                <div className="flex items-center gap-2 mb-3"><IconBadge icon={Target} size="sm" /><h5 className="font-semibold text-ink">Goals</h5></div>
                <ul className="flex flex-col gap-2">
                  {persona.goals.map((g) => <li key={g} className="flex items-start gap-2 text-sm text-ink-muted"><Check size={16} className="text-brand shrink-0 mt-0.5" /> {g}</li>)}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3"><span className="inline-grid place-items-center w-8 h-8 rounded-full bg-status-rejected-soft text-status-rejected"><X size={15} /></span><h5 className="font-semibold text-ink">Frustrations</h5></div>
                <ul className="flex flex-col gap-2">
                  {persona.frustrations.map((f) => <li key={f} className="flex items-start gap-2 text-sm text-ink-muted"><X size={16} className="text-status-rejected shrink-0 mt-0.5" /> {f}</li>)}
                </ul>
              </div>
            </div>
          </Card>

          <SubHeading>User journey map</SubHeading>
          <Card padding="none" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-brand-tint/70 border-b border-line text-[11px] uppercase tracking-[0.14em] text-ink-muted font-semibold">
                    <th className="px-5 py-3">Stage</th><th className="px-5 py-3">Action</th><th className="px-5 py-3">Emotion</th><th className="px-5 py-3">Opportunity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {journey.map((j, i) => (
                    <tr key={j.stage}>
                      <td className="px-5 py-4 font-semibold text-ink flex items-center gap-3">
                        <span className="grid place-items-center w-7 h-7 rounded-full bg-brand text-white text-[11px] font-bold">{String(i + 1).padStart(2, '0')}</span>{j.stage}
                      </td>
                      <td className="px-5 py-4 text-ink-muted">{j.action}</td>
                      <td className="px-5 py-4"><Pill tone="brand">{j.emotion}</Pill></td>
                      <td className="px-5 py-4 text-ink-muted">{j.opportunity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </Section>

        {/* ── Information architecture ── */}
        <section id="architecture" className="scroll-mt-44 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-12 items-end">
            <SectionHeader align="left" size="lg" eyebrow={architecture.eyebrow} title={architecture.title} />
            <p className="text-ink-muted text-[15px] md:text-lg leading-relaxed lg:pb-1">{architecture.description}</p>
          </div>

          <Card padding="lg" className="mt-10">
            {/* Root chain */}
            <div className="flex flex-col items-center">
              {architecture.root.map((node) => (
                <React.Fragment key={node}>
                  <div className="px-5 py-3 rounded-inner bg-ink text-white text-sm font-semibold">{node}</div>
                  <div className="w-px h-8 bg-line" />
                </React.Fragment>
              ))}
            </div>

            {/* Branch rail: 5 columns on desktop, stacked rows on mobile */}
            <div className="relative">
              <div className="hidden md:block absolute left-[10%] right-[10%] top-0 h-px bg-line" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
                {architecture.branches.map((b) => (
                  <div key={b.title} className="flex md:flex-col items-start md:items-center gap-3 md:gap-0 rounded-inner md:rounded-none border md:border-0 border-line p-3 md:p-0">
                    <div className="hidden md:block w-px h-6 bg-line" />
                    <div className={cn(
                      'px-4 py-2.5 rounded-inner text-sm font-semibold text-center shrink-0 min-w-[120px] md:min-w-0',
                      b.primary ? 'bg-brand text-white shadow-[0_6px_18px_-6px_rgba(46,158,79,0.6)]' : 'bg-brand-dark text-white',
                    )}>
                      {b.title}
                    </div>
                    <div className="flex flex-wrap md:flex-col items-center gap-2 md:mt-3 w-full">
                      {b.children.map((c) => (
                        <div key={c} className="px-3 py-2 rounded-inner bg-white border border-line text-[13px] text-ink text-center max-w-full">
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <p className="text-xs text-ink-muted mt-4">Report is the only branch with a terminal confirmation step. Every other branch is a list and a detail view, which keeps the mental model identical across the app.</p>
        </section>

        {/* ── Storyboards ── */}
        <Section id="storyboards" eyebrow="UX storyboards" title="Rahul's day, in twelve frames" subtitle={storyboards.intro}>
          <div className="flex flex-col gap-8">
            {storyboards.boards.map((b, bi) => (
              <Card key={b.title} padding="none" className="overflow-hidden grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
                <figure className="relative bg-white border-b lg:border-b-0 lg:border-r border-line">
                  <img
                    src={b.src}
                    alt={`${b.title} storyboard: ${b.frames.join(' ')}`}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                  <Pill tone={bi === 0 ? 'brand' : 'neutral'} size="md" className="absolute top-4 left-4">{b.title}</Pill>
                </figure>
                <div className="p-6 md:p-8 flex flex-col">
                  <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-brand mb-1">Scenario</p>
                  <h3 className="text-xl font-semibold text-ink leading-snug">{b.subtitle}</h3>
                  <ol className="mt-6 flex flex-col divide-y divide-line">
                    {b.frames.map((f, i) => (
                      <li key={f} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0 text-sm text-ink-muted leading-relaxed">
                        <span className="grid place-items-center w-7 h-7 rounded-full bg-brand-soft text-brand-dark text-[11px] font-bold shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="pt-1">{f}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-xs text-ink-muted mt-4">The big picture frames the emotional arc, from frustration to accomplishment. The close-up became the spine of the Report Litter flow: photo, location, confirmation, points, then tracking under My Activities.</p>
        </Section>

        {/* ── Usability findings ── */}
        <Section id="findings" eyebrow="Usability findings" title="What testing told us, and what changed"
          subtitle="Each finding from usability sessions maps to a concrete decision in the shipped interface.">
          <div className="flex flex-col gap-4">
            {usabilityFindings.map((f, i) => (
              <Card key={f.finding} className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-5 items-start">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-brand text-white text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-ink-muted mb-1">Finding</p>
                  <p className="font-semibold text-ink leading-snug">{f.finding}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-brand mb-1">Design response</p>
                  <p className="text-sm text-ink-muted leading-relaxed">{f.response}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* ── Screens ── */}
        <Section id="screens" eyebrow="High-fidelity screens" title="The shipped interface"
          subtitle="One desktop capture, then the mobile journey as eleven device mockups rendered with the production components and sample data. The dotted line traces the order a citizen moves through them.">

          {/* Desktop: browser frame, top half visible, fades out */}
          <figure className="flex flex-col gap-3">
            <div className="relative rounded-card overflow-hidden border border-line bg-white">
              <div className="flex items-center gap-1.5 px-4 h-9 border-b border-line bg-brand-tint/60">
                <span className="w-2.5 h-2.5 rounded-full bg-line" /><span className="w-2.5 h-2.5 rounded-full bg-line" /><span className="w-2.5 h-2.5 rounded-full bg-line" />
                <span className="ml-3 flex-1 max-w-[360px] h-5 rounded-full bg-white border border-line text-[11px] text-ink-muted flex items-center px-3">greeneye.app</span>
              </div>
              {/* The capture is 1200 x 3500. This box shows the top half of it, then fades into the page. */}
              <div className="relative aspect-[3/5] md:aspect-[24/35] overflow-hidden">
                <img src={desktopScreen.src} alt={desktopScreen.title} loading="lazy" className="absolute inset-x-0 top-0 w-full h-auto" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-tint via-brand-tint/85 to-transparent" />
              </div>
            </div>
            <figcaption className="flex items-baseline justify-between gap-4">
              <div>
                <h4 className="font-semibold text-ink">{desktopScreen.title}</h4>
                <p className="text-sm text-ink-muted">{desktopScreen.caption}</p>
              </div>
              <Button to="/" variant="ghost" size="sm" trailingIcon className="shrink-0">Open live</Button>
            </figcaption>
          </figure>

          {/* Mobile journey */}
          <SubHeading hint="Rendered from src/components/casestudy · sample data">Mobile journey</SubHeading>
          <Card padding="none" tone="tint" className="overflow-hidden">
            <ScreenFlow items={mobileFlow} />
          </Card>
          <p className="text-xs text-ink-muted mt-4">Screens 01 to 07 are the Report Litter flow end to end. Screens 08 to 11 are where the report pays off: tracking, points, drives and reading. Every mockup uses the same tokens, radii and icon badges as the live app.</p>

          <SubHeading hint="Rendered live from src/components/ui">Component specimens</SubHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <div className="flex flex-col gap-2"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Activity card</p><ActivitySpecimen /></div>
            <div className="flex flex-col gap-2"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Event card</p><EventSpecimen /></div>
            <div className="flex flex-col gap-2"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Article card</p><ArticleSpecimen /></div>
          </div>
        </Section>

        {/* ── Design system ── */}
        <Section id="design-system" eyebrow="Design system" title="One green, four neutrals, three radii"
          subtitle="Every value below is a Tailwind v4 theme token in index.css and is used verbatim across the app. Nothing on this page is a mock-up; the swatches, type and controls are the real components.">

          {/* Colours */}
          <SubHeading hint="Tailwind classes: bg-brand, text-ink, border-line…">Colour palette</SubHeading>
          <div className="flex flex-col gap-6">
            {colorGroups.map((g) => (
              <div key={g.title}>
                <div className="flex items-baseline gap-3 mb-3">
                  <h4 className="font-semibold text-ink">{g.title}</h4>
                  <p className="text-sm text-ink-muted">{g.description}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {g.swatches.map((s) => (
                    <Card key={s.token} padding="none" className="overflow-hidden">
                      <div className="h-20 flex items-end p-3" style={{ backgroundColor: s.hex }}>
                        <span className={cn('text-xs font-semibold', s.onDark ? 'text-white/90' : 'text-ink/80')}>{s.hex}</span>
                      </div>
                      <div className="p-3">
                        <p className="font-semibold text-ink text-sm">{s.name}</p>
                        <p className="text-[11px] font-mono text-brand-dark mt-0.5">--color-{s.token}</p>
                        <p className="text-xs text-ink-muted mt-1.5 leading-snug">{s.usage}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {overlays.map((o, i) => (
                <Card key={o.name} padding="none" className="overflow-hidden grid grid-cols-[140px_1fr]">
                  <div className="relative">
                    <img src={IMAGES.movement} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    {i === 0 ? <div className="absolute inset-0 hero-overlay" /> : <div className="absolute inset-3 frosted rounded-full grid place-items-center text-xs font-semibold">Frosted</div>}
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-ink text-sm">{o.name}</p>
                    <p className="text-[11px] font-mono text-ink-muted mt-1 break-words">{o.css}</p>
                    <p className="text-xs text-ink-muted mt-2">{o.usage}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Typography */}
          <SubHeading hint="Plus Jakarta Sans · 400 / 500 / 600 / 700">Typography</SubHeading>
          <Card padding="none" className="overflow-hidden">
            <div className="p-6 md:p-8 border-b border-line bg-brand-tint/50 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <p className="text-[64px] leading-none font-semibold tracking-tight text-ink">Aa</p>
                <p className="text-sm text-ink-muted mt-3">Plus Jakarta Sans. Geometric, slightly wide, with a friendly lowercase. Headlines use 600 with tight tracking; body copy stays at 400.</p>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                {[400, 500, 600, 700].map((w) => (
                  <div key={w}><p className="text-3xl text-ink" style={{ fontWeight: w }}>Ag</p><p className="text-[11px] text-ink-muted mt-1">{w}</p></div>
                ))}
              </div>
            </div>
            <div className="divide-y divide-line">
              {typeScale.map((t) => (
                <div key={t.name} className="grid grid-cols-1 md:grid-cols-[150px_1fr_auto] gap-2 md:gap-6 items-center px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-[11px] text-ink-muted">{t.size} · {t.weight} · lh {t.lineHeight}</p>
                  </div>
                  <p className={cn('truncate text-ink', t.className)}>{t.sample}</p>
                  <p className="hidden md:block text-[11px] font-mono text-ink-muted">tracking {t.tracking}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Spacing & radius */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
            <div>
              <SubHeading hint="4px base · Tailwind scale">Spacing</SubHeading>
              <Card className="flex flex-col gap-3">
                {spacing.map((s) => (
                  <div key={s} className="flex items-center gap-4">
                    <span className="w-10 text-xs font-mono text-ink-muted text-right">{s}px</span>
                    <div className="h-4 bg-brand rounded-[3px]" style={{ width: s * 3 }} />
                    <span className="text-[11px] text-ink-muted">{s === 4 ? 'icon gaps' : s === 8 ? 'chip gaps' : s === 12 ? 'grid gaps (mobile)' : s === 16 ? 'page padding (mobile)' : s === 24 ? 'card padding, page padding (desktop)' : s === 32 ? 'large card padding' : s === 48 ? 'section header gap' : s === 64 ? 'section gap' : 'section padding'}</span>
                  </div>
                ))}
              </Card>
            </div>
            <div>
              <SubHeading hint="--radius-inner / card / hero">Border radius</SubHeading>
              <Card className="grid grid-cols-2 gap-4">
                {radii.map((r) => (
                  <div key={r.token} className="flex flex-col gap-3">
                    <div className="h-20 bg-brand-soft border border-brand/30" style={{ borderRadius: r.px }} />
                    <div>
                      <p className="text-sm font-semibold text-ink">{r.name} <span className="text-ink-muted font-normal">· {r.px === 9999 ? 'full' : `${r.px}px`}</span></p>
                      <p className="text-[11px] font-mono text-brand-dark">{r.token}</p>
                      <p className="text-xs text-ink-muted mt-1">{r.usage}</p>
                    </div>
                  </div>
                ))}
              </Card>
            </div>
          </div>

          {/* Shadows */}
          <SubHeading hint="Borders first, shadows for emphasis only">Elevation</SubHeading>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {shadows.map((s, i) => (
              <div key={s.name} className="flex flex-col gap-3">
                <div
                  className={cn('h-24 rounded-card bg-white', i === 0 && 'border border-line')}
                  style={i === 0 ? undefined : { boxShadow: s.css.split(' + ')[0] }}
                />
                <div>
                  <p className="text-sm font-semibold text-ink">{s.name}</p>
                  <p className="text-[10px] font-mono text-ink-muted mt-0.5 break-words">{s.css}</p>
                  <p className="text-xs text-ink-muted mt-1">{s.usage}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <SubHeading hint="src/components/ui/Button.tsx">Buttons</SubHeading>
          <Card padding="lg" className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8">
            <div className="flex flex-col gap-6">
              {[
                { label: 'Primary', desc: 'Brand fill, white text, soft green glow. Trailing circle icon optional.', el: <><Button trailingIcon>Get Started</Button><Button icon={Camera} trailingIcon>Report Litter</Button></> },
                { label: 'Ghost', desc: 'White with hairline border. Turns brand on hover.', el: <><Button variant="ghost" trailingIcon>View all</Button><Button variant="ghost" icon={Heart}>Save</Button></> },
                { label: 'Soft', desc: 'Brand-soft fill for secondary emphasis.', el: <Button variant="soft" icon={Send}>Send message</Button> },
                { label: 'Sizes', desc: 'sm 14px · md 15px · lg 16px', el: <><Button size="sm">Small</Button><Button size="md">Medium</Button><Button size="lg">Large</Button></> },
                { label: 'Disabled', desc: '50% opacity, pointer events off.', el: <Button disabled>Submit Report</Button> },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-[110px_1fr] gap-4 items-start">
                  <div><p className="text-sm font-semibold text-ink">{row.label}</p><p className="text-[11px] text-ink-muted mt-0.5 leading-snug">{row.desc}</p></div>
                  <div className="flex flex-wrap gap-2 items-center">{row.el}</div>
                </div>
              ))}
            </div>
            <div className="relative rounded-card overflow-hidden min-h-[260px]">
              <img src={IMAGES.hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 hero-overlay" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <span className="frosted self-start rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase">Frosted variant</span>
                <div className="flex flex-col items-start gap-3">
                  <Button variant="frosted" trailingIcon>Get Started</Button>
                  <StatChip label="Reports Filed" value="1.2k+" avatars={[]} />
                </div>
              </div>
              <p className="absolute bottom-3 right-4 text-[11px] text-white/80">Used only on photography</p>
            </div>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            {[
              { s: 'Hover', d: 'Primary darkens to brand-dark; ghost gets brand text and border. 200ms.' },
              { s: 'Focus', d: '2px brand ring with 2px offset, visible on keyboard focus only.' },
              { s: 'Active', d: 'No transform. Colour holds, the trailing icon stays put.' },
            ].map((x) => <Card key={x.s} tone="tint" padding="sm"><p className="text-sm font-semibold text-ink">{x.s}</p><p className="text-xs text-ink-muted mt-1">{x.d}</p></Card>)}
          </div>

          {/* Cards */}
          <SubHeading hint="src/components/ui/Card.tsx">Cards</SubHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card><IconBadge icon={Leaf} /><h4 className="font-semibold text-ink mt-4">Surface</h4><p className="text-sm text-ink-muted mt-1">White, 1px line border, 24px radius, 20 to 24px padding. The default.</p></Card>
            <Card tone="soft"><IconBadge icon={Leaf} variant="white" /><h4 className="font-semibold text-ink mt-4">Soft</h4><p className="text-sm text-ink-muted mt-1">Brand-soft fill. Used once per row to break rhythm, as in the reference.</p></Card>
            <Card tone="tint"><IconBadge icon={Leaf} /><h4 className="font-semibold text-ink mt-4">Tint</h4><p className="text-sm text-ink-muted mt-1">Mint fill for cards nested inside white cards, like the redeem steps.</p></Card>
            <Card interactive className="md:col-span-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4"><IconBadge icon={Sparkles} variant="soft" /><div><h4 className="font-semibold text-ink">Interactive</h4><p className="text-sm text-ink-muted">Hover me. Border turns brand, card lifts 2px and gains the hover-lift shadow. 200ms.</p></div></div>
              <ArrowRight className="text-brand shrink-0" size={18} />
            </Card>
          </div>

          {/* Inputs */}
          <SubHeading hint="Native elements styled with tokens">Inputs</SubHeading>
          <Card padding="lg" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-ink block mb-2">Text input</span>
                <input type="text" placeholder="Search location…" className="w-full bg-brand-tint border border-line rounded-inner px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition" />
                <span className="text-xs text-ink-muted mt-1.5 block">Mint fill, line border, 16px radius. Focus adds a 2px brand ring.</span>
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-ink block mb-2">With leading icon</span>
                <div className="flex items-center gap-2 bg-brand-tint border border-line rounded-inner px-4 py-3 focus-within:ring-2 focus-within:ring-brand focus-within:border-brand transition">
                  <Search size={18} className="text-ink-muted" /><input type="text" placeholder="Search…" className="bg-transparent outline-none flex-1 text-ink placeholder:text-ink-muted/70" />
                </div>
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-ink block mb-2">Error state</span>
                <input type="text" defaultValue="Missing photo" className="w-full bg-status-rejected-soft border border-status-rejected/40 rounded-inner px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-status-rejected transition" />
                <span className="text-xs text-status-rejected mt-1.5 block">Please add a photo and location to submit your report.</span>
              </label>
            </div>
            <div className="flex flex-col gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-ink block mb-2">Textarea</span>
                <textarea rows={4} placeholder="Add any additional details about the litter here…" className="w-full bg-brand-tint border border-line rounded-inner px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition resize-none" />
              </label>
              <div>
                <span className="text-sm font-semibold text-ink block mb-2">Choice chips</span>
                <div className="flex gap-2">
                  {['Small', 'Medium', 'Large'].map((q, i) => (
                    <span key={q} className={cn('flex-1 py-3 rounded-inner border-2 text-sm font-semibold text-center', i === 1 ? 'border-brand bg-brand-soft text-brand' : 'border-line bg-brand-tint text-ink-muted')}>{q}</span>
                  ))}
                </div>
                <span className="text-xs text-ink-muted mt-1.5 block">Selected: brand border and soft fill. Used for type and quantity.</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-ink block mb-2">Segmented control</span>
                <div className="inline-flex bg-white border border-line rounded-full p-1">
                  <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-brand text-white">Upcoming</span>
                  <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-ink-muted">Completed</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Badges & icons */}
          <SubHeading hint="Lucide icons · 2px stroke">Badges, pills and icons</SubHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <p className="text-sm font-semibold text-ink mb-4">Icon badge variants</p>
              <div className="flex flex-wrap items-end gap-5">
                {(['solid', 'soft', 'outline', 'white'] as const).map((v) => (
                  <div key={v} className="flex flex-col items-center gap-2"><IconBadge icon={Recycle} variant={v} size="lg" /><span className="text-[11px] text-ink-muted">{v}</span></div>
                ))}
                <div className="w-px h-10 bg-line mx-1" />
                {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2"><IconBadge icon={Camera} size={s} /><span className="text-[11px] text-ink-muted">{s}</span></div>
                ))}
              </div>
              <p className="text-xs text-ink-muted mt-4">Sizes 32 / 40 / 48 / 56px with icons at 15 / 18 / 22 / 26px.</p>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-ink mb-4">Status pills</p>
              <div className="flex flex-wrap gap-2">
                <Pill tone="pending" dot>Pending</Pill><Pill tone="info" dot>Assigned</Pill><Pill tone="resolved" dot>Resolved</Pill><Pill tone="rejected" dot>Rejected</Pill>
                <Pill tone="brand">Featured</Pill><Pill tone="neutral">recyclable</Pill><Pill tone="brand" size="md">Upcoming</Pill>
              </div>
              <p className="text-xs text-ink-muted mt-4">Fully rounded, 11 to 12px semibold, soft background with the matching status text colour. The dot variant is used in tables and lists.</p>
              <div className="flex items-center gap-4 mt-5 pt-5 border-t border-line">
                {[16, 18, 22, 26, 32].map((s) => <div key={s} className="flex flex-col items-center gap-1 text-ink"><Leaf size={s} /><span className="text-[10px] text-ink-muted">{s}</span></div>)}
                <p className="text-xs text-ink-muted ml-2">Icon sizes in px. Never below 15px inside a badge.</p>
              </div>
            </Card>
          </div>

          {/* Motion */}
          <SubHeading hint="CSS transitions + Motion for sheets">Motion</SubHeading>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {motion.map((m) => (
              <Card key={m.name} tone="tint" padding="sm">
                <p className="text-sm font-semibold text-ink">{m.name}</p>
                <p className="text-[11px] font-mono text-brand-dark mt-0.5">{m.value}</p>
                <p className="text-xs text-ink-muted mt-2">{m.usage}</p>
              </Card>
            ))}
          </div>

          {/* Patterns */}
          <SubHeading>Design patterns</SubHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {patterns.map((p, i) => (
              <Card key={p.title} className="flex flex-col gap-3">
                <IconBadge icon={[Layers, Camera, Leaf, Sparkles, Smartphone, Eye][i % 6]} variant="soft" />
                <div><h4 className="font-semibold text-ink">{p.title}</h4><p className="text-sm text-ink-muted leading-relaxed mt-1">{p.body}</p></div>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 mt-4">
            <Card tone="tint" className="flex flex-col gap-6">
              <p className="text-sm font-semibold text-ink">Numbered process step</p>
              <div className="flex gap-8"><StepItem number={1} title="Spot the Litter" description="Notice a dumping spot on your route." /><StepItem number={2} title="Snap and Report" description="Capture a photo and drop a pin." align="right" /></div>
            </Card>
            <Card tone="tint">
              <p className="text-sm font-semibold text-ink mb-4">Layout & breakpoints</p>
              <div className="flex flex-col divide-y divide-line">
                {breakpoints.map((b) => (
                  <div key={b.name} className="py-3 first:pt-0 last:pb-0 grid grid-cols-[90px_1fr] gap-3">
                    <div><p className="text-sm font-semibold text-ink">{b.name}</p><p className="text-[11px] text-ink-muted">{b.range}</p></div>
                    <p className="text-xs text-ink-muted leading-relaxed">{b.notes}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-ink-muted mt-4">Mobile-first. One breakpoint keeps the codebase small; grids collapse to a single column below it.</p>
            </Card>
          </div>
        </Section>

        {/* ── Accessibility ── */}
        <Section id="accessibility" eyebrow="Accessibility" title="Built to pass, not just to look right"
          subtitle="Contrast ratios below are computed at render time from the live hex values, so this table can't drift from the tokens.">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-5 items-start">
            <Card className="flex flex-col gap-4">
              <IconBadge icon={A11yIcon} />
              <ul className="flex flex-col gap-3">
                {accessibility.map((a) => <li key={a} className="flex items-start gap-2 text-sm text-ink-muted leading-relaxed"><Check size={16} className="text-brand shrink-0 mt-0.5" />{a}</li>)}
              </ul>
              <p className="text-xs text-ink-muted pt-4 border-t border-line">WCAG 2.1 AA requires 4.5:1 for normal text and 3:1 for large text (18px+ bold or 24px+) and UI components. Small brand-coloured text uses Brand Dark, which clears 4.5:1.</p>
            </Card>
            <Card padding="none" className="overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-tint/70 border-b border-line text-[11px] uppercase tracking-[0.14em] text-ink-muted font-semibold text-left">
                    <th className="px-4 py-3">Pair</th><th className="px-4 py-3">Sample</th><th className="px-4 py-3">Ratio</th><th className="px-4 py-3">AA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {contrastPairs.map((p) => {
                    const ratio = contrast(p.fg, p.bg);
                    const threshold = p.size === 'large' ? 3 : 4.5;
                    const pass = ratio >= threshold;
                    return (
                      <tr key={p.label}>
                        <td className="px-4 py-3">
                          <p className="font-medium text-ink text-[13px]">{p.label}</p>
                          <p className="text-[10px] font-mono text-ink-muted">{p.fg} on {p.bg}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold border border-line" style={{ color: p.fg, backgroundColor: p.bg }}>Report litter</span>
                        </td>
                        <td className="px-4 py-3 font-semibold text-ink tabular-nums">{ratio.toFixed(2)}:1</td>
                        <td className="px-4 py-3">
                          <Pill tone={pass ? 'resolved' : 'rejected'} dot>{pass ? (p.size === 'large' ? 'Pass · large' : 'Pass') : 'Fail'}</Pill>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          </div>
        </Section>

        {/* ── Takeaways ── */}
        <Section id="takeaways" eyebrow="Takeaways & next steps" title="What we learned, and where this goes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card tone="soft" padding="lg">
              <h3 className="font-semibold text-ink text-lg mb-4">Takeaways</h3>
              <ul className="flex flex-col gap-3">
                {takeaways.map((t) => <li key={t} className="flex items-start gap-3 text-[15px] text-ink leading-relaxed"><IconBadge icon={Check} size="sm" variant="white" /> {t}</li>)}
              </ul>
            </Card>
            <Card padding="lg">
              <h3 className="font-semibold text-ink text-lg mb-4">Next steps</h3>
              <ol className="flex flex-col gap-3">
                {nextSteps.map((n, i) => (
                  <li key={n} className="flex items-start gap-3 text-[15px] text-ink-muted leading-relaxed">
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-brand text-white text-[11px] font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>{n}
                  </li>
                ))}
              </ol>
            </Card>
          </div>

          <Card padding="lg" className="mt-10 relative overflow-hidden bg-brand border-brand text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <img src={IMAGES.hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">See it in the wild</h3>
              <p className="text-white/85 mt-2 max-w-[460px]">Every component on this page ships in the app. Open the home page, file a report, and watch it appear under My Activities.</p>
            </div>
            <div className="relative flex gap-3 shrink-0">
              <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-white text-brand font-semibold px-5 py-2.5 hover:bg-brand-soft transition-colors">Open Green Eye <ArrowRight size={16} /></Link>
              <Link to="/report" className="inline-flex items-center gap-2 rounded-full frosted font-semibold px-5 py-2.5 hover:bg-white/30 transition-colors"><Camera size={16} /> Report litter</Link>
            </div>
          </Card>
        </Section>
      </div>
    </div>
  );
}
