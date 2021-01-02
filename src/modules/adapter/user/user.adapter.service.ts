import { Injectable } from '@nestjs/common';
import { UserEntity } from '@/modules/database/entities/user.entity';
import { UserRepository } from '@/modules/database/repositories';

@Injectable()
export class UserAdapterService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUser(userId: number): Promise<UserEntity> {
    const user: UserEntity = await this.userRepository.findOneOrFail(userId);

    console.log(user);

    return user;
  }
}
