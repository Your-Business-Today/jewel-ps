<script>
	import { enhance } from '$app/forms';

	/** @type {{ brochure: { id: string, title: string }, isActive: boolean }} */
	let { brochure, isActive } = $props();

	/** @param {SubmitEvent} event */
	function confirmDeletion(event) {
		if (!confirm(`Delete “${brochure.title}”? This cannot be undone.`)) event.preventDefault();
	}
</script>

<div class="actions">
	<a class="btn btn--outline btn--sm" href="/admin/brochure/{brochure.id}">Edit</a>
	<a class="btn btn--outline btn--sm" href="/admin/brochure/{brochure.id}/pdf" data-sveltekit-preload-data="off">PDF</a>
	{#if isActive}
		<form method="POST" action="?/deactivate" use:enhance>
			<input type="hidden" name="id" value={brochure.id} />
			<button class="linkish" type="submit">Unpublish</button>
		</form>
	{:else}
		<form method="POST" action="?/activate" use:enhance>
			<input type="hidden" name="id" value={brochure.id} />
			<button class="linkish linkish--go" type="submit">Make active</button>
		</form>
	{/if}
	<form method="POST" action="?/duplicate" use:enhance>
		<input type="hidden" name="id" value={brochure.id} />
		<button class="linkish" type="submit">Duplicate</button>
	</form>
	<form method="POST" action="?/delete" use:enhance onsubmit={confirmDeletion}>
		<input type="hidden" name="id" value={brochure.id} />
		<button class="linkish linkish--danger" type="submit">Delete</button>
	</form>
</div>

<style>
	.actions { display: flex; align-items: center; gap: 0.7rem; flex-wrap: wrap; }
</style>
