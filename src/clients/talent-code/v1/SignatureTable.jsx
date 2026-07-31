import React from 'react';
import COMPANY, { SIGNATURE_STYLES } from './constants/companyData';
import {
  formatAustralianMobile,
  normalizeAustralianMobileDigits,
  toTelHref
} from './utils/signatureUtils';

const linkStyle = {
  color: '#133d5c',
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
      <a href={href} style={linkStyle}>{children}</a>
    </td>
  </tr>
);

const SignatureTable = ({ name, job, job2, mobile, email }) => {
  const mobileDigits = mobile ? normalizeAustralianMobileDigits(mobile) : '';
  const mobileDisplay = mobileDigits ? formatAustralianMobile(mobile) : '0000 000 000';
  const emailDisplay = email || 'name@thetalentcode.com.au';
  const jobLine1 = job || (job2 ? '' : 'Next Step Tennis Academy Coach');
  const jobLine2 = job2 || (job ? '' : 'TA Junior Development Coach');
  const showJobLine1 = Boolean(jobLine1);
  const showJobLine2 = Boolean(jobLine2);

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
        color: '#133d5c',
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
              style={{ borderCollapse: 'collapse', borderSpacing: '0' }}
            >
              <tbody>
                <tr>
                  <td style={SIGNATURE_STYLES.name}>{name || 'Name'}</td>
                </tr>
                {showJobLine1 && (
                  <tr>
                    <td style={{
                      ...SIGNATURE_STYLES.job,
                      paddingBottom: showJobLine2 ? '0' : '16px'
                    }}>
                      {jobLine1}
                    </td>
                  </tr>
                )}
                {showJobLine2 && (
                  <tr>
                    <td style={{ ...SIGNATURE_STYLES.job, paddingBottom: '16px' }}>
                      {jobLine2}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <table
              role="presentation"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              style={{ borderCollapse: 'collapse', borderSpacing: '0' }}
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
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: '20px' }}>
            <table
              role="presentation"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              style={{ borderCollapse: 'collapse', borderSpacing: '0' }}
            >
              <tbody>
                <tr>
                  <td valign="middle" style={{ paddingRight: '18px' }}>
                    <a
                      href={COMPANY.logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
                  <td
                    valign="middle"
                    style={{
                      borderLeft: `2px solid ${COMPANY.accent}`,
                      color: '#567186',
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.2px',
                      lineHeight: '16px',
                      paddingLeft: '18px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Talent is the spark.<br />
                    The Code is you.
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '11px',
            lineHeight: '16px',
            paddingTop: '18px'
          }}>
            {COMPANY.socials.map((social, index) => (
              <React.Fragment key={social.name}>
                {index > 0 && <span style={{ color: COMPANY.accent }}> &nbsp;|&nbsp; </span>}
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#133d5c',
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
      </tbody>
    </table>
  );
};

export default SignatureTable;
