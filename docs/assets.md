# Assets

## Current Structure

- `public/brand/`: web-facing brand assets used by the site.
- `public/icons/`: icons used as CSS masks.
- `public/social/`: social profile screenshots or other social assets.
- `public/favicon.ico`: browser favicon, with 32px and 48px versions.
- `public/apple-touch-icon.png`: icon used when the site is saved to an iPhone home screen.
- `src/assets/photos/`: venue photos.

Files in `public/` are served as-is by Astro. Files in `src/assets/` are processed at build time, and the originals are not published.

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

## Photos

Photos should help visitors evaluate the actual space. Avoid purely atmospheric images when a practical venue photo would be more useful.

To add a photo:

1. Put a WebP file in `src/assets/photos/`. It can be large, because Astro generates the smaller versions, but around 2400px wide is plenty. Strip metadata first: phone photos contain the GPS location where they were taken. With ImageMagick:

   ```bash
   magick original.jpg -auto-orient -resize 2400x -strip -quality 80 src/assets/photos/casa-do-rato-exemplo.webp
   ```

   Add `-crop WIDTHxHEIGHT+X+Y +repage` before `-resize` to cut out tilted ceilings or foreground clutter from wide-angle shots. Don't commit the original camera files.

2. Add it to `gallery.images` in `src/content/pt.js` with its alt text, then sync English.
3. Reference it from other sections by the same path, for example `photos/casa-do-rato-exemplo.webp`. Those sections reuse the alt text from the gallery.

Photos may show children's names on cake toppers, signs, or letterboards. Pedro has confirmed the current ones are fine to publish; check with him for new ones.

The order of `gallery.images` matters: on desktop, the first five photos form the homepage mosaic. The rest open in the lightbox.

Because photos are in `src/assets/`, `src/lib/photos.js` generates a `srcset` for each one, so browsers download the smallest file that looks sharp at the displayed size. Image dimensions come from the files, so they aren't repeated in the content.
