import { cn } from '../../lib/utils';

interface StepItemProps {
  number: number | string;
  title: string;
  description: string;
  /** Right-aligned layout for steps placed on the right side of the process illustration. */
  align?: 'left' | 'right';
  className?: string;
}

export default function StepItem({ number, title, description, align = 'left', className }: StepItemProps) {
  return (
    <div className={cn('flex flex-col gap-3 max-w-[260px]', align === 'right' && 'md:items-end md:text-right', className)}>
      <span className="grid place-items-center w-9 h-9 rounded-full bg-brand text-white text-xs font-bold tracking-wide">
        {typeof number === 'number' ? String(number).padStart(2, '0') : number}
      </span>
      <div>
        <h4 className="text-[15px] font-semibold text-ink mb-1">{title}</h4>
        <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
