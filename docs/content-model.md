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
- Contact link types and URLs.
- Phone references: every `wa.me/`, `tel:`, and `+351` number under `src/` and in the content must match `src/content/contact.js`.
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
- `occasionPages`
- `space`
- `gallery`
- `location`
- `booking`
- `reviews`
- `faq`
- `contact`
- `notFound`

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
- `maximumAttendeeCapacity`: a number, the same in every locale. It feeds the JSON-LD.
- `priceRange`: keep it generic ("€€"). The site does not publish prices.
- `address`
- `geo`
- `areaServed`

Optional `site.business` fields:

- `contactPoints`
- `amenityFeatures`
- `sameAs`

`site.business.address` requires `streetAddress`, `addressLocality`,
`addressRegion`, `postalCode`, and `addressCountry`.

`site.business.geo` requires numeric `latitude` and `longitude`.

## Hero

The H1 is split into `hero.title.brand` and `hero.title.qualifier` so the brand
can stay visually prominent while the full heading includes local venue
keywords.

Required fields:

- `eyebrow`
- `title.brand`
- `title.qualifier`
- `body`
- `cta`
- `ctaHref`
- `facts`: short facts shown as chips, such as capacity and parking. Never prices.
- `photos`: gallery paths. The first is the main photo.

## Event Items

Each event item requires:

- `title`
- `description`
- `photo`: a path to a file in `src/assets/photos/`.

Each event item may include `href` to link to a localized occasion page and
`linkLabel` to override the default card link text.

## Occasion Pages

The `occasionPages` section powers localized, static landing pages for
high-intent search queries such as birthday parties, baby showers, workshops,
and corporate events in Vila Nova de Gaia.

Required fields:

- `breadcrumbAriaLabel`
- `contactLabel`
- `summaryLabel`
- `includedLabel`
- `relatedTitle`
- `items`

Each `occasionPages.items` item requires:

- `key`
- `slug`
- `title`
- `description`
- `breadcrumbLabel`
- `eventType`: filled into the WhatsApp message on this page.
- `photos`: gallery paths shown below the details.
- `hero.eyebrow`
- `hero.title`
- `hero.body`
- `image.src`
- `image.alt`
- `summary`
- `details`

Each detail item requires `title` and `body`.

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
- `phone`
- `google`
- `instagram`

These map to icons in `src/components/ContactLinks.jsx`.

Use full `https://` URLs for web contact links; they open in a new tab. Phone links use
`callHref` from `src/content/contact.js` (`tel:` plus the number) and open the phone app.

`contact.fabLabel` is the visible label of the floating WhatsApp button.

`contact.whatsappMessage` holds the text of the pre-filled WhatsApp message:
`intro`, `date`, `time`, `eventType`, `guests`, and `extras`. Use
`buildAvailabilityHref` from `src/content/contact.js` to turn it into a link.
Never write a phone number or `wa.me` link directly in a locale file.

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

## Gallery

The `gallery` section renders venue photos and feeds structured data image URLs.

Required fields:

- `openLabel`
- `dialogLabel`
- `closeLabel`
- `previousLabel`
- `nextLabel`
- `viewAllLabel`
- `images`

Each gallery image requires:

- `src`: a path to a file in `src/assets/photos/`.
- `alt`

Other sections reuse this alt text when they reference a photo by its path.

## Booking

The `booking` section explains the reservation flow rendered inside the bottom contact section.

Required fields:

- `eyebrow`
- `title`
- `steps`

Each `booking.steps` item requires:

- `title`
- `body`

## Reviews

The `reviews` section shows the Google rating next to the hero button and a block of
review excerpts after the occasions. It requires `eyebrow`, `title`, `rating`,
`ratingLabel` (screen-reader sentence), `sourceLabel`, `summaryLabel`, and `originalLanguageNote`. The review
count is deliberately not shown because it would go stale. Update the rating by hand if
it changes.

Each `reviews.items` item requires:

- `quote`: an excerpt copied from a real Google review
- `author`: the reviewer's name exactly as shown on Google, with nothing else

Quotes stay in Portuguese in every locale file. Translated pages mark them `lang="pt-PT"` and show `originalLanguageNote`, so nobody appears to have written words they didn't. Do not invent or reword reviews beyond fixing obvious typos. Do not add
`aggregateRating` to the JSON-LD: Google ignores self-published ratings for local
businesses.

## FAQ

The `faq` section uses native `<details>` elements inside the merged space section.

Required fields:

- `eyebrow`
- `title`
- `ariaLabel`
- `ctaTitle`
- `ctaBody`
- `ctaLabel`
- `items`

Each `faq.items` item requires:

- `question`
- `answer`

An FAQ item may include a `link` object with `label` and `href`.

An FAQ item may include an `answerItems` array when the answer should render a
short bullet list after the main answer text.

## Not Found

The `notFound` section is the copy for the 404 page.

Required fields:

- `title`
- `description`
- `eyebrow`
- `heading`
- `body`
- `homeLabel`
