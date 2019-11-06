// Name & Types
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// Model
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

// Logic
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);
