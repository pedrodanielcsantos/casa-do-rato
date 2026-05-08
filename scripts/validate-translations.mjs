import { createHash } from "node:crypto";
import { content as sourceContent } from "../src/content/pt.js";
import { content as englishContent, translationMeta as englishMeta } from "../src/content/en.js";

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

const expectedHash = sourceHash();

if (process.argv.includes("--print-source-hash")) {
  console.log(expectedHash);
  process.exit(0);
}

const failures = [];

targetTranslations.forEach(({ locale, content, meta, file }) => {
  compareShape(sourceContent, content).forEach((error) => {
    failures.push(`${locale}: ${error}`);
  });

  if (meta?.sourceLocale !== "pt") {
    failures.push(`${locale}: ${file} must export translationMeta.sourceLocale = "pt"`);
  }

  if (meta?.sourceHash !== expectedHash) {
    failures.push(
      `${locale}: translation is stale. Expected sourceHash ${expectedHash} in ${file}`,
    );
  }
});

if (failures.length) {
  console.error("Translation validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Translations are synced with the Portuguese source content.");

