<script>
	import { page } from '$app/state';
	import { completedProjectsIntros } from '$lib/content/completed-projects.js';
	import { reveal } from '$lib/motion.js';
	import SectionIntro from '$lib/components/SectionIntro.svelte';
	import ProjectCard from './ProjectCard.svelte';

	/** @typedef {{ name: string, location: string, summary: string, photos: { src: string, alt: string }[] }} Project */

	/** @type {{ service: 'refurbishment' | 'maintenance' | 'fire-flood' }} */
	let { service } = $props();

	const pageData = $derived(page.data);
	const projects = $derived(/** @type {Project[]} */ (pageData.completedProjects ?? []));

	const intro = $derived(completedProjectsIntros[service]);
</script>

{#if projects.length}
	<section id="projects" class="bg-night py-24 sm:py-32">
		<div class="container-site">
			<SectionIntro kicker={intro.kicker} title={intro.title} lede={intro.lede} />
			<div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" use:reveal={{ stagger: true }}>
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</div>
	</section>
{/if}
