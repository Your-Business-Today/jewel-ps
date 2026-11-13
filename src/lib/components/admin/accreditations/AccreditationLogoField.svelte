<script>
	import ImagePicker from '$lib/components/admin/ImagePicker.svelte';

	/** @type {{ image: string, name: string, groups: { label: string, images: string[] }[], uploads: string[], canUpload: boolean }} */
	let { image, name, groups, uploads, canUpload } = $props();

	let chosenImage = $state('');
	let isPicking = $state(false);
	let uploaded = $state(/** @type {string[]} */ ([]));
	const logo = $derived(chosenImage || image);

	$effect(() => {
		uploaded = uploads;
	});
</script>

<div class="logo">
	<input type="hidden" name="image" value={logo} />
	{#if logo}<img src={logo} alt={name} />{:else}<span class="empty">No logo yet</span>{/if}
	<button type="button" class="btn btn--outline" onclick={() => (isPicking = true)}>Choose logo</button>
</div>

<ImagePicker bind:open={isPicking} bind:uploaded {groups} {canUpload} onpick={(url) => (chosenImage = url)} />

<style>
	.logo { display: grid; gap: 0.6rem; align-content: start; justify-items: center; }
	img, .empty { width: 9rem; height: 5rem; object-fit: contain; background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius); }
	.empty { display: grid; place-items: center; font-size: 0.8rem; color: var(--ink-400); }
	button { font-size: 0.82rem; padding: 0.35rem 0.9rem; }
</style>
