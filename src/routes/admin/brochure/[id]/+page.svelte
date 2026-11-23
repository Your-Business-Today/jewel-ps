<script>
	import BrochureHead from '$lib/components/admin/brochure-editor/BrochureHead.svelte';
	import BrochurePageAdders from '$lib/components/admin/brochure-editor/BrochurePageAdders.svelte';
	import BrochurePageRow from '$lib/components/admin/brochure-editor/BrochurePageRow.svelte';

	let { data } = $props();

	const brochure = $derived(data.doc.brochure);
	const pages = $derived(data.doc.pages);
	const hasPages = $derived(pages.length > 0);

	/** @param {SubmitEvent} event */
	function confirmDeletion(event) {
		if (!confirm(`Delete “${brochure.title}” and all its pages? This cannot be undone.`)) event.preventDefault();
	}
</script>

<svelte:head>
	<title>{brochure.title} | Admin | Jewel Property Serve</title>
</svelte:head>

<nav class="crumbs"><a href="/admin/brochure">← All brochures</a></nav>

<BrochureHead {brochure} />
<BrochurePageAdders />

{#if hasPages}
	<ol class="pages">
		{#each pages as page, position (page.id)}
			<BrochurePageRow brochureId={brochure.id} {page} {position} pageCount={pages.length} />
		{/each}
	</ol>
{:else}
	<p class="empty">No pages yet — add your first page above.</p>
{/if}

<form method="POST" action="?/delete" onsubmit={confirmDeletion}>
	<button class="danger" type="submit">Delete this brochure</button>
</form>

<style>
	.crumbs { margin-bottom: 0.6rem; }
	.crumbs a { color: var(--ink-600); text-decoration: none; font-size: 0.92rem; }
	.empty { color: var(--ink-600); }
	.pages { list-style: none; margin: 0 0 1.6rem; padding: 0; display: grid; gap: 0.7rem; }
	.danger {
		font: inherit;
		font-size: 0.88rem;
		color: #a33a2a;
		background: none;
		border: 1px solid #e5b8ae;
		border-radius: 999px;
		padding: 0.45rem 1.1rem;
		cursor: pointer;
	}
	.danger:hover { background: #fdf1ee; }
</style>
