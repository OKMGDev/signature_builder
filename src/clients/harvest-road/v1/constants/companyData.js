import { asset } from './assets';

const WEBSITE_URL = 'https://harvestroad.com/';

const COMPANY = {
  name: 'Harvest Road Group',
  accent: '#0b2f61',
  text: '#222222',
  muted: '#5e6875',
  website: 'harvestroad.com',
  websiteUrl: WEBSITE_URL,
  address: 'Level 7, 190 St Georges Terrace, Perth WA 6000',
  postalAddress: 'PO Box 7359, Cloisters Square, Perth WA 6850',
  logos: {
    harvestRoad: {
      src: asset('harvest-road.png'),
      alt: 'Harvest Road',
      href: WEBSITE_URL,
      width: 154,
      height: 40
    },
    harveyBeef: {
      src: asset('harvey-beef.png'),
      alt: 'Harvey Beef',
      href: 'https://www.harveybeef.com.au/',
      width: 55,
      height: 50
    },
    leeuwinCoast: {
      src: asset('leeuwin-coast.png'),
      alt: 'Leeuwin Coast',
      href: 'https://leeuwincoast.com/',
      width: 73,
      height: 50
    }
  }
};

export default COMPANY;
