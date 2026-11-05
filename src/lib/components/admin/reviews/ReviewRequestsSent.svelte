<script>
	import { ukDateTime } from '$lib/admin/uk-date-time.js';

	/** @type {{ dbConfigured: boolean, dbError: string | null, requests: import('$lib/server/review-requests.js').ReviewRequestRow[] }} */
	let { dbConfigured, dbError, requests } = $props();
</script>

<h2>Asked so far</h2>
{#if !dbConfigured}
	<p class="warn">Supabase is not connected, so requests are sent but not listed.</p>
{:else if dbError}
	<p class="warn">
		Could not load the list. The <code>review_requests</code> table comes from
		<code>migrations/2026-11-04-review-requests.sql</code>.
		<br /><code class="warn__detail">{dbError}</code>
	</p>
{:else if requests.length === 0}
	<p>Nobody has been asked yet.</p>
{:else}
	<div class="tablewrap card">
		<table>
			<thead>
				<tr><th>Sent</th><th>Name</th><th>Email</th><th>Work</th></tr>
			</thead>
			<tbody>
				{#each requests as sent (sent.id)}
					<tr><td>{ukDateTime(sent.sent_at)}</td><td>{sent.name}</td><td>{sent.email}</td><td>{sent.work || '—'}</td></tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style>
	h2 {
		margin-bottom: 0.8rem;
	}

	.warn {
		background: var(--warn-tint);
		border: 1px solid var(--warn-line);
		border-radius: var(--radius);
		padding: 0.9rem 1.1rem;
		color: var(--ink-600);
		max-width: 46rem;
	}

	.warn__detail {
		display: inline-block;
		margin-top: 0.5rem;
		font-size: 0.82rem;
		word-break: break-word;
		color: var(--warn-ink);
	}

	.tablewrap {
		overflow-x: auto;
		padding: 0;
	}

	table {
		border-collapse: collapse;
		width: 100%;
		font-size: 0.86rem;
	}

	th,
	td {
		text-align: left;
		vertical-align: top;
		padding: 0.65rem 0.8rem;
		border-bottom: 1px solid var(--line);
	}
</style>
