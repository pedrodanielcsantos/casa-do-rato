import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defaultLocale, localeOrder } from "./src/content/locales.js";

const site = process.env.SITE_URL ?? "http://localhost:4321";

const normalizeBase = (value) => {
  if (!value || value === "/") {
    return "/";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;

  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
};

const base = normalizeBase(process.env.SITE_BASE_PATH);

export default defineConfig({
  site,
  base,
  output: "static",
  i18n: {
    locales: localeOrder,
    defaultLocale,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [react(), sitemap()],
});
