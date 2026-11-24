<script>
	/** @type {{ url: string }} */
	let { url } = $props();

	const copiedNoticeMilliseconds = 1600;
	let isCopied = $state(false);

	async function copyUrl() {
		try {
			await navigator.clipboard.writeText(url);
			isCopied = true;
			setTimeout(() => (isCopied = false), copiedNoticeMilliseconds);
		} catch {
			isCopied = false;
		}
	}
</script>

<button class="linkish" type="button" onclick={copyUrl}>{isCopied ? 'Copied ✓' : 'Copy URL'}</button>
