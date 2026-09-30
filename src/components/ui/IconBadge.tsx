import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

type Variant = 'solid' | 'soft' | 'outline' | 'white';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface IconBadgeProps {
  icon: LucideIcon;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variants: Record<Variant, string> = {
  solid: 'bg-brand text-white',
  soft: 'bg-brand-soft text-brand',
  outline: 'bg-white border border-line text-brand',
  white: 'bg-white text-brand shadow-sm',
};

const sizes: Record<Size, { box: string; icon: number }> = {
  sm: { box: 'w-8 h-8', icon: 15 },
  md: { box: 'w-10 h-10', icon: 18 },
  lg: { box: 'w-12 h-12', icon: 22 },
  xl: { box: 'w-14 h-14', icon: 26 },
};

/**
 * Circular icon badge, the most repeated element in the reference design.
 * Default is the solid green circle with a white icon.
 */
export default function IconBadge({ icon: Icon, variant = 'solid', size = 'md', className }: IconBadgeProps) {
  return (
    <span
      className={cn(
        'inline-grid place-items-center rounded-full shrink-0',
        variants[variant],
        sizes[size].box,
        className,
      )}
    >
      <Icon size={sizes[size].icon} strokeWidth={2} />
    </span>
  );
}
