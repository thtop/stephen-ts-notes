// Name & Types
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

// Model
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

// Logic
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
