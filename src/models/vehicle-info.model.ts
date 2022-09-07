import { FuelType } from "../enums/fuel-type.enum";

export class VehicleModelInfo {

    constructor(
        public brand: string, 
        public model: string, 
        public catalogue_price: number, 
        public fuel_type: FuelType
    ) {}

    public getInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}`;
    }
}

