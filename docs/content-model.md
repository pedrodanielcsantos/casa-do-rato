# Content Model

Portuguese content is the source of truth and lives in:

```text
src/content/pt.js
```

English content lives in:

```text
src/content/en.js
```

English should be regenerated from Portuguese with the repo-local `update-translations` skill, not manually edited by default.

## Validation

Run:

```bash
npm run check-translations
```

This validates:

- Locale metadata in `src/content/locales.js`.
- Required homepage content fields.
- Event icon names.
- Contact link types and URLs.
- Portuguese and English object shape parity.
- English `translationMeta.sourceHash` freshness.

`npm run check` also runs this validation before building.

## Homepage Shape

The homepage content export is named `content`.

Required top-level sections:

- `site`
- `navigation`
- `languageSwitcher`
- `hero`
- `events`
- `space`
- `contact`

## Event Items

Each event item requires:

- `title`
- `description`
- `icon`

Allowed event icons:

- `cake`
- `gift`
- `sparkles`
- `users`

These map to icons in `src/components/EventTypes.jsx`.

## Contact Links

`contact.links` may be empty while the contact links are not ready.

When links are added, each link requires:

- `type`
- `label`
- `href`

Allowed contact types:

- `whatsapp`
- `google`
- `instagram`

These map to icons in `src/components/ContactLinks.jsx`.

Use full `https://` URLs for contact links.
