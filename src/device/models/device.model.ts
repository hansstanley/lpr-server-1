import { Device as DeviceModel } from "@prisma/client";
import { Base } from "src/common/models";
import { Gate } from "src/gate/models";
import { ReqHeartbeatDto } from "src/lpr/lpr1/dto";

export class Device extends Base {
    id: string;
    ip?: string;
    gateId?: number;
    name?: string;
    type?: string;
    carpark?: string;
    status?: string;
    manufacturer?: string;
    manufacturerCode?: string;
    direction?: string;
    isPrimary?: boolean;
    hasGateControl?: boolean;

    gate: Gate;
    isNew: boolean;

    constructor(id: string) {
        super();
        this.id = id;
        this.modifiedProps.push('id');
        
        this.gate = null;
        this.isNew = true;
    }

    /**
     * Factory method to generate a Device from a Prisma object.
     * 
     * @param props Device object from Prisma.
     * @returns A corresponding instance of Device.
     */
    static fromDatabase(props: DeviceModel): Device {
        let device = new Device(props.id);
        for (let prop in props) {
            if (props.hasOwnProperty(prop) && device.hasOwnProperty(prop)) {
                device[prop] = props[prop];
            }
        }

        return device;
    }

    exportChanges() {
        let changes = {};
        if (this.modifiedProps.length > 0) {
            for (const prop of this.modifiedProps) {
                changes[prop] = this[prop];
            }
            this.modifiedProps = [];
        }
        return changes;
    }
}