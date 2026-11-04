/**
 * What the Google review request says, as HTML and as plain text.
 */
import { contact } from '$lib/site.js';

/**
 * @typedef {Object} ReviewRequest
 * @property {string} name    the client's name, as they would be greeted
 * @property {string} email
 * @property {string} work    what we did for them, in a few words, or ''
 */

/** @param {string} text */
function escapeHtml(text) {
	return text
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

/** @param {string} fullName */
function firstNameOf(fullName) {
	const [firstName] = fullName.trim().split(/\s+/);
	return firstName;
}

/**
 * @param {ReviewRequest} request
 * @param {string} reviewLink
 */
export function reviewRequestHtml(request, reviewLink) {
	const greeting = escapeHtml(firstNameOf(request.name));
	const work = escapeHtml(request.work);
	const thanks = work
		? `Thank you for choosing Jewel Property Serve for ${work}.`
		: 'Thank you for choosing Jewel Property Serve.';
	return `
	<div style="background:#f4f6f9;padding:32px 16px;font-family:-apple-system,'Segoe UI',Arial,sans-serif;">
		<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e8ef;border-radius:14px;overflow:hidden;">
			<div style="background:#0e1420;border-bottom:3px solid #135eaa;padding:18px 26px;">
				<span style="color:#ffffff;font-size:16px;font-weight:600;letter-spacing:0.02em;">Jewel <span style="color:#d8b970;font-weight:400;">Property Serve</span></span>
			</div>
			<div style="padding:26px 26px 30px;color:#131c2a;font-size:15px;line-height:1.6;">
				<p style="margin:0 0 14px;">Hi ${greeting},</p>
				<p style="margin:0 0 14px;">${thanks}</p>
				<p style="margin:0 0 22px;">If you were happy with the work, would you spare a minute to leave us a review on Google? It helps other property owners and managing agents find a contractor they can trust.</p>
				<p style="margin:0 0 24px;">
					<a href="${reviewLink}" style="display:inline-block;background:#135eaa;color:#ffffff;text-decoration:none;font-weight:600;padding:12px 22px;border-radius:999px;">Leave a Google review</a>
				</p>
				<p style="margin:0 0 14px;">If anything was not right, just reply to this email and we will put it right.</p>
				<p style="margin:0;">Thank you,<br />The Jewel Property Serve team<br /><span style="color:#8a94a3;">${contact.phone}</span></p>
			</div>
		</div>
	</div>`;
}

/**
 * @param {ReviewRequest} request
 * @param {string} reviewLink
 */
export function reviewRequestText(request, reviewLink) {
	const thanks = request.work
		? `Thank you for choosing Jewel Property Serve for ${request.work}.`
		: 'Thank you for choosing Jewel Property Serve.';
	return [
		`Hi ${firstNameOf(request.name)},`,
		'',
		thanks,
		'',
		'If you were happy with the work, would you spare a minute to leave us a review on Google? It helps other property owners and managing agents find a contractor they can trust.',
		'',
		`Leave a Google review: ${reviewLink}`,
		'',
		'If anything was not right, just reply to this email and we will put it right.',
		'',
		'Thank you,',
		'The Jewel Property Serve team',
		contact.phone
	].join('\n');
}
