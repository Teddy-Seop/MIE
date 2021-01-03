import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserAdapterModule } from './modules/adapter/user';
import { DatabaseModule } from './modules/database/database.module';
import { ShopAdapterModule } from './modules/adapter/shop';
import { ProductAdapterModule } from './modules/adapter/product/product.adapter.module';
import { PurchaseAdapterModule } from './modules/adapter/purchase/purchase.adapter.module';

@Module({
  imports: [
    // Global Modules
    DatabaseModule,

    // Adapter Modules
    UserAdapterModule,
    ShopAdapterModule,
    ProductAdapterModule,
    PurchaseAdapterModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
