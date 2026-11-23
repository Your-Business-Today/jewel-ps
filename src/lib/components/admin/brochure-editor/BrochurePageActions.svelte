<script>
	import { enhance } from '$app/forms';

	/** @type {{ brochureId: string, pageId: string, isFirst: boolean, isLast: boolean }} */
	let { brochureId, pageId, isFirst, isLast } = $props();

	/** @param {SubmitEvent} event */
	function confirmDeletion(event) {
		if (!confirm('Delete this page?')) event.preventDefault();
	}
</script>

<div class="actions">
	<form method="POST" action="?/movePage" use:enhance>
		<input type="hidden" name="page_id" value={pageId} />
		<input type="hidden" name="direction" value="up" />
		<button class="iconbtn" title="Move up" disabled={isFirst}>↑</button>
	</form>
	<form method="POST" action="?/movePage" use:enhance>
		<input type="hidden" name="page_id" value={pageId} />
		<input type="hidden" name="direction" value="down" />
		<button class="iconbtn" title="Move down" disabled={isLast}>↓</button>
	</form>
	<a class="btn btn--outline btn--sm" href="/admin/brochure/{brochureId}/page/{pageId}">Edit</a>
	<form method="POST" action="?/duplicatePage" use:enhance>
		<input type="hidden" name="page_id" value={pageId} />
		<button class="linkish" type="submit">Duplicate</button>
	</form>
	<form method="POST" action="?/deletePage" use:enhance onsubmit={confirmDeletion}>
		<input type="hidden" name="page_id" value={pageId} />
		<button class="linkish linkish--danger" type="submit">Delete</button>
	</form>
</div>

<style>
	.actions { display: flex; align-items: center; gap: 0.55rem; flex-wrap: wrap; }
	.iconbtn {
		font: inherit;
		width: 1.9rem;
		height: 1.9rem;
		border-radius: 50%;
		border: 1px solid var(--line);
		background: #fff;
		cursor: pointer;
		color: var(--ink-600);
	}
	.iconbtn:hover:not(:disabled) { border-color: var(--ink-400); color: var(--ink-900); }
	.iconbtn:disabled { opacity: 0.35; cursor: default; }
</style>
