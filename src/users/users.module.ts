import { Module } from '@nestjs/common';
import { PlaceModule } from 'src/place/place.module';
import { TeamModule } from 'src/team/team.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [TeamModule, PlaceModule]
})
export class UsersModule {}
