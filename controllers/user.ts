// src/controllers/user.ts
import type { Context } from 'koa'
import { User } from '../src/entity/user'
import { AppDataSource } from '../src/db'

const userRepository = AppDataSource.getRepository(User)

export default class UserController {
  public static async listUsers(ctx: Context) {
    const users = await userRepository.find()

    ctx.status = 200
    ctx.body = users
  }

  public static async showUserDetail(ctx: Context) {
    const user = await userRepository.findOneBy({ id: +ctx.params.id })

    if (user) {
      ctx.status = 200
      ctx.body = user
    }
    else {
      ctx.status = 404
    }
  }

  public static async updateUser(ctx: Context) {
    await userRepository.update(+ctx.params.id, ctx.request.body || {})

    const updatedUser = await userRepository.findOneBy({ id: ctx.params.id })
    if (updatedUser) {
      ctx.status = 200
      ctx.body = '更新成功'
    }
    else {
      ctx.status = 404
    }
  }

  public static async deleteUser(ctx: Context) {
    const checkUser = await userRepository.findOneBy({ id: ctx.params.id })
    if (!checkUser) {
      ctx.status = 404
      ctx.body = '账号不存在'
      return
    }
    await userRepository.delete(+ctx.params.id)

    const deletedUser = await userRepository.findOneBy({ id: ctx.params.id })
    if (!deletedUser) {
      ctx.status = 200
      ctx.body = '删除成功'
    }
    else {
      ctx.status = 404
      ctx.body = '删除失败'
    }
  }
}
