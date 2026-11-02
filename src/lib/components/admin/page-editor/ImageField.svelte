<script>
	/** @type {{ url: unknown, onchoose: () => void, onremove: () => void }} */
	let { url, onchoose, onremove } = $props();

	const isFilled = $derived(Boolean(url));
</script>

<div class="imgfield">
	{#if isFilled}
		<img class="imgfield__thumb" src={String(url)} alt="" />
	{/if}
	<div class="imgfield__controls">
		<button type="button" class="btn btn--outline btn--sm" onclick={onchoose}>
			{isFilled ? 'Change photo' : 'Choose photo'}
		</button>
		{#if isFilled}
			<button type="button" class="linkish linkish--danger" onclick={onremove}>Remove</button>
		{/if}
	</div>
</div>

<style>
	.imgfield {
		display: flex;
		gap: 1rem;
		align-items: center;
		flex-wrap: wrap;
	}

	.imgfield__thumb {
		width: 130px;
		height: 92px;
		object-fit: cover;
		border-radius: var(--radius);
		border: 1px solid var(--line);
	}

	.imgfield__controls {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	.btn--sm {
		padding: 0.4rem 1rem;
		font-size: 0.86rem;
	}

	.linkish {
		font: inherit;
		font-size: 0.86rem;
		background: none;
		border: 0;
		padding: 0;
		cursor: pointer;
		color: var(--ink-600);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.linkish--danger {
		color: #a33a2a;
	}
</style>
