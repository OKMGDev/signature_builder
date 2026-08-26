import React from 'react';
import COMPANIES, {
  BRAND_LOGOS,
  DETAIL_GRAY,
  EMAIL_BLUE,
  SIGNATURE_STYLES
} from './constants/companyData';
import { formatAustralianMobile, normalizeAustralianMobileDigits, toTelHref } from './utils/signatureUtils';

const DISCLAIMER_TEXT =
  'Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.';

const MOBILE_LINK = { color: '#111111', textDecoration: 'underline' };
const PHONE_LINK = { color: '#111111', textDecoration: 'underline' };
const EMAIL_LINK = { color: EMAIL_BLUE, textDecoration: 'underline' };
const DETAIL_LINK = { color: DETAIL_GRAY, textDecoration: 'none' };
const LOGO_LINK = {
  textDecoration: 'none',
  border: 0,
  outline: 'none',
  display: 'inline-block',
  lineHeight: 0
};
const DIVIDER_COLOR = '#cccccc';

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
    <td valign="top" style={{ ...SIGNATURE_STYLES.contactLabel, width: '20px', paddingRight: '10px' }}>{label}</td>
    <td style={{ ...SIGNATURE_STYLES.contact, whiteSpace: 'nowrap' }}>{children}</td>
  </tr>
);

const BrandLogo = ({ logo, paddingRight }) => (
  <td valign="middle" style={{ paddingRight }}>
    <a href={logo.href} target="_blank" rel="noopener noreferrer" className="logo-link" style={LOGO_LINK}>
      <img
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        border="0"
        style={{
          width: `${logo.width}px`,
          height: `${logo.height}px`,
          objectFit: 'contain',
          display: 'block',
          border: 0
        }}
      />
    </a>
  </td>
);

const SignatureTable = ({ name, job, company, mobile, email }) => {
  const companyData = company && COMPANIES[company] ? COMPANIES[company] : COMPANIES['Aquatic Life Industries'];
  const mobileDigits = mobile ? normalizeAustralianMobileDigits(mobile) : '';
  const hasMobile = Boolean(mobileDigits);
  const mobileDisplay = hasMobile ? formatAustralianMobile(mobile) : '';
  const mobileHref = hasMobile ? toTelHref(mobile) : null;
  const companyPhoneHref = toTelHref(companyData.phone);
  const mapsHref = toMapsHref(companyData.address);
  const websiteDisplay = companyData.website.replace(/^www\./i, '');
  const exampleEmail = `example@${websiteDisplay}`;

  const brandStripLogos = [companyData.partnerLogo, ...BRAND_LOGOS];
  const contactRowCount = 1 + (hasMobile ? 1 : 0) + (companyData.phone ? 1 : 0);
  const dividerHeight = contactRowCount === 3 ? 60 : contactRowCount === 2 ? 40 : 22;

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
        width: '454px',
        borderRadius: 0
      }}
    >
      <tbody>
        {/* Name + job title */}
        <tr>
          <td style={{ paddingBottom: '10px' }}>
            <div style={SIGNATURE_STYLES.name}>{name || 'Name'}</div>
            <div style={SIGNATURE_STYLES.job}>{job || 'Job Title'}</div>
          </td>
        </tr>

        {/* Primary logo + contact details (side by side) */}
        <tr>
          <td style={{ paddingBottom: '10px' }}>
            <table cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse', borderRadius: 0 }}>
              <tbody>
                <tr>
                  {/* Primary (selected company) logo */}
                  <td valign="middle" style={{ paddingRight: '20px' }}>
                    <a href={companyData.logo.href} target="_blank" rel="noopener noreferrer" className="logo-link" style={LOGO_LINK}>
                      <img
                        src={companyData.logo.src}
                        alt={companyData.logo.alt}
                        width={companyData.logo.width}
                        height={companyData.logo.height}
                        border="0"
                        style={{
                          width: `${companyData.logo.width}px`,
                          height: `${companyData.logo.height}px`,
                          objectFit: 'contain',
                          display: 'block',
                          border: 0
                        }}
                      />
                    </a>
                  </td>

                  {/* Vertical divider */}
                  <td valign="middle" style={{ paddingRight: '20px' }}>
                    <div
                      style={{
                        width: '1px',
                        height: `${dividerHeight}px`,
                        backgroundColor: DIVIDER_COLOR,
                        fontSize: '1px',
                        lineHeight: '1px'
                      }}
                    >
                      &nbsp;
                    </div>
                  </td>

                  {/* Contact details */}
                  <td valign="middle">
                    <table cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse', borderRadius: 0 }}>
                      <tbody>
                        {hasMobile && (
                          <ContactRow label="M">
                            <ContactLink href={mobileHref} style={MOBILE_LINK}>{mobileDisplay}</ContactLink>
                          </ContactRow>
                        )}
                        {companyData.phone && (
                          <ContactRow label="T">
                            <ContactLink href={companyPhoneHref} style={PHONE_LINK}>{companyData.phone}</ContactLink>
                          </ContactRow>
                        )}
                        <ContactRow label="E">
                          <ContactLink href={`mailto:${email || exampleEmail}`} style={EMAIL_LINK}>
                            {email || exampleEmail}
                          </ContactLink>
                        </ContactRow>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        {/* Website + address detail line */}
        <tr>
          <td style={{ ...SIGNATURE_STYLES.detail, paddingBottom: '10px' }}>
            <ContactLink href={companyData.websiteUrl} style={DETAIL_LINK}>{websiteDisplay}</ContactLink>
            {' | '}
            <ContactLink href={mapsHref} style={DETAIL_LINK}>{companyData.address}</ContactLink>
          </td>
        </tr>

        {/* Partner company + brand logos strip */}
        <tr>
          <td style={{ paddingBottom: '10px' }}>
            <table cellSpacing="0" cellPadding="0" style={{ borderCollapse: 'collapse', borderRadius: 0 }}>
              <tbody>
                <tr>
                  {brandStripLogos.map((logo, index) => (
                    <BrandLogo
                      key={logo.src}
                      logo={logo}
                      paddingRight={index === brandStripLogos.length - 1 ? 0 : '16px'}
                    />
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
