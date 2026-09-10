import React from 'react';
import COMPANY, { BODY_FONT, SIGNATURE_STYLES } from './constants/companyData';

// Every rule is inline: email clients drop <style> blocks and classes, so the
// copied markup has to carry its own styling.
const TABLE_RESET = { borderCollapse: 'collapse', borderSpacing: 0, borderRadius: 0 };

const LOGO_LINK = {
  border: 0,
  outline: 'none',
  display: 'inline-block',
  lineHeight: 0,
  textDecoration: 'none'
};

const SignatureTable = ({ name, job }) => {
  const { logo, socials, socialIconSize } = COMPANY;

  return (
    <table
      className="signature-table"
      cellPadding="0"
      cellSpacing="0"
      border="0"
      width={600}
      style={{
        ...TABLE_RESET,
        fontFamily: BODY_FONT,
        textAlign: 'left',
        width: '600px'
      }}
    >
      <tbody>
        <tr>
          <td
            valign="top"
            width="230"
            style={{ verticalAlign: 'top', width: '230px', paddingRight: '0px' }}
          >
            <div style={SIGNATURE_STYLES.name}>{name || 'Name'}</div>
            <div style={SIGNATURE_STYLES.job}>{job || 'Job Title'}</div>
          </td>
          <td
            valign="top"
            width="340"
            style={{ verticalAlign: 'top', width: '340px', paddingLeft: '0px' }}
          >
            <div style={SIGNATURE_STYLES.phone}>{COMPANY.phone}</div>
            <div style={SIGNATURE_STYLES.address}>
              {COMPANY.addressLines.map((line, index) => (
                <React.Fragment key={line}>
                  {index > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </div>
            <div style={SIGNATURE_STYLES.abn}>{COMPANY.abn}</div>
          </td>
        </tr>
        <tr>
          <td
            valign="bottom"
            width="230"
            style={{ verticalAlign: 'bottom', width: '230px', paddingRight: '0px' }}
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
            valign="bottom"
            width="340"
            style={{ verticalAlign: 'bottom', width: '340px', paddingLeft: '0px' }}
          >
            <table
              cellPadding="0"
              cellSpacing="0"
              border="0"
              style={{ ...TABLE_RESET, marginBottom: '14px' }}
            >
              <tbody>
                <tr>
                  <td bgcolor={SIGNATURE_STYLES.websiteButtonCell.backgroundColor} style={SIGNATURE_STYLES.websiteButtonCell}>
                    <a
                      href={COMPANY.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={SIGNATURE_STYLES.websiteButtonLink}
                    >
                      {COMPANY.website}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <table cellPadding="0" cellSpacing="0" border="0" style={TABLE_RESET}>
              <tbody>
                <tr>
                  {socials.map((social, index) => (
                    <td
                      key={social.alt}
                      style={{
                        paddingRight: index === socials.length - 1 ? '0px' : '6px'
                      }}
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={LOGO_LINK}
                      >
                        <img
                          src={social.src}
                          alt={social.alt}
                          width={socialIconSize}
                          height={socialIconSize}
                          border="0"
                          style={{
                            display: 'block',
                            width: `${socialIconSize}px`,
                            height: `${socialIconSize}px`,
                            border: 0
                          }}
                        />
                      </a>
                    </td>
                  ))}
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
