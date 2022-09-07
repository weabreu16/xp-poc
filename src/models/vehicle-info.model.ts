import { fueltype } from "../enums/fuel-type.enum";

export class Vehicle_Model_Info {

    constructor(public brand: string, public model: string, public catalogue_price: number, public fuel_type: fueltype) {}

    public get_info_string() {
        return `Brand: ${this.brand}, Model: ${this.model}`;
    }
}

