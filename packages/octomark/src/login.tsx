import { FC, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const Login: FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const init = async () => {
      const code = searchParams.get('code')

      if (code) {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: import.meta.env.VITE_CLIENT_ID,
            code,
          }),
        })
        const json = await res.json()
        localStorage.setItem('token', json.access_token)
      }

      navigate('/')
    }
    init()
  }, [])

  return null
}
