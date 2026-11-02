<script>
	/** @type {{ configured: boolean, dbError: string | null, formError: string | undefined }} */
	let { configured, dbError, formError } = $props();
</script>

{#if !configured}
	<p class="warn">
		<strong>Supabase is not connected</strong> — set <code>SUPABASE_URL</code> and
		<code>SUPABASE_SERVICE_ROLE_KEY</code> to switch the inbox on.
	</p>
{:else if dbError}
	<p class="warn">
		<strong>Couldn't load enquiries.</strong>
		<br /><code class="warn__detail">{dbError}</code>
	</p>
{:else if formError}
	<p class="err" role="alert">{formError}</p>
{/if}

<style>
	.warn {
		background: #fdf6ec;
		border: 1px solid #f0dfc0;
		border-radius: var(--radius);
		padding: 0.9rem 1.1rem;
		color: var(--ink-600);
		max-width: 46rem;
	}

	.warn__detail {
		display: inline-block;
		margin-top: 0.5rem;
		font-size: 0.82rem;
		word-break: break-word;
		color: #8a5a2a;
	}

	.err {
		background: #fdf1ee;
		border: 1px solid #f0cfc7;
		color: #a33a2a;
		border-radius: var(--radius);
		padding: 0.6rem 1rem;
		max-width: 46rem;
	}
</style>
