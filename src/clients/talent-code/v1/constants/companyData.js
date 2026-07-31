import { asset } from './assets';

const TALENT_CODE_URL = 'https://thetalentcode.com.au/';
const EMAIL_FONT = 'Arial, Helvetica, sans-serif';

export const COMPANY = {
  name: 'The Talent Code',
  accent: '#7bb3df',
  website: 'thetalentcode.com.au',
  websiteUrl: TALENT_CODE_URL,
  socials: [
    { name: 'TikTok', url: 'https://www.tiktok.com/@the.talentcode' },
    { name: 'Instagram', url: 'https://www.instagram.com/the.talentcode' },
    { name: 'Facebook', url: 'https://www.facebook.com/share/1BwT8iRkjS/?mibextid=wwXIfr' }
  ],
  logo: {
    src: asset('logo.png'),
    alt: 'The Talent Code',
    href: TALENT_CODE_URL,
    width: 122,
    height: 45
  }
};

export const SIGNATURE_STYLES = {
  name: {
    color: COMPANY.accent,
    fontFamily: EMAIL_FONT,
    fontSize: '17px',
    fontWeight: 'bold',
    lineHeight: '21px'
  },
  job: {
    color: '#133d5c',
    fontFamily: EMAIL_FONT,
    fontSize: '13px',
    lineHeight: '18px'
  },
  contact: {
    color: '#133d5c',
    fontFamily: EMAIL_FONT,
    fontSize: '12px',
    lineHeight: '18px'
  },
  contactLabel: {
    color: COMPANY.accent,
    fontFamily: EMAIL_FONT,
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '18px'
  }
};

export default COMPANY;
