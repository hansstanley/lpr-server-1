class ProjectDto {
    projectId: number;
    projectName: string;
    projectType: string;
    location: string;
    contactNumber: string;
    maCompany: string;
    equipmentManufacturer: string;
    maxLevDistance: number;

    toDbFormat(): DbProjectDto {
        return new DbProjectDto(
            this.projectId,
            this.projectName,
            this.projectType,
            this.location,
            this.contactNumber,
            this.maCompany,
            this.equipmentManufacturer,
            this.maxLevDistance
        )
    }
}

class DbProjectDto {
    project_id: number;
    project_name: string;
    project_type: string;
    location: string;
    contact_number: string;
    ma_company: string;
    equip_manu: string;
    lev_dist: number;

    constructor(
        projectId: number,
        projectName: string,
        projectType: string,
        location = '',
        contactNumber = '',
        maCompany = '',
        equipmentManufacturer = '',
        maxLevDistance = 0
    ) {
        this.project_id = projectId;
        this.project_name = projectName;
        this.project_type = projectType;
        this.location = location;
        this.contact_number = contactNumber;
        this.ma_company = maCompany;
        this.equip_manu = equipmentManufacturer;
        this.lev_dist = maxLevDistance;
    }
}

export {
    ProjectDto,
    DbProjectDto
}