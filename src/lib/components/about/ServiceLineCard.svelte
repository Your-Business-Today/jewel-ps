<script>
	import Icon from '$lib/components/Icon.svelte';

	/** @type {{ serviceLine: { icon: string, title: string, text: string, href: string } }} */
	let { serviceLine } = $props();
</script>

<a href={serviceLine.href} class="card group flex h-full flex-col p-8 transition hover:border-gold/40">
	<span class="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold"><Icon name={serviceLine.icon} size={20} /></span>
	<h3 class="mt-6 font-display text-2xl font-semibold text-white">{serviceLine.title}</h3>
	<p class="mt-3 flex-1 text-sm leading-relaxed text-grey">{serviceLine.text}</p>
	<span class="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-gold transition group-hover:gap-3">Find out more <Icon name="arrow" size={16} /></span>
</a>
