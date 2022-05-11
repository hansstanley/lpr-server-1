class QrCodeReqDto {
    sn: string;
    data: {
        content: string // QR code data
    }
}

class QrCodeResDto {
    success: boolean;
    msg?: string;
    data?: {
        opendoor?: number // open: 1, close: 2
    }
}

export {
    QrCodeReqDto,
    QrCodeResDto
}