import React from 'react';

const OKMG_CONTACT_URL = 'https://www.okmg.com/contact';

const SignatureHelpButton = () => (
  <a
    className="button"
    href={OKMG_CONTACT_URL}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', display: 'inline-block', boxSizing: 'border-box' }}
  >
    Need help?
  </a>
);

export default SignatureHelpButton;
