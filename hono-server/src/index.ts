import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()


app.use('/*', serveStatic({
  root: '../static',
  rewriteRequestPath: (path) => {
    if (path === '/') return '/html/followingPage.html'
    return path
  }
}))

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
