import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as Repositories from './repositories';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([...Object.values(Repositories)]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
