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


@Module({
    imports: [TypeOrmModule.forFeature([User,Voucher]), DatabaseModule], 
    controllers: [UsersController,VouchersController],
    providers: [UsersService,VouchersService],
  })
  export class MainModule {}