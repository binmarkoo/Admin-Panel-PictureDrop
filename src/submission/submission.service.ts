import { Injectable } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Submission } from './entities/submission.entity';

@Injectable()
export class SubmissionService {

  constructor(@InjectRepository(Submission) private submissionRepo){}

  async findAll():Promise<Submission[]> {
    return await this.submissionRepo.find();
  }

  async findOne(id: string) {
    return await this.submissionRepo.findOne({where:{id}});
  }

}
