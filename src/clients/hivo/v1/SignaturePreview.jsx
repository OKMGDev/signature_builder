import React, { Component } from 'react';
import InstallationModal from '../../../shared/InstallationModal';
import SignatureHelpButton from '../../../shared/SignatureHelpButton';
import SignatureTable from './SignatureTable';
import { copySignatureToClipboard, downloadSignatureAsHTML } from './utils/signatureUtils';

export default class SignaturePreview extends Component {
  state = {
    showInstallationModal: false,
    activeTab: 'gmail'
  };

  openInstallationModal = () => {
    this.setState({ showInstallationModal: true });
  };

  closeInstallationModal = () => {
    this.setState({ showInstallationModal: false });
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  handleCopy = async () => {
    const success = await copySignatureToClipboard();
    if (success) {
      this.props.onCopy();
    }
  };

  handleDownload = () => {
    downloadSignatureAsHTML();
  };

  render() {
    const { name, job, mobile, email, meetingSchedule, tooltip, toolinfo } = this.props;
    const { showInstallationModal, activeTab } = this.state;

    return (
      <div className="signature-wrapper" style={{ position: 'relative' }}>
        <p className={`${tooltip} tooltip`}>{toolinfo}</p>

        <div>
          <SignatureTable
            name={name}
            job={job}
            mobile={mobile}
            email={email}
            meetingSchedule={meetingSchedule}
          />
        </div>

        <div className="signature-preview-footer">
          <button className="button" type="button" onClick={this.handleCopy}>
            Copy
          </button>
          <button className="button" type="button" onClick={this.handleDownload}>
            Download
          </button>
          <button className="button" type="button" onClick={this.openInstallationModal}>
            Installation Instruction
          </button>
          <SignatureHelpButton />
        </div>

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
