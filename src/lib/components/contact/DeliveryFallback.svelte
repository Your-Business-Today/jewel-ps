<script>
	import { contact } from '$lib/site.js';

	/** @type {{ values: Record<string, string> }} */
	let { values } = $props();

	const emailBody = $derived(
		`Name: ${values.name ?? ''}\nEmail: ${values.email ?? ''}\nPhone: ${values.phone ?? ''}\nPostcode: ${values.postcode ?? ''}\nService: ${values.service ?? ''}\n\n${values.message ?? ''}`
	);
	const emailSubject = encodeURIComponent('Website enquiry');
	const mailtoFallback = $derived(`mailto:${contact.email}?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`);
</script>

<div class="mt-6 rounded-2xl border border-gold/40 bg-gold/[0.08] p-5 text-sm text-white/85">
	<p class="font-semibold text-gold">Sorry — we couldn’t send that automatically.</p>
	<p class="mt-1">Please <a href={mailtoFallback} class="font-semibold text-white underline decoration-gold underline-offset-4">email us your enquiry</a> (we’ve pre-filled it for you) or call <a href={contact.phoneHref} class="font-semibold text-white">{contact.phone}</a>.</p>
</div>
