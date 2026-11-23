<script>
	import RtwSubmissionRow from './RtwSubmissionRow.svelte';

	/** @type {{ submissions: Record<string, string | null>[] }} */
	let { submissions } = $props();

	const headings = ['Submitted', 'Company', 'Individual', 'Engagement type', 'Start', 'Method', 'Document / code', 'Checked by', 'Outcome', 'Expiry', 'Follow-up due', 'Evidence ref', 'Notes'];
</script>

<div class="tablewrap card">
	<table>
		<thead>
			<tr>
				{#each headings as heading}<th>{heading}</th>{/each}
			</tr>
		</thead>
		<tbody>
			{#each submissions as submission (submission.id)}
				<RtwSubmissionRow {submission} />
			{/each}
		</tbody>
	</table>
</div>

<style>
	.tablewrap { overflow-x: auto; padding: 0; }
	table { border-collapse: collapse; width: 100%; font-size: 0.86rem; }
	th {
		text-align: left;
		vertical-align: top;
		padding: 0.65rem 0.8rem;
		border-bottom: 1px solid var(--line);
		background: var(--tint);
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--ink-600);
		white-space: nowrap;
	}
</style>
