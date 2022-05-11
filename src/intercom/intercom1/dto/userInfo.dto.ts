class UserInfoReqDto {
    sn: string;
    personCount: number; // Number of users in device
    faceCount: number; // Number of facial images in device
}

class UserInfoResDto {
    success: boolean;
    msg?: string; // Error message, if any
    sn: string;
    data: Command[];
}

class AddUserInfoResDto extends UserInfoResDto {
    data: AddCommand[]; // Maximum 10 user records
}

class DelUserInfoResDto extends UserInfoResDto {
    data: DeleteCommand[];
}

class ClearUserInfoResDto extends UserInfoResDto {
    data: ClearCommand[];
}

class UserInfoReportDto extends UserInfoResDto {
    data: {
        id?: string, // Unique identifier
        cmd: string, // 'add', 'delete', 'clearAll'
        name?: string
    }[];
}

class UserInfoAcknowledgeDto {
    success: boolean;
    msg?: string;
}

abstract class Command {
    cmd: string;
}

class AddCommand extends Command {
    id: string; // Unique identifier
    cmd: string = 'add';
    name: string; // UTF-8
    type?: string; // 'whiteList' (default), 'blackList' or 'guest'
    icCard?: string; // IC number
    idCard?: string; // ID card number
    passPeriod?: string; // Format: HH:mm~HH:mm(,HH:mm~HH:mm,HH:mm~HH:mm)
    startTime?: string; // Format: yyyy-MM-dd HH:mm:ss
    expireTime?: string; // Format: yyyy-MM-dd HH:mm:ss
    facePicture?: string; // HTTP URL
    facePictureX1?: string; // HTTP URL
    facePictureX2?: string; // HTTP URL
}

class DeleteCommand extends Command {
    id: string; // Unique identifier
    cmd: string = 'delete';
    // Whether to delete the user's access records (default: false)
    deleteRecord?: boolean;
}

class ClearCommand extends Command {
    cmd: string = 'clearAll';
    // Whether to delete access records (default: false)
    clearRecord?: boolean;
}

export {
    UserInfoReqDto,
    UserInfoResDto,
    AddUserInfoResDto,
    DelUserInfoResDto,
    ClearUserInfoResDto,
    UserInfoReportDto,
    UserInfoAcknowledgeDto,
    AddCommand,
    DeleteCommand,
    ClearCommand
}