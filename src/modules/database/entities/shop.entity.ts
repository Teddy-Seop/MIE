import { UserEntity } from './user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({
  name: 'shop',
})
export class ShopEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
  })
  public name: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  public description?: string;

  @Column({
    type: 'varchar',
  })
  public phone: string;

  @Column({
    type: 'varchar',
  })
  public email: string;

  @Column({
    type: 'varchar',
  })
  public address: string;

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

  @OneToOne((type) => UserEntity, (user) => user.shop)
  public user?: UserEntity;

  @OneToMany((type) => ProductEntity, (product) => product.shop)
  public products?: ProductEntity[];
}