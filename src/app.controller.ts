import { Controller, Get } from '@nestjs/common';
import { CustomerAdapterService } from './modules/adapter/customer';
import { UserAdapterService } from './modules/adapter/user/user.adapter.service';

@Controller()
export class AppController {
  constructor(
    private readonly userAdapterService: UserAdapterService,
    private readonly customerAdapterService: CustomerAdapterService,
  ) {}

  @Get()
  async getHello() {
    return this.customerAdapterService.getCustomer(1);
  }
}
