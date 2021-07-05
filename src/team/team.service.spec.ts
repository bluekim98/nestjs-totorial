import { Test, TestingModule } from '@nestjs/testing';
import { Team } from './interface/team.interface';
import { TeamService } from './team.service';

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamService],
    }).compile();

    service = module.get<TeamService>(TeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return developer', () => {
    let createdTeam: Team;
    createdTeam = service.createTeamEntity({teamId: 2});
    expect(createdTeam.name).toBe('developer');
  })
});
