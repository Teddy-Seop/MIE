import { Module } from '@nestjs/common';
import { PointAdapterService } from './point.adapter.service';

@Module({
  providers: [PointAdapterService],
  exports: [PointAdapterService],
})
export class PointAdapterModule {}
