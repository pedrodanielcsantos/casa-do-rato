# Design Tokens

These are the current brand color tokens. Treat them as the source of truth until Pedro decides on a fuller visual system.

## Brand Colors

| Token           | Value     | Usage                                                            |
| --------------- | --------- | ---------------------------------------------------------------- |
| `--color-gold`  | `#C99853` | Accents, decorative details, star ratings, richer visual moments |
| `--color-ink`   | `#545454` | Primary text                                                     |
| `--color-paper` | `#FDFCF7` | Main page background                                             |

The CSS lives in `src/styles/global.css`.

## Supporting Colors

Supporting colors are derived around the brand palette:

- `--color-gold-dark` is used for buttons and small gold text, because white text on `--color-gold` is too low in contrast.
- `--color-gold-deep` is used for button hover states.
- `--color-on-gold` is used for text on `--color-gold-dark`.
- `--color-muted` is used for secondary text.
- `--color-line` is used for borders.
- `--color-sand` is used for alternating section backgrounds and the footer.
- `--color-whatsapp` and `--color-on-whatsapp` are used only for the floating WhatsApp button.

Do not add a new dominant palette without discussing it with Pedro. The site should stay warm, calm, practical, and aligned with the logo.

## Typography

- Headings currently use a Georgia serif stack.
- Body text uses the system sans-serif stack.
- Letter spacing should stay at `0` except for small uppercase eyebrow labels.

## Layout Tokens

The site uses plain CSS, `clamp()`, max-width constraints, and responsive grids. Keep spacing readable and explicit instead of adding a design framework for the current scope.
