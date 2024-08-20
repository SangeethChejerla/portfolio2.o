import type { CollectionEntry } from 'astro:content';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function slugify(input?: string) {
  if (!input) return '';

  // make lower case and trim
  let slug = input.toLowerCase().trim();

  // remove accents from charaters
  slug = slug.normalize('NFD').replace(/\p{M}/gu, '');

  // replace invalid chars with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

  // replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, '-');

  return slug;
}

export function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0)
    return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
  if (diffInMonths > 0)
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  if (diffInDays > 0)
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  return 'Today';
}

export function sortItemsByDateDesc(
  itemA: CollectionEntry<'blog'>,
  itemB: CollectionEntry<'blog'>,
) {
  return (
    new Date(itemB.data.publishedAt).getTime() -
    new Date(itemA.data.publishedAt).getTime()
  );
}
