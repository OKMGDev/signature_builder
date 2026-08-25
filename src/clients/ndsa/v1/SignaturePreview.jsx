import React, { Component } from 'react';
import InstallationModal from '../../../shared/InstallationModal';
import SignatureTable from './SignatureTable';
import {
  copySignatureToClipboard,
  downloadSignatureAsHTML
} from './utils/signatureUtils';

export default class SignaturePreview extends Component {
  state = {
    showInstallationModal: false,
    activeTab: 'gmail'
  };

  handleCopy = () => {
    if (copySignatureToClipboard()) {
      this.props.onCopy();
    }
  };

  render() {
    const { name, job, mobile, email, tooltip, toolinfo } = this.props;
    const { showInstallationModal, activeTab } = this.state;

    return (
      <div className="signature-wrapper" style={{ position: 'relative' }}>
        <p className={`${tooltip} tooltip`}>{toolinfo}</p>

        <SignatureTable
          name={name}
          job={job}
          mobile={mobile}
          email={email}
        />

        <div className="signature-preview-footer">
          <button className="button" type="button" onClick={this.handleCopy}>Copy</button>
          <button className="button" type="button" onClick={downloadSignatureAsHTML}>Download</button>
          <button
            className="button"
            type="button"
            onClick={() => this.setState({ showInstallationModal: true })}
          >
            Installation Instruction
          </button>
        </div>

        <InstallationModal
          isOpen={showInstallationModal}
          onClose={() => this.setState({ showInstallationModal: false })}
          activeTab={activeTab}
          onTabChange={(tab) => this.setState({ activeTab: tab })}
        />
      </div>
    );
  }
}
