<script>
	import { enhance } from '$app/forms';
</script>

<form class="card create" method="POST" action="?/create" use:enhance>
	<label>
		Title
		<input name="title" placeholder="2026 Brochure" required />
	</label>
	<fieldset>
		<legend>Start from</legend>
		<label class="create__radio">
			<input type="radio" name="seed" value="template" checked />
			<span>
				<strong>The Jewel PS layout</strong> — cover, who we are, services, gallery,
				case studies, process, testimonials and back cover, all prefilled from the
				site's own copy and fully editable.
			</span>
		</label>
		<label class="create__radio">
			<input type="radio" name="seed" value="blank" />
			<span><strong>Blank</strong> — add pages one by one.</span>
		</label>
	</fieldset>
	<div>
		<button class="btn btn--primary" type="submit">Create brochure</button>
	</div>
</form>

<style>
	.create { display: grid; gap: 1.1rem; padding: 1.6rem; max-width: 52rem; margin-bottom: 1.6rem; }
	.create label { display: grid; gap: 0.3rem; font-size: 0.92rem; font-weight: 600; }
	.create input[name='title'] { font: inherit; font-weight: 400; padding: 0.65rem 0.85rem; border: 1px solid var(--line); border-radius: var(--radius); max-width: 24rem; }
	.create fieldset { border: 1px solid var(--line); border-radius: var(--radius); display: grid; gap: 0.7rem; padding: 0.9rem 1rem; }
	.create legend { font-size: 0.85rem; font-weight: 600; padding-inline: 0.4rem; }
	.create__radio { display: grid; grid-template-columns: auto 1fr; gap: 0.6rem; font-weight: 400; align-items: start; }
	.create__radio span { font-size: 0.9rem; color: var(--ink-600); }
</style>
