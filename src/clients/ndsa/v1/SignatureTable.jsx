import React from 'react';
import COMPANY, { NDSA_NAVY, SIGNATURE_STYLES } from './constants/companyData';
import {
  formatAustralianMobile,
  normalizeAustralianMobileDigits,
  toTelHref
} from './utils/signatureUtils';

const linkStyle = {
  color: '#1a1a1a',
  fontFamily: 'Arial, Helvetica, sans-serif',
  textDecoration: 'none'
};

const ContactRow = ({ label, href, children }) => (
  <tr>
    <td
      valign="top"
      style={{ ...SIGNATURE_STYLES.contactLabel, padding: '0 8px 2px 0' }}
    >
      {label}
    </td>
    <td style={{ ...SIGNATURE_STYLES.contact, paddingBottom: '2px' }}>
      <a href={href} style={linkStyle} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    </td>
  </tr>
);

const SignatureTable = ({ name, job, mobile, email }) => {
  const mobileDigits = mobile ? normalizeAustralianMobileDigits(mobile) : '';
  const mobileDisplay = mobileDigits ? formatAustralianMobile(mobile) : '0000 000 000';
  const emailDisplay = email || COMPANY.emailPlaceholder;

  return (
    <table
      className="signature-table"
      role="presentation"
      width="460"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      style={{
        borderCollapse: 'collapse',
        borderSpacing: '0',
        borderRadius: 0,
        color: '#1a1a1a',
        fontFamily: 'Arial, Helvetica, sans-serif',
        textAlign: 'left',
        width: '460px'
      }}
    >
      <tbody>
        <tr>
          <td valign="top">
            <table
              role="presentation"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              style={{ borderCollapse: 'collapse', borderSpacing: '0', borderRadius: 0 }}
            >
              <tbody>
                <tr>
                  <td style={SIGNATURE_STYLES.name}>{name || 'Name'}</td>
                </tr>
                <tr>
                  <td style={{ ...SIGNATURE_STYLES.job, paddingBottom: '14px' }}>
                    {job || 'Job Title'}
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              role="presentation"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              style={{ borderCollapse: 'collapse', borderSpacing: '0', borderRadius: 0 }}
            >
              <tbody>
                <ContactRow label="M" href={toTelHref(mobile) || 'tel:0000000000'}>
                  {mobileDisplay}
                </ContactRow>
                <ContactRow label="E" href={`mailto:${emailDisplay}`}>
                  {emailDisplay}
                </ContactRow>
                <ContactRow label="W" href={COMPANY.websiteUrl}>
                  {COMPANY.website}
                </ContactRow>
                <ContactRow label="A" href={COMPANY.addressUrl}>
                  {COMPANY.address}
                </ContactRow>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: '18px' }}>
            <a
              href={COMPANY.logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-link"
              style={{ border: 0, display: 'inline-block', lineHeight: 0, textDecoration: 'none' }}
            >
              <img
                src={COMPANY.logo.src}
                alt={COMPANY.logo.alt}
                width={COMPANY.logo.width}
                height={COMPANY.logo.height}
                border="0"
                style={{
                  border: 0,
                  display: 'block',
                  height: `${COMPANY.logo.height}px`,
                  width: `${COMPANY.logo.width}px`
                }}
              />
            </a>
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.tagline, paddingTop: '8px' }}>
            {COMPANY.tagline}
          </td>
        </tr>
        <tr>
          <td style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '11px',
            lineHeight: '16px',
            paddingTop: '14px'
          }}>
            {COMPANY.socials.map((social, index) => (
              <React.Fragment key={social.name}>
                {index > 0 && <span style={{ color: NDSA_NAVY }}> &nbsp;|&nbsp; </span>}
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: NDSA_NAVY,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontWeight: 'bold',
                    textDecoration: 'none'
                  }}
                >
                  {social.name}
                </a>
              </React.Fragment>
            ))}
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.acknowledgement, paddingTop: '16px' }}>
            {COMPANY.acknowledgement}
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.disclaimer, paddingTop: '10px' }}>
            {COMPANY.disclaimer}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
