import { Injectable } from '@nestjs/common';
import { User } from '../users/interface/user.interface';
import { Layout } from './interface/layout.interface';
import { Location } from "./interface/location.interface";
import { Room } from './interface/room.interface';
import { LayoutRepository } from './layout.repository';

@Injectable()
export class LayoutService {

    constructor(private layoutRepository: LayoutRepository) {}
    
    find(): Layout {
        return this.layoutRepository.find();
    }

    findRoomByRoomId(roomId: string): Room {
        return this.layoutRepository.findRoomByRoomId(roomId);
    }

    assignLocation(user: User): void {
        let location: Location = {
            id: user.place.locationId,
            user,
            isUsing: true
        }

        let room: Room = this.layoutRepository.findRoomByRoomId(user.place.roomId);
        room.locations.push(location);
    }

}
