class PictureRecordReqDto {
    sn: string;
    id: string;
    name: string;
    regTime: string;
    type?: string; // 'idcard', 'face'
    file: unknown
}

class PictureRecordResDto {
    success: boolean;
    msg?: string;
    regPicture: string; // URL to stored image
}

class RecordReqDto {
    sn: string;
    data: {
        id: string,
        name: string,
        regTime: string,
        gateDirection: string, // 'in', 'out'
        type?: string, // 'whiteList' (default), 'blackList', 'guest'
        regType: string, /* 'face',
            'icCard', 'icCard_and_Face',
            'idCard', 'idCard_and_Face',
            'idCard_and_FaceWhitelist' */
        regPicture: string, // URL to stored image
        icCard?: string,
        idCard?: string,
        bodyTemperature?: string // deg Celcius, 0.1 precision
        IdInfo?: {
            name: string,
            nation: string,
            sex: string,
            birthday: string,
            usefulLife: string,
            issuingOrgan: string,
            idNum: string,
            address: string,
            picture: string // URL to stored image
        }
    }[];
}

class RecordResDto {
    success: boolean;
    msg?: string;
    data: {
        id: string,
        name: string,
        regTime: string
    }[];
}

export {
    PictureRecordReqDto,
    PictureRecordResDto,
    RecordReqDto,
    RecordResDto
}