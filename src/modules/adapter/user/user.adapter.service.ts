import { Injectable } from '@nestjs/common';
import { UserEntity } from '@/modules/database/entities/user.entity';
import { UserRepository } from '@/modules/database/repositories';

@Injectable()
export class UserAdapterService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUser(userId: number): Promise<UserEntity> {
    const UserEntity: UserEntity = await this.userRepository.findOneOrFail(
      userId,
    );

    console.log(UserEntity);

    return UserEntity;
  }
}
