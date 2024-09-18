import { type CollectionEntry, getCollection } from 'astro:content';
import { slugify } from './utils';

export const getPosts = async (max?: number) => {
  const posts = await getCollection('blog');

  return posts
    .filter((post: CollectionEntry<'blog'>) => !post.data.draft) // Using CollectionEntry type
    .sort(
      (a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) =>
        b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(), // Ensure publishedAt is a Date
    )
    .slice(0, max);
};

export const getAllCategories = async () => {
  const posts = await getCollection('blog');

  const categories = new Set(
    posts
      .map((post: CollectionEntry<'blog'>) => post.data.category)
      .filter(Boolean), // Added filter to avoid undefined
  );

  return Array.from(categories);
};

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
  const tags = [
    ...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean)), // Ensure we filter out undefined values
  ];

  return tags.map((tag) => ({
    name: tag,
    slug: slugify(tag),
  }));
}

export function getPostsByCategory(
  posts: CollectionEntry<'blog'>[],
  category: string,
) {
  return posts.filter(
    (post) => (post.data.category || '').toLowerCase() === slugify(category),
  );
}

export function getPostsByTag(
  posts: CollectionEntry<'blog'>[],
  tagSlug: string,
) {
  return posts.filter((post) =>
    (post.data.tags || [])
      .map((tag: string | undefined) => slugify(tag))
      .includes(tagSlug),
  );
}
