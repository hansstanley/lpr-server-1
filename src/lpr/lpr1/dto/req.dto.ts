enum ReqType {
    HEARTBEAT = 'heartbeat',
    PLATE_ONLINE = 'online',
    PLATE_OFFLINE = 'offline',
    IO_INPUT = 'ioinput'
}

abstract class ReqDto {
    type: string;
    mode = 5; // Only mode 5 supported.
    cam_id: string;
    // Not in use:
    park_id?: string;

}

class ReqHeartbeatDto extends ReqDto {
    cam_ip: string;
    // Not in use:
    interval?: number; // In seconds.
}

class ReqPlateDto extends ReqDto{
    plate_num: string;
    start_time: number;
    cam_ip: string;
    is_whitelist: boolean;
    picture: string; // Replace [+, -], [/, _], [=, .]
    closeup_pic: string; 
    // Not in use:
    plate_color?: string;
    plate_val?: boolean;
    confidence?: number; // Range from 0 to 28.
    car_logo?: string;
    car_color?: string;
    vehicle_type?: string;
    vdc_type?: string; // 'in' or 'out'
    triger_type?: string; // 'video', 'hwtriger' or 'swtriger'
}

class ReqPeripheralDto extends ReqDto { // Not in use.
    vehicle_type: string;
    ionum: number;
    iostatus: number;
    start_time: number;
}

export {
    ReqType,
    ReqDto,
    ReqHeartbeatDto,
    ReqPlateDto,
    ReqPeripheralDto
}