/**
 * @param {Record<string, unknown>} content
 * @param {string} key
 * @returns {any[]}
 */
export function copyOfList(content, key) {
	const value = content[key];
	return Array.isArray(value) ? [...value] : [];
}

/**
 * @param {Record<string, unknown>} content
 * @param {string} key
 */
export const linesOf = (content, key) => copyOfList(content, key).join('\n');

/** @param {string} value */
export const nonEmptyLines = (value) =>
	value
		.split('\n')
		.map((line) => line.trim())
		.filter(Boolean);

/**
 * @param {Record<string, unknown>} content
 * @param {{ key: string, index?: number, subKey?: string }} target
 * @param {string} url
 */
export function placePickedImage(content, target, url) {
	const { key, index, subKey } = target;
	if (index === undefined) {
		content[key] = url;
		return;
	}
	const list = copyOfList(content, key);
	if (subKey !== undefined) list[index][subKey] = url;
	if (subKey === undefined) list[index] = url;
	content[key] = list;
}
