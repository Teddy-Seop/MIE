import { Module } from '@nestjs/common';
import { CategoryAdapterService } from './category.adapter.service';

@Module({
  providers: [CategoryAdapterService],
  exports: [CategoryAdapterService],
})
export class CategoryAdapterModule {}
