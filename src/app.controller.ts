import { Controller, Get } from '@nestjs/common';
import { CategoryAdapterService } from './modules/adapter/category';
import { UserAdapterService } from './modules/adapter/user/user.adapter.service';

@Controller()
export class AppController {
  constructor(
    private readonly userAdapterService: UserAdapterService,
    private readonly categoryAdapterService: CategoryAdapterService,
  ) {}

  @Get()
  async getHello() {
    return this.categoryAdapterService.getCategory(1);
  }
}
