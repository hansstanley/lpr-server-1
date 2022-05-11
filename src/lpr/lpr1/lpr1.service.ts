import { Inject, Injectable } from '@nestjs/common';
import { LprService } from '../lpr.service';
import { ReqHeartbeatDto, ResDto } from './dto';

@Injectable()
export class Lpr1Service {
    @Inject(LprService)
    private readonly lprService: LprService;

    handleHeartbeat(heartbeatDto: ReqHeartbeatDto): ResDto {
        return ResDto.generate().nominal();
    }

    handleOnline() {}

    handleUnknown() {}

    async foo() {
        setTimeout(() => console.log('timeout over'), 2000);
    }
}
