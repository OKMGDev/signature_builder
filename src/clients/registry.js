import { lazy } from 'react';

export const CLIENTS = [
  {
    slug: 'ali',
    name: 'Aquatic Life Industries',
    route: '/ali',
    version: 'v1',
    versionRoute: '/ali/v1'
  },
  {
    slug: 'pure-leasing',
    name: 'Pure Leasing',
    route: '/pureleasing',
    version: 'v1',
    versionRoute: '/pureleasing/v1'
  },
  {
    slug: 'helmroad',
    name: 'Helm Road',
    route: '/helmroad',
    version: 'v1',
    versionRoute: '/helmroad/v1'
  },
  {
    slug: 'gmm',
    name: 'Globe Metals & Mining',
    route: '/gmm',
    version: 'v1',
    versionRoute: '/gmm/v1'
  },
  {
    slug: 'okmg',
    name: 'OKMG',
    route: '/okmg',
    version: 'v1',
    versionRoute: '/okmg/v1'
  },
  {
    slug: 'beyondtraffic',
    name: 'Beyond Traffic Management',
    route: '/beyondtraffic',
    version: 'v1',
    versionRoute: '/beyondtraffic/v1'
  },
  {
    slug: 'spoton',
    name: 'SpotOn Group',
    route: '/spoton',
    version: 'v1',
    versionRoute: '/spoton/v1'
  },
  {
    slug: 'newme',
    name: 'New Me',
    route: '/newme',
    version: 'v1',
    versionRoute: '/newme/v1'
  },
  {
    slug: 'hair-supplies',
    name: 'Hair Supplies',
    route: '/hairsupplies',
    version: 'v1',
    versionRoute: '/hairsupplies/v1'
  },
  {
    slug: 'heirloom',
    name: 'Heirloom Honey Co.',
    route: '/heirloom',
    version: 'v1',
    versionRoute: '/heirloom/v1'
  },
  {
    slug: 'talent-code',
    name: 'The Talent Code',
    route: '/talentcode',
    version: 'v1',
    versionRoute: '/talentcode/v1'
  },
  {
    slug: 'harvest-road',
    name: 'Harvest Road Group',
    route: '/harvestroad',
    version: 'v1',
    versionRoute: '/harvestroad/v1'
  }
];

const lazyClient = (slug) => lazy(() => import(`./${slug}/v1`));

export const CLIENT_ROUTES = CLIENTS.map((client) => ({
  ...client,
  component: lazyClient(client.slug)
}));
