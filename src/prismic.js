import * as Prismic from "@prismicio/client";

// const API_ENDPOINT = process.env.ASTRO_PUBLIC_PRISMIC_URL;
const API_ENDPOINT = 'https://futurestatedesignco.cdn.prismic.io/api/v2';

const Client = Prismic.createClient(API_ENDPOINT);

console.log(API_ENDPOINT)

export function getAllServices() {
  return Client.getAllByType('service')
}

export function getPage(slug) {
  return Client.getByID(page, slug);
}