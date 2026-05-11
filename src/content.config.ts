import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    category: z.string(),
    readTime: z.string(),
    lede: z.string(),
  }),
});

export const collections = { insights };
