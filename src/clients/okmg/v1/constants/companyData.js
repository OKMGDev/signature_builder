import { asset } from './assets';

export const COMPANY_LOGOS = {
  'OKMG': {
    src: asset('logo-bigger.jpg'),
    alt: 'OKMG',
    width: 180,
    height: 180
  }
};

export const COMPANY_WEBSITES = {
  'OKMG': {
    url: 'https://okmg.com',
    label: 'www.okmg.com'
  }
};

export const SIGNATURE_STYLES = {
  name: {
    fontSize: '16px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: '#000000'
  },
  job: {
    fontSize: '12px',
    textTransform: 'capitalize',
    color: '#8a8a8a'
  },
  contact: {
    fontSize: '13px'
  },
  disclaimer: {
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#707070'
  }
};
