<script>
	import { invalidateAll } from '$app/navigation';
	import InboxHeader from '$lib/components/admin/enquiries/InboxHeader.svelte';
	import InboxNotice from '$lib/components/admin/enquiries/InboxNotice.svelte';
	import InboxEmpty from '$lib/components/admin/enquiries/InboxEmpty.svelte';
	import EnquiryRow from '$lib/components/admin/enquiries/EnquiryRow.svelte';
	import InboxPager from '$lib/components/admin/enquiries/InboxPager.svelte';

	let { data, form } = $props();

	/** @type {Set<string>} */
	let open = $state(new Set());
	/** @type {string | null} */
	let confirmDelete = $state(null);

	/** @param {string} id */
	async function markReadQuietly(id) {
		const body = new FormData();
		body.set('id', id);
		try {
			await fetch('?/markRead', { method: 'POST', body, headers: { 'x-sveltekit-action': 'true' } });
			await invalidateAll();
		} catch {
			/* leave it unread — the explicit button still works */
		}
	}

	/**
	 * Expanding an unread enquiry marks it read in the background, like opening an email.
	 * @param {import('$lib/server/db.js').EnquiryRow} r
	 */
	async function toggle(r) {
		const next = new Set(open);
		if (next.has(r.id)) next.delete(r.id);
		else next.add(r.id);
		open = next;
		if (!next.has(r.id) || r.status !== 'new') return;
		await markReadQuietly(r.id);
	}
</script>

<svelte:head>
	<title>Enquiries | Admin | Jewel Property Serve</title>
</svelte:head>

<InboxHeader view={data.view} newCount={data.newCount} archivedCount={data.archivedCount} />
<InboxNotice configured={data.configured} dbError={data.dbError} formError={form?.error} />

{#if data.configured && !data.dbError}
	{#if data.rows.length === 0}
		<InboxEmpty isArchived={data.view === 'archived'} />
	{:else}
		<ul class="list">
			{#each data.rows as r (r.id)}
				<EnquiryRow
					enquiry={r}
					expanded={open.has(r.id)}
					isConfirmingDelete={confirmDelete === r.id}
					ontoggle={() => toggle(r)}
					onconfirmdelete={() => (confirmDelete = r.id)}
					oncanceldelete={() => (confirmDelete = null)}
				/>
			{/each}
		</ul>

		{#if data.totalPages > 1}
			<InboxPager page={data.page} totalPages={data.totalPages} total={data.total} view={data.view} />
		{/if}
	{/if}
{/if}

<style>
	.list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.7rem;
		max-width: 60rem;
	}
</style>
