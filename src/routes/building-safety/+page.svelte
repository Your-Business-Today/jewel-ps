<script>
	import { contact } from '$lib/site.js';
	import { applicationServices, buildingSafetySteps, buildingSafetyLinesIntro, buildingSafetyLines } from '$lib/content/building-safety.js';
	import { reveal } from '$lib/motion.js';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionIntro from '$lib/components/SectionIntro.svelte';
	import NumberedList from '$lib/components/NumberedList.svelte';
	import StepCards from '$lib/components/StepCards.svelte';
	import ServiceLineCard from '$lib/components/about/ServiceLineCard.svelte';
	import Accreditations from '$lib/components/Accreditations.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
</script>

<Seo
	title="Building Safety Regulator (BSR) applications"
	description="Jewel Property Serve prepares and manages Building Safety Regulator applications for higher-risk buildings, from Gateway 2 to Gateway 3 completion, and keeps the golden thread up to date through refurbishment and maintenance."
/>

<PageHero
	kicker="Building Safety Regulator (BSR)"
	page="building-safety"
	alt="High-rise buildings seen from street level"
	cta={{ href: '/contact', label: 'Discuss your building' }}
	secondary={{ href: contact.phoneHref, label: `Call ${contact.phone}` }}
/>

<section class="relative isolate overflow-hidden bg-night-2 py-24 sm:py-32">
	<div class="bg-grid absolute inset-0 -z-10"></div>
	<div class="container-site">
		<SectionIntro
			kicker="Applications"
			title="Building control for higher-risk buildings."
			lede="Around half of all applications to the Building Safety Regulator are turned down at first submission. Ours are prepared to pass first time."
		/>
		<NumberedList items={applicationServices} />
	</div>
</section>

<section class="bg-night py-24 sm:py-32">
	<div class="container-site">
		<SectionIntro kicker="How it works" title="From survey to a complete record." />
		<StepCards steps={buildingSafetySteps} />
	</div>
</section>

<section class="bg-night-2 py-24 sm:py-32">
	<div class="container-site">
		<SectionIntro kicker={buildingSafetyLinesIntro.kicker} title={buildingSafetyLinesIntro.title} lede={buildingSafetyLinesIntro.lede} />
		<ul class="mt-14 grid gap-5 sm:grid-cols-2" use:reveal={{ stagger: true }}>
			{#each buildingSafetyLines as serviceLine}
				<li><ServiceLineCard {serviceLine} /></li>
			{/each}
		</ul>
	</div>
</section>

<Accreditations />
<CtaBand title="A higher-risk building to look after?" text="Tell us about the building and the works, and we’ll arrange a visit to plan the application with you." />
