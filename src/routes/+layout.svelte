<script>
	import './styles.css';

	const year = new Date().getFullYear();
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>{year}, Andrey Ilin</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		margin: 0 3rem;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		margin: 3rem auto 0;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		padding: 3rem 4rem;
		margin: 0 auto;
	}
</style>
