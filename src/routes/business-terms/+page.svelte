<script>
	import { businessTermsIssue, businessKeyFacts, businessClauses } from '$lib/data/legal/business-terms.js';
	import Seo from '$lib/components/Seo.svelte';
	import LegalDocument from '$lib/components/legal/LegalDocument.svelte';
	import KeyFacts from '$lib/components/legal/KeyFacts.svelte';
	import LegalClauses from '$lib/components/legal/LegalClauses.svelte';

	const issueLine = `Issue ${businessTermsIssue.number}, ${businessTermsIssue.date}`;
</script>

<Seo
	title="Terms for business clients"
	description="The terms Jewel Property Serve works to for managing agents, freeholders, landlords, contractors and other business clients: quotes, variations, payment, CIS and VAT, liability and which terms apply."
/>

<LegalDocument kicker="Legal" title="Terms for business clients" {issueLine}>
	<KeyFacts facts={businessKeyFacts} />
	<LegalClauses clauses={businessClauses} />
</LegalDocument>
