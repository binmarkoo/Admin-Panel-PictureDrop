/* eslint-disable */

// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace) private workspaceRepository: Repository<Workspace>,
  ) {}

  async create(createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    const user = new Workspace();
    user.Id = createWorkspaceDto.Id;
    user.Name = createWorkspaceDto.Name;
    user.Description = createWorkspaceDto.Description
    user.CompanyName = createWorkspaceDto.CompanyName;
    user.Slug = createWorkspaceDto.Slug;
    user.SubscriptionStatus = createWorkspaceDto.SubscriptionStatus
    return await this.workspaceRepository.save(user);
  }

  async findAll(): Promise<Workspace[]> {
    return await this.workspaceRepository.find();
  }

  async findOne(Id: string): Promise<Workspace> {
    return await this.workspaceRepository.findOne({ where: { Id } });
  }

  async update(Id: string, updateWorkspaceDto: UpdateWorkspaceDto): Promise<Workspace> {
    const voucher = await this.workspaceRepository.findOne({ where: { Id } });
    if (!voucher) {
      throw new NotFoundException('Workspace not found');
    }
    await this.workspaceRepository.update({ Id }, updateWorkspaceDto);
    return voucher;
  }

}
