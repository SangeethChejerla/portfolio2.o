// src/lib/db.ts
import { createPool, sql } from '@vercel/postgres';
import 'dotenv/config';

const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
});

export async function incrementViews(slug: string) {
  await sql`
    INSERT INTO views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug)
    DO UPDATE SET count = views.count + 1
  `;
}

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  const views = await sql`
    SELECT slug, count
    FROM views
  `;
  return views.rows as { slug: string; count: number }[];
}

export async function getBlogViews(): Promise<number> {
  const views = await sql`
    SELECT count
    FROM views
  `;
  return views.rows.reduce((acc, curr) => acc + Number(curr.count), 0);
}
