export const stripPhoneDigits = (phone) => phone.replace(/\D/g, '');

export const formatPhone = (value) => {
  const trimmed = value.replace(/[^\d+]/g, '');

  if (trimmed.startsWith('+61')) {
    const local = trimmed.slice(3).replace(/^0/, '').slice(0, 9);
    return `+61 ${[local.slice(0, 1), local.slice(1, 5), local.slice(5, 9)]
      .filter(Boolean)
      .join(' ')}`;
  }

  const digits = stripPhoneDigits(value).slice(0, 10);
  if (digits.startsWith('04')) {
    return [digits.slice(0, 4), digits.slice(4, 7), digits.slice(7, 10)]
      .filter(Boolean)
      .join(' ');
  }

  return [digits.slice(0, 2), digits.slice(2, 6), digits.slice(6, 10)]
    .filter(Boolean)
    .join(' ');
};

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
