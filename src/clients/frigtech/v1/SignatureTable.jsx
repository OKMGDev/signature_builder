import React from 'react';
import COMPANY, {
  EMAIL_FONT,
  FRIGTECH_GRAY,
  FRIGTECH_GREEN,
  FRIGTECH_NAVY,
  SIGNATURE_STYLES
} from './constants/companyData';
import { toTelHref } from './utils/signatureUtils';

const LINK_BASE = { fontFamily: EMAIL_FONT, fontSize: '14px' };
const CONTACT_LINK = { ...LINK_BASE, color: FRIGTECH_NAVY, textDecoration: 'none' };
const LOCATION_PRIMARY = { ...LINK_BASE, color: FRIGTECH_NAVY, textDecoration: 'underline' };
const LOCATION_OTHER = { ...LINK_BASE, color: FRIGTECH_GREEN, textDecoration: 'underline' };
const WEBSITE_LINK = { ...LINK_BASE, fontSize: '13px', color: FRIGTECH_NAVY, textDecoration: 'none' };
const PLACEHOLDER = { ...LINK_BASE, color: FRIGTECH_NAVY, fontStyle: 'normal' };
const LOGO_LINK = {
  border: 0,
  outline: 'none',
  display: 'inline-block',
  lineHeight: 0,
  textDecoration: 'none'
};

const SignatureTable = ({ name, job, phone, mobile, email }) => {
  const office = phone && phone.trim() ? phone.trim() : '';
  const cell = mobile && mobile.trim() ? mobile.trim() : '';
  const emailValue = email && email.trim() ? email.trim() : '';
  const emailPadding = office || cell ? '2px 0 2px 0' : '2px 0 12px 0';
  const officePadding = cell ? '2px 0 2px 0' : '2px 0 12px 0';

  return (
    <table
      className="signature-table"
      width={520}
      cellSpacing="0"
      cellPadding="0"
      border="0"
      style={{
        fontFamily: EMAIL_FONT,
        textAlign: 'left',
        color: FRIGTECH_NAVY,
        fontSize: '14px',
        lineHeight: '18px',
        width: '520px',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        borderRadius: 0
      }}
    >
      <tbody>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.name, padding: '0 0 4px 0' }}>{name || 'Name'}</td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.job, padding: '0 0 7px 0' }}>{job || 'Job Title'}</td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, padding: emailPadding }}>
            <span style={SIGNATURE_STYLES.contactLabel}>E:</span>{' '}
            {emailValue ? (
              <a href={`mailto:${emailValue}`} style={CONTACT_LINK}>{emailValue}</a>
            ) : (
              <span style={PLACEHOLDER}>{COMPANY.emailPlaceholder}</span>
            )}
          </td>
        </tr>
        {office ? (
          <tr>
            <td style={{ ...SIGNATURE_STYLES.contact, padding: officePadding }}>
              <span style={SIGNATURE_STYLES.contactLabel}>P:</span>{' '}
              <a href={toTelHref(office)} style={CONTACT_LINK}>{office}</a>
            </td>
          </tr>
        ) : null}
        {cell ? (
          <tr>
            <td style={{ ...SIGNATURE_STYLES.contact, padding: '2px 0 12px 0' }}>
              <span style={SIGNATURE_STYLES.contactLabel}>M:</span>{' '}
              <a href={toTelHref(cell)} style={CONTACT_LINK}>{cell}</a>
            </td>
          </tr>
        ) : null}
        <tr>
          <td style={{ padding: '0px 0 14px 0' }}>
            <table cellSpacing="0" cellPadding="0" border="0" style={{ borderCollapse: 'collapse', borderRadius: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: 'bottom', paddingRight: '14px' }}>
                    <a href={COMPANY.logo.href} target="_blank" rel="noopener noreferrer" style={LOGO_LINK}>
                      <img
                        src={COMPANY.logo.src}
                        alt={COMPANY.logo.alt}
                        width={COMPANY.logo.width}
                        border="0"
                        style={{
                          display: 'block',
                          width: `${COMPANY.logo.width}px`,
                          height: 'auto',
                          border: 0
                        }}
                      />
                    </a>
                  </td>
                  <td
                    height="100%"
                    style={{
                      verticalAlign: 'bottom',
                      padding: '0 13px',
                      width: '1px',
                      lineHeight: 0,
                      fontSize: 0
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        margin: '0 auto',
                        height: '60%',
                        minHeight: '36px',
                        borderLeft: '1px solid rgb(204, 204, 204)'
                      }}
                    />
                  </td>
                  <td style={{ verticalAlign: 'bottom', paddingLeft: '14px' }}>
                    <img
                      src={COMPANY.fridgair.src}
                      alt={COMPANY.fridgair.alt}
                      width={COMPANY.fridgair.width}
                      border="0"
                      style={{
                        display: 'block',
                        width: `${COMPANY.fridgair.width}px`,
                        height: 'auto',
                        border: 0
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.locations, padding: '0 0 8px 0' }}>
            {COMPANY.locations.map((location, index) => (
              <React.Fragment key={location.label}>
                {index > 0 && (
                  <span style={{ ...LINK_BASE, color: FRIGTECH_NAVY, margin: '0 6px', textDecoration: 'none' }}>|</span>
                )}
                <a
                  href={location.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={location.primary ? LOCATION_PRIMARY : LOCATION_OTHER}
                >
                  {location.label}
                </a>
              </React.Fragment>
            ))}
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.meta, padding: '0 0 16px 0' }}>
            {COMPANY.abn} |{' '}
            <a href={COMPANY.websiteUrl} target="_blank" rel="noopener noreferrer" style={WEBSITE_LINK}>
              {COMPANY.website}
            </a>
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.notice, padding: '0' }}>
            <strong style={{ fontFamily: EMAIL_FONT, fontSize: '11px', fontWeight: 'bold', color: FRIGTECH_GRAY }}>
              NOTICE:
            </strong>{' '}
            {COMPANY.notice}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
