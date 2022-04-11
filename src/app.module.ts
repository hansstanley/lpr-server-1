import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LprModule } from './lpr/lpr.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [LprModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
