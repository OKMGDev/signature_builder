import React from 'react';
import COMPANIES, { SIGNATURE_STYLES } from './constants/companyData';

const DISCLAIMER_TEXT =
  'This email may contain confidential or privileged information or intellectual property, including material belonging to third parties. Any disclosure, copying, distribution or reliance upon the contents of this email is prohibited unless agreed in writing and signed by an authorised Director. If you have received the email in error, please inform the sender and delete it. ';

const ACKNOWLEDGEMENT_TEXT =
  'ALI acknowledges the Traditional Custodians of the land and sea upon which we operate and pays our respects to Elders past and present.';

const SignatureTable = ({ name, job, company, mobile, email }) => {
  const companyData = company && COMPANIES[company] ? COMPANIES[company] : COMPANIES['Aquatic Life Industries'];

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
          <td style={SIGNATURE_STYLES.name}>{name || 'Name'}</td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.job}>
            {job || 'Job Title'}
            <br />
            <br />
          </td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.contact}>{mobile || '000 000 0000'}</td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.contact}>{companyData.phone}</td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.contact}>{email || 'example@example.com.au'}</td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.contact}>
            <span dangerouslySetInnerHTML={{ __html: companyData.address }} />
          </td>
        </tr>
        <tr>
          <td style={SIGNATURE_STYLES.contact}>
            <a
              href={companyData.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000', textDecoration: 'none' }}
            >
              {companyData.website}
            </a>
          </td>
        </tr>
        {companyData.logo && (
          <tr>
            <td style={{ paddingTop: '10px' }}>
              <img
                src={companyData.logo.src}
                alt={companyData.logo.alt}
                width={companyData.logo.width}
                height={companyData.logo.height}
                style={{
                  width: `${companyData.logo.width}px`,
                  height: `${companyData.logo.height}px`,
                  objectFit: 'contain',
                  display: 'inline-block',
                  verticalAlign: 'middle'
                }}
              />
            </td>
          </tr>
        )}
        <tr>
          <td style={SIGNATURE_STYLES.disclaimer}>
            <br />
            <p>{DISCLAIMER_TEXT}</p>
            <p>{ACKNOWLEDGEMENT_TEXT}</p>
            {'          '}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
