<script>
	import ProjectEditor from '$lib/components/admin/projects/ProjectEditor.svelte';
	import { ProjectServices } from '$lib/project-limits.js';

	let { data, form } = $props();

	const canEdit = $derived(data.configured && !data.dbError);
	const nextPosition = $derived(Math.max(0, ...data.rows.map((row) => row.position)) + 1);
	const blank = $derived({ name: '', location: '', service: ProjectServices[0].id, summary: '', photos: [], position: nextPosition });
	const failedId = $derived(form?.id ?? '');
	const error = $derived(form?.error ?? '');
</script>

<svelte:head>
	<title>Projects | Admin | Jewel Property Serve</title>
</svelte:head>

<h1>Projects</h1>
<p class="intro">
	The completed projects shown on the Refurbishment, Maintenance and Fire &amp; flood pages. A page
	with no projects shows no projects section. Upload finished photos through “Add a photo”, describe
	each one, and save: the change shows on the site straight away.
</p>

{#if !data.configured}
	<p class="notice card">Supabase is not connected, so the site is showing the projects kept in code.</p>
{:else if data.dbError}
	<p class="notice card">The projects could not be read: {data.dbError}</p>
{/if}

{#if canEdit}
	{#each data.rows as project (project.id)}
		<ProjectEditor {project} error={failedId === project.id ? error : ''} groups={data.groups} uploads={data.uploads} canUpload={data.configured} />
	{/each}

	<h2>Add a project</h2>
	<ProjectEditor project={blank} isNew error={failedId ? '' : error} groups={data.groups} uploads={data.uploads} canUpload={data.configured} />
{/if}

<style>
	h1 { margin-bottom: 0.4rem; }
	h2 { margin-top: 2rem; }
	.intro { color: var(--ink-600); max-width: 44rem; margin-bottom: 1.6rem; }
	.notice { padding: 1rem 1.2rem; }
</style>
