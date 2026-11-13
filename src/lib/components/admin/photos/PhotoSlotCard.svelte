<script>
	import { enhance } from '$app/forms';
	import ImagePicker from '$lib/components/admin/ImagePicker.svelte';

	/**
	 * @type {{
	 *   photoSlot: import('$lib/photo-slots.js').PhotoSlot,
	 *   chosenImage: string,
	 *   error: string,
	 *   groups: { label: string, images: string[] }[],
	 *   uploads: string[],
	 *   canUpload: boolean
	 * }}
	 */
	let { photoSlot, chosenImage, error, groups, uploads, canUpload } = $props();

	let isPicking = $state(false);
	let picked = $state('');
	let uploaded = $state(/** @type {string[]} */ ([]));
	/** @type {HTMLFormElement | undefined} */
	let chooseForm = $state();
	const shownImage = $derived(chosenImage || photoSlot.image);

	$effect(() => {
		uploaded = uploads;
	});

	/** @param {string} url */
	function useChosen(url) {
		picked = url;
		queueMicrotask(() => chooseForm?.requestSubmit());
	}
</script>

<div class="card slot">
	<img src={shownImage} alt={photoSlot.label} loading="lazy" />
	<p class="label">{photoSlot.label}</p>
	<p class="state">{chosenImage ? 'Chosen in admin' : 'Default photo'}</p>
	{#if error}<p class="error">{error}</p>{/if}
	<div class="actions">
		<form bind:this={chooseForm} method="POST" action="?/choose" use:enhance>
			<input type="hidden" name="slot" value={photoSlot.slot} />
			<input type="hidden" name="image" value={picked} />
			<button type="button" class="btn btn--primary" onclick={() => (isPicking = true)}>Change photo</button>
		</form>
		{#if chosenImage}
			<form method="POST" action="?/reset" use:enhance>
				<input type="hidden" name="slot" value={photoSlot.slot} />
				<button class="btn btn--outline">Use the default</button>
			</form>
		{/if}
	</div>
</div>

<ImagePicker bind:open={isPicking} bind:uploaded {groups} {canUpload} onpick={useChosen} />

<style>
	.slot { display: grid; gap: 0.4rem; padding: 0.8rem; align-content: start; }
	img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: var(--radius); background: var(--tint); }
	.label { margin: 0.2rem 0 0; font-weight: 600; font-size: 0.9rem; }
	.state, .error { margin: 0; font-size: 0.8rem; }
	.state { color: var(--ink-400); }
	.error { color: var(--warn-ink); }
	.actions { display: flex; flex-wrap: wrap; gap: 0.5rem; }
	button { font-size: 0.8rem; padding: 0.35rem 0.9rem; }
</style>
