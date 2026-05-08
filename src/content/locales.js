export const defaultLocale = "pt";

export const locales = {
  pt: {
    code: "pt",
    htmlLang: "pt-PT",
    ogLocale: "pt_PT",
    label: "PT",
    name: "Português",
    path: "",
  },
  en: {
    code: "en",
    htmlLang: "en",
    ogLocale: "en_US",
    label: "EN",
    name: "English",
    path: "en",
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
