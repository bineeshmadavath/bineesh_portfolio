import React from 'react';
import { cn } from '../../lib/utils';

type Tone = 'brand' | 'pending' | 'resolved' | 'rejected' | 'info' | 'neutral';

interface PillProps {
  key?: string | number;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  tone?: Tone;
  size?: 'sm' | 'md';
  dot?: boolean;
}

const tones: Record<Tone, string> = {
  brand: 'bg-brand-soft text-brand-dark',
  pending: 'bg-status-pending-soft text-status-pending',
  resolved: 'bg-status-resolved-soft text-status-resolved',
  rejected: 'bg-status-rejected-soft text-status-rejected',
  info: 'bg-status-info-soft text-status-info',
  neutral: 'bg-brand-tint text-ink-muted border border-line',
};

/** Compact rounded status label. Use for report status, categories and counts. */
export default function Pill({ tone = 'brand', size = 'sm', dot = false, className, children, ...rest }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-semibold whitespace-nowrap',
        size === 'sm' ? 'text-[11px] px-2.5 py-1' : 'text-xs px-3 py-1.5',
        tones[tone],
        className,
      )}
      {...rest}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}
