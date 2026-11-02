<script>
	import { receivedAt } from '$lib/enquiry/received-time.js';
	import { replyLink } from '$lib/enquiry/reply-link.js';

	/** @type {{ enquiry: import('$lib/server/db.js').EnquiryRow }} */
	let { enquiry } = $props();
	const phoneLink = $derived(`tel:${(enquiry.phone ?? '').replace(/\s+/g, '')}`);
</script>

<dl class="detail-grid">
	<div>
		<dt>Email</dt>
		<dd><a href={replyLink(enquiry.email)}>{enquiry.email}</a></dd>
	</div>
	<div>
		<dt>Phone</dt>
		<dd>
			{#if enquiry.phone}<a href={phoneLink}>{enquiry.phone}</a>{:else}<span class="muted">No phone given</span>{/if}
		</dd>
	</div>
	<div>
		<dt>Postcode</dt>
		<dd>{enquiry.postcode || '—'}</dd>
	</div>
	<div>
		<dt>Received</dt>
		<dd>{receivedAt(enquiry.created_at)}</dd>
	</div>
</dl>

<style>
	.detail-grid {
		display: grid;
		gap: 0.5rem 2rem;
		margin: 0;
		font-size: 0.9rem;
	}

	@media (min-width: 640px) {
		.detail-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	.detail-grid dt {
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--ink-400);
	}

	.detail-grid dd {
		margin: 0.05rem 0 0;
		color: var(--ink-900);
	}

	.detail-grid a {
		color: var(--accent-600);
	}

	.muted {
		color: var(--ink-400);
	}
</style>
