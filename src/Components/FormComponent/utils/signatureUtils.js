// Utility functions for signature operations

export const copySignatureToClipboard = async () => {
  try {
    const signatureContainer = document.querySelector('.signature-table');
    if (!signatureContainer) {
      console.error('Signature table not found');
      return false;
    }

    // Use fallback method for HTML content (this is what we need for email signatures)
    const htmlSuccess = fallbackCopyHTML(signatureContainer);

    if (htmlSuccess) {
      return true;
    } else {
      // If HTML copy fails, try text copy as fallback
      try {
        await navigator.clipboard.writeText(signatureContainer.textContent);
        console.log('Text content copied as fallback');
        return true;
      } catch (textError) {
        console.error('Both HTML and text copy failed');
        return false;
      }
    }
  } catch (error) {
    console.error('Failed to copy signature:', error);
    return false;
  }
};

export const downloadSignatureAsHTML = () => {
  try {
    const signatureContainer = document.querySelector('.signature-table');
    if (!signatureContainer) {
      console.error('Signature table not found');
      return false;
    }

    // Get the signature HTML content
    const htmlContent = signatureContainer.outerHTML;

    // Create a complete HTML document
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Signature</title>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f5f5f5; }
        .signature-table { max-width: 400px; margin: 0 auto; }
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

const fallbackCopyHTML = (signatureContainer) => {
  try {
    // Create a temporary div for HTML copying
    const tempDiv = document.createElement('div');
    tempDiv.contentEditable = true;
    tempDiv.innerHTML = signatureContainer.outerHTML;
    tempDiv.style.position = 'fixed';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '-9999px';
    tempDiv.style.opacity = '0';
    tempDiv.style.pointerEvents = 'none';
    document.body.appendChild(tempDiv);

    // Focus on the temp div
    tempDiv.focus();

    // Select all content in the temp div
    const range = document.createRange();
    range.selectNodeContents(tempDiv);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy the HTML content
    const htmlSuccess = document.execCommand('copy');

    // Clean up
    document.body.removeChild(tempDiv);
    selection.removeAllRanges();

    if (htmlSuccess) {
      console.log('HTML signature copied successfully');
      return true;
    } else {
      console.warn('HTML copy failed, will try text fallback');
      return false;
    }
  } catch (error) {
    console.error('Error in HTML copy method:', error);
    return false;
  }
};
