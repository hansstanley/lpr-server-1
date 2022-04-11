import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('lpr')
export class LprController {
    @Get('test')
    test(): string {
        return "TESTING";
    }
}
