<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { responsePromises } from '$lib/content/response-promises.js';
	import { shrinkPhotosIn } from '$lib/enquiry/shrink-photos.js';
	import { requestSteps, firstStepIndex, lastStepIndex, firstStepWithProblem } from '$lib/enquiry/request-steps.js';
	import { serviceRequestedIn } from '$lib/enquiry/requested-service.js';
	import { isStepReady } from '$lib/enquiry/step-check.js';
	import RequestProgress from './RequestProgress.svelte';
	import RequestStep from './RequestStep.svelte';
	import JobFields from './JobFields.svelte';
	import PhotoUploadField from './PhotoUploadField.svelte';
	import DetailsFields from './DetailsFields.svelte';
	import StepButtons from './StepButtons.svelte';
	import EnquirySent from './EnquirySent.svelte';
	import DeliveryFallback from './DeliveryFallback.svelte';

	/** @type {{ form: any }} */
	let { form } = $props();
	let isSubmitting = $state(false);
	let isGuided = $state(false);
	let currentStep = $state(0);
	/** @type {HTMLFieldSetElement[]} */
	let stepFieldsets = $state([]);

	const values = $derived(form?.values ?? { service: serviceRequestedIn(page.url) });
	const errors = $derived(form?.errors ?? {});
	const isSent = $derived(form?.success ?? false);
	const hasDeliveryFailed = $derived(Boolean(form?.unavailable || form?.failed));
	const quotePromise = responsePromises.quoteTurnaround;
	const [jobStep, photoStep, detailsStep] = requestSteps;

	const inputClass =
		'w-full rounded-2xl border border-white/10 bg-night/70 px-5 py-4 text-white placeholder:text-white/30 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30';

	onMount(() => {
		isGuided = true;
	});

	$effect(() => {
		currentStep = firstStepWithProblem(errors);
	});

	/** @param {number} stepIndex */
	function isShown(stepIndex) {
		return !isGuided || stepIndex === currentStep;
	}

	function goToNextStep() {
		if (isStepReady(stepFieldsets[currentStep])) currentStep += 1;
	}

	function goToPreviousStep() {
		currentStep -= 1;
	}

	/** @type {import('@sveltejs/kit').SubmitFunction} */
	async function sendRequest({ formData }) {
		isSubmitting = true;
		await shrinkPhotosIn(formData);
		return async ({ update }) => {
			await update();
			isSubmitting = false;
		};
	}
</script>

<div id="request" class="card scroll-mt-28 p-6 sm:p-10">
	{#if isSent}
		<EnquirySent />
	{:else}
		<h2 class="font-display text-2xl font-semibold text-white sm:text-3xl">Request a callout or quote</h2>
		<p class="mt-2 text-white/85">We ask for your enquiry to be submitted through our website, as there is site-specific information we need to respond properly.</p>
		{#if quotePromise}<p class="mt-2 text-white/85">{quotePromise}</p>{/if}
		<p class="mt-2 text-sm text-grey">Fields marked * are required.</p>

		{#if hasDeliveryFailed}
			<DeliveryFallback {values} />
		{/if}

		<form method="POST" enctype="multipart/form-data" use:enhance={sendRequest}>
			<div class="hidden" aria-hidden="true">
				<label>Company website <input type="text" name="company_website" tabindex="-1" autocomplete="off" /></label>
			</div>
			{#if isGuided}<RequestProgress steps={requestSteps} {currentStep} />{/if}
			<RequestStep step={jobStep} stepNumber={1} isShown={isShown(0)} bind:fieldset={stepFieldsets[0]}>
				<JobFields {values} {errors} {inputClass} />
			</RequestStep>
			<RequestStep step={photoStep} stepNumber={2} isShown={isShown(1)} bind:fieldset={stepFieldsets[1]}>
				<PhotoUploadField problem={errors.photos} {inputClass} />
			</RequestStep>
			<RequestStep step={detailsStep} stepNumber={3} isShown={isShown(2)} bind:fieldset={stepFieldsets[2]}>
				<DetailsFields {values} {errors} {inputClass} />
			</RequestStep>
			<StepButtons {isGuided} isFirstStep={currentStep === firstStepIndex} isLastStep={currentStep === lastStepIndex} {isSubmitting} onback={goToPreviousStep} onnext={goToNextStep} />
		</form>
	{/if}
</div>
