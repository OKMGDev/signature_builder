// Utility functions for signature operations

export const copySignatureToClipboard = async () => {
  try {
    const signatureTable = document.querySelector('.signature-table');
    if (!signatureTable) {
      console.error('Signature table not found');
      return false;
    }

    // Try to copy as HTML using the fallback method
    fallbackCopyHTML(signatureTable);
    return true;
  } catch (error) {
    console.error('Failed to copy signature:', error);
    return false;
  }
};

export const downloadSignatureAsHTML = () => {
  try {
    const signatureTable = document.querySelector('.signature-table');
    if (!signatureTable) {
      console.error('Signature table not found');
      return false;
    }

    // Get the signature HTML content
    const htmlContent = signatureTable.outerHTML;

    // Create a complete HTML document
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Signature</title>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
        .signature-container { max-width: 600px; margin: 0 auto; }
    </style>
</head>
<body>
    <div class="signature-container">
        ${htmlContent}
    </div>
</body>
</html>`;

    // Create blob and download
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'email-signature.html';

    // Trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);

    return true;
  } catch (error) {
    console.error('Failed to download signature:', error);
    return false;
  }
};

const fallbackCopyHTML = (signatureTable) => {
  // Fallback copy method using execCommand for HTML content
  const tempDiv = document.createElement('div');
  tempDiv.contentEditable = true;
  tempDiv.innerHTML = signatureTable.outerHTML;
  tempDiv.style.position = 'fixed';
  tempDiv.style.left = '-9999px';
  tempDiv.style.top = '-9999px';
  document.body.appendChild(tempDiv);

  // Select the content
  const range = document.createRange();
  range.selectNodeContents(tempDiv);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  // Copy the HTML content
  document.execCommand('copy');

  // Clean up
  document.body.removeChild(tempDiv);
  selection.removeAllRanges();
};
