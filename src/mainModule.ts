/* eslint-disable */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { User } from './users/entities/user.entity';
import { Voucher } from './vouchers/entities/voucher.entity';
import { UsersController } from './users/users.controller';
import { VouchersController } from './vouchers/voucher.controller';
import { UsersService } from './users/users.service';
import { VouchersService } from './vouchers/voucher.service';
import { WorkspaceService } from './workspaces/workspaces.service';
import { WorkspacesController } from './workspaces/workspaces.controller';
import { Workspace } from './workspaces/entities/workspace.entity';
import { SubmissionItemController } from './submission-item/submission-item.controller';
import { SubmissionItemService } from './submission-item/submission-item.service';
import { SubmissionItem } from './submission-item/entities/submission-item.entity';


@Module({
    imports: [TypeOrmModule.forFeature([User,Voucher,Workspace,SubmissionItem]), DatabaseModule], 
    controllers: [UsersController,VouchersController,WorkspacesController,SubmissionItemController],
    providers: [UsersService,VouchersService,WorkspaceService,SubmissionItemService],
  })
  export class MainModule {}