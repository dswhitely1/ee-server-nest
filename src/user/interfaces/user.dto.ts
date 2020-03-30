import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsDate } from 'class-validator';
import { User } from '../../models/user.entity';

export class UserDTO implements Readonly<UserDTO> {
  @ApiHideProperty()
  @IsUUID()
  id: string;

  @ApiProperty({ required: true })
  @IsString()
  username: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;

  @ApiHideProperty()
  @IsString()
  role: string;

  @ApiHideProperty()
  @IsDate()
  createdAt: Date;

  @ApiHideProperty()
  @IsDate()
  updatedAt: Date;

  public static from(dto: Partial<UserDTO>) {
    const user = new UserDTO();
    user.id = dto.id;
    user.username = dto.username;
    user.role = dto.role;
    user.createdAt = dto.createdAt;
    user.updatedAt = dto.updatedAt;
    return user;
  }

  public static fromEntity(entity: User) {
    return this.from({
      id: entity.id,
      username: entity.username,
      role: entity.role,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }

  public toEntity() {
    const newUser = new User();
    newUser.id = this.id;
    newUser.username = this.username;
    newUser.password = this.password;
    newUser.hashPassword();
    newUser.role = this.role;
    return newUser;
  }
}
