class ResDto {
    error_num: number;
    error_str: string;
    passwd: string;
    gpio_data: {
        ionum: string,
        action: string
    }[];
    rs485_data: {
        encodetype: string,
        data: string
    }[];
    triger_data: {
        action: string
    };
    whitelist_data: {
        Action: string,
        PlateNumber: string,
        Type: string,
        Start: string,
        End: string
    }[];

    private constructor() {
        this.error_num = 0;
        this.error_str = '';
        this.passwd = '';
        this.gpio_data = [];
        this.rs485_data = [];
        // this.triger_data = null;
        this.whitelist_data = [];
    }

    public static acknowledge(): ResDto {
        return new ResDto();
    }
}

export {
    ResDto
}