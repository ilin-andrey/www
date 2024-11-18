import { COOKIE_THEME_KEY } from '$lib/consts';
import { isTheme } from '$lib/themes';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme');
		const redirectTo = url.searchParams.get('redirectTo');

		if (isTheme(theme)) {
			cookies.set(COOKIE_THEME_KEY, theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		throw redirect(303, redirectTo ?? '/');
	}
};

export const prerender = false;
