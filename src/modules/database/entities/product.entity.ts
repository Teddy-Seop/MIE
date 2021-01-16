import { ShopEntity } from './shop.entity';
import { PurchaseEntity } from './purchase.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReviewEntity } from './review.entity';
import { LikeEntity } from './like.entity';
import { ImageEntity } from './image.entity';

@Entity({
  name: 'product',
})
export class ProductEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
  })
  public name: string;

  @Column({
    type: 'int',
  })
  public price: number;

  @Column({
    type: 'boolean',
  })
  public isDiscount: boolean;

  @Column({
    type: 'int',
  })
  public discountRate: number;

  @Column({
    type: 'boolean',
  })
  public isActive: boolean;

  @CreateDateColumn({
    type: 'datetime',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  public updatedAt: Date;

  @DeleteDateColumn({
    type: 'datetime',
  })
  public deletedAt: Date;

  @ManyToOne((type) => ShopEntity, (shop) => shop.products)
  public shop?: ShopEntity;

  @OneToMany((type) => PurchaseEntity, (purchase) => purchase.product)
  public purchases: PurchaseEntity[];

  @ManyToOne((type) => ReviewEntity, (review) => review.product)
  public reviews?: ReviewEntity[];

  @OneToOne((type) => LikeEntity, (like) => like.product)
  public like?: LikeEntity;

  @OneToMany((type) => ImageEntity, (image) => image.review)
  public images: ImageEntity[];
}
