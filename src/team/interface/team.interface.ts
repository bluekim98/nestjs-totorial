import { User } from "src/users/interface/user.interface";

export interface Team {
    id: number;
    name: string;
    users: User[];
}