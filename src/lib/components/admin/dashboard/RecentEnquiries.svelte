<script>
	import { receivedDay } from '$lib/enquiry/received-time.js';

	/** @type {{ enquiries: Array<{ id: string, name: string, service?: string | null, message: string, status: string, created_at: string }> }} */
	let { enquiries } = $props();
</script>

<ul class="recent">
	{#each enquiries as enquiry (enquiry.id)}
		<li>
			<a class="recent__row" href="/admin/enquiries#e-{enquiry.id}">
				<span class="recent__dot" class:recent__dot--new={enquiry.status === 'new'} aria-hidden="true"
				></span>
				<span class="recent__name">{enquiry.name}</span>
				{#if enquiry.service}<span class="recent__service">{enquiry.service}</span>{/if}
				<span class="recent__preview">{enquiry.message}</span>
				<span class="recent__date">{receivedDay(enquiry.created_at)}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	.recent {
		list-style: none;
		margin: 0.7rem 0 0;
		padding: 0;
		max-width: 56rem;
		display: grid;
	}

	.recent__row {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		padding: 0.55rem 0.9rem;
		border-radius: var(--radius);
		text-decoration: none;
		font-size: 0.93rem;
	}

	.recent__row:hover {
		background: rgba(19, 28, 42, 0.04);
	}

	.recent__dot {
		flex-shrink: 0;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--line);
	}

	.recent__dot--new {
		background: var(--gold-500);
		box-shadow: 0 0 0 3px rgba(192, 154, 81, 0.25);
	}

	.recent__name {
		font-weight: 600;
		color: var(--ink-900);
		white-space: nowrap;
	}

	.recent__service {
		flex-shrink: 0;
		color: var(--accent-500);
		font-size: 0.82rem;
		white-space: nowrap;
	}

	.recent__preview {
		color: var(--ink-400);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-right: auto;
	}

	.recent__date {
		flex-shrink: 0;
		color: var(--ink-400);
		font-size: 0.85rem;
	}
</style>
