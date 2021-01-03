import { Module } from '@nestjs/common';
import { PurchaseAdapterService } from './purchase.adapter.service';

@Module({
  providers: [PurchaseAdapterService],
  exports: [PurchaseAdapterService],
})
export class PurchaseAdapterModule {}
