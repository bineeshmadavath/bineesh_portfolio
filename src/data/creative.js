const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

export const collections = [
  { id: 'paintings', eyebrow: '01 · Digital paintings', title: 'Digital Paintings', text: 'Character studies and colour experiments, painted digitally — light, skin and texture pushed as far as they will go.', count: '[XX pieces]', image: img('art-paintings.jpg'), span: 2, height: 440, items: 9 },
  { id: 'scribbles', eyebrow: '02 · Scribbles', title: 'Scribbles', text: 'Random pen and digital sketches. Figures, gestures, anything that moves — done fast, to keep the hand honest.', count: '[XX pieces]', image: img('art-scribbles.jpg'), span: 1, height: 440, items: 12 },
  { id: 'illustrations', eyebrow: '03 · Illustrations', title: 'Illustrations', text: 'Character and editorial illustration work — the storytelling side of the pencil.', count: '[XX pieces]', image: img('art-illustrations.jpg'), span: 1, height: 360, items: 6 },
  { id: 'motion', eyebrow: '04 · Stories in motion', title: 'Stories in Motion', text: 'Short animated stories, from the 2D animation years to recent motion experiments.', count: '[XX films]', image: img('art-motion.jpg'), span: 2, height: 360, items: 4, video: true },
];

export const bridge = [
  { label: 'Colour', title: 'Palettes that survive a dashboard', text: 'Twenty years of mixing colour by eye is why the semantic colour rules in the SmartVision system took an afternoon, not a sprint.' },
  { label: 'Hierarchy', title: 'Composition is information architecture', text: 'Where the eye lands first in a painting is the same problem as where it lands first on a review screen.' },
  { label: 'Motion', title: 'Timing is a UX tool', text: 'Animation training makes micro-interactions feel considered — easing, anticipation, follow-through — not decorative.' },
];
