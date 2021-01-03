import { EntityRepository, Repository } from 'typeorm';
import { PurchaseEntity } from '../entities/purchase.entity';

@EntityRepository(PurchaseEntity)
export class PurchaseRepository extends Repository<PurchaseEntity> {}
