import React from 'react';
import { COMPANY_LOGOS, COMPANY_WEBSITES, SIGNATURE_STYLES } from './constants/companyData';

const SignatureTable = ({ name, job, selectedCompanies, mobile, email }) => {
  const getCompanyLogo = (companyName) => {
    if (!companyName || companyName.trim() === '') {
      return null;
    }
    return COMPANY_LOGOS[companyName] || null;
  };

  const getCompanyWebsite = (companyName) => {
    if (!companyName || companyName.trim() === '') {
      return null;
    }
    return COMPANY_WEBSITES[companyName] || null;
  };

  // Get logos and websites for all selected companies
  const selectedLogos = selectedCompanies.map(company => getCompanyLogo(company)).filter(Boolean);
  const selectedWebsites = selectedCompanies.map(company => getCompanyWebsite(company)).filter(Boolean);

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

        {selectedWebsites.length > 0 && (
          <tr>
            <td style={SIGNATURE_STYLES.contact}>
              {selectedWebsites.map((website, index) => (
                <div key={index}>
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#000', textDecoration: 'none' }}
                  >
                    {website.label}
                  </a>
                  {index < selectedWebsites.length - 1 && <br />}
                </div>
              ))}
            </td>
          </tr>
        )}

        {selectedLogos.length > 0 && (
          <tr>
            <td style={{ paddingTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                {selectedLogos.map((logo, index) => (
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
                ))}
              </div>
            </td>
          </tr>
        )}
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
