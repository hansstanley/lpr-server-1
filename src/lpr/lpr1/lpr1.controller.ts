import { Body, Controller, Header, HttpCode, Post, Response } from '@nestjs/common';
import { ReqDto, ReqHeartbeatDto, ReqPeripheralDto, ReqPlateDto, ReqType } from './dto/req.dto';
import { ResDto } from './dto';
import { Lpr1Service } from './lpr1.service';

@Controller('camera')
export class Lpr1Controller {
    constructor(private lpr1Service: Lpr1Service) {}

    @Post('post')
    @HttpCode(200)
    handle(@Body() reqDto: ReqPlateDto): ResDto {
        switch(reqDto.type) {
            case ReqType.HEARTBEAT:
                return this.lpr1Service.handleHeartbeat(reqDto as ReqHeartbeatDto);
            case ReqType.PLATE_ONLINE:
                return this.handlePlate(reqDto as ReqPlateDto);
            default:
                return this.handleUnknown();
        }
    }

    // @Post('post')
    // heartbeat(@Body() heartbeatDto: ReqHeartbeatDto): ResDto {
    //     console.log(heartbeatDto);
    //     return ResDto.acknowledge();
    // }

    // @Post('post')
    // online(@Body() plateDto: ReqPlateDto): ResDto {
    //     return ResDto.acknowledge();
    // }

    // private handleHeartbeat(heartbeatDto: ReqHeartbeatDto): ResDto {
    //     console.log('heartbeat request');
    //     return ResDto.acknowledge();
    // }

    private handlePlate(plateDto: ReqPlateDto): ResDto {
        console.log('online request');
        return ResDto.generate();
    }

    private handlePeripheral(peripheralDto: ReqPeripheralDto): ResDto {
        console.log('ioinput request');
        return ResDto.generate();
    }

    private handleUnknown(): ResDto {
        return null;
    }
}
