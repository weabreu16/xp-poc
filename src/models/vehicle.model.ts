import { VehicleModelInfo } from "./vehicle-info.model";


export class Vehicle {
    constructor(public vehicleId: string, public info: VehicleModelInfo) {}

    public toString() {
        return `Id: ${this.vehicleId}, ${this.info.getInfo()}`;
    }
}

