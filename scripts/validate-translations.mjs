import { createHash } from "node:crypto";
import { content as englishContent, translationMeta as englishMeta } from "../src/content/en.js";
import { defaultLocale, localeOrder, locales } from "../src/content/locales.js";
import { content as sourceContent } from "../src/content/pt.js";

const sourceLocale = "pt";
const eventIcons = new Set(["cake", "gift", "sparkles", "users"]);
const contactTypes = new Set(["whatsapp", "google", "instagram"]);

const targetTranslations = [
  {
    locale: "en",
    content: englishContent,
    meta: englishMeta,
    file: "src/content/en.js",
  },
];

function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }

  if (value && typeof value === "object") {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`)
      .join(",")}}`;
  }

  return JSON.stringify(value);
}

function sourceHash() {
  return createHash("sha256").update(stableStringify(sourceContent)).digest("hex");
}

function describeType(value) {
  if (Array.isArray(value)) {
    return "array";
  }

  return value === null ? "null" : typeof value;
}

function compareShape(source, target, path = "content") {
  const errors = [];
  const sourceType = describeType(source);
  const targetType = describeType(target);

  if (sourceType !== targetType) {
    return [`${path}: expected ${sourceType}, got ${targetType}`];
  }

  if (Array.isArray(source)) {
    if (source.length !== target.length) {
      errors.push(`${path}: expected ${source.length} item(s), got ${target.length}`);
    }

    source.forEach((sourceItem, index) => {
      if (index < target.length) {
        errors.push(...compareShape(sourceItem, target[index], `${path}[${index}]`));
      }
    });

    return errors;
  }

  if (source && typeof source === "object") {
    const sourceKeys = Object.keys(source).sort();
    const targetKeys = Object.keys(target).sort();
    const missingKeys = sourceKeys.filter((key) => !targetKeys.includes(key));
    const extraKeys = targetKeys.filter((key) => !sourceKeys.includes(key));

    missingKeys.forEach((key) => errors.push(`${path}: missing key "${key}"`));
    extraKeys.forEach((key) => errors.push(`${path}: unexpected key "${key}"`));

    sourceKeys.forEach((key) => {
      if (targetKeys.includes(key)) {
        errors.push(...compareShape(source[key], target[key], `${path}.${key}`));
      }
    });
  }

  return errors;
}

function assertObject(value, path, failures) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    failures.push(`${path}: expected object`);
    return false;
  }

  return true;
}

function assertNonEmptyString(value, path, failures) {
  if (typeof value !== "string" || !value.trim()) {
    failures.push(`${path}: expected non-empty string`);
    return false;
  }

  return true;
}

function assertNonEmptyStringArray(value, path, failures) {
  if (!Array.isArray(value) || value.length === 0) {
    failures.push(`${path}: expected a non-empty array`);
    return;
  }

  value.forEach((item, index) => {
    assertNonEmptyString(item, `${path}[${index}]`, failures);
  });
}

function assertKnownValue(value, allowedValues, path, failures) {
  if (!allowedValues.has(value)) {
    failures.push(`${path}: expected one of ${Array.from(allowedValues).join(", ")}`);
  }
}

function assertUrl(value, path, failures) {
  try {
    const url = new URL(value);

    if (!["https:", "http:"].includes(url.protocol)) {
      failures.push(`${path}: expected http or https URL`);
    }
  } catch {
    failures.push(`${path}: expected valid URL`);
  }
}

function validateContentModel(content, locale, failures) {
  const prefix = `${locale}: content`;

  if (!assertObject(content, prefix, failures)) {
    return;
  }

  if (assertObject(content.site, `${prefix}.site`, failures)) {
    ["name", "shortName", "description"].forEach((key) => {
      assertNonEmptyString(content.site[key], `${prefix}.site.${key}`, failures);
    });
  }

  if (assertObject(content.navigation, `${prefix}.navigation`, failures)) {
    ["ariaLabel", "events", "space", "contact"].forEach((key) => {
      assertNonEmptyString(content.navigation[key], `${prefix}.navigation.${key}`, failures);
    });
  }

  if (assertObject(content.languageSwitcher, `${prefix}.languageSwitcher`, failures)) {
    assertNonEmptyString(
      content.languageSwitcher.ariaLabel,
      `${prefix}.languageSwitcher.ariaLabel`,
      failures,
    );
  }

  if (assertObject(content.hero, `${prefix}.hero`, failures)) {
    ["capacity", "body", "cta"].forEach((key) => {
      assertNonEmptyString(content.hero[key], `${prefix}.hero.${key}`, failures);
    });
  }

  if (assertObject(content.events, `${prefix}.events`, failures)) {
    ["eyebrow", "title"].forEach((key) => {
      assertNonEmptyString(content.events[key], `${prefix}.events.${key}`, failures);
    });

    if (!Array.isArray(content.events.items) || content.events.items.length === 0) {
      failures.push(`${prefix}.events.items: expected a non-empty array`);
    } else {
      content.events.items.forEach((item, index) => {
        const itemPath = `${prefix}.events.items[${index}]`;

        if (!assertObject(item, itemPath, failures)) {
          return;
        }

        assertNonEmptyString(item.title, `${itemPath}.title`, failures);
        assertNonEmptyString(item.description, `${itemPath}.description`, failures);
        assertKnownValue(item.icon, eventIcons, `${itemPath}.icon`, failures);
      });
    }
  }

  if (assertObject(content.space, `${prefix}.space`, failures)) {
    ["eyebrow", "title", "ariaLabel"].forEach((key) => {
      assertNonEmptyString(content.space[key], `${prefix}.space.${key}`, failures);
    });
    assertNonEmptyStringArray(content.space.highlights, `${prefix}.space.highlights`, failures);
  }

  if (assertObject(content.contact, `${prefix}.contact`, failures)) {
    ["eyebrow", "title", "body", "linksAriaLabel"].forEach((key) => {
      assertNonEmptyString(content.contact[key], `${prefix}.contact.${key}`, failures);
    });

    if (!Array.isArray(content.contact.links)) {
      failures.push(`${prefix}.contact.links: expected array`);
    } else {
      content.contact.links.forEach((link, index) => {
        const linkPath = `${prefix}.contact.links[${index}]`;

        if (!assertObject(link, linkPath, failures)) {
          return;
        }

        assertKnownValue(link.type, contactTypes, `${linkPath}.type`, failures);
        assertNonEmptyString(link.label, `${linkPath}.label`, failures);
        assertNonEmptyString(link.href, `${linkPath}.href`, failures);

        if (typeof link.href === "string" && link.href.trim()) {
          assertUrl(link.href, `${linkPath}.href`, failures);
        }
      });
    }
  }
}

function validateLocales(failures) {
  if (!locales[defaultLocale]) {
    failures.push(`locales: defaultLocale "${defaultLocale}" is missing from locales`);
  }

  const orderedLocales = new Set(localeOrder);

  Object.keys(locales).forEach((localeCode) => {
    if (!orderedLocales.has(localeCode)) {
      failures.push(`locales: "${localeCode}" is missing from localeOrder`);
    }
  });

  localeOrder.forEach((localeCode) => {
    if (!locales[localeCode]) {
      failures.push(`localeOrder: "${localeCode}" is missing from locales`);
    }
  });

  const seenPaths = new Map();

  Object.entries(locales).forEach(([localeCode, locale]) => {
    const prefix = `locales.${localeCode}`;

    ["code", "htmlLang", "ogLocale", "label", "name", "path"].forEach((key) => {
      if (typeof locale[key] !== "string") {
        failures.push(`${prefix}.${key}: expected string`);
      }
    });

    if (locale.code !== localeCode) {
      failures.push(`${prefix}.code: expected "${localeCode}"`);
    }

    if (typeof locale.path === "string" && locale.path.startsWith("/")) {
      failures.push(`${prefix}.path: should be relative, without a leading slash`);
    }

    if (seenPaths.has(locale.path)) {
      failures.push(`${prefix}.path: duplicates ${seenPaths.get(locale.path)}`);
    }

    seenPaths.set(locale.path, prefix);
  });
}

const expectedHash = sourceHash();

if (process.argv.includes("--print-source-hash")) {
  console.log(expectedHash);
  process.exit(0);
}

const failures = [];

validateLocales(failures);
validateContentModel(sourceContent, sourceLocale, failures);

targetTranslations.forEach(({ locale, content, meta, file }) => {
  validateContentModel(content, locale, failures);

  compareShape(sourceContent, content).forEach((error) => {
    failures.push(`${locale}: ${error}`);
  });

  if (meta?.sourceLocale !== sourceLocale) {
    failures.push(
      `${locale}: ${file} must export translationMeta.sourceLocale = "${sourceLocale}"`,
    );
  }

  if (meta?.sourceHash !== expectedHash) {
    failures.push(
      `${locale}: translation is stale. Expected sourceHash ${expectedHash} in ${file}`,
    );
  }
});

if (failures.length) {
  console.error("Content and translation validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Content model is valid and translations are synced with the Portuguese source.");
