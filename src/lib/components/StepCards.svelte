<script>
	import { reveal } from '$lib/motion.js';

	/** @type {{ steps: { step: string, title: string, text: string }[] }} */
	let { steps } = $props();
</script>

<ol class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4" use:reveal={{ stagger: true }}>
	{#each steps as step}
		<li class="card relative p-8">
			<span class="font-display text-4xl font-semibold text-gold/50">{step.step}</span>
			<h3 class="mt-5 font-display text-xl font-semibold text-white">{step.title}</h3>
			<p class="mt-3 text-sm leading-relaxed text-grey">{step.text}</p>
		</li>
	{/each}
</ol>
