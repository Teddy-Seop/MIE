import { Injectable } from '@nestjs/common';
import { LikeEntity } from '@/modules/database/entities/like.entity';
import { LikeRepository } from '@/modules/database/repositories';

@Injectable()
export class LikeAdapterService {
  constructor(private readonly likeRepository: LikeRepository) {}

  public async getLike(likeId: number): Promise<LikeEntity> {
    const like: LikeEntity = await this.likeRepository.findOneOrFail(likeId);
    return like;
  }
}
