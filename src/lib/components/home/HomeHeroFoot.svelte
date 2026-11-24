<script>
	/** @type {{ element?: HTMLElement }} */
	let { element = $bindable() } = $props();
</script>

<div bind:this={element} class="mt-8 flex items-center justify-between border-t border-white/15 pt-5 text-[11px] uppercase tracking-[0.18em] text-white/55 sm:mt-12 sm:text-xs">
	<span><span class="hidden sm:inline">SafeContractor approved · NICEIC registered · </span>12-month guarantee<span class="sm:hidden"> · 20+ years</span></span>
	<span class="flex items-center gap-3">
		Scroll
		<span class="block h-8 w-px overflow-hidden bg-white/15"><span class="block h-1/2 w-full animate-[scrollcue_1.8s_ease-in-out_infinite] bg-gold"></span></span>
	</span>
</div>

<style>
	@keyframes scrollcue {
		0% { transform: translateY(-100%); }
		60%, 100% { transform: translateY(200%); }
	}
</style>
