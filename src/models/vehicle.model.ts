import { Vehicle_Model_Info } from "./vehicle-info.model";


export class vehicle {
    constructor(public vehicle_id: string, public info: Vehicle_Model_Info) {}

    public toString() {
        const info_str = this.info.get_info_string();
        return `Id: ${this.vehicle_id}, ${this.info.get_info_string()}`;
    }
}

