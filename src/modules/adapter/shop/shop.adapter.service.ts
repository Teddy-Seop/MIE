import { Injectable } from '@nestjs/common';
import { ShopEntity } from '@/modules/database/entities/shop.entity';
import { ShopRepository } from '@/modules/database/repositories';

@Injectable()
export class ShopAdapterService {
  constructor(private readonly shopRepository: ShopRepository) {}

  public async getShop(shopId: number): Promise<ShopEntity> {
    const shop: ShopEntity = await this.shopRepository.findOneOrFail(shopId);

    return shop;
  }
}
