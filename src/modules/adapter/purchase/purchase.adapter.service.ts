import { Injectable } from '@nestjs/common';
import { PurchaseEntity } from '@/modules/database/entities/purchase.entity';
import { PurchaseRepository } from '@/modules/database/repositories';

@Injectable()
export class PurchaseAdapterService {
  constructor(private readonly purchaseRepository: PurchaseRepository) {}

  public async getPurchase(purchaseId: number): Promise<PurchaseEntity> {
    const purchase: PurchaseEntity = await this.purchaseRepository.findOneOrFail(
      purchaseId,
    );

    return purchase;
  }
}
