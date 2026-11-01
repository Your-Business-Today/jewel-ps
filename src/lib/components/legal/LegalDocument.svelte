<script>
	/** @type {{ kicker: string, title: string, issueLine: string, children: import('svelte').Snippet }} */
	let { kicker, title, issueLine, children } = $props();
</script>

<section class="bg-night pt-36 pb-24 lg:pt-44">
	<div class="container-site max-w-3xl">
		<p class="kicker">{kicker}</p>
		<h1 class="h-section mt-5 text-white">{title}</h1>
		<p class="mt-4 text-sm text-grey/70">{issueLine}</p>
		<div class="mt-10 space-y-12 leading-relaxed text-grey">
			{@render children()}
		</div>
	</div>
</section>
