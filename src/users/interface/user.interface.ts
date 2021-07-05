import { Place } from "src/place/interface/place.interface";
import { Team } from "src/team/interface/team.interface";

export interface User {
    email: string;
    name: string;
    nickname: string;
    job: string;
    team: Team;
    place: Place;
    isActivate: boolean;
}