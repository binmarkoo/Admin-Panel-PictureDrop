/* eslint-disable */

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubmissionItemService } from './submission-item.service';
import { CreateSubmissionItemDto } from './dto/create-submission-item.dto';
import { UpdateSubmissionItemDto } from './dto/update-submission-item.dto';

@Controller('submission-item')
export class SubmissionItemController {
  constructor(private readonly submissionItemService: SubmissionItemService) {}

  @Post()
  create(@Body() createSubmissionItemDto: CreateSubmissionItemDto) {
    return this.submissionItemService.create(createSubmissionItemDto);
  }

  @Get()
  findAll() {
    return this.submissionItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.submissionItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubmissionItemDto: UpdateSubmissionItemDto) {
    return this.submissionItemService.update(+id, updateSubmissionItemDto);
  }


}
