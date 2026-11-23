<script>
	import { invalidateAll } from '$app/navigation';
	import PhotoUploadButton from '$lib/components/admin/PhotoUploadButton.svelte';
	import MediaUploads from '$lib/components/admin/media/MediaUploads.svelte';
	import MediaBuiltIn from '$lib/components/admin/media/MediaBuiltIn.svelte';

	let { data, form } = $props();

	let uploadError = $state('');
	const canListUploads = $derived(data.configured && !data.dbError);
</script>

<svelte:head>
	<title>Media | Admin</title>
</svelte:head>

<div class="head">
	<h1>Media</h1>
	{#if data.configured}
		<PhotoUploadButton onfinished={invalidateAll} onfailed={(message) => (uploadError = message)} />
	{/if}
</div>

<p class="hint">
	Photos upload straight to Supabase Storage at full resolution and are available everywhere in
	the admin — including the brochure builder's image picker. Use <em>Copy URL</em> to reference a
	photo anywhere else.
</p>

{#if !data.configured}
	<p class="warn">Supabase is not connected yet — see the dashboard for setup steps.</p>
{:else if data.dbError}
	<p class="warn">
		Could not load the media library — check that <code>supabase/2026-08-26-admin.sql</code>
		(which creates the <code>media</code> storage bucket) has been run.
		<br /><code class="warn__detail">{data.dbError}</code>
	</p>
{/if}

{#if uploadError}
	<p class="err" role="alert">{uploadError}</p>
{/if}
{#if form?.error}
	<p class="err" role="alert">{form.error}</p>
{/if}

{#if canListUploads}
	<MediaUploads uploads={data.uploads} />
{/if}

<MediaBuiltIn groups={data.groups} />

<style>
	.head { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
	.head h1 { margin: 0; }
	.hint { color: var(--ink-600); margin-block: 0.8rem 1.4rem; max-width: 52rem; }
	.warn { background: #fdf6ec; border: 1px solid #f0dfc0; border-radius: var(--radius); padding: 0.9rem 1.1rem; color: var(--ink-600); max-width: 46rem; }
	.warn__detail { display: inline-block; margin-top: 0.5rem; font-size: 0.82rem; word-break: break-word; color: #8a5a2a; }
	.err { background: #fdf1ee; border: 1px solid #f0cfc7; color: #a33a2a; border-radius: var(--radius); padding: 0.6rem 1rem; max-width: 46rem; }
</style>
