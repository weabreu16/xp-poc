import { RegistryStatus } from "./enums/registry-status.enum";
import { VehicleModelInfo } from "./models/vehicle-info.model";
import { Vehicle } from "./models/vehicle.model";


export class VehicleRegistry {
    public vehicleModels: Map<string, VehicleModelInfo> = new Map();
    public online = true;

    public addModelInfo(modelInfo: VehicleModelInfo) {
        const modelKey: string = [modelInfo.brand, modelInfo.model].join(',');
        this.vehicleModels.set(modelKey, modelInfo);
    }

    public findModelInfo(brand: string, model: string): VehicleModelInfo | undefined {
        const modelKey: string = [brand, model].join(',');
        return this.vehicleModels.get(modelKey);
    }

    public registerVehicle(brand: string, model: string): Vehicle {
        
        const modelInfo = this.findModelInfo(brand, model);

        if ( !modelInfo )
            throw new Error(`${brand},${model} does not exist`);

        const vehicleId = this.generateVehicleId();
        return new Vehicle(vehicleId, modelInfo);
    }

    public getOnlineStatus(): RegistryStatus {
        if ( !this.online ) return RegistryStatus.Offline;

        return (this.vehicleModels.keys.length == 0) 
            ? RegistryStatus.ConnectionError 
            : RegistryStatus.Online;
    }

    private generateVehicleId = (): string => Date.now().toString();
}

