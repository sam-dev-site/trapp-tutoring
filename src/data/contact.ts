export const contactEmail = 'trapptutoring@gmail.com';
export const contactPhone = '+16517600402';

export const emailSubject = 'Interested in tutoring with Erin Trapp';

export const inquiryMessage =
	"Hi Erin, I'm interested in learning more about tutoring with you. Could we set up a time for a call? Thank you!";

export const emailBody = inquiryMessage;
export const textBody = inquiryMessage;

export function mailtoHref(
	email = contactEmail,
	subject = emailSubject,
	body = emailBody,
) {
	return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function smsHref(phone = contactPhone, body = textBody) {
	return `sms:${phone}?body=${encodeURIComponent(body)}`;
}
