const publicUrl = process.env.PUBLIC_URL || '';

const BIG_LOGO_HEIGHT = 64;
const SMALL_LOGO_HEIGHT = 44;

// Compute a width that preserves the source aspect ratio at a target height.
const sized = (logo, targetHeight) => ({
  src: logo.src,
  alt: logo.alt,
  height: targetHeight,
  width: Math.round((logo.w / logo.h) * targetHeight)
});

const ALI_LOGO = { src: `${publicUrl}/logos/ali.jpg`, alt: 'Aquatic Life Industries', w: 256, h: 65 };
const STA_LOGO = { src: `${publicUrl}/logos/sta.jpg`, alt: 'Southern Trading Australia', w: 147, h: 62 };

// Brand logos shown in the partner row underneath the primary logo.
export const BRAND_LOGOS = [
  { src: `${publicUrl}/logos/crystal-crab.jpg`, alt: 'West Australian Crystal Crab', w: 257, h: 70 },
  { src: `${publicUrl}/logos/shark-bay-blue.jpg`, alt: 'Shark Bay Blue', w: 115, h: 76 },
  { src: `${publicUrl}/logos/vongole.jpg`, alt: 'Shark Bay Vongole', w: 132, h: 75 }
].map((logo) => sized(logo, SMALL_LOGO_HEIGHT));

export const COMPANIES = {
  'Aquatic Life Industries': {
    logo: sized(ALI_LOGO, BIG_LOGO_HEIGHT),
    partnerLogo: sized(STA_LOGO, SMALL_LOGO_HEIGHT),
    accent: '#030303',
    name: 'Aquatic Life Industries',
    phone: '',
    address: 'Suite 2/ 3 Norfolk Street, <br />Fremantle, WA 6160',
    website: 'www.aquaticlife.com.au',
    websiteUrl: 'https://aquaticlife.com.au/'
  },
  'Southern Trading Australia': {
    logo: sized(STA_LOGO, BIG_LOGO_HEIGHT),
    partnerLogo: sized(ALI_LOGO, SMALL_LOGO_HEIGHT),
    accent: '#112667',
    name: 'Southern Trading Australia',
    phone: '+61 (08) 9336 5111',
    address: '16 Emplacement Crescent, <br />Hamilton Hill, Western Australia, 6163',
    website: 'www.southerntrading.com.au',
    websiteUrl: 'https://southerntrading.com.au/'
  }
};

export default COMPANIES;

export const LINK_BLUE = '#1155cc';

export const SIGNATURE_FONT_SIZE = '13px';

export const SIGNATURE_STYLES = {
  name: {
    fontSize: '16px',
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  job: {
    fontSize: SIGNATURE_FONT_SIZE,
    textTransform: 'capitalize',
    color: 'rgb(46, 46, 46)'
  },
  contact: {
    fontSize: SIGNATURE_FONT_SIZE
  },
  contactLabel: {
    fontSize: SIGNATURE_FONT_SIZE,
    fontWeight: 'bold'
  },
  disclaimer: {
    fontSize: SIGNATURE_FONT_SIZE,
    fontStyle: 'italic',
    opacity: 0.5
  }
};
