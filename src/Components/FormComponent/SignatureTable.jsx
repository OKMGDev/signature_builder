import React from 'react';
import COMPANIES, {
  BRAND_LOGOS,
  DETAIL_GRAY,
  SIGNATURE_STYLES
} from './constants/companyData';
import { formatAustralianMobile, toTelHref } from './utils/signatureUtils';

const DISCLAIMER_TEXT =
  'Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.';

const MOBILE_LINK = { color: '#111111', textDecoration: 'underline' };
const EMAIL_LINK = { color: '#111111', textDecoration: 'underline' };
const DETAIL_LINK = { color: DETAIL_GRAY, textDecoration: 'none' };

const toMapsHref = (address) => {
  const plain = address.replace(/<br\s*\/?>/gi, ', ').replace(/<[^>]+>/g, '').trim();
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
    <td valign="top" style={{ ...SIGNATURE_STYLES.contactLabel, width: '17px', paddingBottom: '4px' }}>{label}</td>
    <td style={{ ...SIGNATURE_STYLES.contact, whiteSpace: 'nowrap', paddingBottom: '4px' }}>{children}</td>
  </tr>
);

const SignatureTable = ({ name, job, company, mobile, email }) => {
  const companyData = company && COMPANIES[company] ? COMPANIES[company] : COMPANIES['Aquatic Life Industries'];
  const mobileDisplay = mobile ? formatAustralianMobile(mobile) : '0000 000 000';
  const mobileHref = mobile ? toTelHref(mobile) : null;
  const companyPhoneHref = toTelHref(companyData.phone);
  const mapsHref = toMapsHref(companyData.address);
  const websiteDisplay = companyData.website.replace(/^www\./i, '');

  const brandStripLogos = [companyData.partnerLogo, ...BRAND_LOGOS];

  return (
    <table
      className="signature-table"
      width={454}
      cellSpacing="0"
      cellPadding="0"
      style={{
        fontFamily: 'Arial,Helvetica,sans-serif',
        textAlign: 'left',
        color: '#111111',
        fontSize: '12px',
        lineHeight: '18px',
        width: '454px'
      }}
    >
      <tbody>
        {/* Name + job title */}
        <tr>
          <td style={{ ...SIGNATURE_STYLES.name, paddingBottom: '0' }}>{name || 'Name'}</td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.job, paddingBottom: '18px' }}>{job || 'Job Title'}</td>
        </tr>

        {/* Contact details */}
        <tr>
          <td style={{ paddingBottom: '16px' }}>
            <table cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse' }}>
              <tbody>
                <ContactRow label="M">
                  <ContactLink href={mobileHref} style={MOBILE_LINK}>{mobileDisplay}</ContactLink>
                </ContactRow>
                {companyData.phone && (
                  <ContactRow label="T">
                    <ContactLink href={companyPhoneHref} style={MOBILE_LINK}>{companyData.phone}</ContactLink>
                  </ContactRow>
                )}
                <ContactRow label="E">
                  <ContactLink href={`mailto:${email || 'example@aquaticlife.com.au'}`} style={EMAIL_LINK}>
                    {email || 'example@aquaticlife.com.au'}
                  </ContactLink>
                </ContactRow>
              </tbody>
            </table>
          </td>
        </tr>

        {/* Primary (selected company) logo */}
        <tr>
          <td style={{ paddingBottom: '16px' }}>
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

        {/* Website + address detail line */}
        <tr>
          <td style={{ ...SIGNATURE_STYLES.detail, paddingBottom: '16px' }}>
            <ContactLink href={companyData.websiteUrl} style={DETAIL_LINK}>{websiteDisplay}</ContactLink>
            {' | '}
            <ContactLink href={mapsHref} style={DETAIL_LINK}>{companyData.address}</ContactLink>
          </td>
        </tr>

        {/* Partner company + brand logos strip */}
        <tr>
          <td style={{ paddingBottom: '16px' }}>
            <table cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  {brandStripLogos.map((logo, index) => (
                    <td
                      key={logo.src}
                      valign="middle"
                      style={{ paddingRight: index === brandStripLogos.length - 1 ? 0 : '16px' }}
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

        {/* Disclaimer */}
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
