import { visit } from 'unist-util-visit'
import { h } from 'hastscript'

// This plugin is an example to turn `::youtube` into iframes.
/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function myRemarkPlugin() {
  return (tree, file) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'youtube') return

        const data = node.data || (node.data = {})
        const attributes = node.attributes || {}
        const id = attributes.id

        if (node.type === 'textDirective')
          file.fail('Text directives for `youtube` not supported', node)
        if (!id) file.fail('Missing video id', node)

        data.hName = 'iframe'
        data.hProperties = {
          src: `https://www.youtube.com/embed/${id}`,
          width: 200,
          height: 200,
          frameBorder: 0,
          allow: 'picture-in-picture',
          allowFullScreen: true,
        }
      }
    })
  }
}

// This plugin is an example to turn `::note` into divs, passing arbitrary
// attributes.
/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function myRemarkPlugin2() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'note') return

        const data = node.data || (node.data = {})
        const tagName = node.type === 'textDirective' ? 'span' : 'div'

        data.hName = tagName
        data.hProperties = h(tagName, node.attributes).properties
      }
    })
  }
}
