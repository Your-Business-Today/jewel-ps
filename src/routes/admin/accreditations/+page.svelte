<script>
	import AccreditationEditor from '$lib/components/admin/accreditations/AccreditationEditor.svelte';

	let { data, form } = $props();

	const canEdit = $derived(data.configured && !data.dbError);
	const nextPosition = $derived(Math.max(0, ...data.rows.map((row) => row.position)) + 1);
	const blank = $derived({ name: '', image: '', registration: '', expires: null, href: '', position: nextPosition });
	const failedId = $derived(form?.id ?? '');
	const error = $derived(form?.error ?? '');
</script>

<svelte:head>
	<title>Accreditations | Admin | Jewel Property Serve</title>
</svelte:head>

<h1>Accreditations</h1>
<p class="intro">
	The schemes shown in the “Accredited &amp; approved” strip on every page. A change shows on the
	site as soon as it is saved. A scheme past its expiry date is hidden by itself, so put the new
	date in when it renews.
</p>

{#if !data.configured}
	<p class="notice card">Supabase is not connected, so the site is showing the list kept in code.</p>
{:else if data.dbError}
	<p class="notice card">The accreditations could not be read: {data.dbError}</p>
{/if}

{#if canEdit}
	{#each data.rows as accreditation (accreditation.id)}
		<AccreditationEditor {accreditation} error={failedId === accreditation.id ? error : ''} groups={data.groups} uploads={data.uploads} canUpload={data.configured} />
	{/each}

	<h2>Add an accreditation</h2>
	<AccreditationEditor accreditation={blank} isNew error={failedId ? '' : error} groups={data.groups} uploads={data.uploads} canUpload={data.configured} />
{/if}

<style>
	h1 { margin-bottom: 0.4rem; }
	h2 { margin-top: 2rem; }
	.intro { color: var(--ink-600); max-width: 44rem; margin-bottom: 1.6rem; }
	.notice { padding: 1rem 1.2rem; }
</style>
