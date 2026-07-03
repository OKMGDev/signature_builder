import React from 'react';
import { COMPANY_LOGOS, COMPANY_DETAILS, DISCLAIMER_TEXT, SIGNATURE_STYLES } from './constants/companyData';

const LINK_STYLE = { color: '#000000', textDecoration: 'none' };

// Base table-cell styling kept inline so the copied signature renders
// correctly in email clients (Gmail, Outlook, Apple Mail) without external CSS.
const cell = (extra = {}) => ({ padding: '2px 0', verticalAlign: 'top', ...extra });
const LABEL_STYLE = cell({ ...SIGNATURE_STYLES.contact, fontWeight: 'bold', paddingRight: '6px', whiteSpace: 'nowrap' });

const SignatureTable = ({ name, job, mobile, email }) => {
  const companyLogo = COMPANY_LOGOS['Pure Leasing'];
  const company = COMPANY_DETAILS['Pure Leasing'];
  const hasMobile = mobile && mobile.trim() !== '';
  const emailValue = email || 'example@pureleasing.com.au';

  return (
    <table
      className="signature-table"
      width={520}
      border={0}
      cellSpacing="0"
      cellPadding="0"
      style={{
        fontFamily: 'Tahoma,Helvetica,Arial,sans-serif',
        textAlign: 'left',
        color: '#000000',
        fontSize: '14px',
        lineHeight: '16px',
        width: '520px',
        borderCollapse: 'collapse'
      }}
    >
      <tbody>
        <tr>
          <td style={cell(SIGNATURE_STYLES.name)}>{name || 'Name'}</td>
        </tr>
        <tr>
          <td style={cell(SIGNATURE_STYLES.job)}>
            {job || 'Job Title'}
            <br /><br />
          </td>
        </tr>

        <tr>
          <td style={cell()}>
            <table border={0} cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse' }}>
              <tbody>
                {hasMobile && (
                  <tr>
                    <td valign="top" style={LABEL_STYLE}>M:</td>
                    <td valign="top" style={cell(SIGNATURE_STYLES.contact)}>{mobile}</td>
                  </tr>
                )}
                <tr>
                  <td valign="top" style={LABEL_STYLE}>P:</td>
                  <td valign="top" style={cell(SIGNATURE_STYLES.contact)}>
                    <a href={`tel:${company.phone.replace(/\s+/g, '')}`} style={LINK_STYLE}>{company.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style={LABEL_STYLE}>E:</td>
                  <td valign="top" style={cell(SIGNATURE_STYLES.contact)}>
                    <a href={`mailto:${emailValue}`} style={LINK_STYLE}>{emailValue}</a>
                  </td>
                </tr>
                <tr>
                  <td valign="top" style={LABEL_STYLE}>A:</td>
                  <td valign="top" style={cell(SIGNATURE_STYLES.contact)}>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(company.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={LINK_STYLE}
                    >
                      {company.address}
                    </a>
                    <br />
                    {company.postal}
                  </td>
                </tr>
                <tr>
                  <td valign="top" style={LABEL_STYLE}>W:</td>
                  <td valign="top" style={cell(SIGNATURE_STYLES.contact)}>
                    <a
                      href={company.website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={LINK_STYLE}
                    >
                      {company.website.label}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td style={cell({ paddingTop: '20px' })}>
            <img
              src={companyLogo.src}
              alt={companyLogo.alt}
              width={companyLogo.width}
              height={companyLogo.height}
              border={0}
              style={{
                width: `${companyLogo.width}px`,
                height: `${companyLogo.height}px`,
                display: 'block',
                border: '0',
                outline: 'none',
                textDecoration: 'none'
              }}
            />
          </td>
        </tr>
        <tr>
          <td style={cell(SIGNATURE_STYLES.disclaimer)}>
            <br />
            {DISCLAIMER_TEXT}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
