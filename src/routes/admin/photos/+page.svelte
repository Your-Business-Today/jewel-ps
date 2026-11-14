<script>
	import PhotoSlotCard from '$lib/components/admin/photos/PhotoSlotCard.svelte';

	let { data, form } = $props();

	const canEdit = $derived(data.configured && !data.dbError);
	const pages = $derived([...new Set(data.slots.map((photoSlot) => photoSlot.page))]);
	const chosen = $derived(/** @type {Record<string, string>} */ (data.chosen));
	const failedSlot = $derived(form?.slot ?? '');
	const error = $derived(form?.error ?? '');
</script>

<svelte:head>
	<title>Site photos | Admin | Jewel Property Serve</title>
</svelte:head>

<h1>Site photos</h1>
<p class="intro">
	The photos on the site’s pages. Change one and it shows on the site as soon as it is saved;
	“Use the default” puts the original photo back. New photos can be uploaded from the picker.
</p>

{#if !data.configured}
	<p class="notice card">Supabase is not connected, so the site is showing its default photos.</p>
{:else if data.dbError}
	<p class="notice card">The chosen photos could not be read: {data.dbError}</p>
{/if}

{#if canEdit}
	{#each pages as pageName (pageName)}
		<h2>{pageName}</h2>
		<div class="grid">
			{#each data.slots.filter((photoSlot) => photoSlot.page === pageName) as photoSlot (photoSlot.slot)}
				<PhotoSlotCard {photoSlot} chosenImage={chosen[photoSlot.slot] ?? ''} error={failedSlot === photoSlot.slot ? error : ''} groups={data.groups} uploads={data.uploads} canUpload={data.configured} />
			{/each}
		</div>
	{/each}
{/if}

<style>
	h2 { margin-top: 2rem; }
	.intro { color: var(--ink-600); max-width: 44rem; margin-bottom: 1.2rem; }
	.notice { padding: 1rem 1.2rem; }
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); gap: 1rem; }
</style>
