/* eslint-disable */

// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VouchersService {
  constructor(
    @InjectRepository(Workspace) private workspaceRepository: Repository<Workspace>,
  ) {}

  async create(createVoucherDto: CreateWorkspaceDto): Promise<Workspace> {
    const user = new Workspace();
    user.Id = createVoucherDto.Id;
    user.Name = createVoucherDto.Name;
    user.NameEn = createVoucherDto.NameEn;
    user.Description = createVoucherDto.Description;
    user.DescriptionEn = createVoucherDto.DescriptionEn;
    user.ContactUrl = createVoucherDto.ContactUrl;
    user.ContactMail = createVoucherDto.ContactMail;
    user.ContactPhone = createVoucherDto.ContactPhone;
    user.FirstName = createVoucherDto.FirstName;
    user.LastName = createVoucherDto.LastName;
    user.DateOfBirth = createVoucherDto.DateOfBirth;
    user.AddressLine1=createVoucherDto.AddressLine1;
    return await this.workspaceRepository.save(user);
  }

  async findAll(): Promise<Workspace[]> {
    return await this.workspaceRepository.find();
  }

  async findOne(Id: number): Promise<Workspace> {
    return await this.workspaceRepository.findOne({ where: { Id } });
  }

  async update(Id: number, updateVoucherDto: UpdateWorkspaceDto): Promise<Workspace> {
    const voucher = await this.workspaceRepository.findOne({ where: { Id } });
    if (!voucher) {
      throw new NotFoundException('Voucher not found');
    }
    await this.workspaceRepository.update({ Id }, updateVoucherDto);
    return voucher;
  }

}
