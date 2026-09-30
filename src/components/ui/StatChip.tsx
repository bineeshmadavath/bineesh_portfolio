import React from 'react';
import { cn } from '../../lib/utils';

interface StatChipProps {
  label: string;
  value: React.ReactNode;
  /** Optional avatar URLs shown stacked before the value, like the reference "Happy Customers" chip. */
  avatars?: string[];
  variant?: 'frosted' | 'white';
  className?: string;
}

const fallbackAvatars = ['#2E9E4F', '#6BBE7F', '#A9DAB4'];

export default function StatChip({ label, value, avatars, variant = 'frosted', className }: StatChipProps) {
  return (
    <div
      className={cn(
        'inline-flex flex-col gap-1.5 rounded-2xl px-4 py-3',
        variant === 'frosted' ? 'frosted' : 'bg-white text-ink border border-line shadow-[0_10px_30px_-16px_rgba(31,42,36,0.4)]',
        className,
      )}
    >
      <span className={cn('text-xs font-medium', variant === 'frosted' ? 'text-white/85' : 'text-ink-muted')}>
        {label}
      </span>
      <div className="flex items-center gap-3">
        {avatars !== undefined && (
          <div className="flex -space-x-2">
            {(avatars.length ? avatars : fallbackAvatars).slice(0, 3).map((a, i) =>
              a.startsWith('#') ? (
                <span
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white/80"
                  style={{ backgroundColor: a }}
                />
              ) : (
                <img
                  key={i}
                  src={a}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-full border-2 border-white/80 object-cover"
                />
              ),
            )}
          </div>
        )}
        <span className="text-xl md:text-2xl font-bold tracking-tight leading-none">{value}</span>
      </div>
    </div>
  );
}
