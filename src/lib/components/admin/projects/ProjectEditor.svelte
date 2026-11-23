<script>
	import { enhance } from '$app/forms';
	import { ProjectLimits, ProjectServices } from '$lib/project-limits.js';
	import ProjectPhotosField from './ProjectPhotosField.svelte';

	/**
	 * @type {{
	 *   project: { id?: string, name: string, location: string, service: string, summary: string, photos: { src: string, alt: string }[], position: number },
	 *   isNew?: boolean,
	 *   error?: string,
	 *   groups: { label: string, images: string[] }[],
	 *   uploads: string[],
	 *   canUpload: boolean
	 * }}
	 */
	let { project, isNew = false, error = '', groups, uploads, canUpload } = $props();

	const action = $derived(isNew ? '?/add' : '?/save');

	/** @param {MouseEvent} event */
	function confirmRemoval(event) {
		if (!confirm(`Take ${project.name} off the site?`)) event.preventDefault();
	}
</script>

<form class="card editor" method="POST" {action} use:enhance={() => ({ update }) => update({ reset: isNew })}>
	<input type="hidden" name="id" value={project.id ?? ''} />
	<label class="wide"><span>Project</span><input name="name" value={project.name} required maxlength={ProjectLimits.longestName} /></label>
	<label><span>Location <em>(optional)</em></span><input name="location" value={project.location} maxlength={ProjectLimits.longestLocation} /></label>
	<label>
		<span>Shown on</span>
		<select name="service" value={project.service} required>
			{#each ProjectServices as service (service.id)}<option value={service.id}>{service.label} page</option>{/each}
		</select>
	</label>
	<label><span>Order on the page</span><input name="position" type="number" min="0" max="1000" step="1" value={project.position} required /></label>
	<label class="wide"><span>What was done</span><textarea name="summary" rows="3" required maxlength={ProjectLimits.longestSummary}>{project.summary}</textarea></label>
	<ProjectPhotosField photos={project.photos} {groups} {uploads} {canUpload} />
	{#if error}<p class="error">{error}</p>{/if}
	<div class="actions">
		<button class="btn btn--primary">{isNew ? 'Add project' : 'Save'}</button>
		{#if !isNew}<button class="btn btn--outline" formaction="?/remove" formnovalidate onclick={confirmRemoval}>Remove</button>{/if}
	</div>
</form>

<style>
	.editor { display: grid; grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr)); gap: 0.8rem 1.4rem; padding: 1.2rem 1.4rem; margin-bottom: 1rem; }
	.wide { grid-column: 1 / -1; }
	label { display: grid; gap: 0.3rem; font-size: 0.86rem; color: var(--ink-600); }
	em { color: var(--ink-400); font-style: normal; }
	input, select, textarea { font: inherit; padding: 0.55rem 0.8rem; border: 1px solid var(--line); border-radius: var(--radius); }
	.error, .actions { grid-column: 1 / -1; margin: 0; }
	.error { color: var(--warn-ink); }
	.actions { display: flex; gap: 0.6rem; }
</style>
