/* eslint-disable */

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':Id')
  findOne(@Param('Id') Id: string) {
    return this.usersService.findOne(Id);
  }

  @Patch(':Id')
  update(@Param('Id') Id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(Id, updateUserDto);
  }

  @Delete(':Id')
  remove(@Param('Id') Id: string) {
    return this.usersService.remove(Id);
  }
}
