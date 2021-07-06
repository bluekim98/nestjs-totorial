import { Module } from '@nestjs/common';
import { LayoutRepository } from './layout.repository';
import { LayoutService } from './layout.service';

@Module({
    providers: [LayoutService, LayoutRepository],
    exports: [LayoutService, LayoutRepository],
    imports: [LayoutModule]
})
export class LayoutModule {}
