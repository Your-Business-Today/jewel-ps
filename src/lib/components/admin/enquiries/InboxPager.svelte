<script>
	/** @type {{ page: number, totalPages: number, total: number, view: string }} */
	let { page, totalPages, total, view } = $props();

	/** @param {string} id */
	function pageHref(id) {
		const p = new URLSearchParams();
		if (view === 'archived') p.set('view', 'archived');
		p.set('page', id);
		return `?${p.toString()}`;
	}
</script>

<nav class="pager" aria-label="Pagination">
	{#if page > 1}
		<a href={pageHref(String(page - 1))} class="btn btn--outline btn--sm">← Newer</a>
	{:else}<span></span>{/if}
	<span class="pager__label">Page {page} of {totalPages} · {total} total</span>
	{#if page < totalPages}
		<a href={pageHref(String(page + 1))} class="btn btn--outline btn--sm">Older →</a>
	{:else}<span></span>{/if}
</nav>

<style>
	.pager {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 1.3rem;
		max-width: 60rem;
	}

	.pager__label {
		color: var(--ink-400);
		font-size: 0.9rem;
	}

	.btn--sm {
		padding: 0.4rem 1rem;
		font-size: 0.84rem;
	}
</style>
