export class Project {
    id: number;
    name: string;
    type: string;
    location?: string;
    contactNumber?: string;
    maCompany?: string;
    equipmentManufacturer?: string;
    accessConditions?: JSON;
    maxLevDistance?: number;
}