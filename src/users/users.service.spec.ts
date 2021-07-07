import { Test, TestingModule } from '@nestjs/testing';
import { setupMaster } from 'cluster';
import { TeamModule } from '../team/team.module';
import { CreateUserDto } from './dto/user.dto';
import { User } from './interface/user.interface';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let createUserDto: CreateUserDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, UsersRepository],
      imports: [TeamModule]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  beforeEach(() => {
    createUserDto = {
      email: 'black@email.com',
      name: '김종형',
      nickname: 'black',
      job: 'developer',
      teamId: 2,
      isActivate: true
    }
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be increased by one', () => {
    const countBeforCreate: number = service.findAll().length;
    service.create(createUserDto);
    let users: User[];
    users = service.findAll();
    expect(users).toHaveLength(countBeforCreate + 1);
  });

  it('input and output must match', () => {
    service.create(createUserDto);

    let user: User;
    let email: string;
    email = createUserDto.email;
    user = service.findByEmail(email);

    expect(user.nickname).toBe(createUserDto.nickname);
    expect(user.job).toBe(createUserDto.job);
  });

});
