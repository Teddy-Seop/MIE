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

@Entity({
  name: 'user',
})
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
  })
  public email: string;

  @Column({
    type: 'varchar',
  })
  public password: string;

  @Column({
    type: 'varchar',
  })
  public name: string;

  @Column({
    type: 'varchar',
  })
  public phone: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  public updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  public deletedAt?: Date;

  @ManyToOne((type) => ShopEntity, (shop) => shop.customers)
  public shop?: ShopEntity;

  @OneToMany((type) => PurchaseEntity, (purchase) => purchase.customer)
  public purchases?: PurchaseEntity[];
}
