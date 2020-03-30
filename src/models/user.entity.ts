import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from './base.entity';
import * as bcrypt from 'bcryptjs';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 20, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'varchar', length: 20, default: 'user' })
  role: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  checkPassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}
