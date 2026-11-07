<script>
	import { ecologi } from '$lib/site.js';
	import { reveal, parallax } from '$lib/motion.js';
</script>

<section id="ecologi" class="relative overflow-hidden bg-night py-24 sm:py-32">
	<div class="container-site grid items-center gap-12 lg:grid-cols-12">
		<div class="lg:col-span-5" use:reveal={{ stagger: true }}>
			<p class="kicker">Sustainability</p>
			<h2 class="h-section mt-5 text-white">{ecologi.title}</h2>
			<p class="mt-6 text-lg text-grey">{ecologi.text}</p>
			<div class="mt-8 grid grid-cols-2 gap-4">
				<div class="card p-5">
					<p class="font-display text-3xl font-semibold text-white">0.30<span class="text-base text-gold">t</span></p>
					<p class="mt-1 text-xs text-grey">CO₂ sequestered per tree</p>
				</div>
				<div class="card p-5">
					<p class="font-display text-3xl font-semibold text-white">732<span class="text-base text-gold">mi</span></p>
					<p class="mt-1 text-xs text-grey">Equivalent driving offset per tree</p>
				</div>
			</div>
		</div>
		<div class="relative overflow-hidden rounded-[2rem] lg:col-span-6 lg:col-start-7" use:reveal>
			<div class="aspect-[4/3]">
				<img src={ecologi.image} alt="Our Ecologi partnership" class="h-[125%] w-full object-cover" loading="lazy" use:parallax={{ speed: 0.25 }} />
			</div>
		</div>
	</div>
</section>
