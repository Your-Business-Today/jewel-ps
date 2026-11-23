<script>
	import { photoFor } from '$lib/site-photos.js';
	import { stats, clients } from '$lib/site.js';
	import { reveal, parallax, countUp } from '$lib/motion.js';
</script>

<section class="border-t border-white/[0.06] py-20 sm:py-28">
	<div class="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
		<div class="lg:col-span-6" use:reveal={{ stagger: true }}>
			<p class="kicker">About Jewel Property Serve</p>
			<h2 class="h-section mt-5 text-white">We put the <span class="text-gradient-gold">‘Pro’</span> in property services.</h2>
			<p class="mt-7 text-lg leading-relaxed text-grey">
				A premier UK provider of top-quality refurbishment, restoration and maintenance for residential and commercial property. We focus on speed, clear communication and workmanship you can trust — with minimal disruption to you or your occupants.
			</p>
			<p class="mt-4 leading-relaxed text-grey">
				Our client-focused approach and decades of experience make us the preferred choice of development managers, private homeowners, insurers, managing agents, architects and interior designers alike.
			</p>
			<p class="mt-6 text-sm text-white/60">{clients.join(' · ')}</p>
			<a href="/about" class="btn-ghost mt-8">Discover Jewel</a>
		</div>
		<div class="relative overflow-hidden rounded-[1.5rem] lg:col-span-6" use:reveal>
			<div class="aspect-[4/3] lg:aspect-[4/5]">
				<img src={photoFor('home.cared-for')} alt="A property cared for by Jewel Property Serve" class="h-[120%] w-full object-cover" loading="lazy" use:parallax={{ speed: 0.25 }} />
			</div>
		</div>
	</div>

	<div class="container-site mt-16 sm:mt-20">
		<dl class="grid grid-cols-2 gap-x-6 gap-y-10 border-y border-white/10 py-10 lg:grid-cols-4" use:reveal={{ stagger: true }}>
			{#each stats as stat}
				<div>
					<dd class="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
						<span use:countUp>{stat.value}</span>{#if stat.suffix}<span class="text-xl text-gold sm:text-2xl">{stat.suffix}</span>{/if}
					</dd>
					<dt class="mt-2 text-sm text-grey">{stat.label}</dt>
				</div>
			{/each}
		</dl>
	</div>
</section>
