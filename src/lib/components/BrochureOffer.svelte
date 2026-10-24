<script>
	import { reveal } from '$lib/motion.js';

	/** @type {{ text: string, title?: string }} */
	let { text, title = 'Everything your board needs to see.' } = $props();
</script>

<section class="bg-night py-20 sm:py-24">
	<div class="container-site">
		<div class="card flex flex-col gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between" use:reveal>
			<div class="max-w-2xl">
				<p class="kicker">Credentials pack</p>
				<h2 class="h-section mt-5 text-white">{title}</h2>
				<p class="mt-5 text-lg text-grey">{text}</p>
			</div>
			<a href="/brochure" class="btn-gold shrink-0">View our brochure</a>
		</div>
	</div>
</section>
