<script>
	import { enquiryTypes } from '$lib/site.js';

	/** @type {{ values: Record<string, string>, errors: Record<string, string>, inputClass: string }} */
	let { values, errors, inputClass } = $props();

	const chevron = `bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23C09A51%22 stroke-width=%222%22 stroke-linecap=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>')]`;
</script>

<label class="block">
	<span class="mb-2 block text-sm font-medium text-white/80">Name *</span>
	<input type="text" name="name" required autocomplete="name" value={values.name ?? ''} class={inputClass} placeholder="Your name" />
	{#if errors.name}<span class="mt-1 block text-xs text-red-400">{errors.name}</span>{/if}
</label>
<label class="block">
	<span class="mb-2 block text-sm font-medium text-white/80">Email *</span>
	<input type="email" name="email" required autocomplete="email" value={values.email ?? ''} class={inputClass} placeholder="you@example.com" />
	{#if errors.email}<span class="mt-1 block text-xs text-red-400">{errors.email}</span>{/if}
</label>
<label class="block">
	<span class="mb-2 block text-sm font-medium text-white/80">Phone</span>
	<input type="tel" name="phone" autocomplete="tel" value={values.phone ?? ''} class={inputClass} placeholder="07… / 020…" />
	{#if errors.phone}<span class="mt-1 block text-xs text-red-400">{errors.phone}</span>{/if}
</label>
<label class="block">
	<span class="mb-2 block text-sm font-medium text-white/80">Property postcode</span>
	<input type="text" name="postcode" autocomplete="postal-code" value={values.postcode ?? ''} class={inputClass} placeholder="e.g. W1B 5AW" />
</label>
<label class="block sm:col-span-2">
	<span class="mb-2 block text-sm font-medium text-white/80">What do you need help with?</span>
	<select name="service" class="{inputClass} appearance-none {chevron} bg-[length:16px] bg-[right_1.25rem_center] bg-no-repeat pr-12">
		{#each enquiryTypes as enquiryType}
			<option value={enquiryType} selected={values.service === enquiryType}>{enquiryType}</option>
		{/each}
	</select>
</label>
<label class="block sm:col-span-2">
	<span class="mb-2 block text-sm font-medium text-white/80">Tell us about the job *</span>
	<textarea name="message" required rows="5" class={inputClass} placeholder="A few details about the property and the works you need…">{values.message ?? ''}</textarea>
	{#if errors.message}<span class="mt-1 block text-xs text-red-400">{errors.message}</span>{/if}
</label>
