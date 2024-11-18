<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { type SubmitFunction } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { isSystemTheme, isTheme, userPrefersDarkTheme } from '../themes';
	import type { Theme } from '../types';
	import ThemeToggleIcon from './ThemeToggleIcon.svelte';

	let currentTheme: Theme = 'system';

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const newTheme: Theme = action.searchParams.get('theme') as Theme;

		if (isTheme(newTheme)) {
			document.documentElement.dataset.theme = newTheme;
			currentTheme = newTheme;
		}
	};

	onMount(() => {
		const theme = document.documentElement.dataset.theme;

		if (isTheme(theme)) {
			if (isSystemTheme(theme)) {
				if (userPrefersDarkTheme()) {
					currentTheme = 'dark';
				} else {
					currentTheme = 'light';
				}
			} else {
				currentTheme = theme;
			}
		}
	});
</script>

<form method="POST" use:enhance={submitUpdateTheme}>
	<button
		class="toggle"
		aria-label="Toggle themes"
		aria-live="polite"
		formaction="/?/setTheme&theme={currentTheme === 'dark' ? 'light' : 'dark'}&redirectTo={$page.url
			.pathname}"
	>
		<ThemeToggleIcon />
	</button>
</form>

<style>
	.toggle {
		background: none;
		border: none;
		cursor: pointer;
		margin: 0;
		padding: 0;
		color: #000;
	}

	.toggle:hover {
		color: rgb(233, 207, 13);
	}

	:root[data-theme='dark'] form .toggle {
		color: #fff;
	}

	:root[data-theme='dark'] form .toggle:hover {
		color: rgb(233, 207, 13);
	}

	@media (prefers-color-scheme: dark) {
		:root[data-theme='system'] form .toggle {
			color: #fff;
		}
	}
</style>
