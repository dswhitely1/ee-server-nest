import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './interfaces/user.dto';
import { User } from '../models/user.entity';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getAll(): Promise<UserDTO[]> {
    return this.userService.getAll();
  }

  @Post()
  public async create(@Body() dto: UserDTO): Promise<UserDTO> {
    return this.userService.create(dto);
  }

  @Post('login')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Successful Login' })
  @ApiUnauthorizedResponse({ description: 'UnAuthorized' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiNotFoundResponse({ description: 'Username not found' })
  public async login(@Body() dto: UserDTO): Promise<UserDTO> {
    return this.userService.login(dto);
  }
}
