import type { SiteConfig } from '@/types/config';

export const siteConfig: SiteConfig = {
  title: 'Mayavi',
  subtitle: 'Portfolio',
  lang: 'en', // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
};
