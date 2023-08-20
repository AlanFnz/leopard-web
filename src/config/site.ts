import type { MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig; 

// this will come from api
const projectName = 'Dub Culture';
const projectDescription = ''

export const siteConfig = {
  name: `${projectName} [L30P4RD]`,
  description: projectDescription || '',
  url: 'https://#',
  ogImage: 'https://#',
  mainNav: [
    {
      title: 'Home',
    },
    // reference section
    //    {
    //     title: 'Events',
    //     href: '/events',
    //     description: 'Events',
    //    },
  ] satisfies MainNavItem[],
  links: {
    instagram: 'https://instagram.com/dubculture.ar',
    twitter: 'https://twitter.com/',
  },
};

