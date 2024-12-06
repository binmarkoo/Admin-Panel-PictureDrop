/* eslint-disable */

import { Module } from '@nestjs/common';
import { SubmissionItemService } from './submission-item.service';
import { SubmissionItemController } from './submission-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionItem } from './entities/submission-item.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [TypeOrmModule.forFeature([SubmissionItem]), DatabaseModule],
  controllers: [SubmissionItemController],
  providers: [SubmissionItemService],
})
export class SubmissionItemModule {}
