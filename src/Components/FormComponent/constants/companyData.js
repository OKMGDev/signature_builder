const publicUrl = process.env.PUBLIC_URL || '';

const PRIMARY_LOGO_HEIGHT = 52;
const BRAND_LOGO_HEIGHT = 35;

// Compute a width that preserves the source aspect ratio at a target height.
const sized = (logo, targetHeight) => ({
  src: logo.src,
  alt: logo.alt,
  height: targetHeight,
  width: Math.round((logo.w / logo.h) * targetHeight)
});

// Colored logos used for the primary (selected company) logo.
const ALI_LOGO = { src: `${publicUrl}/logos/ali.jpg`, alt: 'Aquatic Life Industries', w: 256, h: 65 };
const STA_LOGO = { src: `${publicUrl}/logos/sta.jpg`, alt: 'Southern Trading Australia', w: 147, h: 62 };

// Black logos used for the bottom strip (partner company + brands).
const ALI_LOGO_BLACK = { src: `${publicUrl}/logos/ali-black.jpg`, alt: 'Aquatic Life Industries', w: 368, h: 93 };
const STA_LOGO_BLACK = { src: `${publicUrl}/logos/sta-black.jpg`, alt: 'Southern Trading Australia', w: 636, h: 269 };

// Brand logos shown in the strip underneath the primary logo.
export const BRAND_LOGOS = [
  { src: `${publicUrl}/logos/crystal-crab-black.jpg`, alt: 'West Australian Crystal Crab', w: 845, h: 221 },
  { src: `${publicUrl}/logos/shark-bay-blue-black.jpg`, alt: 'Shark Bay Blue', w: 408, h: 269 },
  { src: `${publicUrl}/logos/vongole-black.jpg`, alt: 'Shark Bay Vongole', w: 434, h: 237 }
].map((logo) => sized(logo, BRAND_LOGO_HEIGHT));

export const COMPANIES = {
  'Aquatic Life Industries': {
    logo: sized(ALI_LOGO, PRIMARY_LOGO_HEIGHT),
    partnerLogo: sized(STA_LOGO_BLACK, BRAND_LOGO_HEIGHT),
    accent: '#111111',
    name: 'Aquatic Life Industries',
    phone: '',
    address: 'Suite 2/ 3 Norfolk Street, Fremantle, WA 6160',
    website: 'www.aquaticlife.com.au',
    websiteUrl: 'https://aquaticlife.com.au/'
  },
  'Southern Trading Australia': {
    logo: sized(STA_LOGO, PRIMARY_LOGO_HEIGHT),
    partnerLogo: sized(ALI_LOGO_BLACK, BRAND_LOGO_HEIGHT),
    accent: '#133798',
    name: 'Southern Trading Australia',
    phone: '+61 (08) 9336 5111',
    address: '16 Emplacement Crescent, Hamilton Hill, Western Australia, 6163',
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
