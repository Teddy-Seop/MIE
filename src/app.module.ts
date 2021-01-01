import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAdapterModule } from './modules/adapter/user';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1111',
      database: 'mie',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UserAdapterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
