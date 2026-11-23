<script>
	import { enhance } from '$app/forms';

	/** @type {{ brochure: { id: string, title: string, status: string } }} */
	let { brochure } = $props();

	const BrochureStatus = { active: 'active' };
	const isActive = $derived(brochure.status === BrochureStatus.active);
</script>

<div class="head">
	<form class="head__title" method="POST" action="?/rename" use:enhance>
		<input name="title" value={brochure.title} aria-label="Brochure title" />
		<button class="btn btn--outline btn--sm" type="submit">Rename</button>
	</form>

	<div class="head__actions">
		{#if isActive}
			<span class="badge badge--active">Active</span>
			<form method="POST" action="?/deactivate" use:enhance>
				<button class="btn btn--outline btn--sm" type="submit">Unpublish</button>
			</form>
		{:else}
			<span class="badge">Draft</span>
			<form method="POST" action="?/activate" use:enhance>
				<button class="btn btn--outline btn--sm" type="submit">Make active</button>
			</form>
		{/if}
		<a class="btn btn--outline btn--sm" href="/brochure/print/{brochure.id}" target="_blank" rel="noopener">Preview ↗</a>
		<a class="btn btn--primary btn--sm" href="/admin/brochure/{brochure.id}/pdf" data-sveltekit-preload-data="off">Download PDF</a>
	</div>
</div>

<style>
	.head { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.2rem; }
	.head__title { display: flex; gap: 0.6rem; align-items: center; flex: 1; min-width: 260px; max-width: 34rem; }
	.head__title input {
		font-family: var(--font-display);
		font-size: 1.35rem;
		font-weight: 600;
		padding: 0.45rem 0.7rem;
		border: 1px solid transparent;
		border-radius: var(--radius);
		background: transparent;
		width: 100%;
	}
	.head__title input:hover,
	.head__title input:focus { border-color: var(--line); background: #fff; outline: none; }
	.head__actions { display: flex; align-items: center; gap: 0.7rem; flex-wrap: wrap; }
	.badge {
		display: inline-block;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		border-radius: 999px;
		padding: 0.2rem 0.65rem;
		background: var(--tint);
		border: 1px solid var(--line);
		color: var(--ink-600);
	}
	.badge--active { background: #eef7ee; border-color: #bfe0bf; color: #2c7a2c; }
</style>
