import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from './base.entity';
import * as bcrypt from 'bcryptjs'

@Entity({ name: 'user' })
@Unique(['username'])
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10)
  }

  checkPassword(password: string) {
    return bcrypt.compareSync(password, this.password)
  }
}
