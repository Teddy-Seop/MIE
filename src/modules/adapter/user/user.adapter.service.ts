import { Injectable } from '@nestjs/common';
import { User } from '../../database/entities/user.entity';
import { UserRepository } from '../../database/repositories';

@Injectable()
export class UserAdapterService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUser(userId: number): Promise<User> {
    console.log(2);
    const user: User = await this.userRepository.findOneOrFail(userId);

    console.log(user);

    return user;
  }
}
