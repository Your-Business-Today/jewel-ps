<script>
	/** @type {{ isArchived: boolean }} */
	let { isArchived } = $props();
</script>

<div class="card empty">
	<p class="empty__title">
		{isArchived ? 'Nothing archived' : 'No enquiries yet'}
	</p>
	<p class="empty__sub">
		{isArchived ? 'Archived enquiries will be kept here.' : 'New quote requests from the website will appear here instantly.'}
	</p>
</div>

<style>
	.empty {
		max-width: 48rem;
		padding: 2.6rem;
		text-align: center;
	}

	.empty__title {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.1rem;
		margin: 0 0 0.2rem;
	}

	.empty__sub {
		color: var(--ink-600);
		font-size: 0.92rem;
		margin: 0;
	}
</style>
