import { type CollectionEntry, getCollection } from 'astro:content';
import { slugify } from './utils';

export const getPosts = async (max?: number) => {
  return (await getCollection('blog'))
    .filter((post: { data: { draft: any } }) => !post.data.draft)
    .sort(
      (
        a: { data: { publishedAt: number } },
        b: { data: { publishedAt: number } },
      ) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
    )
    .slice(0, max);
};

export const getAllCategories = async () => {
  const posts = await getCollection('blog');
  const categories = new Set(
    posts.map((post: { data: { category: any } }) => post.data.category),
  );
  return Array.from(categories);
};

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
  const tags = [
    ...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean)),
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
