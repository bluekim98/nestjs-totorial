import { Injectable } from '@nestjs/common';
import { JoinTeamDto } from '../team/dto/team.dto';
import { TeamService } from '../team/team.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './interface/user.interface';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {

    constructor(
        private usersRepository: UsersRepository,
        private teamService: TeamService
        ){}

    findAll(): User[] {
        return this.usersRepository.findAll();
    }

    create(createUserDto: CreateUserDto) {
        let user: User;
        user = this.createUserEntity(createUserDto);
        this.usersRepository.add(user);
        
        const joinTeamDto: JoinTeamDto = {
            teamId: createUserDto.teamId,
            user
        }
        this.teamService.joinTeam(joinTeamDto);
    }

    private createUserEntity(createdUserDto: CreateUserDto): User {
        let user: User;
        user = {
            email: createdUserDto.email,
            name: createdUserDto.name,
            nickname: createdUserDto.nickname,
            job: createdUserDto.job,
            team: null,
            isActivate: true
        }
        return user;
    }

    findByEmail(email: string): User {
        return this.usersRepository.findByEmail(email);
    }
}
