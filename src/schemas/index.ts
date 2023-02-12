import { z } from 'astro:content'

export const articleSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z
    .object({
      url: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
      alt: z.string().optional(),
    })
    .optional(),
  datePublished: z.string(),
  draft: z.boolean().optional(),
})

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

export const menuSchema = z.object({
  name: z.string(),
  items: z.array(z.object({
    name: z.string(),
    url: z.string(),
    external: z.boolean().optional(),
  })),
})

export const pageSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  url: z.string().optional(),
  image: z
    .object({
      url: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
      alt: z.string().optional(),
    })
    .optional(),
  menu: z.object({
    primary: z.object({
      name: z.string(),
      weight: z.number(),
    }).optional(),
    secondary: z.object({
      name: z.string(),
      weight: z.number(),
    }).optional(),
  }).optional(),
  draft: z.boolean().optional(),
  type: z.string().optional(),
  theme: z.string().optional(),
})

export const serviceSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  image: z
    .object({
      url: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
      alt: z.string().optional(),
    })
    .optional(),
  sortOrder: z.number().optional(),
  draft: z.boolean().optional(),
})

export const workSchema = z.object({
  number: z.string(),
  name: z.string(),
  draft: z.boolean().optional(),
})

export const testimonialSchema = z.object({
  reviewBody: z.string(),
  author: z.object({
    name: z.string(),
    worksFor: z.string(),
    image: z
      .object({
        url: z.string().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        alt: z.string().optional(),
      })
      .optional(),
  }),
  draft: z.boolean().optional(),
})