import { Module } from '@nestjs/common';
import { Lpr1Controller } from './lpr1.controller';

@Module({
  controllers: [Lpr1Controller]
})
export class Lpr1Module {}
