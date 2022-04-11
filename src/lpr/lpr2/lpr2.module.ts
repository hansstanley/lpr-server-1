import { Module } from '@nestjs/common';
import { Lpr2Controller } from './lpr2.controller';

@Module({
  controllers: [Lpr2Controller]
})
export class Lpr2Module {}
