<script>
	import { textFor } from '$lib/site-text.js';
	import { photoFor } from '$lib/site-photos.js';
	import { reveal, parallax } from '$lib/motion.js';
	import { centredInView } from '$lib/jewel/centred-in-view.js';

	/** @type {{ service: { id: string, index: string, title: string, href: string }, oncentred: () => void }} */
	let { service, oncentred } = $props();
</script>

<a
	href={service.href}
	class="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[1.5rem] bg-night-3 sm:min-h-[26rem] lg:min-h-[30rem]"
	use:reveal
	use:centredInView={oncentred}
>
	<div class="absolute inset-0 overflow-hidden">
		<img src={photoFor(`service.${service.id}`)} alt="" class="photo h-[115%] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" use:parallax={{ speed: 0.18 }} />
		<div class="photo-tint absolute inset-0"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent"></div>
	</div>
	<div class="relative p-7 sm:p-8">
		<span class="font-display text-xs font-semibold tracking-kicker text-gold">{service.index}</span>
		<h3 class="mt-3 font-display text-3xl font-semibold text-white">{service.title}</h3>
		<p class="mt-3 max-w-xs text-sm leading-relaxed text-white/70">{textFor(`service.${service.id}.short`)}</p>
		<span class="mt-5 inline-block font-display text-sm font-semibold text-gold transition group-hover:translate-x-1">Learn more →</span>
	</div>
</a>
