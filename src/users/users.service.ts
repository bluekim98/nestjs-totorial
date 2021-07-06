import { Injectable } from '@nestjs/common';
import { PlaceService } from '../place/place.service';
import { TeamService } from '../team/team.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    constructor(private teamService: TeamService, private placeService: PlaceService){}

    createUserEntity(createdUserDto: CreateUserDto): User {
        let user: User;
        user = {
            email: createdUserDto.email,
            name: createdUserDto.name,
            nickname: createdUserDto.nickname,
            job: createdUserDto.job,
            team: this.teamService.createTeamEntity({teamId: createdUserDto.teamId}),
            place: this.placeService.createPlaceEntity({roomId: createdUserDto.roomId, locationId: createdUserDto.locationId}),
            isActivate: true
        }
        return user;
    }

    findAll(): User[] {
        return this.users;
    }

    create(createUserDto: CreateUserDto) {
        let user: User;
        user = this.createUserEntity(createUserDto);
        this.users.push(user);
    }

    findByEmail(email: string): User {
        let filteredUser: User[];
        filteredUser = this.users.filter(user => user.email === email);
        return filteredUser[0];
    }
}
