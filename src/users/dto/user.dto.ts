export class CreateUserDto {
    email: string;
    name: string;
    nickname: string;
    job: string;
    teamId: number;
    roomId: number;
    locationId: number;
    isActivate: boolean;
}