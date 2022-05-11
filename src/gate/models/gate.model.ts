import { Project } from "src/project/models";


export class Gate {
    id: number;
    projectId?: number;
    name?: string;
    type?: string;
    isChargeable?: boolean;
    ledOnTime?: string;
    ledOffTime?: string;
    allowedTypes?: JSON;

    project: Project
}