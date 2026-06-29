import React from 'react';
import COMPANIES, { BRAND_LOGOS, SIGNATURE_FONT_SIZE, SIGNATURE_STYLES } from './constants/companyData';
import { formatAustralianMobile, toTelHref } from './utils/signatureUtils';

const DISCLAIMER_TEXT =
  'Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.';

const BLACK_LINK = { color: '#000', textDecoration: 'none' };

const toMapsHref = (addressHtml) => {
  const plain = addressHtml.replace(/<br\s*\/?>/gi, ', ').replace(/<[^>]+>/g, '').trim();
  return plain ? `https://maps.google.com/?q=${encodeURIComponent(plain)}` : null;
};

const ContactLink = ({ href, style, children }) => {
  if (!href) return <span style={style}>{children}</span>;
  const opensInNewTab = href.startsWith('http');
  return (
    <a
      href={href}
      style={style}
      {...(opensInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
};

const ContactRow = ({ label, children }) => (
  <tr>
    <td
      valign="top"
      style={{ ...SIGNATURE_STYLES.contactLabel, width: '24px', paddingBottom: '5px' }}
    >
      {label}
    </td>
    <td style={{ ...SIGNATURE_STYLES.contact, paddingBottom: '5px' }}>{children}</td>
  </tr>
);

const SignatureTable = ({ name, job, company, mobile, email }) => {
  const companyData = company && COMPANIES[company] ? COMPANIES[company] : COMPANIES['Aquatic Life Industries'];
  const mobileDisplay = mobile ? formatAustralianMobile(mobile) : '0000 000 000';
  const mobileHref = mobile ? toTelHref(mobile) : null;
  const companyPhoneHref = toTelHref(companyData.phone);
  const mapsHref = toMapsHref(companyData.address);

  const partnerRowLogos = [companyData.partnerLogo, ...BRAND_LOGOS];

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
        fontSize: SIGNATURE_FONT_SIZE,
        lineHeight: '16px',
        width: '520px'
      }}
    >
      <tbody>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.name, color: companyData.accent, paddingBottom: '2px' }}>{name || 'Name'}</td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.job, paddingBottom: '28px' }}>{job || 'Job Title'}</td>
        </tr>

        {/* Contact details */}
        <tr>
          <td style={{ paddingBottom: '28px' }}>
            <table cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse' }}>
              <tbody>
                <ContactRow label="M">
                  <ContactLink href={mobileHref} style={BLACK_LINK}>{mobileDisplay}</ContactLink>
                </ContactRow>
                {companyData.phone && (
                  <ContactRow label="T">
                    <ContactLink href={companyPhoneHref} style={BLACK_LINK}>{companyData.phone}</ContactLink>
                  </ContactRow>
                )}
                <ContactRow label="E">
                  <span style={BLACK_LINK}>{email || 'example@example.com.au'}</span>
                </ContactRow>
                <ContactRow label="A">
                  <ContactLink href={mapsHref} style={BLACK_LINK}>
                    <span dangerouslySetInnerHTML={{ __html: companyData.address }} />
                  </ContactLink>
                </ContactRow>
                <ContactRow label="W">
                  <ContactLink href={companyData.websiteUrl} style={BLACK_LINK}>{companyData.website}</ContactLink>
                </ContactRow>
              </tbody>
            </table>
          </td>
        </tr>

        {/* Primary (selected company) logo */}
        <tr>
          <td style={{ paddingBottom: '32px' }}>
            <img
              src={companyData.logo.src}
              alt={companyData.logo.alt}
              width={companyData.logo.width}
              height={companyData.logo.height}
              style={{
                width: `${companyData.logo.width}px`,
                height: `${companyData.logo.height}px`,
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </td>
        </tr>

        {/* Partner company + brand logos */}
        <tr>
          <td style={{ borderTop: '1px solid #e2e2e2', borderBottom: '1px solid #e2e2e2', paddingTop: '28px', paddingBottom: '28px' }}>
            <table cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  {partnerRowLogos.map((logo, index) => (
                    <td
                      key={logo.src}
                      valign="middle"
                      style={{ paddingRight: index === partnerRowLogos.length - 1 ? 0 : '26px' }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        style={{
                          width: `${logo.width}px`,
                          height: `${logo.height}px`,
                          objectFit: 'contain',
                          display: 'block'
                        }}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td style={{ ...SIGNATURE_STYLES.disclaimer, paddingTop: '18px' }}>
            <p style={{ margin: 0 }}>{DISCLAIMER_TEXT}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
