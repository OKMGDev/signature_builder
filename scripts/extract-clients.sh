#!/bin/bash
# Extract client FormComponent code from git branches into src/clients/{slug}/v1/
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BASE="src/Components/FormComponent"

extract_client() {
  local slug="$1"
  local branch="$2"
  local dest="$ROOT/src/clients/$slug/v1"

  mkdir -p "$dest/constants" "$dest/utils"

  for file in Form.jsx FormComponent.jsx FormComponent.scss SignaturePreview.jsx SignatureTable.jsx; do
    git show "origin/$branch:$BASE/$file" > "$dest/$file" 2>/dev/null || true
  done

  git show "origin/$branch:$BASE/constants/companyData.js" > "$dest/constants/companyData.js" 2>/dev/null || true
  git show "origin/$branch:$BASE/utils/signatureUtils.js" > "$dest/utils/signatureUtils.js" 2>/dev/null || true

  # index.jsx entry point
  cat > "$dest/index.jsx" << EOF
import FormComponent from './FormComponent';

export default FormComponent;
EOF

  # Fix InstallationModal import to shared
  if [ -f "$dest/SignaturePreview.jsx" ]; then
    sed -i '' "s|from './InstallationModal'|from '../../../shared/InstallationModal'|g" "$dest/SignaturePreview.jsx" 2>/dev/null || \
    sed -i "s|from './InstallationModal'|from '../../../shared/InstallationModal'|g" "$dest/SignaturePreview.jsx"
  fi

  echo "Extracted $slug from $branch"
}

cd "$ROOT"

extract_client "ali" "client-ali"
extract_client "helmroad" "helmroad"
extract_client "gmm" "gmm"
extract_client "okmg" "okmg"
extract_client "beyondtraffic" "beyondtraffic"
extract_client "spoton" "main"
extract_client "newme" "newme"
extract_client "hair-supplies" "hair-supplies"

echo "Done extracting clients from branches."
