import { User } from "../../users/interface/user.interface";

const teamNameMapper = {
    /* id : name */
    1 : 'business',
    2 : 'development',
}

export class JoinTeamDto {
    teamId: number;
    user: User;

    static getTeamNameByTeamId(teamId: number): string {
        const teamName = teamNameMapper[teamId];
        return teamName;
    }
}