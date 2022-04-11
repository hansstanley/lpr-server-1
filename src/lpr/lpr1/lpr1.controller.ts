import { Body, Controller, Header, Post } from '@nestjs/common';
import { ReqDto, ReqHeartbeatDto, ReqPeripheralDto, ReqPlateDto, ReqType } from './dto/req.dto';
import { ResDto } from './dto/res.dto';

@Controller('camera')
export class Lpr1Controller {
    @Post('post')
    handle(@Body() reqDto: ReqDto): ResDto {
        switch(reqDto.type) {
            case ReqType.HEARTBEAT:
                return this.handleHeartbeat(reqDto as ReqHeartbeatDto);
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

    private handleHeartbeat(heartbeatDto: ReqHeartbeatDto): ResDto {
        console.log('heartbeat request');
        return ResDto.acknowledge();
    }

    private handlePlate(plateDto: ReqPlateDto): ResDto {
        console.log('online request');
        return ResDto.acknowledge();
    }

    private handlePeripheral(peripheralDto: ReqPeripheralDto): ResDto {
        console.log('ioinput request');
        return ResDto.acknowledge();
    }

    private handleUnknown(): ResDto {
        return null;
    }
}
