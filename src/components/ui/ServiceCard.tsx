import Card from './Card';
import IconBadge from './IconBadge';
import type { Service } from '../../data/content';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card variant="soft" className="group transition-all hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50">
      <IconBadge
        icon={service.icon}
        tone="outline"
        className="mb-5 group-hover:bg-primary-700 group-hover:border-primary-700 group-hover:text-white"
      />
      <h3 className="text-lg font-extrabold text-ink-900 mb-2">{service.title}</h3>
      <p className="text-sm text-ink-500 leading-relaxed">{service.desc}</p>
    </Card>
  );
}
