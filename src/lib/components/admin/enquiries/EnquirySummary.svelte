<script>
	/** @type {{ enquiry: import('$lib/server/db.js').EnquiryRow, expanded: boolean }} */
	let { enquiry, expanded } = $props();
</script>

<span class="row__main">
	<span class="row__meta">
		<span class="row__name">{enquiry.name}</span>
		{#if enquiry.service}<span class="row__service">{enquiry.service}</span>{/if}
		{#if enquiry.postcode}<span class="row__postcode">{enquiry.postcode}</span>{/if}
	</span>
	<span class="row__message" class:row__message--open={expanded}>{enquiry.message}</span>
</span>

<style>
	.row__main {
		min-width: 0;
		flex: 1;
	}

	.row__meta {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.3rem 0.7rem;
	}

	.row__name {
		font-family: var(--font-display);
		font-weight: 600;
		color: var(--ink-900);
	}

	.row__service {
		background: var(--accent-100);
		color: var(--accent-600);
		border-radius: 999px;
		padding: 0.08rem 0.6rem;
		font-size: 0.72rem;
		font-weight: 500;
	}

	.row__postcode {
		color: var(--ink-400);
		font-size: 0.8rem;
	}

	.row__message {
		display: block;
		margin-top: 0.25rem;
		color: var(--ink-600);
		font-size: 0.92rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.row__message--open {
		white-space: pre-line;
		overflow: visible;
	}
</style>
