const tagLibraryAddress = 'https://www.googletagmanager.com/gtag/js';

let hasStarted = false;

/** @param {string} measurementId */
function appendTagLibrary(measurementId) {
	const tagScript = document.createElement('script');
	tagScript.async = true;
	tagScript.src = `${tagLibraryAddress}?id=${encodeURIComponent(measurementId)}`;
	document.head.appendChild(tagScript);
}

/** @param {string} measurementId */
export function startGoogleAnalytics(measurementId) {
	if (hasStarted) return;
	hasStarted = true;
	const browserWindow = /** @type {any} */ (window);
	const dataLayer = (browserWindow.dataLayer ??= []);
	browserWindow.gtag = function gtag() {
		dataLayer.push(arguments);
	};
	browserWindow.gtag('js', new Date());
	browserWindow.gtag('config', measurementId);
	appendTagLibrary(measurementId);
}
