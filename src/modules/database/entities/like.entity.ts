import { OneToOne, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { ProductEntity } from './product.entity';
import { CustomerEntity } from './customer.entity';

@Entity({
  name: 'like',
})
export class LikeEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @OneToOne((type) => ProductEntity, (product) => product.like)
  public product?: ProductEntity;

  @OneToOne((type) => CustomerEntity, (customer) => customer.like)
  public customer?: CustomerEntity;
}
