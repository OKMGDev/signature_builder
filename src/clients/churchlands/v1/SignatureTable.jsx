import React from 'react';
import COMPANY, { FONT, GOLD, INK, SIGNATURE_STYLES } from './constants/companyData';

// Every rule is inline: email clients drop <style> blocks and classes, so the
// copied markup has to carry its own styling.
const TABLE_RESET = { borderCollapse: 'collapse', borderSpacing: 0 };

const LOGO_LINK = {
  border: 0,
  outline: 'none',
  display: 'inline-block',
  lineHeight: 0,
  textDecoration: 'none'
};

const toTelHref = (phone) => {
  const digits = (phone || '').replace(/\D/g, '');
  if (!digits) return null;
  if (digits.startsWith('0')) return `tel:+61${digits.slice(1)}`;
  if (digits.startsWith('61')) return `tel:+${digits}`;
  return `tel:+${digits}`;
};

const ContactLink = ({ href, children }) => {
  if (!href) return <span style={SIGNATURE_STYLES.link}>{children}</span>;
  const opensInNewTab = href.startsWith('http');
  return (
    <a
      href={href}
      style={SIGNATURE_STYLES.link}
      {...(opensInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span style={{ color: INK }}>{children}</span>
    </a>
  );
};

const DetailRows = ({ rows }) => (
  <table cellPadding="0" cellSpacing="0" border="0" style={TABLE_RESET}>
    <tbody>
      {rows.map(([label, value]) => (
        <tr key={label}>
          <td valign="top" style={SIGNATURE_STYLES.metaLabel}>{label}</td>
          <td valign="top" style={SIGNATURE_STYLES.metaValue}>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const SignatureTable = ({ name, job, phone, email }) => {
  const { logo } = COMPANY;
  const phoneDisplay = (phone || '').trim();
  const emailDisplay = (email || '').trim();

  return (
    <table
      className="signature-table"
      cellPadding="0"
      cellSpacing="0"
      border="0"
      width={580}
      style={{
        ...TABLE_RESET,
        fontFamily: FONT,
        textAlign: 'left',
        color: INK,
        width: '580px',
        backgroundColor: '#ffffff'
      }}
    >
      <tbody>
        <tr>
          <td
            valign="top"
            width="230"
            style={{
              verticalAlign: 'top',
              width: '230px',
              padding: '0'
            }}
          >
            <a href={logo.href} target="_blank" rel="noopener noreferrer" style={LOGO_LINK}>
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                border="0"
                style={{
                  display: 'block',
                  width: `${logo.width}px`,
                  height: `${logo.height}px`,
                  border: 0
                }}
              />
            </a>
          </td>
          <td
            width="18"
            style={{ width: '18px', fontSize: '1px', lineHeight: '1px' }}
          >
            &nbsp;
          </td>
          <td
            valign="top"
            width="332"
            style={{
              verticalAlign: 'top',
              width: '332px'
            }}
          >
            <table cellPadding="0" cellSpacing="0" border="0" width="332" style={{ ...TABLE_RESET, width: '332px' }}>
              <tbody>
                <tr>
                  <td style={SIGNATURE_STYLES.name}>{name || 'Name'}</td>
                </tr>
                <tr>
                  <td style={SIGNATURE_STYLES.job}>{job || 'Job Title'}</td>
                </tr>
                {phoneDisplay && (
                  <tr>
                    <td style={SIGNATURE_STYLES.contact}>
                      <ContactLink href={toTelHref(phoneDisplay)}>{phoneDisplay}</ContactLink>
                    </td>
                  </tr>
                )}
                {emailDisplay && (
                  <tr>
                    <td style={SIGNATURE_STYLES.contact}>
                      <ContactLink href={emailDisplay.includes('@') ? `mailto:${emailDisplay}` : null}>
                        {emailDisplay}
                      </ContactLink>
                    </td>
                  </tr>
                )}
                <tr>
                  <td style={{ ...SIGNATURE_STYLES.contact, paddingBottom: '0' }}>
                    <ContactLink href={COMPANY.websiteUrl}>{COMPANY.website}</ContactLink>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: '8px', paddingBottom: '8px' }}>
                    <table cellPadding="0" cellSpacing="0" border="0" width="48" style={{ ...TABLE_RESET, width: '48px' }}>
                      <tbody>
                        <tr>
                          <td
                            width="48"
                            style={{
                              width: '48px',
                              borderTop: `1px solid ${GOLD}`,
                              fontSize: '1px',
                              lineHeight: '1px',
                              height: '1px'
                            }}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style={SIGNATURE_STYLES.tagline}>{COMPANY.tagline}</td>
                </tr>
                <tr>
                  <td>
                    <DetailRows rows={COMPANY.licenses} />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
