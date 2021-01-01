import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAdapterService } from './user.adapter.service';
import { UserRepository } from '../../database/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserAdapterService],
  exports: [UserAdapterService],
})
export class UserAdapterModule {}
