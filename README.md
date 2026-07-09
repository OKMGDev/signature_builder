# OKMG Signature Generator (Unified Monorepo)

All client email signature generators in one app. One deploy serves every client.

## Live routes

| Client | URL |
|--------|-----|
| Aquatic Life Industries | `/ali` |
| Pure Leasing | `/pureleasing` |
| Helm Road | `/helmroad` |
| Globe Metals & Mining | `/gmm` |
| OKMG | `/okmg` |
| Beyond Traffic Management | `/beyondtraffic` |
| SpotOn Group | `/spoton` |
| New Me | `/newme` |
| Hair Supplies | `/hairsupplies` |

Index page listing all clients: `/`

Versioned routes (e.g. `/pureleasing/v1`) are also supported.

## Project structure

```
src/clients/{slug}/v1/     # Each client's isolated code
assets/signatures/clients/ # Signature images (synced to S3)
src/shared/                # Shared InstallationModal + asset URL helper
```

## Local development

```bash
npm install
npm start
```

Signature images are copied from `assets/signatures/clients/` to `public/clients/` automatically via `prestart` / `prebuild`.

## Environment variables

| Variable | Description |
|----------|-------------|
| `REACT_APP_SIGNATURE_CDN` | CDN base URL for signature images in production (e.g. `https://cdn.example.com/signatures`) |

Without this variable, images are served from `/clients/...` on the same domain.

## S3 asset deployment

Signature images in `assets/signatures/` are synced to S3 on push to `main` via GitHub Actions.

**Required GitHub secrets:**

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_BUCKET`
- `AWS_REGION`

S3 path: `s3://{bucket}/signatures/clients/{slug}/v1/...`

Set `REACT_APP_SIGNATURE_CDN` in Vercel to your CDN URL pointing at the `signatures/` prefix.

## Vercel deployment

1. Connect this repo to Vercel
2. Production branch: `main`
3. Build command: `npm run build`
4. Output directory: `build`
5. Set `REACT_APP_SIGNATURE_CDN` in Vercel environment variables

`vercel.json` handles SPA routing for all client paths.

## Adding a new client

1. Copy an existing client folder: `src/clients/helmroad/v1/` → `src/clients/{new-slug}/v1/`
2. Add assets under `assets/signatures/clients/{new-slug}/v1/`
3. Register in `src/clients/registry.js`
4. Push to `main` — S3 sync + Vercel deploy run automatically

## Adding a new version

1. Duplicate `src/clients/{slug}/v1/` → `v2/`
2. Add assets under `assets/signatures/clients/{slug}/v2/`
3. Add route in `registry.js` (e.g. `/pureleasing/v2`)
4. Keep `v1` assets on S3 — do not delete (pasted signatures depend on stable URLs)

## Archived branches

The following per-client branches are superseded by this monorepo:

`client-ali`, `pure-leasing`, `helmroad`, `gmm`, `okmg`, `beyondtraffic`, `main` (spoton), `newme`, `hair-supplies`

Keep them for 30 days as rollback reference, then archive.
