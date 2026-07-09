#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

: "${AWS_S3_BUCKET:?Set AWS_S3_BUCKET in .env or your environment}"
: "${AWS_REGION:?Set AWS_REGION in .env or your environment}"

echo "Syncing assets/signatures/ → s3://${AWS_S3_BUCKET}/signatures/"
aws s3 sync assets/signatures/ "s3://${AWS_S3_BUCKET}/signatures/" \
  --region "${AWS_REGION}" \
  --cache-control "public, max-age=31536000"

echo ""
echo "Done. Sample URL:"
if [ -n "${REACT_APP_SIGNATURE_CDN:-}" ]; then
  echo "  ${REACT_APP_SIGNATURE_CDN%/}/clients/pure-leasing/v1/pure-logo.png"
else
  echo "  https://${AWS_S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/signatures/clients/pure-leasing/v1/pure-logo.png"
  echo "  (Set REACT_APP_SIGNATURE_CDN in .env for your CDN domain)"
fi
