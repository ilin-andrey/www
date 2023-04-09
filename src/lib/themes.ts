import { themes, type Theme } from './types';

export function isTheme(theme: unknown): theme is Theme {
	return typeof theme === 'string' && themes.includes(theme as Theme);
}

export function isSystemTheme(theme: unknown): boolean {
	return typeof theme === 'string' && theme === 'system';
}

export function userPrefersDarkTheme(): boolean {
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
