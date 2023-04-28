// src/logger.ts
import type { Context } from 'koa'
import { consola } from 'consola'

export function logger() {
  return async (ctx: Context, next: () => Promise<void>) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    consola.success(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`)
  }
}
