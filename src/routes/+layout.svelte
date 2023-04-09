<script>
	import ThemeToggler from '$lib/components/ThemeSwitch.svelte';
	import { LINKS } from '$lib/consts';
	import './styles.css';
</script>

<svelte:head>
	<title>Andrey Ilin</title>
</svelte:head>

<div class="app">
	<header>
		<h2>Hey! I'm Andrey.</h2>
		<ThemeToggler />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<ul>
			{#each LINKS as link}
				<li>
					<a href={link.url} target="_blank">{link.title}</a>
				</li>
			{/each}
		</ul>
	</footer>
</div>

<style>
	.app {
		max-width: 56rem;
		margin: 0 auto;
		padding: 3rem 2rem 0;
	}

	ul {
		display: flex;
		flex-direction: row;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		white-space: nowrap;
	}

	li::after {
		margin: 0 0.5em;
		content: '·';
	}

	li:last-child::after {
		content: '';
		margin: 0;
	}

	@media (max-width: 260px) {
		ul {
			flex-direction: column;
			gap: 0.5rem;
		}

		li::after {
			content: '';
		}
	}
</style>
