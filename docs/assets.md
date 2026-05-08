# Assets

## Current Structure

- `public/brand/`: web-facing brand assets used by the site.
- `public/social/`: social profile screenshots or other social assets.
- `public/favicon.ico`: browser favicon.

Files in `public/` are served as-is by Astro.

## Git LFS

Binary media files are tracked with Git LFS through `.gitattributes`:

- PNG
- JPG/JPEG
- WebP
- GIF
- ICO
- PDF

SVG files stay in normal Git because they are text-based and useful to review.

## Naming

Use descriptive, lowercase filenames with hyphens:

```text
main-room-birthday-setup.jpg
entrance-daylight.jpg
kids-party-table.jpg
```

Avoid generic names like `image1.jpg` or `photo-final-final.jpg`.

## Photos Later

When venue photos are available, prioritize:

- Main room overview.
- Table/setup example.
- Entrance or exterior.
- Celebration/detail shot.

Photos should help visitors evaluate the actual space. Avoid purely atmospheric images when a practical venue photo would be more useful.

## Future Optimization

The current site can reference static images from `public/`. If the photo set grows, consider moving optimized image handling into Astro image tooling before adding many large assets.
