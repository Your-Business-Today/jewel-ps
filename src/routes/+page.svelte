<script>
	import Seo from '$lib/components/Seo.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import GoogleRating from '$lib/components/GoogleRating.svelte';
	import Accreditations from '$lib/components/Accreditations.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import HomeHero from '$lib/components/home/HomeHero.svelte';
	import HomeServices from '$lib/components/home/HomeServices.svelte';
	import HomeIntro from '$lib/components/home/HomeIntro.svelte';
	import HomeProcess from '$lib/components/home/HomeProcess.svelte';
	import HomeTrades from '$lib/components/home/HomeTrades.svelte';
	import HomeEcologi from '$lib/components/home/HomeEcologi.svelte';

	let { data } = $props();

	/** @type {HTMLElement | undefined} */
	let curtain = $state();
</script>

<Seo />

<HomeHero {curtain} />

<div bind:this={curtain} class="relative z-10 rounded-t-[2rem] bg-night shadow-[0_-30px_60px_-20px_rgba(0,0,0,0.8)] sm:rounded-t-[2.5rem]">
	<HomeServices />
	<HomeIntro />
	<HomeProcess />
	<HomeTrades />

	<Testimonials>
		{#snippet badge()}
			<GoogleRating rating={data.googleRating} reviewLink={data.googleReviewLink} />
		{/snippet}
	</Testimonials>
	<Accreditations />

	<HomeEcologi />
	<CtaBand />
</div>
