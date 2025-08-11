import React, { Component } from 'react';
import InstallationModal from './InstallationModal';
import SignatureTable from './SignatureTable';
import { copySignatureToClipboard, downloadSignatureAsHTML } from './utils/signatureUtils';

export default class SignaturePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstallationModal: false,
      activeTab: 'gmail'
    };
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

  handleCopy = async () => {
    const success = await copySignatureToClipboard();
    if (success) {
      this.props.onCopy();
    }
  }

  handleDownload = () => {
    const success = downloadSignatureAsHTML();
    if (success) {
      console.log('Signature downloaded successfully');
    }
  }

  render() {
    const { name, job, company, mobile, email, tooltip, toolinfo } = this.props;
    const { showInstallationModal, activeTab } = this.state;

    return (
      <div className="signature-wrapper" style={{ position: 'relative' }}>
        <p className={tooltip + ' tooltip'}>{toolinfo}</p>

        <div>
          {/* -------------- SIGNATURE ---------*/}
          <SignatureTable
            name={name}
            job={job}
            company={company}
            mobile={mobile}
            email={email}
          />
          {/* -------------- SIGNATURE ---------*/}
        </div>

        <div className="signature-preview-footer">
          <button className="button" onClick={this.handleCopy}>Copy</button>
          <button className="button" onClick={this.handleDownload}>Download</button>
          <button className="button" onClick={this.openInstallationModal}>Installation Instruction</button>
        </div>

        {/* Installation Instructions Modal */}
        <InstallationModal
          isOpen={showInstallationModal}
          onClose={this.closeInstallationModal}
          activeTab={activeTab}
          onTabChange={this.setActiveTab}
        />
      </div>
    );
  }
}
