<script>
	import BrochureCreateForm from '$lib/components/admin/brochures/BrochureCreateForm.svelte';
	import BrochureListRow from '$lib/components/admin/brochures/BrochureListRow.svelte';

	let { data } = $props();
	let showCreate = $state(false);

	const hasNothingToList = $derived(data.brochures.length === 0 && !showCreate);
</script>

<svelte:head>
	<title>Brochures | Admin | Jewel Property Serve</title>
</svelte:head>

<div class="head">
	<h1>Brochures</h1>
	<div class="head__actions">
		<a class="btn btn--outline" href="/brochure" target="_blank" rel="noopener">View live brochure ↗</a>
		{#if data.configured}
			<button class="btn btn--primary" onclick={() => (showCreate = !showCreate)}>+ New brochure</button>
		{/if}
	</div>
</div>

<p class="hint">
	Build print-quality brochures page by page. Keep them in <strong>draft</strong> while you work —
	the <strong>active</strong> brochure is the one visitors see at <code>/brochure</code> and
	download as a PDF.
</p>

{#if !data.configured}
	<p class="card notice">Supabase is not connected yet — see the dashboard for setup steps.</p>
{:else if data.setupError}
	<div class="card notice">
		<p><strong>The brochure tables don't exist yet.</strong></p>
		<p>
			Run <code>supabase/2026-08-19-brochures.sql</code> in the Supabase SQL Editor once, then
			reload this page.
		</p>
		<p class="notice__err">{data.setupError}</p>
	</div>
{:else}
	{#if showCreate}<BrochureCreateForm />{/if}

	{#if hasNothingToList}
		<p>No brochures yet — create your first one above.</p>
	{:else}
		<ul class="list">
			{#each data.brochures as brochure (brochure.id)}
				<BrochureListRow {brochure} />
			{/each}
		</ul>
	{/if}
{/if}

<style>
	.head { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
	.head h1 { margin: 0; }
	.head__actions { display: flex; gap: 0.8rem; align-items: center; }
	.hint { color: var(--ink-600); margin-block: 0.8rem 1.4rem; max-width: 52rem; }
	.notice { padding: 1.1rem 1.3rem; max-width: 52rem; }
	.notice__err { color: #a33a2a; font-size: 0.85rem; margin: 0; }
	.list { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.8rem; max-width: 60rem; }
</style>
