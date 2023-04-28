import Router from '@koa/router'

const router = new Router()
// root
router.get('/', async (ctx) => {
  ctx.response.body = '<h1>Home</h1>'
})

router.get('/api/login', async (ctx) => {
  ctx.response.body = '<h1>Login</h1>'
})

export default router
