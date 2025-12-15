import React from 'react';
import { COMPANY_LOGOS, COMPANY_WEBSITES, SIGNATURE_STYLES } from './constants/companyData';
import certificates from '../../assets/certificates.jpg';

const SignatureTable = ({ name, job, mobile, email }) => {
  const companyLogo = COMPANY_LOGOS['Beyond Traffic Management'];
  const companyWebsite = COMPANY_WEBSITES['Beyond Traffic Management'];

  return (
    <table
      className="signature-table"
      width={520}
      cellSpacing="0"
      cellPadding="0"
      style={{
        fontFamily: 'Tahoma,Helvetica,sans-serif',
        textAlign: 'left',
        color: 'rgb(0, 0, 0)',
        fontSize: '14px',
        lineHeight: '16px',
        width: '520px'
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
              <b>P:</b> {mobile}
            </td>
          </tr>
        )}
        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
            <b>E:</b> {email || "example@example.com.au"}
          </td>
        </tr>

        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
            {companyWebsite.label.split('<br />').map((url, index, array) => {
              const urlMatch = companyWebsite.url.split('<br />')[index];
              const href = urlMatch || url;
              return (
                <span key={index}>
                  <b style={{ opacity: index > 0 ? 0 : 1 }}>W:</b>{' '}
                  <a
                    href={href.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#000', textDecoration: 'none' }}
                  >
                    {url.trim()}
                  </a>
                  {index < array.length - 1 && <br />}
                </span>
              );
            })}
          </td>
        </tr>

        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
            <b>A:</b> Unit 1 56 Truganina Road MALAGA 6090
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
            <b>P:</b> PO BOX 1151 HILLARYS 6923
          </td>
        </tr>
        <tr>
          <td style={{ padding: '20px 0' }}>
            <img
              src={companyLogo.src}
              alt={companyLogo.alt}
              width={companyLogo.width}
              height={companyLogo.height}
              style={{
                width: `${companyLogo.width}px`,
                height: `${companyLogo.height}px`,
                objectFit: 'contain',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
        </tr>

        <tr>
          <td style={{ paddingTop: '20px', padding: '4px 0' }}>
            <img
              src={certificates}
              alt="Certificates"
              style={{
                width: '100%',
                maxWidth: '420px',
                height: 'auto',
                display: 'block'
              }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.disclaimer, padding: '4px 0' }}>
            <br />
            Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
