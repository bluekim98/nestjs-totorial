import { Test, TestingModule } from '@nestjs/testing';
import { User } from './interface/user.interface';
import { UsersRepository } from "./users.repository";


describe('UsersRepository', () => {
    let repository: UsersRepository;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [UsersRepository],
      }).compile();
  
      repository = module.get<UsersRepository>(UsersRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    it('should be have length 3', () => {
        let users: User[] = repository.findAll();
        expect(users.length).toBe(3);
    });

});