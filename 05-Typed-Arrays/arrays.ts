const carMakers = ['ford', 'toyota', 'chevy'];

const carMakers2: string[] = ['ford', 'toyota', 'chevy'];

const carMakers3: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake2: string[][] = [];

// Help with inference when extraction values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const importantDates2: (Date | string)[] = [new Date(), '2030-10-10'];

importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100); // Error
