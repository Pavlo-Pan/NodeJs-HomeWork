type Engine = {
  type: string;
  horsepower: number;
};

type Car = {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
};

export const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  engine: {
    type: "Petrol",
    horsepower: 132
  },
  year: 2020
};

export function printCarInfo(car: Car): void {
  console.log(`Make: ${car.make}, Model: ${car.model}`);
  console.log(`Engine: ${car.engine.type}, ${car.engine.horsepower} HP`);
  if (car.year) {
    console.log(`Year: ${car.year}`);
  }
}
