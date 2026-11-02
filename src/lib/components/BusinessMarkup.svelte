<script>
	import { localBusiness } from '$lib/seo/local-business.js';

	const scriptSafeMarkup = JSON.stringify(localBusiness).replaceAll('<', '\\u003c');
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${scriptSafeMarkup}</script>`}
</svelte:head>
