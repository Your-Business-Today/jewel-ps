<script>
	/** @type {{ step: { title: string, intro: string }, stepNumber: number, isShown: boolean, fieldset?: HTMLFieldSetElement, children: import('svelte').Snippet }} */
	let { step, stepNumber, isShown, fieldset = $bindable(), children } = $props();
</script>

<fieldset bind:this={fieldset} hidden={!isShown} class="mt-8">
	<legend class="font-display text-lg font-semibold text-white">
		<span class="mr-2 text-gold">Step {stepNumber}.</span>{step.title}
	</legend>
	<p class="mt-2 text-sm text-grey">{step.intro}</p>
	<div class="mt-5 grid gap-5 sm:grid-cols-2">
		{@render children()}
	</div>
</fieldset>
