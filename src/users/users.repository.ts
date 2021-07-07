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

    findByEmail(email: string): User {
        const filteredUsers: User[] = this.users.filter(user => user.email === email);
        return filteredUsers[0];
    }

    add(user: User) {
        if(!user || !user.email) return;
        
        const filteredUsers: User[] = this.users.filter(existingUser => existingUser.email === user.email);
        if(filteredUsers.length != 0) return;
        
        this.users.push(user);
    }
}