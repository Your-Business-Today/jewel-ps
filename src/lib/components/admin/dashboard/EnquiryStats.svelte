<script>
	/** @type {{ newEnquiryCount: number, weekCount: number, enquiryCount: number | null }} */
	let { newEnquiryCount, weekCount, enquiryCount } = $props();
</script>

<div class="stats">
	<div class="card stat">
		<span class="stat__label">Unread</span>
		<strong class="stat__num stat__num--gold">{newEnquiryCount}</strong>
	</div>
	<div class="card stat">
		<span class="stat__label">Last 7 days</span>
		<strong class="stat__num">{weekCount}</strong>
	</div>
	<div class="card stat">
		<span class="stat__label">In inbox</span>
		<strong class="stat__num">{enquiryCount ?? 0}</strong>
	</div>
</div>

<style>
	.stats {
		display: grid;
		gap: 1rem;
		max-width: 56rem;
		margin-top: 1rem;
	}

	@media (min-width: 640px) {
		.stats {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.stat {
		padding: 1rem 1.3rem;
		display: grid;
		gap: 0.15rem;
	}

	.stat__label {
		font-family: var(--font-display);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-400);
	}

	.stat__num {
		font-family: var(--font-display);
		font-size: 1.7rem;
		color: var(--ink-900);
	}

	.stat__num--gold {
		color: var(--gold-600);
	}
</style>
