<script>
	/** @type {{ steps: { title: string }[], currentStep: number }} */
	let { steps, currentStep } = $props();
</script>

<ol class="mt-8 flex gap-3" aria-label="Request steps">
	{#each steps as step, stepIndex}
		{@const isReached = stepIndex <= currentStep}
		<li class="flex-1" aria-current={stepIndex === currentStep ? 'step' : undefined}>
			<span class="block h-1 rounded-full {isReached ? 'bg-gold' : 'bg-white/10'}"></span>
			<span class="mt-2 block text-xs {isReached ? 'text-white' : 'text-grey/80'}">{stepIndex + 1}. {step.title}</span>
		</li>
	{/each}
</ol>
