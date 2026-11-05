<script>
	/** @type {{ reviewLink: string, ratingConfigured: boolean, emailConfigured: boolean }} */
	let { reviewLink, ratingConfigured, emailConfigured } = $props();
</script>

{#if !reviewLink}
	<p class="warn">
		The Google Place ID is not set, so there is no review link yet. Add <code>GOOGLE_PLACE_ID</code>
		in Vercel → Settings → Environment Variables and redeploy.
	</p>
{/if}
{#if !ratingConfigured}
	<p class="warn">
		The homepage cannot show the live star rating until both <code>GOOGLE_PLACES_API_KEY</code> and
		<code>GOOGLE_PLACE_ID</code> are set.
	</p>
{/if}
{#if !emailConfigured}
	<p class="warn">Email is not set up (<code>RESEND_API_KEY</code>), so requests cannot be sent.</p>
{/if}

<style>
	.warn {
		background: var(--warn-tint);
		border: 1px solid var(--warn-line);
		border-radius: var(--radius);
		padding: 0.9rem 1.1rem;
		color: var(--ink-600);
		max-width: 46rem;
	}
</style>
