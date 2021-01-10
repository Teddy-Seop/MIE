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
import { PointEntity } from './point.entity';
import { LikeEntity } from './like.entity';

@Entity({
  name: 'customer',
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

  @OneToOne((type) => PointEntity, (point) => point.customer)
  public point?: PointEntity;

  @OneToOne((type) => LikeEntity, (like) => like.customer)
  public like?: LikeEntity;
}
