import React from 'react';
import COMPANY, { FONT, INK, SIGNATURE_STYLES } from './constants/companyData';
import { toTelHref } from './utils/signatureUtils';

// Every rule is inline: email clients drop <style> blocks and classes, so the
// copied markup has to carry its own styling. bgcolor + backgroundColor are
// both set so dark-mode clients keep a white signature plate.
const TABLE_RESET = { borderCollapse: 'collapse', borderSpacing: 0 };
const WHITE = '#ffffff';
const CELL_WHITE = { backgroundColor: WHITE };

const LOGO_LINK = {
  border: 0,
  outline: 'none',
  display: 'inline-block',
  lineHeight: 0,
  textDecoration: 'none',
  backgroundColor: WHITE
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

const SignatureTable = ({ name, phone }) => {
  const { logo, divider } = COMPANY;
  const phoneDisplay = (phone || '').trim();

  return (
    <table
      className="signature-table"
      cellPadding="0"
      cellSpacing="0"
      border="0"
      width={400}
      bgcolor={WHITE}
      style={{
        ...TABLE_RESET,
        fontFamily: FONT,
        textAlign: 'left',
        color: INK,
        width: '400px',
        maxWidth: '400px',
        backgroundColor: WHITE
      }}
    >
      <tbody>
        <tr>
          <td
            valign="top"
            width="132"
            bgcolor={WHITE}
            style={{ ...CELL_WHITE, verticalAlign: 'top', width: '132px', padding: '8px 0 8px 8px' }}
          >
            <table
              cellPadding="0"
              cellSpacing="0"
              border="0"
              width="132"
              bgcolor={WHITE}
              style={{ ...TABLE_RESET, ...CELL_WHITE, width: '132px' }}
            >
              <tbody>
                <tr>
                  <td bgcolor={WHITE} style={{ ...CELL_WHITE, padding: '0 0 18px 0' }}>
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
                          border: 0,
                          backgroundColor: WHITE
                        }}
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td
                    bgcolor={WHITE}
                    style={{ ...CELL_WHITE, padding: '0 0 18px 0', lineHeight: 0, fontSize: 0 }}
                  >
                    <img
                      src={divider.src}
                      alt={divider.alt}
                      width={divider.width}
                      height={divider.height}
                      border="0"
                      style={{
                        display: 'block',
                        width: `${divider.width}px`,
                        height: `${divider.height}px`,
                        border: 0,
                        backgroundColor: WHITE
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td bgcolor={WHITE} style={{ ...SIGNATURE_STYLES.tagline, ...CELL_WHITE }}>
                    TRUSTED FINANCIAL
                    <br />
                    ADVICE SINCE 1979
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td
            width="40"
            bgcolor={WHITE}
            style={{ ...CELL_WHITE, width: '40px', fontSize: '1px', lineHeight: '1px' }}
          >
            &nbsp;
          </td>
          <td
            valign="top"
            width="220"
            bgcolor={WHITE}
            style={{
              ...CELL_WHITE,
              verticalAlign: 'top',
              width: '220px',
              padding: '14px 8px 8px 0',
              whiteSpace: 'nowrap'
            }}
          >
            <table
              cellPadding="0"
              cellSpacing="0"
              border="0"
              width="220"
              bgcolor={WHITE}
              style={{ ...TABLE_RESET, ...CELL_WHITE, width: '220px' }}
            >
              <tbody>
                <tr>
                  <td
                    bgcolor={WHITE}
                    style={{
                      ...SIGNATURE_STYLES.name,
                      ...CELL_WHITE,
                      paddingBottom: '25px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {name || 'Name'}
                  </td>
                </tr>
                {phoneDisplay ? (
                  <tr>
                    <td
                      bgcolor={WHITE}
                      style={{
                        ...SIGNATURE_STYLES.contact,
                        ...CELL_WHITE,
                        paddingBottom: '3px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <ContactLink href={toTelHref(phoneDisplay)}>{phoneDisplay}</ContactLink>
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td
                    bgcolor={WHITE}
                    style={{ ...SIGNATURE_STYLES.contact, ...CELL_WHITE, whiteSpace: 'nowrap' }}
                  >
                    <ContactLink href={COMPANY.websiteUrl}>{COMPANY.website}</ContactLink>
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
