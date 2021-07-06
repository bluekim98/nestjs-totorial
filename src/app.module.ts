import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TeamService } from './team/team.service';
import { PlaceService } from './place/place.service';
import { PlaceModule } from './place/place.module';
import { TeamModule } from './team/team.module';
import { UsersModule } from './users/users.module';
import { LayoutService } from './layout/layout.service';
import { LayoutModule } from './layout/layout.module';


@Module({
  imports: [PlaceModule, TeamModule, UsersModule, LayoutModule],
  controllers: [UsersController],
  providers: [UsersService, TeamService, PlaceService, LayoutService],
})
export class AppModule {}
