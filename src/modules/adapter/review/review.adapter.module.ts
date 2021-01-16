import { Module } from '@nestjs/common';
import { ReviewAdapterService } from './review.adapter.service';

@Module({
  providers: [ReviewAdapterService],
  exports: [ReviewAdapterService],
})
export class ReviewAdapterModule {}
