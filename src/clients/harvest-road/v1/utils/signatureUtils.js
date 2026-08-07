export const stripPhoneDigits = (phone) => phone.replace(/\D/g, '');

const PREFIX = '+61';

/**
 * Reduce a field value to its 9 national digits.
 *
 * The field always renders with a "+61" prefix, so on every keystroke the
 * value being re-parsed already contains it. When the value is prefixed we
 * must drop that country code rather than read it as dialled digits, or each
 * keystroke shifts the number along. Returns null when the user has deleted
 * into the prefix, which clears the field.
 */
const toNationalDigits = (value) => {
  let digits = stripPhoneDigits(value);

  if (value.trim().startsWith('+')) {
    if (!digits.startsWith('61')) return null;
    digits = digits.slice(2);
  }

  // No Australian national number starts with 6, so a leading 61 at this point
  // is a country code the user typed over the prefix already on screen.
  if (digits.startsWith('61')) digits = digits.slice(2);
  if (digits.startsWith('0')) digits = digits.slice(1);

  return digits.slice(0, 9);
};

const formatGrouped = (value, groupSizes) => {
  const digits = toNationalDigits(value);
  if (digits === null) return '';

  // Keep the prefix visible once dialling starts, e.g. a leading "0"
  if (!digits) return /[\d+]/.test(value) ? PREFIX : '';

  let offset = 0;
  const groups = groupSizes
    .map((size) => {
      const group = digits.slice(offset, offset + size);
      offset += size;
      return group;
    })
    .filter(Boolean);

  return `${PREFIX} ${groups.join(' ')}`;
};

/** Mobile: +61 477 779 336 */
export const formatMobile = (value) => formatGrouped(value, [3, 3, 3]);

/** Landline: +61 8 9335 1244 */
export const formatLandline = (value) => formatGrouped(value, [1, 4, 4]);

export const toTelHref = (phone) => {
  const trimmed = phone.trim();
  if (!trimmed) return null;
  return `tel:${trimmed.startsWith('+') ? '+' : ''}${stripPhoneDigits(trimmed)}`;
};

const getSignature = () => document.querySelector('.signature-table');

export const copySignatureToClipboard = () => {
  const signature = getSignature();
  if (!signature) return false;

  try {
    const container = document.createElement('div');
    container.contentEditable = true;
    container.innerHTML = signature.outerHTML;
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    document.body.appendChild(container);

    const range = document.createRange();
    range.selectNodeContents(container);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    const success = document.execCommand('copy');

    selection.removeAllRanges();
    document.body.removeChild(container);
    return success;
  } catch (error) {
    console.error('Failed to copy signature:', error);
    return false;
  }
};

export const downloadSignatureAsHTML = () => {
  const signature = getSignature();
  if (!signature) return false;

  try {
    const documentHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Harvest Road Email Signature</title></head><body>${signature.outerHTML}</body></html>`;
    const url = URL.createObjectURL(new Blob([documentHtml], { type: 'text/html' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'harvest-road-email-signature.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    console.error('Failed to download signature:', error);
    return false;
  }
};
