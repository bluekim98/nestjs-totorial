import { Module } from '@nestjs/common';
import { PlaceModule } from '../place/place.module';
import { TeamModule } from '../team/team.module';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService, UsersRepository],
    imports: [TeamModule, PlaceModule]
})
export class UsersModule {}
