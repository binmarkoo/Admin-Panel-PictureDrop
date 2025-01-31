/* eslint-disable */

import { Module } from '@nestjs/common';
import { VouchersService } from './voucher.service';
import { VouchersController } from './voucher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { DatabaseModule } from 'src/database/database.module';


@Module({
  imports: [TypeOrmModule.forFeature([Voucher]), DatabaseModule], 
  controllers: [VouchersController],
  providers: [VouchersService],
})
export class UsersModule {}