import React from 'react';
import COMPANIES, { SOCIAL_MEDIA_LOGOS } from './constants/companyData';

const SignatureTable = ({ name, job, company, mobile, email }) => {
  // Get company data or use Aquatic Life Industries as default
  const companyData = company && COMPANIES[company] ? COMPANIES[company] : COMPANIES['Aquatic Life Industries'];

  return (
    <table
      className='signature-table'
      width={400}
      style={{
        fontFamily: '"Times New Roman"',
        width: '400',
        minWidth: '400',
        fontFamily: '"Courier New",Courier,monospace,arial,sans-serif',
        marginTop: '0px',
        marginBottom: '0px',
        whiteSpace: 'pre-wrap',
        color: 'rgb(0,0,0)',
        fontSize: '14px',
        textAlign: 'left',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>
      <tbody>
        <tr>
          <td colSpan="2" style={{ borderTop: `1px solid ${companyData.colors.primary}`, borderBottom: `1px solid ${companyData.colors.primary}`, paddingTop: '12px', paddingBottom: '12px' }}>
            <div style={{ fontFamily: 'Arial', fontSize: '11px', color: companyData.colors.primary, lineHeight: '16px' }}>
              <b>{name || 'Your Name'}</b>
            </div>
            <div style={{ fontFamily: 'Arial', fontSize: '11px', color: companyData.colors.secondary, lineHeight: '16px' }}>{job || 'Your Job Title'}</div>
            <div style={{ fontFamily: 'Arial', fontSize: '11px', color: companyData.colors.secondary, lineHeight: '16px' }}>{mobile || 'Your Mobile Number'}</div>
            <div style={{ fontFamily: 'Arial', fontSize: '11px', color: companyData.colors.secondary, lineHeight: '16px' }}>{email || 'your.email@company.com'}</div>
          </td>
        </tr>
        <tr >
          <td style={{
            paddingTop: '10px', paddingBottom: '10px', fontFamily: 'Arial', fontSize: '11px', color: companyData.colors.secondary, minWidth: companyData.logo.width, minHeight: companyData.logo.height
          }}>
            {companyData.logo ? (
              <img
                src={companyData.logo.src}
                alt={companyData.logo.alt}
                width={companyData.logo.width}
                height={companyData.logo.height}
                style={{
                  width: `${companyData.logo.width}px`,
                  height: `${companyData.logo.height}px`,
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            ) : (
              <div></div>
            )}
          </td>
          <td style={{ alignContent: 'center', paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', fontFamily: 'Arial', fontSize: '11px', color: companyData.colors.secondary, width: '190px', minWidth: '190px', whiteSpace: 'nowrap' }}>
            {companyData.tagline}<br />
            <a href={`http://${companyData.website}/`} style={{ color: companyData.colors.primary, whiteSpace: 'nowrap' }} target="_blank" rel="noopener noreferrer">{companyData.website}</a>
          </td>
        </tr>

      </tbody>
    </table >
  );
};

export default SignatureTable;