import { Body, Controller, Post } from '@nestjs/common';
import { ReqHeartbeatDto } from './dto/req.dto';
import { ResHeartbeatDto } from './dto/res.dto';


@Controller('lpr/2')
export class Lpr2Controller {
    @Post('heartbeat')
    heartbeat(@Body() heartbeatDto: ReqHeartbeatDto): ResHeartbeatDto {
        return ResHeartbeatDto.acknowledge();
    }
}
