<script>
	import { serviceLinesIntro, serviceLines } from '$lib/content/service-lines.js';
	import { reveal } from '$lib/motion.js';
	import ServiceLineCard from './ServiceLineCard.svelte';
</script>

<section id="services" class="bg-night-2 py-24 sm:py-32">
	<div class="container-site">
		<div class="max-w-2xl" use:reveal={{ stagger: true }}>
			<p class="kicker">{serviceLinesIntro.kicker}</p>
			<h2 class="h-section mt-5 text-white">{serviceLinesIntro.title}</h2>
			<p class="mt-6 text-lg leading-relaxed text-grey">{serviceLinesIntro.text}</p>
		</div>
		<ul class="mt-14 grid gap-5 sm:grid-cols-2" use:reveal={{ stagger: true }}>
			{#each serviceLines as serviceLine}
				<li><ServiceLineCard {serviceLine} /></li>
			{/each}
		</ul>
	</div>
</section>
