class MiscReqDto {
    sn: string;
    version: {
        dev?: string,
        hw?: string,
        app?: string,
        fileSys?: string,
        kernel?: string
    }
}

class MiscResDto {
    success: boolean;
    msg?: string;
    data: Command[]
}

abstract class Command {
    cmd: string;
}

class SetGateDirectionCommand extends Command {
    cmd: string = 'gateDirection';
    param: string; // 'in', 'out'
}

class SetTimeCommand extends Command {
    cmd: string = 'setTime';
    time: string; // Format: yyyy-MM-dd HH:mm:ss
}

class RebootCommand extends Command {
    cmd: string = 'reboot';
}

class SetAccessTypeCommand extends Command {
    cmd: string = 'setAccessType';
    mode: string; /* 'face', 'icCard', 'face_or_card',
        'icCard_and_Face', 'idCard_and_Face',
        'idCard_and_FaceWhiteList', 'face_or_idCardFace' */
}

class SoftwareUpdateCommand extends Command {
    cmd: string = 'upgrade';
    version: string;
    file: string; // URL to update file
    md5: string; // Update file MD5 checksum
}

class OpenGateCommand extends Command {
    cmd: string = 'openGate';
}

class SetPollIntervalCommand extends Command {
    cmd: string = 'setPollTime';
    time: number; // 5 to 300
}

class SetConfigCommand extends Command {
    cmd: string = 'setVerifyParam';
    similarThreshold?: number; // 0 to 100
    detectThreshold?: number; // 0 to 100
    liveThreshold?: number; // 0 to 100
    similarThreIdCard?: number; // 0 to 100
}

class SetImageUploadCommand extends Command {
    cmd: string = 'setSnapshotPic';
    SnapshotPic: boolean; // Default: true
}

class MiscReportDto {
    success: boolean;
    msg?: string;
    sn: string;
    data: Command[];
}

class MiscAcknowledgeDto {
    success: boolean;
    msg?: string;
}

class SetGateDirectionReport extends SetGateDirectionCommand {}

class SetTimeReport extends SetTimeCommand {}

class RebootReport extends RebootCommand {}

class SetAccessTypeReport extends SetAccessTypeCommand {}

class SoftwareUpdateReport extends SoftwareUpdateCommand {
    status: string; /* 'recCmd', 'downloadStart',
        'downloadSucc', 'downloadFail',
        'verifySucc', 'verifyFail',
        'writeSucc', 'writeFail' */
    md5Check?: string; // Actuall MD5 checksum, if mismatched
}

class SetPollIntervalReport extends SetPollIntervalCommand {}

export {
    MiscReqDto,
    MiscResDto,
    MiscReportDto,
    MiscAcknowledgeDto,
    // Commands:
    SetGateDirectionCommand,
    SetTimeCommand,
    RebootCommand,
    SetAccessTypeCommand,
    SoftwareUpdateCommand,
    OpenGateCommand,
    SetPollIntervalCommand,
    SetConfigCommand,
    SetImageUploadCommand,
    // Reports:
    SetGateDirectionReport,
    SetTimeReport,
    RebootReport,
    SetAccessTypeReport,
    SoftwareUpdateReport,
    SetPollIntervalReport
}