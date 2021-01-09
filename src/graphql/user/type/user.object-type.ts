import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserObjectType {
  @Field((type) => Int)
  public id: number;

  @Field((type) => String)
  public email: string;

  @Field((type) => String)
  public password: string;

  @Field((type) => String)
  public name: string;

  @Field((type) => String)
  public phone: string;

  @Field((type) => String)
  public businessLicenseNumber: string;

  @Field((type) => Date)
  public createdAt: Date;

  @Field((type) => Date)
  public updatedAt: Date;

  @Field((type) => Date, { nullable: true })
  public deletedAt?: Date;
}
