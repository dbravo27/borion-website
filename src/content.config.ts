import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/insights' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    eyebrow: z.string(),
    author: z.string(),
    readMin: z.number(),
    art: z.enum(['cpg', 'deck', 'handoff']),
  }),
});

export const collections = { insights };
