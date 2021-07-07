import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../users/interface/user.interface';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { JoinTeamDto } from './dto/team.dto';
import { Team } from './interface/team.interface';
import { TeamRepository } from './team.repository';
import { TeamService } from './team.service';

describe('TeamService', () => {
  let service: TeamService;
  let usersService: UsersService;
  let joinTeamDto: JoinTeamDto;
  let testUser: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamService, TeamRepository],
      imports: [UsersModule]
    }).compile();

    service = module.get<TeamService>(TeamService);
    usersService = module.get<UsersService>(UsersService);
  });

  beforeEach(() => {
    const testUserEamil = 'blue@email.com';
    testUser = usersService.findByEmail(testUserEamil);

    joinTeamDto = {
      teamId: 1,
      user: testUser
    }

    service.joinTeam(joinTeamDto);
  });

  afterEach(() => {
    const team: Team = service.findTeamById(joinTeamDto.teamId);
    team.users.splice(0);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be match', () => {
    const users: User[] = service.findUsersByTeamId(joinTeamDto.teamId);
    expect(users[0].team.name).toBe(JoinTeamDto.getTeamNameByTeamId(joinTeamDto.teamId));
  });

});
