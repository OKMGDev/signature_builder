import { asset } from './assets';

export const NAVY = '#14274b';
export const INK = '#212121';
// Figma tagline is #212121 at 70% on white — bake the blend for Outlook.
export const TAGLINE = '#646464';

// Email clients do not load webfonts. Arial matches the Figma Arial Bold/Regular.
export const FONT = 'Arial, Helvetica, sans-serif';

const WEBSITE_URL = 'https://gilkisongroup.com/';

export const COMPANY = {
  name: 'Gilkison Group',
  tagline: 'TRUSTED FINANCIAL ADVICE SINCE 1979',
  phone: '+61 8 9384 4500',
  website: 'gilkisongroup.com',
  websiteUrl: WEBSITE_URL,
  logo: {
    src: asset('logo.png'),
    alt: 'Gilkison',
    href: WEBSITE_URL,
    width: 120,
    height: 25
  },
  divider: {
    src: asset('divider.png'),
    alt: '',
    width: 132,
    height: 5
  }
};

export const SIGNATURE_STYLES = {
  name: {
    fontFamily: FONT,
    fontSize: '18px',
    lineHeight: '19px',
    fontWeight: 'bold',
    color: NAVY,
    padding: '0'
  },
  contact: {
    fontFamily: FONT,
    fontSize: '12px',
    lineHeight: '16px',
    color: INK,
    padding: '0'
  },
  link: {
    fontFamily: FONT,
    fontSize: '12px',
    lineHeight: '16px',
    color: INK,
    textDecoration: 'none'
  },
  tagline: {
    fontFamily: FONT,
    fontSize: '8px',
    lineHeight: '11px',
    letterSpacing: '0.96px',
    textTransform: 'uppercase',
    color: TAGLINE,
    padding: '0',
    width: '92px'
  }
};

export default COMPANY;
