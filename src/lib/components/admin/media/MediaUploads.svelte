<script>
	import { enhance } from '$app/forms';
	import MediaCell from './MediaCell.svelte';

	/** @type {{ uploads: { name: string, publicUrl: string }[] }} */
	let { uploads } = $props();

	/** @type {string | null} the photo awaiting the second press of Delete */
	let confirmingDeletion = $state(null);
</script>

<h2 class="section-label">Uploaded photos ({uploads.length})</h2>
{#if uploads.length}
	<div class="grid">
		{#each uploads as upload (upload.name)}
			<MediaCell url={upload.publicUrl} alt={upload.name}>
				{#if confirmingDeletion === upload.name}
					<form method="POST" action="?/delete" use:enhance={() => async ({ update }) => { confirmingDeletion = null; await update(); }}>
						<input type="hidden" name="name" value={upload.name} />
						<button class="linkish linkish--danger" type="submit">Really delete?</button>
					</form>
				{:else}
					<button class="linkish linkish--danger" type="button" onclick={() => (confirmingDeletion = upload.name)}>Delete</button>
				{/if}
			</MediaCell>
		{/each}
	</div>
{:else}
	<p class="empty">Nothing uploaded yet — photos you upload here will appear in this library.</p>
{/if}

<style>
	.section-label { margin: 2rem 0 0.9rem; }
	.empty { color: var(--ink-600); }
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 0.8rem; }
</style>
