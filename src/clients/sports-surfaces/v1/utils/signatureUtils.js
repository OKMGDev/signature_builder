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
    link.download = 'sports-surfaces-email-signature.html';
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
