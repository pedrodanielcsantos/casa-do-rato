export const defaultLocale = "pt";

export const locales = {
  pt: {
    code: "pt",
    htmlLang: "pt-PT",
    ogLocale: "pt_PT",
    label: "PT",
    name: "Português",
    path: "",
    occasionsPath: "eventos",
  },
  en: {
    code: "en",
    htmlLang: "en",
    ogLocale: "en_US",
    label: "EN",
    name: "English",
    path: "en",
    occasionsPath: "en/events",
  },
};

export const localeOrder = ["pt", "en"];

export function getLocalePath(localeCode) {
  const locale = locales[localeCode];

  if (!locale) {
    throw new Error(`Unsupported locale: ${localeCode}`);
  }

  return locale.path ? `${locale.path}/` : "";
}

export function getOccasionPath(localeCode, slug) {
  const locale = locales[localeCode];

  if (!locale) {
    throw new Error(`Unsupported locale: ${localeCode}`);
  }

  return `${locale.occasionsPath}/${slug}/`;
}
