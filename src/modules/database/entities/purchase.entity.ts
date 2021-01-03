import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PurchaseStatusType } from '@/type/purchase-status.type';
import { ProductEntity } from './product.entity';
import { ShopEntity } from './shop.entity';
import { CustomerEntity } from './customer.entity';

@Entity({
  name: 'purchase',
})
export class PurchaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'enum',
  })
  public status: PurchaseStatusType;

  @Column({
    type: 'varchar',
  })
  public description: string;

  @Column({
    type: 'int',
  })
  public count: number;

  @Column({
    type: 'int',
  })
  public totalAmount: number;

  @CreateDateColumn({
    type: 'datetime',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  public updatedAt: Date;

  @ManyToOne((type) => ProductEntity, (product) => product.purchases)
  public product?: ProductEntity;

  @ManyToOne((type) => CustomerEntity, (customer) => customer.purchases)
  public customer?: CustomerEntity;

  @ManyToOne((type) => ShopEntity, (shop) => shop.purchases)
  public shop?: ShopEntity;
}
