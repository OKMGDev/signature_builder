import { asset } from './assets';

export const COMPANY_LOGOS = {
  'New Me': {
    src: asset('logos/newme.png'),
    alt: 'New Me',
    width: 200,
    height: 60
  },
  'Allieve': {
    src: asset('logos/allieve.png'),
    alt: 'Allieve',
    width: 200,
    height: 60
  }
};

export const COMPANY_WEBSITES = {
  'New Me': {
    url: 'https://www.newme.com.au/',
    label: 'www.newme.com.au'
  },
  'Allieve': {
    url: 'https://www.allieve.com.au/',
    label: 'www.allieve.com.au'
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
    color: '#E55238'
  },
  contact: {
    fontSize: '9pt'
  },
  disclaimer: {
    fontSize: '8pt',
    fontStyle: 'italic'
  }
};
