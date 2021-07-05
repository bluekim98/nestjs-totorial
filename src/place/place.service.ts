import { Injectable } from '@nestjs/common';
import { Place } from './interface/place.interface';

@Injectable()
export class PlaceService {
    
    createPlaceEntity({roomId, locationId}): Place {
        let place: Place;
        let roomName: string;

        if(roomId === 1) {
            roomName = '본부'
        } else if (roomId === 2) {
            roomName = '전략실'
        }

        place = {
            roomId, roomName, locationId
        }
        return place;
    }
}
