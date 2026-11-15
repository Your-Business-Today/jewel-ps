<script>
	import { contact } from '$lib/site.js';
	import { reveal } from '$lib/motion.js';
	import { centredInView } from '$lib/jewel/centred-in-view.js';

	/** @type {{ oncentred: () => void }} */
	let { oncentred } = $props();
</script>

<div class="flex flex-col gap-5 rounded-[1.5rem] border border-gold/30 bg-gold/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8" use:reveal use:centredInView={oncentred}>
	<div>
		<p class="font-display text-xs font-semibold tracking-kicker text-gold">04 · 24-hour emergency callout</p>
		<p class="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">Experts on standby around the clock, 365 days a year.</p>
	</div>
	<a href={contact.phoneHref} class="btn-gold shrink-0">Call {contact.phone}</a>
</div>
