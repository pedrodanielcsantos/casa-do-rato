# Project Brief

Casa do Rato Eventos is a small private event venue for gatherings of up to 50 people.

## Goals

- Present the venue clearly and professionally.
- Help visitors understand what kinds of events fit the space.
- Make contacting the business easy through WhatsApp, Google, and Instagram.
- Build a maintainable site that can evolve gradually.
- Keep the codebase useful as a learning playground for Astro, React, and modern frontend development.

## Audience

Primary visitors are people planning intimate private events, including:

- Kids' birthdays.
- Adult birthdays.
- Baby showers.
- Surprise parties.
- Friends' gatherings.
- Small family celebrations.

They are likely evaluating trust, space, convenience, atmosphere, and how easy it is to ask questions or book.

## Product Positioning

Casa do Rato should feel warm, personal, practical, and event-ready. It should not feel like a large corporate venue or a generic event marketplace.

The site should answer:

- What kind of events can I host here?
- How many people fit?
- What does the space look and feel like?
- Is this appropriate for my celebration?
- How do I contact the owner quickly?

## Current Contact Direction

Keep contact simple:

- WhatsApp.
- Google link, likely Google Maps or Google Business Profile.
- Instagram.

No contact form, booking system, CMS, or backend is planned right now.

## Content Decisions

- Don't show prices anywhere on the site, including meta descriptions. Asking about price
  is a reason to start a WhatsApp conversation. `site.business.priceRange` stays a generic
  "€€" for structured data.
- WhatsApp buttons use short labels: "Reservar" for booking actions and "Perguntar" for
  questions.
- The reply-time promise is "Respondemos normalmente em uma hora." Change it everywhere if
  that stops being true.
- Google reviews are curated by hand: a few excerpts, attributed by the reviewer's name
  only, plus the average rating. The review count is not shown because it would go stale.
  Syncing reviews automatically was considered and rejected: the Google Places API needs
  billing and returns at most five reviews chosen by Google.

## Learning Direction

This is a real business site, but changes should also help Pedro learn:

- Astro page structure and static rendering.
- React components used inside Astro.
- CSS and responsive layout.
- GitHub Pages deployment.
- Basic SEO and localization.

When possible, prefer clear, teachable implementation patterns over clever abstractions.
