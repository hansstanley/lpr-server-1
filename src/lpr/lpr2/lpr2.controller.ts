import { Body, Controller, Post } from '@nestjs/common';
import { ReqHeartbeatDto, ResHeartbeatDto } from './dto';


@Controller('lpr/2')
export class Lpr2Controller {
    @Post('heartbeat')
    heartbeat(@Body() heartbeatDto: ReqHeartbeatDto): ResHeartbeatDto {
        return ResHeartbeatDto.acknowledge();
    }
}
