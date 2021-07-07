import { Module } from '@nestjs/common';
import { TeamModule } from '../team/team.module';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService, UsersRepository],
    exports: [UsersService, UsersRepository],
    imports: [TeamModule]
})
export class UsersModule {}
