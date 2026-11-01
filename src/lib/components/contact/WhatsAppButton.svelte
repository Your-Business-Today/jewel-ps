<script>
	import { whatsApp } from '$lib/content/response-promises.js';

	const chatAddress = `https://wa.me/${whatsApp.internationalNumber}`;
</script>

{#if whatsApp.internationalNumber}
	<a href={chatAddress} target="_blank" rel="noopener" class="btn-ghost lg:hidden">Message us on WhatsApp</a>
{/if}
