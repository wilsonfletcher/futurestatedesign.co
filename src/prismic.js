import * as prismic from '@prismicio/client'

const aipEndPoint = 'https://astro-prismic-demo.prismic.io/api/v2'

const Client = prismic.createClient(aipEndPoint);

export function getPage(slug) {
  return Client.getByUID('page', slug)
}

export function getAllPosts() {
  return Client.get(prismic.predicate.at('document.type', 'blog_post', {
    orderings: ['my.blog_post.name.date desc']
  }))
}