export class CreateUserDto {
    email: string;
    name: string;
    nickname: string;
    job: string;
    teamId: number;
    roomId: string;
    locationId: string;
    isActivate: boolean;
}