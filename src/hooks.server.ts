import { COOKIE_THEME_KEY } from '$lib/consts';
import type { Handle } from '@sveltejs/kit';
import type { Theme } from './lib/types';

export const handle = (async ({ event, resolve }) => {
	let theme: Theme = 'system';

	const newTheme = event.url.searchParams.get('theme') as Theme;
	const cookieTheme = event.cookies.get(COOKIE_THEME_KEY) as Theme;

	if (newTheme) {
		theme = newTheme;
	} else if (cookieTheme) {
		theme = cookieTheme;
	}

	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
		});
	}

	return await resolve(event);
}) satisfies Handle;
