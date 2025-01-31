/* eslint-disable */

// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VouchersService {
  constructor(
    @InjectRepository(Voucher) private voucherRepository: Repository<Voucher>,
  ) {}

  async create(createVoucherDto: CreateVoucherDto): Promise<Voucher> {
    const user = new Voucher();
    user.Id = createVoucherDto.Id;
    user.VoucherCode = createVoucherDto.VoucherCode;
    user.ValidatedOn = createVoucherDto.ValidatedOn;
    user.WorkspaceId = createVoucherDto.WorkspaceId;
    user.CreatedOn = createVoucherDto.CreatedOn;;
    user.SubmissionId = createVoucherDto.SubmissionId;
    user.VoucherPrize = createVoucherDto.VoucherPrize;
    user.VoucherPrizeEn = createVoucherDto.VoucherPrizeEn;
    return await this.voucherRepository.save(user);
  }

  async findAll(): Promise<Voucher[]> {
    return await this.voucherRepository.find();
  }

  async findOne(Id: string): Promise<Voucher> {
    return await this.voucherRepository.findOne({ where: { Id } });
  }

  async update(Id: string, updateVoucherDto: UpdateVoucherDto): Promise<Voucher> {
    const voucher = await this.voucherRepository.findOne({ where: { Id } });
    if (!voucher) {
      throw new NotFoundException('Voucher not found');
    }
    await this.voucherRepository.update({ Id }, updateVoucherDto);
    return voucher;
  }


  async remove(Id:string):Promise<Voucher>{
    const voucher = await this.voucherRepository.findOne({ where: { Id } });
    if (!voucher) {
      throw new NotFoundException('Voucher not found');
    }
    await this.voucherRepository.remove(voucher);
    return voucher;
  }
}