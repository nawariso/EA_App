# Enterprise Architecture Blueprint (Insurance)

This repository contains a lightweight, static blueprint dashboard for an insurance enterprise architecture (EA) program. It centralizes views for Business, Application, Data, and Infrastructure architecture so teams can see the same enterprise picture in one place.

## What you get

- **Single-page dashboard** with four architecture views and a journey map
- **Capability-centric navigation** with focus areas and platform capabilities
- **Responsive layout** for desktop and tablet

## How to run

This is a static site. You can open `index.html` directly in your browser or serve it locally:

```bash
python -m http.server 8000
```

Then visit `http://127.0.0.1:8000`.

## Files

- `index.html` — main layout
- `styles.css` — UI styling
- `app.js` — data, rendering, and tab interactions

## Customization

Update the `views` data in `app.js` to change:

- Focus areas
- Cards, owners, and maturity labels
- Labels for core/differentiator/supporting capabilities

You can also edit the `platformCapabilities` list to reflect the EA capabilities you want to highlight.
