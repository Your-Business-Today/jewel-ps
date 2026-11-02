<script>
	/** @type {{ clauseNumber: number, title: string, paragraphs: string[] }} */
	let { clauseNumber, title, paragraphs } = $props();
</script>

<h2 class="font-display text-xl font-semibold text-white">{clauseNumber}. {title}</h2>
<ol class="mt-4 space-y-3">
	{#each paragraphs as paragraph, paragraphPosition}
		<li class="grid grid-cols-[3rem_1fr] gap-2">
			<span class="font-display text-sm text-gold/80">{clauseNumber}.{paragraphPosition + 1}</span>
			<p>{paragraph}</p>
		</li>
	{/each}
</ol>
