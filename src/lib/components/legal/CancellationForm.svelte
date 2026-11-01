<script>
	/** @type {{ form: { intro: string, recipient: string, notice: string, fields: string[] } }} */
	let { form } = $props();
</script>

<div id="cancellation-form">
	<h2 class="font-display text-xl font-semibold text-white">Appendix A: Cancellation form</h2>
	<p class="mt-4">{form.intro}</p>
	<p class="mt-4 text-white">{form.recipient}</p>
	<p class="mt-4">{form.notice}</p>
	<dl class="mt-6">
		{#each form.fields as field}
			<div class="grid grid-cols-1 gap-2 border-t border-white/10 py-4 sm:grid-cols-[16rem_1fr]">
				<dt class="text-sm font-semibold text-white">{field}</dt>
				<dd class="min-h-[1.5rem] border-b border-dashed border-white/20"></dd>
			</div>
		{/each}
	</dl>
</div>
