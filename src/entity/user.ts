// src/entity/user.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name?: string

  @Column({ select: false })
  password?: string

  @Column()
  email?: string
}
