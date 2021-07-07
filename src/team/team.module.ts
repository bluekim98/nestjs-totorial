import { Module } from '@nestjs/common';
import { TeamRepository } from './team.repository';
import { TeamService } from './team.service';

@Module({
    providers: [TeamService, TeamRepository],
    exports: [TeamService, TeamRepository],
})
export class TeamModule {}
