# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page portfolio site for Nakyum Song, a brand consulting strategist. The site is a static HTML page with embedded CSS and JavaScript—no build tools or package managers are required.

## Deployment

- **Host**: Cloudflare Pages via `wrangler.toml`
- **Domain**: nakyumsong.com (configured in CNAME)
- **Deploy**: Push to `main` branch triggers Cloudflare Pages deployment
- **Local preview**: Open `index.html` directly in a browser

## Architecture

### Single-file structure
- `index.html` — The entire site: HTML structure, `<style>` block (CSS), and `<script>` block (JS)
- No external CSS or JS files are loaded (except Google Fonts)

### Key UI components (all inline in index.html)
- **Marquee** (`.hero-marquee`): CSS keyframe animation with duplicate content for seamless loop; respects `prefers-reduced-motion`
- **Experience accordion** (`.experience-accordion`): Exclusive-open pattern via `data-target` attributes and JS toggling
- **Portfolio carousel** (`.carousel`): Horizontal scroll with snap, prev/next button controls
- **Project cards** (`.project-card`): Expandable details with chevron rotation; `aria-expanded` managed by JS

### Mobile behavior (≤720px)
- Nav collapses behind Menu toggle
- Hero CTAs stack; secondary actions hidden
- Header becomes `position: static`

## Spec reference

`spec.md` contains the canonical design intent and tradeoffs:
- Proof should land in #experience for skeptical executive skimmers
- Case studies lead with results → strategy → execution
- Marquee should stay bold; avoid "too much detail, no quick takeaway"
- Quantified metrics are fragile claims—hedge or contextualize

## Editing guidelines

- All styles are in the `<style>` block; search by class name
- All scripts are in the `<script>` block at bottom of body
- CSS custom properties defined in `:root` (e.g., `--accent`, `--bg`, `--text-muted`)
- `i18n.js` exists but is not currently used by `index.html`
