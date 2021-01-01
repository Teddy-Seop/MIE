import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserAdapterService } from './modules/adapter/user/user.adapter.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userAdapterService: UserAdapterService,
  ) {}

  @Get()
  getHello() {
    return this.userAdapterService.getUser(1);
  }
}
