/* eslint-disable */

import { PartialType } from '@nestjs/mapped-types';
import { CreateSubmissionItemDto } from './create-submission-item.dto';

export class UpdateSubmissionItemDto extends PartialType(CreateSubmissionItemDto) {}
