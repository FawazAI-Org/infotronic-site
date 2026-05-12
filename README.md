# Infotronic Website

## Proposed structure

```text
infotronic-site/
  package.json
  tsconfig.json
  next.config.js
  postcss.config.js
  tailwind.config.ts
  src/
    app/
      globals.css
      layout.tsx
      page.tsx
    components/
      section.tsx
      hero.tsx
      services.tsx
      about.tsx
      why-work-with-us.tsx
      contact.tsx
      footer.tsx
```

## Run locally

```bash
cd infotronic-site
npm install
npm run dev
```

Open `http://localhost:3000`

## Notes
- Contact form is UI-only for now.
- Easy future integrations: Formspree, Resend, HubSpot.
