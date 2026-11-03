<script>
	import { privacyNoticeIssue, privacyIntroduction, privacySections } from '$lib/data/legal/privacy-notice.js';
	import Seo from '$lib/components/Seo.svelte';
	import LegalDocument from '$lib/components/legal/LegalDocument.svelte';
	import LegalClauses from '$lib/components/legal/LegalClauses.svelte';

	const issueLine = `Issue ${privacyNoticeIssue.number}, ${privacyNoticeIssue.date}`;
</script>

<Seo
	title="Privacy notice"
	description="What personal information Jewel Property Serve holds about clients, tenants, building contacts, site operatives and website visitors, why, for how long, and your rights."
/>

<LegalDocument kicker="Legal" title="Privacy notice" {issueLine}>
	<p>{privacyIntroduction}</p>
	<LegalClauses clauses={privacySections} />
</LegalDocument>
