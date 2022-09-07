import { FuelType } from './enums/fuel-type.enum';
import { VehicleModelInfo } from './models/vehicle-info.model';
import { VehicleRegistry } from './vehicle-registry';

function main() {
    const registry = new VehicleRegistry();

    registry.addModelInfo(new VehicleModelInfo("Tesla", "Model 3", 40000, FuelType.Electric));
    registry.addModelInfo(new VehicleModelInfo("BMW", "i4", 55000, FuelType.Petrol));
    
    console.log(`Status: ${registry.getOnlineStatus()}`);

    const newVehicle = registry.registerVehicle("Tesla", "Model 3");

    console.log(newVehicle);
}

main();
