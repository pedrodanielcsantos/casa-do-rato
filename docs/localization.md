# Localization

Portuguese and English are planned.

## Recommended Strategy

Use Astro's built-in i18n routing and keep all URLs language-prefixed:

```text
/pt/
/en/
```

On GitHub Pages, those become:

```text
/casa-do-rato/pt/
/casa-do-rato/en/
```

The root project URL can redirect to Portuguese:

```text
/casa-do-rato/ -> /casa-do-rato/pt/
```

Portuguese should be treated as the primary/default language unless Pedro decides otherwise.

## Content Structure

Recommended future file structure:

```text
src/content/pt.js
src/content/en.js
src/lib/i18n.js
src/pages/[locale]/index.astro
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

## Component Rules

- Components should receive already-translated strings as props.
- Avoid importing locale files directly inside generic components.
- Keep URLs locale-aware.
- Add `lang` attributes to HTML.
- Add `hreflang` metadata when localization is implemented.

## Translation Quality

Do not mechanically translate important marketing copy. PT and EN can differ if that sounds more natural for each audience.

For unclear copy decisions, ask Pedro before locking wording.

