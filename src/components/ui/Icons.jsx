const base = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const ArrowRight = (p) => (<svg {...base} {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>);
export const ArrowLeft = (p) => (<svg {...base} {...p}><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></svg>);
export const ArrowDiag = (p) => (<svg {...base} strokeWidth={1.6} width={24} height={24} {...p}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>);
export const Sun = (p) => (<svg {...base} width={18} height={18} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.9 4.9 1.4 1.4" /><path d="m17.7 17.7 1.4 1.4" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.3 17.7-1.4 1.4" /><path d="m19.1 4.9-1.4 1.4" /></svg>);
export const Moon = (p) => (<svg {...base} width={18} height={18} {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>);
export const Print = (p) => (<svg {...base} {...p}><path d="M6 9V3h12v6" /><rect x="6" y="14" width="12" height="7" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /></svg>);
export const Play = (p) => (<svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M8 5v14l11-7z" /></svg>);
export const Menu = (p) => (<svg {...base} width={20} height={20} {...p}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>);
export const Close = (p) => (<svg {...base} width={20} height={20} {...p}><path d="M6 6l12 12" /><path d="M18 6 6 18" /></svg>);
