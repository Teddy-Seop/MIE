import { Module } from '@nestjs/common';
import { ImageAdapterService } from './image.adapter.service';

@Module({
  providers: [ImageAdapterService],
  exports: [ImageAdapterService],
})
export class ImageAdapterModule {}
