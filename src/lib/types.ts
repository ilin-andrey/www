export const themes = ['system', 'light', 'dark'] as const;

export type Theme = (typeof themes)[number];
