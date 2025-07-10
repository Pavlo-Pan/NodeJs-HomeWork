export class Vehicle {
    make: string;
    model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

export class Motorcycle extends Vehicle {
    type: string;
  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}


