import { Section } from '../ui/Primitives';
import { ArrowListBlock, Cards, DecisionsImpact, Journey, Metrics, NarrativeList, Numbered, Persona, Quotes, Research, SolutionHub, SplitImages, Steps, Structure, TabsBlock, TwoLists } from './blocks';

// Blocks that render their own <Section> vs. blocks that are placed inside one.
const inline = { cards: Cards, quotes: Quotes };
const standalone = {
  'narrative-list': NarrativeList, 'split-images': SplitImages, tabs: TabsBlock, numbered: Numbered, metrics: Metrics,
  research: Research, persona: Persona, journey: Journey, structure: Structure, 'two-lists': TwoLists,
  'solution-hub': SolutionHub, steps: Steps, 'decisions-impact': DecisionsImpact, 'arrow-list': ArrowListBlock,
};

export default function CaseSection({ section }) {
  if (section.type === 'group') {
    return (
      <Section alt={section.alt} size="sm">
        <div className="stack" style={{ '--stack-gap': '64px' }}>
          {section.blocks.map((b, i) => { const B = inline[b.type]; return B ? <B key={i} s={b} /> : null; })}
        </div>
      </Section>
    );
  }
  if (inline[section.type]) {
    const B = inline[section.type];
    return <Section alt={section.alt} size="sm"><B s={section} /></Section>;
  }
  const B = standalone[section.type];
  if (!B) { if (import.meta.env.DEV) console.warn('Unknown section type', section.type); return null; }
  return <B s={section} />;
}
