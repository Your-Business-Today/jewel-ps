<script>
	import EnquirySummary from './EnquirySummary.svelte';
	import { receivedAgo, receivedAt } from '$lib/enquiry/received-time.js';

	/** @type {{ enquiry: import('$lib/server/db.js').EnquiryRow, expanded: boolean, ontoggle: () => void }} */
	let { enquiry, expanded, ontoggle } = $props();
	const isNew = $derived(enquiry.status === 'new');
</script>

<button type="button" class="row__head" onclick={ontoggle} aria-expanded={expanded}>
	<span class="row__dot" class:row__dot--new={isNew} aria-hidden="true"></span>
	<EnquirySummary {enquiry} {expanded} />
	<span class="row__side">
		<time datetime={enquiry.created_at} title={receivedAt(enquiry.created_at)}>{receivedAgo(enquiry.created_at)}</time>
		<span class="row__chev" class:row__chev--open={expanded}>▾</span>
	</span>
</button>

<style>
	.row__head {
		font: inherit;
		display: flex;
		align-items: flex-start;
		gap: 0.9rem;
		width: 100%;
		padding: 1rem 1.2rem;
		text-align: left;
		background: none;
		border: 0;
		cursor: pointer;
	}

	.row__head:hover {
		background: rgba(19, 28, 42, 0.03);
	}

	.row__dot {
		flex-shrink: 0;
		margin-top: 0.5rem;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--line);
	}

	.row__dot--new {
		background: var(--gold-500);
		box-shadow: 0 0 0 3px rgba(192, 154, 81, 0.25);
	}

	.row__side {
		flex-shrink: 0;
		text-align: right;
		color: var(--ink-400);
		font-size: 0.8rem;
	}

	.row__chev {
		display: block;
		margin-top: 0.2rem;
		color: var(--accent-500);
		transition: transform 0.15s ease;
	}

	.row__chev--open {
		transform: rotate(180deg);
	}
</style>
