<script>
	import { enhance } from '$app/forms';
	import { AccreditationLimits } from '$lib/accreditation-limits.js';
	import AccreditationLogoField from './AccreditationLogoField.svelte';

	/**
	 * @type {{
	 *   accreditation: { id?: string, name: string, image: string, registration: string, expires: string | null, href: string, position: number },
	 *   isNew?: boolean,
	 *   error?: string,
	 *   groups: { label: string, images: string[] }[],
	 *   uploads: string[],
	 *   canUpload: boolean
	 * }}
	 */
	let { accreditation, isNew = false, error = '', groups, uploads, canUpload } = $props();

	const today = new Date().toISOString().slice(0, 10);
	const hasLapsed = $derived(Boolean(accreditation.expires && accreditation.expires < today));
	const action = $derived(isNew ? '?/add' : '?/save');

	/** @param {MouseEvent} event */
	function confirmRemoval(event) {
		if (!confirm(`Take ${accreditation.name} off the site?`)) event.preventDefault();
	}
</script>

<form class="card editor" method="POST" {action} use:enhance={() => ({ update }) => update({ reset: isNew })}>
	<input type="hidden" name="id" value={accreditation.id ?? ''} />
	<AccreditationLogoField image={accreditation.image} name={accreditation.name} {groups} {uploads} {canUpload} />
	<div class="fields">
		<label class="wide"><span>Scheme</span><input name="name" value={accreditation.name} required maxlength={AccreditationLimits.longestName} /></label>
		<label><span>Registration number</span><input name="registration" value={accreditation.registration} maxlength={AccreditationLimits.longestRegistration} /></label>
		<label><span>Expires <em>(leave blank if it does not)</em></span><input name="expires" type="date" value={accreditation.expires ?? ''} /></label>
		<label><span>Link <em>(optional)</em></span><input name="href" type="url" pattern="https://.*" value={accreditation.href} maxlength={AccreditationLimits.longestLink} /></label>
		<label><span>Order on the site</span><input name="position" type="number" min="0" max="1000" step="1" value={accreditation.position} required /></label>
	</div>
	{#if hasLapsed}<p class="lapsed">Expired: hidden from the site until the date is renewed.</p>{/if}
	{#if error}<p class="error">{error}</p>{/if}
	<div class="actions">
		<button class="btn btn--primary">{isNew ? 'Add accreditation' : 'Save'}</button>
		{#if !isNew}<button class="btn btn--outline" formaction="?/remove" formnovalidate onclick={confirmRemoval}>Remove</button>{/if}
	</div>
</form>

<style>
	.editor { display: grid; grid-template-columns: 9rem 1fr; gap: 1rem 1.4rem; padding: 1.2rem 1.4rem; margin-bottom: 1rem; }
	.fields { display: grid; grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr)); gap: 0.8rem; }
	.wide { grid-column: 1 / -1; }
	label { display: grid; gap: 0.3rem; font-size: 0.86rem; color: var(--ink-600); }
	em { color: var(--ink-400); font-style: normal; }
	input { font: inherit; padding: 0.55rem 0.8rem; border: 1px solid var(--line); border-radius: var(--radius); }
	.lapsed, .error, .actions { grid-column: 1 / -1; margin: 0; }
	.lapsed { color: var(--ink-600); }
	.error { color: var(--warn-ink); }
	.actions { display: flex; gap: 0.6rem; }
	@media (max-width: 640px) { .editor { grid-template-columns: 1fr; } }
</style>
