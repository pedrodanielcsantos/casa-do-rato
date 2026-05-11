import { createHash } from "node:crypto";
import { content as englishContent, translationMeta as englishMeta } from "../src/content/en.js";
import { defaultLocale, localeOrder, locales } from "../src/content/locales.js";
import { content as portugueseContent } from "../src/content/pt.js";

const sourceLocale = "pt";
const eventIcons = ["cake", "gift", "sparkles", "users", "presentation", "briefcase"];
const contactTypes = ["whatsapp", "google", "instagram"];
const contactVariants = ["primary", "secondary"];

const requiredContentStrings = {
  site: ["name", "shortName", "title", "description"],
  navigation: ["ariaLabel", "events", "space", "faq", "location", "contact"],
  languageSwitcher: ["ariaLabel"],
  hero: ["capacity", "body", "cta"],
  events: ["eyebrow", "title"],
  space: ["eyebrow", "title", "body"],
  booking: ["eyebrow", "title"],
  faq: ["eyebrow", "title", "ariaLabel"],
  contact: ["eyebrow", "title", "body", "linksAriaLabel"],
  location: [
    "eyebrow",
    "title",
    "body",
    "mapTitle",
    "mapSrc",
    "addressLabel",
    "directionsLabel",
    "directionsHref",
    "contactsLabel",
  ],
};

const targetTranslations = [
  {
    locale: "en",
    content: englishContent,
    meta: englishMeta,
    file: "src/content/en.js",
  },
];

const failures = [];
const fail = (path, message) => failures.push(`${path}: ${message}`);
const isRecord = (value) => Boolean(value) && typeof value === "object" && !Array.isArray(value);

function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }

  if (isRecord(value)) {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`)
      .join(",")}}`;
  }

  return JSON.stringify(value);
}

function shapeOf(value) {
  if (Array.isArray(value)) {
    return value.map(shapeOf);
  }

  if (isRecord(value)) {
    return Object.fromEntries(
      Object.keys(value)
        .map((key) => [key, shapeOf(value[key])])
        .sort(),
    );
  }

  return value === null ? "null" : typeof value;
}

function sourceHash() {
  return createHash("sha256").update(stableStringify(portugueseContent)).digest("hex");
}

function requireObject(value, path) {
  if (!isRecord(value)) {
    fail(path, "expected object");
    return false;
  }

  return true;
}

function requireString(value, path, { allowEmpty = false } = {}) {
  if (typeof value !== "string" || (!allowEmpty && !value.trim())) {
    fail(path, allowEmpty ? "expected string" : "expected non-empty string");
    return false;
  }

  return true;
}

function requireStrings(object, path, keys) {
  keys.forEach((key) => requireString(object[key], `${path}.${key}`));
}

function requireArray(value, path, { allowEmpty = false } = {}) {
  if (!Array.isArray(value) || (!allowEmpty && value.length === 0)) {
    fail(path, allowEmpty ? "expected array" : "expected non-empty array");
    return false;
  }

  return true;
}

function requireOneOf(value, allowedValues, path) {
  if (!allowedValues.includes(value)) {
    fail(path, `expected one of ${allowedValues.join(", ")}`);
  }
}

function requireHttpUrl(value, path) {
  try {
    const url = new URL(value);

    if (!["http:", "https:"].includes(url.protocol)) {
      fail(path, "expected http or https URL");
    }
  } catch {
    fail(path, "expected valid URL");
  }
}

function validateContent(content, locale) {
  const rootPath = `${locale}: content`;

  if (!requireObject(content, rootPath)) {
    return;
  }

  Object.entries(requiredContentStrings).forEach(([section, fields]) => {
    const path = `${rootPath}.${section}`;

    if (requireObject(content[section], path)) {
      requireStrings(content[section], path, fields);
    }
  });

  if (isRecord(content.site)) {
    if (requireObject(content.site.business, `${rootPath}.site.business`)) {
      requireStrings(content.site.business, `${rootPath}.site.business`, [
        "telephone",
        "priceRange",
        "openingHours",
      ]);

      if (requireObject(content.site.business.address, `${rootPath}.site.business.address`)) {
        requireStrings(content.site.business.address, `${rootPath}.site.business.address`, [
          "streetAddress",
          "addressLocality",
          "addressRegion",
          "postalCode",
          "addressCountry",
        ]);
      }

      if (requireObject(content.site.business.geo, `${rootPath}.site.business.geo`)) {
        ["latitude", "longitude"].forEach((key) => {
          if (typeof content.site.business.geo[key] !== "number") {
            fail(`${rootPath}.site.business.geo.${key}`, "expected number");
          }
        });
      }

      if (requireArray(content.site.business.areaServed, `${rootPath}.site.business.areaServed`)) {
        content.site.business.areaServed.forEach((area, index) => {
          requireString(area, `${rootPath}.site.business.areaServed[${index}]`);
        });
      }

      if (content.site.business.sameAs !== undefined) {
        if (requireArray(content.site.business.sameAs, `${rootPath}.site.business.sameAs`)) {
          content.site.business.sameAs.forEach((url, index) => {
            const path = `${rootPath}.site.business.sameAs[${index}]`;

            requireString(url, path);

            if (typeof url === "string" && url.trim()) {
              requireHttpUrl(url, path);
            }
          });
        }
      }
    }
  }

  if (isRecord(content.hero) && requireObject(content.hero.title, `${rootPath}.hero.title`)) {
    requireStrings(content.hero.title, `${rootPath}.hero.title`, ["brand", "qualifier"]);
  }

  if (isRecord(content.events) && requireArray(content.events.items, `${rootPath}.events.items`)) {
    content.events.items.forEach((item, index) => {
      const path = `${rootPath}.events.items[${index}]`;

      if (requireObject(item, path)) {
        requireStrings(item, path, ["title", "description"]);
        requireOneOf(item.icon, eventIcons, `${path}.icon`);
      }
    });
  }

  if (
    isRecord(content.booking) &&
    requireArray(content.booking.steps, `${rootPath}.booking.steps`)
  ) {
    content.booking.steps.forEach((step, index) => {
      const path = `${rootPath}.booking.steps[${index}]`;

      if (requireObject(step, path)) {
        requireStrings(step, path, ["title", "body"]);
      }
    });
  }

  if (isRecord(content.faq) && requireArray(content.faq.items, `${rootPath}.faq.items`)) {
    content.faq.items.forEach((item, index) => {
      const path = `${rootPath}.faq.items[${index}]`;

      if (requireObject(item, path)) {
        requireStrings(item, path, ["question", "answer"]);

        if (item.link !== undefined && requireObject(item.link, `${path}.link`)) {
          requireStrings(item.link, `${path}.link`, ["label", "href"]);

          if (typeof item.link.href === "string" && item.link.href.trim()) {
            requireHttpUrl(item.link.href, `${path}.link.href`);
          }
        }
      }
    });
  }

  if (
    isRecord(content.contact) &&
    requireArray(content.contact.links, `${rootPath}.contact.links`, { allowEmpty: true })
  ) {
    content.contact.links.forEach((link, index) => {
      const path = `${rootPath}.contact.links[${index}]`;

      if (requireObject(link, path)) {
        requireOneOf(link.type, contactTypes, `${path}.type`);
        requireStrings(link, path, ["label", "href", "ariaLabel", "variant"]);
        requireOneOf(link.variant, contactVariants, `${path}.variant`);

        if (typeof link.href === "string" && link.href.trim()) {
          requireHttpUrl(link.href, `${path}.href`);
        }
      }
    });
  }

  if (isRecord(content.location)) {
    if (typeof content.location.mapSrc === "string" && content.location.mapSrc.trim()) {
      requireHttpUrl(content.location.mapSrc, `${rootPath}.location.mapSrc`);
    }

    if (
      typeof content.location.directionsHref === "string" &&
      content.location.directionsHref.trim()
    ) {
      requireHttpUrl(content.location.directionsHref, `${rootPath}.location.directionsHref`);
    }

    if (requireArray(content.location.addressLines, `${rootPath}.location.addressLines`)) {
      content.location.addressLines.forEach((line, index) => {
        requireString(line, `${rootPath}.location.addressLines[${index}]`);
      });
    }

    if (requireArray(content.location.contacts, `${rootPath}.location.contacts`)) {
      content.location.contacts.forEach((contact, index) => {
        const path = `${rootPath}.location.contacts[${index}]`;

        if (requireObject(contact, path)) {
          requireStrings(contact, path, ["label", "value", "href"]);

          if (typeof contact.href === "string" && contact.href.trim()) {
            requireHttpUrl(contact.href, `${path}.href`);
          }
        }
      });
    }
  }
}

function validateLocales() {
  if (!locales[defaultLocale]) {
    fail("locales.defaultLocale", `"${defaultLocale}" is missing from locales`);
  }

  Object.keys(locales)
    .filter((localeCode) => !localeOrder.includes(localeCode))
    .forEach((localeCode) => fail("localeOrder", `missing "${localeCode}"`));

  localeOrder
    .filter((localeCode) => !locales[localeCode])
    .forEach((localeCode) => fail("locales", `missing "${localeCode}"`));

  const paths = new Map();

  Object.entries(locales).forEach(([localeCode, locale]) => {
    const path = `locales.${localeCode}`;

    if (!requireObject(locale, path)) {
      return;
    }

    requireStrings(locale, path, ["code", "htmlLang", "ogLocale", "label", "name"]);
    requireString(locale.path, `${path}.path`, { allowEmpty: true });

    if (locale.code !== localeCode) {
      fail(`${path}.code`, `expected "${localeCode}"`);
    }

    if (typeof locale.path === "string" && locale.path.startsWith("/")) {
      fail(`${path}.path`, "should be relative, without a leading slash");
    }

    if (paths.has(locale.path)) {
      fail(`${path}.path`, `duplicates ${paths.get(locale.path)}`);
    }

    paths.set(locale.path, path);
  });
}

const expectedHash = sourceHash();

if (process.argv.includes("--print-source-hash")) {
  console.log(expectedHash);
  process.exit(0);
}

validateLocales();
validateContent(portugueseContent, sourceLocale);

targetTranslations.forEach(({ locale, content, meta, file }) => {
  validateContent(content, locale);

  if (stableStringify(shapeOf(content)) !== stableStringify(shapeOf(portugueseContent))) {
    fail(`${locale}: content`, "must match the Portuguese content shape");
  }

  if (meta?.sourceLocale !== sourceLocale) {
    fail(`${locale}: ${file}`, `must export sourceLocale = "${sourceLocale}"`);
  }

  if (meta?.sourceHash !== expectedHash) {
    fail(`${locale}: ${file}`, `translation is stale; expected ${expectedHash}`);
  }
});

if (failures.length) {
  console.error("Content and translation validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Content model is valid and translations are synced with the Portuguese source.");
