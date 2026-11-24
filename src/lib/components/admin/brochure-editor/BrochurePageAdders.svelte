<script>
	import { enhance } from '$app/forms';
	import { templates } from '$lib/brochure/templates';
</script>

<div class="adders">
	<form class="adders__form" method="POST" action="?/addPage">
		<label for="add-template">Add a page</label>
		<select id="add-template" name="template">
			{#each templates as template (template.id)}
				<option value={template.id}>{template.name} — {template.description}</option>
			{/each}
		</select>
		<button class="btn btn--outline btn--sm" type="submit">Add page</button>
	</form>

	<form class="adders__form adders__form--single" method="POST" action="?/addProject" use:enhance>
		<label for="add-spread">Add a case-study spread</label>
		<button id="add-spread" class="btn btn--outline btn--sm" type="submit">+ Opener, detail &amp; gallery (3 pages)</button>
	</form>
</div>

<style>
	.adders { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 1.4rem; }
	.adders__form { display: grid; gap: 0.35rem; grid-template-columns: auto auto; align-items: end; }
	.adders__form label { grid-column: 1 / -1; font-size: 0.8rem; font-weight: 600; color: var(--ink-600); }
	.adders__form select {
		font: inherit;
		font-size: 0.88rem;
		padding: 0.42rem 0.6rem;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: #fff;
		max-width: 22rem;
		margin-right: 0.6rem;
	}
	.adders__form--single { grid-template-columns: auto; }
</style>
