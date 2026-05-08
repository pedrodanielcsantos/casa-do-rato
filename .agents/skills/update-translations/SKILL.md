---
name: update-translations
description: Regenerate Casa do Rato website translations from the latest Portuguese source content. Use when Pedro changes Portuguese copy in src/content/pt.js, asks to update English or future supported languages, asks to sync translations, or wants non-Portuguese locale files refreshed without manually editing translations.
---

# Update Translations

## Workflow

1. Treat `src/content/pt.js` as the only source of truth.
2. Update every non-Portuguese content file, currently `src/content/en.js`, so it matches the object shape in `src/content/pt.js`.
3. Translate strings naturally for the target language. Do not translate code keys, icon names, URLs, or structural values.
4. Preserve culturally adopted expressions when they are intentionally used in Portuguese. For example, keep "baby showers" as a concept and translate surrounding copy naturally.
5. Run:

```bash
npm run translation:source-hash
```

6. Copy the resulting hash into each target file's `translationMeta.sourceHash`.
7. Run:

```bash
npm run check-translations
npm run check
```

8. If validation fails, fix the target locale shape or stale hash before finishing.

## Rules

- Do not edit Portuguese copy unless Pedro asks for Portuguese copy changes.
- Keep code artifacts English-named.
- Keep translated files deterministic: same object shape, same arrays, same non-copy metadata.
- If a Portuguese phrase has no obvious natural translation, choose clear plain English and mention the uncertainty.
- For future languages, add a new `src/content/<locale>.js` with the same `content` export and a `translationMeta` export, then include it in `scripts/validate-translations.mjs`.

