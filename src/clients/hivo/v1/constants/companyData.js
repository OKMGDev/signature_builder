import { asset } from './assets';

export const ACCENT = '#0427FF';
export const LINK = '#142430';
export const FONT = 'Arial, Helvetica, sans-serif';

const WEBSITE_URL = 'https://hivo.co/';

export const COMPANY = {
  name: 'HiVo',
  phone: '1300 93 6564',
  phoneTel: '1300936564',
  website: 'hivo.com.au',
  websiteUrl: WEBSITE_URL,
  caseStudiesUrl: 'https://hivo.co/case-studies/',
  reviewsUrl: 'https://www.capterra.com.au/software/176693/hivo',
  logo: {
    src: asset('logo.png'),
    alt: 'HiVo',
    width: 180,
    height: 64
  },
  tagline: {
    src: asset('tagline.gif'),
    alt: '',
    width: 400,
    height: 20
  },
  disclaimer:
    'Disclaimer: The information contained in this email and any attached files may be confidential information. If you are not the intended recipient, any use, disclosure or copying of this email is unauthorised. If you have received this email in error, please notify the sender by reply email and delete the original. Thank you.'
};

export const SIGNATURE_STYLES = {
  name: {
    fontSize: '17px',
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
    fontSize: '14px'
  },
  label: {
    color: ACCENT,
    minWidth: '20px'
  },
  link: {
    color: LINK,
    textDecoration: 'underline'
  },
  divider: {
    margin: '0 5px',
    opacity: 0.3
  },
  disclaimer: {
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#707070'
  }
};

export default COMPANY;
