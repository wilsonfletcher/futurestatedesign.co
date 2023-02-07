import { defineCollection } from 'astro:content'
import { clientSchema, manifestoSchema, pageSchema, serviceSchema } from '../schemas'

const clientCollection = defineCollection({ schema: clientSchema })
const manifestoCollection = defineCollection({ schema: manifestoSchema })
const pageCollection = defineCollection({ schema: pageSchema })
const serviceCollection = defineCollection({ schema: serviceSchema })

export const collections = {
  clients: clientCollection,
  manifesto: manifestoCollection,
  pages: pageCollection,
  services: serviceCollection
}
