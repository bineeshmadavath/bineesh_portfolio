import { Label } from '../ui/Primitives';

export default function Glance({ glance }) {
  const cols = [ ['The problem', 'down', glance.problem], ['The solution', 'accent', glance.solution], ['The impact', 'up', glance.impact] ];
  return (
    <div className="container">
      <div className="glance">
        {cols.map(([l, tone, t]) => (
          <div key={l} className="glance__col"><Label tone={tone}>{l}</Label><div className="glance__text">{t}</div></div>
        ))}
      </div>
    </div>
  );
}
