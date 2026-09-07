import { asset } from './assets';

const SPORTS_SURFACES_URL = 'https://www.sportssurfaces.com.au';

export const SS_TEAL = '#013334';
export const SS_GREEN = '#00D061';
export const SS_SLATE = '#6f8385';

// Web-safe stacks only. Email clients do not load webfonts, so the signature
// relies on faces that ship with Windows and macOS.
export const DISPLAY_FONT = "Impact, 'Arial Narrow Bold', 'Arial Black', Arial, sans-serif";
export const MONO_FONT = "'Courier New', Courier, monospace";
export const BODY_FONT = 'Arial, Helvetica, sans-serif';

export const COMPANY = {
  name: 'Sports Surfaces',
  website: 'SPORTSSURFACES.COM.AU',
  websiteUrl: SPORTS_SURFACES_URL,
  phone: '(61) 8 9244 2299',
  addressLines: ['PO Box 1442, Osborne Park DC', 'Western Australia, 6916'],
  abn: 'ABN: 12 687 173 968',
  logo: {
    src: asset('SS_LOGO.png'),
    alt: 'Sports Surfaces',
    href: SPORTS_SURFACES_URL,
    width: 192,
    height: 64
  },
  socials: [
    {
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com/company/sports-surfaces/',
      src: asset('SS_linkedin.png')
    },
    {
      alt: 'Facebook',
      href: 'https://www.facebook.com/sportssurfaces1',
      src: asset('SS_facebook.png')
    },
    {
      alt: 'Instagram',
      href: 'https://www.instagram.com/sports_surfaces',
      src: asset('SS_instagram.png')
    }
  ],
  socialIconSize: 16
};

export const SIGNATURE_STYLES = {
  name: {
    fontFamily: DISPLAY_FONT,
    fontSize: '32px',
    lineHeight: '32px',
    letterSpacing: '0px',
    color: SS_TEAL,
    textTransform: 'uppercase',
    marginBottom: '6px'
  },
  job: {
    fontFamily: MONO_FONT,
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '18px',
    letterSpacing: '1px',
    color: SS_TEAL,
    textTransform: 'uppercase',
    marginBottom: '28px'
  },
  phone: {
    fontFamily: BODY_FONT,
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '22px',
    color: SS_TEAL
  },
  address: {
    fontFamily: BODY_FONT,
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '22px',
    color: SS_TEAL
  },
  abn: {
    fontFamily: BODY_FONT,
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '22px',
    color: SS_SLATE,
    marginBottom: '10px'
  },
  // The cell repeats the link's font metrics so its line-box strut matches the
  // text. Without this the td inherits the default 16px and the smaller label
  // sits low against the taller strut.
  websiteButtonCell: {
    backgroundColor: SS_GREEN,
    padding: '6px 12px',
    borderRadius: '4px',
    fontFamily: MONO_FONT,
    fontSize: '11px',
    lineHeight: '18px'
  },
  websiteButtonLink: {
    fontFamily: MONO_FONT,
    fontWeight: 'bold',
    fontSize: '11px',
    letterSpacing: '1px',
    color: SS_TEAL,
    textDecoration: 'none'
  }
};

export default COMPANY;
