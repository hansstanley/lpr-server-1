import { Body, Controller, Header, Post } from '@nestjs/common';
import { MiscAcknowledgeDto, MiscReportDto, MiscReqDto, MiscResDto, PictureRecordResDto, QrCodeReqDto, QrCodeResDto, RecordReqDto, RecordResDto, UserInfoAcknowledgeDto, UserInfoReportDto, UserInfoReqDto, UserInfoResDto } from './dto';

@Controller('intercom1')
export class Intercom1Controller {

    @Post('person/cmd')
    userInfoRequest(@Body() reqDto: UserInfoReqDto): UserInfoResDto {
        // TODO
        return new UserInfoResDto();
    }

    @Post('person/result')
    userInfoReport(@Body() reportDto: UserInfoReportDto): UserInfoAcknowledgeDto {
        // TODO
        return new UserInfoAcknowledgeDto();
    }

    @Post('record/picture')
    @Header('Content-Type', 'multipart/form-data')
    pictureRecordRequest(): PictureRecordResDto {
        // TODO
        return new PictureRecordResDto();
    }

    @Post('record/notice')
    recordRequest(@Body() recordDto: RecordReqDto): RecordResDto {
        // TODO
        return new RecordResDto();
    }

    @Post('setting/cmd')
    miscRequest(@Body() reqDto: MiscReqDto): MiscResDto {
        // TODO
        return new MiscResDto();
    }

    @Post('setting/result')
    miscReport(@Body() reportDto: MiscReportDto): MiscAcknowledgeDto {
        // TODO
        return new MiscAcknowledgeDto();
    }

    @Post('qrcode/notice')
    qrcodeRequest(@Body() reqDto: QrCodeReqDto): QrCodeResDto {
        // TODO
        return new QrCodeResDto();
    }
}
