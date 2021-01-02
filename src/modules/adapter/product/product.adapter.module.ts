import { Module } from '@nestjs/common';
import { ProductAdapterService } from './product.adapter.service';

@Module({
  providers: [ProductAdapterService],
  exports: [ProductAdapterService],
})
export class ProductAdapterModule {}
