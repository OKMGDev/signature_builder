import React from 'react';
import COMPANY, { RULE_COLOR, SIGNATURE_STYLES } from './constants/companyData';
import { toTelHref } from './utils/signatureUtils';

const TABLE_RESET = { borderCollapse: 'collapse', borderSpacing: '0' };

const ContactRow = ({ label, href, children }) => (
  <tr>
    <td valign="top" width="20" style={{ ...SIGNATURE_STYLES.contactLabel, width: '20px' }}>
      {label}
    </td>
    <td valign="top" style={SIGNATURE_STYLES.contact}>
      <a href={href} style={{ ...SIGNATURE_STYLES.contact, textDecoration: 'none' }}>
        {children}
      </a>
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
      width="420"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      style={{
        ...TABLE_RESET,
        color: '#111111',
        fontFamily: 'Arial, Helvetica, sans-serif',
        textAlign: 'left',
        width: '420px'
      }}
    >
      <tbody>
        <tr>
          <td style={SIGNATURE_STYLES.name}>{name || 'Your Name'}</td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.job, paddingBottom: '10px' }}>
            {job || 'Job Title'}
          </td>
        </tr>

        <tr>
          <td style={{ paddingBottom: '6px' }}>
            <table role="presentation" border="0" cellPadding="0" cellSpacing="0" style={TABLE_RESET}>
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
        </tr>

        <tr>
          <td style={{ paddingBottom: '5px' }}>
            <table role="presentation" border="0" cellPadding="0" cellSpacing="0" style={TABLE_RESET}>
              <tbody>
                <tr>
                  <td valign="bottom" style={{ paddingRight: '40px' }}>
                    <Logo logo={COMPANY.logos.harvestRoad} />
                  </td>
                  <td
                    valign="bottom"
                    style={{ borderLeft: `1px solid ${RULE_COLOR}`, paddingLeft: '20px' }}
                  >
                    <table role="presentation" border="0" cellPadding="0" cellSpacing="0" style={TABLE_RESET}>
                      <tbody>
                        <tr>
                          <td colSpan="2" style={SIGNATURE_STYLES.ourBrands}>
                            Our Brands
                          </td>
                        </tr>
                        <tr>
                          <td valign="bottom" style={{ paddingRight: '34px' }}>
                            <Logo logo={COMPANY.logos.leeuwinCoast} />
                          </td>
                          <td valign="bottom">
                            <Logo logo={COMPANY.logos.harveyBeef} />
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
          <td style={{ ...SIGNATURE_STYLES.meta, paddingBottom: '5px' }}>
            <a href={COMPANY.websiteUrl} style={SIGNATURE_STYLES.websiteLink}>
              {COMPANY.website}
            </a>
            <span style={SIGNATURE_STYLES.meta}>{` | ${COMPANY.address}`}</span>
          </td>
        </tr>

        <tr>
          <td style={SIGNATURE_STYLES.disclaimer}>{COMPANY.disclaimer}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
