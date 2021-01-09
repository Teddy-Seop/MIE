import { Args, Resolver, Int, Query } from '@nestjs/graphql';
import { UserObjectType } from './type/user.object-type';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserObjectType)
  public async user(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<UserObjectType> {
    const user: UserObjectType = await this.userService.getUser(userId);

    return user;
  }
}
