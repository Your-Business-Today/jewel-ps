<script>
	/** @type {{ facts: { label: string, text: string }[] }} */
	let { facts } = $props();
</script>

<table class="w-full text-left text-sm">
	<caption class="mb-4 text-left font-display text-xl font-semibold text-white">Key facts</caption>
	<tbody>
		{#each facts as fact}
			<tr class="border-t border-white/10 align-top">
				<th scope="row" class="w-1/3 py-3 pr-6 font-semibold text-white">{fact.label}</th>
				<td class="py-3">{fact.text}</td>
			</tr>
		{/each}
	</tbody>
</table>
