<script>
	import RtwSubmissionsTable from '$lib/components/admin/rtw/RtwSubmissionsTable.svelte';
	import RtwPager from '$lib/components/admin/rtw/RtwPager.svelte';

	let { data } = $props();

	const hasNoSubmissions = $derived(data.total === 0);
	const isOneRow = $derived(data.total === 1);
	const hasMorePages = $derived(data.totalPages > 1);
</script>

<svelte:head>
	<title>RTW checks | Admin | Jewel Property Serve</title>
</svelte:head>

<div class="head">
	<h1>RTW checks</h1>
	<a class="btn btn--outline" href="/rtw" target="_blank" rel="noopener">Open the check tool ↗</a>
</div>

<p class="intro">
	Every check completed at <code>/rtw</code> is logged here automatically (one row per engaging
	company, matching the group register). The group register remains the master record — checkers
	still paste their rows into it.
</p>

{#if !data.configured}
	<p class="warn">Supabase is not connected yet — see the dashboard for setup steps.</p>
{:else if data.dbError}
	<p class="warn">
		Could not load submissions — check that the schema (which includes
		the <code>rtw_submissions</code> table, created by <code>supabase/2026-08-26-admin.sql</code>)
		has been run.
		<br /><code class="warn__detail">{data.dbError}</code>
	</p>
{:else if hasNoSubmissions}
	<p>No submissions yet. They'll appear here as soon as someone completes a check at <code>/rtw</code>.</p>
{:else}
	<p class="count">
		{data.total} row{isOneRow ? '' : 's'} · page {data.page} of {data.totalPages}
	</p>

	<RtwSubmissionsTable submissions={data.rows} />

	{#if hasMorePages}<RtwPager page={data.page} totalPages={data.totalPages} />{/if}
{/if}

<style>
	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 0.6rem;
	}

	.head h1 {
		margin: 0;
	}

	.intro {
		color: var(--ink-600);
		max-width: 52rem;
		margin-bottom: 1.4rem;
	}

	.warn {
		background: #fdf6ec;
		border: 1px solid #f0dfc0;
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
		color: #8a5a2a;
	}

	.count {
		color: var(--ink-400);
		font-size: 0.9rem;
		margin-bottom: 0.7rem;
	}

</style>
