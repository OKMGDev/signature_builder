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
src/clients/{slug}/v1/
  constants/assets.js      # Versioned asset URLs (asset('logo.png'))
  constants/companyData.js # Logo paths via asset()
assets/signatures/clients/ # Image source of truth (synced to S3)
src/shared/utils/
  assets.js                # getSignatureAssetUrl() — CDN or local fallback
  clientAssets.js          # createClientAssets(slug, version)
src/shared/                # Shared InstallationModal
```

## Image management

All signature images live in `assets/signatures/clients/{slug}/{version}/`.

Each client version has `constants/assets.js`:

```js
import { createClientAssets } from '../../../../shared/utils/clientAssets';

export const { clientSlug, version, asset } = createClientAssets('helmroad', 'v1');
```

Use `asset('logo.png')` in `companyData.js` — never hardcode external URLs.

**URL shape (production):** `{REACT_APP_SIGNATURE_CDN}/clients/{slug}/{version}/{file}`

**Updating a logo without breaking old signatures:**

1. Do **not** overwrite files in a published version folder (e.g. `v1/logo.png`)
2. Create `assets/signatures/clients/{slug}/v2/` with the new images
3. Duplicate `src/clients/{slug}/v1/` → `v2/`, set `createClientAssets('{slug}', 'v2')` in the new `assets.js`
4. Point the main route in `registry.js` at `v2`; keep `/slug/v1` for the frozen version
5. Push — S3 sync uploads `v2/` alongside `v1/`; old pasted signatures keep loading `v1` URLs


## Local development

```bash
npm install
npm start
```

Signature images are copied from `assets/signatures/clients/` to `public/clients/` automatically via `prestart` / `prebuild`.

## Environment variables

| Variable | Description |
|----------|-------------|
| `REACT_APP_SIGNATURE_CDN` | Image base URL for production builds |
| `AWS_S3_BUCKET` | S3 bucket name (local `npm run sync:s3` only) |
| `AWS_REGION` | AWS region (local sync only) |

**Production value:**

```
REACT_APP_SIGNATURE_CDN=https://okmg-signatures-assets.s3.ap-southeast-2.amazonaws.com/signatures
```

Without `REACT_APP_SIGNATURE_CDN`, images are served from `/clients/...` on the same domain (local dev fallback).

## S3 asset deployment

**Bucket:** `okmg-signatures-assets` · **Region:** `ap-southeast-2`

Signature images in `assets/signatures/` sync to:

```
s3://okmg-signatures-assets/signatures/clients/{slug}/{version}/...
```

### One-time AWS setup

1. **Public read** — attach `infra/s3-bucket-policy.json` in S3 → Bucket → Permissions → Bucket policy
2. **Block public access** — allow public policies for this bucket (S3 → Permissions → Block public access → edit)
3. **IAM user for GitHub** — create a user with `infra/iam-s3-sync-policy.json`, save access keys

### GitHub secrets (`OKMGDev/signature_builder`)

| Secret | Value |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret |
| `AWS_S3_BUCKET` | `okmg-signatures-assets` |
| `AWS_REGION` | `ap-southeast-2` |

Sync runs on push to `main` when `assets/signatures/**` changes, or manually via Actions → **Sync Signature Assets to S3** → Run workflow.

Local upload: `npm run sync:s3` (requires AWS CLI credentials).

The sync job does **not** use `--delete`, so old version folders remain on S3 indefinitely.

### Vercel

Set `REACT_APP_SIGNATURE_CDN` to:

```
https://okmg-signatures-assets.s3.ap-southeast-2.amazonaws.com/signatures
```

## Vercel deployment

1. Connect this repo to Vercel
2. Production branch: `main`
3. Build command: `npm run build`
4. Output directory: `build`
5. Set `REACT_APP_SIGNATURE_CDN` in Vercel environment variables

`vercel.json` handles SPA routing for all client paths.

## Adding a new client

1. Copy an existing client folder: `src/clients/helmroad/v1/` → `src/clients/{new-slug}/v1/`
2. Add images under `assets/signatures/clients/{new-slug}/v1/`
3. Set `createClientAssets('{new-slug}', 'v1')` in `constants/assets.js`
4. Register in `src/clients/registry.js`
5. Push to `main` — S3 sync + Vercel deploy run automatically

## Adding a new version

1. Duplicate `src/clients/{slug}/v1/` → `v2/`
2. Add **new** images under `assets/signatures/clients/{slug}/v2/` (do not modify `v1/` files)
3. Update `createClientAssets` version in the new `constants/assets.js`
4. Add route in `registry.js` (e.g. `/pureleasing/v2`) and point the main route at the latest version
5. Keep `v1` on S3 — pasted signatures depend on those stable URLs

## Archived branches

The following per-client branches are superseded by this monorepo:

`client-ali`, `pure-leasing`, `helmroad`, `gmm`, `okmg`, `beyondtraffic`, `main` (spoton), `newme`, `hair-supplies`

Keep them for 30 days as rollback reference, then archive.
