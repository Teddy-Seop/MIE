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
import { ImageAdapterModule } from './modules/adapter/image/image.adapter.module';
import { LikeAdapterModule } from './modules/adapter/like/like.adapter.module';
import { PointAdapterModule } from './modules/adapter/point/point.adapter.module';
import { ReviewAdapterModule } from './modules/adapter/review/review.adapter.module';
import { CategoryAdapterModule } from './modules/adapter/category/category.adapter.module';

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
    ImageAdapterModule,
    LikeAdapterModule,
    PointAdapterModule,
    ReviewAdapterModule,
    CategoryAdapterModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
