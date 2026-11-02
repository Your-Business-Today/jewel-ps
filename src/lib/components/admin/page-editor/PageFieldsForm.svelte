<script>
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import PageFieldEditor from './PageFieldEditor.svelte';

	/** @type {{ content: Record<string, unknown>, fields: import('$lib/brochure/templates.js').Field[], dirty: boolean, onchoose: (key: string, index?: number, subKey?: string) => void }} */
	let { content = $bindable(), fields, dirty, onchoose } = $props();
</script>

<form
	class="card fields"
	method="POST"
	action="?/save"
	use:enhance={() => async ({ update }) => {
		await update({ reset: false });
		await invalidateAll();
	}}
>
	<input type="hidden" name="content" value={JSON.stringify(content)} />
	{#each fields as field (field.key)}
		<PageFieldEditor bind:content {field} {onchoose} />
	{/each}
	<div class="fields__save">
		<button class="btn btn--primary" type="submit">Save page</button>
		{#if dirty}
			<span class="fields__dirty">Unsaved changes</span>
		{/if}
	</div>
</form>

<style>
	.fields {
		display: grid;
		gap: 1.2rem;
		padding: 1.5rem;
	}

	.fields__save {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.fields__dirty {
		color: var(--accent-600);
		font-size: 0.88rem;
	}
</style>
