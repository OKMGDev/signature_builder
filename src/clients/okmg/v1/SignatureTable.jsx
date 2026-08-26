import React from 'react';
import { COMPANY_LOGOS, COMPANY_WEBSITES, SIGNATURE_STYLES } from './constants/companyData';

const SignatureTable = ({ name, job, mobile, email, meetingSchedule }) => {
  const companyLogo = COMPANY_LOGOS['OKMG'];
  const companyWebsite = COMPANY_WEBSITES['OKMG'];

  return (
    <table
      className="signature-table"
      width={520}
      cellSpacing="0"
      cellPadding="0"
      style={{
        fontFamily: 'Verdana,Helvetica,sans-serif',
        textAlign: 'left',
        color: 'rgb(0, 0, 0)',
        fontSize: '14px',
        lineHeight: '16px',
        width: '520px',
        borderRadius: 0
      }}
    >
      <tbody>
        <tr>
          {/* Left Column - Logo */}
          <td
            valign="top"
            width="200"
            style={{
              width: '180px',
              paddingRight: '40px',
              verticalAlign: 'middle'
            }}
          >
            <img
              src={companyLogo.src}
              alt={companyLogo.alt}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '180px',
                display: 'block'
              }}
            />
          </td>
          {/* Right Column - Contact Info */}
          <td
            valign="top"
            style={{
              verticalAlign: 'middle'
            }}
          >
            <table
              cellSpacing="0"
              cellPadding="0"
              style={{
                width: '100%',
                borderRadius: 0
              }}
            >
              <tbody>
                <tr>
                  <td style={{ ...SIGNATURE_STYLES.name, padding: '4px 0' }}>
                    {name || "Name"}
                  </td>
                </tr>
                <tr>
                  <td style={{ ...SIGNATURE_STYLES.job, padding: '4px 0' }}>
                    {job || "Job Title"}
                    <br /><br />
                  </td>
                </tr>
                {mobile && mobile.trim() !== '' && (
                  <tr>
                    <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
                      <b style={{ minWidth: '20px' }}>M:</b> <a href={`tel:${mobile.replace(/\s+/g, '')}`} style={{ color: '#000', textDecoration: 'none' }}>{mobile}</a>
                    </td>
                  </tr>
                )}
                <tr>
                  <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
                    <b style={{ minWidth: '20px' }}>P:</b>  <a style={{ color: '#000', textDecoration: 'none' }} href="tel:1300936564">1300 936 564</a>
                  </td>
                </tr>

                <tr>
                  <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
                    <b style={{ minWidth: '20px' }}>W:</b>  <a style={{ color: '#000', textDecoration: 'none' }} href={companyWebsite.url}>{companyWebsite.label}</a>
                  </td>
                </tr>
                <tr>
                  <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
                    <br />
                    <a
                      href="https://share.google/dRbVXRCFwx8Xb1eyI"
                      target="_blank" rel="noopener noreferrer"
                      style={{ color: '#000', textDecoration: 'underline' }}>Perth</a> - <a
                        href="https://maps.app.goo.gl/pEqCYLbRTdm5rfjq5"
                        target="_blank" rel="noopener noreferrer"
                        style={{ color: '#000', textDecoration: 'underline' }}>Melbourne</a>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
                    <a
                      href="https://www.linkedin.com/company/okmg/"
                      target="_blank" rel="noopener noreferrer"
                      style={{ color: '#000', textDecoration: 'underline' }}>LinkedIn</a> - <a
                        href="https://www.okmg.com/work"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#000', textDecoration: 'underline' }}>Our Work</a>
                  </td>
                </tr>
                {/* Meeting Schedule Link - only show if not empty */}
                {meetingSchedule && meetingSchedule.trim() !== '' && (
                  <tr>
                    <td
                      colSpan="2"
                      style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}
                    >
                      <a
                        href={meetingSchedule.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#000', textDecoration: 'underline' }}
                      >
                        Schedule a Meeting
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </td>
        </tr>

        {/* Disclaimer spanning both columns */}
        <tr>
          <td
            colSpan="2"
            style={{ ...SIGNATURE_STYLES.disclaimer, padding: '4px 0', paddingTop: '20px' }}
          >
            <br />
            Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;