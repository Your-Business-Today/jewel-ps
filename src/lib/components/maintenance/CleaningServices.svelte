<script>
	import { cleaningOffer, cleaningServices } from '$lib/content/cleaning.js';
	import { reveal } from '$lib/motion.js';
	import Icon from '$lib/components/Icon.svelte';
</script>

<section id="cleaning" class="bg-night py-24 sm:py-32">
	<div class="container-site">
		<div class="max-w-2xl" use:reveal={{ stagger: true }}>
			<p class="kicker">{cleaningOffer.kicker}</p>
			<h2 class="h-section mt-5 text-white">{cleaningOffer.title}</h2>
			<p class="mt-6 text-lg leading-relaxed text-grey">{cleaningOffer.text}</p>
		</div>
		<ul class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" use:reveal={{ stagger: true }}>
			{#each cleaningServices as cleaningService}
				<li class="card p-8">
					<span class="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold"><Icon name={cleaningService.icon} size={20} /></span>
					<h3 class="mt-6 font-display text-xl font-semibold text-white">{cleaningService.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-grey">{cleaningService.text}</p>
				</li>
			{/each}
		</ul>
		<a href="/contact#request" class="btn-gold mt-12">Ask about commercial cleaning <Icon name="arrow" size={18} /></a>
	</div>
</section>
