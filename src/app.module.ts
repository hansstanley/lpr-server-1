import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LprModule } from './lpr/lpr.module';
import { ProjectModule } from './project/project.module';
import { DatabaseModule } from './database/database.module';
import { Database } from './database';
import { AuthModule } from './auth/auth.module';
import { GateModule } from './gate/gate.module';
import { DeviceModule } from './device/device.module';
import { EntityService } from './common/services/entity.service';
import { IntercomModule } from './intercom/intercom.module';

@Module({
  imports: [LprModule, ProjectModule, DatabaseModule, AuthModule, GateModule, DeviceModule, IntercomModule],
  controllers: [AppController],
  providers: [AppService, Database, EntityService],
})
export class AppModule {}
