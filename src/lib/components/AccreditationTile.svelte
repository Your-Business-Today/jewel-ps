<script>
	/** @type {{ accreditation: import('$lib/site.js').Accreditation }} */
	let { accreditation } = $props();
</script>

<a href={accreditation.href} target={accreditation.href && '_blank'} rel={accreditation.href && 'noopener'} class="flex h-20 w-full items-center justify-center rounded-xl bg-white px-4 py-2">
	<img src={accreditation.image} alt={accreditation.name} class="h-full w-auto max-w-[9rem] object-contain" loading="lazy" />
</a>
<p class="mt-3 text-xs font-semibold text-white/85">{accreditation.name}</p>
<p class="mt-1 text-[11px] text-grey/70">{accreditation.registration ?? ''}</p>
