const img = (folder, file) => `${import.meta.env.BASE_URL}images/${folder}/${file}`;

const paintingImages = [
  img('paintings', 'avthar.png'),
  img('paintings', 'Calvin and Hobbes-01.png'),
  img('paintings', 'Calvin and Hobbes-02.png'),
  img('paintings', 'Calvin and Hobbes-03.png'),
];

const scribbleImages = [
  img('scribbles', 'indians.jpg'),
  img('scribbles', 'Scribble-Soccor.png'),
  img('scribbles', 'Scribble-Woman with Violin.png'),
  img('scribbles', 'stray-dogs.jpg'),
];

const illustrationImages = [
  img('illustrations', 'presentation-illustration-00.png'),
  img('illustrations', 'presentation-illustration-01.png'),
  img('illustrations', 'story-book-01.png'),
  img('illustrations', 'story-book-02.png'),
  img('illustrations', 'story-book-03.png'),
  img('illustrations', 'story-book-04.png'),
];

const motionThumbnail = img('video', 'art-motion.jpg');
const motionVideos = [
  { type: 'video', src: 'https://player.vimeo.com/video/39095436', thumbnail: 'https://vumbnail.com/39095436.jpg', title: 'Stories in Motion on Vimeo' },
  { type: 'video', src: 'https://www.youtube.com/embed/uFqdKgqHskY', thumbnail: 'https://img.youtube.com/vi/uFqdKgqHskY/hqdefault.jpg', title: 'Stories in Motion on YouTube' },
  { type: 'video', src: 'https://www.youtube.com/embed/QNsk0gBgg9s', thumbnail: 'https://img.youtube.com/vi/QNsk0gBgg9s/hqdefault.jpg', title: 'Stories in Motion on YouTube' },
];

export const collections = [
  { id: 'paintings', eyebrow: '01 · Digital paintings', title: 'Digital Paintings', text: 'Character studies and colour experiments, painted digitally — light, skin and texture pushed as far as they will go.', count: `[${paintingImages.length} pieces]`, image: paintingImages[0], gallery: paintingImages, span: 2, height: 440, items: paintingImages.length },
  { id: 'scribbles', eyebrow: '02 · Scribbles', title: 'Scribbles', text: 'Random pen and digital sketches. Figures, gestures, anything that moves — done fast, to keep the hand honest.', count: `[${scribbleImages.length} pieces]`, image: scribbleImages[0], gallery: scribbleImages, span: 1, height: 440, items: scribbleImages.length },
  { id: 'illustrations', eyebrow: '03 · Illustrations', title: 'Illustrations', text: 'Character and editorial illustration work — the storytelling side of the pencil.', count: `[${illustrationImages.length} pieces]`, image: illustrationImages[0], gallery: illustrationImages, span: 1, height: 360, items: illustrationImages.length },
  { id: 'motion', eyebrow: '04 · Stories in motion', title: 'Stories in Motion', text: 'Short animated stories, from the 2D animation years to recent motion experiments.', count: `[${motionVideos.length} films]`, image: motionThumbnail, gallery: motionVideos, span: 2, height: 360, items: motionVideos.length, video: true },
];

export const bridge = [
  { label: 'Colour', title: 'Palettes that survive a dashboard', text: 'Twenty years of mixing colour by eye is why the semantic colour rules in the SmartVision system took an afternoon, not a sprint.' },
  { label: 'Hierarchy', title: 'Composition is information architecture', text: 'Where the eye lands first in a painting is the same problem as where it lands first on a review screen.' },
  { label: 'Motion', title: 'Timing is a UX tool', text: 'Animation training makes micro-interactions feel considered — easing, anticipation, follow-through — not decorative.' },
];
