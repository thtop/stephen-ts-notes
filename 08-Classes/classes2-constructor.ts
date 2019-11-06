/*
class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}
*/

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// class Car extends Vehicle {
//   private drive(): void {
//     console.log('vroom');
//   }

//   strarDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const car = new Car();
// car.strarDrivingProcess();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
