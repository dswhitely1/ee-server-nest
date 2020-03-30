import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity';
import { Repository } from 'typeorm';
import { AuthDTO } from './interfaces/auth.dto';
import { UserDTO } from '../user/interfaces/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async login(dto: Partial<AuthDTO>): Promise<AuthDTO> {
    return;
  }

  public async register(dto: Partial<UserDTO>): Promise<AuthDTO> {
    return;
  }
}
