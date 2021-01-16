import { Injectable } from '@nestjs/common';
import { ImageEntity } from '@/modules/database/entities/image.entity';
import { ImageRepository } from '@/modules/database/repositories';

@Injectable()
export class ImageAdapterService {
  constructor(private readonly imageRepository: ImageRepository) {}

  public async getImage(imageId: number): Promise<ImageEntity> {
    const image: ImageEntity = await this.imageRepository.findOneOrFail(
      imageId,
    );
    return image;
  }
}
