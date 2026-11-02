<script>
	import EnquiryRowHead from './EnquiryRowHead.svelte';
	import EnquiryContactDetails from './EnquiryContactDetails.svelte';
	import EnquiryActions from './EnquiryActions.svelte';

	/** @type {{ enquiry: import('$lib/server/db.js').EnquiryRow, expanded: boolean, isConfirmingDelete: boolean, ontoggle: () => void, onconfirmdelete: () => void, oncanceldelete: () => void }} */
	let { enquiry, expanded, isConfirmingDelete, ontoggle, onconfirmdelete, oncanceldelete } = $props();
</script>

<li id="e-{enquiry.id}" class="card row" class:row--new={enquiry.status === 'new'}>
	<EnquiryRowHead {enquiry} {expanded} {ontoggle} />

	{#if expanded}
		<div class="row__detail">
			<EnquiryContactDetails {enquiry} />
			<EnquiryActions {enquiry} {isConfirmingDelete} {onconfirmdelete} {oncanceldelete} />
		</div>
	{/if}
</li>

<style>
	.row {
		overflow: hidden;
	}

	.row--new {
		border-color: var(--gold-300);
	}

	.row__detail {
		border-top: 1px solid var(--line);
		background: var(--tint);
		padding: 1rem 1.2rem 1.1rem;
	}
</style>
