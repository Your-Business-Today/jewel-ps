<script>
	/** @type {{ configured: boolean, dbError: string | null | undefined }} */
	let { configured, dbError } = $props();
</script>

{#if !configured}
	<p class="warn">
		Supabase is not connected yet. Set <code>SUPABASE_URL</code> and
		<code>SUPABASE_SERVICE_ROLE_KEY</code> environment variables (see README), run
		<code>supabase/schema.sql</code> and <code>supabase/2026-08-26-admin.sql</code> in the
		Supabase SQL editor, then redeploy.
	</p>
{:else if dbError}
	<p class="warn">
		Supabase is configured but unreachable — check the keys, and that
		<code>supabase/schema.sql</code> has been run.
		<br /><code class="warn__detail">{dbError}</code>
	</p>
{/if}

<style>
	.warn {
		background: #fdf6ec;
		border: 1px solid #f0dfc0;
		border-radius: var(--radius);
		padding: 0.9rem 1.1rem;
		color: var(--ink-600);
		max-width: 46rem;
		margin-bottom: 1.4rem;
	}

	.warn__detail {
		display: inline-block;
		margin-top: 0.5rem;
		font-size: 0.82rem;
		word-break: break-word;
		color: #8a5a2a;
	}
</style>
