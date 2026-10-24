<script>
	import { contact, img, testimonials } from '$lib/site.js';
	import { emergencyServices, emergencySteps } from '$lib/content/emergency.js';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionIntro from '$lib/components/SectionIntro.svelte';
	import NumberedList from '$lib/components/NumberedList.svelte';
	import StepCards from '$lib/components/StepCards.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Accreditations from '$lib/components/Accreditations.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
</script>

<Seo
	title="24/7 emergency callout in London"
	description="Leak, roof damage or a property emergency in London? Call Jewel Property Serve on 0208 109 1012, day or night, 365 days a year, for make-safe, board-up, emergency drying and repairs."
/>

<PageHero
	kicker="24/7 emergency callout · London & the South East"
	title="A leak or an emergency? Call us now."
	lede="Our engineers are on standby day and night, 365 days a year, to stop the damage, make your property safe and put it right."
	image={img('Emergency-Callouts.jpg')}
	alt="Jewel Property Serve emergency engineer on a callout"
	cta={{ href: contact.phoneHref, label: `Call ${contact.phone}` }}
	secondary={{ href: '/contact', label: 'Send us the details' }}
/>

<section class="relative isolate overflow-hidden bg-night-2 py-24 sm:py-32">
	<div class="bg-grid absolute inset-0 -z-10"></div>
	<div class="container-site">
		<SectionIntro kicker="What we handle" title="Every kind of property emergency." />
		<NumberedList items={emergencyServices} />
	</div>
</section>

<section class="bg-night py-24 sm:py-32">
	<div class="container-site">
		<SectionIntro
			kicker="What happens when you call"
			title="From the first call to the final repair."
			lede="Homes, landlords, managing agents and commercial buildings across London and the South East all get the same response."
		/>
		<StepCards steps={emergencySteps} />
	</div>
</section>

<Testimonials items={[testimonials[1]]} title="There when it matters." parallaxColumns={false} />
<Accreditations />
<CtaBand title="Emergency? We’re on standby now." text={`Call ${contact.phone}, day or night, 365 days a year.`} />
