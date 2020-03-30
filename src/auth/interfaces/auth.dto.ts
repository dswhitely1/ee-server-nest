import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { User } from '../../models/user.entity';

export class AuthDTO implements Readonly<AuthDTO> {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiHideProperty()
  @IsString()
  message: string;

  @ApiHideProperty()
  @IsString()
  token: string;

  public static from(dto: Partial<AuthDTO>) {
    const auth = new AuthDTO();
    auth.message = `Welcome ${dto.username}!`;
    auth.token = dto.token;
    return auth;
  }

  public static fromEntity(entity: User, token: string) {
    return this.from({
      username: entity.username,
      token,
    });
  }
}
