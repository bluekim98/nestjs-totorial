import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/interface/user.interface';
import { Layout } from './interface/layout.interface';
import { Location } from "./interface/location.interface";
import { Room } from './interface/room.interface';
import { LayoutRepository } from './layout.repository';
import { AssignLocationDto } from "./dto/location.dto";
import { FindLocationDto } from "./dto/location.dto";


@Injectable()
export class LayoutService {

    constructor(
        private layoutRepository: LayoutRepository ,
        private usersService: UsersService
        ) {}
    
    find(): Layout {
        return this.layoutRepository.find();
    }

    findRoomByRoomId(roomId: string): Room {
        return this.layoutRepository.findRoomByRoomId(roomId);
    }

    findLocationByLocationId(findLocationDto: FindLocationDto): Location {
        const room: Room = this.findRoomByRoomId(findLocationDto.roomId);
        const filteredLocations = room.locations.filter(location => location.id === findLocationDto.locationId);
        return filteredLocations[0];
    }

    assignLocation(assignLocationDto: AssignLocationDto): void {
        const findedUser: User = this.usersService.findByEmail(assignLocationDto.userEamil);

        const location: Location = {
            id: assignLocationDto.locationId,
            user: findedUser,
            isUsing: true
        }

        const room: Room = this.layoutRepository.findRoomByRoomId(assignLocationDto.roomId);
        room.locations.push(location);
    }

}
