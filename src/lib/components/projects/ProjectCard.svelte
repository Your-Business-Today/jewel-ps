<script>
	const detailColumnsByCount = ['', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3'];

	/** @type {{ project: { name: string, location: string, summary: string, photos: { src: string, alt: string }[] } }} */
	let { project } = $props();

	const leadPhoto = $derived(project.photos[0]);
	const detailPhotos = $derived(project.photos.slice(1));
	const detailColumns = $derived(detailColumnsByCount[detailPhotos.length]);
</script>

<article class="card flex flex-col overflow-hidden">
	<img src={leadPhoto.src} alt={leadPhoto.alt} class="aspect-[4/3] w-full object-cover" loading="lazy" />
	<div class="grid gap-1 pt-1 {detailColumns}">
		{#each detailPhotos as detailPhoto}
			<img src={detailPhoto.src} alt={detailPhoto.alt} class="h-36 w-full object-cover" loading="lazy" />
		{/each}
	</div>
	<div class="flex flex-1 flex-col p-8">
		<p class="kicker">{project.location}</p>
		<h3 class="mt-4 font-display text-2xl font-semibold text-white">{project.name}</h3>
		<p class="mt-4 text-sm leading-relaxed text-grey">{project.summary}</p>
	</div>
</article>
