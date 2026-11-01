<script>
	import { isAnalyticsConfigured } from '$lib/analytics/measurement.js';
	import { reopenConsentChoice } from '$lib/analytics/analytics-consent.svelte.js';
</script>

{#if isAnalyticsConfigured}
	<button type="button" class="transition hover:text-gold" onclick={reopenConsentChoice}>Cookie choices</button>
{/if}
