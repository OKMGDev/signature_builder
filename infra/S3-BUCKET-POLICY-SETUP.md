# S3 bucket policy — setup order matters

If the AWS console shows an error on `Principal`, it is usually **not** invalid JSON. Public policies are blocked until you change Block Public Access first.

## Step 1 — Block Public Access (do this first)

S3 → `okmg-signatures-assets` → **Permissions** → **Block public access (bucket settings)** → **Edit**

Turn **off** only this setting:

- **Block public and cross-account access to buckets and objects through any public bucket or access point policies**

Leave the other three block settings **on** if you want (recommended). Save and confirm.

## Step 2 — Attach bucket policy

**Permissions** → **Bucket policy** → **Edit** → paste `s3-bucket-policy.json` → **Save changes**.

## Step 3 — Verify

Open in a browser (should show the image, not XML error):

```
https://okmg-signatures-assets.s3.ap-southeast-2.amazonaws.com/signatures/clients/pure-leasing/v1/pure-logo.png
```

## If it still errors on `Principal`

The JSON is valid. AWS rejects `"Principal": "*"` **while Block Public Access is on** — the error highlights line 7 even though the syntax is correct. Complete Step 1 first, then paste the policy again.

Do **not** replace `"Principal": "*"` with `{"AWS": "*"}` — that only allows authenticated AWS users, not Gmail/Outlook loading images anonymously.

## Still 403 after saving?

- Confirm the object exists: `aws s3 ls s3://okmg-signatures-assets/signatures/clients/pure-leasing/v1/`
- Re-run upload: `npm run sync:s3`
- Wait 1–2 minutes for policy propagation
