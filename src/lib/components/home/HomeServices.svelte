<script>
	import { services } from '$lib/site.js';
	import { reveal } from '$lib/motion.js';
	import { shapeForService } from '$lib/jewel/jewel-shapes.js';
	import { centredInView } from '$lib/jewel/centred-in-view.js';
	import JewelCanvas from '$lib/components/jewel/JewelCanvas.svelte';
	import HomeServiceCard from './HomeServiceCard.svelte';
	import EmergencyCallout from './EmergencyCallout.svelte';

	const mainServices = services.filter((service) => service.id !== 'emergency');

	/** @type {import('$lib/jewel/jewel-shapes.js').JewelShapeName} */
	let shape = $state('brilliantJewel');

	/** @param {import('$lib/jewel/jewel-shapes.js').JewelShapeName} nextShape */
	const showShape = (nextShape) => () => (shape = nextShape);
</script>

<section id="services" class="py-20 sm:py-28">
	<div class="container-site">
		<div class="max-w-2xl" use:reveal={{ stagger: true }} use:centredInView={showShape('brilliantJewel')}>
			<p class="kicker">Our services</p>
			<h2 class="h-section mt-5 text-white">For all your needs, we’ve got you covered.</h2>
			<p class="mt-5 text-lg text-grey">One complete solution for your property — reactive, planned and project works, from a single repair to a full transformation.</p>
		</div>

		<div class="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-12 lg:gap-10">
			<div class="sticky top-20 z-10 h-[30svh] bg-gradient-to-b from-night via-night/90 to-transparent lg:top-[18svh] lg:col-span-5 lg:h-[64svh] lg:bg-none">
				<JewelCanvas {shape} label="A jewel of gold light that changes shape for each of our services" />
			</div>
			<div class="flex flex-col gap-5 lg:col-span-7 lg:pb-[25svh]">
				{#each mainServices as service (service.id)}
					<HomeServiceCard {service} oncentred={showShape(shapeForService[service.id])} />
				{/each}
				<EmergencyCallout oncentred={showShape(shapeForService.contact)} />
			</div>
		</div>
	</div>
</section>
