import { asset } from './assets';

const NDSA_URL = 'https://www.ndsa.com.au/';
const EMAIL_FONT = 'Arial, Helvetica, sans-serif';

export const NDSA_NAVY = '#0B178A';
export const NDSA_SKY = '#5AA6C8';
export const TEXT_DARK = '#1a1a1a';
export const TEXT_MUTED = '#555555';

export const COMPANY = {
  name: 'Notre Dame Student Association',
  accent: NDSA_NAVY,
  website: 'www.ndsa.com.au',
  websiteUrl: NDSA_URL,
  tagline: 'For Students, By Students.',
  address: 'Prindiville Hall (ND3), 19 Mouat St, Fremantle WA 6160',
  addressUrl: 'https://maps.google.com/?q=19+Mouat+Street,+Fremantle+WA+6160',
  emailPlaceholder: 'name@ndsa.com.au',
  acknowledgement:
    'I am proud to work and live on Whadjuk Nyoongar Boodja and honour the traditional owners of this land. I acknowledge and pay my respects to the elders of the land, past, present and emerging. Always was, always will be.',
  disclaimer:
    'IMPORTANT: This e-mail and any attachments may be confidential. If you are not the intended recipient you should not disclose, copy, disseminate or otherwise use this information contained in it. If you have received this email in error, please notify us immediately by return email and delete or destroy the document. Confidential and legal privilege are not waived or lost by reason of mistaken delivery to you. The Student Association of The University of Notre Dame Australia is not responsible for any changes made to a document other than those made by the Association. Before opening or using attachments please check them for viruses and defects. Our liability is limited to re-supplying any affected attachments.',
  socials: [
    { name: 'Facebook', url: 'https://www.facebook.com/ndsafreo' },
    { name: 'Instagram', url: 'https://www.instagram.com/ndsafreo' }
  ],
  logo: {
    src: asset('logo.png'),
    alt: 'NDSA — Notre Dame Student Association',
    href: NDSA_URL,
    width: 226,
    height: 42
  }
};

export const SIGNATURE_STYLES = {
  name: {
    color: NDSA_NAVY,
    fontFamily: EMAIL_FONT,
    fontSize: '17px',
    fontWeight: 'bold',
    lineHeight: '21px'
  },
  job: {
    color: TEXT_MUTED,
    fontFamily: EMAIL_FONT,
    fontSize: '13px',
    lineHeight: '18px'
  },
  contact: {
    color: TEXT_DARK,
    fontFamily: EMAIL_FONT,
    fontSize: '12px',
    lineHeight: '18px'
  },
  contactLabel: {
    color: NDSA_NAVY,
    fontFamily: EMAIL_FONT,
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '18px'
  },
  tagline: {
    color: NDSA_SKY,
    fontFamily: EMAIL_FONT,
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '16px'
  },
  acknowledgement: {
    color: TEXT_MUTED,
    fontFamily: EMAIL_FONT,
    fontSize: '10px',
    lineHeight: '14px'
  },
  disclaimer: {
    color: '#6c6c6c',
    fontFamily: EMAIL_FONT,
    fontSize: '9px',
    lineHeight: '13px'
  }
};

export default COMPANY;
