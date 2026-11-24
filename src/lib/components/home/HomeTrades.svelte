<script>
	import { maintenanceServices } from '$lib/site.js';
	import { reveal } from '$lib/motion.js';

	const emergencyCalloutTitle = '24hr Emergency Callout';
	const trades = maintenanceServices.filter((service) => service.title !== emergencyCalloutTitle);

	/** @param {number} position */
	const numberFor = (position) => String(position + 1).padStart(2, '0');
</script>

<section class="py-20 sm:py-28">
	<div class="container-site">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" use:reveal>
			<div class="max-w-xl">
				<p class="kicker">Maintenance</p>
				<h2 class="h-section mt-5 text-white">Every trade. One call.</h2>
			</div>
			<a href="/maintenance" class="btn-ghost self-start sm:self-auto">All maintenance services</a>
		</div>
		<ol class="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3" use:reveal={{ stagger: true }}>
			{#each trades as trade, position}
				<li class="border-b border-white/10">
					<a href="/maintenance" class="group flex items-baseline gap-4 py-4 transition hover:text-gold">
						<span class="w-6 shrink-0 font-display text-xs text-gold/70">{numberFor(position)}</span>
						<span class="font-display text-lg font-medium text-white transition group-hover:text-gold sm:text-xl">{trade.title}</span>
					</a>
				</li>
			{/each}
		</ol>
	</div>
</section>
