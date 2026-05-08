# Design Direction

The site should feel like a trustworthy small event venue, not a generic SaaS landing page.

## Desired Feeling

- Warm.
- Personal.
- Calm.
- Practical.
- Celebration-ready.
- Easy to contact.

## Visual Direction

Use the existing brand assets as the foundation:

- Gold logo mark.
- Warm off-white background.
- Restrained accent colors.
- Serif headings where appropriate.
- Clean, readable body text.

The current CSS defines the starting palette in `src/styles/global.css`. The canonical brand tokens are documented in `docs/design-tokens.md`:

- `#C99853` for accents, button backgrounds, and richer visual elements.
- `#545454` for text.
- `#FDFCF7` for general backgrounds.

## Layout Principles

- Make the venue/business name immediately visible.
- Keep the first screen focused on what the business is and who it serves.
- Write user-facing copy in Portuguese by default, while allowing culturally adopted expressions like "baby showers" when they sound natural to the audience.
- Prefer direct sections over decorative cards.
- Keep mobile layouts simple and readable.
- Make contact links obvious.
- Add real venue photos as soon as available.

## Avoid

- Generic startup hero copy.
- Heavy animations.
- Abstract SVG illustrations.
- Decorative gradient blobs.
- Overly playful UI that reduces trust.
- Dense effects that distract from the venue.
- Text embedded in images when HTML text would work better.

## Future Visual Priorities

When real assets are available, prioritize:

- Exterior or entrance photo.
- Main event room photo.
- Example table/setup photo.
- Celebration detail photo.
- Google/Instagram proof points if available.

Photos should make the space easier to evaluate, not just create atmosphere.
