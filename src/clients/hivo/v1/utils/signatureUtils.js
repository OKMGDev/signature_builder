const getSignatureTable = () => document.querySelector('.signature-table');

export const copySignatureToClipboard = async () => {
  try {
    const signatureTable = getSignatureTable();
    if (!signatureTable) {
      console.error('Signature table not found');
      return false;
    }

    fallbackCopyHTML(signatureTable);
    return true;
  } catch (error) {
    console.error('Failed to copy signature:', error);
    return false;
  }
};

export const downloadSignatureAsHTML = () => {
  try {
    const signatureTable = getSignatureTable();
    if (!signatureTable) {
      console.error('Signature table not found');
      return false;
    }

    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HiVo Email Signature</title>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
        .signature-container { max-width: 600px; margin: 0 auto; }
    </style>
</head>
<body>
    <div class="signature-container">
        ${signatureTable.outerHTML}
    </div>
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'hivo-email-signature.html';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);

    return true;
  } catch (error) {
    console.error('Failed to download signature:', error);
    return false;
  }
};

const fallbackCopyHTML = (signatureTable) => {
  const tempDiv = document.createElement('div');
  tempDiv.contentEditable = true;
  tempDiv.innerHTML = signatureTable.outerHTML;
  tempDiv.style.position = 'fixed';
  tempDiv.style.left = '-9999px';
  tempDiv.style.top = '-9999px';
  document.body.appendChild(tempDiv);

  const range = document.createRange();
  range.selectNodeContents(tempDiv);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');

  document.body.removeChild(tempDiv);
  selection.removeAllRanges();
};
