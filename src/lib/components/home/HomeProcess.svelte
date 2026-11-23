<script>
	import { onMount } from 'svelte';
	import { process } from '$lib/site.js';
	import { getGsap, prefersReducedMotion, reveal } from '$lib/motion.js';

	/** @type {HTMLElement} */ let processSection;
	/** @type {HTMLElement} */ let processLine;
	/** @type {HTMLElement[]} */ let processSteps = [];

	/** @param {Awaited<ReturnType<typeof getGsap>>} motionLibrary */
	function lightStepsInTurn({ gsap, ScrollTrigger }) {
		gsap.fromTo(
			processLine,
			{ scaleY: 0 },
			{ scaleY: 1, ease: 'none', scrollTrigger: { trigger: processSection, start: 'top 60%', end: 'bottom 75%', scrub: 0.4 } }
		);
		processSteps.forEach((step) => {
			ScrollTrigger.create({
				trigger: step,
				start: 'top 62%',
				end: 'bottom 40%',
				onToggle: (/** @type {{ isActive: boolean }} */ self) => step.classList.toggle('is-active', self.isActive)
			});
		});
	}

	onMount(() => {
		if (prefersReducedMotion()) return;
		/** @type {{ revert: () => void } | undefined} */
		let animation;
		getGsap().then((motionLibrary) => {
			animation = motionLibrary.gsap.context(() => lightStepsInTurn(motionLibrary));
		});
		return () => animation?.revert();
	});
</script>

<section bind:this={processSection} class="bg-night-2 py-20 sm:py-28">
	<div class="container-site grid gap-12 lg:grid-cols-12">
		<div class="lg:col-span-5">
			<div class="lg:sticky lg:top-32" use:reveal>
				<p class="kicker">How we work</p>
				<h2 class="h-section mt-5 text-white">We make things simple.</h2>
				<p class="mt-6 text-lg text-grey">A dedicated point of contact from your first call to final handover — so you always know what’s happening, and when.</p>
				<a href="/contact" class="btn-gold mt-9">Start a project</a>
			</div>
		</div>
		<div class="relative lg:col-span-7">
			<div class="absolute bottom-6 left-[1.35rem] top-6 w-px bg-white/10 sm:left-7"></div>
			<div bind:this={processLine} class="absolute bottom-6 left-[1.35rem] top-6 w-px origin-top bg-gold sm:left-7" style="transform: scaleY(0)"></div>
			<ol class="space-y-6">
				{#each process as processStep, position}
					<li bind:this={processSteps[position]} class="process-step relative grid grid-cols-[2.75rem_1fr] gap-5 sm:grid-cols-[3.5rem_1fr] sm:gap-8" use:reveal>
						<span class="step-dot relative z-10 mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-night-2 font-display text-sm font-semibold text-white/70 transition duration-500 sm:h-14 sm:w-14 sm:text-base">{processStep.step}</span>
						<div class="step-card rounded-[1.25rem] border border-white/[0.06] bg-night p-6 transition duration-500 sm:p-8">
							<h3 class="font-display text-2xl font-semibold text-white">{processStep.title}</h3>
							<p class="mt-3 text-grey">{processStep.text}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style>
	:global(.process-step.is-active .step-dot) {
		border-color: #c09a51;
		background: #c09a51;
		color: #080c14;
		box-shadow: 0 0 0 8px rgba(192, 154, 81, 0.15);
	}
	:global(.process-step.is-active .step-card) {
		border-color: rgba(192, 154, 81, 0.4);
	}
</style>
