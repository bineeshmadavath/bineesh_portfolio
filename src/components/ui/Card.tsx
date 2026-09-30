import React from 'react';
import { cn } from '../../lib/utils';

type Tone = 'surface' | 'soft' | 'tint';
type Padding = 'none' | 'sm' | 'md' | 'lg';

interface CardProps {
  key?: string | number;
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  tone?: Tone;
  padding?: Padding;
  /** Slightly smaller radius for cards nested inside other cards. */
  inner?: boolean;
  interactive?: boolean;
}

const tones: Record<Tone, string> = {
  surface: 'bg-surface border border-line',
  soft: 'bg-brand-soft border border-brand-soft',
  tint: 'bg-brand-tint border border-line/60',
};

const paddings: Record<Padding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-5 md:p-6',
  lg: 'p-6 md:p-8',
};

export default function Card({
  tone = 'surface',
  padding = 'md',
  inner = false,
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        inner ? 'rounded-inner' : 'rounded-card',
        tones[tone],
        paddings[padding],
        interactive && 'transition-all duration-200 hover:border-brand/60 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-18px_rgba(31,42,36,0.35)] cursor-pointer',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
