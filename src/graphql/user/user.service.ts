import { Injectable } from '@nestjs/common';
import { UserAdapterService } from '@/modules/adapter/user';
import { UserObjectType } from './type/user.object-type';

@Injectable()
export class UserService {
  constructor(private readonly userAdapterService: UserAdapterService) {}

  public async getUser(userId: number): Promise<UserObjectType> {
    const user: UserObjectType = await this.userAdapterService.getUser(userId);

    return user;
  }
}
