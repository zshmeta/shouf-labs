const toMarkdown = require('ast-to-markdown')
 
const mdText = toMarkdown(tree)
 
console.log(mdText)
