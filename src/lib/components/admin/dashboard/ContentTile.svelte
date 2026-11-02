<script>
	/** @type {{ section: { href: string, title: string, count: number | null, unit: string, blurb: string, icon: string } }} */
	let { section } = $props();
</script>

<a class="card tile" href={section.href}>
	<span class="tile__icon" aria-hidden="true">
		<svg viewBox="0 0 24 24"><path d={section.icon} /></svg>
	</span>
	<span class="tile__body">
		<span class="tile__title">{section.title}</span>
		<span class="tile__count">
			<strong>{section.count === null ? '—' : section.count}</strong>
			{section.unit}
		</span>
		<span class="tile__blurb">{section.blurb}</span>
	</span>
	<span class="tile__arrow" aria-hidden="true">→</span>
</a>

<style>
	.tile {
		display: flex;
		align-items: center;
		gap: 1.1rem;
		padding: 1.25rem 1.4rem;
		text-decoration: none;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
	}

	.tile:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-lift);
	}

	.tile__icon {
		flex-shrink: 0;
		width: 44px;
		height: 44px;
		border-radius: 12px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--tint);
		border: 1px solid var(--line);
	}

	.tile__icon svg {
		width: 22px;
		height: 22px;
		fill: var(--accent-500);
	}

	.tile__body {
		display: grid;
		gap: 0.05rem;
		min-width: 0;
	}

	.tile__title {
		font-family: var(--font-display);
		font-weight: 600;
		color: var(--ink-900);
		font-size: 1.05rem;
	}

	.tile__count {
		color: var(--ink-600);
		font-size: 0.9rem;
	}

	.tile__count strong {
		color: var(--ink-900);
	}

	.tile__blurb {
		color: var(--ink-400);
		font-size: 0.85rem;
	}

	.tile__arrow {
		margin-left: auto;
		color: var(--accent-500);
		font-weight: 600;
	}
</style>
