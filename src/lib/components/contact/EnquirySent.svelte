<script>
	import { contact } from '$lib/site.js';
	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="flex flex-col items-start gap-4 py-8">
	<span class="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-night"><Icon name="check" size={26} /></span>
	<h2 class="font-display text-3xl font-semibold text-white">Thank you — we’ve got it.</h2>
	<p class="max-w-md text-grey">Your enquiry has been received and a member of our service desk will be in touch shortly. If it’s urgent, call us now on <a href={contact.phoneHref} class="font-semibold text-gold">{contact.phone}</a>.</p>
	<a href="/" class="btn-ghost mt-2">Back to home</a>
</div>
