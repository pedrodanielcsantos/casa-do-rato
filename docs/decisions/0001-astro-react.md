# Decision 0001: Astro + React

## Status

Accepted.

## Context

Casa do Rato needs a small, fast, mostly static website for an event venue. Pedro also wants the project to serve as a learning playground for modern web technologies, especially React.

## Decision

Use Astro as the site framework and React for components where it is useful.

## Why

- Astro is a strong fit for static marketing/content sites.
- It keeps the production site lightweight.
- It supports React components without requiring the whole site to become a client-side React app.
- It works well with GitHub Pages.
- It keeps room for learning React in focused, realistic components.

## Consequences

- Pages and routing follow Astro conventions.
- React components should be used intentionally.
- Static content and SEO are straightforward.
- Future agents should not replace this stack without discussing the tradeoff first.
