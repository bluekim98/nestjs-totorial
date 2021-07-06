import { Injectable } from "@nestjs/common";
import { User } from "./interface/user.interface";
const data = require('../db/test-data/data');

@Injectable()
export class UsersRepository {
    private users: User[] = [];

    constructor() {
        this.init();
    }

    private init(): void {
        this.users = data.users;
    }

    findAll(): User[] {
        return this.users;
    }
}