import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DeviceService } from './device.service';

@Module({
  providers: [DeviceService, PrismaClient],
  exports: [DeviceService]
})
export class DeviceModule {}
