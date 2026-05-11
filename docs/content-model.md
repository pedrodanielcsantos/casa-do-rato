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
- `location`
- `booking`
- `faq`
- `contact`

## Site SEO

The `site` section owns document metadata and business facts used for JSON-LD
structured data.

Required fields:

- `name`
- `shortName`
- `title`
- `description`
- `business`

The `site.business` object is used for the `LocalBusiness` / `EventVenue`
schema in the document head.

Required `site.business` fields:

- `telephone`
- `priceRange`
- `openingHours`
- `address`
- `geo`
- `areaServed`

`site.business.address` requires `streetAddress`, `addressLocality`,
`addressRegion`, `postalCode`, and `addressCountry`.

`site.business.geo` requires numeric `latitude` and `longitude`.

## Hero

The H1 is split into `hero.title.brand` and `hero.title.qualifier` so the brand
can stay visually prominent while the full heading includes local venue
keywords.

Required fields:

- `title.brand`
- `title.qualifier`
- `capacity`
- `body`
- `cta`

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
- `presentation`
- `briefcase`

These map to icons in `src/components/EventTypes.jsx`.

## Contact Links

`contact.links` may be empty while the contact links are not ready.

When links are added, each link requires:

- `type`
- `label`
- `href`
- `ariaLabel`
- `variant`

Allowed contact types:

- `whatsapp`
- `google`
- `instagram`

These map to icons in `src/components/ContactLinks.jsx`.

Use full `https://` URLs for contact links.

## Location

The `location` section provides the accessible written fallback for the embedded map.

Required fields:

- `eyebrow`
- `title`
- `body`
- `mapTitle`
- `mapSrc`
- `addressLabel`
- `addressLines`
- `directionsLabel`
- `directionsHref`
- `contactsLabel`
- `contacts`

Each `location.contacts` item requires:

- `label`
- `value`
- `href`

## Space

The `space` section introduces the venue evaluation area. The homepage template also renders the gallery and FAQ inside this section so venue evaluation stays in one place.

Required fields:

- `eyebrow`
- `title`
- `body`

## Booking

The `booking` section explains the reservation flow rendered inside the bottom contact section.

Required fields:

- `eyebrow`
- `title`
- `steps`

Each `booking.steps` item requires:

- `title`
- `body`

## FAQ

The `faq` section uses native `<details>` elements inside the merged space section.

Required fields:

- `eyebrow`
- `title`
- `ariaLabel`
- `items`

Each `faq.items` item requires:

- `question`
- `answer`

An FAQ item may include a `link` object with `label` and `href`.
