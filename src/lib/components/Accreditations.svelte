<script>
	import { accreditationsInForce } from '$lib/accreditations.js';
	import { reveal } from '$lib/motion.js';

	const accreditations = accreditationsInForce();
</script>

<section class="border-y border-white/[0.06] bg-night">
	<div class="container-site py-12">
		<p class="text-center font-display text-[11px] font-semibold uppercase tracking-kicker text-grey/70">Accredited &amp; approved</p>
		<ul class="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4" use:reveal={{ stagger: true }}>
			{#each accreditations as accreditation (accreditation.name)}
				<li class="flex flex-col items-center text-center">
					<svelte:element
						this={accreditation.href ? 'a' : 'div'}
						href={accreditation.href}
						target={accreditation.href ? '_blank' : undefined}
						rel={accreditation.href ? 'noopener' : undefined}
						class="flex h-20 w-full items-center justify-center rounded-xl bg-white px-4 py-2"
					>
						<img src={accreditation.image} alt={accreditation.name} class="h-full w-auto max-w-[9rem] object-contain" loading="lazy" />
					</svelte:element>
					<p class="mt-3 text-xs font-semibold text-white/85">{accreditation.name}</p>
					{#if accreditation.registration}
						<p class="mt-1 text-[11px] text-grey/70">{accreditation.registration}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>
