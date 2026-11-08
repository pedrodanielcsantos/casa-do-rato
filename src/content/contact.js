// The one place the business phone number lives. Every telephone field and
// WhatsApp link in the locale files is derived from it, and
// `npm run check-translations` fails if a different number appears under src/.
export const phone = {
  e164: "+351912692140",
  display: "+351 912 692 140",
  whatsapp: "351912692140",
};

export const callHref = `tel:${phone.e164}`;

// Pre-filling the message means the visitor only has to fill in the blanks,
// and the owner receives every detail needed to answer in a single message.
export function buildAvailabilityHref(message, eventType = "") {
  const text = [
    message.intro,
    `${message.date}: `,
    `${message.time}: `,
    `${message.eventType}: ${eventType}`,
    `${message.guests}: `,
    `${message.extras}: `,
  ].join("\n");

  return `https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(text)}`;
}
