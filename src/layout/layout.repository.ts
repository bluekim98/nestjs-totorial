import { Injectable } from "@nestjs/common";
import { Layout } from "./interface/layout.interface";
import { Room } from "./interface/room.interface";

@Injectable()
export class LayoutRepository {
    private layout: Layout;

    constructor() {
        this.init();
    }

    private init(): void {
        let headRoom: Room = {
            id: '1',
            locations: [],
            isUsing: true
        };
        let strategyRoom: Room = {
            id: '2',
            locations: [],
            isUsing: true
        };

        this.layout = {
            id: 1,
            rooms: []
        }

        this.layout.rooms.push(headRoom);
        this.layout.rooms.push(strategyRoom);
    }

    find(): Layout {
        return this.layout;
    }

    findRoomByRoomId(roomId: string): Room {
        return this.layout.rooms.filter(room => room.id === roomId)[0];
    }
}