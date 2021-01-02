import { Controller, Get } from '@nestjs/common';
import { UserAdapterService } from './modules/adapter/user/user.adapter.service';
import { ProductAdapterService } from './modules/adapter/product/product.adapter.service';

@Controller()
export class AppController {
  constructor(
    private readonly userAdapterService: UserAdapterService,
    private readonly productAdapterService: ProductAdapterService,
  ) {}

  @Get()
  getHello() {
    return this.productAdapterService.getProduct(1);
  }
}
