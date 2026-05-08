# Localization

Portuguese and English are supported.

## Recommended Strategy

Use Astro's built-in i18n routing with Portuguese as the unprefixed default locale:

```text
/
/en/
```

On GitHub Pages, those become:

```text
/casa-do-rato/
/casa-do-rato/en/
```

The root project URL serves Portuguese directly:

```text
/casa-do-rato/
```

Portuguese should be treated as the primary/default language unless Pedro decides otherwise.

## Copy Language

By default, user-facing copy should be written in Portuguese.

Culturally adopted expressions that are commonly used by the target audience are acceptable in Portuguese copy. For example, "baby showers" can remain in English because it is a familiar event category for the audience.

## Content Structure

Current file structure:

```text
src/content/pt.js
src/content/en.js
src/content/locales.js
src/components/HomePage.astro
src/pages/index.astro
src/pages/en/index.astro
```

The localized content files should export the same object shape so components can stay language-agnostic.

Example:

```js
export const home = {
  title: "Casa do Rato",
  intro: "...",
  contact: {
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },
};
```

`src/content/pt.js` is the source of truth. Other locale files should export:

```js
export const translationMeta = {
  sourceLocale: "pt",
  sourceHash: "...",
};
```

## Component Rules

- Components should receive already-translated strings as props.
- Avoid importing locale files directly inside generic components.
- Keep URLs locale-aware.
- Add `lang` attributes to HTML.
- Add `hreflang` metadata when localization is implemented.

## Translation Quality

Do not mechanically translate important marketing copy. PT and EN can differ if that sounds more natural for each audience.

Do not mechanically translate culturally adopted expressions when they sound more natural in everyday Portuguese.

For unclear copy decisions, ask Pedro before locking wording.

## Translation Skill

Use the repo-local skill at `.agents/skills/update-translations` whenever Portuguese copy changes and English needs to be refreshed.

The workflow is:

1. Edit `src/content/pt.js`.
2. Run or ask an agent to use `update-translations`.
3. The skill updates `src/content/en.js`.
4. The skill updates `translationMeta.sourceHash` using `npm run translation:source-hash`.
5. Validate with `npm run check-translations` and `npm run check`.
