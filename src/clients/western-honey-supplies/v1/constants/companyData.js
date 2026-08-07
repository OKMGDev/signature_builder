import { asset } from './assets';

const PRIMARY_LOGO_HEIGHT = 52;
const BADGE_HEIGHT = 56;

const sized = (logoDef, targetHeight) => ({
  src: logoDef.src,
  alt: logoDef.alt,
  href: logoDef.href,
  height: targetHeight,
  width: Math.round((logoDef.w / logoDef.h) * targetHeight)
});

const WHS_URL = 'https://westernhoneysupplies.com.au/';

const WHS_LOGO = { src: asset('logo.png'), alt: 'Western Honey Supplies', href: WHS_URL, w: 441, h: 168 };

const BADGES = [
  { src: asset('badge-bqual.png'), alt: 'B-QUAL Quality Assured', w: 168, h: 168 },
  { src: asset('badge-organic.png'), alt: 'Certified Organic Australia — Organic Food Chain', w: 197, h: 168 }
];

export const HONEY_YELLOW = '#F9B207';
export const TEXT_BLACK = '#111111';
export const JOB_GRAY = '#4a4a4a';
export const DISCLAIMER_GRAY = '#6c6c6c';

export const COMPANY = {
  logo: sized(WHS_LOGO, PRIMARY_LOGO_HEIGHT),
  badges: BADGES.map((badge) => sized(badge, BADGE_HEIGHT)),
  accent: HONEY_YELLOW,
  name: 'Western Honey Supplies',
  website: 'www.westernhoneysupplies.com.au',
  websiteUrl: WHS_URL,
  address: '101 Phillips Rd, Karrakup, WA',
  addressNote: 'by appointment only',
  addressUrl: 'https://maps.google.com/?q=101+Phillips+Rd,+Karrakup,+WA'
};

export default COMPANY;

export const SIGNATURE_STYLES = {
  name: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 'bold',
    color: TEXT_BLACK
  },
  job: {
    fontSize: '14px',
    lineHeight: '18px',
    color: JOB_GRAY
  },
  contact: {
    fontSize: '12px',
    lineHeight: '18px',
    color: TEXT_BLACK
  },
  contactLabel: {
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 'bold',
    color: HONEY_YELLOW
  },
  addressNote: {
    fontSize: '12px',
    lineHeight: '18px',
    color: DISCLAIMER_GRAY
  },
  disclaimer: {
    fontSize: '10px',
    lineHeight: '14px',
    fontStyle: 'italic',
    color: DISCLAIMER_GRAY
  }
};
