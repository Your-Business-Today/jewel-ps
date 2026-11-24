<script>
	import { onMount } from 'svelte';
	import { photoFor } from '$lib/site-photos.js';
	import { contact } from '$lib/site.js';
	import { getGsap, prefersReducedMotion, splitWords } from '$lib/motion.js';
	import JewelCanvas from '$lib/components/jewel/JewelCanvas.svelte';
	import HomeHeroFoot from './HomeHeroFoot.svelte';

	/** @type {{ curtain: HTMLElement | undefined }} */
	let { curtain } = $props();

	/** @type {HTMLElement} */ let heroBackground;
	/** @type {HTMLElement} */ let heroShade;
	/** @type {HTMLElement} */ let heroContent;
	/** @type {HTMLElement} */ let heroTitle;
	/** @type {HTMLElement | undefined} */ let heroFoot = $state();

	/** @param {import('gsap').gsap} gsap @param {Element[]} words */
	function settleIntoView(gsap, words) {
		gsap
			.timeline({ defaults: { ease: 'power3.out' } })
			.fromTo(heroBackground, { scale: 1.12 }, { scale: 1, duration: 2.4, ease: 'power2.out' }, 0)
			.from(heroContent.querySelector('[data-kicker]'), { opacity: 0, y: 12, duration: 0.8 }, 0.4)
			.from(words, { yPercent: 105, duration: 1, stagger: 0.08 }, 0.5)
			.from(heroContent.querySelectorAll('[data-fade]'), { opacity: 0, y: 18, duration: 0.9, stagger: 0.12 }, 1.0)
			.from(heroFoot ?? [], { opacity: 0, duration: 1 }, 1.4);
	}

	/** @param {import('gsap').gsap} gsap */
	function recedeAsTheCurtainRises(gsap) {
		gsap
			.timeline({ scrollTrigger: { trigger: curtain, start: 'top bottom', end: 'top top', scrub: 0.6 } })
			.to(heroBackground, { scale: 1.12, yPercent: -6, ease: 'none' }, 0)
			.to(heroShade, { opacity: 0.85, ease: 'none' }, 0)
			.to(heroContent, { yPercent: -18, opacity: 0, ease: 'power1.in' }, 0)
			.to(heroFoot ?? [], { opacity: 0, ease: 'none' }, 0);
	}

	onMount(() => {
		const words = splitWords(heroTitle);
		if (prefersReducedMotion()) return;
		/** @type {{ revert: () => void } | undefined} */
		let animation;
		getGsap().then(({ gsap }) => {
			animation = gsap.context(() => {
				settleIntoView(gsap, words);
				recedeAsTheCurtainRises(gsap);
			});
		});
		return () => animation?.revert();
	});
</script>

<section class="sticky top-0 z-0 flex min-h-[100svh] flex-col justify-end overflow-hidden bg-night">
	<div class="absolute inset-0">
		<img
			bind:this={heroBackground}
			src={photoFor('home.hero')}
			alt="A high-end London interior maintained by Jewel Property Serve"
			class="photo h-full w-full object-cover will-change-transform"
			fetchpriority="high"
			decoding="async"
		/>
		<div class="photo-tint absolute inset-0"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/25"></div>
		<div class="absolute inset-0 bg-gradient-to-r from-night/70 via-night/20 to-transparent"></div>
		<div class="absolute inset-x-0 top-[9%] h-[40%] opacity-70 lg:inset-y-0 lg:left-auto lg:h-full lg:w-[55%] lg:opacity-100">
			<JewelCanvas label="A jewel made of gold light that moves away from your cursor" />
		</div>
		<div bind:this={heroShade} class="absolute inset-0 bg-night opacity-0"></div>
	</div>

	<div class="container-site relative pb-8 pt-32 sm:pb-12 lg:pb-16 lg:pt-40">
		<div bind:this={heroContent} class="max-w-3xl will-change-transform">
			<p class="kicker" data-kicker>London &amp; the South East</p>
			<h1 bind:this={heroTitle} class="h-display mt-5 text-white">Your property, our passion.</h1>
			<p class="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl" data-fade>
				High-end property maintenance, refurbishment and fire &amp; flood restoration — with a 24-hour emergency callout, 365 days a year.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4" data-fade>
				<a href="/contact" class="btn-gold">Request a free quote</a>
				<a href={contact.phoneHref} class="font-display text-[15px] font-semibold text-white transition hover:text-gold">or call {contact.phone}</a>
			</div>
		</div>

		<HomeHeroFoot bind:element={heroFoot} />
	</div>
</section>
