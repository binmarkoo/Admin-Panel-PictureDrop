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
    user.NameEn = createWorkspaceDto.NameEn;
    user.Description = createWorkspaceDto.Description;
    user.DescriptionEn = createWorkspaceDto.DescriptionEn;
    user.ContactUrl = createWorkspaceDto.ContactUrl;
    user.ContactMail = createWorkspaceDto.ContactMail;
    user.ContactPhone = createWorkspaceDto.ContactPhone;
    user.FirstName = createWorkspaceDto.FirstName;
    user.LastName = createWorkspaceDto.LastName;
    user.DateOfBirth = createWorkspaceDto.DateOfBirth;
    user.AddressLine1=createWorkspaceDto.AddressLine1;
    user.AddressLine2 = createWorkspaceDto.AddressLine2;
    user.PostalCode = createWorkspaceDto.PostalCode;
    user.City = createWorkspaceDto.City;
    user.CountryId = createWorkspaceDto.CountryId;
    user.CompanyName = createWorkspaceDto.CompanyName;
    user.CompanyVat = createWorkspaceDto.CompanyVat;
    user.CompanyDataProtectionUrl = createWorkspaceDto.CompanyDataProtectionUrl;
    user.UploadLimit = createWorkspaceDto.UploadLimit;
    user.StripeSubscriptionId = createWorkspaceDto.StripeSubscriptionId;
    user.StripeSessionId = createWorkspaceDto.StripeSessionId;
    user.SubscriptionStatus = createWorkspaceDto.SubscriptionStatus;
    user.SubscriptionEndDate = createWorkspaceDto.SubscriptionEndDate;
    user.TrialStartOn = createWorkspaceDto.TrialStartOn;
    user.TrialEndsOn = createWorkspaceDto.TrialEndsOn;
    user.OwnerId = createWorkspaceDto.OwnerId;
    user.FileId = createWorkspaceDto.FileId;
    user.DefaultPrizeId = createWorkspaceDto.DefaultPrizeId;
    user.HasPassword = createWorkspaceDto.HasPassword;
    user.Password = createWorkspaceDto.Password;
    user.Slug = createWorkspaceDto.Slug;
    user.CreatedById = createWorkspaceDto.CreatedById;
    user.CreatedOn = createWorkspaceDto.CreatedOn;
    user.LastModifiedById = createWorkspaceDto.LastModifiedById;
    user.LastModifiedOn = createWorkspaceDto.LastModifiedOn;
    return await this.workspaceRepository.save(user);
  }

  async findAll(): Promise<Workspace[]> {
    return await this.workspaceRepository.find();
  }

  async findOne(Id: number): Promise<Workspace> {
    return await this.workspaceRepository.findOne({ where: { Id } });
  }

  async update(Id: number, updateWorkspaceDto: UpdateWorkspaceDto): Promise<Workspace> {
    const voucher = await this.workspaceRepository.findOne({ where: { Id } });
    if (!voucher) {
      throw new NotFoundException('Workspace not found');
    }
    await this.workspaceRepository.update({ Id }, updateWorkspaceDto);
    return voucher;
  }

}
