/* eslint-disable */

// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.Id = createUserDto.Id;
    user.Username = createUserDto.Username;
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(Id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { Id } });
  }

  async update(Id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { Id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.update({ Id }, updateUserDto);
    return user;
  }

}
