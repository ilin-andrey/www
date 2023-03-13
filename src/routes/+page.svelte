<script>
	let links = [
		{ title: 'Twitter', url: 'https://twitter.com/_andreyilin' },
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

<section>
	<h2>About</h2>

	<p>
		Hey! I'm Andrey. I am a software engineer with over years of experience in the field. Throughout
		my career, I have had the pleasure of working on a variety of projects and technologies, from
		developing web applications to building complex software systems.
	</p>
	<p>
		I am passionate about staying up-to-date with the latest advancements in technology and
		constantly learning new skills to enhance my abilities as an engineer.
	</p>
	<p>Feel free to reach out to me if you have any questions or just want to connect!</p>

	<ul>
		{#each links as link}
			<li>
				<a href={link.url} target="_blank">{link.title}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		display: flex;
		flex-direction: row;
		list-style: none;
		margin: 2rem 0;
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
	}

	@media (max-width: 260px) {
		ul {
			flex-direction: column;
			gap: 0.5rem;
		}

		li {
			white-space: nowrap;
		}

		li::after {
			content: '';
		}
	}
</style>
