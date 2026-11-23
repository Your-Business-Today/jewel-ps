<script>
	import MediaCell from './MediaCell.svelte';

	/** @type {{ groups: { label: string, images: string[] }[] }} */
	let { groups } = $props();
</script>

{#each groups as group (group.label)}
	<h2 class="section-label">{group.label} <span class="section-label__note">(built into the site)</span></h2>
	<div class="grid">
		{#each group.images as url (url)}
			<MediaCell {url} />
		{/each}
	</div>
{/each}

<style>
	.section-label { margin: 2rem 0 0.9rem; }
	.section-label__note { font-weight: 400; letter-spacing: 0.06em; text-transform: none; color: var(--ink-400); }
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 0.8rem; }
</style>
