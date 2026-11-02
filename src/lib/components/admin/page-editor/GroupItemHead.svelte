<script>
	/** @type {{ title: string, isFirst: boolean, isLast: boolean, onmove: (direction: -1 | 1) => void, onremove: () => void }} */
	let { title, isFirst, isLast, onmove, onremove } = $props();
</script>

<div class="group__head">
	<span>{title}</span>
	<span class="group__btns">
		<button type="button" disabled={isFirst} onclick={() => onmove(-1)}>↑</button>
		<button type="button" disabled={isLast} onclick={() => onmove(1)}>↓</button>
		<button type="button" class="group__del" onclick={onremove}>✕</button>
	</span>
</div>

<style>
	.group__head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--ink-400);
	}

	.group__btns {
		display: flex;
		gap: 0.3rem;
	}

	.group__btns button {
		font: inherit;
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 50%;
		border: 1px solid var(--line);
		background: #fff;
		cursor: pointer;
		color: var(--ink-600);
		font-size: 0.8rem;
		line-height: 1;
	}

	.group__btns button:disabled {
		opacity: 0.3;
		cursor: default;
	}

	.group__del {
		color: #a33a2a;
	}
</style>
