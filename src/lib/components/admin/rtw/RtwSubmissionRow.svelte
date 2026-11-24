<script>
	import { ukDateTime } from '$lib/admin/uk-date-time.js';

	/** @type {{ submission: Record<string, string | null> }} */
	let { submission } = $props();

	const Outcomes = { pass: 'Pass', failPrefix: 'Fail' };
	const noValue = '—';

	/** @param {string | null} iso */
	function ukDate(iso) {
		if (!iso) return noValue;
		const [year, month, day] = iso.split('-');
		return `${day}/${month}/${year}`;
	}

	/** @param {string} outcome */
	function outcomeClass(outcome) {
		if (outcome === Outcomes.pass) return 'pill pill--pass';
		if (outcome.startsWith(Outcomes.failPrefix)) return 'pill pill--fail';
		return 'pill';
	}

	const outcome = $derived(submission.outcome ?? '');
</script>

<tr>
	<td class="nowrap">{ukDateTime(submission.created_at ?? '')}</td>
	<td><strong>{submission.entity}</strong></td>
	<td>
		<strong>{submission.full_name}</strong>
		{#if submission.trade}<span class="sub">{submission.trade}</span>{/if}
	</td>
	<td>{submission.engagement_type}</td>
	<td class="nowrap">{ukDate(submission.start_date)}</td>
	<td>{submission.check_method || noValue}</td>
	<td>{submission.document_seen || noValue}</td>
	<td>{submission.checked_by || noValue}</td>
	<td><span class={outcomeClass(outcome)}>{outcome || noValue}</span></td>
	<td class="nowrap">{ukDate(submission.permission_expiry)}</td>
	<td class="nowrap">{ukDate(submission.followup_due)}</td>
	<td>{submission.evidence_ref || noValue}</td>
	<td class="notes">{submission.notes || noValue}</td>
</tr>

<style>
	td { text-align: left; vertical-align: top; padding: 0.65rem 0.8rem; border-bottom: 1px solid var(--line); white-space: normal; }
	tr:last-child td { border-bottom: none; }
	.nowrap { white-space: nowrap; }
	.sub { display: block; color: var(--ink-400); font-size: 0.82rem; }
	.notes { min-width: 14rem; color: var(--ink-600); }
	.pill { display: inline-block; padding: 0.15rem 0.7rem; border-radius: 999px; font-size: 0.78rem; font-weight: 700; background: var(--tint); white-space: nowrap; }
	.pill--pass { background: #e8f6ee; color: #167a3d; }
	.pill--fail { background: #fdecea; color: #b3261e; }
</style>
