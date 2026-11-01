<script>
	import { consumerTermsIssue, consumerKeyFacts, consumerClauses, cancellationForm } from '$lib/data/legal/consumer-terms.js';
	import Seo from '$lib/components/Seo.svelte';
	import LegalDocument from '$lib/components/legal/LegalDocument.svelte';
	import KeyFacts from '$lib/components/legal/KeyFacts.svelte';
	import LegalClauses from '$lib/components/legal/LegalClauses.svelte';
	import CancellationForm from '$lib/components/legal/CancellationForm.svelte';

	const issueLine = `Issue ${consumerTermsIssue.number}, ${consumerTermsIssue.date}`;
</script>

<Seo
	title="Terms for private clients"
	description="The terms Jewel Property Serve works to when a private client approves a quote for work on their own home, with your right to cancel and the cancellation form."
/>

<LegalDocument kicker="Legal" title="Terms for private clients" {issueLine}>
	<KeyFacts facts={consumerKeyFacts} />
	<LegalClauses clauses={consumerClauses} />
	<CancellationForm form={cancellationForm} />
</LegalDocument>
