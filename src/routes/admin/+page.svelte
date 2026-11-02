<script>
	import DashboardHead from '$lib/components/admin/dashboard/DashboardHead.svelte';
	import DashboardNotice from '$lib/components/admin/dashboard/DashboardNotice.svelte';
	import EnquiriesHeroCard from '$lib/components/admin/dashboard/EnquiriesHeroCard.svelte';
	import EnquiryStats from '$lib/components/admin/dashboard/EnquiryStats.svelte';
	import RecentEnquiries from '$lib/components/admin/dashboard/RecentEnquiries.svelte';
	import ContentTiles from '$lib/components/admin/dashboard/ContentTiles.svelte';

	let { data } = $props();

	const isDatabaseReady = $derived(data.configured && !data.dbError);
</script>

<svelte:head>
	<title>Admin | Jewel Property Serve</title>
</svelte:head>

<DashboardHead />
<DashboardNotice configured={data.configured} dbError={data.dbError} />
<EnquiriesHeroCard enquiryCount={data.enquiryCount} newEnquiryCount={data.newEnquiryCount} />

{#if isDatabaseReady}
	<EnquiryStats
		newEnquiryCount={data.newEnquiryCount}
		weekCount={data.weekCount}
		enquiryCount={data.enquiryCount}
	/>
{/if}

{#if data.recentEnquiries.length > 0}
	<RecentEnquiries enquiries={data.recentEnquiries} />
{/if}

<ContentTiles
	mediaCount={data.mediaCount}
	brochureCount={data.brochureCount}
	rtwCount={data.rtwCount}
/>
