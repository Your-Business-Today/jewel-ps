<script>
	import GroupItem from './GroupItem.svelte';
	import { copyOfList } from '$lib/brochure/page-content.js';

	/** @type {{ content: Record<string, unknown>, field: { key: string, itemLabel: string, max?: number, fields: { key: string, label: string, type?: string, placeholder?: string }[] }, onchoose: (index: number, subKey: string) => void }} */
	let { content = $bindable(), field, onchoose } = $props();

	const items = $derived(/** @type {Record<string, unknown>[]} */ (copyOfList(content, field.key)));
	const canAdd = $derived(!field.max || items.length < field.max);

	/** @param {(list: Record<string, unknown>[]) => void} change */
	function changeList(change) {
		const list = copyOfList(content, field.key);
		change(list);
		content[field.key] = list;
	}

	const groupAdd = () =>
		changeList((list) => list.push(Object.fromEntries(field.fields.map((f) => [f.key, '']))));

	/** @param {number} index */
	const groupRemove = (index) => changeList((list) => list.splice(index, 1));

	/**
	 * @param {number} index
	 * @param {-1 | 1} direction
	 */
	function groupMove(index, direction) {
		const target = index + direction;
		if (target < 0 || target >= items.length) return;
		changeList((list) => ([list[index], list[target]] = [list[target], list[index]]));
	}

	/**
	 * @param {number} index
	 * @param {string} subKey
	 * @param {string} value
	 */
	const editItem = (index, subKey, value) =>
		changeList((list) => (list[index] = { ...list[index], [subKey]: value }));
</script>

<div class="groups">
	{#each items as item, i (i)}
		<GroupItem
			{item}
			index={i}
			count={items.length}
			fieldKey={field.key}
			itemLabel={field.itemLabel}
			fields={field.fields}
			onmove={(direction) => groupMove(i, direction)}
			onremove={() => groupRemove(i)}
			onedit={(subKey, value) => editItem(i, subKey, value)}
			onchoose={() => onchoose(i, 'photo')}
		/>
	{/each}
	{#if canAdd}
		<button type="button" class="btn btn--outline btn--sm" onclick={groupAdd}>
			+ Add {field.itemLabel}
		</button>
	{/if}
</div>

<style>
	.groups {
		display: grid;
		gap: 0.8rem;
	}

	.btn--sm {
		padding: 0.4rem 1rem;
		font-size: 0.86rem;
	}
</style>
