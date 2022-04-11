enum Query {
    ALLOW = 'ok',
    DENY = 'no'
}

enum Action {
    PROCEED = 'yes',
    ABORT = 'no'
}

class ResHeartbeatDto {
    Response_Heartbeat: {
        info: Query,
        serialData: {
            serialChannel: number,
            data: string,
            dataLen: number
        }[],
        shutoff: Query,
        snapnow: Action,
        isUpdate?: number,
        upFileUrl?: string,
        // The following are only used with LCD panels.
        showPlayQRCode?: {
            enable: number,
            urlMode: number,
            url: string,
            scond: number
        },
        audioPlay?: {
            audioMode: number,
            fee: number,
            plate: string,
            totaltime: number,
            playMode: number,
            voiceSpeed: number
        }
    };

    private constructor(
        openGate = Query.DENY,
        closeGate = Query.DENY,
        snap = Action.ABORT,
        serialData = []
    ) {
        this.Response_Heartbeat = {
            info: openGate,
            shutoff: closeGate,
            snapnow: snap,
            serialData: serialData
        };
    }

    public static acknowledge(): ResHeartbeatDto {
        return new ResHeartbeatDto();
    }
}



export {
    ResHeartbeatDto,
}