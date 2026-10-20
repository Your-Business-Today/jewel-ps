<script>
	import { accreditationsInForce } from '$lib/accreditations.js';
	import { reveal } from '$lib/motion.js';
	import AccreditationTile from './AccreditationTile.svelte';

	const accreditations = accreditationsInForce();
</script>

<section class="border-y border-white/[0.06] bg-night">
	<div class="container-site py-12">
		<p class="text-center font-display text-[11px] font-semibold uppercase tracking-kicker text-grey/70">Accredited &amp; approved</p>
		<ul class="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4" use:reveal={{ stagger: true }}>
			{#each accreditations as accreditation (accreditation.name)}
				<li class="flex flex-col items-center text-center"><AccreditationTile {accreditation} /></li>
			{/each}
		</ul>
	</div>
</section>
