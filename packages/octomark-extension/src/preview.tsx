import { FC, useState } from 'react'
import { render } from 'react-dom'
import { Editor } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import { ThemeProvider, Box, FormControl, TextInput } from '@primer/react'

import 'bytemd/dist/index.css'
import 'github-markdown-css'
import './preview.css'

const search = new URLSearchParams(location.search)
const initials = {
  title: search.get('title') ?? '',
  content: search.get('content') ?? '',
}

const plugins = [gfm()]

const App: FC = () => {
  const [title, setTitle] = useState(initials.title)
  const [content, setContent] = useState(initials.content)

  if (!content) {
    return <div>no content</div>
  }

  return (
    <ThemeProvider>
      <Box display="grid" gridGap={3}>
        <FormControl>
          <FormControl.Label>Title</FormControl.Label>
          <TextInput
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Content</FormControl.Label>
          <Editor
            value={content}
            onChange={(v) => {
              setContent(v)
            }}
            plugins={plugins}
          />
        </FormControl>
      </Box>
    </ThemeProvider>
  )
}

render(<App />, document.getElementById('root'))
