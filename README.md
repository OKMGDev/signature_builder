# OKMG Signature Generator

Unified monorepo for all client email signature generators. One Vercel deploy serves every client; signature images are hosted on S3 with stable versioned URLs.

## Architecture

```
GitHub (main)
    │
    ├── push assets/signatures/** ──► GitHub Action ──► S3 (okmg-signatures-assets)
    │
    └── push any code ──────────────► Vercel build ───► React SPA

Browser
    │
    ├── /                    Homepage (password-protected client list)
    ├── /pureleasing         Client signature generator
    ├── /ali                 Client signature generator
    └── /{client}/v1         Frozen version route
```

### How it fits together

| Layer | Role |
|-------|------|
| **React app** | Form + live preview per client; copied HTML uses absolute image URLs |
| **`src/clients/registry.js`** | Routes, lazy-loaded client modules, version paths |
| **`assets/signatures/`** | Image source of truth in git; synced to S3 on push |
| **`getSignatureAssetUrl()`** | Builds production CDN URLs or local `/clients/...` fallback |
| **`createClientAssets(slug, version)`** | Per-client helper — never overwrite published version folders |
| **S3** | Public-read signature images at stable URLs for pasted emails |
| **Vercel** | Hosts the SPA; `REACT_APP_*` env vars baked in at build time |

### Client routes

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

Versioned routes (e.g. `/pureleasing/v1`) pin a frozen layout. The homepage at `/` lists all clients and is password-protected.

### Project layout

```
src/
  App.js                     React Router entry
  clients/
    registry.js              Client list + routes
    {slug}/v1/
      constants/assets.js    createClientAssets + asset()
      constants/companyData.js
      FormComponent.jsx
      SignatureTable.jsx
  shared/
    InstallationModal.jsx
    HomePasswordGate.jsx
    utils/assets.js          getSignatureAssetUrl()
    utils/clientAssets.js    createClientAssets()
  pages/Home.jsx             Password-protected index
assets/signatures/clients/   Images (synced to S3)
scripts/
  copy-signature-assets.js   Copies to public/clients/ for local dev
  sync-s3.sh                 Manual S3 upload
.github/workflows/sync-s3.yml
vercel.json                  SPA rewrites
```

## Image management

All signature images live in `assets/signatures/clients/{slug}/{version}/`.

```js
// src/clients/helmroad/v1/constants/assets.js
export const { asset } = createClientAssets('helmroad', 'v1');

// src/clients/helmroad/v1/constants/companyData.js
src: asset('logo.png')
```

**Production URL shape:**

```
https://okmg-signatures-assets.s3.ap-southeast-2.amazonaws.com/signatures/clients/{slug}/{version}/{file}
```

**Updating a logo without breaking old signatures:**

1. Do not overwrite files in a published version folder (e.g. `v1/logo.png`)
2. Add images under `assets/signatures/clients/{slug}/v2/`
3. Duplicate `src/clients/{slug}/v1/` → `v2/`, bump version in `assets.js`
4. Point the main route in `registry.js` at `v2`; keep `/slug/v1` live
5. Push — S3 sync adds `v2/` alongside `v1/`; pasted emails keep loading old URLs

## Local development

```bash
npm install
npm start
```

Copy `.env.example` → `.env`. Images are copied to `public/clients/` automatically via `prestart` / `prebuild`.

## Environment variables

| Variable | Where | Purpose |
|----------|-------|---------|
| `REACT_APP_SIGNATURE_CDN` | Vercel + `.env` | S3/CDN base for signature image URLs |
| `REACT_APP_HOME_PASSWORD` | Vercel + `.env` | Password for homepage client list |
| `AWS_S3_BUCKET` | `.env` only | Local `npm run sync:s3` |
| `AWS_REGION` | `.env` only | Local `npm run sync:s3` |

**Vercel (production):**

```
REACT_APP_SIGNATURE_CDN=https://okmg-signatures-assets.s3.ap-southeast-2.amazonaws.com/signatures
REACT_APP_HOME_PASSWORD=<your-password>
```

## Deployment

### S3 (`okmg-signatures-assets`, ap-southeast-2)

Images sync to `s3://okmg-signatures-assets/signatures/clients/{slug}/{version}/...`

- **Auto:** GitHub Action on push to `main` when `assets/signatures/**` changes
- **Manual:** Actions → Sync Signature Assets to S3, or `npm run sync:s3` locally
- Sync never uses `--delete` — old version folders stay on S3

**GitHub secrets:** `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_S3_BUCKET`, `AWS_REGION`

### Vercel

1. Import `OKMGDev/signature_builder`, branch `main`
2. Build: `npm run build` · Output: `build`
3. Set env vars above · Deploy

Direct client URLs (e.g. `/pureleasing`) work without the homepage password. The password only hides the client index at `/`.

## Adding a client

1. Copy `src/clients/helmroad/v1/` → `src/clients/{slug}/v1/`
2. Add images under `assets/signatures/clients/{slug}/v1/`
3. Set `createClientAssets('{slug}', 'v1')` in `constants/assets.js`
4. Register in `src/clients/registry.js`
5. Push to `main`

## Adding a version

1. Duplicate `src/clients/{slug}/v1/` → `v2/`
2. Add new images under `assets/signatures/clients/{slug}/v2/` (do not modify `v1/`)
3. Update version in the new `constants/assets.js`
4. Add route in `registry.js`; point main route at latest version
5. Keep `v1` on S3 — pasted signatures depend on those URLs
