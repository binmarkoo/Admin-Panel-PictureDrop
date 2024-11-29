/* eslint-disable */

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VouchersService } from './voucher.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';

@Controller('vouchers')
export class VouchersController {
  constructor(private readonly voucherService: VouchersService) {}

  @Post()
  create(@Body() createVoucherDto: CreateVoucherDto) {
    return this.voucherService.create(createVoucherDto);
  }

  @Get()
  findAll() {
    return this.voucherService.findAll();
  }

  @Get(':Id')
  findOne(@Param('Id') Id: number) {
    return this.voucherService.findOne(Id);
  }

  @Patch(':Id')
  update(@Param('Id') Id: number, @Body() updateVoucherDto: UpdateVoucherDto) {
    return this.voucherService.update(Id, updateVoucherDto);
  }

  
}
