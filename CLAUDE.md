# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-file marketing landing page for "Pristine Cleaning", a VRBO-turnover / same-day home-cleaning business. Everything — markup, the full CSS design system, and all JavaScript — lives inline in `Pristine Cleaning.html` (~1940 lines). There is no build step, no dependencies, no framework, and no package manager.

## Running / previewing

Open `Pristine Cleaning.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then open http://localhost:8000/Pristine%20Cleaning.html
```

There is nothing to build, lint, or test. The only external runtime dependency is the Google Fonts (Inter) `<link>` in `<head>`, so styling degrades without a network connection.

## Architecture

The document is organized top-to-bottom as: `<style>` design system → semantic page sections → a single `<script>` IIFE.

- **Design system (`:root` CSS variables).** All color, radius, spacing, timing, and layout tokens are defined once at the top of the `<style>` block (violet/purple/pink/teal palette, glassmorphism `--glass-*` tokens, `--maxw`, `--pad-x`). Style changes should go through these variables rather than hardcoded values, since the whole page is built on them.
- **Page sections.** Each major block is a `<section>`/`<header>` with a stable `id` (`home`, `services`, `how`, `about`, `testimonials`, `pricing`, `contact`). The nav links and the IntersectionObserver active-link logic both depend on these ids matching.
- **Behavior (the first `<script>`, one IIFE near the end).** Vanilla JS, no libraries. It wires: nav scroll state, active-nav-link tracking and scroll reveals (via `IntersectionObserver`), animated stat counters driven by `data-count`/`data-suffix` attributes, the booking-form validation, and a subtle mouse-parallax on the hero art. Interactive elements are keyed off `data-*` attributes and ids — keep those in sync when editing markup.
- **Booking form.** `#bookForm` is client-side only: it validates fields (`emailRx`/`phoneRx`) and shows a fake success state. **No submission backend is wired up** — the form does not POST anywhere. Adding real booking requires wiring a submit handler/endpoint.

## Perplexity inline-edit script

There is a second `<script data-pplx-inline-edit>` block at the very end. This is **injected tooling from Perplexity Labs** (the page was generated/edited there), not part of the site. It only activates inside an allowlisted Perplexity/localhost parent iframe and is inert on the live site. It can be removed without affecting the page; don't treat it as application code.

## `design-system/`

A separate, buildable React + TypeScript component library (`@pristine-cleaning/design-system`) that reproduces this page's tokens, components, and behavior 1:1, extracted from `Pristine Cleaning.html`'s CSS/markup/JS almost verbatim (same custom properties, same class names, same keyframes). It exists so `/design-sync` has real compiled components to import into Claude Design — the static HTML page has no build step for that skill to consume otherwise.

- `npm install && npm run dev` (Vite) previews the full page assembled from the components in `src/App.tsx`.
- `npm run build` (tsup) produces the `dist/` library build.
- It is **generated from** the static page, not the other way around — if `Pristine Cleaning.html` changes, `design-system/src/**` needs the equivalent change to stay in sync (tokens in `styles/tokens.css`, global rules in `styles/global.css`, one directory per component under `components/`).
- The static page (`Pristine Cleaning.html` / `index.html`) is unaffected by this and remains the canonical, dependency-free deployable.
