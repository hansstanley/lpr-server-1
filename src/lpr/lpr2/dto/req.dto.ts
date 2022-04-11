class ReqHeartbeatDto {
    heartbeat: {
        countid: number,
        timeStamp: {
            Timeval: {
                sec: number,
                usec: number
            }
        },
        serialno: string
    }
}

class ReqPlateDto {
    
}

export {
    ReqHeartbeatDto,
    ReqPlateDto
}