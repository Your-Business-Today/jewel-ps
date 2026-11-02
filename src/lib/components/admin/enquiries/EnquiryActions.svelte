<script>
	import { enhance } from '$app/forms';
	import { replyLink } from '$lib/enquiry/reply-link.js';

	/** @type {{ enquiry: import('$lib/server/db.js').EnquiryRow, isConfirmingDelete: boolean, onconfirmdelete: () => void, oncanceldelete: () => void }} */
	let { enquiry, isConfirmingDelete, onconfirmdelete, oncanceldelete } = $props();
</script>

<div class="actions">
	<a href={replyLink(enquiry.email)} class="btn btn--primary btn--sm">Reply by email</a>

	{#if enquiry.status === 'archived'}
		<form method="POST" action="?/restore" use:enhance>
			<input type="hidden" name="id" value={enquiry.id} />
			<button class="btn btn--outline btn--sm">Restore to inbox</button>
		</form>
	{:else}
		{#if enquiry.status === 'new'}
			<form method="POST" action="?/markRead" use:enhance>
				<input type="hidden" name="id" value={enquiry.id} />
				<button class="btn btn--outline btn--sm">Mark read</button>
			</form>
		{:else}
			<form method="POST" action="?/markUnread" use:enhance>
				<input type="hidden" name="id" value={enquiry.id} />
				<button class="btn btn--outline btn--sm">Mark unread</button>
			</form>
		{/if}
		<form method="POST" action="?/archive" use:enhance>
			<input type="hidden" name="id" value={enquiry.id} />
			<button class="btn btn--outline btn--sm">Archive</button>
		</form>
	{/if}

	<span class="actions__spacer"></span>
	{#if isConfirmingDelete}
		<form method="POST" action="?/remove" use:enhance={() => { oncanceldelete(); return async ({ update }) => update(); }}>
			<input type="hidden" name="id" value={enquiry.id} />
			<span class="danger-note">Delete permanently?</span>
			<button class="linkish linkish--danger">Yes, delete</button>
		</form>
		<button type="button" class="linkish" onclick={oncanceldelete}>Cancel</button>
	{:else}
		<button type="button" class="linkish linkish--danger" onclick={onconfirmdelete}>Delete</button>
	{/if}
</div>

<style>
	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.6rem;
		margin-top: 1rem;
	}

	.actions__spacer {
		margin-left: auto;
	}

	.btn--sm {
		padding: 0.4rem 1rem;
		font-size: 0.84rem;
	}

	.danger-note {
		color: #a33a2a;
		font-size: 0.82rem;
		margin-right: 0.4rem;
	}

	.linkish {
		font: inherit;
		font-size: 0.86rem;
		background: none;
		border: 0;
		padding: 0.2rem 0.1rem;
		cursor: pointer;
		color: var(--ink-600);
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-thickness: 1px;
	}

	.linkish:hover {
		color: var(--ink-900);
	}

	.linkish--danger {
		color: #a33a2a;
	}
</style>
