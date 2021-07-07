import { Injectable } from "@nestjs/common";
import { JoinTeamDto } from "./dto/team.dto";
import { Team } from "./interface/team.interface";
const data = require('../db/test-data/data');

@Injectable()
export class TeamRepository {
    private teams: Team[] = [];

    constructor() {
        this.init();
    }

    init() {
        this.teams = data.teams;
    }

    join(joinTeamDto: JoinTeamDto) {
        const findedTeam: Team = this.findTeamById(joinTeamDto.teamId);
        findedTeam.users.push(joinTeamDto.user);
    }

    findTeamById(teamId: number): Team {
        const filteredTeams = this.teams.filter(team => team.id === teamId);
        return filteredTeams[0];
    }
}