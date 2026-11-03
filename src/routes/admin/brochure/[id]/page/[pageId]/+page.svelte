<script>
	import ImagePicker from '$lib/components/admin/ImagePicker.svelte';
	import PageEditorCrumbs from '$lib/components/admin/page-editor/PageEditorCrumbs.svelte';
	import SaveNotice from '$lib/components/admin/page-editor/SaveNotice.svelte';
	import PageFieldsForm from '$lib/components/admin/page-editor/PageFieldsForm.svelte';
	import DeletePageForm from '$lib/components/admin/page-editor/DeletePageForm.svelte';
	import PagePreview from '$lib/components/admin/page-editor/PagePreview.svelte';
	import { placePickedImage } from '$lib/brochure/page-content.js';

	let { data, form } = $props();

	/** @type {Record<string, unknown>} */
	let content = $state(JSON.parse(JSON.stringify(data.page.content ?? {})));
	const original = $derived(JSON.stringify(data.page.content ?? {}));
	const dirty = $derived(JSON.stringify(content) !== original);

	/** @type {string[]} */
	let uploaded = $state([...data.uploaded]);
	let pickerOpen = $state(false);
	/** @type {{ key: string, index?: number, subKey?: string } | null} */
	let pickTarget = $state(null);

	/**
	 * @param {string} key
	 * @param {number} [index]
	 * @param {string} [subKey]
	 */
	function openPicker(key, index, subKey) {
		pickTarget = { key, index, subKey };
		pickerOpen = true;
	}

	/** @param {string} url */
	function assignPicked(url) {
		if (pickTarget) placePickedImage(content, pickTarget, url);
	}
</script>

<svelte:head>
	<title>Edit page — {data.brochure.title} | Admin | Jewel Property Serve</title>
</svelte:head>

{#key data.page.id}
	<PageEditorCrumbs
		brochure={data.brochure}
		pageNumber={data.pageNumber}
		pageCount={data.pageCount}
		templateName={data.template.name}
		prevId={data.prevId}
		nextId={data.nextId}
	/>

	<div class="editor">
		<div class="editor__form">
			<h1>{data.template.name}</h1>
			<p class="hint">{data.template.description}</p>
			<SaveNotice isSaved={Boolean(form?.saved)} error={form?.error} />

			<PageFieldsForm bind:content fields={data.template.fields} {dirty} onchoose={openPicker} />

			<DeletePageForm />
		</div>

		<PagePreview page={data.page} {content} pageNumber={data.pageNumber} />
	</div>

	<ImagePicker
		bind:open={pickerOpen}
		bind:uploaded
		groups={data.siteImages}
		canUpload={data.canUpload}
		onpick={assignPicked}
	/>
{/key}

<style>
	.editor {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(320px, 480px);
		gap: 2rem;
		align-items: start;
	}

	@media (max-width: 1000px) {
		.editor {
			grid-template-columns: 1fr;
		}
	}

	.editor__form h1 {
		margin: 0 0 0.2rem;
		font-size: 1.6rem;
	}

	.hint {
		color: var(--ink-600);
		margin: 0 0 1rem;
	}
</style>
