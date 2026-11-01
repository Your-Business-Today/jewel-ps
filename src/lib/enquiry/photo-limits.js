const bytesInMegabyte = 1024 * 1024;
const maximumTotalMegabytes = 4;

export const photoLimits = {
	fieldName: 'photos',
	maximumCount: 3,
	maximumTotalMegabytes,
	maximumTotalBytes: maximumTotalMegabytes * bytesInMegabyte,
	acceptedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'],
	longestEdgePixels: 1600,
	jpegQuality: 0.82
};

export const photoProblems = {
	tooMany: `Please attach no more than ${photoLimits.maximumCount} photos.`,
	wrongType: 'Photos must be JPEG, PNG, WebP or HEIC images.',
	tooLarge: `Your photos come to more than ${photoLimits.maximumTotalMegabytes} MB together. Please send fewer or smaller photos.`
};

/** @param {FormDataEntryValue} entry @returns {entry is File} */
export function isChosenPhoto(entry) {
	return entry instanceof File && entry.size > 0;
}
