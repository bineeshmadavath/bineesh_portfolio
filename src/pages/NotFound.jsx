import { Button, Eyebrow, Section } from '../components/ui/Primitives';
export default function NotFound() {
  return (
    <Section>
      <div className="stack" style={{ '--stack-gap': '20px', maxWidth: 640 }}>
        <Eyebrow>404</Eyebrow>
        <h1>That page isn't here.</h1>
        <p className="lede">The link may be old, or the page moved during the redesign. The work is still all on the home page.</p>
        <div><Button to="/">Back to work</Button></div>
      </div>
    </Section>
  );
}
