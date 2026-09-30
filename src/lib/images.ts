/**
 * Photography used across the landing pages.
 * Sourced from Unsplash (free to use under the Unsplash License).
 * Swap any URL for a local asset in /public if you prefer to self-host.
 */
const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const IMAGES = {
  /** Misty green hills at sunrise. Used for the hero. */
  hero: unsplash('1470071459604-3b5ec3a7fe05', 1800),
  /** Hands cupping a seedling over soil. Used in "Our Solutions". */
  solutions: unsplash('1542601906990-b4d3fb778b09', 1000),
  /** Colour-coded recycling bins. Used in the "How It Works" circle. */
  process: unsplash('1532996122724-e3c354a0b15b', 900),
  /** Forest lake. Used in "Join the Movement". */
  movement: unsplash('1473448912268-2022ce9509d8', 1000),
  /** Local 3D illustration fallback that ships with the app. */
  illustration: '/banner.png',
} as const;
