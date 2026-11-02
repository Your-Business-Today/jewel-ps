<script>
	import ContentTile from './ContentTile.svelte';
	import { contentSections } from '$lib/admin/content-sections.js';

	/** @type {{ mediaCount: number | null, brochureCount: number | null, rtwCount: number | null }} */
	let { mediaCount, brochureCount, rtwCount } = $props();

	const sections = $derived(contentSections({ mediaCount, brochureCount, rtwCount }));
</script>

<h2 class="section-label">Site content</h2>

<div class="tiles">
	{#each sections as section (section.href)}
		<ContentTile {section} />
	{/each}
</div>

<style>
	.section-label {
		font-size: 0.82rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--ink-400);
		margin: 2.2rem 0 1rem;
	}

	.tiles {
		display: grid;
		gap: 1rem;
		max-width: 56rem;
	}

	@media (min-width: 700px) {
		.tiles {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
