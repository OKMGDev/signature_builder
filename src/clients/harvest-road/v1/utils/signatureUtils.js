export const stripPhoneDigits = (phone) => phone.replace(/\D/g, '');

const toNationalNineDigits = (value) => {
  let digits = stripPhoneDigits(value);

  if (digits.startsWith('61')) {
    digits = digits.slice(2);
  }

  if (digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  return digits.slice(0, 9);
};

/** Mobile: +61 477 779 336 */
export const formatMobile = (value) => {
  const digits = toNationalNineDigits(value);
  if (!digits) return '';

  return `+61 ${[digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 9)]
    .filter(Boolean)
    .join(' ')}`;
};

/** Landline: +61 8 9335 1244 */
export const formatLandline = (value) => {
  const digits = toNationalNineDigits(value);
  if (!digits) return '';

  return `+61 ${[digits.slice(0, 1), digits.slice(1, 5), digits.slice(5, 9)]
    .filter(Boolean)
    .join(' ')}`;
};

export const formatPhone = (value, type = 'landline') => (
  type === 'mobile' ? formatMobile(value) : formatLandline(value)
);

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
