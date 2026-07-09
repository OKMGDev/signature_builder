import { asset } from './assets';

export const COMPANY_LOGOS = {
  'Hair Supplies': {
    src: asset('logos/hs-email.png'),
    alt: 'Hair Supplies',
    width: 250,
    height: 60
  },
  'Hair Online': {
    src: asset('logos/ho-email.png'),
    alt: 'Hair Online',
    width: 250,
    height: 60
  }
};

export const COMPANY_WEBSITES = {
  'Hair Supplies': {
    url: 'https://hairsupplies.com.au/',
    label: 'www.hairsupplies.com.au'
  },
  'Hair Online': {
    url: 'https://haironline.com.au',
    label: 'www.haironline.com.au'
  }
};

export const SIGNATURE_STYLES = {
  name: {
    fontSize: '12pt',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: '#000000'
  },
  job: {
    fontSize: '9pt',
    textTransform: 'capitalize',
    color: '#B2CB23'
  },
  contact: {
    fontSize: '9pt'
  },
  disclaimer: {
    fontSize: '8pt',
    fontStyle: 'italic'
  }
};
