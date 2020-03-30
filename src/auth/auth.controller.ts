import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './interfaces/auth.dto';
import { UserDTO } from '../user/interfaces/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public login(@Body() dto: AuthDTO): Promise<AuthDTO> {
    return this.authService.login(dto);
  }

  @Post('register')
  public register(@Body() dto: UserDTO): Promise<AuthDTO> {
    return this.authService.register(dto);
  }
}
