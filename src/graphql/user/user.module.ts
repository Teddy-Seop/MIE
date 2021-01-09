import { Module } from '@nestjs/common';
import { UserAdapterModule } from '@/modules/adapter/user';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [UserAdapterModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
