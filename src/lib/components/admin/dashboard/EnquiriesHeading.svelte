<script>
	/** @type {{ newEnquiryCount: number }} */
	let { newEnquiryCount } = $props();
</script>

<h2 class="hero__title">
	Enquiries
	{#if newEnquiryCount > 0}
		<span class="hero__badge">{newEnquiryCount} new</span>
	{/if}
</h2>

<style>
	h2.hero__title {
		font-size: 1.3rem;
		margin-bottom: 0.15rem;
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
	}

	.hero__badge {
		background: var(--gold-500);
		color: #fff;
		font-family: var(--font-body);
		font-size: 0.75rem;
		font-weight: 600;
		border-radius: 999px;
		padding: 0.2rem 0.7rem;
	}
</style>
