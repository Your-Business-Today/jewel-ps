<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { measurementId, isAnalyticsConfigured } from '$lib/analytics/measurement.js';
	import { startGoogleAnalytics } from '$lib/analytics/google-analytics.js';
	import { trackEnquirySent, trackPhoneTap } from '$lib/analytics/analytics-events.js';
	import { analyticsConsent, ConsentChoices } from '$lib/analytics/analytics-consent.svelte.js';
	import AnalyticsConsentBanner from './AnalyticsConsentBanner.svelte';

	let hasMounted = $state(false);
	let wasGranted = false;
	const isGranted = $derived(analyticsConsent.choice === ConsentChoices.granted);
	const isUndecided = $derived(analyticsConsent.choice === null);
	const shouldAskForConsent = $derived(isAnalyticsConfigured && hasMounted && isUndecided);
	const submittedForm = $derived(page.form);
	const currentAddress = $derived(page.url);

	onMount(() => {
		hasMounted = true;
		document.addEventListener('click', trackPhoneTap);
		return () => document.removeEventListener('click', trackPhoneTap);
	});

	$effect(() => {
		if (!isAnalyticsConfigured || !isGranted) return;
		startGoogleAnalytics(measurementId);
		wasGranted = true;
	});

	$effect(() => {
		const isWithdrawn = wasGranted && analyticsConsent.choice === ConsentChoices.declined;
		if (isWithdrawn) location.reload();
	});

	$effect(() => {
		if (submittedForm?.success) trackEnquirySent(currentAddress.pathname);
	});
</script>

{#if shouldAskForConsent}
	<AnalyticsConsentBanner />
{/if}
