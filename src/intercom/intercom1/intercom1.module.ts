import { Module } from '@nestjs/common';
import { Intercom1Controller } from './intercom1.controller';
import { Intercom1Service } from './intercom1.service';

@Module({
  controllers: [Intercom1Controller],
  providers: [Intercom1Service]
})
export class Intercom1Module {}
