import { lazy } from 'react';
import { getSignatureAssetUrl } from '../shared/utils/assets';

export const CLIENTS = [
  {
    slug: 'ali',
    name: 'Aquatic Life Industries',
    route: '/ali',
    version: 'v1',
    versionRoute: '/ali/v1',
    logo: 'logos/ali.jpg'
  },
  {
    slug: 'pure-leasing',
    name: 'Pure Leasing',
    route: '/pureleasing',
    version: 'v1',
    versionRoute: '/pureleasing/v1',
    logo: 'pure-logo.png'
  },
  {
    slug: 'helmroad',
    name: 'Helm Road',
    route: '/helmroad',
    version: 'v1',
    versionRoute: '/helmroad/v1',
    logo: 'logo.png'
  },
  {
    slug: 'gmm',
    name: 'Globe Metals & Mining',
    route: '/gmm',
    version: 'v1',
    versionRoute: '/gmm/v1',
    logo: 'logo.png'
  },
  {
    slug: 'okmg',
    name: 'OKMG',
    route: '/okmg',
    version: 'v1',
    versionRoute: '/okmg/v1',
    logo: 'logo-bigger.jpg'
  },
  {
    slug: 'beyondtraffic',
    name: 'Beyond Traffic Management',
    route: '/beyondtraffic',
    version: 'v1',
    versionRoute: '/beyondtraffic/v1',
    logo: 'logo.png'
  },
  {
    slug: 'spoton',
    name: 'SpotOn Group',
    route: '/spoton',
    version: 'v1',
    versionRoute: '/spoton/v1',
    logo: 'form-logo.svg'
  },
  {
    slug: 'newme',
    name: 'New Me',
    route: '/newme',
    version: 'v1',
    versionRoute: '/newme/v1',
    logo: 'logos/newme.png'
  },
  {
    slug: 'hair-supplies',
    name: 'Hair Supplies',
    route: '/hairsupplies',
    version: 'v1',
    versionRoute: '/hairsupplies/v1',
    logo: 'logos/hs-email.png'
  },
  {
    slug: 'heirloom',
    name: 'Heirloom Honey Co.',
    route: '/heirloom',
    version: 'v1',
    versionRoute: '/heirloom/v1',
    logo: 'logo.png'
  },
  {
    slug: 'talent-code',
    name: 'The Talent Code',
    route: '/talentcode',
    version: 'v1',
    versionRoute: '/talentcode/v1',
    logo: 'logo.png'
  },
  {
    slug: 'harvest-road',
    name: 'Harvest Road Group',
    route: '/harvestroad',
    version: 'v1',
    versionRoute: '/harvestroad/v1',
    logo: 'harvest-road.png'
  },
  {
    slug: 'western-honey-supplies',
    name: 'Western Honey Supplies',
    route: '/westernhoneysupplies',
    version: 'v1',
    versionRoute: '/westernhoneysupplies/v1',
    logo: 'logo.png'
  },
  {
    slug: 'ndsa',
    name: 'Notre Dame Student Association',
    route: '/ndsa',
    version: 'v1',
    versionRoute: '/ndsa/v1',
    logo: 'logo.png'
  },
  {
    slug: 'frigtech',
    name: 'FRIGTECH',
    route: '/frigtech',
    version: 'v1',
    versionRoute: '/frigtech/v1',
    logo: 'frigtech.jpg'
  }
].map((client) => ({
  ...client,
  logoUrl: getSignatureAssetUrl(client.slug, client.version, client.logo)
}))
  .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

const lazyClient = (slug) => lazy(() => import(`./${slug}/v1`));

export const CLIENT_ROUTES = CLIENTS.map((client) => ({
  ...client,
  component: lazyClient(client.slug)
}));
