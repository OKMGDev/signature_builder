import React from 'react';
import { COMPANY_LOGOS, COMPANY_WEBSITES, SIGNATURE_STYLES } from './constants/companyData';

const SignatureTable = ({ name, job, mobile, email }) => {
  // Always use Globe Metals & Mining logo
  const companyLogo = COMPANY_LOGOS['Globe Metals & Mining'];
  const companyWebsite = COMPANY_WEBSITES['Globe Metals & Mining'];

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
        width: '520px',
        borderRadius: 0
      }}
    >
      <tbody>
        <tr>
          <td style={SIGNATURE_STYLES.name}>
            {name || "Name"}
          </td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.job}>
            {job || "Job Title"}
          </td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.job}>
            Globe Metals & Mining Limited
            <br /><br />
          </td>
        </tr>

        {mobile && mobile.trim() !== '' && (
          <tr>
            <td style={SIGNATURE_STYLES.contact}>
              <a
                href={`tel:${mobile.replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#000', textDecoration: 'none' }}
              >
                <b>P:</b> {mobile}
              </a>
            </td>
          </tr>
        )}
        <tr>
          <td style={SIGNATURE_STYLES.contact}>
            <a
              href={`mailto:${email || "user@globemm.com"}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000', textDecoration: 'none' }}
            >
              <b>E:</b> {email || "user@globemm.com"}
            </a>
          </td>
        </tr>

        <tr>
          <td style={SIGNATURE_STYLES.contact}>
            <a
              href={companyWebsite.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000', textDecoration: 'none' }}
            >
              <b>W:</b> {companyWebsite.label}
            </a>
          </td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.contact}>
            <a
              href="https://maps.app.goo.gl/AiZeycC1cNbcNG2t5"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000', textDecoration: 'none' }}
            >
              <b>A:</b> 45 Ventnor Avenue West Perth, <br />
              <span style={{ paddingLeft: '17px' }}>Western Australia, 6005, Australia</span>
            </a>
          </td>
        </tr>

        <tr>
          <td style={{ paddingTop: '20px' }}>
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
          <td style={SIGNATURE_STYLES.disclaimer}>
            <br />
            Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.
          </td>
        </tr>
      </tbody>
    </table >
  );
};

export default SignatureTable;
