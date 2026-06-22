import React from 'react';
import COMPANIES, { SIGNATURE_STYLES } from './constants/companyData';
import { formatAustralianMobile, toTelHref } from './utils/signatureUtils';

const DISCLAIMER_TEXT =
  'Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.';

const LINK_STYLE = { color: '#000', textDecoration: 'none' };

const toMapsHref = (addressHtml) => {
  const plain = addressHtml.replace(/<br\s*\/?>/gi, ', ').replace(/<[^>]+>/g, '').trim();
  return plain ? `https://maps.google.com/?q=${encodeURIComponent(plain)}` : null;
};

const ContactLink = ({ href, children }) => {
  if (!href) return children;
  const opensInNewTab = href.startsWith('http');
  return (
    <a
      href={href}
      style={LINK_STYLE}
      {...(opensInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
};

const SignatureTable = ({ name, job, company, mobile, email }) => {
  const companyData = company && COMPANIES[company] ? COMPANIES[company] : COMPANIES['Aquatic Life Industries'];
  const mobileDisplay = mobile ? formatAustralianMobile(mobile) : '000 000 0000';
  const mobileHref = mobile ? toTelHref(mobile) : null;
  const companyPhoneHref = toTelHref(companyData.phone);
  const mapsHref = toMapsHref(companyData.address);

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
          <td style={{ ...SIGNATURE_STYLES.name, color: companyData.accent, paddingBottom: '4px' }}>{name || 'Name'}</td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.job, paddingBottom: '12px' }}>{job || 'Job Title'}</td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, paddingBottom: '6px' }}>
            <ContactLink href={mobileHref}>{mobileDisplay}</ContactLink>
          </td>
        </tr>
        {companyData.phone && (
          <tr>
            <td style={{ ...SIGNATURE_STYLES.contact, paddingBottom: '6px' }}>
              <ContactLink href={companyPhoneHref}>{companyData.phone}</ContactLink>
            </td>
          </tr>
        )}
        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, paddingBottom: '6px' }}>{email || 'example@example.com.au'}</td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, paddingBottom: '6px' }}>
            <ContactLink href={mapsHref}>
              <span dangerouslySetInnerHTML={{ __html: companyData.address }} />
            </ContactLink>
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, paddingBottom: '12px' }}>
            <a
              href={companyData.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={LINK_STYLE}
            >
              {companyData.website}
            </a>
          </td>
        </tr>
        {companyData.logo && (
          <tr>
            <td style={{ paddingBottom: '12px' }}>
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
          <td style={{ ...SIGNATURE_STYLES.disclaimer }}>
            <p style={{ margin: 0 }}>{DISCLAIMER_TEXT}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
