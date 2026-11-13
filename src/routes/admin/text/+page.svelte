<script>
	import TextSlotCard from '$lib/components/admin/text/TextSlotCard.svelte';

	let { data, form } = $props();

	const pages = $derived([...new Set(data.slots.map((textSlot) => textSlot.page))]);
	const saved = $derived(/** @type {Record<string, string>} */ (data.saved));
	const failedSlot = $derived(form?.slot ?? '');
	const savedSlot = $derived(form?.savedSlot ?? '');
	const error = $derived(form?.error ?? '');
</script>

<svelte:head>
	<title>Site text | Admin | Jewel Property Serve</title>
</svelte:head>

<h1>Site text</h1>
<p class="intro">
	The headlines and descriptions on the site’s pages. A change shows on the site as soon as it is
	saved; “Use the default” puts the original words back. The legal pages are not here: Jeremy
	approves every change to them.
</p>

{#if !data.configured}
	<p class="notice card">Supabase is not connected, so the site is showing its default text and nothing can be saved.</p>
{/if}

{#each pages as pageName (pageName)}
	<h2>{pageName}</h2>
	<div class="grid">
		{#each data.slots.filter((textSlot) => textSlot.page === pageName) as textSlot (textSlot.slot)}
			<TextSlotCard {textSlot} savedText={saved[textSlot.slot] ?? ''} error={failedSlot === textSlot.slot ? error : ''} isSaved={savedSlot === textSlot.slot} />
		{/each}
	</div>
{/each}

<style>
	h2 { margin-top: 2rem; }
	.intro { color: var(--ink-600); max-width: 44rem; margin-bottom: 1.2rem; }
	.notice { padding: 1rem 1.2rem; }
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr)); gap: 1rem; }
</style>
