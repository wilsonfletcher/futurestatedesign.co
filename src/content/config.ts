import { defineCollection } from 'astro:content'
import { clientSchema, manifestoSchema, pageSchema } from '../schemas'

const clientCollection = defineCollection({ schema: clientSchema })
const manifestoCollection = defineCollection({ schema: manifestoSchema })
const pageCollection = defineCollection({ schema: pageSchema })

export const collections = {
  clients: clientCollection,
  manifesto: manifestoCollection,
  pages: pageCollection
}
