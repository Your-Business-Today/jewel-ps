<script>
	import { contact } from '$lib/site.js';
	import { responsePromises } from '$lib/content/response-promises.js';
	import Icon from '$lib/components/Icon.svelte';
	import WhatsAppButton from './WhatsAppButton.svelte';

	const emergencyPromise = responsePromises.emergencyAttendance;
</script>

<div class="flex flex-col gap-6 rounded-3xl border border-gold/50 bg-gold/[0.08] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
	<div class="max-w-2xl">
		<p class="font-display text-[11px] font-semibold uppercase tracking-kicker text-gold">Emergency?</p>
		<h2 class="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">Don’t fill in a form. Call us now.</h2>
		<p class="mt-3 text-grey">A leak, a break-in, a failed boiler or anything unsafe: our engineers are on call 24 hours a day, 365 days a year.</p>
		{#if emergencyPromise}
			<p class="mt-3 font-semibold text-white/85">{emergencyPromise}</p>
		{/if}
	</div>
	<div class="flex shrink-0 flex-col gap-3">
		<a href={contact.phoneHref} class="btn-gold">
			<Icon name="phone" size={18} />
			Call {contact.phone}
		</a>
		<WhatsAppButton />
	</div>
</div>
