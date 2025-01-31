/* eslint-disable */

import { Test, TestingModule } from '@nestjs/testing';
import { VouchersController } from './voucher.controller';
import { VouchersService } from './voucher.service';

describe('UsersController', () => {
  let controller: VouchersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VouchersController],
      providers: [VouchersService],
    }).compile();

    controller = module.get<VouchersController>(VouchersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});