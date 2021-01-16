import { Module } from '@nestjs/common';
import { LikeAdapterService } from './like.adapter.service';

@Module({
  providers: [LikeAdapterService],
  exports: [LikeAdapterService],
})
export class LikeAdapterModule {}
