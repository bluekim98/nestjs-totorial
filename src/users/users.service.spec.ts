import { Test, TestingModule } from '@nestjs/testing';
import { setupMaster } from 'cluster';
import { PlaceService } from '../place/place.service';
import { TeamService } from '../team/team.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './interface/user.interface';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let createUserDto: CreateUserDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, TeamService, PlaceService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  beforeEach(async () => {
    createUserDto = {
      email: 'blue@email.com',
      name: '김종형',
      nickname: 'blue',
      job: 'developer',
      teamId: 2,
      roomId: '1',
      locationId: '1-1',
      isActivate: true
    }
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create user entity', () => {
    let user: User;
    user = service.createUserEntity(createUserDto);
    expect(user.team.name).toBe('developer');
    expect(user.place.roomName).toBe('본부');
  });

  it('should be have length zero', () => {
    let users: User[];
    users = service.findAll();
    expect(users).toHaveLength(0);
  });
  
  it('should be have length 1', () => {
    service.create(createUserDto);
    let users: User[];
    users = service.findAll();
    expect(users).toHaveLength(1);
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
