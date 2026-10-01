import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Button from './Button';
import Card from './Card';
import { initials } from '../../lib/utils';
import type { Physio } from '../../types';

type PhysioSummary = Pick<Physio, 'name' | 'specialization' | 'working_days' | 'working_hours'>;

export default function PhysioCard({ physio: p }: { physio: PhysioSummary }) {
  return (
    <Card variant="interactive" padding="lg" className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-16 w-16 rounded-2xl bg-primary-700 text-white flex items-center justify-center font-display text-xl font-semibold shrink-0">
          {initials(p.name)}
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-ink-900">{p.name}</h3>
          <p className="text-sm text-primary-700 font-bold">{p.specialization}</p>
        </div>
      </div>

      <div className="space-y-3 text-sm text-ink-600 mb-8">
        <div className="flex items-start gap-3">
          <Calendar className="h-4.5 w-4.5 text-ink-300 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{p.working_days.join(', ')}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="h-4.5 w-4.5 text-ink-300 shrink-0" aria-hidden="true" />
          <span>{p.working_hours.start} – {p.working_hours.end}</span>
        </div>
      </div>

      <Button to="/book" variant="secondary" size="md" iconRight={ArrowRight} className="mt-auto">
        Book a session
      </Button>
    </Card>
  );
}
