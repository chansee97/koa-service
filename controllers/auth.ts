// src/controllers/auth.ts
import type { Context } from 'koa'
import { User } from '../src/entity/user'
import { AppDataSource } from '../src/db'

const userRepository = AppDataSource.getRepository(User)

export default class AuthController {
  public static async login(ctx: Context) {
    interface LoginForm {
      name: string
      password: string
    }
    const requestBody = ctx.request.body as LoginForm

    const user = await userRepository.findOneBy(requestBody)

    if (user) {
      ctx.status = 200
      ctx.body = user
    }
    else {
      ctx.status = 404
    }
  }

  public static async register(ctx: Context) {
    const newUser = new User()

    const requestBody = ctx.request.body as User
    newUser.name = requestBody.name
    newUser.email = requestBody.email
    newUser.password = requestBody.email

    // 保存到数据库
    const user = await userRepository.save(newUser)

    ctx.status = 201
    ctx.body = user
  }
}
