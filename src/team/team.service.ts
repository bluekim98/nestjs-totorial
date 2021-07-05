import { Injectable } from '@nestjs/common';
import { Team } from './interface/team.interface';

@Injectable()
export class TeamService {
    createTeamEntity({teamId}): Team {
        let team: Team;
        let teamName: string;
        
        if(teamId === 1) {
            teamName = 'manager';
        } else if(teamId === 2) {
            teamName = 'developer';
        }

        team = {
            id: teamId, 
            name: teamName
        }
        return team;
    }
}
