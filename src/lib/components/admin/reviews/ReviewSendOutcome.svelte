<script>
	import { ukDateTime } from '$lib/admin/uk-date-time.js';

	/** @type {{ askedBefore: string, error: string, sentTo: string }} */
	let { askedBefore, error, sentTo } = $props();
</script>

{#if askedBefore}
	<p class="warn">
		{error} Last asked {ukDateTime(askedBefore)}.
		<label class="again"><input type="checkbox" name="again" value="yes" /> Send it again anyway</label>
	</p>
{:else if error}
	<p class="warn">{error}</p>
{/if}
{#if sentTo}
	<p class="sent">Sent to {sentTo}.</p>
{/if}

<style>
	.warn {
		background: var(--warn-tint);
		border: 1px solid var(--warn-line);
		border-radius: var(--radius);
		padding: 0.9rem 1.1rem;
	}

	.again {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.6rem;
	}

	.sent {
		color: var(--ok-ink);
		font-weight: 600;
	}
</style>
