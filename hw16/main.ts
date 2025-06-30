import {
  greetUser,
  printPersonInfo,
  Person,
  squreNumber,
  isEven,
  printStudentInfo,
  Student,
  logMessage,
} from "./src/export";

//work1.ts

greetUser("Pavlo");

//work2.ts
const person: Person = {
  name: "Pavlo",
  age: 33,
  city: "Kyiv",
};

printPersonInfo(person);

//work3.ts
const number: number = 5;
const squared: number = squreNumber(number);
console.log(`The square of ${number} is ${squared}.`);

//work4.ts
const number1: number = 10;
const result: boolean = isEven(number1);
console.log(`Is the number ${number1} even? ${result}.`);

const number2: number = 7;
const result2: boolean = isEven(number2);
console.log(`Is the number ${number2} even? ${result2}.`);

//work5.ts

const student: Student = {
  name: "Pavlo",
  grade: 99,
};
printStudentInfo(student);

//work6.ts
const message: string = "Hello, this is a log message!";
logMessage(message);
