import { Module } from '@nestjs/common';
import { Intercom1Module } from './intercom1/intercom1.module';
import { IntercomService } from './intercom.service';

@Module({
  imports: [Intercom1Module],
  providers: [IntercomService]
})
export class IntercomModule {}
