# STEMCIERGE Commercial Pages (Astro)

Staging implementation for high-intent STEMCIERGE condition and treatment pages.

## Current page
- `/conditions/knee-osteoarthritis/`

The page is intentionally `noindex` while design and QA are in progress.

## Local
```bash
npm install
npm run dev
```

## Cloudflare Workers staging
Connect this project directory to Cloudflare Workers Builds.
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Use the generated workers.dev URL for the design-polish stage.

## Production routing later
Do not route production until approved. When ready, Astro should own the intended commercial namespaces while Webflow keeps serving the rest of STEMCIERGE.

Potential Worker routes:
- `stemcierge.com/conditions/*`
- `stemcierge.com/treatments/*`
- `stemcierge.com/_astro/*`

Before enabling broad namespace routes, audit all existing URLs under those paths so nothing currently served by Webflow is accidentally shadowed.

## Editing model
The Knee OA page is now broken into section-level components in `src/components/knee-oa/`. We can do the final global design pass in staging, then extract shared condition-page primitives for subsequent condition pages.
