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


@Module({
    imports: [TypeOrmModule.forFeature([User,Voucher,Workspace]), DatabaseModule], 
    controllers: [UsersController,VouchersController,WorkspacesController],
    providers: [UsersService,VouchersService,WorkspaceService],
  })
  export class MainModule {}