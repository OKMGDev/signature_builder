import React from 'react';
import COMPANY, { FONT, SIGNATURE_STYLES } from './constants/companyData';

const LinkDivider = () => <span style={SIGNATURE_STYLES.divider}>|</span>;

const SignatureTable = ({ name, job, mobile, email, meetingSchedule }) => {
  const { logo, tagline } = COMPANY;
  const mobileDisplay = (mobile || '').trim();
  const emailDisplay = (email || '').trim();
  const demoLink = (meetingSchedule || '').trim();

  return (
    <table
      className="signature-table"
      width={520}
      cellSpacing="0"
      cellPadding="0"
      style={{
        fontFamily: FONT,
        textAlign: 'left',
        color: 'rgb(0, 0, 0)',
        fontSize: '14px',
        lineHeight: '16px',
        width: '520px'
      }}
    >
      <tbody>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.name, padding: '4px 0' }}>
            {name || 'Name'}
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.job, padding: '4px 0' }}>
            {job || 'Job Title'}
            <br />
            <br />
          </td>
        </tr>
        {mobileDisplay ? (
          <tr>
            <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
              <b style={SIGNATURE_STYLES.label}>M:</b>{' '}
              <a
                href={`tel:${mobileDisplay.replace(/\s+/g, '')}`}
                style={{ color: '#000', textDecoration: 'none' }}
              >
                {mobileDisplay}
              </a>
            </td>
          </tr>
        ) : null}
        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
            <b style={SIGNATURE_STYLES.label}>P:</b>{'  '}
            <a
              href={`tel:${COMPANY.phoneTel}`}
              style={{ color: '#000', textDecoration: 'none' }}
            >
              {COMPANY.phone}
            </a>
          </td>
        </tr>
        {emailDisplay ? (
          <tr>
            <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
              <b style={SIGNATURE_STYLES.label}>E:</b>{' '}
              <a
                href={`mailto:${emailDisplay}`}
                style={{ color: '#000', textDecoration: 'none' }}
              >
                {emailDisplay}
              </a>
            </td>
          </tr>
        ) : null}
        <tr>
          <td style={{ padding: '8px 0' }}>
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '180px',
                display: 'block'
              }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.contact, padding: '4px 0' }}>
            <a
              href={COMPANY.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={SIGNATURE_STYLES.link}
            >
              {COMPANY.website}
            </a>
            <LinkDivider />
            <a
              href={COMPANY.caseStudiesUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={SIGNATURE_STYLES.link}
            >
              Case Studies
            </a>
            <LinkDivider />
            <a
              href={COMPANY.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={SIGNATURE_STYLES.link}
            >
              Reviews
            </a>
            {demoLink ? (
              <>
                <LinkDivider />
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={SIGNATURE_STYLES.link}
                >
                  Book a demo
                </a>
              </>
            ) : null}
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={tagline.src}
              alt={tagline.alt}
              width={tagline.width}
              height={tagline.height}
              style={{
                paddingTop: '20px',
                width: '100%',
                height: 'auto',
                maxWidth: '400px',
                display: 'block'
              }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ ...SIGNATURE_STYLES.disclaimer, padding: '4px 0' }}>
            <br />
            <hr
              style={{
                margin: '0px',
                borderColor: '#c7c7c7',
                borderWidth: '0px',
                height: '1px',
                backgroundColor: '#c7c7c7'
              }}
            />
            <br />
            {COMPANY.disclaimer}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureTable;
