/* eslint-disable */

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubmissionItemDto } from './dto/create-submission-item.dto';
import { UpdateSubmissionItemDto } from './dto/update-submission-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SubmissionItem } from './entities/submission-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubmissionItemService {
  constructor(
    @InjectRepository(SubmissionItem) private submissionitemRepository: Repository<SubmissionItem>
  ) {}
  
  async create(createSubmissionItemDto: CreateSubmissionItemDto): Promise<SubmissionItem> {
    const user = new SubmissionItem();
    user.Id = createSubmissionItemDto.Id;
    user.SubmissionId = createSubmissionItemDto.SubmissionId;
    user.Rating = createSubmissionItemDto.Rating;
    user.Orientation = createSubmissionItemDto.Orientation;
    user.CreatedOn = createSubmissionItemDto.CreatedOn;
    user.LastModifiedOn = createSubmissionItemDto.LastModifiedOn;
    return await this.submissionitemRepository.save(user);
  }

  async findAll(): Promise<SubmissionItem[]> {
    return await this.submissionitemRepository.find();
  }

  async findOne(Id: string): Promise<SubmissionItem> {
    return await this.submissionitemRepository.findOne({ where: { Id } });
  }

  async update(Id: string, updateSubmissionItemDto: UpdateSubmissionItemDto): Promise<SubmissionItem> {
    const submissionItem = await this.submissionitemRepository.findOne({ where: { Id } });
    if (!submissionItem) {
      throw new NotFoundException('SubmissionItem not found');
    }
    await this.submissionitemRepository.update({ Id }, updateSubmissionItemDto);
    return submissionItem;
  }



}
