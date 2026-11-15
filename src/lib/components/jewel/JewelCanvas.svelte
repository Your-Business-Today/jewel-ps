<script>
	import { onMount } from 'svelte';
	import { canAnimateJewel } from '$lib/jewel/jewel-support.js';
	import { whenNearAndIdle } from '$lib/jewel/when-near-and-idle.js';
	import JewelStill from './JewelStill.svelte';

	/** @type {{ shape?: import('$lib/jewel/jewel-shapes.js').JewelShapeName, label: string }} */
	let { shape = 'brilliantJewel', label } = $props();

	/** @type {HTMLCanvasElement} */ let canvas;
	/** @type {import('$lib/jewel/jewel-stage.js').JewelStage | undefined} */
	let stage = $state();

	onMount(() => {
		if (!canAnimateJewel()) return;
		let isMounted = true;
		const stopWaiting = whenNearAndIdle(canvas, () =>
			import('$lib/jewel/jewel-stage.js').then(({ JewelStage }) => {
				if (isMounted) stage = new JewelStage(canvas, shape);
			})
		);
		return () => {
			isMounted = false;
			stopWaiting();
			stage?.destroy();
		};
	});

	$effect(() => stage?.show(shape));
</script>

<div class="relative h-full w-full" role="img" aria-label={label}>
	<canvas bind:this={canvas} class="absolute inset-0 h-full w-full transition-opacity duration-1000 {stage ? 'opacity-100' : 'opacity-0'}"></canvas>
	{#if !stage}
		<JewelStill />
	{/if}
</div>
