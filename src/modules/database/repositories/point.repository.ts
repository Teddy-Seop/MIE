import { EntityRepository, Repository } from 'typeorm';
import { PointEntity } from '../entities/point.entity';

@EntityRepository(PointEntity)
export class PointRepository extends Repository<PointEntity> {}
