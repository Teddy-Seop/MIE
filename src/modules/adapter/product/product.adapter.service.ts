import { Injectable } from '@nestjs/common';
import { ProductEntity } from '@/modules/database/entities/product.entity';
import { ProductRepository } from '@/modules/database/repositories';

@Injectable()
export class ProductAdapterService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async getProduct(productId: number): Promise<ProductEntity> {
    const product: ProductEntity = await this.productRepository.findOneOrFail(
      productId,
    );

    console.log(product);

    return product;
  }
}
