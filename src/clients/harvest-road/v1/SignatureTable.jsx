import React from 'react';
import COMPANY from './constants/companyData';
import { toTelHref } from './utils/signatureUtils';

const FONT = 'Arial, Helvetica, sans-serif';
const TABLE_STYLE = { borderCollapse: 'collapse', borderSpacing: '0' };

const Link = ({ href, children, style = {} }) => (
  <a
    href={href}
    style={{
      color: COMPANY.accent,
      fontFamily: FONT,
      textDecoration: 'none',
      ...style
    }}
  >
    {children}
  </a>
);

const ContactRow = ({ label, href, children }) => (
  <tr>
    <td
      valign="top"
      style={{
        color: COMPANY.accent,
        fontFamily: FONT,
        fontSize: '11px',
        fontWeight: 'bold',
        lineHeight: '17px',
        padding: '0 8px 2px 0'
      }}
    >
      {label}
    </td>
    <td
      valign="top"
      style={{
        color: COMPANY.text,
        fontFamily: FONT,
        fontSize: '11px',
        lineHeight: '17px',
        paddingBottom: '2px'
      }}
    >
      <Link href={href} style={{ color: COMPANY.text }}>{children}</Link>
    </td>
  </tr>
);

const Logo = ({ logo }) => (
  <a
    href={logo.href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ border: 0, display: 'inline-block', lineHeight: 0, textDecoration: 'none' }}
  >
    <img
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      border="0"
      style={{
        border: 0,
        display: 'block',
        height: `${logo.height}px`,
        width: `${logo.width}px`
      }}
    />
  </a>
);

const SignatureTable = ({ name, job, mobile, phone, email }) => {
  const mobileDisplay = mobile || '+61 4 0000 0000';
  const phoneDisplay = phone || '+61 8 0000 0000';
  const emailDisplay = email || 'name@harvestroad.com';

  return (
    <table
      className="signature-table"
      role="presentation"
      width="600"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      style={{
        ...TABLE_STYLE,
        color: COMPANY.text,
        fontFamily: FONT,
        textAlign: 'left',
        width: '600px'
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              color: COMPANY.text,
              fontFamily: FONT,
              fontSize: '18px',
              fontWeight: 'bold',
              lineHeight: '22px'
            }}
          >
            {name || 'Name'}
          </td>
        </tr>
        <tr>
          <td
            style={{
              color: COMPANY.muted,
              fontFamily: FONT,
              fontSize: '12px',
              lineHeight: '18px',
              paddingBottom: '16px'
            }}
          >
            {job || 'Job Title'}
          </td>
        </tr>
        <tr>
          <td style={{ borderTop: `2px solid ${COMPANY.accent}`, paddingTop: '16px' }}>
            <table
              role="presentation"
              width="600"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              style={{ ...TABLE_STYLE, width: '600px' }}
            >
              <tbody>
                <tr>
                  <td valign="top" width="240" style={{ paddingRight: '28px', width: '240px' }}>
                    <table
                      role="presentation"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      style={TABLE_STYLE}
                    >
                      <tbody>
                        <ContactRow label="M" href={toTelHref(mobileDisplay)}>
                          {mobileDisplay}
                        </ContactRow>
                        <ContactRow label="P" href={toTelHref(phoneDisplay)}>
                          {phoneDisplay}
                        </ContactRow>
                        <ContactRow label="E" href={`mailto:${emailDisplay}`}>
                          {emailDisplay}
                        </ContactRow>
                      </tbody>
                    </table>
                  </td>
                  <td
                    valign="top"
                    width="332"
                    style={{
                      color: COMPANY.text,
                      fontFamily: FONT,
                      fontSize: '11px',
                      lineHeight: '17px',
                      width: '332px'
                    }}
                  >
                    <div style={{ fontFamily: FONT }}>{COMPANY.address}</div>
                    <div style={{ fontFamily: FONT }}>{COMPANY.postalAddress}</div>
                    <div style={{ fontFamily: FONT, fontWeight: 'bold', paddingTop: '2px' }}>
                      <Link href={COMPANY.websiteUrl}>{COMPANY.website}</Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: '22px' }}>
            <table
              role="presentation"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              style={TABLE_STYLE}
            >
              <tbody>
                <tr>
                  <td valign="middle" style={{ paddingRight: '24px' }}>
                    <Logo logo={COMPANY.logos.harvestRoad} />
                  </td>
                  <td
                    valign="middle"
                    style={{
                      borderLeft: '1px solid #b7bec7',
                      paddingLeft: '24px'
                    }}
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      style={TABLE_STYLE}
                    >
                      <tbody>
                        <tr>
                          <td valign="middle" style={{ paddingRight: '18px' }}>
                            <Logo logo={COMPANY.logos.harveyBeef} />
                          </td>
                          <td valign="middle">
                            <Logo logo={COMPANY.logos.leeuwinCoast} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td
            style={{
              color: COMPANY.muted,
              fontFamily: FONT,
              fontSize: '9px',
              fontStyle: 'italic',
              lineHeight: '13px',
              paddingTop: '20px'
            }}
          >
            Please consider the environment before printing this email.
          </td>
        </tr>
        <tr>
          <td
            style={{
              color: '#7a7f86',
              fontFamily: FONT,
              fontSize: '8px',
              fontStyle: 'italic',
              lineHeight: '12px',
              paddingTop: '10px'
            }}
          >
            This email and any attachments may contain confidential information and may be subject
            to legal professional privilege. If you are not the intended recipient, please notify
            the sender and delete this email.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
