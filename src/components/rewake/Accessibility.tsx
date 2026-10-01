import React from 'react';
import { CheckCircle2, Eye, Keyboard, ListVideo, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';
import { accessibility } from '../../data/caseStudy-rewake';

/* Rewake accessibility section — the contrast ratios are genuinely computed
   from the token hex values with the WCAG formula, not hardcoded. */

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

type Pair = {
  label: string;
  sub: string;
  required: number;
  fg: string;
  bg: string;
  sample: string;
  kind?: 'text' | 'button' | 'stat' | 'ring';
  border?: boolean;
};

const PAIRS: Pair[] = [
  { label: 'Headings on paper', sub: 'Normal text · 4.5:1', required: 4.5, fg: '#0C1113', bg: '#F7FAFB', sample: 'Book your session', border: true },
  { label: 'Body on white', sub: 'Normal text · 4.5:1', required: 4.5, fg: '#4F5D64', bg: '#FFFFFF', sample: 'Three quick steps', border: true },
  { label: 'Captions on paper', sub: 'Normal text · 4.5:1', required: 4.5, fg: '#627177', bg: '#F7FAFB', sample: 'Book up to 7 days ahead', border: true },
  { label: 'Primary button', sub: 'Normal text · 4.5:1', required: 4.5, fg: '#FFFFFF', bg: '#04708A', sample: 'Book Now', kind: 'button' },
  { label: 'Links on white', sub: 'Normal text · 4.5:1', required: 4.5, fg: '#04708A', bg: '#FFFFFF', sample: 'Start your booking', border: true },
  { label: 'Brand pill', sub: 'Normal text · 4.5:1', required: 4.5, fg: '#06586C', bg: '#ECF9FC', sample: 'Confirmed' },
  { label: 'Stats on dark', sub: 'Large text only · 3:1', required: 3, fg: '#6DD1E8', bg: '#0C1113', sample: '2k+', kind: 'stat' },
  { label: 'Error message', sub: 'Normal text · 4.5:1', required: 4.5, fg: '#B91C1C', bg: '#FEF2F2', sample: 'Cancelled' },
  { label: 'Success pill', sub: 'Normal text · 4.5:1', required: 4.5, fg: '#047857', bg: '#ECFDF5', sample: 'Completed' },
  { label: 'Warning badge', sub: 'Normal text · 4.5:1', required: 4.5, fg: '#B45309', bg: '#FFFBEB', sample: 'Duplicate' },
  { label: 'Focus ring', sub: 'UI component · 3:1', required: 3, fg: '#048CAC', bg: '#FFFFFF', sample: 'Focus', kind: 'ring' },
];

function SampleChip({ p }: { p: Pair }) {
  if (p.kind === 'stat') {
    return <span className="inline-flex items-center rounded-[10px] px-3.5 py-1.5 font-display text-[19px] leading-none" style={{ background: p.bg, color: p.fg }}>{p.sample}</span>;
  }
  if (p.kind === 'ring') {
    return <span className="inline-flex items-center rounded-full bg-white border-2 px-3.5 py-1.5 text-[13px] font-semibold text-ink leading-none" style={{ borderColor: p.fg }}>{p.sample}</span>;
  }
  return (
    <span
      className={cn('inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] leading-none', p.kind === 'button' ? 'font-bold' : 'font-semibold', p.border && 'border border-line')}
      style={{ background: p.bg, color: p.fg }}
    >
      {p.sample}
    </span>
  );
}

const commitmentIcons = { contrast: Eye, keyboard: Keyboard, labels: CheckCircle2, motion: ListVideo };

export default function AccessibilityContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-6 mt-10 items-start">
      {/* Commitments */}
      <div className="bg-white border border-line rounded-[20px] p-8">
        <span className="grid place-items-center w-14 h-14 rounded-[14px] bg-brand text-white"><ShieldCheck size={24} /></span>
        <h3 className="text-[19px] font-bold text-ink mt-6">{accessibility.commitmentsTitle}</h3>
        <ul className="mt-6 space-y-5">
          {accessibility.commitments.map((c) => {
            const Icon = commitmentIcons[c.icon as keyof typeof commitmentIcons];
            return (
              <li key={c.icon} className="flex items-start gap-4">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-brand-soft text-brand shrink-0"><Icon size={14} /></span>
                <span className="text-[14px] text-ink/85 leading-relaxed">{c.text}</span>
              </li>
            );
          })}
        </ul>
        <p className="text-[12px] text-ink-muted leading-relaxed border-t border-line pt-5 mt-7">{accessibility.wcagNote}</p>
      </div>

      {/* Contrast table */}
      <div className="bg-white border border-line rounded-[14px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left">
            <thead>
              <tr className="bg-[#F4F6F7]">
                {['Pair', 'Sample', 'Ratio', 'Result'].map((h) => (
                  <th key={h} className="px-6 py-4 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PAIRS.map((p) => {
                const ratio = contrast(p.fg, p.bg);
                const pass = ratio >= p.required;
                return (
                  <tr key={p.label} className="border-t border-line align-middle">
                    <td className="px-6 py-4.5 w-[30%]">
                      <p className="text-[14.5px] font-bold text-ink">{p.label}</p>
                      <p className="text-[12.5px] text-ink-muted mt-0.5">{p.sub}</p>
                    </td>
                    <td className="px-6 py-4.5 w-[34%]"><SampleChip p={p} /></td>
                    <td className="px-6 py-4.5 w-[18%] text-[15px] font-extrabold text-ink">{ratio.toFixed(2)}:1</td>
                    <td className="px-6 py-4.5">
                      <span className={cn(
                        'inline-flex items-center rounded-[7px] border px-3 py-1 text-[11px] font-bold tracking-[0.08em] leading-none',
                        pass ? 'bg-[#ECFDF5] border-[#B9E6CF] text-[#047857]' : 'bg-[#FEF2F2] border-[#F6CBCB] text-[#B91C1C]',
                      )}>
                        {pass ? 'PASS' : 'FAIL'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] text-ink-muted leading-relaxed border-t border-line px-6 py-4">{accessibility.tableNote}</p>
      </div>
    </div>
  );
}
