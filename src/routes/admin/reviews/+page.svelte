<script>
	import ReviewSetupNotices from '$lib/components/admin/reviews/ReviewSetupNotices.svelte';
	import ReviewRequestForm from '$lib/components/admin/reviews/ReviewRequestForm.svelte';
	import ReviewRequestsSent from '$lib/components/admin/reviews/ReviewRequestsSent.svelte';

	let { data, form } = $props();

	const canSend = $derived(Boolean(data.reviewLink && data.emailConfigured));
	const rating = $derived(data.rating);
	const shownRating = $derived(rating ? rating.rating.toFixed(1) : '');
	const reviewWord = $derived(rating?.reviewCount === 1 ? 'review' : 'reviews');
</script>

<svelte:head>
	<title>Google reviews | Admin | Jewel Property Serve</title>
</svelte:head>

<div class="head">
	<h1>Google reviews</h1>
	{#if data.reviewLink}
		<a class="btn btn--outline" href={data.reviewLink} target="_blank" rel="noopener">Our review page ↗</a>
	{/if}
</div>

<p class="intro">
	Ask a past client for a Google review. They get a short email from the website with a button
	straight to our review page; if they reply instead, it lands in the enquiries inbox.
</p>

{#if rating}
	<p class="rating card">
		<strong>{shownRating} ★</strong> from {rating.reviewCount} {reviewWord} on Google, as shown on the homepage.
	</p>
{/if}

<ReviewSetupNotices reviewLink={data.reviewLink} ratingConfigured={data.ratingConfigured} emailConfigured={data.emailConfigured} />
<ReviewRequestForm {canSend} {form} />
<ReviewRequestsSent dbConfigured={data.dbConfigured} dbError={data.dbError} requests={data.requests} />

<style>
	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 0.6rem;
	}

	.head h1 {
		margin: 0;
	}

	.intro {
		color: var(--ink-600);
		max-width: 52rem;
		margin-bottom: 1.4rem;
	}

	.rating {
		max-width: 46rem;
		margin-bottom: 1rem;
		padding: 0.9rem 1.1rem;
	}
</style>
