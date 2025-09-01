import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RequestUserDto } from './dto/request.user.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) 
    private usersRepository: Repository<User>
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  async create(userRequest: RequestUserDto) {
    const hashedPassword = await bcrypt.hash(userRequest.password, 10);
    const newUser = this.usersRepository.create({
      ...userRequest,
      password: hashedPassword,
    });
    return this.usersRepository.save(newUser);
  }

}
