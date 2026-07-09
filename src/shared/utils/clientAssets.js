import { getSignatureAssetUrl } from './assets';

/**
 * Creates a versioned asset URL builder for a client signature.
 * Never overwrite files in a published version folder — add v2 instead
 * so pasted email signatures keep loading the old URLs.
 */
export const createClientAssets = (clientSlug, version) => {
  const asset = (file) => getSignatureAssetUrl(clientSlug, version, file);

  return {
    clientSlug,
    version,
    asset
  };
};
