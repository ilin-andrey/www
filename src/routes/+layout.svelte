<script>
	import './styles.css';

	let links = [
		{ title: 'GitHub', url: 'https://github.com/ilin-andrey' },
		{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/andrey-ilin/' }
	];
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />
	<title>Andrey Ilin</title>
	<meta name="description" content="Personal website" />
</svelte:head>

<div class="app">
	<header>
		<h2>Hey! I'm Andrey.</h2>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<ul>
			{#each links as link}
				<li>
					<a href={link.url} target="_blank">{link.title}</a>
				</li>
			{/each}
		</ul>
	</footer>
</div>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-content: center;
		gap: 1rem;
		margin: 0 0 3rem 0;
	}

	main {
		box-sizing: border-box;
	}

	footer {
		max-width: 64rem;
		padding: 0;
		margin: 3rem 0;
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

	.app {
		max-width: 56rem;
		margin: 0 auto;
		padding: 3rem 2rem 0;
	}
</style>
