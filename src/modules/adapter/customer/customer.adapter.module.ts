import { Module } from '@nestjs/common';
import { CustomerAdapterService } from './customer.adapter.service';

@Module({
  providers: [CustomerAdapterService],
  exports: [CustomerAdapterService],
})
export class CustomerAdapterModule {}
