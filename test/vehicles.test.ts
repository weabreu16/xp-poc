import { VehicleModelInfo } from '../src/models/vehicle-info.model';
import { FuelType } from '../src/enums/fuel-type.enum';
import { Vehicle } from '../src/models/vehicle.model';
import { RegistryStatus } from '../src/enums/registry-status.enum';
import { VehicleRegistry } from '../src/vehicle-registry';

const vehicleModelInfo = new VehicleModelInfo("Tesla", "Model 3", 40000, FuelType.Electric);

describe('Vehicles', () => {
    describe('Vehicle Model Info', () => {
        describe('getInfo', () => {
            it("should return 'Brand: Tesla, Model: Model 3' if has Tesla and Model 3", () => {
                expect(vehicleModelInfo.getInfo()).toBe("Brand: Tesla, Model: Model 3");
            });
        });
    });

    describe('Vehicle Model', () => {
        it("should return 'Id: 1, Brand: Tesla, Model: Model 3' if receive id 1", () => {
            const vehicle = new Vehicle("1", vehicleModelInfo);
            expect(vehicle.toString()).toBe("Id: 1, Brand: Tesla, Model: Model 3");
        });
    });

    describe('Vehicle Registry', () => {
        describe('getOnlineStatus', () => {
            it("should return Online if has vehicles models", () => {
                const vehicleRegistry = new VehicleRegistry();
                vehicleRegistry.addModelInfo(vehicleModelInfo);
                expect(vehicleRegistry.getOnlineStatus()).toBe(RegistryStatus.Online);
            });

            it("should return ConnectionError if does not have vehicles models", () => {
                const vehicleRegistry = new VehicleRegistry();
                expect(vehicleRegistry.getOnlineStatus()).toBe(RegistryStatus.ConnectionError);
            });
        });

        describe('findModelInfo', () => {
            it("should return object vehicleModelInfo if was insert", () => {
                const vehicleRegistry = new VehicleRegistry();
                vehicleRegistry.addModelInfo(vehicleModelInfo);
                expect(vehicleRegistry.findModelInfo("Tesla", "Model 3")).toEqual(vehicleModelInfo);
            });

            it("should return undefined if was not insert", () => {
                const vehicleRegistry = new VehicleRegistry();
                expect(vehicleRegistry.findModelInfo("Tesla", "Model 3")).toBeUndefined();
            });
        });

        describe('registerVehicle', () => {
            it("should throw error if model info does not exist", () => {
                const vehicleRegistry = new VehicleRegistry();
                expect(() => vehicleRegistry.registerVehicle("Tesla", "Model 3")).toThrow();
            });
        });
    });
});
