<script>
	import GroupItemHead from './GroupItemHead.svelte';

	/** @typedef {{ key: string, label: string, type?: string, placeholder?: string }} SubField */
	/** @type {{ item: Record<string, unknown>, index: number, count: number, fieldKey: string, itemLabel: string, fields: SubField[], onmove: (direction: -1 | 1) => void, onremove: () => void, onedit: (subKey: string, value: string) => void, onchoose: () => void }} */
	let { item, index, count, fieldKey, itemLabel, fields, onmove, onremove, onedit, onchoose } =
		$props();
</script>

<div class="group card">
	<GroupItemHead
		title="{itemLabel} {index + 1}"
		isFirst={index === 0}
		isLast={index === count - 1}
		{onmove}
		{onremove}
	/>
	{#each fields as sub (sub.key)}
		{@const inputId = `g-${fieldKey}-${index}-${sub.key}`}
		<div class="group__field">
			<label for={inputId}>{sub.label}</label>
			{#if sub.type === 'textarea'}
				<textarea
					id={inputId}
					rows="3"
					value={String(item[sub.key] ?? '')}
					oninput={(e) => onedit(sub.key, e.currentTarget.value)}
				></textarea>
			{:else}
				<div class="group__inline">
					<input
						id={inputId}
						type="text"
						placeholder={sub.placeholder ?? ''}
						value={String(item[sub.key] ?? '')}
						oninput={(e) => onedit(sub.key, e.currentTarget.value)}
					/>
					{#if sub.key === 'photo'}
						<button type="button" class="btn btn--outline btn--sm" onclick={onchoose}>Choose</button>
					{/if}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.group {
		padding: 0.9rem 1rem;
		display: grid;
		gap: 0.7rem;
	}

	.group__field {
		display: grid;
		gap: 0.3rem;
	}

	.group__field label {
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--ink-600);
	}

	.group__field input,
	.group__field textarea {
		font: inherit;
		font-weight: 400;
		font-size: 0.92rem;
		padding: 0.5rem 0.7rem;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		width: 100%;
	}

	.group__field input[type='text'] {
		font-size: inherit;
		padding: 0.6rem 0.8rem;
	}

	.group__field input:focus,
	.group__field textarea:focus {
		outline: 2px solid var(--accent-500);
		outline-offset: 1px;
	}

	.group__inline {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.btn--sm {
		padding: 0.4rem 1rem;
		font-size: 0.86rem;
	}
</style>
