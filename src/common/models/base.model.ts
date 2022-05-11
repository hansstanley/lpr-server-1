import { AccessRule, Device, DeviceStatusLog, Gate, MovementLog, Plate, Project, ProjectConfig, RegexPlate, SpecialPlate, Unit, Whitelist } from "@prisma/client";

export class Base {
    modifiedProps: string[] = [];
}