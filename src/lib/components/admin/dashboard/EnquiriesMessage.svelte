<script>
	/** @type {{ enquiryCount: number | null, newEnquiryCount: number }} */
	let { enquiryCount, newEnquiryCount } = $props();
</script>

<p class="hero__message">
	{#if enquiryCount === null}
		Quote requests from the website will land here once Supabase is connected.
	{:else if newEnquiryCount > 0}
		You have {newEnquiryCount} unread enquir{newEnquiryCount === 1 ? 'y' : 'ies'}
		waiting for a reply.
	{:else if enquiryCount === 0}
		No enquiries yet — new requests from the contact form will appear here instantly.
	{:else}
		All caught up — {enquiryCount} enquir{enquiryCount === 1 ? 'y' : 'ies'} in the
		inbox, nothing unread.
	{/if}
</p>

<style>
	p.hero__message {
		margin: 0;
		color: var(--ink-600);
	}
</style>
