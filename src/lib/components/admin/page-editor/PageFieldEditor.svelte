<script>
	import ImageField from './ImageField.svelte';
	import ImageGrid from './ImageGrid.svelte';
	import GroupListField from './GroupListField.svelte';
	import { linesOf, nonEmptyLines } from '$lib/brochure/page-content.js';

	const listRows = 5;
	const textareaRows = 6;

	/** @type {{ content: Record<string, unknown>, field: import('$lib/brochure/templates.js').Field, onchoose: (key: string, index?: number, subKey?: string) => void }} */
	let { content = $bindable(), field, onchoose } = $props();
	const inputId = $derived(`f-${field.key}`);
</script>

<div class="field">
	{#if field.type === 'text'}
		<label for={inputId}>{field.label}</label>
		<input id={inputId} type="text" placeholder={field.placeholder ?? ''} bind:value={content[field.key]} />
	{:else if field.type === 'textarea'}
		<label for={inputId}>{field.label}</label>
		<textarea
			id={inputId}
			rows={field.rows ?? textareaRows}
			placeholder={field.placeholder ?? ''}
			bind:value={content[field.key]}
		></textarea>
	{:else if field.type === 'list'}
		<label for={inputId}>{field.label}</label>
		<textarea
			id={inputId}
			rows={listRows}
			value={linesOf(content, field.key)}
			oninput={(e) => (content[field.key] = nonEmptyLines(e.currentTarget.value))}
		></textarea>
	{:else if field.type === 'image'}
		<span class="field__label">{field.label}</span>
		<ImageField
			url={content[field.key]}
			onchoose={() => onchoose(field.key)}
			onremove={() => (content[field.key] = '')}
		/>
	{:else if field.type === 'images'}
		<span class="field__label">{field.label} <em>(up to {field.max})</em></span>
		<ImageGrid bind:content key={field.key} max={field.max} onchoose={(index) => onchoose(field.key, index)} />
	{:else if field.type === 'group-list'}
		<span class="field__label">{field.label}</span>
		<GroupListField bind:content {field} onchoose={(index, subKey) => onchoose(field.key, index, subKey)} />
	{/if}
	{#if 'hint' in field && field.hint}
		<p class="field__hint">{field.hint}</p>
	{/if}
</div>

<style>
	.field {
		display: grid;
		gap: 0.35rem;
	}

	.field label,
	.field__label {
		font-size: 0.92rem;
		font-weight: 600;
	}

	.field__label em {
		font-style: normal;
		font-weight: 400;
		color: var(--ink-400);
	}

	.field input[type='text'],
	.field textarea {
		font: inherit;
		font-weight: 400;
		padding: 0.6rem 0.8rem;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		width: 100%;
	}

	.field textarea {
		line-height: 1.55;
	}

	.field input:focus,
	.field textarea:focus {
		outline: 2px solid var(--accent-500);
		outline-offset: 1px;
	}

	.field__hint {
		color: var(--ink-400);
		font-size: 0.82rem;
		margin: 0;
	}
</style>
