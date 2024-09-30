"use strict";

/**
 * Shares content via email using the mailto protocol.
 *
 * @param {Object} email - The email details.
 * @param {string} [email.subject=''] - The subject of the email.
 * @param {string} [email.body=''] - The body of the email.
 * @param {string} [email.tab='_blank'] - The target for the mailto link (default is '_blank').
 */
export const shareViaEmail = ({
	subject = "",
	body = "",
	tab = "_blank",
} = {}) => {
	try {
		const encodedSubject = encodeURIComponent(subject);
		const encodedBody = encodeURIComponent(body);

		const mailtoLink = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;

		window.open(mailtoLink, tab);
	} catch (error) {
		// Log any errors to the console for debugging
		console.error("Error sharing via email:", error);
	}
};

/**
 * Shares content via facebook .
 *
 * @param {Object} facebook - The facebook details.
 * @param {string} [email.subject=''] - The subject of the email.
 * @param {string} [email.body=''] - The body of the email.
 * @param {string} [email.tab='_blank'] - The target for the mailto link (default is '_blank').
 */
export const shareViaFb = ({
	url = window?.location?.href,
	text = "",
	tab = "_blank",
} = {}) => {
	try {
		const encodedUrl = encodeURIComponent(url);
		const encodedText = encodeURIComponent(text);

		const shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
			encodedUrl
		)}&hashtag=${encodeURIComponent(encodedText)}`;

		window.open(shareLink, tab);
	} catch (error) {
		// Log any errors to the console for debugging
		console.error("Error sharing via fb:", error);
	}
};




/**
 * Shares content via twitter  .
 *
 * @param {Object} - The facebook details.
 * @param {string} [=''] - The subject of the email.
 * @param {string} [email.body=''] - The body of the email.
 * @param {string} [email.tab='_blank'] - The target for the mailto link (default is '_blank').
 */
export const shareViaTwitter = ({
	url = window?.location?.href,
	text = "",
  tab = "_blank",
} = {}) => {
	try {
		const encodedUrl = encodeURIComponent(url);
		const encodedText = encodeURIComponent(text);
    // const encodedHashtags = encodeURIComponent(hashtags);
		const shareLink = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;

		window.open(shareLink, tab);
	} catch (error) {
		// Log any errors to the console for debugging
		console.error("Error sharing via twitter:", error);
	}
};
