import { defineCollection } from 'astro:content'
import {
  clientSchema,
  manifestoSchema,
  pageSchema,
  serviceSchema,
  workSchema,
  testimonialSchema,
} from '../schemas'

const clientCollection = defineCollection({ schema: clientSchema })
const manifestoCollection = defineCollection({ schema: manifestoSchema })
const pageCollection = defineCollection({ schema: pageSchema })
const serviceCollection = defineCollection({ schema: serviceSchema })
const testimonialCollection = defineCollection({ schema: testimonialSchema })
const workCollection = defineCollection({ schema: workSchema })

export const collections = {
  clients: clientCollection,
  manifesto: manifestoCollection,
  pages: pageCollection,
  services: serviceCollection,
  work: workCollection,
  testimonials: testimonialCollection
}
