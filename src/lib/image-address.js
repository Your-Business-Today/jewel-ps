/** The longest image address a table on this site keeps. */
export const longestImageAddress = 500;

const sitePathOrSecureAddress = /^(\/|https:\/\/)\S+$/;

/** Whether an address is one of the site's own images or an https:// one. @param {string} address */
export const isImageAddress = (address) => sitePathOrSecureAddress.test(address);
