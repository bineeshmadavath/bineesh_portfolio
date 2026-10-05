import { profile } from '../../data/profile';
import { Lock } from '../ui/Icons';
import { Button, Label } from '../ui/Primitives';

/** "This case study is locked" message, shared by the card popup and the case study route. */
export default function LockedNotice({ caseStudy, titleId, as: Heading = 'h2' }) {
  return (
    <div className="locked-notice">
      <span className="locked-notice__icon" aria-hidden="true"><Lock width={22} height={22} /></span>
      <div className="stack" style={{ '--stack-gap': '10px' }}>
        <Label tone="accent">Case study {caseStudy.number} · Locked</Label>
        <Heading id={titleId} className="locked-notice__title">{caseStudy.title}</Heading>
        <p className="body">
          This case study isn't public. Email me and I'll take you through it.
        </p>
      </div>
      <div className="locked-notice__contact">
        <Button href={`mailto:${profile.email}?subject=${encodeURIComponent(`Case study request: ${caseStudy.title}`)}`}>Email me</Button>
        <span className="locked-notice__email">{profile.email}</span>
      </div>
    </div>
  );
}
