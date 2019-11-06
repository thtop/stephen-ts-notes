class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  strarDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.strarDrivingProcess();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
