<script>
	import { enhance } from '$app/forms';
	import ReviewSendOutcome from '$lib/components/admin/reviews/ReviewSendOutcome.svelte';

	/** @type {{ canSend: boolean, form: { values?: { name: string, email: string, work: string }, error?: string, askedBefore?: string, sentTo?: string } | null }} */
	let { canSend, form } = $props();

	const blank = { name: '', email: '', work: '' };
	const values = $derived(form?.values ?? blank);
	const askedBefore = $derived(form?.askedBefore ?? '');
	const error = $derived(form?.error ?? '');
	const sentTo = $derived(form?.sentTo ?? '');
</script>

<form class="card ask" method="POST" action="?/send" use:enhance>
	<h2>Send a review request</h2>
	<label>
		<span>Client’s name</span>
		<input name="name" value={values.name} required autocomplete="off" />
	</label>
	<label>
		<span>Email</span>
		<input name="email" type="email" value={values.email} required autocomplete="off" />
	</label>
	<label>
		<span>The work we did <em>(optional, e.g. “the kitchen refurbishment at Flat 4”)</em></span>
		<input name="work" value={values.work} autocomplete="off" />
	</label>

	<ReviewSendOutcome {askedBefore} {error} {sentTo} />

	<button class="btn btn--primary" disabled={!canSend}>Send review request</button>
</form>

<style>
	.ask {
		display: grid;
		gap: 1rem;
		max-width: 36rem;
		margin-block: 1.4rem 2.4rem;
		padding: 1.4rem 1.6rem;
	}

	input:not([type='checkbox']) {
		font: inherit;
		padding: 0.65rem 0.9rem;
		border: 1px solid var(--line);
		border-radius: var(--radius);
	}

	input:focus {
		outline: 2px solid var(--accent-500);
		outline-offset: 1px;
	}

	h2 {
		margin: 0;
	}

	label {
		display: grid;
		gap: 0.35rem;
		font-size: 0.9rem;
		color: var(--ink-600);
	}

	em {
		color: var(--ink-400);
		font-style: normal;
	}

	button {
		justify-self: start;
	}
</style>
