<script>
	import { photoLimits, photoProblems } from '$lib/enquiry/photo-limits.js';

	/** @type {{ problem?: string, inputClass: string }} */
	let { problem = '', inputClass } = $props();

	const acceptedTypes = photoLimits.acceptedTypes.join(',');

	/** @param {Event & { currentTarget: HTMLInputElement }} changeEvent */
	function checkPhotoCount(changeEvent) {
		const photoInput = changeEvent.currentTarget;
		const chosenPhotos = photoInput.files;
		const chosenCount = chosenPhotos?.length ?? 0;
		const isTooMany = chosenCount > photoLimits.maximumCount;
		photoInput.setCustomValidity(isTooMany ? photoProblems.tooMany : '');
		photoInput.reportValidity();
	}
</script>

<label class="block sm:col-span-2">
	<span class="mb-2 block text-sm font-medium text-white/80">Photos of the problem</span>
	<input
		type="file"
		name={photoLimits.fieldName}
		accept={acceptedTypes}
		multiple
		class="{inputClass} file:mr-4 file:rounded-full file:border-0 file:bg-gold file:px-4 file:py-2 file:font-display file:text-sm file:font-semibold file:text-night"
		onchange={checkPhotoCount}
	/>
	<span class="mt-1 block text-xs text-grey/80">Optional. Up to {photoLimits.maximumCount} photos help us understand the job and quote faster.</span>
	{#if problem}<span class="mt-1 block text-xs text-red-400">{problem}</span>{/if}
</label>
