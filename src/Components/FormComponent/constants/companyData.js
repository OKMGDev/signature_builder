const publicUrl = process.env.PUBLIC_URL || '';

export const COMPANIES = {
  'Aquatic Life Industries': {
    logo: {
      src: `${publicUrl}/ali-logo.png`,
      alt: 'Aquatic Life Industries',
      width: 180,
      height: 85
    },
    accent: '#030303',
    name: 'Aquatic Life Industries',
    phone: '',
    address: 'Suite 2/ 3 Norfolk Street, <br />Fremantle, WA 6160',
    website: 'www.aquaticlife.com.au',
    websiteUrl: 'https://aquaticlife.com.au/'
  },
  'Southern Trading Australia': {
    logo: {
      src: `${publicUrl}/sta-logo.png`,
      alt: 'Southern Trading Australia',
      width: 140,
      height: 85
    },
    accent: '#112667',
    name: 'Southern Trading Australia',
    phone: '+61 (08) 9336 5111',
    address: '16 Emplacement Crescent, <br />Hamilton Hill, Western Australia, 6163',
    website: 'www.southerntrading.com.au',
    websiteUrl: 'https://southerntrading.com.au/'
  }
};

export default COMPANIES;

export const SIGNATURE_STYLES = {
  name: {
    fontSize: '12pt',
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  job: {
    fontSize: '9pt',
    textTransform: 'capitalize',
    color: 'rgb(46, 46, 46)'
  },
  contact: {
    fontSize: '9pt'
  },
  disclaimer: {
    fontSize: '8pt',
    fontStyle: 'italic',
    opacity: 0.5
  }
};
