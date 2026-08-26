import { asset } from './assets';

const FRIGTECH_URL = 'https://frigtech.com.au';

export const FRIGTECH_NAVY = '#003163';
export const FRIGTECH_GREEN = '#52B92D';
export const FRIGTECH_SLATE = '#6B808F';
export const FRIGTECH_GRAY = '#999999';

export const COMPANY = {
  name: 'FRIGTECH',
  website: 'FRIGTECH.COM.AU',
  websiteUrl: FRIGTECH_URL,
  emailPlaceholder: 'you@frigtech.com.au',
  abn: 'ABN 67 136 449 048 | AU30308 | EC11649',
  notice:
    'The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.',
  locations: [
    { label: 'Perth', href: 'https://maps.app.goo.gl/8pD9eSmnwCfiLTPQ6', primary: true },
    { label: 'Geraldton', href: 'https://maps.app.goo.gl/W7pJwRtsQtHedC746', primary: false },
    { label: 'Meekatharra', href: 'https://maps.app.goo.gl/8LYfqaZzJvB2tycN9', primary: false },
    { label: 'Pilbara', href: 'https://maps.app.goo.gl/azbedFpdQ2gfgTbz8', primary: false }
  ],
  logo: {
    src: asset('frigtech.jpg'),
    alt: 'FRIGTECH',
    href: FRIGTECH_URL,
    width: 240,
    height: 90
  },
  fridgair: {
    src: asset('fridgair.jpg'),
    alt: 'FRIDGAIR',
    width: 144,
    height: 59
  }
};

// Email clients strip <style> blocks and classes, so every rule the signature
// needs must be repeated inline on each element — including font-family, which
// Outlook and Gmail do not reliably inherit from the outer table.
export const EMAIL_FONT = 'Arial, Helvetica, sans-serif';

export const SIGNATURE_STYLES = {
  name: {
    fontFamily: EMAIL_FONT,
    fontSize: '20px',
    textTransform: 'none',
    fontWeight: 'bold',
    color: FRIGTECH_NAVY,
    lineHeight: '24px'
  },
  job: {
    fontFamily: EMAIL_FONT,
    fontSize: '13px',
    textTransform: 'none',
    color: FRIGTECH_SLATE,
    lineHeight: '18px'
  },
  contact: {
    fontFamily: EMAIL_FONT,
    fontSize: '14px',
    lineHeight: '20px',
    color: FRIGTECH_NAVY
  },
  contactLabel: {
    fontFamily: EMAIL_FONT,
    fontSize: '14px',
    color: FRIGTECH_GREEN,
    fontWeight: 'bold',
    minWidth: '22px',
    display: 'inline-block'
  },
  locations: {
    fontFamily: EMAIL_FONT,
    fontSize: '14px',
    lineHeight: '20px'
  },
  meta: {
    fontFamily: EMAIL_FONT,
    fontSize: '13px',
    color: FRIGTECH_NAVY,
    lineHeight: '18px'
  },
  notice: {
    fontFamily: EMAIL_FONT,
    fontSize: '11px',
    fontStyle: 'normal',
    color: FRIGTECH_GRAY,
    lineHeight: '15px'
  }
};

export default COMPANY;
