// Utility functions for signature operations

// Format a phone number as "0123 456 789" (groups of 4, 3, 3 digits).
export const formatPhoneNumber = (value) => {
  const digits = (value || '').replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 4) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
};

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

// Copy the raw HTML source of the signature as plain text.
export const copySignatureCodeToClipboard = async () => {
  try {
    const signatureTable = document.querySelector('.signature-table');
    if (!signatureTable) {
      console.error('Signature table not found');
      return false;
    }

    const htmlCode = signatureTable.outerHTML;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(htmlCode);
      return true;
    }

    // Fallback for browsers without the async clipboard API
    const textarea = document.createElement('textarea');
    textarea.value = htmlCode;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;
  } catch (error) {
    console.error('Failed to copy signature code:', error);
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
