export const formatAustralianMobile = (value) => {
  const digits = String(value).replace(/\D/g, '').slice(0, 10);
  if (!digits) return '';
  if (digits.length <= 4) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
};

export const formatOfficePhone = (value) => {
  const digits = String(value).replace(/\D/g, '').slice(0, 10);
  if (!digits) return '';
  if (digits.length === 1) return `(${digits}`;
  const area = digits.slice(0, 2);
  const rest = digits.slice(2);
  const prefix = `(${area})`;
  if (!rest) return `${prefix} `;
  if (rest.length <= 4) return `${prefix} ${rest}`;
  return `${prefix} ${rest.slice(0, 4)} ${rest.slice(4, 8)}`;
};

export const toTelHref = (phone) => {
  const digits = String(phone).replace(/\D/g, '');
  return digits ? `tel:${digits}` : null;
};

const getSignatureTable = () => document.querySelector('.signature-table');

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
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Email Signature</title></head><body>${signature.outerHTML}</body></html>`;
    const url = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'frigtech-email-signature.html';
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
