<script>
	import { img } from '$lib/site.js';
	import { portfolioServices, portfolioSteps, chilternCourt } from '$lib/content/managing-agents.js';
	import { reveal } from '$lib/motion.js';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionIntro from '$lib/components/SectionIntro.svelte';
	import NumberedList from '$lib/components/NumberedList.svelte';
	import StepCards from '$lib/components/StepCards.svelte';
	import BrochureOffer from '$lib/components/BrochureOffer.svelte';
	import Accreditations from '$lib/components/Accreditations.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const testimonial = chilternCourt.testimonial;
</script>

<Seo
	title="Maintenance for managing agents & block managers"
	description="Contracted property maintenance for managing agents and block managers across London and the South East: one point of contact, planned programmes, compliance certificates and 24-hour response for residents."
/>

<PageHero
	kicker="Managing agents & block managers"
	title="One contractor for your whole portfolio."
	lede="Reactive repairs, planned maintenance and compliance testing across every building you manage, through one service desk that residents are happy to see."
	image={img('common-roof-repairs.webp')}
	alt="Jewel Property Serve engineers maintaining a residential block"
	cta={{ href: '/contact', label: 'Discuss your portfolio' }}
	secondary={{ href: '/brochure', label: 'Our credentials pack' }}
/>

<section class="relative isolate overflow-hidden bg-night-2 py-24 sm:py-32">
	<div class="bg-grid absolute inset-0 -z-10"></div>
	<div class="container-site">
		<SectionIntro kicker="What you get" title="Portfolio support, built around you." />
		<NumberedList items={portfolioServices} />
	</div>
</section>

<section class="bg-night py-24 sm:py-32">
	<div class="container-site">
		<div class="card grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:p-16" use:reveal={{ stagger: true }}>
			<div class="lg:col-span-4">
				<p class="kicker">Chiltern Court</p>
				<p class="mt-5 font-display text-6xl font-semibold text-gold">{chilternCourt.since}</p>
				<p class="mt-3 text-grey">Approved contractor at Chiltern Court ever since.</p>
			</div>
			<figure class="lg:col-span-8">
				<blockquote class="text-xl leading-relaxed text-white/90">“{testimonial.quote}”</blockquote>
				<figcaption class="mt-6 text-sm text-grey">{testimonial.name}, {testimonial.role}</figcaption>
			</figure>
		</div>
	</div>
</section>

<section class="bg-night-2 py-24 sm:py-32">
	<div class="container-site">
		<SectionIntro kicker="How it works" title="From one job to a whole programme." />
		<StepCards steps={portfolioSteps} />
	</div>
</section>

<BrochureOffer text="Our brochure sets out who we are, the schemes we are accredited by and the work we do, ready to share with your board or client." />
<Accreditations />
<CtaBand title="Looking for a portfolio contractor?" text="Tell us about your buildings and we’ll arrange a visit to scope a maintenance programme with you." />
