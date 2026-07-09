export const getSignatureAssetUrl = (client, version, file) => {
  const cdn = process.env.REACT_APP_SIGNATURE_CDN;
  const assetPath = `clients/${client}/${version}/${file}`;

  if (cdn) {
    return `${cdn.replace(/\/$/, '')}/${assetPath}`;
  }

  const origin = typeof window !== 'undefined' && window.location ? window.location.origin : '';
  return `${origin}/clients/${client}/${version}/${file}`;
};
