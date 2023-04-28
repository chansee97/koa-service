import Koa from 'koa'
import cors from '@koa/cors'
import koaBody from 'koa-body'

import { consola } from 'consola'

import Auth from '../routes/auth'
import User from '../routes/user'
import router from './routes'
import { logger } from './logger'

// 初始化 Koa 应用实例
const app = new Koa()

// 注册中间件
app.use(logger())
app.use(cors())
app.use(koaBody())

// 响应用户请求
app.use(Auth.routes()).use(Auth.allowedMethods())
app.use(User.routes()).use(User.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

// 运行服务器
app.listen(3000)
consola.success('app run in http://localhost:3000')
