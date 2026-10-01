import { Quote, Star } from 'lucide-react';
import Card from './Card';
import { initials } from '../../lib/utils';
import type { Testimonial } from '../../data/content';

export function StarRow({ count, size = 'h-4 w-4', label }: { count: number; size?: string; label?: string }) {
  return (
    <span className="flex text-warning-400" role="img" aria-label={label ?? `${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className={`${size} fill-current`} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <Card as="figure" variant="soft" padding="lg" className="flex flex-col">
      <Quote className="h-8 w-8 text-primary-200 mb-4" aria-hidden="true" />
      <blockquote className="text-ink-700 leading-relaxed mb-6 flex-grow">"{t.text}"</blockquote>
      <figcaption className="flex items-center gap-3 pt-5 border-t border-ink-100">
        <span className="h-11 w-11 rounded-full bg-primary-700 text-white flex items-center justify-center text-sm font-bold shrink-0">
          {initials(t.name)}
        </span>
        <div>
          <p className="font-extrabold text-ink-900 text-sm">{t.name}</p>
          <p className="text-xs text-ink-400">{t.context}</p>
        </div>
        <span className="ml-auto">
          <StarRow count={t.rating} size="h-3.5 w-3.5" />
        </span>
      </figcaption>
    </Card>
  );
}
