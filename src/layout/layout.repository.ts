import { Injectable } from "@nestjs/common";
import { Layout } from "./interface/layout.interface";
import { Room } from "./interface/room.interface";
const data = require('../db/test-data/data');

@Injectable()
export class LayoutRepository {
    private layout: Layout;

    constructor() {
        this.init();
    }

    private init(): void {
        this.layout = data.layouts[0];
        
        for(let room of data.rooms) {
            this.layout.rooms.push(room);
        }
    }

    find(): Layout {
        return this.layout;
    }

    findRoomByRoomId(roomId: string): Room {
        return this.layout.rooms.filter(room => room.id === roomId)[0];
    }
}