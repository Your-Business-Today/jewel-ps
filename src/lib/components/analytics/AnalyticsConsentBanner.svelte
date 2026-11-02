<script>
	import { ConsentChoices, recordConsentChoice } from '$lib/analytics/analytics-consent.svelte.js';
</script>

<div class="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-xl rounded-3xl border border-white/10 bg-night/95 p-6 text-sm text-grey shadow-2xl sm:inset-x-6" role="dialog" aria-label="Analytics cookies">
	<p class="text-white/85">
		We would like to use Google Analytics cookies to see which pages bring us enquiries. They are only set if you agree.
		<a href="/privacy" class="font-semibold text-gold underline-offset-4 hover:underline">Privacy notice</a>
	</p>
	<div class="mt-5 flex flex-wrap gap-3">
		<button type="button" class="btn-gold !px-6 !py-3" onclick={() => recordConsentChoice(ConsentChoices.granted)}>Accept analytics</button>
		<button type="button" class="btn-ghost !px-6 !py-3" onclick={() => recordConsentChoice(ConsentChoices.declined)}>No thanks</button>
	</div>
</div>
