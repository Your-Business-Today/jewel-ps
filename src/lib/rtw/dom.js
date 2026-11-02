/**
 * @param {string} id
 * @returns {HTMLElement}
 */
export const elementById = (id) => /** @type {HTMLElement} */ (document.getElementById(id));

/**
 * @param {string} id
 * @returns {HTMLInputElement}
 */
export const field = (id) => /** @type {HTMLInputElement} */ (/** @type {unknown} */ (elementById(id)));

/** @param {string} id */
export const hasValue = (id) => field(id).value.trim() !== '';

/** @param {string} id */
export const isTicked = (id) => field(id).checked;

/** @param {string} id */
export const trimmedValue = (id) => field(id).value.trim();

/**
 * @param {string} id
 * @param {boolean} isHidden
 */
export const setHidden = (id, isHidden) => elementById(id).classList.toggle('hidden', isHidden);
