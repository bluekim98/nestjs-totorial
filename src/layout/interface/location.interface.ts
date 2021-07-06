import { User } from "src/users/interface/user.interface";

export interface Location {
    id: string;
    user: User;
    isUsing: boolean;
}