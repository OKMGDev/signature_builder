export const COMPANIES = {
  'Aquatic Life Industries': {
    logo: {
      src: 'https://cdn.prod.website-files.com/6822c831157904e56be1ff97/68999525cba5d4586c622cd5_ali.png',
      alt: 'Aquatic Life Industries',
      width: 150,
      height: 60
    },
    colors: {
      primary: '#0A3438',
      secondary: 'rgb(69,80,101)',
      accent: 'rgb(237, 182, 28)'
    },
    tagline: 'ALI Tagline',
    website: 'aquaticlife.com.au'
  },
  'Southern Trading Australia': {
    logo: {
      src: 'https://cdn.prod.website-files.com/6822c831157904e56be1ff97/689995c9ca67c474068c1cb2_Group%2048096116.png',
      alt: 'Southern Trading Australia',
      width: 150,
      height: 60
    },
    colors: {
      primary: 'rgb(32,78,207)',
      secondary: 'rgb(69,80,101)',
      accent: 'rgb(237, 182, 28)'
    },
    tagline: 'STAG Tagline',
    website: 'southerntrading.com.au'
  },
  'West Australian Crystal Crab': {
    logo: {
      src: 'https://cdn.prod.website-files.com/6822c831157904e56be1ff97/6899954289ea8889bbcbbe2b_wacc.png',
      alt: 'West Australian Crystal Crab',
      width: 150,
      height: 60
    },
    colors: {
      primary: 'rgb(209 135 11)',
      secondary: 'rgb(69,80,101)',
      accent: 'rgb(209 135 11)'
    },
    tagline: 'WACC Tagline',
    website: 'crystalcrab.com.au'
  },

};

// Default export for easier importing
export default COMPANIES;

// Legacy exports for backward compatibility (can be removed later)
export const COMPANY_LOGOS = Object.fromEntries(
  Object.entries(COMPANIES).map(([name, data]) => [name, data.logo])
);

export const COMPANY_COLORS = Object.fromEntries(
  Object.entries(COMPANIES).map(([name, data]) => [name, data.colors])
);

export const COMPANY_TAGLINES = Object.fromEntries(
  Object.entries(COMPANIES).map(([name, data]) => [name, data.tagline])
);

export const COMPANY_WEBSITES = [
  {
    url: 'https://southerntrading.com.au/',
    label: 'southerntrading.com.au'
  },
  {
    url: 'https://westaustraliancrystalcrab.com.au/',
    label: 'westaustraliancrystalcrab.com.au'
  },
  {
    url: 'https://aquaticlife.com.au/',
    label: 'aquaticlife.com.au'
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


