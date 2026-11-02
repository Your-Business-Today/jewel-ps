<script>
	/** @type {{ isSaved: boolean, error: string | undefined }} */
	let { isSaved, error } = $props();
</script>

{#if isSaved}
	<p class="ok" role="status">Saved.</p>
{/if}
{#if error}
	<p class="err" role="alert">{error}</p>
{/if}

<style>
	.ok {
		background: #eef7ee;
		border: 1px solid #cfe6cf;
		border-radius: var(--radius);
		padding: 0.6rem 1rem;
	}

	.err {
		background: #fdf1ee;
		border: 1px solid #f0cfc7;
		color: #a33a2a;
		border-radius: var(--radius);
		padding: 0.6rem 1rem;
	}
</style>
