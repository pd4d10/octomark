import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async (req: VercelRequest, res: VercelResponse) => {
  const r = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json', // Return JSON
    },
    body: JSON.stringify({
      ...req.body,
      client_secret: process.env.CLIENT_SECRET,
    }),
  })
  const json = await r.json()
  res.json(json)
}
