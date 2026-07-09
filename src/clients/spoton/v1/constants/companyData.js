import { asset } from './assets';

export const COMPANY_LOGOS = {
  'North Vic Electricity': {
    src: asset('logos/north-vic-electric.png'),
    alt: 'North Vic Electricity',
    width: 125,
    height: 85
  },
  'Spot on Civil': {
    src: asset('logos/spot-on-civil.png'),
    alt: 'Spot On Civil',
    width: 125,
    height: 85
  }
};

export const COMPANY_WEBSITES = [
  {
    url: 'https://northvicelectricity.com.au/',
    label: 'www.northvicelectricity.com.au'
  },
  {
    url: 'https://spotongroup.com.au',
    label: 'www.spotongroup.com.au'
  }
];

export const SIGNATURE_STYLES = {
  name: {
    fontSize: '12pt',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: 'rgb(38, 90, 168)'
  },
  job: {
    fontSize: '9pt',
    textTransform: 'capitalize',
    color: 'rgb(237, 182, 28)'
  },
  contact: {
    fontSize: '9pt'
  },
  disclaimer: {
    fontSize: '8pt',
    fontStyle: 'italic'
  }
};
