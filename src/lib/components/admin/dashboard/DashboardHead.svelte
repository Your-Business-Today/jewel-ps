<script>
	const today = new Date().toLocaleDateString('en-GB', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		timeZone: 'Europe/London'
	});
</script>

<header class="dash-head">
	<div>
		<h1>Dashboard</h1>
		<p class="dash-head__date">{today}</p>
	</div>
	<a class="btn btn--outline dash-head__site" href="/" target="_blank" rel="noopener">View live site ↗</a>
</header>

<style>
	.dash-head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 1.6rem;
	}

	.dash-head h1 {
		margin-bottom: 0.1rem;
	}

	.dash-head__date {
		color: var(--ink-400);
		margin: 0;
	}

	.dash-head__site {
		padding: 0.5rem 1.2rem;
		font-size: 0.88rem;
	}
</style>
