import React from 'react';

const InstallationModal = ({ isOpen, onClose, activeTab, onTabChange }) => {
  if (!isOpen) return null;

  const tabData = {
    gmail: {
      title: 'Gmail Signature Setup',
      steps: [
        'Open Gmail and click the gear icon (Settings)',
        'Go to the "General" tab',
        'Scroll down to "Signature" section',
        'Click "Create new" to add a new signature',
        'Give your signature a name',
        'Paste your copied signature HTML into the signature box',
        'Click "Save Changes" at the bottom',
        'Your signature will now appear in new emails'
      ],
      note: 'Gmail supports HTML signatures, so your formatting will be preserved.'
    },
    outlook: {
      title: 'Outlook Signature Setup',
      steps: [
        'Open Outlook and go to File → Options',
        'Click "Mail" in the left sidebar',
        'Click "Signatures..." button',
        'Click "New" to create a new signature',
        'Give your signature a name',
        'Paste your copied signature HTML into the signature box',
        'Click "OK" to save',
        'Select when to use this signature (new messages, replies, etc.)',
        'Click "OK" to apply'
      ],
      note: 'Outlook supports rich HTML signatures with full formatting.'
    },
    'email-app': {
      title: 'Email App Signature Setup',
      steps: [
        'Open your email app (Apple Mail, Thunderbird, etc.)',
        'Go to Preferences or Settings',
        'Look for "Signatures" or "Composing" section',
        'Click "Add" or "New" to create a signature',
        'Give your signature a name',
        'Paste your copied signature HTML into the signature box',
        'Save the signature',
        'Set it as default for new messages if desired'
      ],
      note: 'Most modern email apps support HTML signatures. If you encounter issues, try the "Download" option and open the HTML file in a browser first.'
    }
  };

  const currentTab = tabData[activeTab];

  return (
    <div className="installation-modal-overlay" onClick={onClose}>
      <div className="installation-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Installation Instructions</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="modal-tabs">
          {Object.keys(tabData).map(tabKey => (
            <button
              key={tabKey}
              className={`tab-button ${activeTab === tabKey ? 'active' : ''}`}
              onClick={() => onTabChange(tabKey)}
            >
              {tabKey === 'gmail' ? 'Gmail' : tabKey === 'outlook' ? 'Outlook' : 'Email App'}
            </button>
          ))}
        </div>

        <div className="modal-content">
          <div className="tab-content">
            <h4>{currentTab.title}</h4>
            <ol>
              {currentTab.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <div className="note">
              <strong>Note:</strong> {currentTab.note}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationModal;
