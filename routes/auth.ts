import Router from '@koa/router'
import AuthController from '../controllers/auth'

const router = new Router({ prefix: '/v1/auth' })

// auth 相关的路由
router.post('/auth/login', AuthController.login)
router.post('/auth/register', AuthController.register)

export default router
