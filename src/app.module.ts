import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './modules/database/database.module';
import { AppController } from './app.controller';

// Graphql Modules
import { UserModule } from './graphql/user';

// Adapter Modules
import { UserAdapterModule } from './modules/adapter/user';
import { ShopAdapterModule } from './modules/adapter/shop';
import { ProductAdapterModule } from './modules/adapter/product';
import { PurchaseAdapterModule } from './modules/adapter/purchase';
import { CustomerAdapterModule } from './modules/adapter/customer';

@Module({
  imports: [
    // Global Modules
    DatabaseModule,

    // Graphql Modules
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),

    // Adapter Modules
    UserAdapterModule,
    ShopAdapterModule,
    ProductAdapterModule,
    PurchaseAdapterModule,
    CustomerAdapterModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
