<script>
	import CopyUrlButton from './CopyUrlButton.svelte';

	/** @type {{ url: string, alt?: string, children?: import('svelte').Snippet }} */
	let { url, alt = '', children } = $props();
</script>

<figure class="cell card">
	<a href={url} target="_blank" rel="noopener">
		<img src={url} {alt} loading="lazy" />
	</a>
	<figcaption>
		<CopyUrlButton {url} />
		{@render children?.()}
	</figcaption>
</figure>

<style>
	.cell { margin: 0; overflow: hidden; display: flex; flex-direction: column; }
	.cell a { display: block; aspect-ratio: 4 / 3; background: var(--tint); }
	.cell img { width: 100%; height: 100%; object-fit: cover; display: block; }
	.cell figcaption { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; padding: 0.4rem 0.7rem; font-size: 0.8rem; }
	figcaption :global(.linkish) { font-size: 0.8rem; padding: 0.15rem 0; }
</style>
