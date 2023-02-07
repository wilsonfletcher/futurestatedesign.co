import { z } from 'astro:content'

export const clientSchema = z.object({
  name: z.string(),
  logo: z.string().optional(),
  image: z.string().optional(),
  sortOrder: z.number(),
  draft: z.boolean().optional(),
})

export const manifestoSchema = z.object({
  description: z.string(),
  draft: z.boolean().optional(),
})

export const pageSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  url: z.string().optional(),
  image: z.object({
    url: z.string().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    alt: z.string().optional(),
  }).optional(),
  draft: z.boolean().optional(),
  theme: z.string().optional()
})