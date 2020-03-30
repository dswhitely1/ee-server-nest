import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './interfaces/user.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async getAll(): Promise<UserDTO[]> {
    return await this.userRepository
      .find()
      .then(users => users.map(user => UserDTO.fromEntity(user)));
  }

  public async create(dto: UserDTO): Promise<UserDTO> {
    const updatedDTO = plainToClass(UserDTO, dto);
    return await this.userRepository
      .save(updatedDTO.toEntity())
      .then(user => UserDTO.fromEntity(user));
  }

  public async login(dto: Partial<UserDTO>): Promise<UserDTO> {
    const { username, password } = dto;
    if (!username || !password) {
      throw new BadRequestException();
    }
    let user;
    try {
      user = await this.userRepository.findOneOrFail({ where: { username } });
    } catch (error) {
      throw new NotFoundException();
    }

    if (!user.checkPassword(password)) {
      throw new UnauthorizedException();
    }

    // Logic to Sign A New Token
    return UserDTO.fromEntity(user);
  }
}
