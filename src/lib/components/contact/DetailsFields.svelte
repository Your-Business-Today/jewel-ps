<script>
	import { enquiryLimits } from '$lib/enquiry/enquiry-limits.js';

	/** @type {{ values: Record<string, string>, errors: Record<string, string>, inputClass: string }} */
	let { values, errors, inputClass } = $props();

	const nameLimits = enquiryLimits.name;
	const emailLimits = enquiryLimits.email;
	const phoneLimits = enquiryLimits.phone;
</script>

<label class="block sm:col-span-2">
	<span class="mb-2 block text-sm font-medium text-white/80">Name *</span>
	<input type="text" name="name" required minlength={nameLimits.shortest} maxlength={nameLimits.longest} autocomplete="name" value={values.name ?? ''} class={inputClass} placeholder="Your name" />
	{#if errors.name}<span class="mt-1 block text-xs text-red-400">{errors.name}</span>{/if}
</label>
<label class="block">
	<span class="mb-2 block text-sm font-medium text-white/80">Email *</span>
	<input type="email" name="email" required maxlength={emailLimits.longest} autocomplete="email" value={values.email ?? ''} class={inputClass} placeholder="you@example.com" />
	{#if errors.email}<span class="mt-1 block text-xs text-red-400">{errors.email}</span>{/if}
</label>
<label class="block">
	<span class="mb-2 block text-sm font-medium text-white/80">Phone</span>
	<input type="tel" name="phone" maxlength={phoneLimits.longest} autocomplete="tel" value={values.phone ?? ''} class={inputClass} placeholder="07… / 020…" />
	{#if errors.phone}<span class="mt-1 block text-xs text-red-400">{errors.phone}</span>{/if}
</label>
