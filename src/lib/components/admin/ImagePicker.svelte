<script>
	import PhotoUploadButton from './PhotoUploadButton.svelte';

	/**
	 * Modal image picker for the brochure builder.
	 * Tabs: photos already uploaded through the builder, plus every image the
	 * site ships with (project galleries, team portraits, badges). Also
	 * handles direct-to-storage uploads via signed URLs, so full-resolution
	 * photos are preserved.
	 */
	/** @typedef {{ label: string, images: string[] }} Group */

	/** @type {{ open?: boolean, uploaded?: string[], groups?: Group[], canUpload?: boolean, onpick?: (url: string) => void }} */
	let {
		open = $bindable(false),
		uploaded = $bindable([]),
		groups = [],
		canUpload = false,
		onpick = () => {}
	} = $props();

	let uploadError = $state('');

	/** @param {string} url */
	function pick(url) {
		onpick(url);
		open = false;
	}
</script>

{#if open}
	<div
		class="picker__backdrop"
		role="presentation"
		onclick={(e) => {
			if (e.target === e.currentTarget) open = false;
		}}
	>
		<div class="picker card" role="dialog" aria-modal="true" aria-label="Choose a photo">
			<div class="picker__head">
				<strong>Choose a photo</strong>
				<div class="picker__head-actions">
					{#if canUpload}
						<PhotoUploadButton
							class="picker__upload"
							onuploaded={(publicUrl) => (uploaded = [publicUrl, ...uploaded])}
							onfailed={(message) => (uploadError = message)}
						/>
					{/if}
					<button class="picker__close" onclick={() => (open = false)} aria-label="Close">✕</button>
				</div>
			</div>

			{#if uploadError}
				<p class="picker__error">{uploadError}</p>
			{/if}
			{#if !canUpload}
				<p class="picker__note">
					Connect Supabase to upload new photos — until then you can use any of the site's
					existing images below.
				</p>
			{/if}

			<div class="picker__scroll">
				{#if uploaded.length}
					<h4>Uploaded photos</h4>
					<div class="picker__grid">
						{#each uploaded as url (url)}
							<button class="picker__cell" onclick={() => pick(url)}>
								<img src={url} alt="" loading="lazy" />
							</button>
						{/each}
					</div>
				{/if}

				{#each groups as group (group.label)}
					{#if group.images.length}
						<h4>{group.label}</h4>
						<div class="picker__grid">
							{#each group.images as url (url)}
								<button class="picker__cell" onclick={() => pick(url)}>
									<img src={url} alt="" loading="lazy" />
								</button>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.picker__backdrop {
		position: fixed;
		inset: 0;
		background: rgba(35, 31, 32, 0.45);
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem 1rem;
	}

	.picker {
		width: min(860px, 100%);
		max-height: 86vh;
		display: flex;
		flex-direction: column;
		padding: 1.1rem 1.3rem;
		background: #fff;
	}

	.picker__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.6rem;
	}

	.picker__head-actions {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	.picker__head-actions :global(.picker__upload) {
		font-size: 0.86rem;
		padding: 0.45rem 1.1rem;
	}

	.picker__close {
		font: inherit;
		background: none;
		border: 1px solid var(--line);
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
		color: var(--ink-600);
	}

	.picker__error {
		color: #a33a2a;
		font-size: 0.85rem;
		margin: 0 0 0.5rem;
	}

	.picker__note {
		color: var(--ink-600);
		font-size: 0.88rem;
		margin: 0 0 0.5rem;
	}

	.picker__scroll {
		overflow-y: auto;
		min-height: 0;
	}

	.picker__scroll h4 {
		font-size: 0.82rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--ink-600);
		margin: 1rem 0 0.5rem;
	}

	.picker__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
		gap: 0.5rem;
	}

	.picker__cell {
		padding: 0;
		border: 2px solid transparent;
		border-radius: 8px;
		overflow: hidden;
		cursor: pointer;
		background: var(--tint);
		aspect-ratio: 4 / 3;
	}

	.picker__cell:hover {
		border-color: var(--orange-500);
	}

	.picker__cell img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>
