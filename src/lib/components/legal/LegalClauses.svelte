<script>
	import LegalClause from './LegalClause.svelte';

	/** @type {{ clauses: { title: string, paragraphs: string[] }[] }} */
	let { clauses } = $props();
</script>

<ol class="space-y-10">
	{#each clauses as clause, clausePosition}
		<li>
			<LegalClause clauseNumber={clausePosition + 1} title={clause.title} paragraphs={clause.paragraphs} />
		</li>
	{/each}
</ol>
