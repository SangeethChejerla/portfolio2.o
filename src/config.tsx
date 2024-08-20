import type React from 'react';

export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Social = {
  platform: string;
  link: string;
  icon: React.ReactNode;
};

export type Category = {
  title: string;
  page: string | undefined;
  href: string;
};

export type Meta = {
  title: string;
  description: string;
  image: Image;
};

export type SiteConfig = {
  meta: Meta;
  name: string;
  headshot: string;
  title: string;
  description: string;
  categories: Array<Category>;
};

export const CONFIG: SiteConfig = {
  meta: {
    title: 'Gaia Rossi',
    description: 'This is my portfolio.',
    image: {
      src: '/headshot.jpg',
      alt: 'Gaia Rossi',
    },
  },
  name: 'Gaia Rossi',
  headshot: '/headshot.jpg',
  title: 'Software Developer',
  description: `I'm Gaia Rossi, an Italian front-end developer with over a decade of experience in crafting beautiful, user-friendly websites. 
  I specialize in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js. 
  Beyond coding, I have a passion for traveling and discovering new cultures, which often inspires my work. 
  I also love to cook and experiment with new dishes from around the world. 
  This blend of technical skills and diverse experiences allows me to bring a unique and creative perspective to every project I undertake.`,

  categories: [
    {
      title: 'All',
      page: undefined,
      href: '/posts',
    },
    {
      title: 'Technical',
      page: 'tech',
      href: '/posts/tech',
    },
    {
      title: 'AI',
      page: 'ai',
      href: '/posts/ai',
    },
    {
      title: 'Entertainment',
      page: 'entertainment',
      href: '/posts/entertainment',
    },
    {
      title: 'Travel',
      page: 'travel',
      href: '/posts/travel',
    },
    {
      title: 'Philosophy',
      page: 'philosophy',
      href: '/posts/philosophy',
    },
  ],
};
