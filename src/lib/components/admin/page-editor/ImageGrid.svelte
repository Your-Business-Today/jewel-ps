<script>
	import { copyOfList } from '$lib/brochure/page-content.js';

	/** @type {{ content: Record<string, unknown>, key: string, max: number, onchoose: (index: number) => void }} */
	let { content = $bindable(), key, max, onchoose } = $props();

	const urls = $derived(/** @type {string[]} */ (copyOfList(content, key)));

	/** @param {number} index */
	function removeAt(index) {
		const remaining = copyOfList(content, key);
		remaining.splice(index, 1);
		content[key] = remaining;
	}
</script>

<div class="imggrid">
	{#each urls as url, i (i)}
		<div class="imggrid__cell">
			<img src={url} alt="" />
			<div class="imggrid__cellbtns">
				<button type="button" title="Change" onclick={() => onchoose(i)}>
					✎
				</button>
				<button type="button" title="Remove" onclick={() => removeAt(i)}>
					✕
				</button>
			</div>
		</div>
	{/each}
	{#if urls.length < max}
		<button type="button" class="imggrid__add" onclick={() => onchoose(urls.length)}>
			+ Add
		</button>
	{/if}
</div>

<style>
	.imggrid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
		gap: 0.55rem;
	}

	.imggrid__cell {
		position: relative;
		aspect-ratio: 4 / 3;
		border-radius: 8px;
		overflow: hidden;
		border: 1px solid var(--line);
	}

	.imggrid__cell img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.imggrid__cellbtns {
		position: absolute;
		top: 4px;
		right: 4px;
		display: flex;
		gap: 4px;
	}

	.imggrid__cellbtns button {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		border: 0;
		background: rgba(255, 255, 255, 0.92);
		cursor: pointer;
		font-size: 0.75rem;
		line-height: 1;
	}

	.imggrid__add {
		aspect-ratio: 4 / 3;
		border: 1.5px dashed var(--line);
		border-radius: 8px;
		background: none;
		color: var(--ink-600);
		font: inherit;
		font-size: 0.85rem;
		cursor: pointer;
	}

	.imggrid__add:hover {
		border-color: var(--accent-500);
		color: var(--accent-600);
	}
</style>
