import { Controller, Get } from '@nestjs/common';
import { PurchaseAdapterService } from './modules/adapter/purchase';
import { UserAdapterService } from './modules/adapter/user/user.adapter.service';

@Controller()
export class AppController {
  constructor(
    private readonly userAdapterService: UserAdapterService,
    private readonly purchaseAdapterService: PurchaseAdapterService,
  ) {}

  @Get()
  getHello() {
    return this.purchaseAdapterService.getPurchase(1);
  }
}
