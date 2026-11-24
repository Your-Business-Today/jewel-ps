const mediaApi = '/admin/api/media';
const anyFileType = 'application/octet-stream';
const longestErrorShown = 200;

/**
 * Sends one photo straight to Supabase Storage through a signed upload address, at full resolution.
 * @param {File} file
 * @returns {Promise<string>} the photo's public address
 */
export async function uploadPhoto(file) {
	const signing = await fetch(mediaApi, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ filename: file.name })
	});
	if (!signing.ok) throw new Error((await signing.text()).slice(0, longestErrorShown));
	const { uploadUrl, publicUrl } = await signing.json();
	const upload = await fetch(uploadUrl, { method: 'PUT', headers: { 'Content-Type': file.type || anyFileType }, body: file });
	if (!upload.ok) throw new Error(`Upload failed (${upload.status})`);
	return publicUrl;
}
