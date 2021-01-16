import { Injectable } from '@nestjs/common';
import { PointEntity } from '@/modules/database/entities/point.entity';
import { PointRepository } from '@/modules/database/repositories';

@Injectable()
export class PointAdapterService {
  constructor(private readonly pointRepository: PointRepository) {}

  public async getPoint(pointId: number): Promise<PointEntity> {
    const point: PointEntity = await this.pointRepository.findOneOrFail(
      pointId,
    );
    return point;
  }
}
