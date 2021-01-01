import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAdapterModule, UserAdapterService } from './modules/adapter/user';

describe('AppController', () => {
  let appController: AppController;
  let userAdapterService: UserAdapterService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '1111',
          database: 'mie',
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: false,
        }),
        UserAdapterModule,
      ],
      controllers: [AppController],
      providers: [AppService, UserAdapterService],
    }).compile();

    appController = app.get<AppController>(AppController);
    userAdapterService = app.get<UserAdapterService>(UserAdapterService);
  });

  describe('root', () => {
    it('find user', () => {
      console.log(1);
      expect(userAdapterService.getUser(1)).toReturn();
    });
  });
});
