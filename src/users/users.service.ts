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
            place: this.placeService.createPlaceEntity({roomId: createdUserDto, locationId: createdUserDto.locationId}),
            isActivate: true
        }
        return user;
    }
}
