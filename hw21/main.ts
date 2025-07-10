import {
  Animal,
  Dog,
  Cat,
  ColoredShape,
  ColoredCircle,
  ColoredRectangle,
  Appliance,
  WashingMachine,
  Refrigerator,
  SavingsAccount,
  CheckingAccount,
  Media,
  Audio,
  Video,
} from "./src/export";

//work1.ts
const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => {
  console.log(animal.makeSound());
});

//work2.ts
const shapes: ColoredShape[] = [
  new ColoredCircle(5, "red"),
  new ColoredRectangle(4, 6, "blue"),
];

shapes.forEach((shape) => {
  console.log(`Color: ${shape.color}, Area: ${shape.calculateArea()}`);
});
//work3.ts

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliances.forEach((app) => {
  app.turnOn();
  app.turnOff();
});
//work4.ts
const saving = new SavingsAccount(1000, 0.05);
saving.deposit(200); // +5% interest
saving.withdraw(300);
console.log("Savings balance:", saving.balance);

const checking = new CheckingAccount(500, 10);
checking.deposit(100);
checking.withdraw(200); // -200 -10
console.log("Checking balance:", checking.balance);
//work5.ts

const mediaArray: Media[] = [new Audio(), new Video()];

mediaArray.forEach((media) => {
  media.play();
});
