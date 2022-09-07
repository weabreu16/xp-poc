import { fueltype } from './enums/fuel-type.enum';
import { Vehicle_Model_Info } from './models/vehicle-info.model';
import { vehicle } from './models/vehicle.model';
import { Vehicle_Registry } from './vehicle-registry';

function main() {
    const registry = new Vehicle_Registry();

    registry.addModelInfo(new Vehicle_Model_Info("Tesla", "Model 3", 40000, fueltype.ELECTRIC));
    registry.addModelInfo(new Vehicle_Model_Info("BMW", "i4", 55000, fueltype.PETROL));
    
    console.log(`Status: ${registry.online_status()}`);

    const newVehicle = registry.registerVehicle("Tesla", "Model 3");

    console.log(newVehicle);
}

main();
