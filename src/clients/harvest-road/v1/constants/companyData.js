import { asset } from './assets';

const FONT = 'Arial, Helvetica, sans-serif';
const WEBSITE_URL = 'https://harvestroad.com/';

const TEXT = '#111111';
const LABEL = '#476683';
const LINK = '#1c2a51';
const DISCLAIMER = '#6c6c6c';
const RULE = '#c8c8c8';

const COMPANY = {
  name: 'Harvest Road Group',
  website: 'harvestroad.com',
  websiteUrl: WEBSITE_URL,
  address: 'Level 7, 190 St Georges Terrace, Perth WA 6000',
  disclaimer:
    'Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.',
  logos: {
    harvestRoad: {
      src: asset('harvest-road.png'),
      alt: 'Harvest Road',
      href: WEBSITE_URL,
      width: 154,
      height: 40
    },
    leeuwinCoast: {
      src: asset('leeuwin-coast.png'),
      alt: 'Leeuwin Coast',
      href: 'https://leeuwincoast.com/',
      width: 58,
      height: 19
    },
    harveyBeef: {
      src: asset('harvey-beef.png'),
      alt: 'Harvey Beef',
      href: 'https://www.harveybeef.com.au/',
      width: 46,
      height: 28
    }
  }
};

export const SIGNATURE_STYLES = {
  name: {
    color: TEXT,
    fontFamily: FONT,
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '18px'
  },
  job: {
    color: TEXT,
    fontFamily: FONT,
    fontSize: '12px',
    lineHeight: '18px'
  },
  contactLabel: {
    color: LABEL,
    fontFamily: FONT,
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '20px'
  },
  contact: {
    color: TEXT,
    fontFamily: FONT,
    fontSize: '12px',
    letterSpacing: '0.12px',
    lineHeight: '20px'
  },
  ourBrands: {
    color: TEXT,
    fontFamily: FONT,
    fontSize: '8px',
    lineHeight: '18px'
  },
  meta: {
    color: TEXT,
    fontFamily: FONT,
    fontSize: '10px',
    letterSpacing: '0.1px',
    lineHeight: '20px'
  },
  websiteLink: {
    color: LINK,
    fontFamily: FONT,
    fontSize: '10px',
    letterSpacing: '0.1px',
    lineHeight: '20px',
    textDecoration: 'underline'
  },
  disclaimer: {
    color: DISCLAIMER,
    fontFamily: FONT,
    fontSize: '8px',
    lineHeight: '11px'
  }
};

export const RULE_COLOR = RULE;

export default COMPANY;
