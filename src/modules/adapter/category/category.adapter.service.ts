import { Injectable } from '@nestjs/common';
import { CategoryEntity } from '@/modules/database/entities/category.entity';
import { CategoryRepository } from '@/modules/database/repositories';

@Injectable()
export class CategoryAdapterService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  public async getCategory(categoryId: number): Promise<CategoryEntity> {
    const category: CategoryEntity = await this.categoryRepository.findOneOrFail(
      categoryId,
    );
    return category;
  }
}
