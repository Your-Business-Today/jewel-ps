<script>
	import { contact, social } from '$lib/site.js';
	import { reveal } from '$lib/motion.js';
	import Icon from '$lib/components/Icon.svelte';
</script>

<aside class="space-y-4 lg:col-span-5" use:reveal={{ stagger: true }}>
	<a href={contact.phoneHref} class="card group flex items-center gap-5 border-gold/40 bg-gold/[0.06] p-6 transition hover:bg-gold/10">
		<span class="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-night">
			<span class="absolute inset-0 animate-pulseRing rounded-full bg-gold/60"></span>
			<Icon name="phone" size={24} class="relative" />
		</span>
		<span>
			<span class="block font-display text-[11px] font-semibold uppercase tracking-kicker text-gold">24hr emergency &amp; enquiries</span>
			<span class="block font-display text-2xl font-semibold text-white">{contact.phone}</span>
		</span>
	</a>
	<a href="mailto:{contact.email}" class="card group flex items-center gap-5 p-6 transition hover:border-gold/40">
		<span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue-light"><Icon name="mail" size={24} /></span>
		<span>
			<span class="block font-display text-[11px] font-semibold uppercase tracking-kicker text-grey">Email</span>
			<span class="block font-display text-lg font-semibold text-white group-hover:text-gold">{contact.email}</span>
		</span>
	</a>
	<a href={contact.mapLink} target="_blank" rel="noopener" class="card group flex items-center gap-5 p-6 transition hover:border-gold/40">
		<span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue-light"><Icon name="pin" size={24} /></span>
		<span>
			<span class="block font-display text-[11px] font-semibold uppercase tracking-kicker text-grey">Office</span>
			<span class="block font-display text-lg font-semibold text-white group-hover:text-gold">{contact.address}</span>
		</span>
	</a>
	<div class="card p-6">
		<p class="font-display text-[11px] font-semibold uppercase tracking-kicker text-grey">Hours</p>
		<p class="mt-2 text-white/85">{contact.hours}</p>
		<div class="mt-5 flex flex-wrap gap-2 text-sm">
			<a href={social.instagram} target="_blank" rel="noopener" class="rounded-full border border-white/10 px-4 py-2 transition hover:border-gold hover:text-gold">Instagram</a>
			<a href={social.linkedin} target="_blank" rel="noopener" class="rounded-full border border-white/10 px-4 py-2 transition hover:border-gold hover:text-gold">LinkedIn</a>
			<a href={social.facebook} target="_blank" rel="noopener" class="rounded-full border border-white/10 px-4 py-2 transition hover:border-gold hover:text-gold">Facebook</a>
		</div>
	</div>
	<div class="overflow-hidden rounded-3xl border border-white/[0.06]">
		<iframe
			title="Map showing Jewel Property Serve, 48 Warwick Street, London"
			src={contact.mapEmbed}
			class="h-64 w-full grayscale invert-[0.9] hue-rotate-180 contrast-[0.9]"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			allowfullscreen
		></iframe>
	</div>
</aside>
