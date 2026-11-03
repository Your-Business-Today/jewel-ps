const replySubject = 'Re: your enquiry to Jewel Property Serve';

/** @param {string} email */
export const replyLink = (email) => `mailto:${email}?subject=${encodeURIComponent(replySubject)}`;
