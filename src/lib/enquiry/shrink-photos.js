import { photoLimits, isChosenPhoto } from './photo-limits.js';

const jpegType = 'image/jpeg';

/** @param {string} fileName */
function renamedAsJpeg(fileName) {
	const baseName = fileName.replace(/\.[^.]+$/, '');
	return `${baseName}.jpg`;
}

/** @param {File} photo */
async function shrinkPhoto(photo) {
	try {
		const picture = await createImageBitmap(photo);
		const longestEdge = Math.max(picture.width, picture.height);
		const scale = Math.min(1, photoLimits.longestEdgePixels / longestEdge);
		const canvas = new OffscreenCanvas(Math.round(picture.width * scale), Math.round(picture.height * scale));
		const drawing = /** @type {OffscreenCanvasRenderingContext2D} */ (canvas.getContext('2d'));
		drawing.drawImage(picture, 0, 0, canvas.width, canvas.height);
		const shrunk = await canvas.convertToBlob({ type: jpegType, quality: photoLimits.jpegQuality });
		return new File([shrunk], renamedAsJpeg(photo.name), { type: jpegType });
	} catch {
		return photo;
	}
}

/** @param {FormData} formData */
export async function shrinkPhotosIn(formData) {
	const chosenPhotos = formData.getAll(photoLimits.fieldName).filter(isChosenPhoto);
	formData.delete(photoLimits.fieldName);
	const shrunkPhotos = await Promise.all(chosenPhotos.map(shrinkPhoto));
	shrunkPhotos.forEach((photo) => formData.append(photoLimits.fieldName, photo));
}
