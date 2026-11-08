<script>
	import { completedProjectsIntro, completedProjects } from '$lib/content/refurbishment-projects.js';
	import { reveal } from '$lib/motion.js';
	import SectionIntro from '$lib/components/SectionIntro.svelte';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="projects" class="bg-night py-24 sm:py-32">
	<div class="container-site">
		<SectionIntro kicker={completedProjectsIntro.kicker} title={completedProjectsIntro.title} lede={completedProjectsIntro.lede} />
		<div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" use:reveal={{ stagger: true }}>
			{#each completedProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
