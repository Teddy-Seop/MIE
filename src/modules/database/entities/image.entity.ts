import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ReviewEntity } from './review.entity';
import { ProductEntity } from './product.entity';

@Entity({
  name: 'image',
})
export class ImageEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
  })
  public name: string;

  @ManyToOne((type) => ReviewEntity, (review) => review.images)
  public review?: ReviewEntity;

  @ManyToOne((type) => ProductEntity, (product) => product.images)
  public product?: ProductEntity;
}
