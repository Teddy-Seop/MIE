import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ImageEntity } from './image.entity';
import { ProductEntity } from './product.entity';
import { PurchaseEntity } from './purchase.entity';

@Entity({
  name: 'review',
})
export class ReviewEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
  })
  public comment: string;

  @Column({
    type: 'float',
  })
  public rating: number;

  @OneToMany((type) => ImageEntity, (image) => image.review)
  public images: ImageEntity[];

  @OneToOne((type) => PurchaseEntity, (purchase) => purchase.review)
  public purchase: PurchaseEntity;

  @OneToMany((type) => ProductEntity, (product) => product.reviews)
  public product: ProductEntity;
}
