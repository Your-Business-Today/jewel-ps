<script>
	/** @type {{ page: number, totalPages: number }} */
	let { page, totalPages } = $props();

	const hasNewer = $derived(page > 1);
	const hasOlder = $derived(page < totalPages);
</script>

<nav class="pager" aria-label="Pagination">
	{#if hasNewer}
		<a class="btn btn--outline" href="?page={page - 1}">← Newer</a>
	{:else}
		<span class="btn btn--outline is-disabled" aria-disabled="true">← Newer</span>
	{/if}
	<span class="pager__label">Page {page} of {totalPages}</span>
	{#if hasOlder}
		<a class="btn btn--outline" href="?page={page + 1}">Older →</a>
	{:else}
		<span class="btn btn--outline is-disabled" aria-disabled="true">Older →</span>
	{/if}
</nav>

<style>
	.pager { display: flex; align-items: center; gap: 1rem; margin-top: 1.3rem; }
	.pager__label { color: var(--ink-400); font-size: 0.9rem; }
	.pager :global(.btn), .pager .is-disabled { padding: 0.45rem 1.1rem; font-size: 0.88rem; }
	.is-disabled { opacity: 0.45; pointer-events: none; }
</style>
