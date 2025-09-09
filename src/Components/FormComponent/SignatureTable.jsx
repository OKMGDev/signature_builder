import React from 'react';
import { COMPANY_LOGOS, COMPANY_WEBSITES, SIGNATURE_STYLES } from './constants/companyData';

const SignatureTable = ({ name, job, company, mobile, email }) => {
  const getCompanyLogos = (companyName) => {
    if (!companyName || companyName.trim() === '') {
      return [];
    }

    const logo = COMPANY_LOGOS[companyName];
    return logo ? [logo] : [];
  };

  const companyLogos = getCompanyLogos(company);

  return (
    <table
      className="signature-table"
      width={520}
      cellSpacing="0"
      cellPadding="0"
      style={{
        fontFamily: 'Arial,Helvetica,sans-serif',
        textAlign: 'left',
        color: 'rgb(0, 0, 0)',
        fontSize: '14px',
        lineHeight: '16px',
        width: '520px'
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
            <br /><br />
          </td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.contact}>
            {mobile || "0000 00 0000"}
          </td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.contact}>
            {email || "example@example.com.au"}
          </td>
        </tr>

        {companyLogos.length > 0 && (
          <tr>
            <td style={{ paddingTop: '10px' }}>
              {companyLogos.map((logo, index) => (
                <span key={index}>
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    style={{
                      width: `${logo.width}px`,
                      height: `${logo.height}px`,
                      objectFit: 'contain',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                    }}
                  />
                  &nbsp; &nbsp;
                </span>
              ))}
            </td>
          </tr>
        )}

        {COMPANY_WEBSITES.map((website, index) => (
          <tr key={index}>
            <td style={SIGNATURE_STYLES.contact}>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#000', textDecoration: 'none' }}
              >
                {index === 0 && <br />}
                {website.label}
              </a>
            </td>
          </tr>
        ))}
        <tr>
          <td style={SIGNATURE_STYLES.disclaimer}>
            <br />
            Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
