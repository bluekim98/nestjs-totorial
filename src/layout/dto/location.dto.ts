
const roomTitleMapper = {
    /* id : title */
    '1' : 'headquarter',
    '2' : 'research center'
}

export class AssignLocationDto {
    
    roomId: string;
    locationId: string;
    userEamil: string;
    
    static getRoomTitleByRoomId(roomId: string): string {
        let roomTitle: string = roomTitleMapper[roomId];
        return roomTitle;
    }
}

export class FindLocationDto {
    roomId: string;
    locationId: string;
}