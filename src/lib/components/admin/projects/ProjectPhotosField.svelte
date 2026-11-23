<script>
	import ImagePicker from '$lib/components/admin/ImagePicker.svelte';
	import { ProjectLimits } from '$lib/project-limits.js';

	/**
	 * @type {{
	 *   photos: { src: string, alt: string }[],
	 *   groups: { label: string, images: string[] }[],
	 *   uploads: string[],
	 *   canUpload: boolean
	 * }}
	 */
	let { photos, groups, uploads, canUpload } = $props();

	let chosenPhotos = $state(/** @type {{ src: string, alt: string }[] | null} */ (null));
	let isPicking = $state(false);
	let uploaded = $state(/** @type {string[]} */ ([]));
	const shownPhotos = $derived(chosenPhotos ?? photos);
	const hasRoom = $derived(shownPhotos.length < ProjectLimits.mostPhotos);

	$effect(() => {
		uploaded = uploads;
	});

	/** @param {string} src */
	function addPhoto(src) {
		chosenPhotos = [...shownPhotos, { src, alt: '' }];
	}

	/** @param {number} position */
	function removePhoto(position) {
		chosenPhotos = shownPhotos.filter((_photo, index) => index !== position);
	}
</script>

<fieldset class="photos">
	<legend>Photos <em>(up to {ProjectLimits.mostPhotos}; the first is shown large)</em></legend>
	{#each shownPhotos as photo, position (photo.src + position)}
		<div class="photo">
			<input type="hidden" name="photoSrc" value={photo.src} />
			<img src={photo.src} alt={photo.alt} />
			<label><span>What it shows</span><input name="photoAlt" value={photo.alt} required maxlength={ProjectLimits.longestAlt} /></label>
			<button type="button" class="btn btn--outline" onclick={() => removePhoto(position)}>Remove photo</button>
		</div>
	{/each}
	{#if hasRoom}<button type="button" class="btn btn--outline" onclick={() => (isPicking = true)}>Add a photo</button>{/if}
</fieldset>

<ImagePicker bind:open={isPicking} bind:uploaded {groups} {canUpload} onpick={addPhoto} />

<style>
	.photos { grid-column: 1 / -1; display: grid; gap: 0.8rem; border: 0; padding: 0; margin: 0; }
	legend { font-size: 0.86rem; color: var(--ink-600); margin-bottom: 0.4rem; }
	em { color: var(--ink-400); font-style: normal; }
	.photo { display: grid; grid-template-columns: 7rem 1fr auto; gap: 0.8rem; align-items: center; }
	img { width: 7rem; height: 5rem; object-fit: cover; border: 1px solid var(--line); border-radius: var(--radius); }
	label { display: grid; gap: 0.3rem; font-size: 0.86rem; color: var(--ink-600); }
	input { font: inherit; padding: 0.55rem 0.8rem; border: 1px solid var(--line); border-radius: var(--radius); }
	button { font-size: 0.82rem; padding: 0.35rem 0.9rem; justify-self: start; }
	@media (max-width: 640px) { .photo { grid-template-columns: 1fr; } }
</style>
