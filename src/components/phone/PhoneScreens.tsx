import React from 'react';
import {
  Camera, MapPin, Mic, MessageSquare, ChevronRight, Check, Activity, Calendar, Trophy, Newspaper, ArrowRight,
  Leaf, Recycle, AlertTriangle, Zap, Shirt, Syringe, Home, FlaskConical, Gift, Heart, Play, X, Navigation, Crosshair, Loader2,
} from 'lucide-react';
import { IMAGES } from '../../lib/images';
import { cn } from '../../lib/utils';
import { Phone, MiniCard, MiniBtn, MiniPill, MiniBadge, MiniLabel } from './Phone';

/* ───────────────────────── sample data ───────────────────────── */

const litterTypes = [
  { label: 'Organic', icon: Leaf, on: false },
  { label: 'Recycl.', icon: Recycle, on: true },
  { label: 'Hazard', icon: AlertTriangle, on: false },
  { label: 'Electr.', icon: Zap, on: false },
  { label: 'Cloth', icon: Shirt, on: false },
  { label: 'Medical', icon: Syringe, on: false },
  { label: 'Rubble', icon: Home, on: false },
  { label: 'Chem.', icon: FlaskConical, on: true },
];

const mockReports = [
  { place: 'Vasco da Gama Square, Fort Kochi', when: '18 Apr · 09:10 AM', status: 'pending' as const, icon: Recycle, types: ['recyclable', 'chemical'] },
  { place: 'North Railway Station, Ernakulam', when: '29 Mar · 02:30 PM', status: 'resolved' as const, icon: Leaf, types: ['organic'] },
  { place: 'Gov. High School, Kakkanad', when: '02 Mar · 05:45 PM', status: 'info' as const, icon: Home, types: ['rubble'] },
];

const mockEvents = [
  { title: 'Fort Kochi beach cleanup', place: 'Vasco da Gama Square', when: 'Sat 05 Oct · 7:00 AM', liked: true },
  { title: 'Kakkanad school compound drive', place: 'Gov. High School, Kakkanad', when: 'Sun 13 Oct · 8:30 AM', liked: false },
  { title: 'Marine Drive walkway sweep', place: 'Marine Drive, Ernakulam', when: 'Sat 19 Oct · 6:30 AM', liked: false },
];

const mockArticles = [
  { title: 'World Environment Day', date: '1 Apr 2025', icon: '🌍', tag: 'Awareness', body: 'Why June 5th matters and how Kochi is taking part this year.' },
  { title: '10 ways to cut plastic at home', date: '18 Mar 2025', icon: '♻️', tag: 'Guide', body: 'Small habits that add up to a real drop in household waste.' },
  { title: 'The future of green energy', date: '02 Mar 2025', icon: '⚡', tag: 'Explainer', body: 'How renewables are reshaping the way cities are powered.' },
];

const monthBars = [1, 2, 0, 3, 2, 4, 1, 3, 2, 0, 0, 0];

/* ───────────────────────── shared bits ───────────────────────── */

const StepRow = ({ icon: Icon, title, hint, done, required }: { icon: any; title: string; hint?: string; done?: boolean; required?: boolean }) => (
  <MiniCard className={cn('px-2.5 py-2 flex items-center gap-2', done && 'border-brand/40')}>
    <span className={cn('grid place-items-center w-7 h-7 rounded-[8px] shrink-0', done ? 'bg-brand-soft text-brand' : 'bg-brand-tint text-ink-muted')}><Icon size={13} /></span>
    <div className="flex-1 min-w-0">
      <p className="text-[10px] font-semibold text-ink leading-tight">{title}{required && <span className="text-status-rejected ml-0.5">*</span>}</p>
      {hint && <p className={cn('text-[7.5px] leading-tight mt-0.5', done ? 'text-brand font-semibold uppercase tracking-wide' : 'text-ink-muted')}>{hint}</p>}
    </div>
    {done ? <Check size={12} className="text-brand" /> : <ChevronRight size={12} className="text-ink-muted" />}
  </MiniCard>
);

const Viewfinder = ({ className }: { className?: string }) => (
  <div className={cn('relative rounded-[14px] overflow-hidden bg-black', className)}>
    <img src={IMAGES.process} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/10" />
    {['top-2 left-2 border-t-2 border-l-2', 'top-2 right-2 border-t-2 border-r-2', 'bottom-2 left-2 border-b-2 border-l-2', 'bottom-2 right-2 border-b-2 border-r-2'].map((c) => (
      <span key={c} className={cn('absolute w-4 h-4 border-white/90 rounded-[2px]', c)} />
    ))}
    <span className="absolute left-1/2 -translate-x-1/2 top-2 text-[7px] font-semibold text-white/90 bg-black/40 rounded-full px-1.5 py-0.5">Rear camera</span>
  </div>
);

const MapMock = ({ className }: { className?: string }) => (
  <div className={cn('relative rounded-[14px] overflow-hidden bg-[#E8F1EA] border border-line', className)}>
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 260" preserveAspectRatio="none">
      <rect x="0" y="0" width="200" height="260" fill="#E8F1EA" />
      <path d="M-10 60 C 40 40, 80 90, 130 70 S 200 40, 230 60" stroke="#FFFFFF" strokeWidth="9" fill="none" />
      <path d="M-10 150 L 210 130" stroke="#FFFFFF" strokeWidth="7" fill="none" />
      <path d="M60 -10 C 70 60, 40 120, 80 200 S 110 250, 100 280" stroke="#FFFFFF" strokeWidth="6" fill="none" />
      <path d="M140 -10 L 150 280" stroke="#FFFFFF" strokeWidth="5" fill="none" />
      <rect x="20" y="170" width="30" height="22" rx="3" fill="#D7E6DA" />
      <rect x="160" y="80" width="28" height="30" rx="3" fill="#D7E6DA" />
      <rect x="95" y="20" width="26" height="18" rx="3" fill="#D7E6DA" />
      <circle cx="30" cy="110" r="14" fill="#CDE6D3" />
      <circle cx="175" cy="210" r="18" fill="#CDE6D3" />
      <path d="M0 240 C 60 230, 120 250, 200 235 L 200 260 L 0 260 Z" fill="#BFDDE8" />
    </svg>
    <span className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand/15 animate-pulse" />
    <MapPin size={22} className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-full text-brand fill-brand-soft drop-shadow" strokeWidth={2.2} />
    <span className="absolute right-2 top-2 grid place-items-center w-6 h-6 rounded-full bg-white border border-line text-ink"><Crosshair size={11} /></span>
  </div>
);

/* ───────────────────────── screens ───────────────────────── */

export function HomeScreen() {
  return (
    <Phone home>
      <div className="p-2 flex flex-col gap-2">
        <div className="relative h-[150px] rounded-[16px] overflow-hidden">
          <img src={IMAGES.hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative h-full p-2.5 flex flex-col justify-between text-white">
            <span className="self-start frosted rounded-full px-1.5 py-0.5 text-[6px] font-semibold tracking-[0.12em] uppercase">Watch · Expose · Change</span>
            <div>
              <p className="text-[12.5px] font-semibold leading-[1.1]">Green Future Today.<br />Cleaner Streets Tomorrow.</p>
              <p className="text-[7px] text-white/85 mt-1 leading-snug">Report litter instantly and track your impact.</p>
              <span className="mt-1.5 inline-flex items-center gap-1 frosted rounded-full pl-2 pr-0.5 py-0.5 text-[8px] font-semibold">Report Litter <span className="grid place-items-center w-3.5 h-3.5 rounded-full bg-white text-brand"><Camera size={7} /></span></span>
            </div>
          </div>
        </div>
        <MiniCard className="p-2 flex items-center gap-2 border-brand/40">
          <MiniBadge icon={Camera} size={26} />
          <div className="flex-1"><p className="text-[10px] font-semibold text-ink leading-tight">Report Litter</p><p className="text-[7.5px] text-ink-muted">Snap a photo, pin the spot, done.</p></div>
          <span className="grid place-items-center w-5 h-5 rounded-full bg-brand-soft text-brand"><ArrowRight size={9} /></span>
        </MiniCard>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { icon: Activity, label: 'My Activities', hint: 'Track reports' },
            { icon: Calendar, label: 'Events', hint: 'Join a drive' },
            { icon: Trophy, label: 'Rewards', hint: 'Redeem points' },
            { icon: Newspaper, label: 'Articles', hint: 'Learn & share' },
          ].map((t) => (
            <MiniCard key={t.label} className="p-2 flex flex-col gap-2.5 min-h-[58px]">
              <MiniBadge icon={t.icon} variant="soft" size={20} />
              <div><p className="text-[9px] font-semibold text-ink leading-tight">{t.label}</p><p className="text-[7px] text-ink-muted">{t.hint}</p></div>
            </MiniCard>
          ))}
        </div>
      </div>
    </Phone>
  );
}

export function ReportScreen() {
  return (
    <Phone title="Report Litter">
      <div className="p-2 flex flex-col gap-1 flex-1">
        <StepRow icon={Camera} title="Take Photos" hint="2 photos captured" done required />
        <StepRow icon={MapPin} title="Locate" hint="Location set" done required />
        <StepRow icon={Mic} title="Speak up" hint="Plastic bottles and food waste…" done />
        <StepRow icon={MessageSquare} title="Comment" hint="Optional" />
        <div className="flex items-center justify-between mt-0.5"><MiniLabel>Select type</MiniLabel><span className="text-[6.5px] bg-line text-ink-muted rounded-full px-1.5 py-0.5">multiple</span></div>
        <MiniCard className="p-1.5 grid grid-cols-4 gap-1">
          {litterTypes.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-0.5">
              <span className={cn('relative grid place-items-center w-7 h-7 rounded-[8px] border', t.on ? 'border-brand bg-brand-soft text-brand' : 'border-line bg-brand-tint text-ink-muted')}>
                <t.icon size={12} />
                {t.on && <span className="absolute -top-1 -right-1 grid place-items-center w-3 h-3 rounded-full bg-brand text-white"><Check size={7} strokeWidth={3} /></span>}
              </span>
              <span className={cn('text-[6px] font-semibold uppercase', t.on ? 'text-brand' : 'text-ink-muted')}>{t.label}</span>
            </div>
          ))}
        </MiniCard>
        <MiniLabel>Select quantity</MiniLabel>
        <MiniCard className="p-1.5 grid grid-cols-3 gap-1.5">
          {['Small', 'Medium', 'Large'].map((q, i) => (
            <span key={q} className={cn('py-1.5 rounded-[8px] border text-[8px] font-semibold text-center', i === 1 ? 'border-brand bg-brand-soft text-brand' : 'border-line bg-brand-tint text-ink-muted')}>{q}</span>
          ))}
        </MiniCard>
        <div className="mt-auto pt-1 border-t border-line -mx-2 px-2 bg-white pb-1"><MiniBtn className="py-2">Submit Report</MiniBtn></div>
      </div>
    </Phone>
  );
}

export function PhotoScreen() {
  return (
    <Phone title="Take Photos" dark>
      <div className="p-2 flex flex-col gap-2 flex-1">
        <Viewfinder className="flex-1 min-h-[200px]" />
        <div className="flex gap-1.5">
          {[IMAGES.process, IMAGES.solutions].map((src, i) => (
            <span key={i} className="relative w-11 h-11 rounded-[8px] overflow-hidden border-2 border-brand">
              <img src={src} alt="" className="w-full h-full object-cover" />
              <span className="absolute top-0.5 right-0.5 grid place-items-center w-3 h-3 rounded-full bg-white/90 text-status-rejected"><X size={7} strokeWidth={3} /></span>
            </span>
          ))}
          <span className="w-11 h-11 rounded-[8px] border border-dashed border-white/30 grid place-items-center text-white/50 text-[7px]">+ add</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <MiniBtn variant="soft" className="py-2"><Camera size={10} /> Capture</MiniBtn>
          <MiniBtn className="py-2">Done (2)</MiniBtn>
        </div>
      </div>
    </Phone>
  );
}

export function LocateScreen() {
  return (
    <Phone title="Locate">
      <div className="p-2 flex flex-col gap-2 flex-1">
        <MapMock className="flex-1 min-h-[190px]" />
        <MiniCard className="p-2 flex items-center gap-2">
          <MiniBadge icon={MapPin} variant="soft" size={24} />
          <div className="flex-1 min-w-0">
            <p className="text-[9.5px] font-semibold text-ink leading-tight truncate">Vasco da Gama Square</p>
            <p className="text-[7.5px] text-ink-muted truncate">Fort Kochi, Kochi, Kerala 682001</p>
            <p className="text-[7.5px] text-brand font-semibold">9.958491, 76.239932</p>
          </div>
          <span className="grid place-items-center w-6 h-6 rounded-[8px] bg-brand text-white"><Navigation size={10} /></span>
        </MiniCard>
        <p className="text-[7px] text-ink-muted text-center">Drag the pin or tap the map to adjust</p>
        <MiniBtn variant="dark" className="py-2"><MapPin size={10} /> Update location</MiniBtn>
        <MiniBtn className="py-2">Done</MiniBtn>
      </div>
    </Phone>
  );
}

export function VoiceScreen() {
  return (
    <Phone title="Speak up">
      <div className="p-2 flex flex-col gap-2 flex-1">
        <MiniCard className="p-2.5 flex-1 min-h-[120px] flex flex-col">
          <p className="text-[9.5px] text-ink leading-relaxed">
            There are around six bags of plastic bottles and food waste dumped next to the bus stop, right beside the drain. It has been here since the weekend market.
          </p>
          <span className="mt-auto self-end text-[7.5px] text-status-rejected font-semibold">Clear</span>
        </MiniCard>
        <div className="flex items-end justify-center gap-[2px] h-8 px-4">
          {Array.from({ length: 34 }).map((_, i) => (
            <span key={i} className="w-[2px] rounded-full bg-brand" style={{ height: `${Math.max(14, Math.abs(Math.sin(i * 0.7)) * 100)}%`, opacity: 0.45 + (i % 3) * 0.2 }} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-1 py-1">
          <span className="grid place-items-center w-14 h-14 rounded-full bg-status-rejected text-white shadow-[0_0_0_8px_rgba(166,59,69,0.12)]"><Mic size={22} /></span>
          <p className="text-[8px] text-ink-muted font-medium">Listening…</p>
        </div>
        <MiniBtn className="py-2 mt-auto">Done</MiniBtn>
      </div>
    </Phone>
  );
}

export function CommentScreen() {
  return (
    <Phone title="Comment">
      <div className="p-2 flex flex-col gap-2 flex-1">
        <MiniCard className="p-2.5 flex-1 min-h-[160px] flex flex-col ring-2 ring-brand/60 border-brand">
          <p className="text-[9.5px] text-ink leading-relaxed">
            Dumped behind the bus shelter on Princess Street. Mostly plastic bottles, food containers and a few paint cans. Stray dogs have started pulling the bags open.
            <span className="inline-block w-[1.5px] h-[10px] bg-brand align-middle ml-0.5 animate-pulse" />
          </p>
          <div className="mt-auto flex items-center justify-between text-[7px] text-ink-muted"><span>Be specific: landmark, size, hazards</span><span>168 / 500</span></div>
        </MiniCard>
        <div className="grid grid-cols-3 gap-1">
          {['Near a school', 'Blocking drain', 'Hazardous'].map((t) => <span key={t} className="text-[7px] font-semibold text-brand-dark bg-brand-soft rounded-full px-1.5 py-1 text-center">+ {t}</span>)}
        </div>
        <MiniBtn className="py-2 mt-auto">Done</MiniBtn>
      </div>
    </Phone>
  );
}

export function SummaryScreen() {
  return (
    <Phone title="Summary">
      <div className="flex flex-col flex-1">
        <div className="flex justify-center pt-1.5"><span className="w-10 h-1 rounded-full bg-line" /></div>
        <div className="p-2 flex flex-col gap-2 flex-1 overflow-hidden">
          <MiniLabel>Photos</MiniLabel>
          <div className="flex gap-1.5">
            {[IMAGES.process, IMAGES.solutions].map((src, i) => <img key={i} src={src} alt="" className="w-[46%] h-14 rounded-[8px] object-cover" />)}
          </div>
          <MiniLabel>Location</MiniLabel>
          <MiniCard className="p-1.5 flex items-center gap-1.5">
            <img src={IMAGES.process} alt="" className="w-8 h-8 rounded-[6px] object-cover" />
            <div className="flex-1 min-w-0"><p className="text-[8.5px] font-semibold text-ink truncate">Vasco da Gama Square</p><p className="text-[7px] text-brand font-semibold">9.958491, 76.239932</p></div>
            <span className="grid place-items-center w-5 h-5 rounded-[6px] bg-brand text-white"><Navigation size={9} /></span>
          </MiniCard>
          <MiniLabel>Speak up</MiniLabel>
          <MiniCard className="p-1.5 flex items-center gap-1.5">
            <span className="grid place-items-center w-6 h-6 rounded-full bg-brand text-white"><Play size={9} fill="currentColor" /></span>
            <span className="flex-1 flex items-center gap-[2px] h-4">{Array.from({ length: 26 }).map((_, i) => <span key={i} className="w-[1.5px] rounded-full bg-brand/70" style={{ height: `${30 + Math.abs(Math.sin(i * 0.9)) * 70}%` }} />)}</span>
            <span className="text-[7px] text-ink-muted">0:14</span>
          </MiniCard>
          <div className="flex items-center gap-1.5 flex-wrap">
            <MiniLabel>Type</MiniLabel><MiniPill tone="brand">Recyclable</MiniPill><MiniPill tone="brand">Chemical</MiniPill>
            <MiniLabel>Qty</MiniLabel><MiniPill tone="neutral">Medium</MiniPill>
          </div>
        </div>
        <div className="p-2 border-t border-line bg-white"><MiniBtn className="py-2"><Check size={10} /> Confirm &amp; Upload</MiniBtn></div>
      </div>
    </Phone>
  );
}

export function ActivitiesScreen() {
  return (
    <Phone title="My Activities">
      <div className="p-2 flex flex-col gap-1.5 flex-1">
        <div className="flex items-center justify-between"><p className="text-[10px] font-semibold text-ink">Recent activity</p><span className="text-[7px] text-ink-muted border border-line bg-white rounded-full px-1.5 py-0.5">Refresh</span></div>
        {mockReports.map((r) => (
          <MiniCard key={r.place} className="p-2 flex items-start gap-1.5">
            <MiniBadge icon={r.icon} variant="soft" size={22} />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-1"><p className="text-[8.5px] font-semibold text-ink leading-tight truncate">{r.place}</p><MiniPill tone={r.status}>{r.status === 'info' ? 'Assigned' : r.status[0].toUpperCase() + r.status.slice(1)}</MiniPill></div>
              <p className="text-[7px] text-ink-muted mt-0.5">{r.when}</p>
            </div>
          </MiniCard>
        ))}
        <MiniCard className="p-2 mt-auto">
          <div className="flex items-baseline justify-between mb-1"><p className="text-[8.5px] font-semibold text-ink">Issues reported</p><span className="text-[7px] text-ink-muted">this year</span></div>
          <div className="flex items-end gap-[3px] h-12">
            {monthBars.map((v, i) => <span key={i} className={cn('flex-1 rounded-t-[2px]', v ? 'bg-brand' : 'bg-line')} style={{ height: `${Math.max(8, (v / 4) * 100)}%` }} />)}
          </div>
          <div className="flex justify-between text-[5.5px] text-ink-muted mt-1"><span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span></div>
        </MiniCard>
        <div className="flex items-center justify-between text-[7px] text-ink-muted px-0.5"><span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-soft" />Open · 2</span><span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand" />Resolved · 1</span></div>
      </div>
    </Phone>
  );
}

export function RewardsScreen() {
  return (
    <Phone title="Rewards">
      <div className="p-2 flex flex-col gap-2 flex-1">
        <MiniCard className="p-3 flex flex-col items-center text-center">
          <div className="relative w-24 h-14 mb-1"><span className="absolute inset-2 rounded-full bg-brand-soft blur-md" /><img src={`${import.meta.env.BASE_URL}reward-image.png`} alt="" className="relative w-full h-full object-contain" /></div>
          <MiniLabel>Your balance</MiniLabel>
          <p className="text-[22px] font-bold text-ink leading-none mt-0.5">60 <span className="text-[10px] font-semibold">points</span></p>
          <p className="text-[7px] text-ink-muted mt-0.5">Earned from 6 verified reports</p>
          <MiniBtn className="w-full mt-2 py-2"><Gift size={10} /> Redeem Points</MiniBtn>
        </MiniCard>
        <MiniCard className="p-2 flex flex-col divide-y divide-line flex-1">
          <p className="text-[8.5px] font-semibold text-ink pb-1.5">Your point bank</p>
          {[['Ernakulam', '05-01-2025'], ['Trivandrum', '05-01-2025'], ['Calicut', '02-01-2025'], ['Fort Kochi', '28-12-2024']].map(([loc, d]) => (
            <div key={loc} className="flex items-center gap-1.5 py-1.5">
              <MiniBadge icon={Gift} variant="soft" size={18} />
              <div className="flex-1"><p className="text-[8.5px] font-semibold text-ink leading-tight">{loc}</p><p className="text-[6.5px] text-ink-muted">{d}</p></div>
              <p className="text-[9px] font-bold text-ink">+10</p>
            </div>
          ))}
        </MiniCard>
      </div>
    </Phone>
  );
}

export function EventsScreen() {
  return (
    <Phone title="Events">
      <div className="p-2 flex flex-col gap-1.5 flex-1">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold text-ink">Community events</p>
          <span className="inline-flex bg-white border border-line rounded-full p-0.5 text-[7px] font-semibold"><span className="px-1.5 py-0.5 rounded-full bg-brand text-white">Upcoming 3</span><span className="px-1.5 py-0.5 text-ink-muted">Done 2</span></span>
        </div>
        {mockEvents.map((e) => (
          <MiniCard key={e.title} className="p-2 flex items-start gap-1.5">
            <MiniBadge icon={Calendar} size={22} />
            <div className="flex-1 min-w-0">
              <p className="text-[8.5px] font-semibold text-ink leading-tight">{e.title}</p>
              <p className="text-[7px] text-brand font-semibold mt-0.5">{e.when}</p>
              <p className="text-[7px] text-ink-muted flex items-center gap-0.5 truncate"><MapPin size={7} /> {e.place}</p>
            </div>
            <Heart size={11} className={e.liked ? 'fill-brand text-brand' : 'text-line'} />
          </MiniCard>
        ))}
        <MiniCard className="p-2 mt-auto bg-brand-tint">
          <p className="text-[7px] font-semibold uppercase tracking-wide text-brand">Featured drive</p>
          <p className="text-[8.5px] font-semibold text-ink leading-tight mt-0.5">Fort Kochi beach cleanup</p>
          <div className="flex gap-1 mt-1.5"><MiniBtn className="flex-1 py-1.5">Join</MiniBtn><MiniBtn variant="ghost" className="py-1.5 px-2"><Heart size={9} /></MiniBtn></div>
        </MiniCard>
      </div>
    </Phone>
  );
}

export function ArticlesScreen() {
  return (
    <Phone title="Articles">
      <div className="p-2 flex flex-col gap-1.5 flex-1">
        <p className="text-[10px] font-semibold text-ink">Articles</p>
        {mockArticles.map((a) => (
          <MiniCard key={a.title} className="p-2 flex flex-col gap-1.5">
            <div className="flex gap-2">
              <span className="w-10 h-10 rounded-[8px] bg-brand-soft grid place-items-center text-lg shrink-0">{a.icon}</span>
              <div className="min-w-0"><MiniPill tone="brand">{a.tag}</MiniPill><p className="text-[8.5px] font-semibold text-ink leading-tight mt-0.5">{a.title}</p><p className="text-[6.5px] text-ink-muted">{a.date}</p></div>
            </div>
            <p className="text-[7px] text-ink-muted leading-snug line-clamp-2">{a.body}</p>
            <div className="flex items-center justify-between border-t border-line pt-1"><span className="text-[6.5px] text-ink-muted">3 min read</span><span className="text-[7px] font-semibold text-brand flex items-center gap-0.5">Read <ArrowRight size={7} /></span></div>
          </MiniCard>
        ))}
      </div>
    </Phone>
  );
}

/* ───────────────────────── the flow ───────────────────────── */

export const mobileFlow: { id: string; label: string; caption: string; node: React.ReactNode }[] = [
  { id: 'home', label: 'Home', caption: 'Hero, one primary action, four tiles.', node: <HomeScreen /> },
  { id: 'report', label: 'Report Litter', caption: 'Four steps, two required. Type and quantity as chips.', node: <ReportScreen /> },
  { id: 'photo', label: 'Take Photos', caption: 'Rear camera, thumbnails, Capture and Done.', node: <PhotoScreen /> },
  { id: 'locate', label: 'Locate', caption: 'Draggable pin with the address echoed back.', node: <LocateScreen /> },
  { id: 'voice', label: 'Speak Up', caption: 'Live transcript while the mic listens.', node: <VoiceScreen /> },
  { id: 'comment', label: 'Comment', caption: 'Free text with quick-add tags.', node: <CommentScreen /> },
  { id: 'summary', label: 'Summary', caption: 'Everything in one sheet before upload.', node: <SummaryScreen /> },
  { id: 'activities', label: 'My Activities', caption: 'Status per report and a monthly chart.', node: <ActivitiesScreen /> },
  { id: 'rewards', label: 'Rewards', caption: 'Balance, redeem, and the point bank.', node: <RewardsScreen /> },
  { id: 'events', label: 'Events', caption: 'Upcoming drives with save and join.', node: <EventsScreen /> },
  { id: 'articles', label: 'Articles', caption: 'Tagged reads with an estimated time.', node: <ArticlesScreen /> },
];
