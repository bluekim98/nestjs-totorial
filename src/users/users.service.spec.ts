import { Test, TestingModule } from '@nestjs/testing';
import { PlaceService } from '../place/place.service';
import { TeamService } from '../team/team.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './interface/user.interface';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, TeamService, PlaceService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create user entity test', () => {
    let user: User;
    let createdUserDto: CreateUserDto;
    createdUserDto = {
      email: 'blue@email.com',
      name: '김종형',
      nickname: 'blue',
      job: 'developer',
      teamId: 2,
      roomId: 1,
      locationId: 1,
      isActivate: true
    }
    user = service.createUserEntity(createdUserDto);
    expect(user.team.name).toBe('developer');
  });

});
