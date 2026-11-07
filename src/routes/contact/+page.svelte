<script>
	import { contact, faqs } from '$lib/site.js';
	import { reveal } from '$lib/motion.js';
	import Seo from '$lib/components/Seo.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Accreditations from '$lib/components/Accreditations.svelte';
	import EmergencyCallPanel from '$lib/components/contact/EmergencyCallPanel.svelte';
	import ContactCards from '$lib/components/contact/ContactCards.svelte';
	import GuidedRequestForm from '$lib/components/contact/GuidedRequestForm.svelte';

	/** @type {{ form: any }} */
	let { form } = $props();
</script>

<Seo
	title="Contact us"
	description="Get in touch with Jewel Property Serve for a free quote or 24-hour emergency callout. Call 0208 109 1012 or email enquiries@jewelps.co.uk. 48 Warwick Street, London W1B 5AW."
/>

<!-- Hero -->
<section class="relative isolate overflow-hidden bg-night pt-36 pb-12 lg:pt-44 lg:pb-16">
	<div class="pointer-events-none absolute -right-40 top-0 -z-10 h-[40rem] w-[40rem] rounded-full bg-blue/15 blur-[120px]"></div>
	<div class="container-site" use:reveal={{ stagger: true }}>
		<p class="kicker">Contact</p>
		<h1 class="h-display mt-5 max-w-3xl text-white">Get in touch.</h1>
		<p class="lede mt-6 max-w-2xl">Tell us about your property and we’ll come back to you quickly with the best course of action — or call us any time for an emergency.</p>
	</div>
</section>

<section class="bg-night pb-24 sm:pb-32">
	<div class="container-site grid gap-10 lg:grid-cols-12 lg:gap-14">
		<div class="lg:col-span-12" use:reveal>
			<EmergencyCallPanel />
		</div>
		<ContactCards />
		<div class="lg:col-span-7" use:reveal>
			<GuidedRequestForm {form} />
		</div>
	</div>
</section>

<!-- FAQs -->
<section id="faqs" class="bg-night-2 py-24 sm:py-32">
	<div class="container-site grid gap-12 lg:grid-cols-12">
		<div class="lg:col-span-4" use:reveal>
			<p class="kicker">FAQs</p>
			<h2 class="h-section mt-5 text-white">Good to know.</h2>
			<p class="mt-6 text-grey">Can’t find what you’re looking for? Our service desk is happy to help on <a href={contact.phoneHref} class="font-semibold text-gold">{contact.phone}</a>.</p>
		</div>
		<div class="lg:col-span-8">
			<Faq items={faqs} />
		</div>
	</div>
</section>

<Accreditations />
