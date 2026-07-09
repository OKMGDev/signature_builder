import { asset } from './assets';

const PRIMARY_LOGO_HEIGHT = 48;

const sized = (logoDef, targetHeight) => ({
  src: logoDef.src,
  alt: logoDef.alt,
  href: logoDef.href,
  height: targetHeight,
  width: Math.round((logoDef.w / logoDef.h) * targetHeight)
});

const HEIRLOOM_URL = 'https://heirloomhoney.co/';

const HEIRLOOM_LOGO = { src: asset('logo.png'), alt: 'Heirloom Honey Co.', href: HEIRLOOM_URL, w: 378, h: 94 };

export const COMPANY = {
  logo: sized(HEIRLOOM_LOGO, PRIMARY_LOGO_HEIGHT),
  accent: '#bea14f',
  name: 'Heirloom Honey Co.',
  website: 'www.heirloomhoney.co',
  websiteUrl: HEIRLOOM_URL
};

export default COMPANY;

export const HONEY_GOLD = '#bea14f';
export const TEXT_BLACK = '#111111';
export const DISCLAIMER_GRAY = '#6c6c6c';

export const SIGNATURE_STYLES = {
  name: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 'bold',
    color: HONEY_GOLD
  },
  job: {
    fontSize: '14px',
    lineHeight: '18px',
    color: TEXT_BLACK
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
    color: HONEY_GOLD
  },
  disclaimer: {
    fontSize: '10px',
    lineHeight: '14px',
    fontStyle: 'italic',
    color: DISCLAIMER_GRAY
  }
};
