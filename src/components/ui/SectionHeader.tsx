import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  eyebrow?: string;
  align?: 'center' | 'left';
  size?: 'md' | 'lg';
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  size = 'lg',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center mx-auto max-w-[620px]' : 'items-start text-left max-w-[560px]',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</span>
      )}
      <h2
        className={cn(
          'font-semibold tracking-tight text-ink leading-[1.15]',
          size === 'lg' ? 'text-3xl md:text-[38px]' : 'text-2xl md:text-3xl',
        )}
      >
        {title}
      </h2>
      {subtitle && <p className="text-ink-muted text-[15px] md:text-base leading-relaxed">{subtitle}</p>}
    </div>
  );
}
