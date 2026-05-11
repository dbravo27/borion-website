import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    date: z.date(),
    author: z.string().default('Claud Rodriguez, CSO'),
    readMin: z.number().int().positive(),
    art: z.enum(['cpg', 'deck', 'handoff']),
    slug: z.string().optional(),
  }),
});

export const collections = { insights };
