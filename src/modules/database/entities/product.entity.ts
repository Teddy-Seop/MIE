import { ShopEntity } from './shop.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
