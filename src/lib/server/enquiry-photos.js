import { photoLimits, photoProblems, isChosenPhoto } from '$lib/enquiry/photo-limits.js';

/** @param {File[]} photos */
function totalBytes(photos) {
	return photos.reduce((runningTotal, photo) => runningTotal + photo.size, 0);
}

/** @param {File} photo */
function isAcceptedType(photo) {
	return photoLimits.acceptedTypes.includes(photo.type);
}

/** @param {File[]} photos */
function problemWith(photos) {
	if (photos.length > photoLimits.maximumCount) return photoProblems.tooMany;
	if (!photos.every(isAcceptedType)) return photoProblems.wrongType;
	if (totalBytes(photos) > photoLimits.maximumTotalBytes) return photoProblems.tooLarge;
	return '';
}

/** @param {FormData} formData */
export function readEnquiryPhotos(formData) {
	const photos = formData.getAll(photoLimits.fieldName).filter(isChosenPhoto);
	return { photos, problem: problemWith(photos) };
}

/** @param {File} photo */
async function attachmentFrom(photo) {
	const photoBytes = await photo.arrayBuffer();
	const photoBuffer = Buffer.from(photoBytes);
	const content = photoBuffer.toString('base64');
	return { filename: photo.name, content };
}

/** @param {File[]} photos */
export function photosAsAttachments(photos) {
	return Promise.all(photos.map(attachmentFrom));
}
