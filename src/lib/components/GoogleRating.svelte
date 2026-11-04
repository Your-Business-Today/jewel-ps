<script>
	import GoogleStars from '$lib/components/GoogleStars.svelte';

	/** @type {{ rating: import('$lib/server/google-reviews.js').GoogleRating | null, reviewLink: string }} */
	let { rating, reviewLink } = $props();

	const shownRating = $derived(rating ? rating.rating.toFixed(1) : '');
	const reviewWord = $derived(rating?.reviewCount === 1 ? 'review' : 'reviews');
	const ratingLink = $derived(rating?.profileUrl || reviewLink);
	const hasAnything = $derived(Boolean(rating || reviewLink));
</script>

{#if hasAnything}
	<div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
		{#if rating}
			<a
				href={ratingLink}
				target="_blank"
				rel="noopener"
				class="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 transition hover:border-gold/50"
				aria-label="Rated {shownRating} out of 5 on Google from {rating.reviewCount} {reviewWord}"
			>
				<span class="font-display text-lg font-semibold text-white">{shownRating}</span>
				<GoogleStars rating={rating.rating} />
				<span class="text-sm text-grey transition group-hover:text-white">
					{rating.reviewCount} {reviewWord} on Google
				</span>
			</a>
		{/if}
		{#if reviewLink}
			<a href={reviewLink} target="_blank" rel="noopener" class="text-sm font-medium text-gold underline-offset-4 hover:underline">
				Worked with us? Review us on Google
			</a>
		{/if}
	</div>
{/if}
