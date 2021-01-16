import { Controller, Get } from '@nestjs/common';
import { ReviewAdapterService } from './modules/adapter/review';
import { UserAdapterService } from './modules/adapter/user/user.adapter.service';

@Controller()
export class AppController {
  constructor(
    private readonly userAdapterService: UserAdapterService,
    private readonly reviewAdapterService: ReviewAdapterService,
  ) {}

  @Get()
  async getHello() {
    return this.reviewAdapterService.getReview(1);
  }
}
