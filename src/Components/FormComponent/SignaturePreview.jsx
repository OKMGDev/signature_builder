import React, { Component } from 'react';

export default class SignaturePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstallationModal: false,
      activeTab: 'gmail'
    };
  }

  toolTipShow = () => {
    this.props.onTooltipShow();
  }

  toolTipHide = () => {
    this.props.onTooltipHide();
  }

  openInstallationModal = () => {
    this.setState({ showInstallationModal: true });
  }

  closeInstallationModal = () => {
    this.setState({ showInstallationModal: false });
  }

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  }

  fallbackCopy = () => {
    // Fallback copy method using execCommand for HTML content
    const signatureTable = document.querySelector('.signature-table');
    if (!signatureTable) return;

    // Create a temporary div to hold the HTML content
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
  }

  downloadSignature = () => {
    const signatureTable = document.querySelector('.signature-table');
    if (!signatureTable) {
      console.error('Signature table not found');
      return;
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
  }

  copyContent = async () => {
    try {
      // Get the signature table element
      const signatureTable = document.querySelector('.signature-table');
      if (!signatureTable) {
        console.error('Signature table not found');
        return;
      }

      // Try to copy as HTML first using the fallback method
      this.fallbackCopy();

      // Update the tooltip
      this.props.onCopy();
    } catch (error) {
      console.error('Failed to copy signature:', error);
      // Fallback: try to copy as text
      try {
        const signatureTable = document.querySelector('.signature-table');
        if (signatureTable) {
          const textContent = signatureTable.textContent || signatureTable.innerText || '';
          await navigator.clipboard.writeText(textContent);
          this.props.onCopy();
        }
      } catch (fallbackError) {
        console.error('Fallback copy also failed:', fallbackError);
      }
    }
  }

  render() {
    const { name, job, company, mobile, email, tooltip, toolinfo } = this.props;

    return (
      <div className="signature-wrapper" style={{ position: 'relative' }}>
        <p className={tooltip + ' tooltip'}>{toolinfo}</p>
        {/* <div className='instructions'>
          <h5>Instructions</h5>
          <ul>
            <li>Click on the signature to copy it to your clipboard.</li>
            <li>Navigate to Gmail &gt; Settings &gt; Signatures &gt; Paste into signature box &gt; Save</li>
            <li>Done!</li>
          </ul>
        </div> */}
        <div>
          {/* -------------- SIGNATURE ---------*/}
          <table
            className="signature-table"
            width={520}
            cellSpacing="0"
            cellPadding="0"
            style={{ fontFamily: 'Arial,Helvetica,sans-serif', textAlign: 'left', color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '16px', width: '520px' }}
          >
            <tbody>
              <tr>
                <td style={{ fontSize: '12pt', textTransform: 'capitalize', fontWeight: 'bold', color: 'rgb(38, 90, 168)' }}>{name ? name : "Name"}</td>
              </tr>
              <tr>
                <td style={{ fontSize: '9pt', textTransform: 'capitalize', color: "rgb(237, 182, 28)" }}>
                  {job ? job : "Job Title"}
                  <br /><br />
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: '9pt' }}>{mobile ? mobile : "0000 00 0000"}</td>
              </tr>
              <tr>
                <td style={{ fontSize: '9pt' }}>{email ? email : "example@example.com.au"}</td>
              </tr>
              {company === "--" ? (
                <tr>
                  <td style={{ paddingTop: '10px' }}>
                    <img
                      src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/Placeholder_view_vector.svg.png"
                      alt="Spot On Civil"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px' }}
                    />
                  </td>
                </tr>
              ) : null}
              {/* Spot on Civil */}
              {company === "Spot on Civil" ? (
                <tr>
                  <td style={{ paddingTop: '10px' }}>
                    <img
                      src="https://spotongroup.com.au/wp-content/uploads/2025/07/logo-spoton-civil-1.svg"
                      alt="Spot On Civil"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px' }}
                    />
                  </td>
                </tr>
              ) : null}
              {/* Spot on Power Projects */}
              {company === "Spot on Power Projects" ? (
                <tr>
                  <td style={{ paddingTop: '10px' }}>
                    <img
                      src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/spot-on-power-projects.png"
                      alt="Spot On Civil"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px' }}
                    />
                  </td>
                </tr>
              ) : null}
              {/* North Vic Electricity */}
              {company === "North Vic Electricity Services" ? (
                <tr>
                  <td style={{ paddingTop: '10px' }}>
                    <img
                      src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/spot-on-north-vic-electric.png"
                      alt="Spot On Civil"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px' }}
                    />
                  </td>
                </tr>
              ) : null}
              {/* Spot on Civil + North Vic */}
              {company === "Spot on Civil + North Vic Electricity Services" ? (
                <tr>
                  <td style={{ paddingTop: '10px' }}>
                    <img
                      src="https://spotongroup.com.au/wp-content/uploads/2025/07/logo-spoton-civil-1.svg"
                      alt="Spot On Civil"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px', marginRight: '15px' }}
                    />
                    <img
                      src="https://okmg-digital-assets.s3.ap-southeast-2.amazonaws.com/SpotOnGroup/spot-on-north-vic-electric.png"
                      alt="Spot On Civil"
                      width="120"
                      height="92"
                      style={{ width: '120px', height: '92px' }}
                    />
                  </td>
                </tr>
              ) : null}
              <tr>
                <td style={{ fontSize: '9pt' }}><a href="https://spotonpower.com.au" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}><br />spotonpower.com.au</a></td>
              </tr>
              <tr>
                <td style={{ fontSize: '9pt' }}><a href="https://spotongroup.com.au/" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>spotongroup.com.au</a></td>
              </tr>
              <tr>
                <td style={{ fontSize: '9pt' }}><a href="https://northvicelectrcity.com.au" style={{ color: '#000', textDecoration: 'none' }}>northvicelectrcity.com.au</a></td>
              </tr>
              <tr>
                <td style={{ fontSize: '8pt', fontStyle: 'italic' }}>
                  <br />
                  Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.
                </td>
              </tr>
            </tbody>
          </table>
          {/* -------------- SIGNATURE ---------*/}
        </div>
        <div className="signature-preview-footer">
          <button className="button" onClick={this.copyContent}>Copy</button>
          <button className="button" onClick={this.downloadSignature}>Download</button>
          <button className="button" onClick={this.openInstallationModal}>Installation Instruction</button>
        </div>

        {/* Installation Instructions Modal */}
        {this.state.showInstallationModal && (
          <div className="installation-modal-overlay" onClick={this.closeInstallationModal}>
            <div className="installation-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Installation Instructions</h3>
                <button className="close-button" onClick={this.closeInstallationModal}>×</button>
              </div>

              <div className="modal-tabs">
                <button
                  className={`tab-button ${this.state.activeTab === 'gmail' ? 'active' : ''}`}
                  onClick={() => this.setActiveTab('gmail')}
                >
                  Gmail
                </button>
                <button
                  className={`tab-button ${this.state.activeTab === 'outlook' ? 'active' : ''}`}
                  onClick={() => this.setActiveTab('outlook')}
                >
                  Outlook
                </button>
                <button
                  className={`tab-button ${this.state.activeTab === 'email-app' ? 'active' : ''}`}
                  onClick={() => this.setActiveTab('email-app')}
                >
                  Email App
                </button>
              </div>

              <div className="modal-content">
                {this.state.activeTab === 'gmail' && (
                  <div className="tab-content">
                    <h4>Gmail Signature Setup</h4>
                    <ol>
                      <li>Open Gmail and click the gear icon (Settings)</li>
                      <li>Go to the "General" tab</li>
                      <li>Scroll down to "Signature" section</li>
                      <li>Click "Create new" to add a new signature</li>
                      <li>Give your signature a name</li>
                      <li>Paste your copied signature HTML into the signature box</li>
                      <li>Click "Save Changes" at the bottom</li>
                      <li>Your signature will now appear in new emails</li>
                    </ol>
                    <div className="note">
                      <strong>Note:</strong> Gmail supports HTML signatures, so your formatting will be preserved.
                    </div>
                  </div>
                )}

                {this.state.activeTab === 'outlook' && (
                  <div className="tab-content">
                    <h4>Outlook Signature Setup</h4>
                    <ol>
                      <li>Open Outlook and go to File → Options</li>
                      <li>Click "Mail" in the left sidebar</li>
                      <li>Click "Signatures..." button</li>
                      <li>Click "New" to create a new signature</li>
                      <li>Give your signature a name</li>
                      <li>Paste your copied signature HTML into the signature box</li>
                      <li>Click "OK" to save</li>
                      <li>Select when to use this signature (new messages, replies, etc.)</li>
                      <li>Click "OK" to apply</li>
                    </ol>
                    <div className="note">
                      <strong>Note:</strong> Outlook supports rich HTML signatures with full formatting.
                    </div>
                  </div>
                )}

                {this.state.activeTab === 'email-app' && (
                  <div className="tab-content">
                    <h4>Email App Signature Setup</h4>
                    <ol>
                      <li>Open your email app (Apple Mail, Thunderbird, etc.)</li>
                      <li>Go to Preferences or Settings</li>
                      <li>Look for "Signatures" or "Composing" section</li>
                      <li>Click "Add" or "New" to create a signature</li>
                      <li>Give your signature a name</li>
                      <li>Paste your copied signature HTML into the signature box</li>
                      <li>Save the signature</li>
                      <li>Set it as default for new messages if desired</li>
                    </ol>
                    <div className="note">
                      <strong>Note:</strong> Most modern email apps support HTML signatures. If you encounter issues, try the "Download" option and open the HTML file in a browser first.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
