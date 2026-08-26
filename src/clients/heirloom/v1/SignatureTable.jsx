import React from 'react';
import COMPANY, { SIGNATURE_STYLES } from './constants/companyData';
import { formatAustralianMobile, normalizeAustralianMobileDigits, toTelHref } from './utils/signatureUtils';

const DISCLAIMER_TEXT =
  'Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.';

const CONTACT_LINK = { color: '#111111', textDecoration: 'none' };

const LOGO_LINK = {
  textDecoration: 'none',
  border: 0,
  outline: 'none',
  display: 'inline-block',
  lineHeight: 0
};

const ContactLink = ({ href, style, children }) => {
  if (!href) return <span style={style}>{children}</span>;
  const opensInNewTab = href.startsWith('http');
  return (
    <a
      href={href}
      style={style}
      {...(opensInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
};

const ContactRow = ({ label, children }) => (
  <tr>
    <td valign="top" style={{ ...SIGNATURE_STYLES.contactLabel, width: '30px', paddingBottom: '2px' }}>{label}</td>
    <td style={{ ...SIGNATURE_STYLES.contact, whiteSpace: 'nowrap', paddingBottom: '2px' }}>{children}</td>
  </tr>
);

const SignatureTable = ({ name, job, mobile, email }) => {
  const companyData = COMPANY;
  const mobileDigits = mobile ? normalizeAustralianMobileDigits(mobile) : '';
  const mobileDisplay = mobileDigits ? formatAustralianMobile(mobile) : '0000 000 000';
  const mobileHref = mobileDigits ? toTelHref(mobile) : null;
  const emailDisplay = email || 'example@example.com.au';

  return (
    <table
      className="signature-table"
      width={454}
      cellSpacing="0"
      cellPadding="0"
      style={{
        fontFamily: 'Arial,Helvetica,sans-serif',
        textAlign: 'left',
        color: '#111111',
        fontSize: '12px',
        lineHeight: '18px',
        width: '454px',
        borderRadius: 0
      }}
    >
      <tbody>
        {/* Name + job title */}
        <tr>
          <td style={{ ...SIGNATURE_STYLES.name, paddingBottom: '0' }}>{name || 'Name'}</td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.job, paddingBottom: '18px' }}>{job || 'Job Title'}</td>
        </tr>

        {/* Contact details: Mobile / Email / Website */}
        <tr>
          <td style={{ paddingBottom: '18px' }}>
            <table cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse', borderRadius: 0 }}>
              <tbody>
                <ContactRow label="M">
                  <ContactLink href={mobileHref} style={CONTACT_LINK}>{mobileDisplay}</ContactLink>
                </ContactRow>
                <ContactRow label="E">
                  <ContactLink href={`mailto:${emailDisplay}`} style={CONTACT_LINK}>{emailDisplay}</ContactLink>
                </ContactRow>
                <ContactRow label="W">
                  <ContactLink href={companyData.websiteUrl} style={CONTACT_LINK}>{companyData.website}</ContactLink>
                </ContactRow>
              </tbody>
            </table>
          </td>
        </tr>

        {/* Company logo */}
        <tr>
          <td style={{ paddingBottom: '18px' }}>
            <a href={companyData.logo.href} target="_blank" rel="noopener noreferrer" className="logo-link" style={LOGO_LINK}>
              <img
                src={companyData.logo.src}
                alt={companyData.logo.alt}
                width={companyData.logo.width}
                height={companyData.logo.height}
                border="0"
                style={{
                  width: `${companyData.logo.width}px`,
                  height: `${companyData.logo.height}px`,
                  objectFit: 'contain',
                  display: 'block',
                  border: 0
                }}
              />
            </a>
          </td>
        </tr>

        {/* Disclaimer */}
        <tr>
          <td style={{ ...SIGNATURE_STYLES.disclaimer }}>
            <p style={{ margin: 0 }}>{DISCLAIMER_TEXT}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
