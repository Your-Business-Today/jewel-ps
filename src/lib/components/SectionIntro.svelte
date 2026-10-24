<script>
	import { reveal } from '$lib/motion.js';

	/** @type {{ kicker: string, title: string, lede?: string }} */
	let { kicker, title, lede = '' } = $props();
</script>

<div class="max-w-2xl" use:reveal>
	<p class="kicker">{kicker}</p>
	<h2 class="h-section mt-5 text-white">{title}</h2>
	{#if lede}
		<p class="mt-6 text-lg leading-relaxed text-grey">{lede}</p>
	{/if}
</div>
