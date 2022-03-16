import { FC, useState } from 'react'

export const Home: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <header>
      <p>Hello Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            // https://github.com/login/oauth/authorize

            const url = new URL('https://github.com/login/oauth/authorize')
            url.searchParams.set('client_id', import.meta.env.VITE_CLIENT_ID)
            url.searchParams.set('scope', 'repo,gist')
            location.href = url.href
          }}
        >
          login
        </button>
      </p>
    </header>
  )
}
