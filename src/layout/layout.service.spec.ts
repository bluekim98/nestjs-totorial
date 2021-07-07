import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../users/users.module';
import { LayoutService } from './layout.service';
import { LayoutRepository } from './layout.repository';
import { Location } from "./interface/location.interface";
import { AssignLocationDto, FindLocationDto } from './dto/location.dto';
import { Room } from './interface/room.interface';


describe('LayoutService', () => {
  let service: LayoutService;
  let assignLocationDto: AssignLocationDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LayoutService, LayoutRepository],
      imports: [UsersModule]
    }).compile();

    service = module.get<LayoutService>(LayoutService);
  });

  
  beforeEach(() => {
    assignLocationDto = {
      roomId: '1',
      locationId: '1-1',
      userEamil: 'blue@email.com'
    }
    service.assignLocation(assignLocationDto);
  });

  afterEach(() => {
    const room: Room = service.findRoomByRoomId(assignLocationDto.roomId);
    room.locations.splice(0);
  });
  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be matched', () => {
    const findLocationDto: FindLocationDto = {
      roomId: assignLocationDto.roomId,
      locationId: assignLocationDto.locationId
    }
    const location: Location = service.findLocationByLocationId(findLocationDto);
    expect(location.user.email).toBe(assignLocationDto.userEamil);
    
  });

  it('test', () => {
    const findedRoom: Room = service.findRoomByRoomId(assignLocationDto.roomId);
    expect(findedRoom.id).toBe(assignLocationDto.roomId);
  });

});
