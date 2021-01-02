import { Module } from '@nestjs/common';
import { ShopAdapterService } from './shop.adapter.service';

@Module({
  providers: [ShopAdapterService],
  exports: [ShopAdapterService],
})
export class ShopAdapterModule {}
