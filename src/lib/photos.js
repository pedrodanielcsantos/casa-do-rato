import { getImage } from "astro:assets";

// Importing an image from src/ lets Astro generate smaller copies at build time.
// Eager imports only load its metadata here, not the image bytes.
//
// Don't read a property such as `.width` from these imports. Astro treats that as
// using the original file and would publish the full-size image to dist/.
// getImage() already avoids upscaling and drops srcset widths above the original.
const photoModules = import.meta.glob("/src/assets/photos/*.webp", { eager: true });

function resolvePhoto(path) {
  const module = photoModules[`/src/assets/${path}`];

  if (!module) {
    throw new Error(`Photo not found in src/assets: ${path}`);
  }

  return module.default;
}

// Returns <img> attributes with a `srcset`, so the browser downloads the
// smallest file that still looks sharp at the size the photo is displayed.
export async function getResponsivePhoto(path, { widths, sizes }) {
  const image = await getImage({
    src: resolvePhoto(path),
    width: Math.max(...widths),
    widths,
    format: "webp",
    quality: 74,
  });

  return {
    src: image.src,
    srcset: image.srcSet.attribute,
    sizes,
    width: image.attributes.width,
    height: image.attributes.height,
  };
}

// A single large copy, for the lightbox and for structured data.
export async function getLargePhotoUrl(path) {
  const image = await getImage({
    src: resolvePhoto(path),
    width: 1600,
    format: "webp",
    quality: 78,
  });

  return image.src;
}

// Link previews (WhatsApp, Facebook, etc.) expect a 1200x630 JPEG, so an occasion's
// main photo should be at least 1200px wide. Smaller photos aren't upscaled.
export async function getSocialPhotoUrl(path) {
  const image = await getImage({
    src: resolvePhoto(path),
    width: 1200,
    height: 630,
    fit: "cover",
    format: "jpeg",
    quality: 80,
  });

  return image.src;
}

// Pages reference photos by path and reuse the alt text written in the gallery,
// so each description is only translated once.
export function findPhotoAlt(content, path) {
  const photo = content.gallery.images.find((image) => image.src === path);

  if (!photo) {
    throw new Error(`Photo is missing from content.gallery.images: ${path}`);
  }

  return photo.alt;
}
