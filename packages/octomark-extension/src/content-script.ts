import { Readability } from '@mozilla/readability'

const article = new Readability(document).parse()
console.log(article)
