import { Test, TestingModule } from '@nestjs/testing';
import { Place } from './interface/place.interface';
import { PlaceService } from './place.service';

describe('PlaceService', () => {
  let service: PlaceService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceService],
    }).compile();

    service = module.get<PlaceService>(PlaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return 전략실', () => {
    const data = {
      roomId: '2',
      locationId: '1-1'
    }
    let createdPlace: Place;
    createdPlace = service.createPlaceEntity(data);
    expect(createdPlace.roomName).toBe('전략실');
  })
  
});
