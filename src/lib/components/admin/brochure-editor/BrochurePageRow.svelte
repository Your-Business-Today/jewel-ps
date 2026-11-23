<script>
	import BrochureDoc from '$lib/components/brochure/BrochureDoc.svelte';
	import { templateName } from '$lib/brochure/templates';
	import BrochurePageActions from './BrochurePageActions.svelte';

	/** @type {{ brochureId: string, page: { id: string, template: string, content: Record<string, unknown> }, position: number, pageCount: number }} */
	let { brochureId, page, position, pageCount } = $props();

	/** @param {Record<string, unknown>} content */
	function pageTitle(content) {
		return String(content.title ?? content.kicker ?? '') || 'Untitled';
	}
</script>

<li class="card pagerow">
	<a class="pagerow__thumb" href="/admin/brochure/{brochureId}/page/{page.id}">
		<div class="pagerow__thumb-inner">
			<BrochureDoc pages={[page]} />
		</div>
	</a>
	<div class="pagerow__text">
		<span class="pagerow__n">Page {position + 1}</span>
		<strong>{templateName(page.template)}</strong>
		<span class="pagerow__title">{pageTitle(page.content)}</span>
	</div>
	<BrochurePageActions {brochureId} pageId={page.id} isFirst={position === 0} isLast={position === pageCount - 1} />
</li>

<style>
	.pagerow { display: flex; align-items: center; gap: 1.1rem; padding: 0.7rem 1rem; flex-wrap: wrap; }
	.pagerow__thumb {
		display: block;
		width: 88px;
		height: 124px;
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: 4px;
		background: #fff;
		flex: 0 0 auto;
	}
	.pagerow__thumb-inner { transform: scale(0.1108); transform-origin: top left; width: 794px; height: 1123px; pointer-events: none; }
	.pagerow__text { display: grid; gap: 0.1rem; margin-right: auto; min-width: 0; }
	.pagerow__n { font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-400); }
	.pagerow__title { color: var(--ink-600); font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 32rem; }
</style>
