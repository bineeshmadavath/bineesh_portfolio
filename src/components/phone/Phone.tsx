import React from 'react';
import { ArrowLeft, UserCircle, Menu, Leaf } from 'lucide-react';
import { cn } from '../../lib/utils';

/* ─────────── Phone frame ─────────── */

interface PhoneProps {
  title?: string;
  /** Home variant renders the pill navbar instead of a back-arrow bar. */
  home?: boolean;
  /** Dark chrome for camera-style screens. */
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Phone({ title, home, dark, children, className }: PhoneProps) {
  return (
    <div
      className={cn(
        'relative w-full aspect-[9/19.8] rounded-[30px] border-[5px] border-ink overflow-hidden flex flex-col',
        'shadow-[0_24px_50px_-28px_rgba(31,42,36,0.55)]',
        dark ? 'bg-ink' : 'bg-brand-tint',
        className,
      )}
    >
      {/* Status bar + notch */}
      <div className={cn('relative h-7 shrink-0 flex items-end justify-between px-4 pb-1 text-[8px] font-semibold', dark ? 'bg-ink text-white' : 'bg-white text-ink')}>
        <span>9:41</span>
        <span className="absolute left-1/2 -translate-x-1/2 top-1 w-14 h-3.5 rounded-full bg-ink" />
        <span className="flex items-center gap-0.5">
          <span className="w-1 h-1.5 rounded-[1px] bg-current" /><span className="w-1 h-2 rounded-[1px] bg-current" /><span className="w-1 h-2.5 rounded-[1px] bg-current" />
          <span className="ml-1 w-4 h-2 rounded-[2px] border border-current" />
        </span>
      </div>

      {/* Header */}
      {home ? (
        <div className="px-2 pt-2 shrink-0">
          <div className="flex items-center gap-1.5 bg-white border border-line rounded-full pl-2.5 pr-1.5 py-1">
            <Menu size={10} className="text-ink" />
            <span className="grid place-items-center w-4 h-4 rounded-full bg-brand text-white"><Leaf size={8} /></span>
            <span className="text-[9px] font-bold text-ink">Green Eye</span>
            <UserCircle size={13} className="ml-auto text-ink-muted" />
          </div>
        </div>
      ) : (
        <div className={cn('shrink-0 border-b px-3 py-1.5 flex items-center gap-1.5 text-[10px] font-semibold', dark ? 'bg-ink border-white/10 text-white' : 'bg-white border-line text-ink')}>
          <ArrowLeft size={10} />
          <span className="truncate">{title}</span>
          <UserCircle size={12} className={cn('ml-auto', dark ? 'text-white/70' : 'text-ink-muted')} />
        </div>
      )}

      <div className="flex-1 min-h-0 overflow-hidden flex flex-col">{children}</div>
    </div>
  );
}

/* ─────────── Mini primitives used inside phones ─────────── */

export const MiniCard = ({ className, children }: { key?: string | number; className?: string; children: React.ReactNode }) => (
  <div className={cn('bg-white border border-line rounded-[10px]', className)}>{children}</div>
);

export const MiniBtn = ({ children, variant = 'primary', className }: { children: React.ReactNode; variant?: 'primary' | 'ghost' | 'soft' | 'dark'; className?: string }) => (
  <div
    className={cn(
      'rounded-full text-[9.5px] font-semibold text-center py-1.5 px-3 leading-none flex items-center justify-center gap-1',
      variant === 'primary' && 'bg-brand text-white',
      variant === 'ghost' && 'bg-white border border-line text-ink',
      variant === 'soft' && 'bg-brand-soft text-brand-dark',
      variant === 'dark' && 'bg-ink text-white',
      className,
    )}
  >
    {children}
  </div>
);

export const MiniPill = ({ children, tone = 'brand' }: { children: React.ReactNode; tone?: 'brand' | 'pending' | 'resolved' | 'rejected' | 'info' | 'neutral' }) => (
  <span
    className={cn(
      'inline-flex items-center gap-1 rounded-full px-1.5 py-[2px] text-[7.5px] font-semibold whitespace-nowrap',
      tone === 'brand' && 'bg-brand-soft text-brand-dark',
      tone === 'pending' && 'bg-status-pending-soft text-status-pending',
      tone === 'resolved' && 'bg-status-resolved-soft text-status-resolved',
      tone === 'rejected' && 'bg-status-rejected-soft text-status-rejected',
      tone === 'info' && 'bg-status-info-soft text-status-info',
      tone === 'neutral' && 'bg-brand-tint text-ink-muted border border-line',
    )}
  >
    <span className="w-1 h-1 rounded-full bg-current" />
    {children}
  </span>
);

export const MiniBadge = ({ icon: Icon, variant = 'solid', size = 22 }: { icon: any; variant?: 'solid' | 'soft'; size?: number }) => (
  <span
    className={cn('grid place-items-center rounded-full shrink-0', variant === 'solid' ? 'bg-brand text-white' : 'bg-brand-soft text-brand')}
    style={{ width: size, height: size }}
  >
    <Icon size={Math.round(size * 0.5)} />
  </span>
);

export const MiniLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[7.5px] font-semibold uppercase tracking-[0.12em] text-ink-muted">{children}</p>
);
