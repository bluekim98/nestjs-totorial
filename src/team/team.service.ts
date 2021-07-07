import { Injectable } from '@nestjs/common';
import { User } from '../users/interface/user.interface';
import { JoinTeamDto } from './dto/team.dto';
import { Team } from './interface/team.interface';
import { TeamRepository } from './team.repository';

@Injectable()
export class TeamService {

    constructor(private teamRepository: TeamRepository){}

    joinTeam(joinTeamDto: JoinTeamDto) {
        this.teamRepository.join(joinTeamDto);
        const team: Team = this.findTeamById(joinTeamDto.teamId);
        joinTeamDto.user.team = team;
    }

    findTeamById(id: number): Team {
        return this.teamRepository.findTeamById(id);
    }

    findUsersByTeamId(teamId: number): User[] {
        const findedTeam: Team = this.teamRepository.findTeamById(teamId);
        return findedTeam.users;
    }
}
