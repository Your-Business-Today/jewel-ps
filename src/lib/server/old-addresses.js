const htmlEnding = /\.html$/;
const trailingSlash = /\/$/;

/** The previous Webflow site's addresses, and old file names, with the page or file that replaces each. */
const newAddresses = new Map([
	['/index', '/'],
	['/about-us-jewel-property-serve', '/about'],
	['/refurbishment-services', '/refurbishment'],
	['/maintenance-services', '/maintenance'],
	['/fire-and-flood-damage-restoration-services', '/fire-flood-restoration'],
	['/contact-us-jewel-property-serve', '/contact'],
	['/case-studies', '/about'],
	['/images/photos/Ecoligi.jpg', '/images/photos/Ecologi.jpg'],
	['/images/photos/6870d940dea0ec79c9489c62_Tilling-p-800.jpg', '/images/photos/6870d940dea0ec79c9489c62_Tiling-p-800.jpg']
]);

/**
 * The address that now serves an old one, with or without its `.html` ending
 * or a trailing slash, or undefined when the address is not an old one.
 * @param {string} pathname
 */
export function newAddressFor(pathname) {
	const oldAddress = pathname.replace(htmlEnding, '').replace(trailingSlash, '');
	return newAddresses.get(oldAddress);
}
