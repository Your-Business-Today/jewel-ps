<script>
	import BrochureDoc from '$lib/components/brochure/BrochureDoc.svelte';
	import { a4PageHeightPixels, a4PageWidthPixels } from '$lib/brochure/a4.js';

	/** @type {{ page: { id: string, template: string }, content: Record<string, unknown>, pageNumber: number }} */
	let { page, content, pageNumber } = $props();

	const scaleBeforeMeasured = 0.5;
	let previewWidth = $state(0);
	const scale = $derived(previewWidth > 0 ? previewWidth / a4PageWidthPixels : scaleBeforeMeasured);
</script>

<div class="editor__preview">
	<div class="editor__preview-label">
		Live preview — page {pageNumber}
	</div>
	<div class="editor__preview-frame" bind:clientWidth={previewWidth}>
		<div
			class="editor__preview-scaler"
			style="transform: scale({scale}); height: {a4PageHeightPixels * scale}px;"
		>
			<BrochureDoc pages={[{ id: page.id, template: page.template, content }]} />
		</div>
	</div>
</div>

<style>
	.editor__preview {
		position: sticky;
		top: 84px;
	}

	.editor__preview-label {
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--ink-400);
		margin-bottom: 0.5rem;
	}

	.editor__preview-frame {
		border: 1px solid var(--line);
		border-radius: 8px;
		overflow: hidden;
		background: #fff;
		box-shadow: var(--shadow-soft);
	}

	.editor__preview-scaler {
		transform-origin: top left;
		width: 794px;
	}
</style>
