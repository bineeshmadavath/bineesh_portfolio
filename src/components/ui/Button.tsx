import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

type Variant = 'primary' | 'ghost' | 'frosted' | 'soft';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  /** Renders a small circular icon at the trailing edge, like the reference "Contact us" pill. */
  trailingIcon?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps &
  (
    | ({ to: string } & Omit<React.ComponentProps<typeof Link>, 'to' | 'className' | 'children'>)
    | ({ to?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>)
  );

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark shadow-[0_6px_18px_-6px_rgba(46,158,79,0.6)]',
  ghost: 'bg-white text-ink border border-line hover:border-brand hover:text-brand',
  frosted: 'frosted hover:bg-white/30',
  soft: 'bg-brand-soft text-brand-dark hover:bg-brand hover:text-white',
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2 gap-2',
  md: 'text-[15px] px-5 py-2.5 gap-2.5',
  lg: 'text-base px-6 py-3 gap-3',
};

const trailingBg: Record<Variant, string> = {
  primary: 'bg-white text-brand',
  ghost: 'bg-brand text-white',
  frosted: 'bg-white text-brand',
  soft: 'bg-brand text-white',
};

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon: Icon,
    trailingIcon,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 select-none',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    trailingIcon && 'pr-1.5',
    className,
  );

  const content = (
    <>
      {Icon && !trailingIcon && <Icon size={size === 'sm' ? 16 : 18} />}
      <span>{children}</span>
      {trailingIcon && (
        <span
          className={cn(
            'ml-1 grid place-items-center rounded-full shrink-0',
            size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-7 h-7' : 'w-8 h-8',
            trailingBg[variant],
          )}
        >
          {Icon ? <Icon size={size === 'sm' ? 13 : 15} /> : <ArrowRight size={size === 'sm' ? 13 : 15} />}
        </span>
      )}
    </>
  );

  if ('to' in rest && rest.to) {
    const { to, ...linkRest } = rest as { to: string } & Record<string, unknown>;
    return (
      <Link to={to} className={classes} {...(linkRest as object)}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
