# Spec

This document summarizes the current landing page implementation in `index.html`, including structure, behaviors, and key UI components, plus the intended experience and tradeoffs.

## Purpose
- Present a brand consulting portfolio for Nakyum Song.
- Drive primary actions: Contact, Request Resume (email), LinkedIn.
- Showcase experience, portfolio projects, and services.
- Proof-first emphasis: surface credibility primarily in `#experience`.
- Balanced priority between clarity and distinctiveness.

## Page Structure
- `header`: sticky nav with brand name, section links, and a CTA.
- `main`:
  - `#home`: hero marquee, headline, summary, CTAs, portrait.
  - `#about`: profile card with stats and focus areas.
  - `#experience`: accordion list of roles and details.
  - `#gallery`: horizontal carousel of project cards with expandable details.
  - `#services`: service cards.
  - `#contact`: contact call-to-action.
- `footer`: copyright, social links, and tagline.
 
## Intent and Tradeoffs
- Proof should land in `#experience` for skeptical executive skimmers.
- Case studies should lead with results, then strategy, then execution.
- Engagement should use medium friction (short form or booking link if added).
- Marquee should stay bold to carry energy and attention.
- Guard against “too much detail; no quick takeaway” as the top misinterpretation risk.
- Quantified metrics are the most fragile claims; hedge or contextualize as needed.
- To reduce scroll fatigue, remove the Tools & Technology block first.
- Mobile CTA emphasis should be a single primary Contact action.

## SEO and Metadata
- Title: “Brand Consulting — Nakyum Song”.
- Meta description includes “brand consulting”.
- Canonical URL: `https://nakyumsong.com`.
- Open Graph + Twitter card tags with shared image and alt text.
- JSON-LD `Person` schema with name, URL, image, job title, email, and LinkedIn.

## Navigation
- Anchor links to section IDs.
- Mobile nav toggle button reveals vertical menu.
- Mobile nav closes when a section link is clicked.

## Hero CTAs
- Primary: Contact (scrolls to `#contact`).
- Secondary: Request Resume (mailto with subject).
- Icon: LinkedIn (opens in new tab).
- CTA buttons share uniform min-height (`52.22px`) and typography.

## Components
- Marquee: continuous text loop with duplicate group; disabled on reduced motion.
- Stats: 3-up stat grid inside About with a metrics disclaimer.
- Experience: accordion with exclusive open panel behavior.
- Portfolio carousel: horizontal scroll with prev/next controls placed below the track and outcomes disclaimer.
- Project cards: expandable details with chevron rotate; results lead each case.
- Cards: reusable white cards for services and content.

## Accessibility
- Reduced motion support for marquee via `prefers-reduced-motion`.
- Accordion and toggles use buttons; project toggles set `aria-expanded`.
- External links open in new tabs with `rel="noopener noreferrer"`.

## Responsive Behavior
- At `max-width: 720px`:
  - Main nav collapses behind a Menu button.
  - CTA buttons stack full-width; secondary CTAs are hidden for a single primary action.
  - Carousel controls center below the track.
  - Header becomes static to avoid layout issues.

## External Dependencies
- Google Fonts: Space Grotesk.
- Hero image via Unsplash URL.
```
