<script>
	/** @type {{ view: string, newCount: number, archivedCount: number }} */
	let { view, newCount, archivedCount } = $props();
</script>

<header class="head">
	<div>
		<h1>Enquiries</h1>
		<p class="head__sub">
			Requests from the contact form. Unread ones are highlighted; opening one marks it read.
		</p>
	</div>

	<nav class="tabs" aria-label="Inbox view">
		<a href="/admin/enquiries" class="tab" class:tab--on={view === 'inbox'} aria-current={view === 'inbox' ? 'page' : undefined}>
			Inbox
			{#if newCount > 0}<span class="tab__badge">{newCount}</span>{/if}
		</a>
		<a href="/admin/enquiries?view=archived" class="tab" class:tab--on={view === 'archived'} aria-current={view === 'archived' ? 'page' : undefined}>
			Archived <span class="tab__count">{archivedCount}</span>
		</a>
	</nav>
</header>

<style>
	.head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 1.4rem;
	}

	.head h1 {
		margin-bottom: 0.1rem;
	}

	.head__sub {
		color: var(--ink-600);
		margin: 0;
		font-size: 0.95rem;
	}

	.tabs {
		display: flex;
		gap: 0.25rem;
		background: var(--tint);
		border: 1px solid var(--line);
		border-radius: 999px;
		padding: 0.25rem;
	}

	.tab {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		border-radius: 999px;
		padding: 0.35rem 1rem;
		font-family: var(--font-display);
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--ink-600);
		text-decoration: none;
	}

	.tab:hover {
		color: var(--ink-900);
	}

	.tab--on {
		background: var(--accent-500);
		color: #fff;
	}

	.tab__badge {
		background: var(--gold-500);
		color: #fff;
		font-size: 0.7rem;
		font-weight: 600;
		border-radius: 999px;
		padding: 0.05rem 0.45rem;
		line-height: 1.5;
	}

	.tab__count {
		font-size: 0.78rem;
		opacity: 0.7;
	}
</style>
