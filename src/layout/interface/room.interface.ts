import { Location } from "./location.interface";

export interface Room {
    id: string;
    title: string;
    locations: Location[];
    isUsing: boolean;
}