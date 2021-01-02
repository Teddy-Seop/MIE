import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAdapterModule } from './modules/adapter/user';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [DatabaseModule, UserAdapterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
