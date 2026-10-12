import { asset } from './assets';

export const INK = '#202020';
export const GOLD = '#FBB702';

// Email clients do not load webfonts. Arial is the closest face that ships
// with both Windows and macOS to the site's geometric sans.
export const FONT = 'Arial, Helvetica, sans-serif';

const WEBSITE_URL = 'https://churchlandsplumbingandgas.com.au/';

export const COMPANY = {
  name: 'Churchlands Plumbing and Gas',
  tagline: 'We are always ready to help!',
  phone: '0488 988 066',
  phoneHref: 'tel:+61488988066',
  email: 'info@churchlandsplumbingandgas.com.au',
  emailHref: 'mailto:info@churchlandsplumbingandgas.com.au',
  website: 'churchlandsplumbingandgas.com.au',
  websiteUrl: WEBSITE_URL,
  logo: {
    src: asset('logo.png'),
    alt: 'Churchlands Plumbing and Gas',
    href: WEBSITE_URL,
    width: 230,
    height: 85
  },
  licenses: [
    ['Gas License', 'GF018425'],
    ['Plumber License', 'PL9179']
  ]
};

export const SIGNATURE_STYLES = {
  name: {
    fontFamily: FONT,
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: 'bold',
    color: INK,
    paddingBottom: '2px'
  },
  job: {
    fontFamily: FONT,
    fontSize: '13px',
    lineHeight: '16px',
    color: INK,
    paddingBottom: '8px'
  },
  contact: {
    fontFamily: FONT,
    fontSize: '13px',
    lineHeight: '16px',
    color: INK,
    paddingBottom: '1px'
  },
  link: {
    fontFamily: FONT,
    fontSize: '13px',
    lineHeight: '18px',
    color: INK,
    textDecoration: 'none'
  },
  tagline: {
    fontFamily: FONT,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'bold',
    color: INK,
    paddingBottom: '8px'
  },
  metaLabel: {
    fontFamily: FONT,
    fontSize: '12px',
    lineHeight: '16px',
    color: INK,
    paddingRight: '16px',
    paddingBottom: '2px',
    whiteSpace: 'nowrap'
  },
  metaValue: {
    fontFamily: FONT,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'bold',
    color: INK,
    paddingBottom: '2px',
    whiteSpace: 'nowrap'
  }
};

export default COMPANY;
