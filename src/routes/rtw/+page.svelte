<script>
	import { onMount } from 'svelte';
	import { mountRightToWorkTool } from '$lib/rtw/mount-tool.js';
	import RtwHero from '$lib/components/rtw/RtwHero.svelte';
	import RtwProgressRail from '$lib/components/rtw/RtwProgressRail.svelte';
	import RtwPrintHeading from '$lib/components/rtw/RtwPrintHeading.svelte';
	import StepWhoIsEngaged from '$lib/components/rtw/StepWhoIsEngaged.svelte';
	import StepEngagementType from '$lib/components/rtw/StepEngagementType.svelte';
	import StepCheckRoute from '$lib/components/rtw/StepCheckRoute.svelte';
	import StepConfirmations from '$lib/components/rtw/StepConfirmations.svelte';
	import StepTimeLimit from '$lib/components/rtw/StepTimeLimit.svelte';
	import StepOutcome from '$lib/components/rtw/StepOutcome.svelte';
	import CheckRecord from '$lib/components/rtw/CheckRecord.svelte';
	import '$lib/components/rtw/rtw.css';

	/**
	 * Right to Work check tool — originally Jeremy Ferendinos' standalone RTW
	 * Portal, integrated into the site as a normal page (v1.2). The check wording,
	 * the 1 Oct 2026 / 28-day follow-up date logic, the GOV.UK links and the
	 * register row column order are Jeremy's and must not change without his
	 * sign-off (see the handover note).
	 */
	onMount(mountRightToWorkTool);
</script>

<svelte:head>
	<title>Right to Work Check | Jewel Property Serve Ltd</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<RtwHero />

<section class="rtwp">
	<div class="rtwp__inner">
		<RtwProgressRail />
		<RtwPrintHeading />
		<StepWhoIsEngaged />
		<StepEngagementType />
		<StepCheckRoute />
		<StepConfirmations />
		<StepTimeLimit />
		<StepOutcome />
		<CheckRecord />
	</div>
</section>
