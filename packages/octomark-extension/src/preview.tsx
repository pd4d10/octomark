import { Editor } from 'bytemd'
import gfm from '@bytemd/plugin-gfm'
import 'bytemd/dist/index.css'
import 'github-markdown-css'
import './preview.css'

const search = new URLSearchParams(location.search)
const content = search.get('content')

new Editor({
  target: document.body,
  props: {
    value: content,
    plugins: [gfm()],
  },
})
