<script>
	import { reveal } from '$lib/motion.js';

	/** @type {{ items: { title: string, text: string }[] }} */
	let { items } = $props();

	/** @param {number} position */
	const numberFor = (position) => String(position + 1).padStart(2, '0');
</script>

<ol class="mt-14 grid gap-x-12 sm:grid-cols-2" use:reveal={{ stagger: true }}>
	{#each items as item, position}
		<li class="border-t border-white/10 py-6">
			<div class="grid grid-cols-[2.5rem_1fr] gap-4">
				<span class="pt-1 font-display text-xs font-semibold text-gold/80">{numberFor(position)}</span>
				<div>
					<h3 class="font-display text-xl font-semibold text-white sm:text-2xl">{item.title}</h3>
					<p class="mt-2 max-w-xl text-sm leading-relaxed text-grey">{item.text}</p>
				</div>
			</div>
		</li>
	{/each}
</ol>
