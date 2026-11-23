<script>
	import { textFor } from '$lib/site-text.js';
	import { photoFor } from '$lib/site-photos.js';
	import { ecologi } from '$lib/site.js';
	import { reveal, parallax } from '$lib/motion.js';
</script>

<section class="py-20 sm:py-28">
	<div class="container-site grid items-center gap-12 lg:grid-cols-12">
		<div class="relative order-2 overflow-hidden rounded-[1.5rem] lg:order-1 lg:col-span-6" use:reveal>
			<div class="aspect-[4/3]">
				<img src={photoFor('home.ecologi')} alt="Our Ecologi forest" class="h-[120%] w-full object-cover" loading="lazy" use:parallax={{ speed: 0.25 }} />
			</div>
		</div>
		<div class="order-1 lg:order-2 lg:col-span-5 lg:col-start-8" use:reveal={{ stagger: true }}>
			<p class="kicker">Sustainability</p>
			<h2 class="h-section mt-5 text-white">{ecologi.title}</h2>
			<p class="mt-6 text-lg text-grey">{textFor('ecologi')}</p>
			<a href="/about#ecologi" class="btn-ghost mt-8">Our eco commitment</a>
		</div>
	</div>
</section>
