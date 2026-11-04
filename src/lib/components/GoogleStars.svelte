<script>
	/** @type {{ rating: number }} */
	let { rating } = $props();

	const Stars = { outOf: 5, positions: [1, 2, 3, 4, 5] };
	const filledWidth = $derived(`${(rating / Stars.outOf) * 100}%`);
</script>

<span class="relative inline-flex" aria-hidden="true">
	<span class="flex text-white/20">
		{#each Stars.positions as position (position)}{@render star()}{/each}
	</span>
	<span class="absolute inset-y-0 left-0 flex overflow-hidden text-gold" style:width={filledWidth}>
		{#each Stars.positions as position (position)}{@render star()}{/each}
	</span>
</span>

{#snippet star()}
	<svg class="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
		<path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9L10 1.5z" />
	</svg>
{/snippet}
