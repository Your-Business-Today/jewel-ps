<script>
	import { enhance } from '$app/forms';
	import { TextKinds, TextLimits } from '$lib/text-slots.js';

	/** @type {{ textSlot: import('$lib/text-slots.js').TextSlot, savedText: string, error: string, isSaved: boolean }} */
	let { textSlot, savedText, error, isSaved } = $props();

	const shownText = $derived(savedText || textSlot.text);
	const longest = $derived(TextLimits[textSlot.kind]);
	const isLine = $derived(textSlot.kind === TextKinds.line);
</script>

<div class="card slot">
	<form method="POST" action="?/save" use:enhance={() => ({ update }) => update({ reset: false })}>
		<input type="hidden" name="slot" value={textSlot.slot} />
		<label>
			<span class="label">{textSlot.label}</span>
			{#if isLine}
				<input name="text" value={shownText} required maxlength={longest} />
			{:else}
				<textarea name="text" rows="4" required maxlength={longest}>{shownText}</textarea>
			{/if}
		</label>
		<p class="state">{savedText ? 'Changed in admin' : 'Default text'}{isSaved ? ' · saved' : ''}</p>
		{#if error}<p class="error">{error}</p>{/if}
		<div class="actions">
			<button class="btn btn--primary">Save</button>
			{#if savedText}<button class="btn btn--outline" formaction="?/reset" formnovalidate>Use the default</button>{/if}
		</div>
	</form>
</div>

<style>
	.slot { padding: 1rem 1.2rem; }
	form, label { display: grid; gap: 0.45rem; }
	.label { font-weight: 600; font-size: 0.9rem; }
	input, textarea { font: inherit; padding: 0.55rem 0.8rem; border: 1px solid var(--line); border-radius: var(--radius); resize: vertical; }
	.state, .error { margin: 0; font-size: 0.8rem; }
	.state { color: var(--ink-400); }
	.error { color: var(--warn-ink); }
	.actions { display: flex; gap: 0.5rem; }
	button { font-size: 0.8rem; padding: 0.35rem 0.9rem; }
</style>
