import { Injectable } from '@nestjs/common';
import { ReviewEntity } from '@/modules/database/entities/review.entity';
import { ReviewRepository } from '@/modules/database/repositories';

@Injectable()
export class ReviewAdapterService {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  public async getReview(reviewId: number): Promise<ReviewEntity> {
    const review: ReviewEntity = await this.reviewRepository.findOneOrFail(
      reviewId,
    );
    return review;
  }
}
