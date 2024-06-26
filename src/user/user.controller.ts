import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async createUser(@Body('user') creatUserDto: CreateUserDto) {
    const user = await this.userService.createUser(creatUserDto);
    return this.userService.buildUserResponse(user);
  }
}
