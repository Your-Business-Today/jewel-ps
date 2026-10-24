<script>
	import { contact, img, testimonials } from '$lib/site.js';
	import { claimSteps, claimReporting } from '$lib/content/insurance-claims.js';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionIntro from '$lib/components/SectionIntro.svelte';
	import NumberedList from '$lib/components/NumberedList.svelte';
	import StepCards from '$lib/components/StepCards.svelte';
	import BrochureOffer from '$lib/components/BrochureOffer.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Accreditations from '$lib/components/Accreditations.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
</script>

<Seo
	title="Insurance reinstatement for insurers & loss adjusters"
	description="How Jewel Property Serve handles insurance claims for insurers and loss adjusters: 24/7 make-safe, agreed schedules of works, regular reporting and full reinstatement across London and the South East."
/>

<PageHero
	kicker="Insurers & loss adjusters"
	title="Reinstatement you can place with confidence."
	lede="A nominated main contractor for UK insurers, we take a claim from the first emergency call to the final sign-off, and keep you informed at every stage."
	image={img('Jewel-repair.jpg')}
	alt="Insurance reinstatement works by Jewel Property Serve"
	cta={{ href: '/contact', label: 'Place a claim with us' }}
	secondary={{ href: contact.phoneHref, label: `24/7: ${contact.phone}` }}
/>

<section class="bg-night py-24 sm:py-32">
	<div class="container-site">
		<SectionIntro kicker="The claims process" title="From first call to final sign-off." />
		<StepCards steps={claimSteps} />
	</div>
</section>

<section class="relative isolate overflow-hidden bg-night-2 py-24 sm:py-32">
	<div class="bg-grid absolute inset-0 -z-10"></div>
	<div class="container-site">
		<SectionIntro
			kicker="Reporting"
			title="A claim file that stands up."
			lede="Everything you need to approve the scope, track the works and close the claim, without chasing."
		/>
		<NumberedList items={claimReporting} />
	</div>
</section>

<Testimonials items={[testimonials[1]]} title="Back to pre-loss condition." parallaxColumns={false} />
<BrochureOffer title="Everything your panel needs to see." text="Our brochure sets out who we are, the schemes we are accredited by and the work we do, ready to share with your panel or claims team." />
<Accreditations />
<CtaBand title="A claim to place?" text="Call our team or send us the details, and we’ll arrange the make-safe and survey." />
