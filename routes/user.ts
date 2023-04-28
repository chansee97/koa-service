import Router from '@koa/router'
import UserController from '../controllers/user'

const router = new Router({ prefix: '/v1/user' })

router.get('/user', UserController.listUsers)
router.get('/user/:id', UserController.showUserDetail)
router.put('/user/:id', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)

export default router
