import { Module } from '@nestjs/common';
import { Lpr1Module } from './lpr1/lpr1.module';
import { LprController } from './lpr.controller';
import { Lpr2Module } from './lpr2/lpr2.module';

@Module({
  imports: [Lpr1Module, Lpr2Module],
  controllers: [LprController]
})
export class LprModule {}
