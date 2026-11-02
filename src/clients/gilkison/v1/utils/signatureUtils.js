const getSignatureTable = () => document.querySelector('.signature-table');

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

  if (digits.startsWith('61')) digits = digits.slice(2);
  if (digits.startsWith('0')) digits = digits.slice(1);

  return digits.slice(0, 9);
};

/** Landline: +61 8 9384 4500 */
export const formatLandline = (value) => {
  const digits = toNationalDigits(value);
  if (digits === null) return '';
  if (!digits) return /[\d+]/.test(value) ? PREFIX : '';

  const groups = [];
  if (digits.length > 0) groups.push(digits.slice(0, 1));
  if (digits.length > 1) groups.push(digits.slice(1, 5));
  if (digits.length > 5) groups.push(digits.slice(5, 9));

  return `${PREFIX} ${groups.join(' ')}`;
};

export const toTelHref = (phone) => {
  const trimmed = (phone || '').trim();
  if (!trimmed) return null;
  return `tel:${trimmed.startsWith('+') ? '+' : ''}${stripPhoneDigits(trimmed)}`;
};

export const copySignatureToClipboard = () => {
  const signature = getSignatureTable();
  if (!signature) return false;

  try {
    const temporaryContainer = document.createElement('div');
    temporaryContainer.contentEditable = true;
    temporaryContainer.innerHTML = signature.outerHTML;
    temporaryContainer.style.position = 'fixed';
    temporaryContainer.style.left = '-9999px';
    document.body.appendChild(temporaryContainer);

    const range = document.createRange();
    range.selectNodeContents(temporaryContainer);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    const success = document.execCommand('copy');

    selection.removeAllRanges();
    document.body.removeChild(temporaryContainer);
    return success;
  } catch (error) {
    console.error('Failed to copy signature:', error);
    return false;
  }
};

export const downloadSignatureAsHTML = () => {
  const signature = getSignatureTable();
  if (!signature) return false;

  try {
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Gilkison Group Email Signature</title></head><body>${signature.outerHTML}</body></html>`;
    const url = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gilkison-email-signature.html';
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
