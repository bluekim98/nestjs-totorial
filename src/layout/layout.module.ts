import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { LayoutRepository } from './layout.repository';
import { LayoutService } from './layout.service';

@Module({
    providers: [LayoutService, LayoutRepository],
    exports: [LayoutService, LayoutRepository],
    imports: [UsersModule]
    
})
export class LayoutModule {}
