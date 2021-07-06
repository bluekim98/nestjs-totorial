import { Test, TestingModule } from '@nestjs/testing';
import { PlaceModule } from '../place/place.module';
import { TeamModule } from '../team/team.module';
import { UsersModule } from '../users/users.module';
import { User } from '../users/interface/user.interface';
import { UsersService } from '../users/users.service';
import { LayoutService } from './layout.service';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { LayoutRepository } from './layout.repository';
import { Room } from './interface/room.interface';

describe('LayoutService', () => {
  let service: LayoutService;
  let usersService: UsersService;
  let user: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LayoutService, LayoutRepository],
      imports: [TeamModule, PlaceModule, UsersModule]
    }).compile();

    service = module.get<LayoutService>(LayoutService);
    usersService = module.get<UsersService>(UsersService);
  });

  
  beforeEach(async () => {
    let createUserDto: CreateUserDto = {
      email: 'blue@email.com',
      name: '김종형',
      nickname: 'blue',
      job: 'developer',
      teamId: 2,
      roomId: '1',
      locationId: '1-1',
      isActivate: true
    }
    usersService.create(createUserDto);
    user = usersService.findByEmail(createUserDto.email);
  });
  

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be matched', () => {
    service.assignLocation(user);
    let room: Room = service.findRoomByRoomId(user.place.roomId);
    expect(room.locations[0].user.nickname).toBe(user.nickname);
  });
});
