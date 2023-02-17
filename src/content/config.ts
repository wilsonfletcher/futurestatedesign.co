import { defineCollection } from 'astro:content';

import {
  clientSchema,
  manifestoSchema,
  menuSchema,
  pageSchema,
  serviceSchema,
  testimonialSchema,
  workSchema,
} from '../schemas';

const clientCollection = defineCollection({ schema: clientSchema });
const manifestoCollection = defineCollection({ schema: manifestoSchema });
const menuCollection = defineCollection({ schema: menuSchema });
const pageCollection = defineCollection({ schema: pageSchema });
const serviceCollection = defineCollection({ schema: serviceSchema });
const testimonialCollection = defineCollection({ schema: testimonialSchema });
const workCollection = defineCollection({ schema: workSchema });

export const collections = {
  client: clientCollection,
  manifesto: manifestoCollection,
  menu: menuCollection,
  page: pageCollection,
  service: serviceCollection,
  testimonial: testimonialCollection,
  work: workCollection,
};
