import { Readability } from '@mozilla/readability'
import TurndownService from 'turndown'

const turndown = new TurndownService()

const doc = document.cloneNode(true) as Document
const reader = new Readability(doc, {
  // debug: true,
})
const article = reader.parse()
// console.log(article)

if (article) {
  const md = turndown.turndown(article.content)
  // console.log(md)

  chrome.runtime.sendMessage({
    type: 'preview',
    content: md,
  })
}
