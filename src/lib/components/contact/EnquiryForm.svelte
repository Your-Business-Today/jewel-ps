<script>
	import { enhance } from '$app/forms';
	import { responsePromises } from '$lib/content/response-promises.js';
	import { shrinkPhotosIn } from '$lib/enquiry/shrink-photos.js';
	import Icon from '$lib/components/Icon.svelte';
	import EnquiryFields from './EnquiryFields.svelte';
	import PhotoUploadField from './PhotoUploadField.svelte';
	import EnquirySent from './EnquirySent.svelte';
	import DeliveryFallback from './DeliveryFallback.svelte';

	/** @type {{ form: any }} */
	let { form } = $props();
	let isSubmitting = $state(false);

	const values = $derived(form?.values ?? {});
	const errors = $derived(form?.errors ?? {});
	const isSent = $derived(form?.success ?? false);
	const hasDeliveryFailed = $derived(Boolean(form?.unavailable || form?.failed));
	const quotePromise = responsePromises.quoteTurnaround;

	const inputClass =
		'w-full rounded-2xl border border-white/10 bg-night/70 px-5 py-4 text-white placeholder:text-white/30 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30';

	/** @type {import('@sveltejs/kit').SubmitFunction} */
	async function sendEnquiry({ formData }) {
		isSubmitting = true;
		await shrinkPhotosIn(formData);
		return async ({ update }) => {
			await update();
			isSubmitting = false;
		};
	}
</script>

<div class="card p-6 sm:p-10">
	{#if isSent}
		<EnquirySent />
	{:else}
		<h2 class="font-display text-2xl font-semibold text-white sm:text-3xl">Request a free quote</h2>
		{#if quotePromise}<p class="mt-2 text-white/85">{quotePromise}</p>{/if}
		<p class="mt-2 text-sm text-grey">Fields marked * are required.</p>

		{#if hasDeliveryFailed}
			<DeliveryFallback {values} />
		{/if}

		<form method="POST" enctype="multipart/form-data" class="mt-8 grid gap-5 sm:grid-cols-2" use:enhance={sendEnquiry}>
			<div class="hidden" aria-hidden="true">
				<label>Company website <input type="text" name="company_website" tabindex="-1" autocomplete="off" /></label>
			</div>
			<EnquiryFields {values} {errors} {inputClass} />
			<PhotoUploadField problem={errors.photos} {inputClass} />
			<div class="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
				<p class="text-xs text-grey/80">We’ll only use your details to respond to your enquiry.</p>
				<button type="submit" class="btn-gold" disabled={isSubmitting}>
					{isSubmitting ? 'Sending…' : 'Send enquiry'}
					{#if !isSubmitting}<Icon name="arrow" size={18} />{/if}
				</button>
			</div>
		</form>
	{/if}
</div>
