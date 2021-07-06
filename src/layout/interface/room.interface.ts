import { Location } from "./location.interface";

export interface Room {
    id: string;
    locations: Location[];
    isUsing: boolean;
}