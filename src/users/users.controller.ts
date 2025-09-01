import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import type { RequestUserDto } from './dto/request.user.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() userRequest: RequestUserDto) {
    return await this.usersService.create(userRequest);
  }

}
