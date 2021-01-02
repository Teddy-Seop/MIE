import { Module } from '@nestjs/common';
import { UserAdapterService } from './user.adapter.service';

@Module({
  providers: [UserAdapterService],
  exports: [UserAdapterService],
})
export class UserAdapterModule {}
