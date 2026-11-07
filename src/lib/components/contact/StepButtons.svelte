<script>
	import Icon from '$lib/components/Icon.svelte';

	/** @type {{ isGuided: boolean, isFirstStep: boolean, isLastStep: boolean, isSubmitting: boolean, onback: () => void, onnext: () => void }} */
	let { isGuided, isFirstStep, isLastStep, isSubmitting, onback, onnext } = $props();

	const isSendShown = $derived(!isGuided || isLastStep);
</script>

<div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
	<p class="text-xs text-grey/80">We’ll only use your details to respond to your request.</p>
	<div class="flex gap-3">
		{#if isGuided && !isFirstStep}
			<button type="button" class="btn-ghost" onclick={onback}>Back</button>
		{/if}
		{#if isSendShown}
			<button type="submit" class="btn-gold" disabled={isSubmitting}>
				{isSubmitting ? 'Sending…' : 'Send request'}
				{#if !isSubmitting}<Icon name="arrow" size={18} />{/if}
			</button>
		{:else}
			<button type="button" class="btn-gold" onclick={onnext}>Next <Icon name="arrow" size={18} /></button>
		{/if}
	</div>
</div>
