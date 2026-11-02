<script>
	import EnquiriesHeading from './EnquiriesHeading.svelte';
	import EnquiriesMessage from './EnquiriesMessage.svelte';

	/** @type {{ enquiryCount: number | null, newEnquiryCount: number }} */
	let { enquiryCount, newEnquiryCount } = $props();
</script>

<a class="card hero" href="/admin/enquiries" class:hero--alert={newEnquiryCount > 0}>
	<div class="hero__icon" aria-hidden="true">
		<svg viewBox="0 0 24 24"><path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm8 7L4.5 7h15L12 12zm0 2.3L21 8v10H3V8l9 6.3z" /></svg>
	</div>
	<div class="hero__text">
		<EnquiriesHeading {newEnquiryCount} />
		<EnquiriesMessage {enquiryCount} {newEnquiryCount} />
	</div>
	<span class="hero__cta">Open inbox →</span>
</a>

<style>
	.hero {
		display: flex;
		align-items: center;
		gap: 1.4rem;
		padding: 1.5rem 1.8rem;
		text-decoration: none;
		max-width: 56rem;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
	}

	.hero:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-lift);
	}

	.hero--alert {
		border-color: var(--gold-300);
		background: linear-gradient(120deg, #fff 55%, #faf3e6);
	}

	.hero__icon {
		flex-shrink: 0;
		width: 54px;
		height: 54px;
		border-radius: 14px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--accent-500);
	}

	.hero--alert .hero__icon {
		background: var(--gold-500);
	}

	.hero__icon svg {
		width: 26px;
		height: 26px;
		fill: #fff;
	}

	.hero__text {
		margin-right: auto;
	}




	.hero__cta {
		flex-shrink: 0;
		color: var(--accent-500);
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 0.95rem;
		white-space: nowrap;
	}
</style>
