import { FC } from 'react'
import { useLocalStorage } from 'react-use'
import { useItemsQuery } from './generated/graphql'

export const Home: FC = () => {
  const [token] = useLocalStorage<string>('token', undefined, { raw: true })
  const { data, error, isFetching } = useItemsQuery(
    {
      endpoint: import.meta.env.VITE_ENDPOINT,
      fetchParams: {
        headers: {
          Authorization: `token ${token}`,
        },
      },
    },
    {},
    { enabled: token != null }
  )

  if (isFetching) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <header>
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
      <div>
        {data?.viewer.repository?.issues.nodes?.map((node) => {
          if (node?.__typename === 'Issue') {
            return (
              <div>
                <h2>{node.title}</h2>
                <p>{node.body}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
