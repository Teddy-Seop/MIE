import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { ShopEntity } from './shop.entity';

@Entity({
  name: 'point',
})
export class PointEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'int',
  })
  public point: number;

  @OneToOne((type) => CustomerEntity, (customer) => customer.point)
  public customer?: CustomerEntity;

  @ManyToOne((type) => ShopEntity, (shop) => shop.points)
  public shop?: ShopEntity;
}
