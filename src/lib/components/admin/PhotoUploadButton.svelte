<script>
	import { uploadPhoto } from '$lib/admin/photo-upload.js';

	/** @type {{ class?: string, onuploaded?: (publicUrl: string) => void, onfinished?: () => void | Promise<void>, onfailed?: (message: string) => void }} */
	let { class: className = '', onuploaded = () => {}, onfinished = () => {}, onfailed = () => {} } = $props();

	let isUploading = $state(false);
	/** @type {HTMLInputElement | undefined} */
	let fileInput = $state();

	/** @param {FileList | null} files */
	async function uploadFiles(files) {
		if (!files?.length) return;
		isUploading = true;
		onfailed('');
		try {
			for (const file of Array.from(files)) onuploaded(await uploadPhoto(file));
			await onfinished();
		} catch (problem) {
			onfailed(problem instanceof Error ? problem.message : 'Upload failed');
		} finally {
			isUploading = false;
			if (fileInput) fileInput.value = '';
		}
	}
</script>

<label class="btn btn--primary upload {className}">
	{isUploading ? 'Uploading…' : '⬆ Upload photos'}
	<input bind:this={fileInput} type="file" accept="image/*" multiple disabled={isUploading} onchange={(event) => uploadFiles(event.currentTarget.files)} />
</label>

<style>
	.upload { position: relative; overflow: hidden; }
	.upload input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
</style>
