import { asset } from './assets';

const logo = (file) => asset(`logos/${file}`);

const PRIMARY_LOGO_HEIGHT = 52;
const BRAND_LOGO_HEIGHT = 35;

const sized = (logoDef, targetHeight) => ({
  src: logoDef.src,
  alt: logoDef.alt,
  href: logoDef.href,
  height: targetHeight,
  width: Math.round((logoDef.w / logoDef.h) * targetHeight)
});

const ALI_URL = 'https://aquaticlife.com.au/';
const STA_URL = 'https://southerntrading.com.au/';

const ALI_LOGO = { src: logo('ali.jpg'), alt: 'Aquatic Life Industries', href: ALI_URL, w: 256, h: 65 };
const STA_LOGO = { src: logo('sta.jpg'), alt: 'Southern Trading Australia', href: STA_URL, w: 147, h: 62 };

const ALI_LOGO_BLACK = { src: logo('ali-black.jpg'), alt: 'Aquatic Life Industries', href: ALI_URL, w: 368, h: 93 };
const STA_LOGO_BLACK = { src: logo('sta-black.jpg'), alt: 'Southern Trading Australia', href: STA_URL, w: 636, h: 269 };

export const BRAND_LOGOS = [
  { src: logo('crystal-crab-black.jpg'), alt: 'West Australian Crystal Crab', href: 'https://crystalcrab.com.au/', w: 845, h: 221 },
  { src: logo('shark-bay-blue-black.jpg'), alt: 'Shark Bay Blue', href: 'https://sharkbayblue.com.au/', w: 408, h: 269 },
  { src: logo('vongole-black.jpg'), alt: 'Shark Bay Vongole', href: 'https://sharkbayvongole.com.au/', w: 434, h: 237 }
].map((item) => sized(item, BRAND_LOGO_HEIGHT));

export const COMPANIES = {
  'Aquatic Life Industries': {
    logo: sized(ALI_LOGO, PRIMARY_LOGO_HEIGHT),
    partnerLogo: sized(STA_LOGO_BLACK, BRAND_LOGO_HEIGHT),
    accent: '#111111',
    name: 'Aquatic Life Industries',
    phone: '',
    address: 'PO Box 118, Fremantle, WA 6959',
    website: 'www.aquaticlife.com.au',
    websiteUrl: 'https://aquaticlife.com.au/'
  },
  'Southern Trading Australia': {
    logo: sized(STA_LOGO, PRIMARY_LOGO_HEIGHT),
    partnerLogo: sized(ALI_LOGO_BLACK, BRAND_LOGO_HEIGHT),
    accent: '#133798',
    name: 'Southern Trading Australia',
    phone: '+61 (08) 9336 5111',
    address: '16 Emplacement Crescent, Hamilton Hill, WA, 6163',
    website: 'www.southerntrading.com.au',
    websiteUrl: 'https://southerntrading.com.au/'
  }
};

export default COMPANIES;

export const EMAIL_BLUE = '#133798';
export const DETAIL_GRAY = '#8d8d8d';
export const DISCLAIMER_GRAY = '#6c6c6c';

export const SIGNATURE_STYLES = {
  name: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 'bold'
  },
  job: {
    fontSize: '12px',
    lineHeight: '18px'
  },
  contact: {
    fontSize: '12px',
    lineHeight: '18px'
  },
  contactLabel: {
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 'bold'
  },
  detail: {
    fontSize: '12px',
    lineHeight: '18px',
    color: DETAIL_GRAY
  },
  disclaimer: {
    fontSize: '10px',
    lineHeight: '14px',
    fontStyle: 'italic',
    color: DISCLAIMER_GRAY
  }
};
