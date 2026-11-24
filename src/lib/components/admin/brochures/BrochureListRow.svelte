<script>
	import BrochureRowActions from './BrochureRowActions.svelte';

	/** @type {{ brochure: { id: string, title: string, status: string, page_count: number, updated_at: string } }} */
	let { brochure } = $props();

	const BrochureStatus = { active: 'active' };
	const isActive = $derived(brochure.status === BrochureStatus.active);
	const ukShortDate = { day: 'numeric', month: 'short', year: 'numeric' };

	/** @param {string} iso */
	function shortDateOf(iso) {
		return new Date(iso).toLocaleDateString('en-GB', /** @type {Intl.DateTimeFormatOptions} */ (ukShortDate));
	}
</script>

<li class="card row">
	<div class="row__text">
		<strong>
			{brochure.title}
			{#if isActive}
				<span class="badge badge--active">Active</span>
			{:else}
				<span class="badge">Draft</span>
			{/if}
		</strong>
		<span>{brochure.page_count} pages · updated {shortDateOf(brochure.updated_at)}</span>
	</div>
	<BrochureRowActions {brochure} {isActive} />
</li>

<style>
	.row { display: flex; align-items: center; gap: 1rem; padding: 0.9rem 1.2rem; flex-wrap: wrap; }
	.row__text { display: grid; margin-right: auto; min-width: 0; gap: 0.15rem; }
	.row__text span { color: var(--ink-400); font-size: 0.88rem; }
	.badge {
		display: inline-block;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		border-radius: 999px;
		padding: 0.14rem 0.6rem;
		background: var(--tint);
		border: 1px solid var(--line);
		color: var(--ink-600);
		margin-left: 0.5rem;
		vertical-align: 2px;
	}
	.badge--active { background: #eef7ee; border-color: #bfe0bf; color: #2c7a2c; }
</style>
