import { Module } from '@nestjs/common';
import { Lpr1Module } from './lpr1/lpr1.module';
import { Lpr2Module } from './lpr2/lpr2.module';
import { LprService } from './lpr.service';
import { DeviceModule } from 'src/device/device.module';

@Module({
  imports: [DeviceModule],
  providers: [LprService],
  exports: [DeviceModule, LprService]
})
export class LprModule {}
