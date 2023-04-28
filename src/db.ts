import { DataSource } from 'typeorm'
import 'reflect-metadata'
import { consola } from 'consola'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'pass',
  database: 'koa',
  synchronize: true,
  entities: ['src/entity/*.ts'],
})

AppDataSource.initialize()
  .then(() => {
    consola.success('Data Source has been initialized!')
  })
  .catch((err: string) => consola.error('TypeORM connection error:', err))
