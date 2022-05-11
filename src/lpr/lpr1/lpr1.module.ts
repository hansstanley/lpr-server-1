import { Module } from '@nestjs/common';
import { LprModule } from '../lpr.module';
import { Lpr1Controller } from './lpr1.controller';
import { Lpr1Service } from './lpr1.service';

@Module({
  imports: [LprModule],
  controllers: [Lpr1Controller],
  providers: [Lpr1Service]
})
export class Lpr1Module {}
