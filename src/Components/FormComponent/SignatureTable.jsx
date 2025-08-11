import React from 'react';
import { COMPANY_LOGOS, COMPANY_WEBSITES, SIGNATURE_STYLES } from './constants/companyData';

const SignatureTable = ({ name, job, company, mobile, email }) => {
  const getCompanyLogos = (companyNames) => {
    if (!Array.isArray(companyNames) || companyNames.length === 0) {
      return null;
    }

    const logos = companyNames.map(companyName => COMPANY_LOGOS[companyName]).filter(Boolean);

    if (logos.length === 0) return null;
    if (logos.length === 1) return logos[0];

    return {
      isMultiple: true,
      logos: logos
    };
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

        {companyLogos && (
          <tr>
            <td style={{ paddingTop: '10px' }}>
              {companyLogos.isMultiple ? (
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {companyLogos.logos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      style={{
                        width: `${logo.width}px`,
                        height: `${logo.height}px`,
                        objectFit: 'contain'
                      }}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={companyLogos.src}
                  alt={companyLogos.alt}
                  width={companyLogos.width}
                  height={companyLogos.height}
                  style={{
                    width: `${companyLogos.width}px`,
                    height: `${companyLogos.height}px`,
                    objectFit: 'contain'
                  }}
                />
              )}
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
