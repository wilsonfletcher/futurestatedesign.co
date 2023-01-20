import * as Prismic from '@prismicio/client';

const API_ENDPOINT = 'https://futurestatedesignco.cdn.prismic.io/api/v2'
const Client = Prismic.createClient(API_ENDPOINT);

console.log(API_ENDPOINT)

export function getAllClients() {
  return Client.getAllByType("client", {
    orderings: {
      field: 'my.client.name',
      direction: 'asc'
    }
  });
}