import { registrystatus } from "./enums/registry-status.enum";
import { Vehicle_Model_Info } from "./models/vehicle-info.model";
import { vehicle } from "./models/vehicle.model";


export class Vehicle_Registry {
    public vehicle_models: Map<string, Vehicle_Model_Info> = new Map();
    public online: boolean = true;

    public addModelInfo(modelInfo: Vehicle_Model_Info) {
        const model_key: string = [modelInfo.brand, modelInfo.model].join(',');
        this.vehicle_models.set(model_key, modelInfo);
    }

    public FindModelInfo(brand: string, model: string): Vehicle_Model_Info | undefined {
        const model_key: string = [brand, model].join(',');
        return this.vehicle_models.get(model_key);
    }

    public registerVehicle(brand: string, model: string): vehicle {
        
        const modelInfo = this.FindModelInfo(brand, model);

        if ( !modelInfo )
            throw new Error(`${brand},${model} does not exist`);

        const vehicleId = this.generateVehicleId();
        return new vehicle(vehicleId, modelInfo);
    }

    public online_status():registrystatus 
    {
        if ( !this.online ) return registrystatus.OFFLINE;

        return (this.vehicle_models.keys.length == 0) ? registrystatus.CONNECTION_ERROR : registrystatus.ONLINE;
    }

    private generateVehicleId = (): string => Date.now().toString();
}

